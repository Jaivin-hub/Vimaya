# Vimaya by Remya
React + Vite + Tailwind CSS v4 static showcase with an offline-ready PWA.

## Run
Use Node.js 20.19+ (or Node.js 22).
```
npm install
npm run dev
npm run build
npm run preview
```
Deploy the generated `dist` folder to an HTTPS static host. Hash routing keeps the collection route compatible with simple static hosting. No backend or paid API is required.

## Edit the collection
Products, display names, colours and reference mappings are in `src/products.json`. Contact links and UI are in `src/main.jsx`. Images live in `public/images`. The catalogue includes 21 independent AI-styled product images (16 jewellery pairs and 5 saree colours), with original-photo comparison. Showcase names and codes are descriptive, not verified supplier SKUs. Saree details and listed price come from the supplied post; current stock and prices must be confirmed by the business. See PRODUCTS.md for the full inventory and product-image-prompts.json for generation prompts.

## PWA
`vite-plugin-pwa` generates the manifest and service worker at production build time. App shell and local images are precached. Installation requires HTTPS or localhost and browser support. First load must be online; external Instagram and WhatsApp links need internet. Use `npm run build` and `npm run preview` to test offline caching. Favourites are stored only in the current browser. The app auto-updates its service worker.

## Ordering
Enquiry buttons open a prefilled WhatsApp message to the number in the provided Instagram bio, +91 9072301300. They do not send a message automatically. No checkout or payment collection is implemented.
