import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Model as ComputerModel } from '../3D/EditedComputer';

const Right = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full h-full"
        >
            <Canvas
                shadows
                camera={{ position: [10, 5, 15], fov: 45 }}
                style={{
                    background: 'transparent',
                    width: '100%',
                    height: '400px'
                }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight
                        position={[5, 10, 5]}
                        intensity={1}
                        castShadow
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                    />
                    <pointLight position={[10, 10, 10]} intensity={0.5} />

                    <ComputerModel
                        scale={6}
                        position={[-7, -5, 0]}
                    />

                    <Environment preset="city" />

                    {/* eslint-disable-next-line react/no-unknown-property */}
                    <hemisphereLight intensity={0.15} groundColor="black" />
                    <spotLight
                        position={[10, 10, 10]}
                        intensity={1}
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                    />

                    <OrbitControls
                        minAzimuthAngle={-Math.PI / 4}
                        maxAzimuthAngle={Math.PI / 4}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI - Math.PI / 6}
                        enableDamping={true}
                        dampingFactor={0.05}
                        enablePan={false}
                        enableZoom={false}
                        autoRotate
                        autoRotateSpeed={1}
                    />
                </Suspense>
            </Canvas>
        </motion.div>
    );
};

export default Right;