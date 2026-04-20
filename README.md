# Kennedy Portfolio

A redesigned portfolio built with Next.js App Router. The site presents Kennedy's work across full-stack development, cybersecurity, and graphic design with a stronger visual system, smoother animations, and a cleaner content structure.

## Stack

- Next.js
- React 19
- CSS with a custom design system
- EmailJS browser SDK for the contact form

## Local Development

```bash
npm install
npm run dev
```

`npm run dev` uses the Webpack dev server for better stability on Windows. If you want to try Turbopack again later, use `npm run dev:turbo`.

## Scripts

- `npm run dev` starts the development server
- `npm run dev:turbo` starts the Turbopack dev server
- `npm run build` creates a production build
- `npm run start` runs the production server
- `npm run lint` checks the codebase with ESLint
- `npm run clean` removes the local `.next` cache manually

## Notes

- Remote images are loaded from Cloudinary through the Next.js image pipeline.
- The contact form supports `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, and falls back to the previous hardcoded values if those variables are not set.
