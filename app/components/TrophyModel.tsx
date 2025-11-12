"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';

type ModelProps = {
    modelPath: string;
    [key: string]: any; // Allows other props like 'scale', 'position', etc.
};

function Model({ modelPath, ...props }: ModelProps) {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} {...props} />;
}
type TrophyModelProps = {
    modelPath: string;
};

export default function TrophyModel({ modelPath }: TrophyModelProps) {
    return (
        <div className="h-full w-full pointer-events-none md:pointer-events-auto">
            <Canvas camera={{ fov: 45, position: [0, 0, 12] }}>
                <Suspense fallback={null}>

                    <Stage environment="city" intensity={0.6}>

                        {/* --- THIS IS THE CHANGE --- */}
                        {/* We wrap the Model in a <group> and rotate it on the Y-axis */}
                        {/* Rotation is [x, y, z] in radians. 0.3 is about 17 degrees. */}
                        <group rotation={[0, 0, -0.3]}>
                            <Model
                                modelPath={modelPath}
                            />
                        </group>
                        {/* --- END OF CHANGE --- */}

                    </Stage>

                    <OrbitControls
                        autoRotate
                        autoRotateSpeed={4.0}
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