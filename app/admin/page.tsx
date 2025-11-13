"use client";

import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [registrations, setRegistrations] = useState<any>({ bgmi: [], valorant: [] });
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'bgmi' | 'valorant'>('bgmi');

  useEffect(() => {
    const authenticate = async () => {
      const username = prompt('Username:');
      const password = prompt('Password:');
      
      if (!username || !password) {
        alert('Username and password required');
        return;
      }
      
      try {
        console.log('Attempting login...');
        // Login to get JWT token
        const loginRes = await fetch('/api/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });
        
        console.log('Login response:', loginRes.status);
        
        if (!loginRes.ok) {
          const errorText = await loginRes.text();
          console.error('Login failed:', errorText);
          alert(`Login failed: ${errorText}`);
          return;
        }
        
        console.log('Login successful, fetching data...');
        // Fetch data with JWT cookie
        const dataRes = await fetch('/api/admin/registrations');
        
        console.log('Data response:', dataRes.status);
        
        if (!dataRes.ok) {
          const errorText = await dataRes.text();
          console.error('Data fetch failed:', errorText);
          alert(`Data fetch failed: ${errorText}`);
          return;
        }
        
        const data = await dataRes.json();
        console.log('Data received:', data);
        setRegistrations(data);
        setAuthenticated(true);
      } catch (error) {
        console.error('Network error:', error);
        alert(`Network error: ${error}`);
      }
    };
    
    authenticate();
  }, []);
  
  if (!authenticated) {
    return (
      <div className="p-8 bg-gray-900 min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Authenticating...</h1>
          <p>Please check the prompts and enter your credentials.</p>
        </div>
      </div>
    );
  }

  const ImageViewer = ({ imageData }: { imageData: any }) => {
    if (!imageData?.data) return <span>No image</span>;
    
    return (
      <img 
        src={`data:${imageData.type};base64,${imageData.data}`}
        alt={imageData.name}
        className="max-w-xs max-h-48 object-contain border rounded"
      />
    );
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl mb-8">Admin - Registrations</h1>
      
      <div className="mb-6">
        <button
          onClick={() => setActiveTab('bgmi')}
          className={`px-6 py-2 mr-4 rounded ${activeTab === 'bgmi' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          BGMI ({registrations.bgmi?.length || 0})
        </button>
        <button
          onClick={() => setActiveTab('valorant')}
          className={`px-6 py-2 rounded ${activeTab === 'valorant' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          Valorant ({registrations.valorant?.length || 0})
        </button>
      </div>
      
      <div>
        {activeTab === 'bgmi' && (
          <section>
            <h2 className="text-2xl mb-4">BGMI Registrations</h2>
            {registrations.bgmi?.map((reg: any, i: number) => (
              <div key={i} className="bg-gray-800 p-4 mb-4 rounded">
                <h3 className="text-xl mb-2">{reg.teamName}</h3>
                <p>College: {reg.collegeName}</p>
                <p>Leader: {reg.leaderName}</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold">Payment Screenshot:</h4>
                    <ImageViewer imageData={reg.paymentProof} />
                  </div>
                  <div>
                    <h4 className="font-bold">College ID:</h4>
                    <ImageViewer imageData={reg.collegeId} />
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
        
        {activeTab === 'valorant' && (
          <section>
            <h2 className="text-2xl mb-4">Valorant Registrations</h2>
            {registrations.valorant?.map((reg: any, i: number) => (
              <div key={i} className="bg-gray-800 p-4 mb-4 rounded">
                <h3 className="text-xl mb-2">{reg.teamName}</h3>
                <p>College: {reg.collegeName}</p>
                <p>Leader: {reg.leaderName}</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold">Payment Screenshot:</h4>
                    <ImageViewer imageData={reg.paymentProof} />
                  </div>
                  <div>
                    <h4 className="font-bold">College ID:</h4>
                    <ImageViewer imageData={reg.collegeId} />
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}