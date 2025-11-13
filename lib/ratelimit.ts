import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Create a new ratelimiter, that allows 3 requests per 10 minutes
export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "10 m"),
  analytics: true,
});

// Simple in-memory rate limiting as fallback
const requests = new Map();

export function simpleRateLimit(key: string, maxRequests: number = 3, windowSeconds: number = 600): boolean {
  const now = Date.now();
  const windowMs = windowSeconds * 1000;

  if (!requests.has(key)) {
    requests.set(key, []);
  }

  const userRequests = requests.get(key);
  
  // Remove old requests outside the window
  const validRequests = userRequests.filter((time: number) => now - time < windowMs);
  
  if (validRequests.length >= maxRequests) {
    return false;
  }
  
  validRequests.push(now);
  requests.set(key, validRequests);
  
  return true;
}