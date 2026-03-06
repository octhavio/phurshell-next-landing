# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run Next.js linter
```

## Tech Stack

- **Next.js 14** with App Router (React 18, TypeScript)
- **TailwindCSS** for styling with custom theme extensions
- **Framer Motion** for page transitions and animations
- **Swiper** for carousels
- **Font Awesome PRO** (requires `.npmrc` auth token)

## Architecture

### Page Structure
- All pages use `'use client'` for client-side interactivity
- Root layout (`app/layout.tsx`) handles SEO metadata and global providers
- Service pages have nested layouts with service-specific metadata
- Dynamic routes use `[slug]` pattern (e.g., `insights/[slug]`)

### Page Transitions
The app uses a custom transition system:
1. `TransitionContext` - React context managing transition state
2. `TransitionLink` - Wrapper component for animated navigation (use instead of Next.js `Link`)
3. `PageTransition` - White overlay with logo animation (easeOutExpo timing)

### State Management
- React Context for page transitions
- Component-level `useState` for UI state
- `localStorage` key `phurshell_form_software` persists multi-step form data

### WordPress Integration (Prepared)
- `lib/wordpress.ts` - API client with `getCases()`, `getPosts()`, `getPages()`
- `types/wordpress.ts` - TypeScript interfaces for WP entities
- Environment variables: `WORDPRESS_API_URL`, `NEXT_PUBLIC_SITE_URL`, `REVALIDATE_SECRET`

## Key Conventions

### Styling
Custom Tailwind extensions in `tailwind.config.ts`:
- Colors: `primary` (orange #FF5100), `secondary` (dark #19191A)
- Utilities: `rounded-button`, `transition-smooth`, `dots-pattern`, `bg-dots`

### Components
- Use `TransitionLink` instead of `Link` for navigation with transitions
- Mobile responsiveness uses `sm`, `md`, `lg` breakpoints
- Header has accordion menus for Services/Industries on mobile

### Data
Mock data is inline in components (Cases, Services, Blog). Structured for future WordPress API integration.

## Language

Site content is in **Portuguese (pt-BR)**. i18n support planned but not implemented.
