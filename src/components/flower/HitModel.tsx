import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'

export const HitModel = () => {
	const { scene } = useGLTF('models/flower.gltf')
	return (
		<>
			<OrbitControls />
			<PerspectiveCamera makeDefault fov={20} position={[1, 2, 3]} />

			<ambientLight />
			<primitive object={scene} />

			{/* {isPresenting && (
			
			)}

			{!isPresenting && (
				<mesh>
					<boxGeometry args={[1, 1, 1]} />
					<meshStandardMaterial color={'blue'} />
				</mesh>
			)} */}
		</>
	)
}
