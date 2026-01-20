import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Room } from '../3D/Room';

const HeroRight = () => {
    return (

        <motion.div

            className="w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="w-full h-full" style={{ cursor: 'grab' }}>
                <Canvas
                    shadows
                    camera={{ position: [20, 8, 15], fov: 70 }}
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

                        <Room
                            scale={3.2}
                            position={[-2, -6, 0]}
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
                            maxAzimuthAngle={Math.PI / 2}
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
            </div>
        </motion.div>

    );
};

export default HeroRight;
