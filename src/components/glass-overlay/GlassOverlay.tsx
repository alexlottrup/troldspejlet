import styles from './GlassOverlay.module.scss'

const GlassOverlay = () => {
	return (
		<div className={styles.layout}>
			<div className={styles.frame}>
				<div className={styles.glass}></div>
			</div>
		</div>
	)
}

export default GlassOverlay
