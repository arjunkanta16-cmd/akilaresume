# Peddagolla Akhila Resume Website

Premium, recruiter-friendly resume website built with Next.js, Tailwind CSS, Framer Motion, and semantic HTML.

## Folder Structure

```text
.
|-- app
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components
|   |-- contact-form.tsx
|   |-- navbar.tsx
|   |-- section-heading.tsx
|   |-- section-reveal.tsx
|   `-- theme-toggle.tsx
|-- lib
|   `-- data.ts
|-- public
|   `-- resume
|       `-- peddagolla-akhila-resume.pdf
|-- next.config.ts
|-- next-env.d.ts
|-- package.json
|-- postcss.config.js
|-- tailwind.config.ts
`-- tsconfig.json
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for Production

```bash
npm run build
npm run start
```

## Deployment

### Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Deploy with the default Next.js build settings.

### Netlify

1. Connect the repository in Netlify.
2. Set build command to `npm run build`.
3. Set publish directory to `.next`.

### Static Resume Asset

The source PDF is included in `public/resume/peddagolla-akhila-resume.pdf` and is linked from the hero CTA.

