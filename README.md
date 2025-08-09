### Pankaj Kumar — Portfolio (Next.js)

Built with Next.js 15, React 19, Tailwind CSS v4, Framer Motion, and next-themes. Authored with help from GPT‑5.

This is a modern, responsive developer portfolio showcasing About, Experience, Skills, Projects, and Contact sections with smooth in‑view animations and a polished light/dark theme toggle.

### Features
- **Modern UI**: Tailwind CSS v4, sensible defaults, and clean layout.
- **Animated theme toggle**: Smooth light/dark transition overlay using Framer Motion + next-themes.
- **Section reveals**: Subtle motion when sections enter the viewport.
- **Responsive**: Mobile‑first design across all sections.
- **Easy customization**: Edit a few files to change content and styling.

### Tech stack
- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS v4
- **Animations**: Framer Motion
- **Theming**: next-themes (class strategy)

### Getting started
Prerequisites:
- Node.js 20+ (recommended)
- npm 10+ (this repo uses `package-lock.json`)

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

### Project structure
```
src/
  app/
    globals.css       # Theme tokens, utilities, effects
    layout.tsx        # Metadata, fonts, ThemeProvider
    page.tsx          # All sections (Hero, About, Experience, Skills, Projects, Contact)
```

### Customize content
- **Name, headline, social links, resume**: Update the Hero section and links in `src/app/page.tsx`.
- **About, Experience, Skills, Projects**: Edit copy and arrays in `src/app/page.tsx`.
- **SEO metadata / title**: Update `metadata` in `src/app/layout.tsx`.
- **Theme colors**: Tweak CSS custom properties in `src/app/globals.css`.

For example, update site metadata in `src/app/layout.tsx`:

```startLine:endLine:src/app/layout.tsx
16: export const metadata: Metadata = {
17:   title: "Pankaj Kumar — Full‑stack Developer",
18:   description:
19:     "Portfolio of Pankaj Kumar, a full‑stack developer specializing in Next.js, Express.js, and TypeScript.",
20: };
```

And adjust theme tokens in `src/app/globals.css`:

```startLine:endLine:src/app/globals.css
4: :root {
5:   --bg: 255 255 255;
6:   --fg: 15 23 42;
7:   --muted: 71 85 105;
8:   --accent: 37 99 235;
9:   --accent-contrast: 255 255 255;
10: }
```

### Available scripts
- **dev**: `next dev --turbopack`
- **build**: `next build`
- **start**: `next start`
- **lint**: `next lint`

### Deployment
- **Vercel (recommended)**: Import the repo in Vercel, set framework to Next.js. No extra config needed.
- **Self‑host**:
  - Build: `npm run build`
  - Start: `npm start` (ensure a compatible Node.js runtime is available)

### Notes
- Uses the App Router and React Server Components by default.
- The theme toggle uses a page overlay for smooth transitions; you can adjust duration/easing in `src/app/page.tsx`.

### Credits
- Designed and built by Pankaj Kumar.
- Generated and refined with the assistance of GPT‑5.


