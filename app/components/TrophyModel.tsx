"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';
// Make sure this hook is imported
import { useIsMobile } from '@/app/hooks/useIsMobile';

type ModelProps = {
    modelPath: string;
    [key: string]: any;
};

function Model({ modelPath, ...props }: ModelProps) {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} {...props} />;
}
type TrophyModelProps = {
    modelPath: string;
};

export default function TrophyModel({ modelPath }: TrophyModelProps) {
    const isMobile = useIsMobile();

    return (
        <div className="h-full w-full">
            <Canvas
                className="h-full w-full"
                // Make the canvas non-interactive on mobile so touch events pass through
                style={{
                    touchAction: 'auto',
                    pointerEvents: isMobile ? 'none' : 'auto'
                }}
                camera={{ fov: 45, position: [0, 0, 12] }}
            >
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                        <group rotation={[0, 0, -0.3]}>
                            <Model
                                modelPath={modelPath}
                            />
                        </group>
                    </Stage>

                    <OrbitControls
                        autoRotate
                        autoRotateSpeed={4.0}
                        enabled={true}           // Keep enabled for auto-rotate
                        enableRotate={!isMobile} // Disable user rotation on mobile
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI / 2}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}