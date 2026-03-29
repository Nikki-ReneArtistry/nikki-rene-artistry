import amazeImg from "@/assets/amaze.jpg";
import unprecedentedImg from "@/assets/unprecedented.jpg";
import tallOnesImg from "@/assets/the-tall-ones.jpg";
import windyImg from "@/assets/windy.jpg";
import goldenWhispersImg from "@/assets/golden-whispers.jpg";

export interface Artwork {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  size: string;
  medium: string;
  year: number;
  available: boolean;
  collection: string;
  paymentLink?: string;
}

export const artworks: Artwork[] = [
  {
    id: "amaze",
    title: "Amaze",
    description:
      "A captivating piece that draws you in with its bold presence and intricate detail. 'Amaze' invites wonder and contemplation, transforming any space it inhabits.",
    image: amazeImg,
    price: 175,
    size: '16"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/bJebJ2f7K32l0IV0bk2oE00",
  },
  {
    id: "unprecedented",
    title: "Unprecedented",
    description:
      "A stunning circular mixed media piece featuring a mosaic of earth tones — forest green, gold, crimson, navy, and warm browns — divided by raised gold borders and adorned with textured resin orbs. A rich, tactile work that celebrates color and form.",
    image: unprecedentedImg,
    price: 175,
    size: '16"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/cNi6oI4t646pezL2js2oE01",
  },
  {
    id: "the-tall-ones",
    title: "The Tall Ones",
    description:
      "A richly layered mixed media collage celebrating the majesty of giraffes amidst an African landscape. Animal prints, tropical leaves, and textured borders create a vibrant tapestry of wildlife and pattern.",
    image: tallOnesImg,
    price: 65,
    size: '',
    medium: "Mixed Media Collage",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/00w7sM2kYgTb2R33nw2oE02",
  },
  {
    id: "windy",
    title: "Windy",
    description:
      "A striking circular canvas depicting a windswept tree silhouetted against swirling emerald and teal marbled skies. Leaves scatter in the gust, capturing nature's raw energy and resilience.",
    image: windyImg,
    price: 85,
    size: '10"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/bJebJ20cQdGZajv8HQ2oE03",
  },
  {
    id: "golden-whispers",
    title: "Golden Whispers",
    description:
      "An enchanting circular piece where flowing tendrils of gold and copper dance across a deep teal backdrop. The organic, crackled textures and metallic accents create a mesmerizing interplay of warmth and depth.",
    image: goldenWhispersImg,
    price: 125,
    size: '10"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/cNi7sMgbO6ex77j6zI2oE04",
  },
];

export const getArtworkById = (id: string): Artwork | undefined => {
  return artworks.find((artwork) => artwork.id === id);
};
