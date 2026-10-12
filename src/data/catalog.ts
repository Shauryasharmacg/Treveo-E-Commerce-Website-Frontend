import { Product, ConsignmentDossier, SavedArtefact, ResidencyProtocol } from '../types';
import atelierChronoImg from '../assets/images/regenerated_image_1791800383739.webp';
import auraHorizonImg from '../assets/images/regenerated_image_1791800390892.webp';
import solsticeDecanterImg from '../assets/images/regenerated_image_1791800180883.webp';
import lumenAtelierImg from '../assets/images/regenerated_image_1791800392602.jpg';
import nocturneVesselImg from '../assets/images/regenerated_image_1791800177486.webp';
import vesperSconceImg from '../assets/images/regenerated_image_1791799340786.png';
import mainGalleryImage from '../assets/images/regenerated_image_1791798487740.webp';
import thumbTwoImage from '../assets/images/regenerated_image_1791798479749.png';
import residenceKyotoImage from '../assets/images/regenerated_image_1791798489918.png';
import studyOneImage from '../assets/images/regenerated_image_1791799954814.webp';
import studyThreeImage from '../assets/images/regenerated_image_1791799956735.webp';

export const PRODUCTS: Product[] = [
  {
    id: 'atelier-chrono',
    editionNo: 'EDITION NO. 04 • HOROLOGY',
    category: 'Horology & Time',
    categorySlug: 'horology',
    name: 'Atelier Chrono — Biometric Edition',
    badge: 'BESTSELLER',
    materialBadge: 'BRASS 360',
    price: 420,
    description: 'Solid aerospace-grade brass mantel timepiece with recessed 1800K circadian LED halo ring and Swiss frictionless silent escapement.',
    atelier: 'ATELIER KYOTO',
    shippingTime: 'SHIPS IN 48H',
    imageUrl: atelierChronoImg,
    gallery: [
      atelierChronoImg,
      mainGalleryImage,
      thumbTwoImage,
      studyOneImage,
    ],
    rating: 4.92,
    reviewCount: 142,
    availableInAtelier: true,
    isArchiveEdition: true,
    weight: '1.42 kg Solid Weight',
    dimensions: '142mm diameter × 48mm depth',
    materials: ['Aged Aerospace Brass', 'Blackened Titanium', 'Raw Silver'],
    specs: {
      'Movement': 'Near-Zero Acoustic Escapement (<12 dB)',
      'Circadian Halo': '1800K Amber to 4000K Dawn Continuous Perimeter',
      'Battery Autonomy': '60-Day Cordless Run (4,800mAh Cell)',
      'Machining': 'Monobloc 7075 Aero Brass Ingot'
    },
    editorial: {
      kicker: 'ACOUSTIC CALIBRATION',
      title: 'The Art of Absolute Stillness.',
      description: 'Conventional timepieces intrude with mechanical chatter. The Atelier Chrono houses a custom frictionless silent escapement buffered by high-density silicone vibration grommets.',
      stat1: { value: '< 12', label: 'DECIBELS OPERATING' },
      stat2: { value: '7075', label: 'AERO BRASS INGOT' },
      image: residenceKyotoImage,
      caption: 'Photographed in Residence No. 8, Kyoto.'
    },
    dispatches: [
      {
        title: 'The Craft of Monobloc Machining',
        content: 'Each chassis is carved over 14 hours from a single billet of dense C36000 naval brass using 5-axis CNC diamond tooling. Surfaces are then hand-burnished by senior craftsmen in Atelier Kyoto with natural beeswax and organic silica micro-grain.'
      },
      {
        title: 'Circadian Sleep Science & Melatonin Preservation',
        content: 'The 1800K spectral profile emits virtually zero wavelength below 530nm, preventing melanopsin photopigment stimulation in retinal ganglion cells and allowing normal pineal melatonin synthesis before sleep.'
      },
      {
        title: 'Packaging & Atelier Certificate of Authenticity',
        content: 'Enclosed in an archival acid-free cedarwood presentation case, lined with raw Belgian linen and sealed with hot red wax bearing the Kyoto atelier hallmark and serialized patron inscription.'
      },
      {
        title: 'Shipping, Duties & White Glove Delivery',
        content: 'Consignments are transported with full declared insurance in climate-sealed shockproof cases. All European Union, US, and Japanese tariffs and local VAT are calculated and pre-settled.'
      }
    ]
  },
  {
    id: 'aura-horizon',
    editionNo: 'EDITION NO. 01 • BIO-INTERFACE',
    category: 'Circadian Light',
    categorySlug: 'circadian',
    name: 'Aura Horizon — Circadian Console',
    badge: 'FLAGSHIP',
    materialBadge: 'ANODIZED TITANIUM',
    price: 650,
    description: 'Frosted circular titanium chassis with biometric pulse sync, shifting spectral output to align with autonomic nervous recovery.',
    atelier: 'NORDIC FOUNDRY',
    shippingTime: 'HAND NUMBERED',
    imageUrl: auraHorizonImg,
    gallery: [
      auraHorizonImg,
      studyThreeImage,
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85'
    ],
    rating: 4.98,
    reviewCount: 96,
    availableInAtelier: true,
    isArchiveEdition: true,
    weight: '1.18 kg Solid Weight',
    dimensions: '160mm diameter × 52mm depth',
    materials: ['Anodized Space Titanium', 'Frosted Sapphire Crystal', 'Raw Billet Aluminum'],
    specs: {
      'Display': 'Circular Retinal Micro-OLED 454×454',
      'Sensors': 'Optical Photoplethysmography & Ambient Lux Array',
      'Finish': 'Bead-Blasted Frosted Grade 5 Titanium',
      'Autonomy': '45-Day Cordless Run (5,200mAh Cell)'
    },
    editorial: {
      kicker: 'BIO-INTERFACE INTEL',
      title: 'Light Tuned to Your Neural Rhythm.',
      description: 'Equipped with subtle ambient photoplethysmography sensors, Aura Horizon reads room presence and modulates its luminous flux to guide transition into restorative alpha brain states.',
      stat1: { value: '454×454', label: 'RETINAL MICRO-OLED' },
      stat2: { value: '0 Hz', label: 'FLICKER-FREE PWM' },
      image: auraHorizonImg,
      caption: 'Engineered at Nordic Foundry. Precision bead-blasted Grade 5 titanium chassis.'
    },
    dispatches: [
      {
        title: 'Grade 5 Aerospace Titanium Milling',
        content: 'The circular chassis is milled from Ti-6Al-4V alloy, heat-annealed at 680°C to release crystalline internal stress, and hand-finished with an ultra-fine bead blasting process for a tactile velvet touch.'
      },
      {
        title: 'Micro-OLED Calibrated Lens',
        content: 'Features a bespoke circular micro-OLED panel bonded directly to sapphire crystal with optical-grade silicone gel, producing infinite contrast and complete blackout between ambient cycles.'
      },
      {
        title: 'Biological Rhythm Synchronization',
        content: 'Calculates circadian solar zenith coordinates locally without Wi-Fi radiation, ensuring your evening bedroom environment is completely shielded from high-frequency electromagnetic noise.'
      },
      {
        title: 'Patron Registry & Serial Numbering',
        content: 'Each unit is stamped with an individualized patron registry identifier on the titanium rear bezel and logged in the TROVEO Provenance Ledger.'
      }
    ]
  },
  {
    id: 'solstice-decanter',
    editionNo: 'EDITION NO. 12 • BARWARE',
    category: 'Barware & Living',
    categorySlug: 'barware',
    name: 'Solstice Decanter & Tumbler Set',
    badge: 'HAND-BLOWN',
    materialBadge: 'SMOKED CRYSTAL',
    price: 340,
    description: 'Optical fluted lead-free crystal with precision ground glass stopper and heavy weighted base for tactile resonance during service.',
    atelier: 'MURANO GLASSHOUSE',
    shippingTime: '850ML CAPACITY',
    imageUrl: solsticeDecanterImg,
    gallery: [
      solsticeDecanterImg,
      'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=1000&q=85'
    ],
    rating: 4.88,
    reviewCount: 78,
    availableInAtelier: true,
    isArchiveEdition: false,
    weight: '2.10 kg (Combined)',
    dimensions: 'Decanter: 260mm × 110mm / Tumbler: 95mm × 85mm',
    materials: ['Smoked Murano Crystal', 'Ground Stopper Seal', 'Amber Tinted Crystal'],
    specs: {
      'Technique': 'Free-Hand Wooden Mold Fluting',
      'Acoustic Pitch': 'E4 Pure Harmonic Chime on Glass Contact',
      'Capacity': '850ml Decanter + 2x 310ml Tumblers',
      'Glass Purity': '100% Lead-Free Barium Crystal'
    },
    editorial: {
      kicker: 'ACOUSTIC GLASSWORK',
      title: 'Resonance of Free-Hand Fluting.',
      description: 'Each vessel is mouth-blown into aged pear-wood molds in Murano. The calculated wall taper generates a pure harmonic E4 chime when glasses touch during service.',
      stat1: { value: '850 ml', label: 'DECANTER CAPACITY' },
      stat2: { value: 'E4', label: 'HARMONIC CHIME PITCH' },
      image: solsticeDecanterImg,
      caption: 'Mouth-blown lead-free crystal with airtight ground-glass hermetic seal.'
    },
    dispatches: [
      {
        title: 'Heritage Pear-Wood Mold Turning',
        content: 'Mouth-blown by master glassmakers in Murano using hand-carved cherry and pear-wood molds soaked in canal water. The steam cushion creates an optically flawless, ripple-free interior wall.'
      },
      {
        title: 'Hermetic Ground-Glass Stopper',
        content: 'The neck and stopper are diamond-lapped by hand to match within 12 microns, providing an airtight vacuum fit that preserves delicate single malts without synthetic plastic gaskets.'
      },
      {
        title: 'Tactile Weighted Base',
        content: 'A solid 450g crystal sham provides a deep, stabilizing center of gravity, preventing tipping and offering an extraordinary sense of permanence in hand.'
      },
      {
        title: 'Presentation & Service Ritual',
        content: 'Accompanied by two 310ml matching fluted tumblers and a Belgian linen polishing cloth, nestled within a signed gift dossier.'
      }
    ]
  },
  {
    id: 'lumen-atelier',
    editionNo: 'EDITION NO. 07 • LUMINAIRE',
    category: 'Circadian Light',
    categorySlug: 'circadian',
    name: 'Lumen Atelier — Table Sculpture',
    badge: 'SCULPTURAL',
    materialBadge: 'RAW ALABASTER',
    price: 390,
    description: 'Chiseled Spanish alabaster cloud stone held by a hand-waxed bronze bracket, radiating soft non-flicker warmth into nocturnal spaces.',
    atelier: 'STUDIO CARRARA',
    shippingTime: 'DIMMABLE 2200K',
    imageUrl: lumenAtelierImg,
    gallery: [
      lumenAtelierImg,
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?auto=format&fit=crop&w=1000&q=85'
    ],
    rating: 4.95,
    reviewCount: 64,
    availableInAtelier: true,
    isArchiveEdition: true,
    weight: '3.40 kg Carved Mass',
    dimensions: '190mm × 140mm × 210mm',
    materials: ['Spanish Aragon Alabaster', 'Foundry Cast Bronze', 'Raw Calcite Stone'],
    specs: {
      'Light Engine': 'Warm Tungsten Emulation (2200K - 1800K D2W)',
      'Control': 'Solid Bronze Tactile Potentiometer Dial',
      'Stone Origin': 'Heritage Quarries of Aragon, Spain',
      'Thermal Sink': 'Integrated Machined Brass Backing'
    },
    editorial: {
      kicker: 'SCULPTURAL ILLUMINATION',
      title: 'Translucent Veins of Cloud Stone.',
      description: 'Mined from heritage quarries in Aragon and hand-chiseled to preserve natural mineral fissures. Each block transmits a diffuse, non-linear glow that turns mineral geology into intimate nocturnal warmth.',
      stat1: { value: '2200K', label: 'WARM TUNGSTEN D2W' },
      stat2: { value: '100%', label: 'SOLID ARAGON STONE' },
      image: lumenAtelierImg,
      caption: 'Carved at Studio Carrara. No two pieces possess identical vein geometry.'
    },
    dispatches: [
      {
        title: 'Geological Selection & Aragon Extraction',
        content: 'Only alabaster slabs showing cloud-like calcite translucency without muddy inclusions are selected. The stone is extracted using diamond wire saws to prevent internal micro-fracturing.'
      },
      {
        title: 'Dim-to-Warm Solid Bronze Potentiometer',
        content: 'Features a rotary dial turned from cast naval bronze. Rotating down reduces both lumens and colour temperature from 2200K candlelight to deep 1800K amber glow.'
      },
      {
        title: 'Zero Flicker Architectural Driver',
        content: 'Driven by an isolated continuous-current analog power unit that emits zero acoustic hum and no pulse-width modulation flicker across the entire dimming range.'
      },
      {
        title: 'Hand-Waxed Protective Seal',
        content: 'Sealed with organic micro-crystalline wax that protects the hygroscopic alabaster from ambient moisture while leaving natural crystalline pores open.'
      }
    ]
  },
  {
    id: 'nocturne-vessel',
    editionNo: 'EDITION NO. 09 • ATMOSPHERE',
    category: 'Atmospheric & Scent',
    categorySlug: 'atmospheric',
    name: 'Nocturne Vessel — Ceramic Mist',
    badge: 'NEW EDITION',
    materialBadge: 'STONE CERAMIC',
    price: 280,
    description: 'Unglazed coarse stoneware housing concealing a whisper-quiet ultrasonic atomiser. Includes bespoke botanical cypress elixir vial.',
    atelier: 'ATELIER KYOTO',
    shippingTime: '8-HOUR RUN',
    imageUrl: nocturneVesselImg,
    gallery: [
      nocturneVesselImg,
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1512290900672-1f49e49635be?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85'
    ],
    rating: 4.91,
    reviewCount: 52,
    availableInAtelier: true,
    isArchiveEdition: false,
    weight: '1.25 kg Solid Stoneware',
    dimensions: '120mm diameter × 180mm height',
    materials: ['Kyoto Coarse Stoneware', 'Medical Grade Stainless Reservoir', 'Raw Basalt Finish'],
    specs: {
      'Ultrasonic Rate': '3.0 MHz Micro-Droplet Suspension',
      'Runtime': '8 Hours Continuous / 16 Hours Intermittent',
      'Acoustic Volume': '< 15 dB Sub-Audible Diffusion',
      'Capacity': '220ml Stainless Reservoir'
    },
    editorial: {
      kicker: 'ATMOSPHERIC DISPERSAL',
      title: 'Whisper-Quiet Cold Ultrasonic Mist.',
      description: 'Unglazed coarse stoneware housing concealing a 3.0 MHz micro-atomizer. Suspends natural botanical aromatics without heating or degrading fragile terpenes.',
      stat1: { value: '3.0 MHz', label: 'ULTRASONIC SUSPENSION' },
      stat2: { value: '16 Hrs', label: 'AUTONOMOUS RUNTIME' },
      image: nocturneVesselImg,
      caption: 'Formed in Kyoto using iron-rich coarse clay with tactile raku reduction glaze.'
    },
    dispatches: [
      {
        title: 'Shigaraki Coarse Clay Preparation',
        content: 'Wheel-thrown by studio potters in Kyoto using high-grog Shigaraki clay. The rough exterior surface develops a rich, mineral patina through everyday tactile contact.'
      },
      {
        title: 'Medical-Grade Stainless Reservoir',
        content: 'Unlike common plastic diffusers, the internal basin is deep-drawn from 316 surgical stainless steel, preventing essential oil chemical breakdown and bacterial biofilm.'
      },
      {
        title: 'Acoustic Silence Engineering',
        content: 'Operates below 15 decibels with custom splash-dampening ceramic baffles. The water surface remains undisturbed by visible bubbling.'
      },
      {
        title: 'Botanical Cypress Elixir Included',
        content: 'Shipped with a 15ml dropper flask of wild Japanese Hinoki cypress and cedarwood essential oils steam-distilled in Nagano Prefecture.'
      }
    ]
  },
  {
    id: 'vesper-sconce',
    editionNo: 'EDITION NO. 15 • ARCHITECTURAL',
    category: 'Circadian Light',
    categorySlug: 'circadian',
    name: 'Vesper Ambient Sconce',
    badge: 'LIMITED',
    materialBadge: 'ARCHITECTURAL BRASS',
    price: 310,
    description: 'Dusk-glow architectural brass fixture casting gentle indirect halo illumination, designed for quiet bedside integration and headboard warmth.',
    atelier: 'MILAN STUDIO',
    shippingTime: 'FLUSH MOUNT',
    imageUrl: vesperSconceImg,
    gallery: [
      vesperSconceImg,
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85'
    ],
    rating: 4.96,
    reviewCount: 39,
    availableInAtelier: false,
    isArchiveEdition: true,
    weight: '1.85 kg Machined Brass',
    dimensions: '220mm diameter × 65mm projection',
    materials: ['Aged Milanese Brass Plate', 'Concealed LED Channel', 'Brushed Bronze Finish'],
    specs: {
      'Mounting': 'Universal 80mm Flush Architecture',
      'Spectrum': '2000K Soft Dusk Luminescence',
      'Luminous Flux': '350 Lumens Perimeter Glow',
      'Electrical': '100-240V Universal Input or 24V Low Voltage'
    },
    editorial: {
      kicker: 'ARCHITECTURAL ILLUMINATION',
      title: 'Indirect Perimeter Halo Reflection.',
      description: 'Casts a gentle 2000K warm twilight wash against lime-wash or plaster surfaces. Concealed rear heat sink ensures flush mounting without thermal transfer.',
      stat1: { value: '2000K', label: 'INDIRECT TWILIGHT' },
      stat2: { value: '80mm', label: 'UNIVERSAL ARCHITECTURE' },
      image: vesperSconceImg,
      caption: 'Spun from heavy-gauge Milanese architectural brass plate and wax finished.'
    },
    dispatches: [
      {
        title: 'Spun Milanese Heavy Brass Plate',
        content: 'Lathe-spun from a single disk of 3mm solid Milanese architectural brass, hand-patinated with natural liver of sulfur, and sealed with renaissance wax.'
      },
      {
        title: 'Indirect Wall-Wash Optical Chamber',
        content: 'The concealed rear LED channel bounces light exclusively off the mounting wall, creating a soft shadow halo with zero direct view of diode sources.'
      },
      {
        title: 'Universal Flush Architecture',
        content: 'Mounts seamlessly to standard European, US, and Japanese junction boxes or can be surface-wired with the optional braided silk drop cord.'
      },
      {
        title: 'Continuous Luminaire Certification',
        content: 'Rated for 50,000 continuous hours of circadian nocturnal warmth. Each sconce includes individual factory calibration reports.'
      }
    ]
  }
];

export const CONSIGNMENT_DOSSIERS: ConsignmentDossier[] = [
  {
    id: '#TRV-89421-EU',
    date: 'Consigned: October 26, 2024 • Settlement: Visa ending in 9104 (DDP Taxes Fully Prepaid)',
    status: 'In Preparation',
    isLiveCommission: true,
    stage: 'STAGE 2 OF 5: HAND-INSPECTION & ACOUSTIC CALIBRATION',
    stageProgress: 42,
    estimatedArrival: 'ESTIMATED PARIS RECEPTION: NOV 02, 2024',
    stageNote: 'Master artisans in Kyoto and Studio Murano currently executing precision acoustic tuning and vacuum sealing under archival nitrogen.',
    total: 760.00,
    settlementMethod: 'Visa ending in 9104 (DDP Taxes Fully Prepaid)',
    destination: 'Residence No. 8, Rue de Beaujolais, 75001 Paris • White-Glove Escort',
    items: [
      {
        name: 'Atelier Chrono (Biometric Halo Edition)',
        edition: 'ED. NO. 04 / 500 • KYOTO ATELIER',
        vaultCert: 'VAULT CERT. #KY-089',
        price: 420.00,
        atelier: 'Turned architectural naval brass, synchronous mechanical caliber, etched sapphire lens.',
        imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=85'
      },
      {
        name: 'Solstice Fluted Crystal Decanter & Tumbler Set',
        edition: 'MURANO MOLD SPEC • STUDIO MURANO',
        vaultCert: 'VAULT CERT. #MU-441',
        price: 340.00,
        atelier: 'Mouth-blown lead crystal, linear architectural fluting, ground-glass vacuum stopper.',
        imageUrl: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=500&q=85'
      }
    ]
  },
  {
    id: '#TRV-64102-EU',
    date: 'Delivered & Installed: June 14, 2024 • Settlement: Atelier Wire Transfer',
    status: 'Delivered & Installed',
    total: 1240.00,
    settlementMethod: 'Atelier Wire Transfer',
    destination: 'Chalet Zermatt Atelier & Vault Room, Zermatt, Switzerland',
    vaultRecordId: 'VAULT RECORD #AV-9012',
    items: [
      {
        name: 'Lumen Atelier — Alabaster Table Sculpture',
        edition: 'ED. NO. 12 / 100 • STUDIO CARRARA',
        vaultCert: 'SERIAL #AL-012',
        price: 390.00,
        atelier: 'Hand-waxed foundry bronze, translucent Spanish Alabaster core.',
        imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=85'
      },
      {
        name: 'Aura Horizon — Circadian Console Tray',
        edition: 'ED. NO. 01 / UNIQUE • NORDIC FOUNDRY',
        vaultCert: 'SERIAL #AH-891',
        price: 650.00,
        atelier: 'Anodized frosted aeronautical titanium with integrated wireless quartz beacon.',
        imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=85'
      },
      {
        name: 'Nocturne Vessel Ultrasonic Ceramic Mist Diffuser',
        edition: 'CERAMIC STUDIO 88 • KYOTO',
        vaultCert: 'SERIAL #NV-044',
        price: 200.00,
        atelier: 'Black basalt stoneware, cold ultrasonic atomization aperture.',
        imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=85'
      }
    ]
  },
  {
    id: '#TRV-41980-EU',
    date: 'Delivered: November 18, 2023 • Settlement: Apple Pay Encrypted',
    status: 'Delivered',
    total: 890.00,
    settlementMethod: 'Apple Pay Encrypted',
    destination: 'Residence No. 8, Rue de Beaujolais, 75001 Paris',
    items: [
      {
        name: 'Vesper Ambient Architectural Brass Sconce (Duo Pair)',
        edition: 'ACQUIRED • SALON 2023',
        vaultCert: 'VAULT CERT. #VE-201',
        price: 620.00,
        atelier: 'Milanese foundry hand-burnished aged brass casing.',
        imageUrl: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=500&q=85'
      },
      {
        name: 'Solstice Valet Vessel (Naval Brass & Tuscan Suede Lining)',
        edition: 'ACQUIRED • SALON 2023',
        vaultCert: 'VAULT CERT. #SV-104',
        price: 270.00,
        atelier: 'Solid cold-forged brass valet dish with vegetal-tanned suede core.',
        imageUrl: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=500&q=85'
      }
    ]
  }
];

export const SAVED_ARTEFACTS: SavedArtefact[] = [
  {
    id: 'saved-aura-horizon',
    name: 'Aura Horizon — Circadian Console Tray',
    subtitle: 'NORDIC FOUNDRY • ED. NO. 01 / UNIQUE',
    atelier: 'Frosted circular aeronautical titanium chassis with integrated wireless quartz beacon and responsive circadian chronometry sensor array.',
    editionNo: 'ALLOCATION READY • SHIPS IN 48H',
    statusBadge: 'ALLOCATION READY',
    statusType: 'available',
    price: 650.00,
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=85',
    primaryActionLabel: 'ACQUIRE NOW / ADD TO BAG',
    secondaryActionLabel: 'REQUEST BESPOKE ENGRAVING'
  },
  {
    id: 'saved-lumen-atelier',
    name: 'Lumen Atelier — Alabaster Table Sculpture',
    subtitle: 'STUDIO CARRARA • ED. NO. 14 / 100',
    atelier: 'Hand-waxed foundry bronze, translucent Spanish Alabaster core, dimmable 2200K filament. Sculpted block unique grain index verified.',
    editionNo: 'LOW ATELIER STOCK • 2 PIECES REMAINING',
    statusBadge: 'LOW ATELIER STOCK',
    statusType: 'available',
    price: 390.00,
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=85',
    primaryActionLabel: 'ACQUIRE NOW / ADD TO BAG',
    secondaryActionLabel: 'REQUEST SALON PREVIEW'
  },
  {
    id: 'saved-nocturne-vessel',
    name: 'Nocturne Vessel Ultrasonic Ceramic Mist Diffuser',
    subtitle: 'CERAMIC STUDIO 14 • ED. NO. 28 / 250',
    atelier: 'Black basalt unglazed stoneware, cold ultrasonic atomization aperture, includes bespoke botanical cypress elixir vial and calibrated stone tray.',
    editionNo: 'ALLOCATION READY',
    statusBadge: 'ALLOCATION READY',
    statusType: 'available',
    price: 200.00,
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=85',
    primaryActionLabel: 'ACQUIRE NOW / ADD TO BAG',
    secondaryActionLabel: 'SAMPLE BOTANICALS'
  },
  {
    id: 'saved-chrono-blackened',
    name: 'Atelier Chrono (Biometric Halo Edition — Blackened Titanium Variant)',
    subtitle: 'ATELIER KYOTO • ED. NO. 88 / 500',
    atelier: 'Blackened aerospace titanium, dual-crystal sapphire lens, 1800K amber circadian glow ring with silent German escapement movement.',
    editionNo: 'CUSTOM COLORWAY RESERVED',
    statusBadge: 'CUSTOM COLORWAY RESERVED',
    statusType: 'available',
    price: 460.00,
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=85',
    primaryActionLabel: 'ACQUIRE NOW / ADD TO BAG',
    secondaryActionLabel: 'CONFIGURE MOVEMENTS'
  },
  {
    id: 'saved-vesper-sconce-pair',
    name: 'Vesper Ambient Architectural Brass Sconce (Duo Pair)',
    subtitle: 'MILAN ATELIER • ED. NO. 05 / 50',
    atelier: 'Dusk-glow architectural brass casting, soft indirect halo illumination, flush wall mount with custom patinated brass hardware.',
    editionNo: 'WAITLIST COMMISSION • EST. DECEMBER 2024',
    statusBadge: 'WAITLIST COMMISSION',
    statusType: 'waitlist',
    price: 620.00,
    depositPrice: 150.00,
    imageUrl: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=600&q=85',
    primaryActionLabel: 'JOIN COMMISSION LIST',
    secondaryActionLabel: 'CONSULT CURATOR'
  },
  {
    id: 'saved-solstice-valet-decanter',
    name: 'Solstice Valet Vessel & Decanter Barware Curation',
    subtitle: 'MURANO MOLD 88 & TUSCAN LEATHER',
    atelier: 'Optic fluted lead-free crystal with Tuscan suede lining and naval brass tray. Includes two solid heavy weighted tasting tumblers.',
    editionNo: 'ALLOCATION READY',
    statusBadge: 'ALLOCATION READY',
    statusType: 'available',
    price: 590.00,
    imageUrl: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=85',
    primaryActionLabel: 'ACQUIRE NOW / ADD TO BAG',
    secondaryActionLabel: 'LEATHER MONOGRAM'
  }
];

export const RESIDENCIES: ResidencyProtocol[] = [
  {
    id: 'res-beaujolais',
    name: 'Résidence Beaujolais — Salon Est & Private Gallery',
    typeBadge: 'PRIMARY RESIDENCE • DIPLOMATIC CLEARANCE VERIFIED',
    cadastre: 'CADASTRE: TRV-PARIS-01',
    address: '8, Rue de Beaujolais, Palais-Royal, 75001 Paris, Île-de-France, France',
    isPrimary: true,
    isVerified: true,
    intercomCode: '#8492-B',
    intercomHours: '08:00 – 20:00 CET',
    instructions: [
      {
        title: 'UNCRATING & PLACEMENT',
        description: 'Inside Salon Est. 4-hour acclimation required prior to seal release on horological pieces.'
      },
      {
        title: 'CUSTODY HAND-OFF',
        description: 'Physical photo ID mandatory. Authorized signers: Julian Vane or liaison Claire Delacroix.'
      },
      {
        title: 'ARCHIVAL CASING',
        description: 'Tamper-evident brass seal box. Do not discard outer casing; return to Paris Atelier depot.'
      }
    ],
    allocatedArtefacts: [
      { name: 'Atelier Chrono Desk Piece', edition: 'ED. 04 / 500' },
      { name: 'Lumen Table Sculpture', edition: 'ED. 12 / 100' },
      { name: 'Aura Horizon Console', edition: 'UNIQUE MONOGRAPH' }
    ]
  },
  {
    id: 'res-zermatt',
    name: 'Chalet Zermatt Atelier & Vault Room',
    typeBadge: 'SEASONAL RESIDENCY • CLIMATE-CONTROLLED VAULT',
    cadastre: 'CADASTRE: TRV-CH-09',
    address: 'Oberdorfstrasse 42, 3920 Zermatt, Valais, Switzerland',
    isPrimary: false,
    isVerified: true,
    intercomCode: '#CH-99201',
    instructions: [
      {
        title: 'HIGH-ALTITUDE ESCORT',
        description: 'Glacier transit liaison via Air Zermatt cargo bay. Vault Code: #CH-99201.'
      },
      {
        title: 'WINTER ACCESS WINDOW',
        description: 'Pressurized heated container mandated. Scheduled Thursday–Saturday with mandatory 48-hour prior clearance.'
      }
    ],
    allocatedArtefacts: [
      { name: 'Nocturne Vessel Ceramic Diffuser', edition: 'KYOTO ATELIER' },
      { name: 'Archival Bronze Tray', edition: 'MILAN CAST' }
    ]
  },
  {
    id: 'res-saint-germain',
    name: 'Studio Julian Vane Architectes',
    typeBadge: 'COMMERCIAL ATELIER • BUSINESS HOURS ONLY',
    cadastre: 'CADASTRE: TRV-PARIS-02',
    address: '14, Boulevard Saint-Germain, 75005 Paris, France',
    isPrimary: false,
    isVerified: false,
    instructions: [
      {
        title: 'RECEPTION DESK PROTOCOL',
        description: 'Mme. Eléonore Roux (09:00 – 18:30 CET). Approved for non-serialized accessories and catalog consignments.'
      }
    ],
    allocatedArtefacts: []
  }
];
