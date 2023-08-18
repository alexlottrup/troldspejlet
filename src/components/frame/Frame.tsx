import styles from './Frame.module.scss'

const Frame = () => {
	return (
		<div className={styles.frame}>
			<div className={styles.fit}>
				<div className={styles.ripple}></div>
			</div>
		</div>
	)
}

export default Frame
