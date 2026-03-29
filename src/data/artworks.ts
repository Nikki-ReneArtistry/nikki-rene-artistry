import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";
import art5 from "@/assets/art-5.jpg";
import amazeImg from "@/assets/amaze.jpg";
import unprecedentedImg from "@/assets/unprecedented.jpg";

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
    id: "ethereal-flow",
    title: "Ethereal Flow",
    description:
      "A delicate dance of lavender and gold, this piece captures the essence of movement and grace. The flowing forms evoke a sense of transcendence and inner peace.",
    image: art1,
    price: 2400,
    size: '24" × 24"',
    medium: "Oil on Canvas",
    year: 2024,
    available: true,
    collection: "Whispers of Light",
  },
  {
    id: "midnight-reverie",
    title: "Midnight Reverie",
    description:
      "Bold strokes of deep purple and charcoal create a moody, contemplative atmosphere. This expressionist piece invites viewers to explore the depths of their own emotions.",
    image: art2,
    price: 3200,
    size: '36" × 36"',
    medium: "Acrylic on Canvas",
    year: 2024,
    available: true,
    collection: "Whispers of Light",
  },
  {
    id: "lavender-dreams",
    title: "Lavender Dreams",
    description:
      "Soft watercolor washes create an ethereal garden of lavender blooms. This piece brings serenity and natural beauty into any space.",
    image: art3,
    price: 1800,
    size: '20" × 20"',
    medium: "Watercolor on Paper",
    year: 2024,
    available: true,
    collection: "Whispers of Light",
  },
  {
    id: "geometric-harmony",
    title: "Geometric Harmony",
    description:
      "Sharp angles and bold color blocks create a striking visual dialogue between chaos and order. A statement piece that commands attention.",
    image: art4,
    price: 4500,
    size: '48" × 48"',
    medium: "Mixed Media on Canvas",
    year: 2024,
    available: true,
    collection: "Whispers of Light",
  },
  {
    id: "soft-embrace",
    title: "Soft Embrace",
    description:
      "Organic forms in muted tones create a sense of comfort and belonging. The gentle curves suggest an embrace, a moment of connection.",
    image: art5,
    price: 2800,
    size: '30" × 36"',
    medium: "Oil on Canvas",
    year: 2024,
    available: true,
    collection: "Whispers of Light",
  },
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
    collection: "Whispers of Light",
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
    collection: "Whispers of Light",
    paymentLink: "https://buy.stripe.com/cNi6oI4t646pezL2js2oE01",
  },
];

export const getArtworkById = (id: string): Artwork | undefined => {
  return artworks.find((artwork) => artwork.id === id);
};
