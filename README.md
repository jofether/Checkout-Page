# ShopPay Checkout (Vite + React + Tailwind)

Split-screen checkout layout with a scrollable form on the left and a sticky order summary on desktop.

## Setup
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`
4. Preview production build: `npm run preview`

## Notes
- Tailwind is configured via `tailwind.config.js` and `postcss.config.js`.
- The summary column is sticky on large screens (`lg:sticky lg:top-6`). Remove `sticky` if you need it to scroll.
