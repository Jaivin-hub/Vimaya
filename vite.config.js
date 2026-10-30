import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({server:{allowedHosts:['terminal.local']},plugins:[react(),tailwindcss(),VitePWA({registerType:'autoUpdate',includeAssets:['images/*.webp','icon-192.png','icon-512.png'],manifest:{name:'Vimaya by Remya',short_name:'Vimaya',description:'Sarees, statement jhumkas and a world of colour.',theme_color:'#943d64',background_color:'#fff9fb',display:'standalone',start_url:'/',scope:'/',icons:[{src:'/icon-192.png',sizes:'192x192',type:'image/png'},{src:'/icon-512.png',sizes:'512x512',type:'image/png',purpose:'any maskable'}]},workbox:{globPatterns:['**/*.{js,css,html,png,webp,svg,woff2}'],navigateFallback:'index.html'}})]});
