import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.png'],
			registerType: 'autoUpdate',
			manifest: {
				name: 'Troldspejlet',
				short_name: 'Troldspejlet',
				description: 'Et magisk spejl',
				theme_color: '#8a437a',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		})
	]
})
