# GTLandCards

A premium site for **GTLandCards** — a player- and collector-run shop for One Piece cards and accessories, based in NJ / NYC.

Phase 1 is a fast, static Next.js site. Inventory photography, checkout, accounts, and buy/sell/trade are not live yet.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Pages

- `/` — homepage
- `/collections` — card inventory (empty photo slots until real shots are added)
- `/accessories` — sleeves, storage, and table gear (empty photo slots)
- `/about` — the shop
- `/contact` — write-in form (no public email on the page)

Instagram: [instagram.com/gtlandcards](https://www.instagram.com/gtlandcards/)

## Replace images

Hero art lives at `public/images/hero/crew.png`.

Collection and accessory photos go here when you have them:

```
public/images/
  hero/crew.png
  collection/     # your own card photography, consistent 3:4 crop
  accessories/    # catalog-style product shots
```

Do not drop in generic card-database scans for the collection. Those pages are built around photos of cards you physically own.

## Contact form

The contact page sends through `/api/contact` and never shows a business inbox. Before public launch, connect that route to your email provider so submissions are delivered. Until then, the form still validates and shows the thank-you state so you can try the flow.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
