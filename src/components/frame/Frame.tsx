import { Image } from '@mantine/core'
import styles from './Frame.module.scss'

const Frame = () => (
	<div className={styles.frame}>
		<div className={styles.fit}>
			<Image radius='md' src='./pulse.gif' fit={'contain'} />
			{/* <div className={styles.ripple}></div> */}
		</div>
	</div>
)

export default Frame
