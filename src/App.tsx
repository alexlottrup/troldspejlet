import './App.css'
import GlassOverlay from './components/glass-overlay/GlassOverlay'
import { XrCubeContainer } from './components/xr-cube/XrCubeContainer'

function App() {
	return (
		<>
			<XrCubeContainer />
			<GlassOverlay />
		</>
	)
}

export default App
