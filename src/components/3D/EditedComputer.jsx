import React, { useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

/* eslint-disable react/no-unknown-property */

export function Model(props) {
  // Load the model
  const { nodes, materials } = useGLTF('/models/editedComputer.gltf');
  
  // Load the LinkedIn screenshot texture
  const linkedInTexture = useTexture('/models/LinkedinSS.png');
  
  // Update materials when loaded
  useEffect(() => {
    if (materials && materials.LinkedinSS) {
      // Ensure the material is properly configured
      const material = materials.LinkedinSS;
      material.map = linkedInTexture;
      material.transparent = true;
      material.alphaTest = 0.1;
      material.depthWrite = false;
      material.needsUpdate = true;
    }
  }, [materials, linkedInTexture]);
  
  // Show loading state
  if (!nodes || !materials) {
    return null;
  }

  return (
    <group {...props}>
      {/* Main model */}
      <group scale={.6}>
        {/* Computer model */}
        <primitive object={nodes.Scene || nodes.scene} />
        
        {/* LinkedIn SS - Manually position */}
        {nodes.LinkedinSS && materials.LinkedinSS && (
          <mesh 
            geometry={nodes.LinkedinSS.geometry}
            material={materials.LinkedinSS}
            position={[2.044, 1.66, -.532]}  // Adjust position (X, Y, Z)
            rotation={[Math.PI / 2 , Math.PI, Math.PI]}      // Adjust rotation (X, Y, Z in radians)
            scale={[1.58, 7, 1.52]}     // Adjust scale (width, height, depth)
          />
        )}
      </group>
    </group>
  );
}

// Preload assets
useGLTF.preload('/models/editedComputer.gltf');
