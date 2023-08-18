import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { AppShell, MantineProvider } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<AppShell classNames={{ main: 'app-shell-main' }} padding={0}>
				<App />
			</AppShell>
		</MantineProvider>
	</React.StrictMode>
)
