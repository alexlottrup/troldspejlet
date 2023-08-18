import { useGLTF } from '@react-three/drei'
import { Vector3 } from 'three'

interface ModelProps {
	position?: Vector3
}
export const Flower = ({ position }: ModelProps) => {
	// const { scene } = useLoader(GLTFLoader, 'models/brush.gltf')
	const { scene } = useGLTF('models/brush.gltf') // Alternative to GLTFLoader

	return <primitive position={position} object={scene} />
}
