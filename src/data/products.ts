import { JewelProduct } from '../types';
import solarisImg from '../assets/images/product_solaris_pendant_1791177616767.jpg';
import moltenRingImg from '../assets/images/product_molten_ring_1791177630884.jpg';
import baroqueEarringsImg from '../assets/images/product_baroque_earrings_1791177642159.jpg';
import botanicalCuffImg from '../assets/images/product_botanical_cuff_1791177655936.jpg';

export const PRODUCTS: JewelProduct[] = [
  {
    id: 'solaris-pendant',
    name: 'Solaris Raw Emerald Medallion',
    subtitle: 'Hand-hammered 18k solid gold with untreated rough Colombian emerald',
    category: 'necklaces',
    price: 680,
    image: solarisImg,
    metalOptions: ['18K Recycled Yellow Gold', '18K Warm Rose Gold', '925 Sterling Silver'],
    stone: 'Raw Muzo Emerald (1.45 ct)',
    description: 'Each medallion is hand-melted and hammered individually on an antique French steel anvil, producing an organic celestial texture that catches the light like trembling water.',
    story: 'Mined responsibly from small-scale artisanal pits in Boyacá, Colombia, without harsh chemical processing. The raw emerald crystals preserve their natural hexagonal geometry, untouched by automated cutters.',
    dimensions: 'Medallion diameter 21mm · 1.5mm curb chain with handmade lobster clasp',
    edition: 'Small bench batch of 9 pieces',
    sizes: ['16 inches (Choker length)', '18 inches (Standard collar)', '20 inches (Low plunge)'],
    hallmark: 'Hallmarked 750 (18K) & Aurelia Studio maker stamp',
    inStock: true,
    featured: true,
    rating: 5.0,
    reviewCount: 14,
    tags: ['Ethical Emerald', 'Recycled Gold', 'Water-Hammered']
  },
  {
    id: 'molten-signet-ring',
    name: 'Terra Molten Edge Signet',
    subtitle: 'Textured recycled gold signet with flush-set salt & pepper diamond',
    category: 'rings',
    price: 890,
    image: moltenRingImg,
    metalOptions: ['18K Recycled Yellow Gold', '950 Pure Platinum', '925 Antiqued Silver'],
    stone: 'Salt & Pepper Natural Diamond (0.62 ct)',
    description: 'Forged with molten, uneven borders reminiscent of cooled volcanic magma. The natural salt & pepper diamond exhibits cosmic galaxy inclusions, each completely one-of-a-kind.',
    story: 'Cast using the ancient lost-wax technique where our artisan hand-carves the master form into jeweler wax with micro-chisels before torch-casting in small batches.',
    dimensions: 'Signet face 12mm x 14mm · Band width tapers from 9mm to 4.2mm',
    edition: 'Made to order · 7 business days bench time',
    sizes: ['US 5', 'US 6', 'US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    hallmark: 'Stamped 750 gold with certified diamond origin card',
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 22,
    tags: ['Salt & Pepper Diamond', 'Lost-Wax Cast', 'Heavy Signet']
  },
  {
    id: 'baroque-pearl-drops',
    name: 'Selene Baroque Pearl Drops',
    subtitle: 'Luminous freshwater baroque pearls suspended on hand-twisted silver',
    category: 'earrings',
    price: 420,
    image: baroqueEarringsImg,
    metalOptions: ['925 Sterling Silver', '18K Yellow Gold Vermeil', '18K Solid Gold'],
    stone: 'Wild Baroque Freshwater Pearls (14–16mm)',
    description: 'No two pearls in the Selene pair are identical; their asymmetrical, organic contours mirror ocean ripples and moon reflections. Suspended on hand-twisted wire hooks.',
    story: 'Harvested from quiet freshwater lakes with ethical slow-cultivation methods that preserve aquatic ecosystems. Hand-sorted by luster, iridescence, and natural silhouette.',
    dimensions: 'Drop length 38mm · Average pearl diameter 15mm · Total pair weight 8.2g',
    edition: 'Edition of 12 numbered pairs',
    sizes: ['French Wire Hook', 'Stud Post with Comfort Clutch'],
    hallmark: 'Engraved 925 / 750 Studio Assay Stamp',
    inStock: true,
    featured: true,
    rating: 5.0,
    reviewCount: 19,
    tags: ['Baroque Pearl', 'Organic Form', 'Featherlight']
  },
  {
    id: 'botanical-sculpted-cuff',
    name: 'Sylvan Hand-Carved Branch Cuff',
    subtitle: 'Heavy sculpted open cuff with raw bark texture and satin brush finish',
    category: 'bracelets',
    price: 740,
    image: botanicalCuffImg,
    metalOptions: ['18K Recycled Yellow Gold', 'Solid jeweler bronze', '925 Heavy Silver'],
    stone: 'Solid hand-textured metal (unadorned)',
    description: 'Inspired by ancient olive boughs in Mediterranean groves. Hand-shaped using heavy horn mallets and chased with steel gravers to create a delicate botanical bark texture.',
    story: 'Cold-forged from a single billet of recycled precious alloy, annealed five separate times over flame to achieve the perfect balance of tensile strength and gentle adjustability.',
    dimensions: 'Width 8.5mm · Thickness 2.8mm · Inner circumference 165mm (adjustable)',
    edition: 'Limited seasonal pour · 6 pieces remaining',
    sizes: ['Small (14-16cm wrist)', 'Medium (16-18cm wrist)', 'Large (18-20cm wrist)'],
    hallmark: 'Deep laser hallmark & bench number',
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 11,
    tags: ['Botanical Bark', 'Hand-Forged', 'Adjustable Cuff']
  },
  {
    id: 'aethel-sapphire-band',
    name: 'Aethel Ceylon Sapphire Crown Band',
    subtitle: 'Scattered unheated teal sapphires flush-set in molten textured band',
    category: 'rings',
    price: 950,
    image: moltenRingImg,
    metalOptions: ['18K Recycled Yellow Gold', '18K White Gold', '18K Rose Gold'],
    stone: 'Ethical Montana & Ceylon Sapphires (0.85 ct total)',
    description: 'A continuous ring of undulating gold textured like windswept dunes, set with five flush-set natural sapphires ranging from ocean teal to deep midnight blue.',
    story: 'Every stone is hand-selected by our head gemologist, sourced directly from ethical family-owned mines in Sri Lanka adhering to fair wage and environmental restoration protocols.',
    dimensions: 'Band height 4.5mm · Soft comfort-fit inner profile',
    edition: 'Small batch of 8 pieces',
    sizes: ['US 5', 'US 6', 'US 7', 'US 8', 'US 9', 'US 10'],
    hallmark: 'Hallmarked 750 Gold & Aurelia Gem Registry',
    inStock: true,
    featured: false,
    rating: 5.0,
    reviewCount: 17,
    tags: ['Unheated Sapphire', 'Molten Band', 'Comfort Fit']
  },
  {
    id: 'luna-torc-necklace',
    name: 'Aura Crescent Torc Choker',
    subtitle: 'Hand-hammered open neck torc crafted in forged solid sterling',
    category: 'necklaces',
    price: 530,
    image: solarisImg,
    metalOptions: ['925 Sterling Silver', '18K Yellow Gold Dip', 'Solid 18K Gold'],
    stone: 'Cabochon Rainbow Moonstone finials',
    description: 'A minimalist sculptural collar that rests gently on the collarbones, finished with rounded raw rainbow moonstones that emit a gentle blue adularescence under natural light.',
    story: 'Hand-hammered on a specialized teardrop mandrel over three hours of synchronized cold-working to ensure an ergonomic contour that rests naturally without pinching.',
    dimensions: 'Circumference 38cm · Open gap 6cm (flexible adjustability)',
    edition: 'Edition of 10 handcrafted collars',
    sizes: ['Standard Ergonomic Contour (One size adjustable)'],
    hallmark: 'Hand-engraved 925 silversmith mark',
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewCount: 9,
    tags: ['Moonstone', 'Torc Collar', 'Sculptural']
  },
  {
    id: 'sol-hammered-hoops',
    name: 'Sol Textured Huggie Hoops',
    subtitle: 'Daily 18k gold huggies with hand-faceted light-reflecting facet chisels',
    category: 'earrings',
    price: 360,
    image: baroqueEarringsImg,
    metalOptions: ['18K Recycled Yellow Gold', '18K Rose Gold', '925 Sterling Silver'],
    stone: 'Micro Brilliant Cut Diamonds (0.12 ct)',
    description: 'Designed for effortless daily wear. The outer rim is micro-chiseled by hand so each facet scatters candlelight and sunlight with organic subtlety.',
    story: 'Crafted with our signature hinge mechanism engineered from solid wire rather than hollow tubing, ensuring lifelong durability and a satisfying click clasp.',
    dimensions: 'Outer diameter 14mm · Inner diameter 10mm · Width 2.4mm',
    edition: 'In bench stock · Ready to dispatch in 24 hours',
    sizes: ['14mm Daily Huggie', '18mm Medium Statement'],
    hallmark: 'Laser stamped 750 with click-security clasp',
    inStock: true,
    featured: false,
    rating: 5.0,
    reviewCount: 31,
    tags: ['Daily Fine Jewelry', 'Solid 18K', 'Hand-Chiseled']
  },
  {
    id: 'vesta-meteorite-chain',
    name: 'Vesta Heavy Paperclip Link Bracelet',
    subtitle: 'Individually soldered elongated links with raw textured toggle closure',
    category: 'bracelets',
    price: 620,
    image: botanicalCuffImg,
    metalOptions: ['18K Recycled Yellow Gold', '925 Heavy Silver', 'Mixed Two-Tone Gold & Silver'],

    stone: 'Solid textured links with hidden flush diamond on toggle',
    description: 'Each oval link is hand-pulled from drawn wire, shaped around custom mandrels, and soldered with hard gold solder for unmistakable artisanal weight and drape.',
    story: 'Finished with a signature organic T-bar toggle cast directly from a naturally eroded coastal pebble discovered on the Cornish coastline.',
    dimensions: 'Link size 16mm x 5mm · Total length 18.5cm with adjustable toggle ring',
    edition: 'Bench crafted · 5 pieces remaining',
    sizes: ['Small (17cm)', 'Medium (19cm)', 'Large (21cm)'],
    hallmark: 'Full UK Assay Office Hallmark hallmarks',
    inStock: true,
    featured: false,
    rating: 4.9,
    reviewCount: 16,
    tags: ['Heavy Links', 'Hand-Soldered', 'Coastal Pebble Toggle']
  }
];

export const ARTISAN_STORY = {
  quote: "Fine jewelry should carry the tactile thumbprints of human hands, the honest weight of recycled gold, and stones that tell the geological history of the earth.",
  founder: "Clara Vance & Matteo Moretti",
  role: "Master Goldsmiths & Atelier Co-Founders",
  location: "Bristol Studio & Florence Benchwork",
  pillars: [
    {
      title: "100% Recycled Precious Metals",
      description: "Every gram of our 18K gold and 925 sterling silver is refined from certified post-consumer precious metals, eliminating the environmental toll of virgin mining."
    },
    {
      title: "Untreated & Conflict-Free Gems",
      description: "We work exclusively with small-scale family miners in Colombia, Sri Lanka, and Montana who follow transparent fair-wage practices and restorative land stewardship."
    },
    {
      title: "Slow Bench Production",
      description: "We produce fewer than 350 jewels annually. Nothing is mass-stamped or automated. Each piece spends hours at our jeweler's bench with flame, file, and anvil."
    }
  ]
};

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Eleanor Sterling',
    location: 'London, UK',
    jewel: 'Solaris Raw Emerald Medallion',
    rating: 5,
    date: 'February 2026',
    comment: 'The weight and tactile texture of the gold medallion is unlike anything from commercial luxury houses. The raw emerald has this mesmerizing mossy green interior that catches the morning sun. It arrived wrapped in linen with an artisan note detailing the bench date.'
  },
  {
    id: 'rev-2',
    author: 'Julian M. Hayes',
    location: 'Zurich, Switzerland',
    jewel: 'Terra Molten Edge Signet',
    rating: 5,
    date: 'January 2026',
    comment: 'I commissioned this as an alternative wedding band. The molten edges and the salt-and-pepper diamond have so much character. It feels ancient yet completely modern. The custom engraving inside the shank is pristine.'
  },
  {
    id: 'rev-3',
    author: 'Camille Laurent',
    location: 'Paris, France',
    jewel: 'Selene Baroque Pearl Drops',
    rating: 5,
    date: 'March 2026',
    comment: 'Pure poetry. The baroque pearls have a gorgeous iridescent peacock sheen. You can tell they were matched by human eyes for their unique harmony rather than machine uniformity. They feel featherlight on the ears.'
  }
];
