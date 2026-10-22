# GTLandCards — start here

This zip is the full website so far. Unzip it, then:

```bash
cd GTLandCards
npm install
npm run dev
```

Open http://localhost:3000

You need Node.js 18+ (20 or 22 is fine). If `npm` is missing, install Node from https://nodejs.org

## What’s already built

- Home, Collections, Accessories, About, Contact
- Next.js + TypeScript + Tailwind
- Empty photo slots for cards and accessories (no fake product pictures)
- Contact form (does not show a public email; not connected to a real inbox yet)
- Instagram: https://www.instagram.com/gtlandcards/
- Location: NJ / NYC

## Where to edit

- Copy / categories: `lib/data.ts`
- Homepage: `app/page.tsx` and `components/`
- Pages: `app/collections`, `app/accessories`, `app/about`, `app/contact`
- Colors: `app/globals.css`
- Hero image: `public/images/hero/crew.png`
- Future card photos: `public/images/collection/`
- Future accessory photos: `public/images/accessories/`

Drop real photos into those folders, then wire names into `lib/data.ts` (collection items are still placeholders).

Do not use the old trycloudflare preview links. Run the site locally with `npm run dev`.
