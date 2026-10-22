export const INSTAGRAM_URL = "https://www.instagram.com/gtlandcards/";

export type NavItem = {
  label: string;
  href: string;
};

export type AccessoryCategory = {
  id: string;
  name: string;
  description: string;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Accessories", href: "/accessories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const accessoryCategories: AccessoryCategory[] = [
  {
    id: "sleeves",
    name: "Card Sleeves",
    description: "For sleeves that hold up at the table and in the binder.",
  },
  {
    id: "toploaders",
    name: "Top Loaders",
    description: "Rigid protection for singles you want to keep clean.",
  },
  {
    id: "binders",
    name: "Binders",
    description: "Storage that looks as considered as the cards inside.",
  },
  {
    id: "deck-boxes",
    name: "Deck Boxes",
    description: "Tournament-ready homes for the decks you actually play.",
  },
  {
    id: "playmats",
    name: "Playmats",
    description: "A proper surface for locals, regionals, and kitchen-table games.",
  },
  {
    id: "display-stands",
    name: "Display Stands",
    description: "For the pieces that deserve a place on the shelf.",
  },
];

export const FEATURED_SLOT_COUNT = 6;
export const COLLECTION_SLOT_COUNT = 12;

export const trustPoints = [
  {
    title: "Authentic Products",
    description: "Carefully sourced.",
    icon: "shield" as const,
  },
  {
    title: "Play & Collect",
    description: "Tournament ready.",
    icon: "package" as const,
  },
  {
    title: "Secure Shipping",
    description: "Packed with care.",
    icon: "truck" as const,
  },
];

export const contactRoles = [
  "Competitive player",
  "Collector",
  "Fan of the game",
  "A bit of everything",
] as const;
