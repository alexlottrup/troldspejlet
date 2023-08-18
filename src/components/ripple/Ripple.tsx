import styles from './Ripple.module.scss'

const Ripple = () => {
	return (
		<div className={styles.svg}>
			<svg width='100vw' height='100vh' viewBox='0 0 200 200' version='1.1'>
				<defs>
					<radialGradient
						id='rg'
						cx='0.5'
						cy='0.5'
						r='0.25'
						spreadMethod='repeat'
					>
						<stop offset='0' stopColor='hsla(0, 95%, 25%, 1)'>
							<animate
								id='anim'
								attributeName='stopOpacity'
								calcMode='linear'
								begin='0s'
								dur='6s'
								values='0;1;0'
								repeatCount='indefinite'
							/>
						</stop>
						<stop stopColor='hsla(0, 95%, 25%, 1)'>
							<animate
								attributeName='offset'
								calcMode='linear'
								begin='0s'
								dur='6s'
								values='0;0;0.5'
								keyTimes='0;0.5;1'
								repeatCount='indefinite'
							/>
							<animate
								attributeName='stopOpacity'
								calcMode='linear'
								begin='0s'
								dur='6s'
								values='0;1;1'
								keyTimes='0;0.5;1'
								repeatCount='indefinite'
							/>
						</stop>
						<stop stopColor='hsla(0, 95%, 25%, 1)' stopOpacity='0'>
							<animate
								attributeName='offset'
								calcMode='linear'
								begin='0s'
								dur='6s'
								values='0;1'
								keyTimes='0;1'
								repeatCount='indefinite'
							/>
						</stop>
						<stop stopColor='hsla(0, 95%, 25%, 1)'>
							<animate
								attributeName='offset'
								calcMode='linear'
								begin='0s'
								dur='6s'
								values='0.5;1;1'
								keyTimes='0;0.5;1'
								repeatCount='indefinite'
							/>
							<animate
								attributeName='stopOpacity'
								calcMode='linear'
								begin='0s'
								dur='6s'
								values='1;1;0'
								keyTimes='0;0.5;1'
								repeatCount='indefinite'
							/>
						</stop>
						<stop offset='1' stopColor='hsla(0, 95%, 25%, 1)'>
							<animate
								attributeName='stopOpacity'
								calcMode='linear'
								begin='0s'
								dur='6s'
								values='0;1;0'
								keyTimes='0;0.5;1'
								repeatCount='indefinite'
							/>
						</stop>
					</radialGradient>
					<radialGradient id='rg2' cx='0.5' cy='0.5' r='1'>
						<stop offset='0%' stopOpacity='0' />
						<stop offset='100%' stopOpacity='1' />
					</radialGradient>
					<filter
						id='sazanami'
						filterUnits='userSpaceOnUse'
						x='0'
						y='0'
						width='200'
						height='200'
					>
						<feImage href='#wave' result='wave' />
						<feGaussianBlur in='wave' stdDeviation='8' result='wave2' />
						<feDiffuseLighting
							in='wave2'
							lightingColor='hsla(255,255%,255%,1)'
							surfaceScale='50'
							diffuseConstant='0.3'
							result='wave3'
						>
							<feDistantLight azimuth='-90' elevation='60' />
						</feDiffuseLighting>
						<feDisplacementMap
							in='SourceGraphic'
							in2='wave2'
							scale='-10'
							result='wave4'
						/>
						<feBlend in='wave3' in2='wave4' mode='screen' />
					</filter>
					<filter
						id='sazanamiF'
						filterUnits='userSpaceOnUse'
						x='0'
						y='0'
						width='400'
						height='200'
					>
						<feOffset
							in='SourceGraphic'
							result='wave'
							dx='-200'
							x='0'
							y='0'
							width='200'
							height='200'
						/>
						<feGaussianBlur
							in='wave'
							stdDeviation='8'
							result='wave2'
							x='0'
							y='0'
							width='200'
							height='200'
						/>
						<feDiffuseLighting
							in='wave2'
							lightingColor='hsla(255,255%,255%,1)'
							surfaceScale='50'
							diffuseConstant='0.3'
							result='wave3'
							x='0'
							y='0'
							width='200'
							height='200'
						>
							<feDistantLight azimuth='-90' elevation='60' />
						</feDiffuseLighting>
						<feDisplacementMap
							in='SourceGraphic'
							in2='wave2'
							scale='-10'
							result='wave4'
							x='0'
							y='0'
							width='200'
							height='200'
						/>
						<feBlend
							in='wave3'
							in2='wave4'
							mode='screen'
							x='0'
							y='0'
							width='200'
							height='200'
						/>
					</filter>
					<g id='wave'>
						<rect width='200' height='200' fill='url(#rg)' />
						<rect width='200' height='200' fill='url(#rg2)' />
					</g>
				</defs>
				<switch>
					<g
						filter='url(#sazanami)'
						requiredFeatures='http://www.w3.org/TR/SVG11/feature#SVG-animation'
					>
						<rect
							x='0'
							y='0'
							width='100%'
							height='100%'
							fill='hsla(221, 95%, 25%, 1)'
						/>
					</g>
					<g filter='url(#sazanamiF)'>
						<rect
							x='0'
							y='0'
							width='200'
							height='200'
							fill='hsla(221, 95%, 25%, 1)'
						/>

						<use x='200' y='0' href='#wave' />
					</g>
				</switch>
			</svg>
		</div>
	)
}

export default Ripple
