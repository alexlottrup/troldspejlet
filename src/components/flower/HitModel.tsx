import { OrbitControls } from '@react-three/drei'

export const HitModel = () => {
	return (
		<>
			<OrbitControls />
			{/* <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} /> */}
			{/* <color attach='background' args={[0, 0, 0]} />

			<spotLight
				color={[1, 0.25, 0.7]}
				intensity={1.5}
				position={[5, 5, 0]}
				angle={0.6}
				penumbra={0.5}
				castShadow
				shadow-bias={-0.0001}
			/>

			<spotLight
				color={[0.14, 0.5, 1]}
				intensity={2}
				position={[-5, 5, 0]}
				angle={0.6}
				penumbra={0.5}
				castShadow
				shadow-bias={-0.0001}
			/> */}

			<ambientLight />
			<mesh>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color={'tomato'} />
			</mesh>
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
