# TripVenture Connect

TripVenture Connect is an AI-powered travel discovery web app that helps travelers find and book events, activities, and destinations worldwide. Originally scaffolded with Lovable, it is a client-side React + TypeScript single-page application — no backend, no database, no login.

## Features

- **Hero search experience** — landing page with product, activity, and accommodation type pickers
- **Discover** — browse concerts, sports, theater, and other events around the world
- **Destinations** — destination cards with detail views (`/destinations/:id`)
- **Virtual assistant section** — AI-travel-companion themed UI blocks
- **Full shadcn/ui component library** — dialogs, drawers, carousels, calendars, charts, forms, toasts
- Dark/light theme support via `next-themes`

## Tech stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite 5
- **Routing:** react-router-dom (BrowserRouter)
- **UI:** shadcn/ui (Radix primitives), Tailwind CSS 3, lucide-react icons
- **State/data:** @tanstack/react-query, react-hook-form + zod

## Quick start

Requirements: Node.js 18+ and npm.

```sh
npm install
npm run dev        # start dev server (default: http://localhost:8080)
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  main.tsx              # entry point
  App.tsx               # router + providers
  pages/                # Index, Discover, Destinations, NotFound
  components/
    home/               # hero, features, destinations/events sections, CTA
    events/             # EventCard
    destinations/       # DestinationCard
    layout/             # Navbar, Footer
    ui/                 # shadcn/ui component library
index.html              # HTML shell (entry references /src/main.tsx)
```

## Deploy notes

The app is fully static and deployable to any static host. For GitHub Pages (served under `/trip-venture-connect/`), build with a relative base so asset paths resolve from the subdirectory:

```sh
npx vite build --base=./
```

Copy the build output into the served root and include a copy of `index.html` as `404.html` so client-side routes keep working on refresh.

## License

MIT.

Built by Girish Lade — https://ladestack.in
