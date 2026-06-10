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
import coastalSerenityImg from "@/assets/coastal-serenity.jpg.asset.json";
import celestialOrbitsImg from "@/assets/celestial-orbits.jpg.asset.json";
import adornmentImg from "@/assets/adornment.jpg.asset.json";
import celestialHowlImg from "@/assets/celestial-howl.jpg.asset.json";
import bourbonStreetDreamsImg from "@/assets/bourbon-street-dreams.jpg.asset.json";
import aquaticReverieImg from "@/assets/aquatic-reverie.jpg.asset.json";
import gildedBloomsImg from "@/assets/gilded-blooms.jpg.asset.json";
import goddessSunflowerImg from "@/assets/goddess-sunflower.jpg.asset.json";
import fragmentsRememberedImg from "@/assets/fragments-remembered.jpg.asset.json";
import gildedManifestationImg from "@/assets/gilded-manifestation.jpg.asset.json";
import fracturedPrismImg from "@/assets/fractured-prism.jpg.asset.json";
import circlesOfLifeImg from "@/assets/circles-of-life.jpg.asset.json";
import timeFliesImg from "@/assets/time-flies.jpg.asset.json";
import blindingVintageImg from "@/assets/blinding-vintage.jpg.asset.json";
import ebbAndFlowImg from "@/assets/ebb-and-flow.jpg.asset.json";
import braveSilhouettesImg from "@/assets/brave-silhouettes.jpg.asset.json";
import gildedHorizonsImg from "@/assets/gilded-horizons.jpg.asset.json";
import awakeningTheFlamesImg from "@/assets/awakening-the-flames.jpg.asset.json";

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
  { id: "the-girls-gaze", title: "The Girl's Gaze", description: defaultDescription("The Girl's Gaze"), image: placeholderImg, price: 125, size: '16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/fZueVeaRugTbbnz7DM2oE1M" },
  { id: "circle-of-life", title: "Circle of Life", description: defaultDescription("Circle of Life"), image: placeholderImg, price: 150, size: '16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/4gM4gAcZC32lfDPe2a2oE1N" },
  { id: "fallen-heart", title: "Fallen Heart", description: defaultDescription("Fallen Heart"), image: placeholderImg, price: 65, size: '10"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/28E28s1gUauN63f1fo2oE1O" },
  { id: "crimson-fairy", title: "Crimson Fairy", description: defaultDescription("Crimson Fairy"), image: placeholderImg, price: 125, size: '12"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/eVq14oe3G9qJfDP8HQ2oE1P" },
  { id: "blue-beauty", title: "Blue Beauty", description: defaultDescription("Blue Beauty"), image: placeholderImg, price: 300, size: '14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/28EcN66BeeL34Zb1fo2oE1Q" },
  { id: "twin-skies", title: "Twin Skies", description: defaultDescription("Twin Skies"), image: placeholderImg, price: 300, size: '12×16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/8x29AU2kY1Yh2R3gai2oE1R" },
  { id: "whispering-elegance", title: "Whispering Elegance", description: defaultDescription("Whispering Elegance"), image: placeholderImg, price: 145, size: '14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/eVq9AU2kY9qJ8bn7DM2oE1S" },
  { id: "whispers-of-savanna", title: "Whispers of Savanna", description: defaultDescription("Whispers of Savanna"), image: placeholderImg, price: 350, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/00w3cw1gU7iB9fr3nw2oE1T" },
  { id: "hakuna-matata", title: "Hakuna Matata", description: defaultDescription("Hakuna Matata"), image: placeholderImg, price: 375, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/8x2dRa4t6gTb8bn9LU2oE1U" },
  { id: "into-the-wild", title: "Into the Wild", description: defaultDescription("Into the Wild"), image: placeholderImg, price: 350, size: '12×36"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/aFaaEY2kYauN8bn8HQ2oE1V" },
  { id: "aqua-wave-clock", title: "Aqua Wave Clock", description: defaultDescription("Aqua Wave Clock"), image: placeholderImg, price: 70, size: '10"', medium: "Mixed Media Clock", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/3cIcN64t6cCV4Zb1fo2oE1W" },
  { id: "pink-burst-clock", title: "Pink Burst Clock", description: defaultDescription("Pink Burst Clock"), image: placeholderImg, price: 70, size: '10"', medium: "Mixed Media Clock", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/eVqdRa6Be0Ud1MZ9LU2oE1X" },
  { id: "golden-girl-clock", title: "Golden Girl Clock", description: defaultDescription("Golden Girl Clock"), image: placeholderImg, price: 70, size: '10"', medium: "Mixed Media Clock", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/dRmfZi2kY8mFdvHbU22oE1Y" },
  { id: "going-in-circles-clock", title: "Going in Circles Clock", description: defaultDescription("Going in Circles Clock"), image: placeholderImg, price: 70, size: '10"', medium: "Mixed Media Clock", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/eVqfZicZCeL3dvHbU22oE1Z" },
  { id: "blue-burst-clock", title: "Blue Burst Clock", description: defaultDescription("Blue Burst Clock"), image: placeholderImg, price: 70, size: '10"', medium: "Mixed Media Clock", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/9B6eVe8Jm1Yh0IVaPY2oE20" },
  { id: "under-the-earth-clock", title: "Under the Earth Clock", description: defaultDescription("Under the Earth Clock"), image: placeholderImg, price: 70, size: '10"', medium: "Mixed Media Clock", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/cNi28s7Fi9qJezLgai2oE21" },
  { id: "second-line", title: "Second Line", description: defaultDescription("Second Line"), image: placeholderImg, price: 200, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/cNi5kEgbO7iB0IVcY62oE22" },
  { id: "emerald-symphony", title: "Emerald Symphony", description: defaultDescription("Emerald Symphony"), image: placeholderImg, price: 200, size: '18×36"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/3cIeVecZC8mFbnz2js2oE23" },
  { id: "kaleidoscope", title: "Kaleidoscope", description: defaultDescription("Kaleidoscope"), image: placeholderImg, price: 200, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/7sY6oIgbOgTb8bn5vE2oE24" },
  { id: "shimmering-passage", title: "Shimmering Passage", description: defaultDescription("Shimmering Passage"), image: placeholderImg, price: 200, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/4gMbJ23p25atezLaPY2oE25" },
  { id: "elara", title: "Elara", description: defaultDescription("Elara"), image: placeholderImg, price: 300, size: '10×30"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/dRm7sM5xa7iB3V70bk2oE26" },
  { id: "ocean-on-mars", title: "Ocean on Mars", description: defaultDescription("Ocean on Mars"), image: placeholderImg, price: 155, size: '14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/8x26oI7Fi0UdcrD4rA2oE27" },
  { id: "mood-moon", title: "Mood Moon", description: defaultDescription("Mood Moon"), image: placeholderImg, price: 125, size: '14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/8x23cw7Fi8mFezL6zI2oE28" },
  { id: "ripple-moon", title: "Ripple Moon", description: defaultDescription("Ripple Moon"), image: placeholderImg, price: 100, size: '12"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/cNi7sMe3G8mF4ZbaPY2oE29" },
  { id: "make-a-wish", title: "Make a Wish", description: defaultDescription("Make a Wish"), image: placeholderImg, price: 75, size: '12"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/9B6bJ21gUgTb63f7DM2oE2a" },
  { id: "peacock-feathers", title: "Peacock Feathers", description: defaultDescription("Peacock Feathers"), image: placeholderImg, price: 125, size: '14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/28E8wQ3p2eL3gHT3nw2oE2b" },
  { id: "mosaic-of-mind", title: "Mosaic of Mind", description: defaultDescription("Mosaic of Mind"), image: placeholderImg, price: 175, size: '12"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/dRm14obVyauN2R37DM2oE2c" },
  { id: "nuclei", title: "Nuclei", description: defaultDescription("Nuclei"), image: placeholderImg, price: 85, size: '14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/28E3cw5xafP70IVcY62oE2d" },
  { id: "nocturnal-etchings", title: "Nocturnal Etchings", description: defaultDescription("Nocturnal Etchings"), image: placeholderImg, price: 95, size: '10"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/8x26oI1gUbyRezLcY62oE2e" },
  { id: "botanical-ballet", title: "Botanical Ballet", description: defaultDescription("Botanical Ballet"), image: placeholderImg, price: 150, size: '14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/6oU00ke3GdGZ77j1fo2oE2f" },
  { id: "siren", title: "Siren", description: defaultDescription("Siren"), image: placeholderImg, price: 175, size: '16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/8x200k4t67iB0IVbU22oE2g" },
  { id: "resilience", title: "Resilience", description: defaultDescription("Resilience"), image: placeholderImg, price: 175, size: '16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/4gM4gAbVy0Ud0IV8HQ2oE2h" },
  { id: "skys-dance", title: "Sky's Dance", description: defaultDescription("Sky's Dance"), image: placeholderImg, price: 300, size: '10×30"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/5kQ8wQaRueL3gHT5vE2oE2i" },
  { id: "silent-calm", title: "Silent Calm", description: defaultDescription("Silent Calm"), image: placeholderImg, price: 165, size: '14×16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/14A9AU3p2auNezLgai2oE2j" },
  { id: "serenade-of-swallows", title: "Serenade of Swallows", description: defaultDescription("Serenade of Swallows"), image: placeholderImg, price: 130, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/aFabJ23p2fP777jgai2oE2k" },
  { id: "blue-fiery", title: "Blue Fiery", description: defaultDescription("Blue Fiery"), image: placeholderImg, price: 450, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/bJe5kE8Jm1Yhajv4rA2oE2l" },
  { id: "gaea-rising", title: "Gaea Rising", description: defaultDescription("Gaea Rising"), image: placeholderImg, price: 375, size: '11×14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/9B6fZif7K1Yh8bn5vE2oE2m" },
  { id: "cosmic-night", title: "Cosmic Night", description: defaultDescription("Cosmic Night"), image: placeholderImg, price: 95, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/7sY28s6Be9qJfDP5vE2oE2n" },
  { id: "copper-fields", title: "Copper Fields", description: defaultDescription("Copper Fields"), image: placeholderImg, price: 400, size: '20×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/00w5kEbVy1YhgHTe2a2oE2o" },
  { id: "rippled-whispers", title: "Rippled Whispers", description: defaultDescription("Rippled Whispers"), image: placeholderImg, price: 300, size: '24×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/3cI6oI8Jm46p9fre2a2oE2p" },
  { id: "autumns-grace", title: "Autumn's Grace", description: defaultDescription("Autumn's Grace"), image: placeholderImg, price: 500, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/cNi28scZC9qJ1MZf6e2oE2q" },
  { id: "enigma-unveiled", title: "Enigma Unveiled", description: defaultDescription("Enigma Unveiled"), image: placeholderImg, price: 350, size: '16×12"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/5kQcN65xa9qJgHT4rA2oE2r" },
  { id: "be-different", title: "Be Different", description: defaultDescription("Be Different"), image: placeholderImg, price: 150, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/8x200k0cQeL3crD5vE2oE2s" },
  { id: "flutter", title: "Flutter", description: defaultDescription("Flutter"), image: placeholderImg, price: 85, size: '12×16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/6oUdRae3G8mFdvHaPY2oE2t" },
  { id: "intricate-thoughts", title: "Intricate Thoughts", description: defaultDescription("Intricate Thoughts"), image: placeholderImg, price: 400, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/cNi6oI6Be46pajvaPY2oE2u" },
  { id: "ageless-beauty", title: "Ageless Beauty", description: defaultDescription("Ageless Beauty"), image: placeholderImg, price: 175, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/fZudRa7FicCV1MZ1fo2oE2v" },
  { id: "winters-silent-tears", title: "Winter's Silent Tears", description: defaultDescription("Winter's Silent Tears"), image: placeholderImg, price: 300, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/cNi7sMcZC32l63faPY2oE2w" },
  { id: "mystical-gearsmith", title: "Mystical Gearsmith", description: defaultDescription("Mystical Gearsmith"), image: placeholderImg, price: 400, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/5kQbJ2e3GauN1MZ8HQ2oE2x" },
  { id: "elegance-meets-beauty", title: "Elegance Meets Beauty", description: defaultDescription("Elegance Meets Beauty"), image: placeholderImg, price: 400, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/cNi14o9NqgTb3V77DM2oE2y" },
  { id: "mad-hatter-mistress", title: "Mad Hatter Mistress", description: defaultDescription("Mad Hatter Mistress"), image: placeholderImg, price: 400, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/14A8wQe3GeL3bnz4rA2oE2z" },
  { id: "blue-lenses", title: "Blue Lenses", description: defaultDescription("Blue Lenses"), image: placeholderImg, price: 300, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/9B6cN6bVyauN8bne2a2oE2A" },
  { id: "geoffry", title: "Geoffry", description: defaultDescription("Geoffry"), image: placeholderImg, price: 250, size: '20×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/6oU28s7Fi5atajv5vE2oE2B" },
  { id: "divinity", title: "Divinity", description: defaultDescription("Divinity"), image: placeholderImg, price: 250, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/4gMdRaf7K8mF3V78HQ2oE2C" },
  { id: "latte", title: "Latte", description: defaultDescription("Latte"), image: placeholderImg, price: 55, size: '10×10"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/cNi00k1gU8mFcrDbU22oE2D" },
  { id: "mocha", title: "Mocha", description: defaultDescription("Mocha"), image: placeholderImg, price: 55, size: '10×10"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/28E9AU0cQ7iB4Zbe2a2oE2E" },
  { id: "crimson-flow", title: "Crimson Flow", description: defaultDescription("Crimson Flow"), image: placeholderImg, price: 150, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/6oUeVe9Nq9qJdvH2js2oE2F" },
  { id: "awakening-the-flames", title: "Awakening the Flames", description: defaultDescription("Awakening the Flames"), image: awakeningTheFlamesImg.url, price: 75, size: '12×16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/5kQ8wQgbO6ex77jaPY2oE2G" },
  { id: "molten-lava", title: "Molten Lava", description: defaultDescription("Molten Lava"), image: placeholderImg, price: 25, size: '4×12"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/bJedRa5xa46pajv6zI2oE2H" },
  { id: "red-river", title: "Red River", description: defaultDescription("Red River"), image: placeholderImg, price: 25, size: '4×12"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/4gMaEY2kYgTbajvgai2oE2I" },
  { id: "fever-flow", title: "Fever Flow", description: defaultDescription("Fever Flow"), image: placeholderImg, price: 50, size: '5×5"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/cNi5kE9NqdGZ77j8HQ2oE2J" },
  { id: "the-glance", title: "The Glance", description: defaultDescription("The Glance"), image: placeholderImg, price: 200, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/dRmeVegbO7iB63f8HQ2oE2K" },
  { id: "namaste", title: "Namaste", description: defaultDescription("Namaste"), image: placeholderImg, price: 123, size: '12×16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/6oUbJ20cQ5at63fcY62oE2L" },
  { id: "mystic-moon", title: "Mystic Moon", description: defaultDescription("Mystic Moon"), image: placeholderImg, price: 175, size: '16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/aFafZi9Nq32l2R38HQ2oE2M" },
  { id: "mystic-river", title: "Mystic River", description: defaultDescription("Mystic River"), image: placeholderImg, price: 250, size: '12×36"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/9B6bJ2cZC6ex9fr2js2oE2N" },
  { id: "journey", title: "Journey", description: defaultDescription("Journey"), image: placeholderImg, price: 125, size: '12×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/9B6eVe4t6dGZgHT3nw2oE2O" },
  { id: "urban-echoes", title: "Urban Echoes", description: defaultDescription("Urban Echoes"), image: braveSilhouettesImg.url, price: 175, size: '6×40"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/aFacN63p26exbnz3nw2oE2P" },
  { id: "tropical-dreamscape", title: "Tropical Dreamscape", description: defaultDescription("Tropical Dreamscape"), image: placeholderImg, price: 150, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/8x28wQ9Nq46p0IV1fo2oE2Q" },
  { id: "ebb-and-flow", title: "Ebb and Flow", description: defaultDescription("Ebb and Flow"), image: ebbAndFlowImg.url, price: 400, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/6oUfZibVy32lezL9LU2oE2R" },
  { id: "tidal-embrace", title: "Tidal Embrace", description: defaultDescription("Tidal Embrace"), image: aquaticReverieImg.url, price: 225, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/7sY6oI4t60Ud9fr8HQ2oE2S" },
  { id: "natures-muse", title: "Nature's Muse", description: defaultDescription("Nature's Muse"), image: placeholderImg, price: 300, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/00w6oIe3GcCVdvHf6e2oE2T" },
  { id: "time-flies", title: "Time Flies", description: defaultDescription("Time Flies"), image: timeFliesImg.url, price: 400, size: '20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/aFa7sMf7KdGZ3V73nw2oE2U" },
  { id: "frozen-whisper", title: "Frozen Whisper", description: defaultDescription("Frozen Whisper"), image: placeholderImg, price: 150, size: '16"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/4gM3cw9Nq0Udajv5vE2oE2V" },
  { id: "circles-of-life", title: "Circles of Life", description: defaultDescription("Circles of Life"), image: circlesOfLifeImg.url, price: 200, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/5kQ5kEcZCauN3V74rA2oE2W" },
  { id: "shards-of-life", title: "Shards of Life", description: defaultDescription("Shards of Life"), image: fracturedPrismImg.url, price: 200, size: '16×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/6oU4gAcZCfP7bnz6zI2oE2X" },
  { id: "gilded-manifestation", title: "Gilded Manifestation", description: defaultDescription("Gilded Manifestation"), image: gildedManifestationImg.url, price: 400, size: '21×27"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/5kQ9AUbVy9qJ8bn6zI2oE2Y" },
  { id: "purple-mistress", title: "Purple Mistress", description: defaultDescription("Purple Mistress"), image: placeholderImg, price: 200, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/aFa7sMaRubyRezL6zI2oE2Z" },
  { id: "silent-reverie", title: "Silent Reverie", description: defaultDescription("Silent Reverie"), image: fragmentsRememberedImg.url, price: 150, size: '10×40"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/eVq8wQ7FicCVcrD6zI2oE30" },
  { id: "guardians-within", title: "Guardians Within", description: defaultDescription("Guardians Within"), image: placeholderImg, price: 250, size: '8×40"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/9B64gA0cQcCVdvHe2a2oE31" },
  { id: "meadow", title: "Meadow", description: defaultDescription("Meadow"), image: placeholderImg, price: 300, size: '15×27"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/dRmbJ2cZC8mFajvbU22oE32" },
  { id: "sunflower-goddess", title: "Sunflower Goddess", description: defaultDescription("Sunflower Goddess"), image: goddessSunflowerImg.url, price: 500, size: '24×30"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/3cI5kE4t68mFbnzgai2oE33" },
  { id: "redeemed", title: "Redeemed", description: defaultDescription("Redeemed"), image: blindingVintageImg.url, price: 95, size: '9×14"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/4gM3cwbVy0Ud9fr6zI2oE34" },
  { id: "full-circle", title: "Full Circle", description: defaultDescription("Full Circle"), image: gildedHorizonsImg.url, price: 300, size: '', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/4gMcN6aRu1Yh1MZ0bk2oE35" },
  { id: "bourbon-street-beats", title: "Bourbon Street Beats", description: defaultDescription("Bourbon Street Beats"), image: bourbonStreetDreamsImg.url, price: 600, size: '18×24"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/00wfZibVyauNcrDaPY2oE36" },
  { id: "lunar-longings", title: "Lunar Longings", description: defaultDescription("Lunar Longings"), image: celestialHowlImg.url, price: 350, size: '20×20"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/3cI5kE2kY8mF9frf6e2oE37" },
  { id: "natures-adornment", title: "Nature's Adornment", description: defaultDescription("Nature's Adornment"), image: adornmentImg.url, price: 700, size: '24×36"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/14AfZicZCfP79fr9LU2oE38" },
  { id: "mystic-orbs", title: "Mystic Orbs", description: defaultDescription("Mystic Orbs"), image: celestialOrbitsImg.url, price: 400, size: '24×48"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/bJe7sM2kY0UdfDP0bk2oE39" },
  { id: "the-resting-tree", title: "The Resting Tree", description: defaultDescription("The Resting Tree"), image: placeholderImg, price: 300, size: '', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/bJeeVe5xa46p77j3nw2oE3a" },
  { id: "muses-gaze", title: "Muses Gaze", description: defaultDescription("Muses Gaze"), image: placeholderImg, price: 375, size: '12×36"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/00wdRabVydGZ3V7cY62oE3b" },
  { id: "natures-enchanted-playground", title: "Nature's Enchanted Playground", description: defaultDescription("Nature's Enchanted Playground"), image: placeholderImg, price: 1100, size: '36×36"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/9B64gA1gUbyRdvH4rA2oE3c" },
  { id: "echoes-of-the-tropics", title: "Echoes of the Tropics", description: defaultDescription("Echoes of the Tropics"), image: coastalSerenityImg.url, price: 800, size: '38×48"', medium: "Mixed Media", year: 2024, available: true, collection: "No Two Alike", paymentLink: "https://buy.stripe.com/9B6dRabVyauN8bn5vE2oE3d" },
];

export const getArtworkById = (id: string): Artwork | undefined => {
  return artworks.find((artwork) => artwork.id === id);
};
