import amazeImg from "@/assets/amaze.jpg";
import unprecedentedImg from "@/assets/unprecedented.jpg";
import tallOnesImg from "@/assets/the-tall-ones.jpg";
import windyImg from "@/assets/windy.jpg";
import goldenWhispersImg from "@/assets/golden-whispers.jpg";
import aquaForestImg from "@/assets/aqua-forest.jpg";
import mysticalBurstImg from "@/assets/mystical-burst.jpg";
import electromagneticImg from "@/assets/electromagnetic.jpg";
import greenForestImg from "@/assets/green-forest.jpg";
import rippleEffectImg from "@/assets/ripple-effect.jpg";
import ancientEchoesImg from "@/assets/ancient-echoes.jpg";
import mysteryInMotionImg from "@/assets/mystery-in-motion.jpg";
import whisperingStonesImg from "@/assets/whispering-stones.jpg";
import orbitOfDiversityImg from "@/assets/orbit-of-diversity.jpg";
import etherealFusionImg from "@/assets/ethereal-fusion.jpg";
import crackedSphereImg from "@/assets/cracked-sphere.jpg";
import mosaicDreamImg from "@/assets/mosaic-dream.jpg";
import veiledExpressionsImg from "@/assets/veiled-expressions.jpg";
import shegoImg from "@/assets/shego.jpg";
import beyondTheMountainsImg from "@/assets/beyond-the-mountains.jpg";

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
  {
    id: "aqua-forest",
    title: "Aqua Forest",
    description:
      "A lush circular mixed media piece featuring layered botanical forms in deep greens and teals against a serene blue sky. Gold-outlined leaves and delicate fronds create a rich, tropical composition celebrating nature's beauty.",
    image: aquaForestImg,
    price: 55,
    size: '12"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/6oU8wQaRufP7fDP0bk2oE09",
  },
  {
    id: "mystical-burst",
    title: "Mystical Burst",
    description:
      "A mesmerizing circular canvas where deep purples, midnight blues, and golden hues swirl outward from a dark center. The fluid, dreamlike composition evokes cosmic energy and otherworldly beauty.",
    image: mysticalBurstImg,
    price: 60,
    size: '',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/dRm28s9Nq7iB9fr7DM2oE08",
  },
  {
    id: "electromagnetic",
    title: "Electromagnetic",
    description:
      "A striking circular piece where silvery whites and steely grays radiate outward in a dramatic starburst pattern. Subtle cellular textures and fluid lines create an electrifying sense of motion and energy.",
    image: electromagneticImg,
    price: 45,
    size: '10"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/7sYfZi7FiauNajv8HQ2oE07",
  },
  {
    id: "green-forest",
    title: "Green Forest",
    description:
      "A beautiful circular mixed media piece showcasing elegant botanical forms — bold teal leaves with gold detailing and delicate branches set against a marbled green and silver background. A celebration of forest flora.",
    image: greenForestImg,
    price: 55,
    size: '12"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/dRm6oIe3G6ex8bn2js2oE06",
  },
  {
    id: "ripple-effect",
    title: "Ripple Effect",
    description:
      "A captivating circular canvas where deep teals, emerald greens, and warm coral tones flow and merge in organic, wave-like patterns. The fluid composition captures the beauty of natural movement and transformation.",
    image: rippleEffectImg,
    price: 45,
    size: '8"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/9B69AUf7KgTbgHT7DM2oE05",
  },
  {
    id: "ancient-echoes",
    title: "Ancient Echoes",
    description: "A stunning mixed media piece featuring earthy tones with marbled green and pink patterns, adorned with gemstones, beads, and metallic ornaments arranged in a symmetrical cross formation.",
    image: ancientEchoesImg,
    price: 85,
    size: '10"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/3cIcN6f7K32l9frcY62oE0a",
  },
  {
    id: "mystery-in-motion",
    title: "Mystery In Motion",
    description: "A captivating circular piece with dark, speckled textures and gold leaf accents. Pearls, jade stones, and metallic beads are arranged along a golden band, with twine tassels adding organic warmth.",
    image: mysteryInMotionImg,
    price: 75,
    size: '10"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/28EeVee3GbyRezL6zI2oE0b",
  },
  {
    id: "whispering-stones",
    title: "Whispering Stones",
    description: "A striking mixed media work on a dark, speckled canvas featuring a gold-wrapped spiral center, jade stones, obsidian pieces, and pearl accents connected by delicate twine.",
    image: whisperingStonesImg,
    price: 75,
    size: '10"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/5kQdRa0cQ8mF1MZ8HQ2oE0c",
  },
  {
    id: "orbit-of-diversity",
    title: "Orbit of Diversity",
    description: "A richly textured circular piece combining swirling blue-gold brushwork with vibrant woven fabric patterns. Netting, twine, and a wooden button add dimensional depth to this cultural tapestry.",
    image: orbitOfDiversityImg,
    price: 65,
    size: '',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/6oU8wQcZC6ex2R37DM2oE0d",
  },
  {
    id: "ethereal-fusion",
    title: "Ethereal Fusion",
    description: "A majestic circular canvas in deep indigo and teal with copper leaf accents. A central ornate medallion is flanked by golden circles and silver filigree, with pearl and chain tassels cascading below.",
    image: etherealFusionImg,
    price: 75,
    size: '10"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/28E8wQ6BecCV8bn3nw2oE0e",
  },
  {
    id: "cracked-sphere",
    title: "Cracked Sphere",
    description: "A textured mixed media piece featuring dark swirling brushwork alongside vibrant woven fabric in reds, greens, and golds. Wispy fiber and crackled netting create an organic, web-like overlay.",
    image: crackedSphereImg,
    price: 55,
    size: '',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/cNi9AU5xaauNbnz4rA2oE0f",
  },
  {
    id: "mosaic-dream",
    title: "Mosaic Dream",
    description: "A warm, earthy circular piece blending blue-green swirled textures with richly patterned fabric in orange, teal, and gold. Natural fiber netting and a carved wooden button add tactile charm.",
    image: mosaicDreamImg,
    price: 55,
    size: '',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/eVq3cw4t69qJgHT9LU2oE0g",
  },
  {
    id: "veiled-expressions",
    title: "Veiled Expressions",
    description: "A mesmerizing circular canvas where a silhouetted face emerges from swirling purple, green, and gold fluid art. The interplay of figurative and abstract creates a hauntingly beautiful portrait.",
    image: veiledExpressionsImg,
    price: 175,
    size: '',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/3cIfZibVy1Yh77j7DM2oE0h",
  },
  {
    id: "shego",
    title: "Shego",
    description: "A bold circular piece in rich greens and blacks with dramatic fluid pour patterns. Dark veins of paint crack through emerald and lime tones, creating an intense, organic energy.",
    image: shegoImg,
    price: 35,
    size: '8"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/00w28s6Be9qJ3V7cY62oE0i",
  },
  {
    id: "beyond-the-mountains",
    title: "Beyond the Mountains",
    description: "A breathtaking circular landscape featuring jagged mountain peaks with snow-capped summits, framed by evergreen trees and soaring birds against a dramatic marbled sunset sky in warm reds and golds.",
    image: beyondTheMountainsImg,
    price: 75,
    size: '',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/cNicN6bVybyR2R37DM2oE0j",
  },
];

export const getArtworkById = (id: string): Artwork | undefined => {
  return artworks.find((artwork) => artwork.id === id);
};
