export interface CatalogItem {
  id: string;
  title: string;
  price?: string;
  rentPrice?: string;
  deposit?: string;
  driveId?: string;
  category: string;
  subCategory?: string;
  tags: string[];
  localAsset: string;
  description?: string;
  specs?: string;
}

/**
 * 1. Decor Catalog: Event Decor Packages
 */
export const decorCatalog: CatalogItem[] = [
  {
    id: "dec-01",
    title: "Princess Royal Palace Stage Setup",
    price: "₹6,500",
    rentPrice: "₹6,500",
    category: "Decor",
    tags: ["birthday", "kids-theme", "princess", "balloon-garland"],
    localAsset: "/catalog/decor/decor-01.jpg",
    specs: "Includes Backdrop Arch, Balloon Pillars, Crown Accents & Cake Pedestals",
    description: "Grand pink & pastel balloon arch setup with castle turret towers, dual crown pillar tops, and custom birthday signage."
  },
  {
    id: "dec-02",
    title: "Warm Fairy Lights & Shimmer Sequin Stage",
    price: "₹7,000",
    rentPrice: "₹7,000",
    category: "Decor",
    tags: ["milestone", "shimmer-wall", "fairy-lights", "birthday"],
    localAsset: "/catalog/decor/decor-02.jpg",
    specs: "Fairy Light Sheer Drapery + Gold Sequin Shimmer Wall + Name Letter Lights",
    description: "Warm glowing micro-fairy lights canopy backdrop combined with luxury champagne gold shimmer sequin wall and illuminated letters."
  },
  {
    id: "dec-03",
    title: "Sonic the Hedgehog Speed Adventure Stage",
    price: "₹7,500",
    rentPrice: "₹7,500",
    category: "Decor",
    tags: ["birthday", "kids-theme", "cartoon-theme", "balloon-garland"],
    localAsset: "/catalog/decor/decor-03.jpg",
    specs: "Character Themed Backdrop, Custom Name Lighting & Cylinder Plinths",
    description: "Action-packed Sonic theme birthday setup featuring vibrant cobalt blue, red, and gold balloon arch, Sonic character cutouts, and illuminated name lettering."
  },
  {
    id: "dec-04",
    title: "Pink Magical Unicorn 1st Birthday Wonderland",
    price: "₹8,000",
    rentPrice: "₹8,000",
    category: "Decor",
    tags: ["1st-birthday", "kids-theme", "unicorn", "balloon-garland"],
    localAsset: "/catalog/decor/decor-04.jpg",
    specs: "Unicorn Arch & Cutouts, Marquee 1, Custom Table & Cake Stands",
    description: "Enchanted pastel pink and gold unicorn celebration setup with unicorn horn accents, floral foliage, and marquee number 1."
  },
  {
    id: "dec-05",
    title: "My Little Pony & Unicorn Fantasy Stage",
    price: "₹8,000",
    rentPrice: "₹8,000",
    category: "Decor",
    tags: ["birthday", "kids-theme", "unicorn", "balloon-garland"],
    localAsset: "/catalog/decor/decor-05.jpg",
    specs: "Arch, Cutouts, Balloon Garland & Cylinder Riser Set",
    description: "Vibrant fantasy theme setup with multi-tone pastel balloon garland, life-size animated cutouts, custom signage, and cake table display."
  },
  {
    id: "dec-06",
    title: "Silver 25th Milestone & Pastel Dual Hoop Setup",
    price: "₹4,000",
    rentPrice: "₹4,000",
    category: "Decor",
    tags: ["milestone", "anniversary", "arch", "birthday"],
    localAsset: "/catalog/decor/decor-06.jpg",
    specs: "Metallic Ring Arch Stand + Organic Balloon Arch + Number/Name Accent",
    description: "Dual design options: Silver 25th Anniversary celebration with silver foil numerals, or pastel blue & pink ring arch for intimate birthdays."
  },
  {
    id: "dec-07",
    title: "Classic Gold & Maroon Circular Ring Balloon Arch",
    price: "₹4,500",
    rentPrice: "₹4,500",
    category: "Decor",
    tags: ["birthday", "arch", "balloon-garland"],
    localAsset: "/catalog/decor/decor-07.jpg",
    specs: "7ft Ring Stand, Dual-Tone Balloons, Center Neon/Letter Accent",
    description: "Metallic circular hoop arch with rich metallic balloon clusters: available in vibrant Gold & Black or Royal Maroon & Blush Pink."
  },
  {
    id: "dec-08",
    title: "Emerald Green Gold & Winged Black Milestone Stage",
    price: "₹4,500",
    rentPrice: "₹4,500",
    category: "Decor",
    tags: ["milestone", "arch", "birthday"],
    localAsset: "/catalog/decor/decor-08.jpg",
    specs: "Circular Arch Stand, Organic Balloon Half-Garland & Backdrop Wings",
    description: "Featuring Lush Emerald Green with Champagne Gold accents, or Winged Black & Gold Glamour Arch with illuminated typography."
  },
  {
    id: "dec-09",
    title: "Pastel Rainbow & Obsidian Winged Arch Stage",
    price: "₹4,500",
    rentPrice: "₹4,500",
    category: "Decor",
    tags: ["birthday", "kids-theme", "arch"],
    localAsset: "/catalog/decor/decor-09.jpg",
    specs: "Circular Hoop Frame + Pastel Balloon Garland + Customized Signage",
    description: "Dreamy candy pastel rainbow balloon hoop alongside midnight black & chrome gold winged arch setup."
  },
  {
    id: "dec-10",
    title: "Gold & White Luxe Balloon Ring Setup",
    price: "₹5,000",
    rentPrice: "₹5,000",
    category: "Decor",
    tags: ["birthday", "naming-ceremony", "arch"],
    localAsset: "/catalog/decor/decor-10.jpg",
    specs: "Circular Ring Frame, Chrome Gold Balloon Clusters, Cylinder Table",
    description: "Elegant white and metallic chrome gold balloon ring arch with illuminated name display and cake riser plinths."
  },
  {
    id: "dec-11",
    title: "Ruby Red 40th Milestone & Sunset Fairy Lights Arch",
    price: "₹5,000",
    rentPrice: "₹5,000",
    category: "Decor",
    tags: ["milestone", "birthday", "arch", "fairy-lights"],
    localAsset: "/catalog/decor/decor-11.jpg",
    specs: "Circular Arch Stand, Warm Fairy Lights, Foil Milestone Numerals",
    description: "Crimson red and gold half-arch milestone backdrop paired with warm amber sunset fairy lights circular arch for evening parties."
  },
  {
    id: "dec-12",
    title: "Blush Pink & White Floral Circle Arch",
    price: "₹5,000",
    rentPrice: "₹5,000",
    category: "Decor",
    tags: ["birthday", "arch", "pastel-gold"],
    localAsset: "/catalog/decor/decor-12.jpg",
    specs: "7ft Circle Frame, High-Shine Latex Balloons, Acrylic Center Plaque",
    description: "Delicate baby pink and pearl white circular arch with cascading organic balloons and illuminated name plaque."
  },
  {
    id: "dec-13",
    title: "Royal Crimson Lantern Arch & White Plinth Setup",
    price: "₹5,500",
    rentPrice: "₹5,500",
    category: "Decor",
    tags: ["traditional", "naming-ceremony", "arch"],
    localAsset: "/catalog/decor/decor-13.jpg",
    specs: "Ring Backdrop, Cylinder Plinths, Traditional Hanging Lanterns",
    description: "Traditional ruby red floral ring with hanging brass lanterns and contemporary gold & white cylinder plinth hoop."
  },
  {
    id: "dec-14",
    title: "London Calling & Obsidian Gold Birthday Stage",
    price: "₹5,500",
    rentPrice: "₹5,500",
    category: "Decor",
    tags: ["birthday", "kids-theme", "arch"],
    localAsset: "/catalog/decor/decor-14.jpg",
    specs: "Backdrop Hoop, Themed Cutout Panels, Marquee Letters",
    description: "London travel themed celebration with red telephone booth cutouts or high-glamour black, gold and chrome balloon hoop."
  },
  {
    id: "dec-15",
    title: "Garden Picket Fence 1st Birthday Stage",
    price: "₹6,000",
    rentPrice: "₹6,000",
    category: "Decor",
    tags: ["1st-birthday", "kids-theme", "props"],
    localAsset: "/catalog/decor/decor-15.jpg",
    specs: "White Picket Fence Set, Circular Balloon Frame, Marquee 1 & Name",
    description: "First birthday garden theme celebration with clean white wooden picket fencing, pastel balloon arch, and milestone props."
  },
  {
    id: "dec-16",
    title: "Sweet 16 Romantic Heart Balloon Arch",
    price: "₹6,000",
    rentPrice: "₹6,000",
    category: "Decor",
    tags: ["milestone", "birthday", "arch"],
    localAsset: "/catalog/decor/decor-16.jpg",
    specs: "Heart-Shaped Metal Arch Frame, Organic Balloons, Marquee 16",
    description: "Heart-shaped structural balloon backdrop setup with illuminated marquee numbers 16 and cursive LED neon for sweet-sixteen parties."
  },
  {
    id: "dec-17",
    title: "Flirty 30th Milestone & Candy Pastel Plinths",
    price: "₹6,000",
    rentPrice: "₹6,000",
    category: "Decor",
    tags: ["milestone", "birthday", "furniture-and-plinths"],
    localAsset: "/catalog/decor/decor-17.jpg",
    specs: "Ring Arch, Nested Fluted Plinths, Milestone Numerals",
    description: "Sophisticated 30th celebration ring or sweet pastel pink candy cylinder plinth setup with cupcake tiered risers."
  },
  {
    id: "dec-18",
    title: "Rose Gold Butterfly Arch & Jurassic Dino Theme",
    price: "₹6,000",
    rentPrice: "₹6,000",
    category: "Decor",
    tags: ["kids-theme", "birthday", "arch", "butterfly"],
    localAsset: "/catalog/decor/decor-18.jpg",
    specs: "Arch Stand, Dino Cutouts/Butterfly Wings, Balloon Garland",
    description: "Romantic metallic rose gold butterfly floral hoop or roaring jungle dinosaur adventure setup with realistic foliage."
  },
  {
    id: "dec-19",
    title: "Sapphire Blue Celestial Starry Arch Setup",
    price: "₹6,000",
    rentPrice: "₹6,000",
    category: "Decor",
    tags: ["birthday", "naming-ceremony", "arch"],
    localAsset: "/catalog/decor/decor-19.jpg",
    specs: "Square Block / Hoop Frame, Star Foil Accents, Name Lighting",
    description: "Royal sapphire blue and crisp white block balloon arch with sparkling foil stars and illuminated typography."
  },
  {
    id: "dec-20",
    title: "Golden Woodland Deer & Floral Bride-to-Be Stage",
    price: "₹7,000",
    rentPrice: "₹7,000",
    category: "Decor",
    tags: ["baby-shower", "naming-ceremony", "wedding", "arch"],
    localAsset: "/catalog/decor/decor-20.jpg",
    specs: "Gold Metal Arch Stand, Premium Florals, Geometric Deer Cutouts",
    description: "Enchanted woodland setup with geometric gold deer accents or romantic floral ring arch for Bachelorette and Bride-to-Be parties."
  },
  {
    id: "dec-21",
    title: "Grand Butterfly Garden 3rd Birthday Palace",
    price: "₹22,000",
    rentPrice: "₹22,000",
    category: "Decor",
    tags: ["birthday", "kids-theme", "stage", "butterfly"],
    localAsset: "/catalog/decor/decor-21.jpg",
    specs: "Full Stage Backdrop (16ft+), Giant Butterfly Wings, Floral Pelmet, Marquee Letters",
    description: "Elaborate luxury birthday stage setup with giant 3D cutout butterfly wings, cascading floral garlands, dual balloon arches, display pedestals, and full marquee illuminated name lettering."
  },
  {
    id: "dec-22",
    title: "CoComelon Sing-Along 1st Birthday Setup",
    price: "₹8,500",
    rentPrice: "₹8,500",
    category: "Decor",
    tags: ["1st-birthday", "kids-theme", "cocomelon", "balloon-garland"],
    localAsset: "/catalog/decor/decor-22.jpg",
    specs: "Round Backdrop, Character Cutouts, 3D ONE Marquee, Cylinder Plinths",
    description: "Colorful CoComelon setup with rainbow organic balloon arch, round character backdrop, yellow school bus cutouts, cylinder pedestals, and illuminated marquee ONE and name blocks."
  },
  {
    id: "dec-23",
    title: "Pastel Pink Butterfly Ring & Gold Pedestals",
    price: "₹9,000",
    rentPrice: "₹9,000",
    category: "Decor",
    tags: ["birthday", "butterfly", "arch", "pastel-gold"],
    localAsset: "/catalog/decor/decor-23.jpg",
    specs: "Circular Backdrop, 3D Butterfly Wings, 3 Gold-Legged Tables, Cake Risers",
    description: "Chic circular pastel pink backdrop with life-size 3D cutout butterfly wings, organic balloon clusters, and trio of gold-legged pedestal dessert tables with Happy Birthday signage."
  },
  {
    id: "dec-24",
    title: "Sequin Wall Milestone Celebration Duo (18th & 5th)",
    price: "₹9,000",
    rentPrice: "₹9,000",
    category: "Decor",
    tags: ["milestone", "shimmer-wall", "birthday"],
    localAsset: "/catalog/decor/decor-24.jpg",
    specs: "Full Sequin Wall (8x8ft), Organic Balloon Garland, Number & Name Cutouts",
    description: "Shimmer sequin wall package available in Metallic Gold 18th Milestone or Ice Blue & White 5th Celebration with cascading balloon arches and display plinths."
  },
  {
    id: "dec-25",
    title: "Shimmer Sequin Wall & Blush Milestone Suite",
    price: "₹9,000",
    rentPrice: "₹9,000",
    category: "Decor",
    tags: ["milestone", "shimmer-wall", "birthday"],
    localAsset: "/catalog/decor/decor-25.jpg",
    specs: "Sequin Wall or Round Backdrop, Balloon Arch, Marquee Letters",
    description: "Twin luxury packages: Round Blush Pink Backdrop with balloon arches and pedestals, or Grand Gold Sequin Shimmer Wall with illuminated marquee letters."
  },
  {
    id: "dec-26",
    title: "CoComelon Garden 1st Birthday Setup",
    price: "₹9,000",
    rentPrice: "₹9,000",
    category: "Decor",
    tags: ["1st-birthday", "kids-theme", "cocomelon"],
    localAsset: "/catalog/decor/decor-26.jpg",
    specs: "Backdrop Banner, Rainbow Balloon Arch, Balloon Mosaic Number 1",
    description: "Vibrant outdoor/lawn CoComelon first birthday setup with colorful balloon arch, personalized banner, character figures, and giant standing balloon-filled number 1."
  },
  {
    id: "dec-27",
    title: "Royal Purple & Obsidian 25th Milestone Celebration",
    price: "₹10,000",
    rentPrice: "₹10,000",
    category: "Decor",
    tags: ["milestone", "arch", "birthday", "backdrops-and-arches"],
    localAsset: "/catalog/decor/decor-27.jpg",
    specs: "Twin Arched Wooden Frames, Purple Uplighting, Vintage Trunks & Pedestals",
    description: "Modern dual arched backdrops with purple ambient LED uplighting, deep purple, black & white balloons, stacked vintage trunks, gold pedestals, and Cheers to 25 Years signage."
  },
  {
    id: "dec-28",
    title: "Silver Shimmer 'Fun to be One' 1st Birthday Stage",
    price: "₹10,000",
    rentPrice: "₹10,000",
    category: "Decor",
    tags: ["1st-birthday", "shimmer-wall", "kids-theme"],
    localAsset: "/catalog/decor/decor-28.jpg",
    specs: "Silver Shimmer Wall, Blue & Gold Balloons, Wooden Fence Border, Marquee 1",
    description: "Gleaming silver sequin shimmer wall backdrop with royal blue and chrome gold organic balloon garland, rustic wooden picket fences, cylinder plinths, and large white standing letters."
  },
  {
    id: "dec-29",
    title: "Botanical Grass Wall & Neon 'Baby Shower' Setup",
    price: "₹10,000",
    rentPrice: "₹10,000",
    category: "Decor",
    tags: ["baby-shower", "neon", "botanical"],
    localAsset: "/catalog/decor/decor-29.jpg",
    specs: "8x8ft Boxwood Hedge Wall, Custom Neon Sign, BABY Letter Boxes",
    description: "Lush green boxwood foliage wall adorned with pastel rainbow balloon garland, glowing white neon Baby Shower signage, transparent BABY balloon cubes, and cylinder pedestals."
  },
  {
    id: "dec-30",
    title: "Magical Foliage Unicorn 'ONE' Birthday Setup",
    price: "₹10,000",
    rentPrice: "₹10,000",
    category: "Decor",
    tags: ["1st-birthday", "kids-theme", "unicorn", "botanical"],
    localAsset: "/catalog/decor/decor-30.jpg",
    specs: "Foliage Backdrop, Giant Marquee ONE Blocks, Unicorn Figures, Cake Table",
    description: "Green botanical foliage wall backdrop decorated with pastel organic balloon garland, glowing neon accents, fairy tale unicorn cutouts, and giant warm-lit 3D block letters spelling ONE."
  },
  {
    id: "dec-31",
    title: "Royal Prince 1st Birthday Palace Stage",
    price: "₹10,000",
    rentPrice: "₹10,000",
    category: "Decor",
    tags: ["1st-birthday", "kids-theme", "stage"],
    localAsset: "/catalog/decor/decor-31.jpg",
    specs: "Full Drapery Backdrop, 2 Crown Balloon Towers, Balloon Mosaic 1, Marquee Letters",
    description: "Majestic sky blue and white drapery stage setup featuring twin balloon pillars topped with golden royal crowns, wooden picket fences, balloon-filled mosaic 1, and marquee name lights."
  },
  {
    id: "dec-32",
    title: "Grand CoComelon Carousel 1st Birthday Stage",
    price: "₹12,000",
    rentPrice: "₹12,000",
    category: "Decor",
    tags: ["1st-birthday", "kids-theme", "cocomelon", "stage"],
    localAsset: "/catalog/decor/decor-32.jpg",
    specs: "Full Stage Backdrop, Giant Illuminated ONE, Cocomelon Cylinder Wraps, Crates",
    description: "Spectacular CoComelon celebration featuring rainbow balloon arch, personalized banner, giant 3D illuminated ONE centerpiece with name lights, wooden crates, and themed cylinder plinths."
  },
  {
    id: "dec-33",
    title: "Obsidian & Gold Glamour Sequin Shimmer Stage",
    price: "₹12,000",
    rentPrice: "₹12,000",
    category: "Decor",
    tags: ["milestone", "shimmer-wall", "birthday", "stage"],
    localAsset: "/catalog/decor/decor-33.jpg",
    specs: "Gold Sequin Shimmer Wall (8x8ft), Luxury Origami Plinths, Birdcages, Vintage Trunks",
    description: "High-end luxury gold shimmer sequin wall with billowing chrome gold, navy blue, and blush balloon clouds, white fluted/origami plinths, vintage pastel cases, gold birdcages, and Happy Birthday neon."
  },
  {
    id: "dec-34",
    title: "Rustic Farmhouse & Windmill 1st Birthday Setup",
    price: "₹12,000",
    rentPrice: "₹12,000",
    category: "Decor",
    tags: ["1st-birthday", "kids-theme", "props"],
    localAsset: "/catalog/decor/decor-34.jpg",
    specs: "Arched Barn & Windmill Structure, Cow-Print Plinths, Marquee Bulb 1, Animal Props",
    description: "Charming farm barnyard celebration with custom arched pink barn backdrop, spinning windmill cutout, farm animal characters (pig, sheep, hen), cow-print cylinder plinths, and marquee bulb 1."
  },
  {
    id: "dec-35",
    title: "Diamond 60th Jubilee Champagne & Gold Stage",
    price: "₹12,000",
    rentPrice: "₹12,000",
    category: "Decor",
    tags: ["milestone", "shimmer-wall", "birthday", "stage"],
    localAsset: "/catalog/decor/decor-35.jpg",
    specs: "Gold Sequin Wall + Drapes, Champagne Bottle Tower, Foil 60, Fluted Plinths",
    description: "Grand 60th birthday setup with gold shimmer sequin wall, elegant champagne drapery, gold and white balloon arch, giant gold foil 60 balloons, 6ft champagne bottle balloon tower, and illuminated name letters."
  },
  {
    id: "dec-36",
    title: "Celestial Clouds & Stars Shimmer 1st Birthday",
    price: "₹13,000",
    rentPrice: "₹13,000",
    category: "Decor",
    tags: ["1st-birthday", "shimmer-wall", "kids-theme", "stage"],
    localAsset: "/catalog/decor/decor-36.jpg",
    specs: "Gold Shimmer Wall + Drapes, Floating Cloud Balloons, 3D Illuminated ONE, Picket Fence",
    description: "Dreamy celestial celebration with gold shimmer wall, white sheer drapes, hanging illuminated balloon clouds, giant 3D marquee ONE with letters, wooden picket fence, and stacked vintage luggage."
  },
  {
    id: "dec-37",
    title: "Royal Photo Gallery & Rosette Fan Stage",
    price: "₹13,000",
    rentPrice: "₹13,000",
    category: "Decor",
    tags: ["milestone", "birthday", "stage", "neon"],
    localAsset: "/catalog/decor/decor-37.jpg",
    specs: "Draped Backdrop, Hanging Gold Ornate Picture Frames, Rosette Fan Cascade, Wire Plinths",
    description: "Sophisticated milestone setup featuring pleated white drapery, warm neon Happy Birthday, ornate hanging gold photo frames displaying memory portraits, black & white rosette fans, and rose gold wire pedestals."
  },
  {
    id: "dec-38",
    title: "Grand Boss Baby 1st Birthday Executive Suite",
    price: "₹17,000",
    rentPrice: "₹17,000",
    category: "Decor",
    tags: ["1st-birthday", "kids-theme", "boss-baby", "stage", "shimmer-wall"],
    localAsset: "/catalog/decor/decor-38.jpg",
    specs: "Blue Sequin Shimmer Wall, Tie Themed Backdrops, Giant Illuminated ONE, Boss Baby Cutouts",
    description: "Executive Boss Baby first birthday stage with brilliant blue sequin shimmer wall, custom necktie backdrops, navy and sky blue organic balloon garlands, giant illuminated ONE with marquee lights, and BABY cube displays."
  }
];

/**
 * 2. Rental Catalog: Rental Equipment, Props & Display Inventory
 */
export const rentalCatalog: CatalogItem[] = [
  // Core Highlights

  // Cake & Dessert Stands
  {
    id: "rent-05",
    title: "3-Tier Ornate Golden Cake & Dessert Stand",
    price: "₹220 / day",
    rentPrice: "₹220",
    deposit: "₹1,300",
    category: "Rental",
    tags: ["cake-stands"],
    localAsset: "/catalog/rental/gold-3tier-cake-stand.jpg",
    description: "Tiered dessert tower in brushed champagne gold with laser-cut lace trim borders and top carrying handle."
  },
  {
    id: "rent-06",
    title: "Single-Tier Filigree Gold Cake Stand",
    price: "₹180 / day",
    rentPrice: "₹180",
    deposit: "₹900",
    specs: "15 pcs available (including 4 pcs compact height)",
    category: "Rental",
    tags: ["cake-stands"],
    localAsset: "/catalog/rental/gold-lace-cake-stand.jpg",
    description: "Classic gold pedestal cake stand with embossed lace-cut rim border. 15 pieces available in inventory."
  },
  {
    id: "rent-07",
    title: "Mirror-Top Gold Fringe Cake Pedestal",
    price: "₹180 / day",
    rentPrice: "₹180",
    deposit: "₹1,050",
    specs: "Top side Mirror Finish",
    category: "Rental",
    tags: ["cake-stands"],
    localAsset: "/catalog/rental/mirror-top-fringe-cake-stand.jpg",
    description: "Striking gold pedestal riser with reflective mirror-finish top plate and perimeter hanging golden rod fringe."
  },

  // Trunks & Suitcase Sets
  {
    id: "rent-08",
    title: "Glossy Black Trunk Boxes (Set of 3)",
    price: "₹240 / day",
    rentPrice: "₹240",
    deposit: "₹1,800",
    category: "Rental",
    tags: ["trunks-and-boxes"],
    localAsset: "/catalog/rental/black-trunk-boxes-set.jpg",
    description: "Trio of nested glossy obsidian black vintage suitcase trunks with gold-finished locks, clasps, and handles."
  },
  {
    id: "rent-09",
    title: "Pastel Blush Pink Trunk Boxes (Set of 3)",
    price: "₹240 / day",
    rentPrice: "₹240",
    deposit: "₹1,800",
    category: "Rental",
    tags: ["trunks-and-boxes"],
    localAsset: "/catalog/rental/pink-trunk-boxes-set.jpg",
    description: "Set of three nested pastel pink trunk suitcases with gold hardware. Beautiful accent for baby shower and birthday tables."
  },
  {
    id: "rent-10",
    title: "Sky Baby Blue Trunk Boxes (Set of 3)",
    price: "₹240 / day",
    rentPrice: "₹240",
    deposit: "₹1,800",
    category: "Rental",
    tags: ["trunks-and-boxes"],
    localAsset: "/catalog/rental/blue-trunk-boxes-set.jpg",
    description: "Set of three nested light-blue decorative trunk boxes with golden metal fittings. Ideal for naming ceremonies."
  },
  {
    id: "rent-11",
    title: "Pristine White Trunk Boxes (Set of 3)",
    price: "₹240 / day",
    rentPrice: "₹240",
    deposit: "₹1,800",
    category: "Rental",
    tags: ["trunks-and-boxes"],
    localAsset: "/catalog/rental/white-trunk-boxes-set.jpg",
    description: "Set of three pure white decorative trunk boxes with gold latches and metal corners. Crisp, luxury touch."
  },
  {
    id: "rent-12",
    title: "Pink & Blue Dual Trunk Suite (6-Piece Combo)",
    price: "₹400 / day",
    rentPrice: "₹400",
    deposit: "₹3,600",
    category: "Rental",
    tags: ["trunks-and-boxes"],
    localAsset: "/catalog/rental/pink-blue-trunk-combo.jpg",
    description: "Two complete 3-tier sets (Pink + Blue, 6 pieces total) with gold latches. Perfect for gender reveal stages or twin celebrations."
  },
  {
    id: "rent-13",
    title: "Monochrome Black & White Trunk Suite (6-Piece Combo)",
    price: "₹400 / day",
    rentPrice: "₹400",
    deposit: "₹3,600",
    category: "Rental",
    tags: ["trunks-and-boxes"],
    localAsset: "/catalog/rental/black-white-trunk-combo.jpg",
    description: "Two complete 3-tier sets (Glossy Black + Pure White, 6 pieces total) with gold hardware. High-contrast luxury aesthetic."
  },

  // Props & Vintage Wire Displays
  {
    id: "rent-14",
    title: "Vintage Golden Birdcages (Set of 3)",
    price: "₹240 / day",
    rentPrice: "₹240",
    deposit: "₹1,800",
    category: "Rental",
    tags: ["props-and-carriages"],
    localAsset: "/catalog/rental/vintage-gold-birdcages-set.jpg",
    description: "Set of three vintage-style ornamental golden birdcages in graduated sizes with dome tops and ornate metal latches."
  },
  {
    id: "rent-15",
    title: "Fairytale Cinderella Wire Carriage Display",
    price: "₹150 / day",
    rentPrice: "₹150",
    deposit: "₹850",
    category: "Rental",
    tags: ["props-and-carriages"],
    localAsset: "/catalog/rental/cinderella-gold-carriage.jpg",
    description: "Whimsical 4-wheel Cinderella pumpkin carriage crafted from bent gold wire with round base plate for sweets and desserts."
  },
  {
    id: "rent-16",
    title: "Vintage Gold Tricycle Cart with Floral Basket",
    price: "₹150 / day",
    rentPrice: "₹150",
    deposit: "₹850",
    category: "Rental",
    tags: ["props-and-carriages"],
    localAsset: "/catalog/rental/vintage-gold-tricycle-cart.jpg",
    description: "Decorative gold wire three-wheeler with circular mesh rear basket accented with gold flower petals."
  },
  {
    id: "rent-17",
    title: "Double Basket Carriage with Ruby Gem Accents",
    price: "₹150 / day",
    rentPrice: "₹150",
    deposit: "₹800",
    category: "Rental",
    tags: ["props-and-carriages"],
    localAsset: "/catalog/rental/gold-twin-basket-carriage.jpg",
    description: "Two-compartment golden wire carriage with floral charms featuring ruby-red center gems and decorative carriage wheels."
  },
  {
    id: "rent-18",
    title: "Gold Wire Rickshaw / Flower Basket Stand",
    price: "₹150 / day",
    rentPrice: "₹150",
    deposit: "₹850",
    category: "Rental",
    tags: ["props-and-carriages"],
    localAsset: "/catalog/rental/gold-rickshaw-cycle-stand.jpg",
    description: "Artistic wire cycle rickshaw in metallic gold with cylindrical scrollwork basket for flowers or favors."
  },

  // Furniture & Plinths
  {
    id: "rent-19",
    title: "Geometric Gold Wireframe Pedestal Table",
    price: "₹200 / day",
    rentPrice: "₹200",
    deposit: "₹950",
    category: "Rental",
    tags: ["furniture-and-plinths"],
    localAsset: "/catalog/rental/geometric-wireframe-table.jpg",
    description: "Modern geometric polyhedron wireframe base in gold with a solid white circular tabletop for cake or floral arrangements."
  },

  // Lighting & Lanterns
  {
    id: "rent-20",
    title: "Geometric Faceted Brass & Glass Lantern",
    price: "₹80 / day",
    rentPrice: "₹80",
    deposit: "₹500",
    category: "Rental",
    tags: ["lighting-and-lanterns"],
    localAsset: "/catalog/rental/geometric-brass-lantern.jpg",
    description: "Faceted diamond-shaped brass prism terrarium lantern with glass panels and battery-operated LED tealight candle."
  },
  {
    id: "rent-21",
    title: "1.5ft Filigree Moroccan Stained-Glass Lantern",
    price: "₹180 / day",
    rentPrice: "₹180",
    deposit: "₹1,050",
    specs: "1.5ft Height",
    category: "Rental",
    tags: ["lighting-and-lanterns"],
    localAsset: "/catalog/rental/moroccan-stained-glass-lantern.jpg",
    description: "1.5-foot tall white vintage Moroccan lantern with multi-colored stained glass panels, dome finial, and intricate perforated ventilation."
  },

  // Equipment & Tools
  {
    id: "rent-22",
    title: "Electric Balloon Inflator Pump",
    price: "₹180 / day",
    rentPrice: "₹180",
    deposit: "₹900",
    category: "Rental",
    tags: ["equipment-and-tools"],
    localAsset: "/catalog/rental/electric-balloon-pump.jpg",
    description: "High-power dual-nozzle electric balloon blower pump. Quickly inflates latex and foil balloons for organic arches."
  },

  // Custom Services & Printing
  {
    id: "rent-23",
    title: "Custom Color Customisation & Themed Cutouts",
    price: "From ₹60 / sheet",
    rentPrice: "From ₹60",
    deposit: "Starts ₹100",
    specs: "Color customization from ₹100 • Cutouts ₹60/A3",
    category: "Rental",
    tags: ["custom-printing"],
    localAsset: "/catalog/rental/custom-color-cutouts.jpg",
    description: "Color customization for all rental products from Gold to Silver and vice versa. Custom themed paper cutouts designed, printed, and cut."
  },
  {
    id: "rent-24",
    title: "Event Flex, Sunboard & Sunpack Printing",
    price: "From ₹25 / sqft",
    rentPrice: "From ₹25",
    deposit: "Design & Print",
    specs: "Flex: ₹25/sqft • Sunboard: ₹80/sqft • Sunpack: ₹1,500/sheet",
    category: "Rental",
    tags: ["custom-printing"],
    localAsset: "/catalog/rental/flex-sunboard-printing.jpg",
    description: "Stage backdrop printing and standee cutting. Flex printing (₹25/sqft), Sunboard cutouts (₹80/sqft), and Sunpack sheets (₹1,500 for 6x4)."
  },

  // Backdrops & Frame Structures
  {
    id: "rent-25",
    title: "6x6 Heart Structure Metal Backdrop Arch",
    price: "₹400 / day",
    rentPrice: "₹400",
    deposit: "₹2,000",
    specs: "6ft x 6ft • Heart Arch",
    category: "Rental",
    tags: ["backdrops-and-arches", "arch"],
    localAsset: "/catalog/rental/heart-backdrop-structure-6x6.jpg",
    description: "6ft by 6ft freestanding metallic heart-shaped arch frame with stable base legs. Romantic focal point for proposals, ring ceremonies, and anniversaries."
  },
  {
    id: "rent-26",
    title: "6x6 Ring Circular Metal Backdrop Arch",
    price: "₹400 / day",
    rentPrice: "₹400",
    deposit: "₹2,000",
    specs: "6ft x 6ft • Circle Ring",
    category: "Rental",
    tags: ["backdrops-and-arches", "arch"],
    localAsset: "/catalog/rental/circular-ring-backdrop-6x6.jpg",
    description: "6ft circular round metallic hoop backdrop arch on dual support legs. The industry gold standard for balloon rings and floral styling."
  },
  {
    id: "rent-27",
    title: "Heavy-Duty Adjustable Backdrop Stand (5x5ft to 10x10ft)",
    price: "₹600 / day",
    rentPrice: "₹600",
    deposit: "₹3,000",
    specs: "5x5 ft to 10x10 ft Adjustable",
    category: "Rental",
    tags: ["backdrops-and-arches", "equipment-and-tools"],
    localAsset: "/catalog/rental/adjustable-backdrop-stand-10x10.jpg",
    description: "Telescoping professional heavy-gauge metal backdrop stand adjustable from 5x5ft up to 10x10ft. Includes dual weighted floor base plates."
  },
  {
    id: "rent-28",
    title: "Modern White Arched Backdrop Frames Suite (Set of 3)",
    price: "₹1,500 / day",
    rentPrice: "₹1,500",
    deposit: "₹6,500",
    specs: "3-Piece Suite: 4x7ft + (2) 3.3x6ft",
    category: "Rental",
    tags: ["backdrops-and-arches", "arch"],
    localAsset: "/catalog/rental/white-arched-backdrop-frames-3pc.jpg",
    description: "Trio of freestanding white metal arched backdrop frames: one 4ft x 7ft centerpiece arch flanked by two 3.3ft x 6ft arches for layered organic balloon decor."
  },

  // Cake, Dessert & Candy Displays
  {
    id: "rent-29",
    title: "Gold Wire Ferris Wheel Dessert Stand (5-Tier)",
    price: "₹150 / day",
    rentPrice: "₹150",
    deposit: "₹850",
    specs: "5 Basket Compartments",
    category: "Rental",
    tags: ["cake-stands", "props-and-carriages"],
    localAsset: "/catalog/rental/ferris-wheel-dessert-stand-5tier.jpg",
    description: "Whimsical rotating decorative gold wire ferris wheel display with 5 embossed lace-patterned dessert basket compartments."
  },
  {
    id: "rent-30",
    title: "Deluxe Ornate Gold Ferris Wheel Display (6-Tier)",
    price: "₹200 / day",
    rentPrice: "₹200",
    deposit: "₹1,000",
    specs: "6 Crown-Rimmed Compartments",
    category: "Rental",
    tags: ["cake-stands", "props-and-carriages"],
    localAsset: "/catalog/rental/deluxe-ferris-wheel-stand-6tier.jpg",
    description: "Large statement gold wire ferris wheel with 6 crown-rimmed dessert and candle trays on a sturdy reinforced base."
  },
  {
    id: "rent-31",
    title: "Hexagonal Heart-Top Tiered Dessert & Candle Stand",
    price: "₹150 / day",
    rentPrice: "₹150",
    deposit: "₹850",
    specs: "Heart Handle • 6 Crown Trays",
    category: "Rental",
    tags: ["cake-stands", "lighting-and-lanterns"],
    localAsset: "/catalog/rental/hexagonal-heart-tiered-stand.jpg",
    description: "Hexagonal gold wire display stand topped with a heart handle, featuring 6 crown-embossed trays across tiered horizontal shelves."
  },
  {
    id: "rent-32",
    title: "Wooden Picnic Table Riser / Cake Display",
    price: "₹80 / day",
    rentPrice: "₹80",
    deposit: "₹500",
    specs: "Solid Wood Craftsmanship",
    category: "Rental",
    tags: ["props-and-carriages", "furniture-and-plinths"],
    localAsset: "/catalog/rental/wooden-picnic-table-riser.jpg",
    description: "Charming miniature natural wood picnic table display riser for dessert tables, favor displays, and rustic celebration setups."
  },

  // Plinths & Display Furniture
  {
    id: "rent-33",
    title: "Gold Spray-Painted Cylinder Plinths (Set of 3)",
    price: "₹1,100 / day",
    rentPrice: "₹1,100",
    deposit: "₹3,000",
    specs: "Set of 3 • Custom Gold Spray Finish",
    category: "Rental",
    tags: ["furniture-and-plinths"],
    localAsset: "/catalog/rental/gold-spray-cylinder-plinths-3pc.jpg",
    description: "Set of three graduated metallic champagne gold solid cylinder display plinths with mirror finish top surfaces for cake and floral setups."
  },
  {
    id: "rent-34",
    title: "Custom Themed Character Cylinder Plinths (Set of 3)",
    price: "₹1,200 / day",
    rentPrice: "₹1,200",
    deposit: "₹3,000",
    specs: "Customised to Any Theme • Set of 3",
    category: "Rental",
    tags: ["furniture-and-plinths", "custom-printing"],
    localAsset: "/catalog/rental/custom-theme-cylinder-plinths-3pc.jpg",
    description: "Custom printed cylinder plinths tailored to any celebration theme: Butterfly Pink, Cute Panda, Cocomelon Cartoon, Jurassic Dinosaur, and more."
  },
  {
    id: "rent-35",
    title: "Paper Foldable Accordion Cylinder Plinths (Set of 5)",
    price: "₹1,200 / day",
    rentPrice: "₹1,200",
    deposit: "₹5,200",
    specs: "Set of 5 Graduated Heights • Foldable",
    category: "Rental",
    tags: ["furniture-and-plinths"],
    localAsset: "/catalog/rental/paper-foldable-cylinders-5pc.jpg",
    description: "Set of five collapsible roman pleated paper accordion display plinths with clear acrylic top discs in 5 graduated heights. Elegant and easy to transport."
  },
  {
    id: "rent-36",
    title: "Portable Gold Rectangular Wireframe Pedestal Stands (Set of 4)",
    price: "₹1,500 / day",
    rentPrice: "₹1,500",
    deposit: "₹5,000",
    specs: "Set of 4 • Portable Knockdown Construction",
    category: "Rental",
    tags: ["furniture-and-plinths"],
    localAsset: "/catalog/rental/portable-gold-wireframe-pedestals-4pc.jpg",
    description: "Set of 4 tall slender geometric gold wire column plinths of graduated heights. Detachable knockdown construction for effortless transport."
  },
  {
    id: "rent-37",
    title: "Natural Wood Adjustable Display Easel Stand",
    price: "₹250 / day",
    rentPrice: "₹250",
    deposit: "₹1,200",
    specs: "5ft Height • Solid Pine Wood",
    category: "Rental",
    tags: ["furniture-and-plinths", "props-and-carriages"],
    localAsset: "/catalog/rental/wooden-easel-stand-5ft.jpg",
    description: "5ft premium solid pine wood tripod easel stand with adjustable height shelf. Perfect for welcome boards, seating charts, and milestone portraits."
  },

  // Themed Props & Decor Elements
  {
    id: "rent-38",
    title: "White Picket Fence Corner Props (Set of 2)",
    price: "₹350 / day",
    rentPrice: "₹350",
    deposit: "₹1,600",
    specs: "2.5ft Height • Set of 2",
    category: "Rental",
    tags: ["props-and-carriages", "backdrops-and-arches"],
    localAsset: "/catalog/rental/white-picket-fence-set.jpg",
    description: "Pair of clean white wooden picket fence corner borders standing 2.5ft tall. Ideal for garden, farm, and kid birthday themes."
  },
  {
    id: "rent-39",
    title: "Baby Shower Miniature Tabletop Prop Collection",
    price: "₹320 / set (or ₹20 / pc)",
    rentPrice: "₹320",
    deposit: "₹1,900 (Set) / ₹120 (Pc)",
    specs: "Full Set: ₹320 Rent / ₹1,900 Dep • Single Pc: ₹20 Rent / ₹120 Dep",
    category: "Rental",
    tags: ["props-and-carriages", "baby-shower"],
    localAsset: "/catalog/rental/baby-shower-props-set.jpg",
    description: "Pastel pink and blue baby shower props including birdhouse boxes, miniature clothes hangers, mini carriages, photo frames, and rustic crates."
  },
  {
    id: "rent-40",
    title: "Jungle Safari Theme Plush Soft Toys Collection",
    price: "₹1,200 / day",
    rentPrice: "₹1,200",
    deposit: "₹5,500",
    specs: "Full Safari Set: Lion, Tiger, Deer, Monkey & Cubs",
    category: "Rental",
    tags: ["props-and-carriages"],
    localAsset: "/catalog/rental/jungle-theme-plush-toys.jpg",
    description: "Realistic premium wild safari plush toy set: Large Lion with cub, Royal Bengal Tiger with cub, Spotted Deer, Sitting Chimpanzee, and Leopard."
  },

  // Lighting & Lanterns
  {
    id: "rent-41",
    title: "Hanging Geometric Gold Tealight Lantern on Stand",
    price: "₹50 / day",
    rentPrice: "₹50",
    deposit: "₹400",
    specs: "Metal Stand + Suspended Prism",
    category: "Rental",
    tags: ["lighting-and-lanterns"],
    localAsset: "/catalog/rental/hanging-geometric-tealight-stand.jpg",
    description: "Delicate geometric gold wire candle lantern suspended from a square-base curved metal stand. Adds warm romantic table lighting."
  },
  {
    id: "rent-42",
    title: "2-Tier Stand with Dual Hanging Geometric Lanterns",
    price: "₹80 / day",
    rentPrice: "₹80",
    deposit: "₹600",
    specs: "2-Tier Dual Suspended Lanterns",
    category: "Rental",
    tags: ["lighting-and-lanterns"],
    localAsset: "/catalog/rental/double-hanging-lantern-stand.jpg",
    description: "Two-level decorative stand with two suspended champagne gold geometric wire candle holders at graduated heights."
  },

  // Special Effects & Pyro
  {
    id: "rent-43",
    title: "Handheld Cold Fire Spark Gun",
    price: "₹80 / day",
    rentPrice: "₹80",
    deposit: "₹500",
    specs: "Handheld • Safe Indoor Cold Sparks",
    category: "Rental",
    tags: ["equipment-and-tools"],
    localAsset: "/catalog/rental/cold-fire-pyro-gun.jpg",
    description: "Handheld spark blaster for dramatic couple entries, VIP walk-ins, and stage moments. Produces cold-touch sparks safely."
  },
  {
    id: "rent-44",
    title: "Cold Fire Machine 8-Channel Wireless Controller Set",
    price: "₹900 / day",
    rentPrice: "₹900",
    deposit: "₹5,800",
    specs: "8 Channels • Dual Wireless Remotes • Flight Case",
    category: "Rental",
    tags: ["equipment-and-tools"],
    localAsset: "/catalog/rental/cold-fire-machine-8channel.jpg",
    description: "Professional 8-channel pyro receiver base modules with dual multi-function wireless remote controls in a rugged flight transport case."
  },
  {
    id: "rent-45",
    title: "Warm White 'Happy Birthday' Acrylic Neon LED Sign",
    price: "₹500 / day",
    rentPrice: "₹500",
    deposit: "₹2,000",
    specs: "Warm Glow • Clear Acrylic Backing • Low Voltage Adapter",
    category: "Rental",
    tags: ["neon", "lighting-and-lanterns", "birthday"],
    localAsset: "/catalog/rental/happy-birthday-warm-neon-sign.jpg",
    description: "Cursive typography warm LED neon flex mounted on clear contour-cut acrylic. Ready to hang on circular arches, shimmer walls, or boxwood backdrops."
  },
  {
    id: "rent-46",
    title: "LED Warm Fairy Rice Lights Garland Bundle",
    price: "₹60 / day",
    rentPrice: "₹60",
    deposit: "₹350",
    specs: "High-Density Copper Wire • Plug & Play",
    category: "Rental",
    tags: ["lighting-and-lanterns"],
    localAsset: "/catalog/rental/led-warm-fairy-lights-bundle.jpg",
    description: "Flexible high-density warm white micro LED rice fairy string lights. Perfect for draping over curtains, sheer fabrics, and floral canopies."
  },
  {
    id: "rent-47",
    title: "10-Inch Warm White Marquee Light-Up Numbers & Letters",
    price: "₹50 / day",
    rentPrice: "₹50",
    deposit: "₹180",
    specs: "10-Inch Height • Battery Operated • Warm White Bulbs",
    category: "Rental",
    tags: ["lighting-and-lanterns", "props-and-carriages"],
    localAsset: "/catalog/rental/marquee-light-letters-10inch.jpg",
    description: "10-inch illuminated marquee block numbers and letters with warm LED cabochon bulbs. Ideal for milestone tables (1, 16, 18, 25, 50, 60)."
  },
  {
    id: "rent-48",
    title: "5-Inch Warm White Marquee Light-Up Numbers & Letters",
    price: "₹40 / day",
    rentPrice: "₹40",
    deposit: "₹150",
    specs: "5-Inch Height • Battery Operated • Tabletop Size",
    category: "Rental",
    tags: ["lighting-and-lanterns", "props-and-carriages"],
    localAsset: "/catalog/rental/marquee-light-letters-5inch.jpg",
    description: "5-inch compact illuminated tabletop marquee letters and numerals for customized milestone displays and cake riser accents."
  },
  {
    id: "rent-49",
    title: "A-Z Alphabet Warm LED Light Letters (Custom Name Spell)",
    price: "₹40 / letter / day",
    rentPrice: "₹40",
    deposit: "₹150 / letter",
    specs: "Full A-Z Available • Battery Powered • Freestanding",
    category: "Rental",
    tags: ["lighting-and-lanterns", "props-and-carriages"],
    localAsset: "/catalog/rental/alphabet-marquee-letters-set.jpg",
    description: "Individual battery-powered warm glow illuminated alphabet letters to spell custom guest of honor names, hashtags, or monogram initials."
  },
  {
    id: "rent-50",
    title: "7x7ft Heavy-Duty Square Grid Mesh Backdrop Stand",
    price: "₹1,200 / day",
    rentPrice: "₹1,200",
    deposit: "₹6,000",
    specs: "7ft x 7ft • Sturdy Metal Grid • Modular Base",
    category: "Rental",
    tags: ["backdrops-and-arches", "arch"],
    localAsset: "/catalog/rental/square-grid-backdrop-stand-7x7.jpg",
    description: "7x7ft square white/black metal wire mesh grid frame. Provides structural anchoring for heavy organic balloon garlands, neon signage, and florals."
  },
  {
    id: "rent-51",
    title: "7x7ft Arched Mesh Screen Backdrop Structure",
    price: "₹1,200 / day",
    rentPrice: "₹1,200",
    deposit: "₹6,000",
    specs: "7ft Height • Curved Arch Top • Wire Mesh Face",
    category: "Rental",
    tags: ["backdrops-and-arches", "arch"],
    localAsset: "/catalog/rental/arched-mesh-backdrop-frame-7x7.jpg",
    description: "Modern arched metal mesh backdrop with weighted base. Perfect for contemporary organic balloon cascades, neon signs, and photo booths."
  },
  {
    id: "rent-52",
    title: "Geometric Hexagonal Gold Arch Backdrop Frame",
    price: "₹1,200 / day",
    rentPrice: "₹1,200",
    deposit: "₹5,500",
    specs: "7ft Diameter • Metallic Gold Finish • Heavy Base",
    category: "Rental",
    tags: ["backdrops-and-arches", "arch"],
    localAsset: "/catalog/rental/hexagonal-geometric-backdrop-frame.jpg",
    description: "Geometric 6-sided hexagon arch frame crafted from premium gold powder-coated iron with twin stabilizing feet for indoor and outdoor setups."
  },
  {
    id: "rent-53",
    title: "High-Power RGBW LED Par Can Stage Uplights",
    price: "₹500 / day",
    rentPrice: "₹500",
    deposit: "₹2,000",
    specs: "DMX / Sound Active • Full RGBW Spectrum • Floor Bracket",
    category: "Rental",
    tags: ["equipment-and-tools", "lighting-and-lanterns"],
    localAsset: "/catalog/rental/led-par-can-stage-lights.jpg",
    description: "Professional stage wash par can light featuring vibrant multi-color mixing and sound-responsive modes to illuminate backdrops and drapery."
  },
  {
    id: "rent-54",
    title: "Architectural High-Output LED Brick Uplight Bar",
    price: "₹300 / day",
    rentPrice: "₹300",
    deposit: "₹1,500",
    specs: "Linear Wall Wash • Adjustable Tilt • High Lumen Output",
    category: "Rental",
    tags: ["equipment-and-tools", "lighting-and-lanterns"],
    localAsset: "/catalog/rental/led-brick-light-bar.jpg",
    description: "Compact brick wash lighting fixture designed to cast uniform upward illumination across drape backdrops, shimmer sequin walls, and stage corners."
  },
  {
    id: "rent-55",
    title: "Multi-Beam Party Strobe & Ambient Laser Projector",
    price: "₹500 / day",
    rentPrice: "₹500",
    deposit: "₹2,000",
    specs: "Multi-Pattern Diffraction • Sound Sync Mode",
    category: "Rental",
    tags: ["equipment-and-tools", "special-fx"],
    localAsset: "/catalog/rental/multi-beam-stage-laser-projector.jpg",
    description: "Dynamic room ambient laser and strobe effect light with auto-rotation patterns for dance floors, celebration entrances, and party stages."
  },
  {
    id: "rent-56",
    title: "Stage Fog & Low-Lying Smoke Atmospheric Machine",
    price: "₹500 / day",
    rentPrice: "₹500",
    deposit: "₹2,000",
    specs: "Includes Wired & Wireless Remote • Rapid Heating",
    category: "Rental",
    tags: ["equipment-and-tools", "special-fx"],
    localAsset: "/catalog/rental/stage-ambient-effects-machine.jpg",
    description: "High-density stage haze and fog generator for romantic cake cutting reveals, grand couple entries, and atmospheric photoshoot effects."
  }
];
