# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LabZone website built with Gatsby (React), using Prismic CMS for content management. Supports internationalization (English/Slovak) and includes company pages, blog, portfolio, and career sections.

## Key Commands

```bash
# Development
npm run develop        # Start development server (http://localhost:8000)
gatsby develop        # Alternative development command

# Building
npm run build         # Build production site
gatsby build         # Alternative build command

# Code Quality
npm run lint          # Run ESLint on src files
npm run format        # Format code with Prettier

# Deployment
npm run serve         # Serve built site locally
npm run clean         # Clean Gatsby cache
npm run deploy:gh     # Deploy to GitHub Pages

# Testing
npm run test:lhci     # Run Lighthouse CI performance tests
```

## Architecture

### Content Management
- **Prismic CMS**: Headless CMS for managing projects, blog posts, and job offers
- **Content Types**: Defined in `src/schemas/` (project.json, post.json, joboffer.json)
- **GraphQL**: Gatsby uses GraphQL to query Prismic content at build time

### Internationalization
- **Languages**: English (en) and Slovak (sk) defined in `src/data/languages.js`
- **Pages**: Duplicated per language (e.g., `index.en.js`, `index.sk.js`)
- **Messages**: Localized text in `src/data/messages/`

### Page Generation
- **Static Pages**: Created in `src/pages/` with language suffixes
- **Dynamic Pages**: Generated in `gatsby-node.js` from Prismic content:
  - Projects: `/{lang}/{slug}/`
  - Blog posts: `/{lang}/blog/{uid}/`
  - Job offers: `/{lang}/career/{uid}/`

### Styling
- **Tailwind CSS**: Primary styling framework with custom theme
- **SCSS**: Component-specific styles in `src/styles/`
- **Emotion**: CSS-in-JS for some components
- **Typography**: Typography.js with Fairy Gates theme

### Component Structure
```
src/components/
├── layout.js          # Main layout wrapper
├── navbar.js          # Navigation
├── footer.tsx         # Footer
├── hero.tsx           # Hero sections
├── seo/               # SEO components (JsonLd, seoHelmet)
├── blog/              # Blog-specific components
├── career/            # Career-specific components
├── project/           # Portfolio-specific components
└── linkedin/          # LinkedIn integration
```

## Environment Setup

1. Copy `temp.env` to `.env` and get credentials from repo owner
2. Required environment variables:
   - `PRISMIC_API`: Prismic repository access token

## Development Workflow

1. Create feature branch from `dev` (default branch)
2. Develop with `npm run develop`
3. Test locally at http://localhost:8000
4. Use GraphiQL at http://localhost:8000/___graphql for content queries
5. Create PR to `dev` branch
6. Staging deploys automatically to GitHub Pages
7. Production deploys from `main` branch to Netlify

## Key Files

- `gatsby-config.js`: Main Gatsby configuration with plugins
- `gatsby-node.js`: Dynamic page generation logic
- `src/utils/prismic.js`: Prismic link resolver
- `tailwind.config.js`: Tailwind theme with LabZone colors
- `lighthouserc.js`: Performance testing configuration