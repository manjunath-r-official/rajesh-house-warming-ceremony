# Gruha Pravesha | Housewarming Invitation

A mobile-first digital invitation for a housewarming ceremony, built with React, Vite, Tailwind CSS, GSAP, Framer Motion, and Lenis.

## Features

- Full-screen palace-door entrance with configurable door images, sizing, positioning, shadows, decoration overlay, and animation timing.
- Animated welcome screen with a Ganesha image and Kannada greeting.
- Configurable invitation section with date, family message, and background artwork.
- Scratch-to-reveal date card with a live countdown revealed after scratching.
- Housewarming event cards with configurable content, text colors, and section background.
- Venue section with a map link and optional embedded map.
- Contact links, closing Join Us section, background music player, ambient effects, and scratch-card confetti.
- Open Graph and Twitter sharing metadata, plus PWA support.
- Optional mobile-portrait restriction, controlled by `allowLargeDisplays` in config.

## Getting Started

Requires Node.js 18.20 or newer and npm 9 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Customize the Invitation

Most invitation content and appearance are configured in `src/config/config.js`. This includes:

- Invitation copy, family messages, dates, and event details
- Venue address, Google Maps link, and map embed
- Background images and colors for sections and cards
- Heading and paragraph styles and positions
- Door images, door-leaf dimensions and offsets, shadows, decoration overlay, prompt, and animation timings
- Scratch-card and countdown colors, backgrounds, and tile styling
- Contact links, music settings, and ambient effects

Set `allowLargeDisplays` to `true` to allow larger and landscape screens, or `false` to restrict the invitation to portrait phones.

## Images and Audio

Vite-managed images belong under `src/assets/images/` and are imported from the config. Static files can go in `public/` and be referenced by a root-relative path such as `/entrance-decoration.png`.

The entrance decoration is optional. Set `entranceDoor.decoration.image` to an imported transparent image or a file in `public/`. Set `entranceDoor.decoration.enabled` to `false` to hide the overlay.

The sharing image is `public/cover.png`. Keep the absolute `og:image` and `twitter:image` URLs in `index.html` pointed at the deployed site's image URL. Social platforms may cache old previews; refresh their scraper after changing the image.

The background music asset and volume are configured in `src/config/config.js`. The player colors are under `musicPlayer.colors`.

## Build and Preview

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Deployment

Deploy to Vercel or Netlify using the repository's existing configuration. For another static host, run `npm run build` and upload the contents of `dist/` to the site's document root.

After deploying, confirm that the page and `/cover.png` are publicly reachable over HTTPS before sharing the invitation.

## Project Structure

```text
public/             Static files, PWA assets, robots.txt, sitemap.xml, cover image
src/
  components/       Door, welcome, music, animation, and reusable UI components
  config/           Invitation content and presentation settings
  hooks/            Lenis smooth-scroll setup
  layouts/          Entry and welcome flow
  sections/         Hero, invitation, scratch card, events, venue, contact, Join Us
  styles/           Global styles and Tailwind directives
```
