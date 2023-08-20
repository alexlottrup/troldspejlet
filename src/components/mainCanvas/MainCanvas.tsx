import { Canvas } from '@react-three/fiber'
import { ARButton, XR, startSession, stopSession } from '@react-three/xr'
import { Suspense, useEffect } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore'
import { db } from '../../configs/firebaseconfig'
import { HitModel } from '../flower/HitModel'
import Frame from '../frame/Frame'

export const MainCanvas = () => {
	interface Event {
		name: string
		active: boolean
	}

	const [snapshot] = useCollection(collection(db, 'events'))
	const events = snapshot?.docs.map((doc) => doc.data()) as Event[]
	const isActive = events?.map((events) => events.active).includes(true)

	// useEffect(() => {
	// 	if (isActive)
	// 		startSession('immersive-ar', { requiredFeatures: ['hit-test'] })
	// 	if (!isActive) {
	// 		stopSession()
	// 	}
	// }, [isActive])

	return (
		<>
			{isActive ? (
				<Suspense fallback={null}>
					<ARButton />
					<Canvas>
						<XR>
							<HitModel />
						</XR>
					</Canvas>
				</Suspense>
			) : (
				<Frame />
			)}
		</>
	)
}
