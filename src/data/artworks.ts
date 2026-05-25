import amazeImg from "@/assets/amaze.jpg";
import unprecedentedImg from "@/assets/unprecedented.jpg";
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

const placeholderImg = "/placeholder.svg";

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

const defaultDescription = (title: string) =>
  `${title} — an original mixed media piece from the No Two Alike collection. Contact for more details or to arrange viewing.`;

export const artworks: Artwork[] = [
  // ── Pieces with photography ──
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
      "A stunning circular mixed media piece featuring a mosaic of earth tones — forest green, gold, crimson, navy, and warm browns — divided by raised gold borders and adorned with textured resin orbs.",
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
      "A lush circular mixed media piece featuring layered botanical forms in deep greens and teals against a serene blue sky. Gold-outlined leaves and delicate fronds create a rich, tropical composition.",
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
      "A mesmerizing circular canvas where deep purples, midnight blues, and golden hues swirl outward from a dark center. The fluid composition evokes cosmic energy and otherworldly beauty.",
    image: mysticalBurstImg,
    price: 60,
    size: '10"',
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
      "A striking circular piece where silvery whites and steely grays radiate outward in a dramatic starburst pattern. Subtle cellular textures and fluid lines create an electrifying sense of motion.",
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
      "Elegant botanical forms — bold teal leaves with gold detailing and delicate branches set against a marbled green and silver background. A celebration of forest flora.",
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
      "Deep teals, emerald greens, and warm coral tones flow and merge in organic, wave-like patterns. The fluid composition captures the beauty of natural movement.",
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
    description:
      "Earthy tones with marbled green and pink patterns, adorned with gemstones, beads, and metallic ornaments arranged in a symmetrical cross formation.",
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
    description:
      "A captivating circular piece with dark, speckled textures and gold leaf accents. Pearls, jade stones, and metallic beads are arranged along a golden band.",
    image: mysteryInMotionImg,
    price: 75,
    size: '8"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/28EeVee3GbyRezL6zI2oE0b",
  },
  {
    id: "whispering-stones",
    title: "Whispering Stones",
    description:
      "A striking mixed media work on a dark canvas featuring a gold-wrapped spiral center, jade stones, obsidian pieces, and pearl accents connected by delicate twine.",
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
    description:
      "A richly textured circular piece combining swirling blue-gold brushwork with vibrant woven fabric patterns. Netting, twine, and a wooden button add dimensional depth.",
    image: orbitOfDiversityImg,
    price: 65,
    size: '8"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/6oU8wQcZC6ex2R37DM2oE0d",
  },
  {
    id: "ethereal-fusion",
    title: "Ethereal Fusion",
    description:
      "A majestic circular canvas in deep indigo and teal with copper leaf accents. A central ornate medallion is flanked by golden circles and silver filigree.",
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
    description:
      "Dark swirling brushwork alongside vibrant woven fabric in reds, greens, and golds. Wispy fiber and crackled netting create an organic, web-like overlay.",
    image: crackedSphereImg,
    price: 55,
    size: '8"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/cNi9AU5xaauNbnz4rA2oE0f",
  },
  {
    id: "mosaic-dream",
    title: "Mosaic Dream",
    description:
      "A warm, earthy circular piece blending blue-green swirled textures with richly patterned fabric in orange, teal, and gold. Natural fiber netting adds tactile charm.",
    image: mosaicDreamImg,
    price: 55,
    size: '8"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/eVq3cw4t69qJgHT9LU2oE0g",
  },
  {
    id: "veiled-expressions",
    title: "Veiled Expressions",
    description:
      "A silhouetted face emerges from swirling purple, green, and gold fluid art. The interplay of figurative and abstract creates a hauntingly beautiful portrait.",
    image: veiledExpressionsImg,
    price: 175,
    size: '14"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/3cIfZibVy1Yh77j7DM2oE0h",
  },
  {
    id: "shego",
    title: "Shego",
    description:
      "Bold circular piece in rich greens and blacks with dramatic fluid pour patterns. Dark veins of paint crack through emerald and lime tones.",
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
    description:
      "Jagged mountain peaks with snow-capped summits, framed by evergreen trees and soaring birds against a dramatic marbled sunset sky in warm reds and golds.",
    image: beyondTheMountainsImg,
    price: 75,
    size: '10"',
    medium: "Mixed Media",
    year: 2024,
    available: true,
    collection: "No Two Alike",
    paymentLink: "https://buy.stripe.com/cNicN6bVybyR2R37DM2oE0j",
  },

  // ── Pieces awaiting photography ──
  { id: "the-girls-gaze", title: "The Girl's Gaze", description: defaultDescription("The Girl's Gaze"), image: placeholderImg, price: 125, size: '16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "circle-of-life", title: "Circle of Life", description: defaultDescription("Circle of Life"), image: placeholderImg, price: 150, size: '16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "fallen-heart", title: "Fallen Heart", description: defaultDescription("Fallen Heart"), image: placeholderImg, price: 65, size: '10"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "crimson-fairy", title: "Crimson Fairy", description: defaultDescription("Crimson Fairy"), image: placeholderImg, price: 125, size: '12"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "blue-beauty", title: "Blue Beauty", description: defaultDescription("Blue Beauty"), image: placeholderImg, price: 300, size: '14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "twin-skies", title: "Twin Skies", description: defaultDescription("Twin Skies"), image: placeholderImg, price: 300, size: '12×16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "whispering-elegance", title: "Whispering Elegance", description: defaultDescription("Whispering Elegance"), image: placeholderImg, price: 145, size: '14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "whispers-of-savanna", title: "Whispers of Savanna", description: defaultDescription("Whispers of Savanna"), image: placeholderImg, price: 350, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "hakuna-matata", title: "Hakuna Matata", description: defaultDescription("Hakuna Matata"), image: placeholderImg, price: 375, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "into-the-wild", title: "Into the Wild", description: defaultDescription("Into the Wild"), image: placeholderImg, price: 350, size: '12×36"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "aqua-wave-clock", title: "Aqua Wave Clock", description: defaultDescription("Aqua Wave Clock"), image: placeholderImg, price: 70, size: '10"', medium: "Mixed Media Clock", year: 2024, available: true, collection: "No Two Alike" },
  { id: "pink-burst-clock", title: "Pink Burst Clock", description: defaultDescription("Pink Burst Clock"), image: placeholderImg, price: 70, size: '10"', medium: "Mixed Media Clock", year: 2024, available: true, collection: "No Two Alike" },
  { id: "golden-girl-clock", title: "Golden Girl Clock", description: defaultDescription("Golden Girl Clock"), image: placeholderImg, price: 70, size: '10"', medium: "Mixed Media Clock", year: 2024, available: true, collection: "No Two Alike" },
  { id: "going-in-circles-clock", title: "Going in Circles Clock", description: defaultDescription("Going in Circles Clock"), image: placeholderImg, price: 70, size: '10"', medium: "Mixed Media Clock", year: 2024, available: true, collection: "No Two Alike" },
  { id: "blue-burst-clock", title: "Blue Burst Clock", description: defaultDescription("Blue Burst Clock"), image: placeholderImg, price: 70, size: '10"', medium: "Mixed Media Clock", year: 2024, available: true, collection: "No Two Alike" },
  { id: "under-the-earth-clock", title: "Under the Earth Clock", description: defaultDescription("Under the Earth Clock"), image: placeholderImg, price: 70, size: '10"', medium: "Mixed Media Clock", year: 2024, available: true, collection: "No Two Alike" },
  { id: "second-line", title: "Second Line", description: defaultDescription("Second Line"), image: placeholderImg, price: 200, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "emerald-symphony", title: "Emerald Symphony", description: defaultDescription("Emerald Symphony"), image: placeholderImg, price: 200, size: '18×36"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "kaleidoscope", title: "Kaleidoscope", description: defaultDescription("Kaleidoscope"), image: placeholderImg, price: 200, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "shimmering-passage", title: "Shimmering Passage", description: defaultDescription("Shimmering Passage"), image: placeholderImg, price: 200, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "elara", title: "Elara", description: defaultDescription("Elara"), image: placeholderImg, price: 300, size: '10×30"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "ocean-on-mars", title: "Ocean on Mars", description: defaultDescription("Ocean on Mars"), image: placeholderImg, price: 155, size: '14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "mood-moon", title: "Mood Moon", description: defaultDescription("Mood Moon"), image: placeholderImg, price: 125, size: '14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "ripple-moon", title: "Ripple Moon", description: defaultDescription("Ripple Moon"), image: placeholderImg, price: 100, size: '12"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "make-a-wish", title: "Make a Wish", description: defaultDescription("Make a Wish"), image: placeholderImg, price: 75, size: '12"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "peacock-feathers", title: "Peacock Feathers", description: defaultDescription("Peacock Feathers"), image: placeholderImg, price: 125, size: '14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "mosaic-of-mind", title: "Mosaic of Mind", description: defaultDescription("Mosaic of Mind"), image: placeholderImg, price: 175, size: '12"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "nuclei", title: "Nuclei", description: defaultDescription("Nuclei"), image: placeholderImg, price: 85, size: '14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "nocturnal-etchings", title: "Nocturnal Etchings", description: defaultDescription("Nocturnal Etchings"), image: placeholderImg, price: 95, size: '10"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "botanical-ballet", title: "Botanical Ballet", description: defaultDescription("Botanical Ballet"), image: placeholderImg, price: 150, size: '14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "siren", title: "Siren", description: defaultDescription("Siren"), image: placeholderImg, price: 175, size: '16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "resilience", title: "Resilience", description: defaultDescription("Resilience"), image: placeholderImg, price: 175, size: '16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "skys-dance", title: "Sky's Dance", description: defaultDescription("Sky's Dance"), image: placeholderImg, price: 300, size: '10×30"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "silent-calm", title: "Silent Calm", description: defaultDescription("Silent Calm"), image: placeholderImg, price: 165, size: '14×16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "serenade-of-swallows", title: "Serenade of Swallows", description: defaultDescription("Serenade of Swallows"), image: placeholderImg, price: 130, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "blue-fiery", title: "Blue Fiery", description: defaultDescription("Blue Fiery"), image: placeholderImg, price: 450, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "gaea-rising", title: "Gaea Rising", description: defaultDescription("Gaea Rising"), image: placeholderImg, price: 375, size: '11×14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "cosmic-night", title: "Cosmic Night", description: defaultDescription("Cosmic Night"), image: placeholderImg, price: 95, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "copper-fields", title: "Copper Fields", description: defaultDescription("Copper Fields"), image: placeholderImg, price: 400, size: '20×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "rippled-whispers", title: "Rippled Whispers", description: defaultDescription("Rippled Whispers"), image: placeholderImg, price: 300, size: '24×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "autumns-grace", title: "Autumn's Grace", description: defaultDescription("Autumn's Grace"), image: placeholderImg, price: 500, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "enigma-unveiled", title: "Enigma Unveiled", description: defaultDescription("Enigma Unveiled"), image: placeholderImg, price: 350, size: '16×12"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "be-different", title: "Be Different", description: defaultDescription("Be Different"), image: placeholderImg, price: 150, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "flutter", title: "Flutter", description: defaultDescription("Flutter"), image: placeholderImg, price: 85, size: '12×16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "intricate-thoughts", title: "Intricate Thoughts", description: defaultDescription("Intricate Thoughts"), image: placeholderImg, price: 400, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "ageless-beauty", title: "Ageless Beauty", description: defaultDescription("Ageless Beauty"), image: placeholderImg, price: 175, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "winters-silent-tears", title: "Winter's Silent Tears", description: defaultDescription("Winter's Silent Tears"), image: placeholderImg, price: 300, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "mystical-gearsmith", title: "Mystical Gearsmith", description: defaultDescription("Mystical Gearsmith"), image: placeholderImg, price: 400, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "elegance-meets-beauty", title: "Elegance Meets Beauty", description: defaultDescription("Elegance Meets Beauty"), image: placeholderImg, price: 400, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "mad-hatter-mistress", title: "Mad Hatter Mistress", description: defaultDescription("Mad Hatter Mistress"), image: placeholderImg, price: 400, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "blue-lenses", title: "Blue Lenses", description: defaultDescription("Blue Lenses"), image: placeholderImg, price: 300, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "geoffry", title: "Geoffry", description: defaultDescription("Geoffry"), image: placeholderImg, price: 250, size: '20×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "divinity", title: "Divinity", description: defaultDescription("Divinity"), image: placeholderImg, price: 250, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "latte", title: "Latte", description: defaultDescription("Latte"), image: placeholderImg, price: 55, size: '10×10"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "mocha", title: "Mocha", description: defaultDescription("Mocha"), image: placeholderImg, price: 55, size: '10×10"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "crimson-flow", title: "Crimson Flow", description: defaultDescription("Crimson Flow"), image: placeholderImg, price: 150, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "awakening-the-flames", title: "Awakening the Flames", description: defaultDescription("Awakening the Flames"), image: placeholderImg, price: 75, size: '12×16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "molten-lava", title: "Molten Lava", description: defaultDescription("Molten Lava"), image: placeholderImg, price: 25, size: '4×12"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "red-river", title: "Red River", description: defaultDescription("Red River"), image: placeholderImg, price: 25, size: '4×12"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "fever-flow", title: "Fever Flow", description: defaultDescription("Fever Flow"), image: placeholderImg, price: 50, size: '5×5"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "the-glance", title: "The Glance", description: defaultDescription("The Glance"), image: placeholderImg, price: 200, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "namaste", title: "Namaste", description: defaultDescription("Namaste"), image: placeholderImg, price: 123, size: '12×16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "mystic-moon", title: "Mystic Moon", description: defaultDescription("Mystic Moon"), image: placeholderImg, price: 175, size: '16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "mystic-river", title: "Mystic River", description: defaultDescription("Mystic River"), image: placeholderImg, price: 250, size: '12×36"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "journey", title: "Journey", description: defaultDescription("Journey"), image: placeholderImg, price: 125, size: '12×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "urban-echoes", title: "Urban Echoes", description: defaultDescription("Urban Echoes"), image: placeholderImg, price: 175, size: '6×40"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "tropical-dreamscape", title: "Tropical Dreamscape", description: defaultDescription("Tropical Dreamscape"), image: placeholderImg, price: 150, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "ebb-and-flow", title: "Ebb and Flow", description: defaultDescription("Ebb and Flow"), image: placeholderImg, price: 400, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "tidal-embrace", title: "Tidal Embrace", description: defaultDescription("Tidal Embrace"), image: placeholderImg, price: 225, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "natures-muse", title: "Nature's Muse", description: defaultDescription("Nature's Muse"), image: placeholderImg, price: 300, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "time-flies", title: "Time Flies", description: defaultDescription("Time Flies"), image: placeholderImg, price: 400, size: '20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "frozen-whisper", title: "Frozen Whisper", description: defaultDescription("Frozen Whisper"), image: placeholderImg, price: 150, size: '16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "circles-of-life", title: "Circles of Life", description: defaultDescription("Circles of Life"), image: placeholderImg, price: 200, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "shards-of-life", title: "Shards of Life", description: defaultDescription("Shards of Life"), image: placeholderImg, price: 200, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "gilded-manifestation", title: "Gilded Manifestation", description: defaultDescription("Gilded Manifestation"), image: placeholderImg, price: 400, size: '21×27"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "purple-mistress", title: "Purple Mistress", description: defaultDescription("Purple Mistress"), image: placeholderImg, price: 200, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "silent-reverie", title: "Silent Reverie", description: defaultDescription("Silent Reverie"), image: placeholderImg, price: 150, size: '10×40"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "guardians-within", title: "Guardians Within", description: defaultDescription("Guardians Within"), image: placeholderImg, price: 250, size: '8×40"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "meadow", title: "Meadow", description: defaultDescription("Meadow"), image: placeholderImg, price: 300, size: '15×27"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "sunflower-goddess", title: "Sunflower Goddess", description: defaultDescription("Sunflower Goddess"), image: placeholderImg, price: 500, size: '24×30"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "redeemed", title: "Redeemed", description: defaultDescription("Redeemed"), image: placeholderImg, price: 95, size: '9×14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "full-circle", title: "Full Circle", description: defaultDescription("Full Circle"), image: placeholderImg, price: 300, size: '', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "bourbon-street-beats", title: "Bourbon Street Beats", description: defaultDescription("Bourbon Street Beats"), image: placeholderImg, price: 600, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "lunar-longings", title: "Lunar Longings", description: defaultDescription("Lunar Longings"), image: placeholderImg, price: 350, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "natures-adornment", title: "Nature's Adornment", description: defaultDescription("Nature's Adornment"), image: placeholderImg, price: 700, size: '24×36"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "mystic-orbs", title: "Mystic Orbs", description: defaultDescription("Mystic Orbs"), image: placeholderImg, price: 400, size: '24×48"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "the-resting-tree", title: "The Resting Tree", description: defaultDescription("The Resting Tree"), image: placeholderImg, price: 300, size: '', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "muses-gaze", title: "Muses Gaze", description: defaultDescription("Muses Gaze"), image: placeholderImg, price: 375, size: '12×36"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "natures-enchanted-playground", title: "Nature's Enchanted Playground", description: defaultDescription("Nature's Enchanted Playground"), image: placeholderImg, price: 1100, size: '36×36"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
  { id: "echoes-of-the-tropics", title: "Echoes of the Tropics", description: defaultDescription("Echoes of the Tropics"), image: placeholderImg, price: 800, size: '38×48"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike" },
];

export const getArtworkById = (id: string): Artwork | undefined => {
  return artworks.find((artwork) => artwork.id === id);
};
