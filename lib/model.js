import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

const draco = new DRACOLoader();
draco.setDecoderConfig({ type: 'js' });
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.setDRACOLoader( draco );

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'moon'
        
        const box = new THREE.Box3().setFromObject(obj)
        const center = box.getCenter(new THREE.Vector3())
        
        const moonGroup = new THREE.Group()
        moonGroup.position.y = 0
        moonGroup.position.x = 0
        moonGroup.position.z = 0
        
        obj.position.sub(center)
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        moonGroup.add(obj)
        scene.add(moonGroup)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(moonGroup)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
