module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': ['error', { 
      ignore: [
        // Common Three.js properties
        'object', 'intensity', 'position', 'rotation', 'scale',
        'castShadow', 'receiveShadow', 'fog', 'visible', 'args',
        'attach', 'color', 'map', 'geometry', 'material', 'name',
        'userData', 'type', 'id', 'uuid', 'parent', 'children',
        'up', 'matrix', 'matrixWorld', 'matrixWorldNeedsUpdate',
        'layers', 'matrixAutoUpdate', 'matrixWorldAutoUpdate',
        'renderOrder', 'animations', 'fov', 'near', 'far',
        'lookAt', 'quaternion', 'morphTargetInfluences',
        'morphTargetDictionary', 'morphTargetInfluences',
        'morphTargetDictionary', 'morphNormals', 'morphAttributes',
        
        // Shader and material properties
        'uniforms', 'vertexShader', 'fragmentShader', 'defines',
        'side', 'opacity', 'transparent', 'blending', 'blendSrc',
        'blendDst', 'blendEquation', 'depthTest', 'depthWrite',
        'polygonOffset', 'polygonOffsetFactor', 'polygonOffsetUnits',
        'alphaTest', 'premultipliedAlpha', 'wireframe', 'wireframeLinewidth',
        
        // Light properties
        'color', 'intensity', 'distance', 'decay', 'penumbra', 'angle',
        
        // Camera properties
        'aspect', 'filmGauge', 'filmOffset', 'focus', 'filmOffset',
        'view', 'zoom', 'left', 'right', 'top', 'bottom',
        
        // Shadow properties
        'shadow-mapSize-width', 'shadow-mapSize-height',
        'shadow-bias', 'shadow-normalBias', 'shadow-radius',
        'shadow-camera-near', 'shadow-camera-far', 'shadow-camera-fov',
        'shadow-camera-visible', 'shadow-camera-left', 'shadow-camera-right',
        'shadow-camera-top', 'shadow-camera-bottom',
        
        // Geometry properties
        'vertices', 'faces', 'faceVertexUvs', 'morphTargets', 'skinWeights',
        'skinIndices', 'lineDistances', 'boundingBox', 'boundingSphere',
        
        // BufferGeometry properties
        'attributes', 'index', 'boundingBox', 'boundingSphere',
        'drawRange', 'groups', 'morphAttributes', 'morphTargetsRelative',
        
        // Animation properties
        'duration', 'tracks', 'uuid', 'blendMode', 'time', 'timeScale',
        
        // Object3D properties
        'matrixWorldNeedsUpdate', 'modelViewMatrix', 'normalMatrix',
        'projectionMatrix', 'projectionMatrixInverse', 'viewMatrix',
        'viewMatrixInverse', 'normalMatrix', 'modelViewMatrix',
        'position', 'rotation', 'quaternion', 'scale', 'up', 'matrix',
        'matrixWorld', 'matrixAutoUpdate', 'matrixWorldNeedsUpdate',
        
        // Add any other Three.js properties you encounter
        'dispose', 'update', 'updateMatrix', 'updateMatrixWorld',
        'applyMatrix', 'applyQuaternion', 'setRotationFromAxisAngle',
        'setRotationFromEuler', 'setRotationFromMatrix',
        'setRotationFromQuaternion', 'rotateOnAxis', 'rotateOnWorldAxis',
        'rotateX', 'rotateY', 'rotateZ', 'translateOnAxis', 'translateX',
        'translateY', 'translateZ', 'localToWorld', 'worldToLocal',
        'lookAt', 'add', 'remove', 'getObjectById', 'getObjectByName',
        'getObjectByProperty', 'getWorldPosition', 'getWorldQuaternion',
        'getWorldScale', 'getWorldDirection', 'raycast', 'traverse',
        'traverseVisible', 'traverseAncestors', 'updateMatrix',
        'updateMatrixWorld', 'clone', 'copy', 'toJSON'
      ] 
    }],
    'no-unused-vars': ['warn', { 'varsIgnorePattern': '^React$' }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
