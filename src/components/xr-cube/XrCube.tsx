import { useFrame } from '@react-three/fiber'
import { doc } from 'firebase/firestore'
import { useRef } from 'react'
import { db } from '../../configs/firebaseconfig'
import { useDocument } from 'react-firebase-hooks/firestore'

export const XrCube = () => {
	const [value] = useDocument(doc(db, 'control', 'settings'))
	const cubeRef = useRef<THREE.Mesh>(null)
	useFrame((_state, delta) => {
		if (!cubeRef.current) return
		cubeRef.current.rotation.x += delta
		cubeRef.current.rotation.y += delta
	})

	const showCube = value?.data()?.showCube

	return (
		<>
			{showCube && (
				<mesh ref={cubeRef} position-z={-5}>
					<boxGeometry args={[1, 1, 1]} />
					<meshStandardMaterial color={'hotpink'} />
				</mesh>
			)}
		</>
	)
}
