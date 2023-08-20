import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'

export const HitModel = () => {
	const { scene } = useGLTF('models/model.gltf')
	return (
		<>
			<OrbitControls />
			<PerspectiveCamera makeDefault fov={20} position={[10, 10, 5]} />

			<ambientLight />
			<primitive object={scene} position={[2, 1, 1]} />

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
