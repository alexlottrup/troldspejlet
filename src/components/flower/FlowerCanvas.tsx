import { Canvas } from '@react-three/fiber'
import { ARButton, XR, startSession, stopSession } from '@react-three/xr'
import { HitModel } from './HitModel'
import { Suspense, useEffect } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore'
import { db } from '../../configs/firebaseconfig'

export const FlowerCanvas = () => {
	interface Event {
		name: string
		active: boolean
	}

	const [snapshot] = useCollection(collection(db, 'events'))

	const events = snapshot?.docs.map((doc) => doc.data()) as Event[]
	const isActive = events?.map((events) => events.active).includes(true)
	console.log(isActive)

	useEffect(() => {
		if (isActive) startSession('immersive-ar', {})
		if (!isActive) {
			stopSession()
		}
	}, [isActive])

	return (
		<>
			<ARButton>Activate</ARButton>
			<Suspense fallback={null}>
				<Canvas shadows>
					<XR>
						<HitModel />
					</XR>
				</Canvas>
			</Suspense>
		</>
	)
}
