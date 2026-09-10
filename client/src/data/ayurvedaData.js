export const clinicInfo = {
  name: "Ayush Ayurveda Panchakaranam",
  tagline: "Pain and Lifestyle Care",
  subtitle: "Authentic Kerala Ayurvedic Therapies & Classical Panchakarma",
  heroHeading: "Revitalize Your Life With Authentic Kerala Ayurveda",
  address: {
    line1: "Raichandani 5 Star Complex, S.No 42, Flat No 303",
    landmark: "Opp. Pista House, Pet Basheerabad",
    locality: "Kompally",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500067",
    full: "Raichandani 5 Star Complex, S.No 42, Flat No 303, Opp. Pista House, Pet Basheerabad, Kompally, Hyderabad - 500067"
  },
  phones: ["+91 98851 62477", "+91 98851 62477"],
  phoneRaw: "+919885162477",
  whatsappNumber: "919885162477",
  email: "info@ayushayurvedapanchakaranam.com",
  timings: "Mon - Sun: 10:00 AM – 8:00 PM",
  doctorAvailability: "Prior Appointment Recommended for In-Depth Nadi Pariksha (Pulse Diagnosis)",
  stats: [
    { label: "Years of Healing Excellence", value: "7+" },
    { label: "Visited & Consulted Clients", value: "290+" },
    { label: "Happy & Relieved Patients", value: "276+" },
    { label: "Classical Kerala Therapies", value: "35+" }
  ],
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/919885162477"
  }
};

export const panchakarmaPillars = [
  {
    id: "vamana",
    title: "Vamana",
    sanskrit: "वमन",
    subtitle: "Therapeutic Emesis",
    description: "Targeted elimination of aggravated Kapha dosha and respiratory toxins through medically supervised emesis.",
    indications: ["Asthma & Bronchitis", "Chronic Allergies", "Psoriasis & Eczema", "Metabolic Sluggishness"],
    icon: "droplets"
  },
  {
    id: "virechana",
    title: "Virechana",
    sanskrit: "विरेचन",
    subtitle: "Therapeutic Purgation",
    description: "Cleansing of Pitta toxins from liver, gallbladder, and small intestine using herbal formulations.",
    indications: ["Hyperacidity & GERD", "Liver Congestion", "Skin Disorders & Acne", "Chronic Fever"],
    icon: "flame"
  },
  {
    id: "basti",
    title: "Basti",
    sanskrit: "बस्ति",
    subtitle: "Medicated Enema Therapy",
    description: "Considered the mother of all treatments, Basti balances Vata dosha through herbal decoction & medicated oil enemas.",
    indications: ["Back Pain & Sciatica", "Arthritis & Joint Stiffness", "Constipation", "Paralysis & Neuropathy"],
    icon: "shield-plus"
  },
  {
    id: "nasya",
    title: "Nasya",
    sanskrit: "नस्य",
    subtitle: "Nasal Administration",
    description: "Instillation of potent medicated herbal oils through nostrils to cleanse head, sinuses, and central nervous system.",
    indications: ["Sinusitis & Migraine", "Cervical Spondylosis", "Hair Fall & Greying", "Sleep Disorders"],
    icon: "sparkles"
  },
  {
    id: "raktamokshana",
    title: "Raktamokshana",
    sanskrit: "रक्तमोक्षण",
    subtitle: "Blood Purification",
    description: "Traditional bloodletting & purification therapy for neutralizing deep-seated toxic blood disorders and chronic pain.",
    indications: ["Varicose Veins", "Localized Arthritis Pain", "Severe Eczema", "Alopecia Areata"],
    icon: "heart-pulse"
  }
];

export const therapyCategories = [
  { id: "all", name: "All Therapies" },
  { id: "massages", name: "Body Massages" },
  { id: "kizhi", name: "Kizhi (Potli) Therapies" },
  { id: "dhara", name: "Dhara & Oil Baths" },
  { id: "vasti", name: "Vasti Therapies" },
  { id: "clays", name: "Moroccan & Natural Clays" },
  { id: "ayur-care", name: "Ayur Care" },
  { id: "facials", name: "Mukha Care & Facials" }
];

export const therapies = [
  {
    id: "abyangam",
    slug: "abyangam-full-body-massage",
    name: "Abhyangam (Full Body Massage)",
    category: "massages",
    categoryName: "Body Massages",
    duration: "60 Mins",
    price: 2500,
    priceFormatted: "₹2,500",
    image: "/images/abhyanga_duo_authentic.png",
    featured: true,
    tagline: "Classical Medicated Oil Full Body Rejuvenation",
    shortDesc: "Rejuvenates muscles, improves blood circulation, sharpens eyesight, relieves fatigue, and induces deep restorative sleep.",
    description: "Abhyangam is the quintessential Ayurvedic warm herbal oil body massage. Formulated with authentic classical thailams chosen specifically according to your dominant dosha, the rhythmic synchronized strokes penetrate all seven tissue layers (Sapta Dhatus) to dislodge accumulated metabolic waste (Ama) and restore vital energy (Prana).",
    benefits: [
      "Deeply relaxes tense nervous system and relieves stress",
      "Enhances cellular longevity, muscle tone, and skin radiance",
      "Stimulates lymphatic drainage and blood circulation",
      "Eliminates bodily toxins and eases joint stiffness"
    ],
    indications: ["General Fatigue", "Insomnia", "Muscle Spasms", "Vata Imbalance", "Stress & Anxiety"]
  },
  {
    id: "full-body-massage",
    slug: "full-body-massage",
    name: "Full Body Massage",
    category: "massages",
    categoryName: "Body Massages",
    duration: "60 Mins",
    price: 2000,
    priceFormatted: "₹2,000",
    image: "/images/kizhi.jpg",
    featured: false,
    tagline: "Revitalizing Relaxation & Circulation Booster",
    shortDesc: "Complete therapeutic massage for unwinding physical tension, relaxing tight muscles, and revitalizing the entire body.",
    description: "A comprehensive traditional full-body massage using warm therapeutic oils. Designed to relieve deep muscle tightness, enhance arterial circulation, and impart immediate relaxation.",
    benefits: [
      "Relieves daily aches and lifestyle stiffness",
      "Calms hyperactive nerves and improves vitality",
      "Leaves skin supple, soft, and nourished"
    ],
    indications: ["Desk Strain", "Body Soreness", "Exhaustion", "Poor Circulation"]
  },
  {
    id: "oil-glow-body-massage",
    slug: "oil-glow-body-massage",
    name: "Oil Glow Body Massage",
    category: "massages",
    categoryName: "Body Massages",
    duration: "60 Mins",
    price: 2200,
    priceFormatted: "₹2,200",
    image: "/images/pada_abhyanga.jpg",
    featured: true,
    tagline: "Radiance & Skin Polishing Herbal Oil Therapy",
    shortDesc: "Enriched with skin-toning herbal botanicals that deeply moisturize, condition skin, and restore youthful natural glow.",
    description: "A specialized body therapy utilizing vitamin-rich botanicals and glow-enhancing Ayurvedic formulations. It exfoliates dead epidermal layers while locking in deep moisture for radiant, glowing skin.",
    benefits: [
      "Boosts skin elasticity and cellular renewal",
      "Restores even skin tone and velvety texture",
      "Promotes deep peace and emotional calm"
    ],
    indications: ["Dry Skin", "Dull Complexion", "Uneven Texture", "Sun Damage"]
  },
  {
    id: "olive-oil-massage",
    slug: "olive-oil-massage",
    name: "Olive Oil Massage",
    category: "massages",
    categoryName: "Body Massages",
    duration: "60 Mins",
    price: 2200,
    priceFormatted: "₹2,200",
    image: "/images/kizhi.jpg",
    featured: false,
    tagline: "Intense Nourishment & Muscle Relaxation",
    shortDesc: "Rich, antioxidant-dense olive oil massage that penetrates deeply to soothe strained tendons and nourish dry skin.",
    description: "Pure extra-virgin olive oil warmed to optimum temperature is massaged across the body using long, firm effleurage techniques, providing high antioxidant protection and easing deep muscle knots.",
    benefits: [
      "High vitamin E content combats free radical damage",
      "Softens callous tissue and improves flexibility",
      "Soothes sensitive or reactive skin types"
    ],
    indications: ["Xerosis (Dry Skin)", "Muscle Fatigue", "Post-Workout Soreness"]
  },
  {
    id: "cream-massage",
    slug: "cream-massage",
    name: "Cream Massage (Orange / Aloe Vera)",
    category: "massages",
    categoryName: "Body Massages",
    duration: "60 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/mukha_lepam.png",
    featured: false,
    tagline: "Hydrating Herbal Cream Therapy",
    shortDesc: "Ultra-hydrating whole body cream massage utilizing natural extracts of wild orange, aloe vera, and sandalwood.",
    description: "An invigorating massage using cold-pressed herbal creams that leave zero greasy residue while providing profound cellular hydration and cooling comfort.",
    benefits: [
      "Re-hydrates parched, sun-exposed skin",
      "Infuses refreshing citrus aromatherapeutic uplifting feel",
      "Relaxes muscular stress smoothly"
    ],
    indications: ["Dehydrated Skin", "Stress", "Summer Body Heat", "Sensitive Skin"]
  },
  {
    id: "herbal-body-scrub",
    slug: "herbal-body-scrub",
    name: "Herbal Body Scrub",
    category: "massages",
    categoryName: "Body Massages",
    duration: "45 Mins",
    price: 1500,
    priceFormatted: "₹1,500",
    image: "/images/pada_abhyanga.jpg",
    featured: true,
    tagline: "Natural Exfoliation & Detoxifying Polishing",
    shortDesc: "Coarse therapeutic herbal powders buff away dead skin cells, unclog pores, and stimulate microvascular blood circulation.",
    description: "A vigorous exfoliating scrub applying a customized blend of Ayurvedic herbs, Triphala, chickpea flour, and essential oils. It effectively strips dead cell debris and activates deep lymph drainage.",
    benefits: [
      "Unclogs pores and eliminates micro-toxins",
      "Improves subcutaneous blood flow",
      "Reveals extraordinarily smooth, silk-like skin"
    ],
    indications: ["Cellulite", "Rough Patches", "Blemishes", "Dull Skin"]
  },
  {
    id: "udhwarthanam",
    slug: "udhwarthanam-weight-loss",
    name: "Udhwarthanam (Herbal Powder Massage)",
    category: "massages",
    categoryName: "Body Massages",
    duration: "60 Mins",
    price: 2000,
    priceFormatted: "₹2,000",
    image: "/images/pada_abhyanga.jpg",
    featured: true,
    tagline: "Targeted Slimming & Weight Management Therapy",
    shortDesc: "Special upward friction massage with medicated herbal powders to break down subcutaneous fat, reduce obesity, and tone tissues.",
    description: "Udhwarthanam is a classical Ayurvedic dry massage performed in an upward direction (opposite to hair follicles) using potent herbal powders. The intense friction breaks down cellulite, mobilizes dormant fats, activates sluggish metabolism, and addresses obesity and hemiplegia.",
    benefits: [
      "Breaks down stubborn subcutaneous adipose fat cells",
      "Tones and tightens flabby skin after weight loss",
      "Stimulates metabolic rate and lymphatic detoxification",
      "Improves joint mobility and cures heavy lethargy"
    ],
    indications: ["Obesity & Weight Gain", "Cellulite", "PCOS Metabolic Sluggishness", "High Cholesterol", "Lethargy"]
  },
  {
    id: "back-massage",
    slug: "back-massage-spinal",
    name: "Back Massage (Spinal Care)",
    category: "massages",
    categoryName: "Body Massages",
    duration: "30 Mins",
    price: 1200,
    priceFormatted: "₹1,200",
    image: "/images/kizhi.jpg",
    featured: false,
    tagline: "Targeted Vertebral & Lumbar Release",
    shortDesc: "Focused spinal therapy addressing thoracic, lumbar, and sacral stiffness from prolonged sitting.",
    description: "Concentrated deep-tissue Ayurvedic manipulation of paraspinal muscles along the vertebral column using specialized medicated spine oils like Mahanarayana Thailam.",
    benefits: [
      "Releases compression on vertebral discs",
      "Eases lumbar muscle spasm and spinal stiffness",
      "Restores spinal curvature flexibility"
    ],
    indications: ["Lower Back Ache", "Desk Stiff Spine", "Postural Strain", "Lumbar Fatigue"]
  },
  {
    id: "head-neck-shoulder",
    slug: "head-neck-shoulder-massage",
    name: "Head, Neck & Shoulder Massage",
    category: "massages",
    categoryName: "Body Massages",
    duration: "30 Mins",
    price: 1000,
    priceFormatted: "₹1,000",
    image: "/images/nasyam.png",
    featured: false,
    tagline: "Desk-Worker Stress & Tension Reliever",
    shortDesc: "De-stresses upper traps, cervical spine, and cranial marma points to cure tension headaches and neck stiffness.",
    description: "An intensive focused therapy applying cooling and nervine tonic oils to the scalp, cervical vertebra, and shoulder girdle to dissolve muscular knots.",
    benefits: [
      "Relieves cervical tension and computer-neck strain",
      "Alleviates stress-induced headaches and mental fatigue",
      "Nourishes hair roots and calms the mind"
    ],
    indications: ["Cervical Tension", "Tension Headache", "Shoulder Knots", "Mental Fatigue"]
  },
  {
    id: "leg-foot-massage",
    slug: "leg-foot-massage-pada-abhyanga",
    name: "Leg & Foot Massage (Pada Abhyanga)",
    category: "massages",
    categoryName: "Body Massages",
    duration: "30 Mins",
    price: 800,
    priceFormatted: "₹800",
    image: "/images/pada_abhyanga.jpg",
    featured: false,
    tagline: "Foot Reflexology & Calm Sleep Therapy",
    shortDesc: "Ayurvedic foot reflexology stimulating vital Pada Marma points to induce peaceful sleep and relieve calf cramps.",
    description: "Pada Abhyanga focuses on the lower legs and feet using herbal oils and traditional bronze (Kansa) bowl techniques to balance body temperature, ease tired soles, and promote deep restful sleep.",
    benefits: [
      "Activates 72,000 reflex nerve terminals",
      "Cures burning sensation in feet and cracked heels",
      "Promotes uninterrupted deep night sleep"
    ],
    indications: ["Plantar Fasciitis", "Restless Leg Syndrome", "Insomnia", "Calf Cramps", "Heel Pain"]
  },
  {
    id: "couple-massage",
    slug: "couple-massage",
    name: "Couple Massage (Holistic Wellness)",
    category: "massages",
    categoryName: "Body Massages",
    duration: "60 Mins",
    price: 4500,
    priceFormatted: "₹4,500",
    image: "/images/kizhi.jpg",
    featured: false,
    tagline: "Shared Healing & Harmonious Relaxation",
    shortDesc: "Simultaneous customized Abhyanga therapy for couples in a serene, aromatic healing ambience.",
    description: "Experience the profound rejuvenation of traditional Kerala Ayurveda together in a private therapy suite with dedicated therapists delivering synchronized healing.",
    benefits: [
      "Simultaneous deep body relaxation and stress release",
      "Customized herbal oils chosen for each individual",
      "Memorable rejuvenating experience"
    ],
    indications: ["Couples Wellness", "Anniversaries", "Shared Rejuvenation", "Stress Relief"]
  },

  // Kizhi Therapies
  {
    id: "ela-kizhi",
    slug: "ela-kizhi-pathra-pinda-sweda",
    name: "Ela Kizhi (Pathra Pinda Sweda)",
    category: "kizhi",
    categoryName: "Kizhi (Potli) Therapies",
    duration: "60 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/kizhi.jpg",
    featured: true,
    tagline: "Medicinal Leaf Bolus Sudation for Acute Pain",
    shortDesc: "Heated herbal poultices packed with medicinal leaves and castor oils massaged over body for rapid pain & inflammation relief.",
    description: "Ela Kizhi is one of the most celebrated Kerala Ayurvedic sudation therapies. Fresh medicinal leaves (such as Arka, Nirgundi, Eranda) are fried in herbal oils with garlic, rock salt, and lemon, tied into cotton boluses, and rhythmically patted across the body at optimal heat to drain inflammation.",
    benefits: [
      "Provides rapid relief from acute joint and muscular pains",
      "Dissolves deep inflammatory fluid retention and swelling",
      "Unblocks restricted joint mobility and stiffness",
      "Improves muscle tone and neurological nerve conductivity"
    ],
    indications: ["Osteoarthritis", "Cervical & Lumbar Spondylosis", "Sciatica", "Sports Injuries", "Frozen Shoulder"]
  },
  {
    id: "podi-kizhi",
    slug: "podi-kizhi-choornapinda-sweda",
    name: "Podi Kizhi (Choornapinda Sweda)",
    category: "kizhi",
    categoryName: "Kizhi (Potli) Therapies",
    duration: "60 Mins",
    price: 1600,
    priceFormatted: "₹1,600",
    image: "/images/kizhi.jpg",
    featured: true,
    tagline: "Herbal Powder Poultice for Chronic Stiffness",
    shortDesc: "Warm boluses of finely ground anti-inflammatory herbs applied firmly over joints to eliminate Ama (toxins) and relieve spasms.",
    description: "Podi Kizhi utilizes dry or oil-dipped cotton poultices filled with a potent herbal formulation (Choornam) like Kolakulathadi Choornam. It is specifically formulated to combat deep stiffness, heaviness, and numbness.",
    benefits: [
      "Excellent for heavy, numb, and cold joint sensations",
      "Melts toxic crystalline deposits in arthritic joints",
      "Enhances peripheral blood supply"
    ],
    indications: ["Rheumatoid Arthritis (Amavata)", "Myofascial Pain", "Chronic Sprains", "Numbness"]
  },
  {
    id: "navara-kizhi",
    slug: "navara-kizhi-shashtikasali-sweda",
    name: "Navara Kizhi (Shashtikasali Pinda Sweda)",
    category: "kizhi",
    categoryName: "Kizhi (Potli) Therapies",
    duration: "60 Mins",
    price: 2500,
    priceFormatted: "₹2,500",
    image: "/images/kizhi.jpg",
    featured: true,
    tagline: "Royal Nourishing Medicated Rice Bolus Therapy",
    shortDesc: "Precious Navara rice cooked in herbal decoctions and cow's milk applied to nourish wasting muscles and paralyzed nerves.",
    description: "Regarded as the pinnacle of Kerala restorative therapies, Navara Kizhi uses organic 60-day crop Navara rice boiled in Balamoola kashayam and medicated milk. It provides profound tissue nourishment (Brimhana) and neuromuscular regeneration.",
    benefits: [
      "Rebuilds depleted muscle tissue and reverses atrophy",
      "Strengthens degenerative nerve pathways and joints",
      "Imparts unmatched anti-aging rejuvenation to the body",
      "Enhances immune resilience and skin complexion"
    ],
    indications: ["Muscular Dystrophy", "Post-Stroke Paralysis", "Polio Rehab", "Motor Neuron Weakness", "Emaciation"]
  },
  {
    id: "dhanyamla-kizhi",
    slug: "dhanyamla-kizhi",
    name: "Dhanyamla Kizhi (Fermented Grain Sweda)",
    category: "kizhi",
    categoryName: "Kizhi (Potli) Therapies",
    duration: "30 Mins",
    price: 1000,
    priceFormatted: "₹1,000",
    image: "/images/kizhi.jpg",
    featured: false,
    tagline: "Fermented Medicinal Cereals for Inflammatory Arthrosis",
    shortDesc: "Boluses steeped in warm fermented herbal grain liquid (Dhanyamla) to combat intense inflammatory swellings.",
    description: "A specialized therapy where herbal poultices are heated in lukewarm Dhanyamla (fermented medicinal liquid brewed with grains and herbs), providing miraculous relief in conditions where heavy oils are contraindicated.",
    benefits: [
      "Reduces burning joint inflammation instantly",
      "Dries up excess water retention and morbid Kapha",
      "Improves lymphatic movement"
    ],
    indications: ["Gouty Arthritis", "Inflammatory Joint Swelling", "Metabolic Toxemia", "Amavata"]
  },
  {
    id: "naranga-kizhi",
    slug: "naranga-kizhi-jambeera-sweda",
    name: "Naranga Kizhi (Jambeera Pinda Sweda)",
    category: "kizhi",
    categoryName: "Kizhi (Potli) Therapies",
    duration: "30 Mins",
    price: 1000,
    priceFormatted: "₹1,000",
    image: "/images/kizhi.jpg",
    featured: false,
    tagline: "Wild Lemon & Herbal Bolus for Locked Joints",
    shortDesc: "Wild lemons, rock salt, and spices bundled in poultices to melt calcified deposits, relieve frozen shoulder and heel spurs.",
    description: "A warming therapy utilizing wild lemon (Jambeera) pieces sautéed in anti-vata oils. The acidic-warm synergy rapidly dissolves calcium build-ups and unfreezes restricted joints.",
    benefits: [
      "Highly specific for calcaneal heel spurs and frozen shoulder",
      "Breaks down localized scar tissue and ligament adhesions",
      "Provides immediate warming pain relief"
    ],
    indications: ["Frozen Shoulder (Apabahuka)", "Heel Spur Pain", "Tendonitis", "Severe Stiffness"]
  },
  {
    id: "manal-kizhi",
    slug: "manal-kizhi-valooka-sweda",
    name: "Manal Kizhi (Valooka Sweda)",
    category: "kizhi",
    categoryName: "Kizhi (Potli) Therapies",
    duration: "30 Mins",
    price: 1000,
    priceFormatted: "₹1,000",
    image: "/images/kizhi.jpg",
    featured: false,
    tagline: "Sterilized Dry Sand Fomentation for Swelling",
    shortDesc: "Purified dry heated sand boluses to absorb inflammatory joint fluids, acute edema, and chronic morning stiffness.",
    description: "A classical dry sudation technique utilizing washed, medicinal-herbal infused hot sand tied in durable poultices. Perfect for ailments aggravated by moisture or cold.",
    benefits: [
      "Dries acute synovial effusions in swollen knees",
      "Eases crippling morning stiffness in rheumatoid conditions",
      "Stimulates deep tissue heat dissipation"
    ],
    indications: ["Acute Joint Effusions", "Morning Stiffness", "Rheumatoid Flare-Ups", "Bursitis"]
  },

  // Dhara & Oil Baths
  {
    id: "shirodhara",
    slug: "shirodhara",
    name: "Shirodhara (Mind & Nervous Stream Therapy)",
    category: "dhara",
    categoryName: "Dhara & Oil Baths",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/nasyam.png",
    featured: true,
    tagline: "The World-Renowned Medicated Oil Third-Eye Stream",
    shortDesc: "Continuous gentle rhythmic stream of warm herbal oil poured across the forehead (Ajna Marma) to soothe stress and insomnia.",
    description: "Shirodhara is the crown jewel of Ayurvedic relaxation. A steady, rhythmic oscillation of customized herbal oil, buttermilk, or herbal decoction is poured from an authentic brass vessel onto the forehead. This calms the hypothalamus, balances brain waves (Alpha state), and heals neuropsychiatric disorders.",
    benefits: [
      "Eradicates chronic insomnia, panic attacks, and severe anxiety",
      "Provides lasting relief from migraines, tension headaches, and brain fog",
      "Stabilizes hypertension and regulates nervous neurotransmitters",
      "Enhances memory, mental clarity, and inner tranquility"
    ],
    indications: ["Chronic Insomnia", "Anxiety & Depression", "Migraine", "Hypertension", "Burnout & Stress", "Memory Loss"]
  },
  {
    id: "kazhayadhara",
    slug: "kazhayadhara",
    name: "Kazhayadhara (Decoction Stream Therapy)",
    category: "dhara",
    categoryName: "Dhara & Oil Baths",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/nasyam.png",
    featured: false,
    tagline: "Herbal Kashayam Stream for Skin & Nerve Healing",
    shortDesc: "Warm medicinal herbal decoctions continuously poured over the body to alleviate skin inflammation and neurological pain.",
    description: "A therapeutic whole-body or localized stream of warm herbal decoction prepared with 15+ authentic medicinal roots. It cleanses deep subcutaneous tissue and pacifies burning sensations.",
    benefits: [
      "Pacifies burning sensations, pruritus, and eczema flare-ups",
      "Detoxifies the entire dermis without oily clogging",
      "Soothes systemic fibromyalgia ache"
    ],
    indications: ["Eczema & Psoriasis", "Fibromyalgia", "Neuropathic Burning", "Skin Allergies"]
  },
  {
    id: "thakradhara",
    slug: "thakradhara",
    name: "Thakradhara (Medicated Buttermilk Stream)",
    category: "dhara",
    categoryName: "Dhara & Oil Baths",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/nasyam.png",
    featured: true,
    tagline: "Cooling Herbal Buttermilk Flow for Scalp & Stress",
    shortDesc: "Medicated buttermilk infused with Musta and Amalaki poured over the head to treat psoriasis, hair fall, and intense heat.",
    description: "Thakradhara involves brewing medicated buttermilk with potent herbs like Cyperus rotundus (Musta) and Indian Gooseberry (Amalaki). The soothing cool flow dramatically pacifies aggravated Pitta dosha.",
    benefits: [
      "Top remedy for scalp psoriasis, dandruff, and premature greying",
      "Cools excessive body heat and hyper-stress",
      "Improves vision sharpness and cools burning eyes"
    ],
    indications: ["Scalp Psoriasis", "Severe Alopecia & Hair Fall", "Chronic Insomnia", "Excess Pitta Heat"]
  },
  {
    id: "thailadhara",
    slug: "thailadhara",
    name: "Thailadhara (Full Body Medicated Oil Stream)",
    category: "dhara",
    categoryName: "Dhara & Oil Baths",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/pada_abhyanga.jpg",
    featured: false,
    tagline: "Continuous Warm Herbal Oil Drizzle",
    shortDesc: "Luxurious warm herbal oil continuously poured all over the body accompanied by synchronized strokes for deep neurological healing.",
    description: "Medicated oils like Dhanwantharam or Ksheerabala are drizzled all over the body in continuous streams. It pacifies the deepest Vata disorders and restores vitality.",
    benefits: [
      "Deep nerve rejuvenation for motor debilities",
      "Revitalizes dehydrated, cracked, or aging skin",
      "Builds robust physical stamina (Ojas)"
    ],
    indications: ["Degenerative Spondylosis", "Post-Stroke Rehabilitation", "General Debility", "Vata Vyadhi"]
  },
  {
    id: "ksheeradhara",
    slug: "ksheeradhara",
    name: "Ksheeradhara (Medicated Milk Stream)",
    category: "dhara",
    categoryName: "Dhara & Oil Baths",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/nasyam.png",
    featured: false,
    tagline: "Herbal Infused Milk Stream for Pitta Relief",
    shortDesc: "Cow's milk infused with cooling botanicals poured over forehead or body for heat exhaustion, grief, and sensitive skin.",
    description: "Medicated cow's milk infused with cooling sandalwood, vetiver, and bala is gently poured in a tranquil continuous rhythm, deeply cooling both mind and tissues.",
    benefits: [
      "Calms intense emotional agitation and grief",
      "Provides relief from burning sensations and sunstroke",
      "Nourishes fine sensory nerves"
    ],
    indications: ["Severe Headaches", "Burning Sensation", "Emotional Trauma", "Extreme Stress"]
  },
  {
    id: "dhanyamladhara",
    slug: "dhanyamladhara",
    name: "Dhanyamladhara (Fermented Liquid Stream)",
    category: "dhara",
    categoryName: "Dhara & Oil Baths",
    duration: "45 Mins",
    price: 1500,
    priceFormatted: "₹1,500",
    image: "/images/pada_abhyanga.jpg",
    featured: false,
    tagline: "Potent Anti-Inflammatory Stream for Rheumatism",
    shortDesc: "Continuous warm stream of fermented grain decoction poured over painful limbs to eliminate swelling and stiffness.",
    description: "Dhanyamladhara pours warm fermented medicinal brew continuously through specialized nozzles across affected joint areas, breaking inflammatory stagnations.",
    benefits: [
      "Specific cure for acute gouty arthritis and joint effusions",
      "Reduces severe systemic stiffness and body heaviness",
      "Accelerates toxin elimination"
    ],
    indications: ["Gout", "Rheumatoid Arthritis", "Ankylosing Spondylitis", "Hemiplegia"]
  },
  {
    id: "shirovasti",
    slug: "shirovasti",
    name: "Shirovasti (Cranial Herbal Oil Reservoir)",
    category: "dhara",
    categoryName: "Dhara & Oil Baths",
    duration: "45 Mins",
    price: 1600,
    priceFormatted: "₹1,600",
    image: "/images/nasyam.png",
    featured: false,
    tagline: "Intensive Cranial Cap Oil Pooling for Neuropathy",
    shortDesc: "Warm medicated oil retained over the head inside a special leather cylinder cap for cranial nerve disorders and facial palsy.",
    description: "A classical high-potency therapy where a cylindrical leather sleeve is fitted securely on the shaved scalp and filled with warm medicated oils, retained for an exact duration to nourish cranial nerves.",
    benefits: [
      "Rehabilitates Bell's Palsy, Trigeminal Neuralgia, and Facial Paralysis",
      "Cures severe chronic migraine and optic nerve atrophy",
      "Stabilizes degenerative brain conditions"
    ],
    indications: ["Facial Palsy", "Trigeminal Neuralgia", "Severe Migraine", "Optic Nerve Weakness", "Parkinsonism"]
  },

  // Vasti Therapies
  {
    id: "kadi-vasthi",
    slug: "kadi-vasthi-back-pain",
    name: "Kadi Vasthi (Lumbosacral Oil Retention)",
    category: "vasti",
    categoryName: "Vasti Therapies",
    duration: "30 Mins",
    price: 1500,
    priceFormatted: "₹1,500",
    image: "/images/kadi_vasthi_authentic.jpg",
    featured: true,
    tagline: "The Premier Therapy for Lower Back Pain & Sciatica",
    shortDesc: "A reservoir of herbal paste is built over the lower back and filled with warm medicated oil to nourish spine & relieve disc compression.",
    description: "Kadi Vasthi is the gold-standard treatment for spinal and lumbar disorders. A leak-proof ring of black gram dough is formed over the lumbosacral spine, and warm anti-inflammatory medicated oil (like Sahacharadi / Kottamchukkadi) is pooled and constantly replenished to bathe the vertebrae and nerve roots.",
    benefits: [
      "Relieves sharp radiating pain from Sciatica and compressed nerves",
      "Nourishes degenerated and dehydrated lumbar intervertebral discs",
      "Eradicates chronic lumbago, stiffness, and posture weakness",
      "Avoids unnecessary spine surgeries in early/moderate disc bulges"
    ],
    indications: ["Lumbar Spondylosis", "Sciatica Nerve Pain", "Herniated / Bulging Discs", "Coccyx Pain", "Chronic Lower Backache"]
  },
  {
    id: "janu-vasthi",
    slug: "janu-vasthi-knee-pain",
    name: "Janu Vasthi (Knee Joint Oil Pool)",
    category: "vasti",
    categoryName: "Vasti Therapies",
    duration: "30 Mins",
    price: 1500,
    priceFormatted: "₹1,500",
    image: "/images/pada_abhyanga.jpg",
    featured: true,
    tagline: "Natural Rejuvenation for Knee Arthritis & Cartilage",
    shortDesc: "Warm medicated oil retained over knee joints in herbal dough dams to regenerate cartilage, lubricate joints, and stop cracking sounds.",
    description: "Warm medicated oils rich in guggulu and bala are pooled over the anterior and posterior knee compartments. This stimulates synovial fluid synthesis, reduces crepitus (cracking sounds), and eases walking difficulty.",
    benefits: [
      "Restores lubricating synovial fluid inside the knee joint capsule",
      "Slows down knee cartilage breakdown and osteophytes formation",
      "Restores painless climbing of stairs and walking flexibility"
    ],
    indications: ["Knee Osteoarthritis", "Ligament Tear Recovery", "Knee Crepitus / Cracking", "Post-Surgical Knee Stiffness"]
  },
  {
    id: "uro-vasti",
    slug: "uro-vasti-chest-care",
    name: "Uro Vasti (Hrid Vasti / Chest Care)",
    category: "vasti",
    categoryName: "Vasti Therapies",
    duration: "30 Mins",
    price: 1000,
    priceFormatted: "₹1,000",
    image: "/images/kizhi.jpg",
    featured: true,
    tagline: "Cardiac Rejuvenation & Respiratory Expansion",
    shortDesc: "Herbal oil reservoir placed over the thoracic chest region to strengthen cardiac muscles, reduce anxiety, and ease asthma.",
    description: "Also called Hrid Vasti, warm herbal oil (Hrudaya Rogahara Thailam) is retained over the sternum/cardiac plexus area, strengthening the myocardium and releasing trapped emotional tightness.",
    benefits: [
      "Strengthens cardiovascular muscle tone and improves cardiac endurance",
      "Releases deep emotional grief, chronic anxiety, and palpitations",
      "Improves lung vital capacity in chronic respiratory ailments"
    ],
    indications: ["Asthma & Wheezing", "Cardiac Neurosis", "Chest Muscle Pain", "Heavy Anxiety / Heart Palpitations"]
  },
  {
    id: "prishtavasti",
    slug: "prishtavasti-spinal-cord",
    name: "Prishtavasti (Complete Spine Oil Retention)",
    category: "vasti",
    categoryName: "Vasti Therapies",
    duration: "30 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/kizhi.jpg",
    featured: false,
    tagline: "Full-Length Vertebral Column Treatment",
    shortDesc: "Medicated oil retained along the entire spinal column from cervical to sacral vertebrae to treat multi-level disc issues.",
    description: "An extensive vasti procedure covering the entire vertebral spine with multi-chamber dough boundaries, bathing all 33 vertebrae in therapeutic spine-rejuvenating thailams.",
    benefits: [
      "Addresses complex multi-level disc herniations and degenerative spine",
      "Improves posture and spinal nerve trunk vitality",
      "Prevents progressive curvature deformities"
    ],
    indications: ["Ankylosing Spondylitis", "Multi-level Disc Bulges", "Spinal Stenosis", "Chronic Spine Degeneration"]
  },
  {
    id: "greevavasti",
    slug: "greevavasti-neck-pain",
    name: "Greevavasti (Cervical Spine Oil Reservoir)",
    category: "vasti",
    categoryName: "Vasti Therapies",
    duration: "30 Mins",
    price: 1000,
    priceFormatted: "₹1,000",
    image: "/images/nasyam.png",
    featured: true,
    tagline: "Targeted Relief for Cervical Spondylosis & Text-Neck",
    shortDesc: "Dough reservoir created over the cervical neck spine to relieve numbness in arms, neck stiffness, and compressed nerves.",
    description: "Warm therapeutic oils are pooled over the C1-C7 cervical vertebrae to ease compressed nerve roots, tingling in fingers, and chronic computer-posture neck stiffness.",
    benefits: [
      "Stops tingling and numbness radiating down arms into fingers",
      "Relieves neck muscle spasm and morning cervical immobility",
      "Relieves vertigo caused by cervical arterial compression"
    ],
    indications: ["Cervical Spondylosis", "Brachial Neuralgia", "Tingling Sensation in Arms", "Vertigo / Dizziness", "Tech-Neck"]
  },
  {
    id: "kazhaya-vasti",
    slug: "kazhaya-vasti",
    name: "Kazhaya Vasti (Niruha Basti / Medicated Decoction Enema)",
    category: "vasti",
    categoryName: "Vasti Therapies",
    duration: "30 Mins",
    price: 1500,
    priceFormatted: "₹1,500",
    image: "/images/kizhi.jpg",
    featured: false,
    tagline: "Panchakarma Internal Colon Detoxification",
    shortDesc: "Administration of potent herbal decoction with honey, rock salt, and oils for deep systemic detox and dosha balance.",
    description: "A classical Panchakarma pillar therapy where an emulsion of herbal decoction (Kashayam), honey, rock salt, paste, and oil is administered through the rectum to purge deep metabolic toxins (Ama).",
    benefits: [
      "Flushes systemic toxins, metabolic waste, and trapped Vata gas",
      "Normalizes intestinal microbiome and peristalsis",
      "Profound relief from chronic arthritis, spine pain, and paralysis"
    ],
    indications: ["Severe Constipation", "Systemic Arthritis", "Sciatica", "Paralysis", "Abdominal Distension"]
  },
  {
    id: "thaila-vasti",
    slug: "thaila-vasti",
    name: "Thaila Vasti (Anuvasana Basti / Medicated Oil Enema)",
    category: "vasti",
    categoryName: "Vasti Therapies",
    duration: "30 Mins",
    price: 800,
    priceFormatted: "₹800",
    image: "/images/kizhi.jpg",
    featured: false,
    tagline: "Internal Nourishing Oil Enema for Vata Pacification",
    shortDesc: "Retention of warm medicated herbal oil in the colon to lubricate tissues, strengthen bones, and cure chronic dryness.",
    description: "Small volume of medicated herbal oil (like Sahacharadi or Dhanwantharam) administered after meals. It lubricates the large intestine, soothes pelvic nerves, and rebuilds bone tissue.",
    benefits: [
      "Nourishes bone marrow (Asthi Dhatu) and pelvic organs",
      "Cures internal dryness, bloating, and emaciation",
      "Soothes hyperactive pelvic nerve networks"
    ],
    indications: ["Osteopenia / Osteoporosis", "Vata Imbalance", "Lower Back Weakness", "Menstrual Irregularities"]
  },

  // Ayur Care & Specialized
  {
    id: "nasyam",
    slug: "nasyam",
    name: "Nasyam (Nasal Cleansing & Cranial Care)",
    category: "ayur-care",
    categoryName: "Ayur Care",
    duration: "40 Mins",
    price: 1200,
    priceFormatted: "₹1,200",
    image: "/images/nasyam.png",
    featured: true,
    tagline: "Classical Panchakarma Treatment for Head, ENT & Sinuses",
    shortDesc: "Administration of medicated herbal drops through nostrils after face massage and steam to clear sinuses, migraine, and mental fog.",
    description: "In Ayurveda, the nose is considered the gateway to the brain (Nasa Hi Shirso Dvaram). Nasyam includes gentle facial marma massage with warm oil, facial herbal steam, and the instillation of drops of Anu Thailam / Ksheerabala. It purges deep sinuses and clarifies the mind.",
    benefits: [
      "Unblocks chronic sinus congestion, allergic rhinitis, and nasal polyps",
      "Provides dramatic relief from chronic migraines and cluster headaches",
      "Prevents premature hair greying, hair thinning, and cervical stiffness",
      "Sharpens sensory organs and improves mental focus"
    ],
    indications: ["Chronic Sinusitis", "Migraines", "Allergic Rhinitis", "Cervical Spondylosis", "Facial Paralysis", "Hair Loss"]
  },
  {
    id: "nethratharpanam",
    slug: "nethratharpanam-nethra-vasti",
    name: "Nethratharpanam (Kriyakalpa Eye Rejuvenation)",
    category: "ayur-care",
    categoryName: "Ayur Care",
    duration: "40 Mins",
    price: 1600,
    priceFormatted: "₹1,600",
    image: "/images/nethra_tharpanam_face.png",
    featured: true,
    tagline: "Herbal Ghee Eye Bath for Computer Vision Syndrome",
    shortDesc: "Medicated herbal ghee pooled over the eyes within dough dams to nourish optic nerves, soothe dryness, and improve vision.",
    description: "Nethratharpanam creates a reservoir of black gram flour dough around the eye sockets, filled with warm Triphala Ghritam. The patient gently blinks in the medicated ghee, cooling the optic nerves and soothing screen strain.",
    benefits: [
      "Cures Computer Vision Syndrome (CVS), severe dry eye, and burning",
      "Strengthens optic nerve function and prevents progressive myopia",
      "Reduces dark circles, eye fatigue, and squint tension"
    ],
    indications: ["Computer Vision Syndrome", "Dry Eyes", "Optic Nerve Strain", "Early Cataract", "Dark Circles"]
  },
  {
    id: "nethra-dhara",
    slug: "nethra-dhara",
    name: "Nethra Dhara (Herbal Eye Stream Wash)",
    category: "ayur-care",
    categoryName: "Ayur Care",
    duration: "20 Mins",
    price: 900,
    priceFormatted: "₹900",
    image: "/images/nethra_dhara_leaf.png",
    featured: false,
    tagline: "Cooling Herbal Decoction Eye Wash",
    shortDesc: "Gentle stream of Triphala decoction poured over eyes to cleanse pollutions, cool redness, and relieve eye strain.",
    description: "A specialized eye-cleansing technique where freshly filtered Triphala or Lodhra decoction is washed in continuous delicate streams over open eyes for 20 minutes.",
    benefits: [
      "Flushes out fine atmospheric irritants and dust pollutants",
      "Cools burning sensation caused by screen overuse",
      "Relieves allergic conjunctivitis"
    ],
    indications: ["Red / Bloodshot Eyes", "Eye Allergies", "Screen Burn", "Pollution Irritation"]
  },
  {
    id: "siropichu",
    slug: "siropichu",
    name: "Siropichu (Cranial Medicated Oil Pad)",
    category: "ayur-care",
    categoryName: "Ayur Care",
    duration: "40 Mins",
    price: 1000,
    priceFormatted: "₹1,000",
    image: "/images/nasyam.png",
    featured: false,
    tagline: "Medicated Cotton Pad Pooling on Scalp Crown",
    shortDesc: "A sterile cotton pad soaked in warm herbal oil is placed on the crown of the head to treat insomnia, headache, and memory fatigue.",
    description: "Siropichu is a non-invasive yet deeply effective therapy where a thick medicated cotton pad saturated in herbal thailam is anchored to the Bregma point (Adhipati Marma) on the crown.",
    benefits: [
      "Provides relief in neurological tremors, insomnia, and stress",
      "Heals burning scalp sensations and eczema",
      "Strengthens cognitive memory and focus"
    ],
    indications: ["Insomnia", "Headaches", "Scalp Dermatitis", "Dizziness", "Cognitive Exhaustion"]
  },
  {
    id: "thalapothichil",
    slug: "thalapothichil-shirolepa",
    name: "Thalapothichil (Shirolepa Scalp Herbal Pack)",
    category: "ayur-care",
    categoryName: "Ayur Care",
    duration: "40 Mins",
    price: 1400,
    priceFormatted: "₹1,400",
    image: "/images/mukha_lepam.png",
    featured: false,
    tagline: "Cooling Medicinal Paste Cap for Scalp & Temperament",
    shortDesc: "Special medicinal paste of gooseberry and buttermilk applied over scalp and wrapped with plantain leaves for severe stress.",
    description: "Fresh medicinal pastes formulated with Amalaki, Brahmi, and buttermilk are packed across the entire scalp and wrapped with a banana leaf cap, drawing out internal body heat.",
    benefits: [
      "Profoundly calms rage, mood volatility, and chronic anxiety",
      "Arrests severe hair shedding, dandruff, and scalp heat",
      "Induces sound, dreamless restorative sleep"
    ],
    indications: ["Psychosomatic Stress", "Severe Alopecia", "Chronic Insomnia", "Premature Greying", "Migraine"]
  },
  {
    id: "lepanam",
    slug: "lepanam",
    name: "Lepanam (Localized Herbal Paste Application)",
    category: "ayur-care",
    categoryName: "Ayur Care",
    duration: "20 Mins",
    price: 600,
    priceFormatted: "₹600",
    image: "/images/mukha_lepam.png",
    featured: false,
    tagline: "Targeted Medicinal Herb Plaster for Pain & Skin",
    shortDesc: "Application of specialized herbal pastes over inflammatory joints, skin eruptions, or acute swelling until dry.",
    description: "A thick layer of freshly prepared medicinal herbal paste (e.g. Nagaradi or Kottamchukkadi Lepam) is applied over swollen joints or lesions to draw out inflammation through transdermal absorption.",
    benefits: [
      "Rapid reduction in acute joint swelling and inflammation",
      "Relieves localized skin infections and eruptions",
      "Dries up fluid retention around sprains"
    ],
    indications: ["Sprains & Twists", "Gout Swellings", "Localized Arthritis", "Skin Boils & Inflammation"]
  },
  {
    id: "pichu",
    slug: "pichu-treatment",
    name: "Pichu (Localized Medicated Oil Compress)",
    category: "ayur-care",
    categoryName: "Ayur Care",
    duration: "20 Mins",
    price: 600,
    priceFormatted: "₹600",
    image: "/images/kizhi.jpg",
    featured: false,
    tagline: "Warm Medicated Oil Compress for Joint Aches",
    shortDesc: "Warm medicated cotton compress continuously moistened with therapeutic oils over painful spine, joints, or crown.",
    description: "Thick cotton pads soaked in warm medicated oil are placed over painful tendons, joints, or forehead to provide continuous warmth and medicinal absorption.",
    benefits: [
      "Eases localized muscular knots and sprains quickly",
      "Cost-effective targeted relief for focal joint pain",
      "Soothes sensitive nerve roots"
    ],
    indications: ["Tendonitis", "Focal Joint Pain", "Tennis Elbow", "Heel Ache"]
  },
  {
    id: "herbal-steem",
    slug: "herbal-steam-bath",
    name: "Herbal Steam (Bashpa Swedana)",
    category: "ayur-care",
    categoryName: "Ayur Care",
    duration: "15 Mins",
    price: 500,
    priceFormatted: "₹500",
    image: "/images/kizhi.jpg",
    featured: false,
    tagline: "Full-Body Medicinal Herb Vapor Sudation",
    shortDesc: "Steam infused with aromatic medicinal leaves and roots inside a wooden chamber to open pores and flush metabolic toxins.",
    description: "The patient sits in a wooden chamber where herbal steam brewed from Dashamoola, eucalyptus, and mint leaves gently heats the body while keeping the head cool.",
    benefits: [
      "Opens millions of skin pores and releases deep toxins via sweat",
      "Eases post-massage muscle soreness and melts adipose fat",
      "Improves systemic respiration and skin clarity"
    ],
    indications: ["Post-Abhyanga Detox", "Body Heaviness", "Stiffness", "Respiratory Congestion"]
  },

  // Facials & Mukha Care
  {
    id: "navara-face-pack",
    slug: "navara-face-pack",
    name: "Navara Face Pack (Mukha Lepam)",
    category: "facials",
    categoryName: "Mukha Care & Facials",
    duration: "45 Mins",
    price: 1500,
    priceFormatted: "₹1,500",
    image: "/images/mukha_lepam.png",
    featured: true,
    tagline: "Organic Navara Rice & Herbal Milk Facial",
    shortDesc: "Royal facial with Navara rice, cow's milk, and Ayurvedic herbs to tighten fine lines, erase blemishes, and restore bridal glow.",
    description: "A deeply nourishing Ayurvedic facial utilizing organic Navara rice paste boiled in medicinal herbs. Gentle facial marma stimulation combined with cooling herbal packs leaves the face luminous and youthful.",
    benefits: [
      "Tightens sagging skin and reduces fine wrinkles",
      "Fades hyperpigmentation, sun spots, and dark circles",
      "Deeply moisturizes and gives a natural golden glow"
    ],
    indications: ["Premature Aging", "Fine Lines", "Blemishes & Tan", "Dry, Dull Facial Skin"]
  },
  {
    id: "kumkumadi-facial",
    slug: "kumkumadi-facial",
    name: "Kumkumadi Royal Saffron Facial",
    category: "facials",
    categoryName: "Mukha Care & Facials",
    duration: "60 Mins",
    price: 2200,
    priceFormatted: "₹2,200",
    image: "/images/mukha_lepam.png",
    featured: true,
    tagline: "Kashmiri Saffron & 26 Precious Herbs Glow Facial",
    shortDesc: "Luxurious facial with authentic Kumkumadi Tailam to purify skin, reverse dullness, and illuminate complexion.",
    description: "An opulent Ayurvedic facial incorporating authentic Kumkumadi Tailam containing Kashmiri Saffron (Kesar), Lotus stamen, and Sandalwood. Cleanses, massages, and nourishes facial tissues deeply.",
    benefits: [
      "Instantly enhances radiance and natural fairness",
      "Clears acne scars and smooths texture unevenness",
      "Improves collagen resilience and skin elasticity"
    ],
    indications: ["Uneven Skin Tone", "Acne Scars", "Bridal Glow", "Dull Complexion"]
  },

  // Moroccan & Natural Clay Therapies
  {
    id: "moroccan-blue-clay",
    slug: "moroccan-blue-clay-therapy",
    name: "Moroccan Blue Clay (Nila Detox)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/clay_moroccan_blue.jpg",
    featured: true,
    tagline: "Royal Blue Nila Mud for Pigmentation & Dermal Brightening",
    shortDesc: "Authentic Moroccan Blue mineral clay to gently extract deep micro-pollutants, lighten dark spots, and illuminate tired complexion.",
    description: "Moroccan Blue Clay (Nila powder) is a rare Saharan mineral clay renowned for natural skin brightening and intensive cellular detox. Blended with organic rose water and herbal infusions, this ultra-fine mineral mud binds to deep toxins, regulates melanin synthesis to lighten stubborn blemishes, tightens pores, and leaves skin radiantly glowing.",
    benefits: [
      "Evens skin tone and visibly fades hyperpigmentation and sun spots",
      "Gently draws out micro-pollutants and heavy metals from facial pores",
      "Improves cellular oxygenation and restores luminous skin tone",
      "Soothes sun-stressed or irritated skin with natural cooling minerals"
    ],
    indications: ["Hyperpigmentation & Dark Spots", "Dull & Tired Complexion", "Sun Tan & Blemishes", "Clogged Pores", "Pitta Irritation"]
  },
  {
    id: "moroccan-red-clay",
    slug: "moroccan-red-clay-therapy",
    name: "Moroccan Red Clay (Terracotta Warming)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/clay_moroccan_red.jpg",
    featured: true,
    tagline: "High-Iron Volcanic Clay for Micro-Circulation & Thermal Relief",
    shortDesc: "Bio-available iron-rich terracotta clay providing thermal muscle tension relief, deep pore purification, and skin elasticity boost.",
    description: "Mined from ancient Atlas Mountain volcanic deposits, Moroccan Red Clay is naturally rich in bio-available iron oxide and magnesium. Applied warm across the body or face, it creates gentle thermal vasodilation, stimulating fresh blood circulation, draining sluggish lymph, and restoring skin firmness.",
    benefits: [
      "Stimulates subcutaneous micro-circulation and skin metabolism",
      "Deeply purifies congested pores without stripping moisture",
      "Provides comforting thermal relief to tense neck, shoulder, and back muscles",
      "Enhances natural skin elasticity and youthful contouring"
    ],
    indications: ["Sluggish Circulation", "Mature / Sagging Skin", "Cellulite & Water Retention", "Blackheads & Congestion", "Vata Coldness"]
  },
  {
    id: "ghassoul-brown-clay",
    slug: "ghassoul-brown-clay-therapy",
    name: "Ghassoul Brown Clay (Atlas Volcanic Mud)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 1900,
    priceFormatted: "₹1,900",
    image: "/images/clay_ghassoul_brown.jpg",
    featured: true,
    tagline: "Classical Saponiferous Mud for Sebum Control & Blackhead Extraction",
    shortDesc: "Ancient Atlas Mountain volcanic clay with high negative ionic charge to draw out blackheads, balance sebum, and restore natural skin barrier.",
    description: "Ghassoul (Rhassoul) Brown Clay is an organic smectite clay with powerful cation-exchange capacity. It magnetically pulls positively charged impurities, oxidized sebum, and environmental toxins from deep pores while infusing bio-assimilable magnesium and silica.",
    benefits: [
      "Reduces excess oiliness and eliminates stubborn blackheads",
      "Improves skin clarity, elasticity, and firmness by over 43%",
      "Smoothes rough, flaky skin and soothes scalp dandruff",
      "Hydrates dermal layers while purifying deep pore structures"
    ],
    indications: ["Acne & Breakouts", "Enlarged Clogged Pores", "Excess Sebum", "Scalp Dandruff & Flaking", "Toxic Skin Overload"]
  },
  {
    id: "ghassoul-red-clay",
    slug: "ghassoul-red-clay-therapy",
    name: "Ghassoul Red Clay (Mineral Clarifying)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 1900,
    priceFormatted: "₹1,900",
    image: "/images/clay_ghassoul_red.jpg",
    featured: false,
    tagline: "Silica & Iron Volcanic Red Mud for Sensitive Combination Skin",
    shortDesc: "Red volcanic smectite clay tailored for combination and delicate skin, refining uneven texture and boosting collagen matrix.",
    description: "Ghassoul Red Clay combines the deep ionic absorbing power of Moroccan volcanic mud with the revitalizing mineral profile of red iron-rich silicates. Infused with sandalwood and neroli essence, it gently purifies delicate combination skin without tightness or irritation.",
    benefits: [
      "Balances combination skin pH and strengthens protective barrier",
      "Refines uneven skin texture and smooths fine dehydration lines",
      "Calms post-inflammatory redness and rosacea tendency",
      "Imparts velvety softness and supple elasticity"
    ],
    indications: ["Sensitive Combination Skin", "Post-Inflammatory Redness", "Uneven Texture", "Environmental Damage", "Fine Lines"]
  },
  {
    id: "kaolin-clay",
    slug: "kaolin-clay-therapy",
    name: "Kaolin Pure White Clay (Porcelain Soothing)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 1600,
    priceFormatted: "₹1,600",
    image: "/images/clay_kaolin.jpg",
    featured: true,
    tagline: "Ultra-Mild Healing Clay for Sensitive, Reactive & Dry Skin",
    shortDesc: "The gentlest cosmetic clay with neutral pH, formulated with chamomile and aloe to soothe redness, cool burning, and nourish fragile skin.",
    description: "Pure White Kaolin Clay is the mildest healing earth known in dermatological science. Perfect for reactive, allergic, or dry skin types, it absorbs surface impurities without stripping natural lipid mantle. Blended with soothing Aloe Vera and Licorice, it cools Pitta heat and leaves skin silky smooth.",
    benefits: [
      "Safely purifies and calms the most delicate, reactive skin",
      "Soothes sunburn, rosacea redness, and active skin heat",
      "Maintains essential moisture barrier lipids",
      "Non-drying, hypoallergenic, and smoothing for all age groups"
    ],
    indications: ["Ultra-Sensitive / Reactive Skin", "Rosacea & Redness", "Eczema / Dry Dermatitis", "Post-Sunburn Recovery", "Pitta Heat"]
  },
  {
    id: "bentonite-clay",
    slug: "bentonite-clay-therapy",
    name: "Bentonite Clay (Volcanic Detox Wrap)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 1700,
    priceFormatted: "₹1,700",
    image: "/images/clay_bentonite.jpg",
    featured: true,
    tagline: "Volcanic Ash Clay for Powerful Full-Body Detoxification",
    shortDesc: "High-absorbency volcanic ash clay that swells with water to create an ionic magnetic field, drawing out toxins, parasites, and heavy metals from the body.",
    description: "Bentonite Clay is formed from ancient volcanic ash and carries one of the highest negative ionic charges of all natural clays. When hydrated, it expands like a sponge and generates a powerful electromagnetic field that literally pulls positively charged heavy metals, pesticides, and bacteria from deep tissues. Blended with neem and turmeric infusion for enhanced antimicrobial action.",
    benefits: [
      "Removes heavy metals, toxins, and pesticide residues from skin tissues",
      "Powerful antimicrobial action against skin bacteria and fungus",
      "Reduces body inflammation, joint swelling, and muscle soreness",
      "Alkalizes skin pH and strengthens immune skin barrier"
    ],
    indications: ["Heavy Metal Toxicity", "Skin Infections & Fungus", "Severe Acne & Cysts", "Joint & Muscle Pain", "Full Body Detox"]
  },
  {
    id: "french-pink-clay",
    slug: "french-pink-clay-therapy",
    name: "French Pink Clay (Rose Petal Glow)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 1900,
    priceFormatted: "₹1,900",
    image: "/images/clay_french_pink.jpg",
    featured: false,
    tagline: "Gentle Blush Mineral Clay for Luminous Dewy Skin",
    shortDesc: "Rare blend of white kaolin and red illite producing a soft pink clay with unmatched skin-brightening, hydrating, and pore-refining properties.",
    description: "French Pink Clay is a gentle hybrid mineral clay blending white kaolin and red illite earth, prized across European wellness spas for its exceptional softness and versatility. Ideal for normal to dry skin, it cleanses without stripping lipids, gently brightens dull complexion, and infuses deep hydration with a luminous rose glow finish.",
    benefits: [
      "Gently brightens and evens complexion with radiant rose luminosity",
      "Provides deep hydration while purifying surface impurities",
      "Refines pores and improves skin smoothness and texture",
      "Ideal for daily use — nurtures without over-drying"
    ],
    indications: ["Dull Dehydrated Skin", "Normal to Dry Skin", "Pore Refinement", "Age Spot Lightening", "Skin Luminosity"]
  },
  {
    id: "french-green-clay",
    slug: "french-green-clay-therapy",
    name: "French Green Clay (Illite Forest Purge)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/clay_french_green.jpg",
    featured: false,
    tagline: "Deep-Acting Illite Earth for Oily Skin & Pore Minimisation",
    shortDesc: "Premium French Illite green clay with powerful oil absorption and toning properties for oily, acne-prone, and congested skin.",
    description: "French Green Clay (Illite) gets its distinctive green color from decomposed plant matter and iron oxides mined from ancient ocean beds in France. It has extraordinary absorbing power — pulling up to 200 times its own weight in sebum, dead cells, and debris. Combined with spearmint extract and green tea, it creates a deep-cleansing, pore-minimising, toning ritual.",
    benefits: [
      "Absorbs excess sebum and deeply unclogs congested pores",
      "Tones and firms skin by stimulating micro-circulation",
      "Reduces blackhead formation and active acne breakouts",
      "Removes dead skin cells for visibly smoother, clearer skin"
    ],
    indications: ["Oily & Acne-Prone Skin", "Enlarged Pores", "Blackheads & Whiteheads", "Congested Complexion", "Kapha Imbalance"]
  },
  {
    id: "brazilian-purple-clay",
    slug: "brazilian-purple-clay-therapy",
    name: "Brazilian Purple Clay (Amazon Violet Ritual)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 2200,
    priceFormatted: "₹2,200",
    image: "/images/clay_brazilian_purple.jpg",
    featured: true,
    tagline: "Rare Amazon Earth for Anti-Aging & Deep Collagen Renewal",
    shortDesc: "Exotic rare purple volcanic clay from Brazilian Amazon with the highest antioxidant mineral profile — a luxury anti-aging powerhouse.",
    description: "Brazilian Purple Clay is one of the rarest cosmetic clays on Earth, sourced from deep in the Amazon basin where centuries of volcanic activity created uniquely pigmented, mineral-dense deposits. Rich in manganese, iron, and silica with powerful antioxidant properties, it combats free radical skin damage, promotes collagen matrix renewal, and restores youthful suppleness.",
    benefits: [
      "Powerful antioxidant effect combats free radical aging at cellular level",
      "Stimulates collagen and elastin synthesis for youthful firmness",
      "Deep detox action removes environmental pollutants and heavy metals",
      "Luxurious smoothing experience for mature and sun-stressed skin"
    ],
    indications: ["Anti-Aging & Fine Lines", "Sagging & Loss of Firmness", "Environmental Skin Damage", "Mature Skin Renewal", "Vata Aging"]
  },
  {
    id: "brazilian-yellow-clay",
    slug: "brazilian-yellow-clay-therapy",
    name: "Brazilian Yellow Clay (Solar Energy Wrap)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 1900,
    priceFormatted: "₹1,900",
    image: "/images/clay_brazilian_yellow.jpg",
    featured: false,
    tagline: "Golden Tropical Clay for Energy Boost & Skin Radiance",
    shortDesc: "Vibrant golden Brazilian clay rich in silica and sulfur compounds, energizing the skin and boosting natural radiance and glow.",
    description: "Brazilian Yellow Clay owes its warm golden hue to high concentrations of sulfur compounds, silica, and natural iron chromophores. Sourced from sun-baked Brazilian mineral deposits, this energizing clay stimulates skin renewal, evens out discoloration, softens rough patches, and imparts a warm healthy glow reminiscent of tropical golden sunlight.",
    benefits: [
      "Energizes dull skin and imparts vibrant warm golden radiance",
      "Smoothes uneven skin texture and softens rough patches",
      "Rich silica content supports skin firmness and cell renewal",
      "Ideal for face and body brightening wrap treatments"
    ],
    indications: ["Dull Sallow Complexion", "Uneven Skin Tone", "Rough Dry Patches", "Energy & Glow Boost", "Post-Summer Skin Repair"]
  },
  {
    id: "dead-sea-mud-clay",
    slug: "dead-sea-mud-clay-therapy",
    name: "Dead Sea Mud Clay (Mineral Immersion Wrap)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "60 Mins",
    price: 2500,
    priceFormatted: "₹2,500",
    image: "/images/clay_dead_sea_mud.jpg",
    featured: true,
    tagline: "World-Renowned Black Mineral Mud for Joints, Arthritis & Deep Pain",
    shortDesc: "Authentic mineral-rich Dead Sea mud with the highest salt concentration on earth — clinically proven to ease arthritis, psoriasis, and chronic joint pain.",
    description: "Dead Sea Mud is harvested from the deepest natural salt lake on Earth, containing 21 minerals not found in any other ocean — including magnesium, calcium, bromide, potassium, and lithium. Clinically studied in medical journals for its anti-inflammatory, analgesic, and psoriasis-clearing effects. Applied as a full-body wrap, it deeply penetrates joints, muscles, and skin layers for profound therapeutic relief.",
    benefits: [
      "Clinically proven relief for rheumatoid arthritis, osteoarthritis, and joint pain",
      "Dramatically reduces psoriasis plaques and eczema flare-ups",
      "Deep magnesium infusion relaxes chronic muscle tension and spasms",
      "Anti-inflammatory properties reduce skin redness and swelling"
    ],
    indications: ["Rheumatoid Arthritis", "Psoriasis & Eczema", "Chronic Joint & Muscle Pain", "Fibromyalgia", "Inflammatory Skin Disorders"]
  },
  {
    id: "calamine-clay",
    slug: "calamine-clay-therapy",
    name: "Calamine Clay (Cooling Zinc Ritual)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 1600,
    priceFormatted: "₹1,600",
    image: "/images/clay_calamine.jpg",
    featured: false,
    tagline: "Zinc-Rich Soothing Clay for Rashes, Itching & Heat-Damaged Skin",
    shortDesc: "Traditional medicated clay combining zinc oxide and ferric oxide — the gold standard for cooling sunburn, rashes, insect bites, and skin irritation.",
    description: "Calamine Clay is the original medicated mineral compound used for centuries to calm itching, soothe inflamed skin, and dry out weeping rashes. Rich in zinc oxide and ferric oxide, it creates a protective cooling film on skin that instantly calms the itch-scratch cycle, reduces inflammation, and promotes rapid skin barrier recovery. Blended with cooling cucumber and sandalwood.",
    benefits: [
      "Instantly cools and soothes itching from rashes, hives, and insect bites",
      "Reduces sunburn redness and heat-related skin inflammation",
      "Forms a protective zinc barrier that promotes faster healing",
      "Anti-bacterial properties prevent secondary skin infection"
    ],
    indications: ["Skin Rashes & Hives", "Insect Bites & Stings", "Sunburn Recovery", "Heat Prickly Rash", "Pitta Fire Cooling"]
  },
  {
    id: "siberian-blue-clay",
    slug: "siberian-blue-clay-therapy",
    name: "Siberian Blue Clay (Arctic Mineral Ritual)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 2100,
    priceFormatted: "₹2,100",
    image: "/images/clay_siberian_blue.jpg",
    featured: false,
    tagline: "Ultra-Rare Arctic Blue Earth for Intensive Skin Regeneration",
    shortDesc: "Exceptionally rare Siberian blue mineral clay from Lake Baikal — one of the most mineral-rich lakes on Earth — with remarkable regenerating properties.",
    description: "Siberian Blue Clay is harvested from the shores of Lake Baikal, the world's deepest and oldest freshwater lake in Russia, known for its extraordinary mineral purity. This rare clay has a distinctive deep blue-indigo color from high concentrations of glauconite and is prized for its intense skin regeneration, anti-aging antioxidant effects, and ability to restore deeply damaged skin barrier.",
    benefits: [
      "Intense skin regeneration effect restores deeply damaged skin tissue",
      "High glauconite content provides powerful antioxidant protection",
      "Supports collagen synthesis and reduces visible fine lines",
      "Detoxifies and re-mineralizes skin with rare Arctic minerals"
    ],
    indications: ["Deeply Damaged Skin", "Anti-Aging Intensive Care", "Skin Barrier Repair", "Pigmentation Disorders", "Vata-Pitta Imbalance"]
  },
  {
    id: "chocolate-clay",
    slug: "chocolate-clay-therapy",
    name: "Chocolate Cacao Clay (Indulgence Detox)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/clay_ghassoul_brown.jpg",
    featured: false,
    tagline: "Antioxidant Cacao Clay Wrap for Skin Softening & Mood Elevation",
    shortDesc: "Luxurious blend of rich cacao clay and mineral-dense earth delivering deep skin nourishment, antioxidant protection, and mood-lifting aromatherapy.",
    description: "Chocolate Cacao Clay combines the mineral-absorbing power of natural brown clay with the extraordinary antioxidant richness of raw cacao. Cacao is one of the highest natural sources of polyphenols and flavanols which combat free radical skin aging, while the clay base provides deep detoxification. The intoxicating chocolate aroma creates a powerful mood-lifting aromatherapy effect.",
    benefits: [
      "High-antioxidant cacao polyphenols protect skin from free radical damage",
      "Deep nourishing moisture infusion softens and smoothes dry skin",
      "Mood-elevating chocolate aroma reduces stress hormones (cortisol)",
      "Stimulates micro-circulation for warm healthy skin glow"
    ],
    indications: ["Dry & Rough Skin", "Anti-Aging Nourishment", "Stress & Anxiety", "Dull Complexion", "Vata Dryness"]
  },
  {
    id: "activated-charcoal-clay",
    slug: "activated-charcoal-clay-therapy",
    name: "Activated Charcoal Clay (Urban Pollution Purge)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/clay_moroccan_blue.jpg",
    featured: false,
    tagline: "Maximum-Strength Carbon Detox for City-Stressed Skin",
    shortDesc: "Ultra-fine activated carbon clay with 1,000× surface absorption capacity — the ultimate detox for pollution-exposed, urban skin.",
    description: "Activated Charcoal Clay combines the adsorption power of pharmaceutical-grade activated carbon with deep-cleansing mineral clay. Each gram of activated charcoal has 1,000+ square meters of surface area to bind and remove urban pollutants, PM2.5 particles, exhaust toxins, nicotine residues, and cosmetic chemical build-up from deep within pores. A must for city dwellers.",
    benefits: [
      "Removes urban pollution, PM2.5, and chemical toxins from deep pores",
      "Absorbs excess sebum and eliminates stubborn blackheads",
      "Reduces pore size by up to 30% with regular use",
      "Brightens and clarifies dull pollution-grey skin complexion"
    ],
    indications: ["Urban Pollution Exposure", "Severe Blackheads", "Congested Grey Skin", "Heavy Smoker Skin", "Deeply Clogged Pores"]
  },
  {
    id: "multani-clay",
    slug: "multani-clay-therapy",
    name: "Multani Mitti (Fuller's Earth Ancient Ritual)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 1400,
    priceFormatted: "₹1,400",
    image: "/images/clay_ghassoul_brown.jpg",
    featured: false,
    tagline: "Classical Indian Fuller's Earth for Oil Control & Ayurvedic Skin Glow",
    shortDesc: "Time-honored Indian medicinal clay used for 5,000+ years in Ayurveda for cooling heat, controlling oil, brightening skin, and treating inflammation.",
    description: "Multani Mitti (Fuller's Earth) is one of Ayurveda's oldest documented beauty treatments, referenced in ancient Charaka Samhita texts. Rich in calcium montmorillonite minerals, it absorbs 5× its weight in sebum and toxins while imparting a characteristic Ayurvedic skin brightening effect. Blended with turmeric, neem, and rose water in the classical tradition for maximum benefit.",
    benefits: [
      "Deep oil absorption controls severe oiliness and acne breakouts",
      "Classical Ayurvedic skin brightening and complexion enhancement",
      "Cooling and anti-inflammatory properties reduce Pitta heat rashes",
      "Time-tested natural remedy for dandruff and scalp health"
    ],
    indications: ["Oily & Acne Skin", "Hyperpigmentation", "Heat Rashes", "Scalp Dandruff", "Pitta Fire Imbalance"]
  },
  {
    id: "rose-clay",
    slug: "rose-clay-therapy",
    name: "Rose Clay (Persian Petal Luxury)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 2000,
    priceFormatted: "₹2,000",
    image: "/images/clay_french_pink.jpg",
    featured: false,
    tagline: "Romantic Rose Mineral Clay for Hydration, Glow & Feminine Radiance",
    shortDesc: "Luxurious rose-tinted clay infused with pure Bulgarian rose water and rose hip oil — a romantic spa ritual for ultimate skin softness and radiance.",
    description: "Rose Clay is blended with 100% pure Bulgarian Rose Water (Rosa Damascena) — the world's finest therapeutic rose extract — and cold-pressed rose hip oil rich in Vitamin C. This romantic luxury ritual deeply hydrates, firms, and brightens the skin while the exquisite natural rose fragrance calms the nervous system, reduces cortisol, and creates a deeply feminine, uplifting spa experience.",
    benefits: [
      "Bulgarian Rose Water provides deep hydration and skin pH balance",
      "Rose hip Vitamin C brightens, fades scars, and evens skin tone",
      "Firm-lifting minerals tighten and revitalize tired, sagging skin",
      "Natural rose aroma calms anxiety and promotes emotional wellbeing"
    ],
    indications: ["Dehydrated & Dull Skin", "Hyperpigmentation & Scars", "Emotional Stress", "Sensitivity & Redness", "Romantic Skin Ritual"]
  },
  {
    id: "nude-clay",
    slug: "nude-clay-therapy",
    name: "Nude Clay (Natural Barefoot Earth)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 1500,
    priceFormatted: "₹1,500",
    image: "/images/clay_kaolin.jpg",
    featured: false,
    tagline: "Pure Unscented Natural Earth for Sensitive & Minimal Skin Care",
    shortDesc: "100% pure, fragrance-free, dye-free natural mineral clay in its most authentic form — perfect for those with chemical sensitivities or fragrance allergies.",
    description: "Nude Clay represents the purest, most minimal form of natural mineral clay — completely free of fragrance, artificial color, preservatives, or synthetic additives. A blend of natural kaolin, bentonite, and illite in their pure state, it provides the essential clay cleansing and mineral nourishment experience without any potential irritants. The gold standard for chemically sensitive skin.",
    benefits: [
      "100% fragrance-free and dye-free — safe for most chemical sensitivities",
      "Pure mineral cleansing without any risk of allergic reactions",
      "Gentle enough for post-procedure and post-treatment skin care",
      "Provides basic clay mineral nourishment in its most authentic form"
    ],
    indications: ["Fragrance Allergies", "Chemical Sensitivities", "Post-Procedure Recovery", "Baby & Children Skin", "Ultra-Sensitive Skin"]
  },
  {
    id: "zeolite-clay",
    slug: "zeolite-clay-therapy",
    name: "Zeolite Clay (Crystalline Cage Detox)",
    category: "clays",
    categoryName: "Moroccan & Natural Clays",
    duration: "45 Mins",
    price: 2000,
    priceFormatted: "₹2,000",
    image: "/images/clay_bentonite.jpg",
    featured: false,
    tagline: "Nano-Cage Mineral Crystal for Cutting-Edge Deep Cellular Detoxification",
    shortDesc: "Revolutionary zeolite mineral crystals with unique honeycomb cage structure that traps and permanently removes heavy metals and toxins at cellular level.",
    description: "Zeolite is a naturally occurring volcanic mineral with a unique crystalline honeycomb structure formed over millions of years. Unlike traditional clays that adsorb toxins on their surface, zeolite physically traps heavy metals, ammonia, and carcinogens inside its tiny crystalline cages, permanently removing them from skin and underlying tissue. The most advanced natural detox mineral known to dermatology.",
    benefits: [
      "Unique cage-structure permanently traps heavy metals at cellular level",
      "Removes ammonia toxins that cause skin aging and dullness",
      "Balances skin pH by absorbing excess acid compounds",
      "Clinically studied for removal of radiation-related cellular toxins"
    ],
    indications: ["Heavy Metal Overload", "Radiation Exposure Recovery", "Chronic Toxin Buildup", "Cellular Detox", "Advanced Anti-Aging"]
  }
];

export const pricingTableData = [
  {
    category: "Full Body Massages & Scrubs",
    items: [
      { name: "FULL BODY MASSAGE", duration: "60 Mins", price: "2000/-", id: "full-body-massage" },
      { name: "ABYANGAM {Full body}", duration: "60 Mins", price: "2500/-", id: "abyangam" },
      { name: "OIL GLOW BODY MASSAGE", duration: "60 Mins", price: "2200/-", id: "oil-glow-body-massage" },
      { name: "OLIVE OIL MASSAGE", duration: "60 Mins", price: "2200/-", id: "olive-oil-massage" },
      { name: "CREAM MASSAGE {Orange Aloe Vera, etc.}", duration: "60 Mins", price: "1800/-", id: "cream-massage" },
      { name: "HERBAL BODY SCRUB", duration: "45 Mins", price: "1500/-", id: "herbal-body-scrub" },
      { name: "UDHWARTHANAM {Weight loss}", duration: "60 Mins", price: "2000/-", id: "udhwarthanam" },
      { name: "BACK MASSAGE {Spinal}", duration: "30 Mins", price: "1200/-", id: "back-massage" },
      { name: "HEAD NECK & SHOULDER", duration: "30 Mins", price: "1000/-", id: "head-neck-shoulder" },
      { name: "LEG & FOOT MASSAGE", duration: "30 Mins", price: "800/-", id: "leg-foot-massage" },
      { name: "COUPLE MASSAGE", duration: "60 Mins", price: "4500/-", id: "couple-massage" }
    ]
  },
  {
    category: "Moroccan & Natural Clay Therapies",
    items: [
      { name: "1) MOROCCAN BLUE CLAY", duration: "45 Mins", price: "1800/-", id: "moroccan-blue-clay" },
      { name: "2) MOROCCAN RED CLAY", duration: "45 Mins", price: "1800/-", id: "moroccan-red-clay" },
      { name: "3) GHASSOUL BROWN CLAY", duration: "45 Mins", price: "1900/-", id: "ghassoul-brown-clay" },
      { name: "4) GHASSOUL RED CLAY", duration: "45 Mins", price: "1900/-", id: "ghassoul-red-clay" },
      { name: "5) KAOLIN CLAY", duration: "45 Mins", price: "1600/-", id: "kaolin-clay" }
    ]
  },
  {
    category: "Kizhi (Potli) Therapies",
    items: [
      { name: "ELA KIZHI {Pathra pinda sweda}", duration: "60 Mins", price: "1800/-", id: "ela-kizhi" },
      { name: "PODI KIZHI {Choornapinda sweda}", duration: "60 Mins", price: "1600/-", id: "podi-kizhi" },
      { name: "NAVARA KIZHI {Shashtikasali pinda sweda}", duration: "60 Mins", price: "2500/-", id: "navara-kizhi" },
      { name: "DHANYAMLA KIZHI {Dhanyamla sweda}", duration: "30 Mins", price: "1000/-", id: "dhanyamla-kizhi" },
      { name: "NARANGA KIZHI {Jambeera pinda sweda}", duration: "30 Mins", price: "1000/-", id: "naranga-kizhi" },
      { name: "MANAL KIZHI {Valooka sweda}", duration: "30 Mins", price: "1000/-", id: "manal-kizhi" }
    ]
  },
  {
    category: "Dhara's & Oil Bath",
    items: [
      { name: "SHIRODHARA", duration: "45 Mins", price: "1800/-", id: "shirodhara" },
      { name: "KAZHAYADHARA", duration: "45 Mins", price: "1800/-", id: "kazhayadhara" },
      { name: "THAKRADHARA", duration: "45 Mins", price: "1800/-", id: "thakradhara" },
      { name: "THAILADHARA", duration: "45 Mins", price: "1800/-", id: "thailadhara" },
      { name: "KSHEERADHARA", duration: "45 Mins", price: "1800/-", id: "ksheeradhara" },
      { name: "DHANYAMLADHARA", duration: "45 Mins", price: "1500/-", id: "dhanyamladhara" },
      { name: "SHIROVASTI", duration: "45 Mins", price: "1600/-", id: "shirovasti" }
    ]
  },
  {
    category: "Vasti Therapy's",
    items: [
      { name: "KADIVASTI {Back pain}", duration: "30 Mins", price: "1500/-", id: "kadi-vasthi" },
      { name: "JANUVASTI {Knee pain}", duration: "30 Mins", price: "1500/-", id: "janu-vasthi" },
      { name: "UROVASTI {Chest pain}", duration: "30 Mins", price: "1000/-", id: "uro-vasti" },
      { name: "PRISHTAVASTI {Spinal & Disk}", duration: "30 Mins", price: "1800/-", id: "prishtavasti" },
      { name: "GREEVAVASTI {Neck pain}", duration: "30 Mins", price: "1000/-", id: "greevavasti" },
      { name: "KAZHAYA VASTI {Enema}", duration: "30 Mins", price: "1500/-", id: "kazhaya-vasti" },
      { name: "THAILA VASTI {Enema}", duration: "30 Mins", price: "800/-", id: "thaila-vasti" }
    ]
  },
  {
    category: "Ayur Care & Specialized Treatments",
    items: [
      { name: "NASYAM", duration: "40 Mins", price: "1200/-", id: "nasyam" },
      { name: "NETHRATHARPANAM", duration: "40 Mins", price: "1600/-", id: "nethratharpanam" },
      { name: "THALAPOTHICHIL", duration: "40 Mins", price: "1400/-", id: "thalapothichil" },
      { name: "LEPANAM", duration: "20 Mins", price: "600/-", id: "lepanam" },
      { name: "PICHU", duration: "20 Mins", price: "600/-", id: "pichu" },
      { name: "HERBAL STEEM", duration: "15 Mins", price: "500/-", id: "herbal-steem" },
      { name: "NAVARA FACE PACK", duration: "45 Mins", price: "1500/-", id: "navara-face-pack" },
      { name: "KUMKUMADI FACIAL", duration: "60 Mins", price: "2200/-", id: "kumkumadi-facial" }
    ]
  }
];

export const packages = [
  {
    id: "pain-relief",
    title: "7-Day Spine & Joint Pain Relief Program",
    duration: "7 Days (90 Mins / Day)",
    price: "₹11,500",
    originalPrice: "₹14,200",
    badge: "Most Popular in Kompally",
    description: "Comprehensive therapeutic protocol for Sciatica, Spondylosis, Slip Disc, and severe Knee Pain.",
    inclusions: [
      "Daily Abhyangam + Ela Kizhi / Podi Kizhi",
      "Kadi Vasthi / Janu Vasthi localized therapy",
      "Herbal Steam Bath & Nadi Consultation",
      "Customized Lifestyle & Ergonomic plan"
    ]
  },
  {
    id: "stress-detox",
    title: "3-Day Mind Relaxation & Shirodhara Retreat",
    duration: "3 Days (75 Mins / Day)",
    price: "₹5,200",
    originalPrice: "₹6,400",
    badge: "Stress & Sleep",
    description: "Designed for corporate professionals, tech workers, and individuals experiencing burnout or insomnia.",
    inclusions: [
      "Authentic Shirodhara with Medicated Oil",
      "Head, Neck, Shoulder & Foot Marma Massage",
      "Herbal Face Pack & Herbal Steam",
      "Stress relief herbal tea infusion"
    ]
  },
  {
    id: "panchakarma-cleanse",
    title: "14-Day Classical Panchakarma Full Rejuvenation",
    duration: "14 Days",
    price: "₹24,999",
    originalPrice: "₹31,000",
    badge: "Complete Body Reset",
    description: "The ultimate authentic Kerala detoxification covering Purva Karma, Pradhana Karma, and Paschat Karma.",
    inclusions: [
      "Snehanam (Internal & External Oleation)",
      "Swedanam (Full body Herbal Steam)",
      "Targeted Virechana or Basti administration",
      "Navara Kizhi & Full Body Rejuvenation",
      "Vaidya daily monitoring & diet plan"
    ]
  }
];

export const testimonials = [
  {
    id: "testi-1",
    name: "Prashanth Varma",
    location: "Kompally, Hyderabad",
    rating: 5,
    therapy: "Kadi Vasthi & Ela Kizhi",
    review: "Ayush Ayurveda Panchakaranam has truly transformed my life. I was suffering from severe L4-L5 disc compression and excruciating sciatica pain for 6 months. After their 7-day Kadi Vasthi and Kizhi treatment, my pain is 95% gone! The therapists are authentic Kerala professionals and the center at Raichandani 5 Star Complex is exceptionally clean and peaceful.",
    date: "August 2025",
    verified: true
  },
  {
    id: "testi-2",
    name: "Dr. Radhika Rao",
    location: "Pet Basheerabad, Hyderabad",
    rating: 5,
    therapy: "Shirodhara & Nasyam",
    review: "As a doctor myself, I am very discerning about medical hygiene and authenticity. Ayush Ayurveda Panchakaranam maintains genuine Kerala standards. The Shirodhara therapy cured my chronic sleep disorder and migraines within 3 sessions. Highly recommended for anyone in Kompally and Secunderabad looking for authentic Ayurveda!",
    date: "September 2025",
    verified: true
  },
  {
    id: "testi-3",
    name: "Suresh Reddy",
    location: "Medchal Highway, Hyderabad",
    rating: 5,
    therapy: "Janu Vasthi & Abhyangam",
    review: "My mother had severe knee osteoarthritis and doctors recommended knee replacement. We tried Janu Vasthi and Navara Kizhi here for 10 days. The knee swelling has disappeared and she can now walk comfortably without support. God bless the team!",
    date: "July 2025",
    verified: true
  },
  {
    id: "testi-4",
    name: "Ananya Sharma",
    location: "Suchitra, Hyderabad",
    rating: 5,
    therapy: "Udhwarthanam & Herbal Scrub",
    review: "The herbal powder massage (Udhwarthanam) along with the steam bath gave phenomenal results for my PCOS weight loss journey and toned my skin amazingly. Truly blissful experience right opposite Pista House.",
    date: "August 2025",
    verified: true
  }
];

export const blogPosts = [
  {
    id: "udhwarthanam-powder-massage",
    slug: "udhwarthanam-ayurvedic-powder-massage-for-detox-wellness",
    title: "Udhwarthanam: Ayurvedic Powder Massage for Detox, Cellulite & Weight Loss",
    date: "September 8, 2025",
    readTime: "5 min read",
    author: "Ayush Ayurveda Vaidya Team",
    image: "/images/pada_abhyanga.jpg",
    category: "Detox & Slimming",
    summary: "Explore how the ancient upward herbal powder friction massage melts stubborn subcutaneous fat, reduces water retention, and activates lymphatic drainage.",
    content: `Ayurveda, the timeless Indian science of holistic longevity, offers an extraordinary range of therapies designed to restore balance to body, mind, and spirit. Among these, **Udhwarthanam** stands out as the premier therapeutic weight-loss and lymphatic cleansing modality.

### What is Udhwarthanam?
Unlike conventional soothing oil massages where strokes move with the grain of bodily hair, Udhwarthanam is performed in an **upward direction (Pratiloma)** with specialized coarse herbal powders (Choornams) containing Triphala, Mustard, Musta, and Horsegram.

### Key Health Benefits:
1. **Adipose Tissue Breakdown:** The intense frictional heat generated during the 60-minute synchronized massage mobilizes dormant subcutaneous fat deposits.
2. **Lymphatic Flush:** Stimulates sluggish lymph vessels to evacuate accumulated metabolic waste (Ama).
3. **Skin Toning & Exfoliation:** Leaves the skin remarkably smooth, removing dead epidermal layers and reducing the appearance of cellulite.
4. **Blood Sugar & Metabolic Activation:** Enhances cellular insulin sensitivity and revives stagnant basal metabolism.

At **Ayush Ayurveda Panchakaranam in Kompally**, our certified Kerala therapists tailor the herbal powder blend according to your individual body constitution (Prakriti).`
  },
  {
    id: "siropichu-head-therapy",
    slug: "siropichu-ayurvedic-head-therapy-for-holistic-wellness",
    title: "Siropichu: Ayurvedic Head Therapy for Deep Nervous Calm & Headache Relief",
    date: "September 4, 2025",
    readTime: "4 min read",
    author: "Ayush Ayurveda Vaidya Team",
    image: "/images/nasyam.png",
    category: "Neurological Care",
    summary: "Learn how the gentle medicated oil crown compress heals stress, migraine, chronic insomnia, and nervous system agitation.",
    content: `In the fast-paced modern lifestyle of screen overload and chronic deadlines, the head and nervous system bear the brunt of tension. **Siropichu** is one of Ayurveda's most gentle yet profound cranial therapies for deep calming.

### The Science of Siropichu:
In this procedure, a sterile cotton pad soaked in lukewarm medicated oils (such as Brahmi Thailam, Ksheerabala 101, or Chandanadi Thailam) is placed centrally on the crown (Adhipati Marma point) and kept continuously moist with warm herbal oil.

### Who Benefits Most?
- Individuals suffering from stress headaches and migraines.
- People experiencing restless insomnia or disturbed sleep patterns.
- Those with scalp burning, severe hair thinning, or memory fatigue.
- Patients with early facial nerve weakness or Parkinsonian tremors.

Experience this soothing therapy at our center located at Raichandani 5 Star Complex, Kompally, Hyderabad.`
  },
  {
    id: "shirodhara-mind-stream",
    slug: "shirodhara-ayurvedic-stream-therapy-for-mind-and-body",
    title: "Shirodhara: The Ancient Mind Stream Therapy That Calms Brainwaves",
    date: "September 4, 2025",
    readTime: "6 min read",
    author: "Ayush Ayurveda Vaidya Team",
    image: "/images/nasyam.png",
    category: "Stress & Mind",
    summary: "Discover why Shirodhara is celebrated worldwide for regulating the nervous system, reducing high blood pressure, and healing anxiety.",
    content: `Derived from the Sanskrit words *Shiro* (head) and *Dhara* (flow), **Shirodhara** is celebrated as the ultimate therapy for mental tranquility and neuropsychiatric harmony.

### The Mechanism of Action:
When a warm, continuous stream of herbal oil flows rhythmically across the forehead over the third-eye chakra (Ajna Marma), it stimulates the pineal gland, hypothalamus, and pituitary axis. This shifts brainwave activity from rapid Beta waves to tranquil Alpha and Theta states, releasing serotonin and dopamine.

### Conditions Treated:
- Chronic anxiety, panic attacks, and clinical depression support.
- Hypertension and cardiovascular stress.
- Severe long-term insomnia and jetlag.
- Post-traumatic stress and mental burnout.`
  }
];

export const clayTherapies = [
  {
    id: "moroccan-blue-clay",
    slug: "moroccan-blue-clay-therapy",
    number: "1",
    name: "Moroccan Blue Clay",
    fullName: "Moroccan Blue Clay (Nila Mineral Dermal Detox)",
    origin: "Morocco (Sahara & Anti-Atlas Region)",
    color: "#2563eb",
    accentColor: "blue",
    badge: "Detox & Brightening",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/clay_moroccan_blue.jpg",
    skinType: "All Skin Types, Dull / Ashen Skin, Sun Damage, Hyperpigmentation",
    doshaEffect: "Pacifies Pitta & Kapha Doshas (Cooling & Oxygenating)",
    composition: "Organic Nila Mineral, Silica, Calcium, Iron Oxide, Rosewater & Pure Argan Essence",
    tagline: "Cellular Detoxification, Brightening & Pigmentation Lightening",
    shortDesc: "Rare Saharan royal blue mineral clay renowned for drawing out deep dermal pollutants, fading dark spots, and restoring natural radiance.",
    description: "Moroccan Blue Clay (Nila powder) is an extraordinary mineral mud sourced from traditional Moroccan earth beds. Saturated with high purity Nila minerals, it acts as an ionic vacuum that unclogs deeply embedded environmental debris, balances melanin production, and leaves the skin with a luminous, refined texture.",
    benefits: [
      "Evens skin tone and visibly fades stubborn hyperpigmentation and sun spots",
      "Extracts micro-pollutants and heavy metals from deep pores",
      "Improves cutaneous oxygenation and restores youthful radiance",
      "Soothes inflamed or sun-stressed skin with natural cooling minerals",
      "Leaves skin extraordinarily smooth, velvety, and clarified"
    ],
    indications: ["Hyperpigmentation & Dark Spots", "Dull & Tired Complexion", "Sun Tan & Blemishes", "Clogged Pores", "Pitta Skin Irritation"],
    howItWorks: "Bioactive Nila minerals bind electrostatically to oxidized sebum and atmospheric micro-particles, gently removing them during warm rinsing while depositing rejuvenating trace minerals."
  },
  {
    id: "moroccan-red-clay",
    slug: "moroccan-red-clay-therapy",
    number: "2",
    name: "Moroccan Red Clay",
    fullName: "Moroccan Red Clay (Terracotta Warming Rejuvenation)",
    origin: "Moroccan Atlas Mountains",
    color: "#b91c1c",
    accentColor: "red",
    badge: "Circulation & Firming",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/clay_moroccan_red.jpg",
    skinType: "Mature, Normal to Oily, Stressed, Aching & Flaccid Skin",
    doshaEffect: "Pacifies Vata & Kapha Doshas (Warming & Invigorating)",
    composition: "Bio-Available Iron Oxide, Magnesium, Dolomite, Silica, Medicated Herbal Decoction",
    tagline: "Micro-Circulation Booster, Deep Cleansing & Muscle Thermal Relief",
    shortDesc: "Bio-available iron-rich terracotta clay delivering deep microvascular circulation, thermal muscle tension relief, and intensive pore cleansing.",
    description: "Formed millions of years ago in volcanic Atlas Mountain strata, Moroccan Red Clay is naturally saturated with rich iron oxides and magnesium. When applied warm, it stimulates cellular vasodilation, accelerates lymph drainage, firms slack skin, and relieves stiff muscles.",
    benefits: [
      "Dramatically stimulates subcutaneous micro-circulation and skin metabolism",
      "Purifies congested pores and re-balances oily skin without over-drying",
      "Provides gentle soothing warmth to stiff neck, shoulder, and back muscles",
      "Enhances natural skin firmness, elasticity, and youthful contouring",
      "Promotes lymphatic drainage and eliminates cellular waste"
    ],
    indications: ["Sluggish Circulation", "Mature & Sagging Skin", "Cellulite & Fluid Retention", "Blackheads & Congested Pores", "Vata Coldness"],
    howItWorks: "High iron content creates a gentle thermal warming reaction that dilates capillaries, supplying freshly oxygenated blood to tired facial and body tissues."
  },
  {
    id: "ghassoul-brown-clay",
    slug: "ghassoul-brown-clay-therapy",
    number: "3",
    name: "Ghassoul Brown Clay",
    fullName: "Ghassoul Brown Clay (Atlas Volcanic Mud Therapy)",
    origin: "Moulouya Valley, Atlas Mountains (Morocco)",
    color: "#78350f",
    accentColor: "amber",
    badge: "Pore Cleansing & Sebum Control",
    duration: "45 Mins",
    price: 1900,
    priceFormatted: "₹1,900",
    image: "/images/clay_ghassoul_brown.jpg",
    skinType: "Oily, Acne-Prone, Sensitive, Scalp & Full Body Detox",
    doshaEffect: "Balances Tridosha (Especially High Kapha-Pitta)",
    composition: "Hectorite Smectite Volcanic Clay, 58% Silica, 25% Magnesium, Triphala Decoction",
    tagline: "The Ultimate Natural Detoxifier, Sebum Regulator & Dermal Restorer",
    shortDesc: "World-famous saponiferous volcanic clay with unmatched cation-exchange capacity to extract blackheads, sebum, and restore moisture barrier.",
    description: "Ghassoul (Rhassoul) is an ancient volcanic mud mined deep beneath Morocco's Atlas mountains. Holding a high negative ionic charge, it acts as a magnet pulling positively charged toxins and hardened sebum plugs from deep pores while re-mineralizing the skin with essential magnesium and silica.",
    benefits: [
      "Reduces excess oiliness and eliminates stubborn blackheads and comedones",
      "Improves skin clarity, elasticity, and firmness by over 43%",
      "Smoothes flaky skin patches and relieves eczema and inflammatory irritation",
      "Acts as a therapeutic mud pack for scalp detox, dandruff, and folliculitis",
      "Hydrates dermal layers while purifying deep pore structures"
    ],
    indications: ["Acne & Breakouts", "Enlarged Clogged Pores", "Excess Sebum", "Scalp Dandruff & Flaking", "Toxic Skin Overload"],
    howItWorks: "Its extraordinary cation-exchange capacity draws out heavy metals and impurities while depositing bio-assimilable magnesium and silica into the epidermis."
  },
  {
    id: "ghassoul-red-clay",
    slug: "ghassoul-red-clay-therapy",
    number: "4",
    name: "Ghassoul Red Clay",
    fullName: "Ghassoul Red Clay (Mineral Clarifying & Elasticity)",
    origin: "Atlas Mountains Subterranean Beds",
    color: "#991b1b",
    accentColor: "rose",
    badge: "Elasticity & Renewal",
    duration: "45 Mins",
    price: 1900,
    priceFormatted: "₹1,900",
    image: "/images/clay_ghassoul_red.jpg",
    skinType: "Combination, Sensitive, Blemish-Prone, Dull Complexion",
    doshaEffect: "Pacifies Pitta & Vata Imbalances",
    composition: "Red Volcanic Smectite Clay, Silicon Dioxide, Iron, Magnesium, Neroli & Sandalwood Essence",
    tagline: "Silica-Rich Volcanic Red Mud for Dermal Elasticity & Cellular Renewal",
    shortDesc: "Volcanic mineral red clay that balances delicate combination skin, smooths fine texture, and boosts structural collagen matrix.",
    description: "Ghassoul Red Clay combines the deep ionic absorbing properties of Moroccan volcanic mud with the revitalizing mineral profile of red iron-rich silicates. Formulated for delicate combination skin, it delivers pore refinement without drying or tightening.",
    benefits: [
      "Restores optimal skin pH and strengthens delicate epidermal barrier",
      "Refines uneven texture and smooths fine dehydration lines",
      "Calms redness, rosacea tendency, and post-acne pigmentation",
      "Provides rich mineral replenishment to depleted skin cells",
      "Imparts an instant dewy, velvety softness and youthful firmness"
    ],
    indications: ["Sensitive Combination Skin", "Post-Inflammatory Redness", "Uneven Skin Texture", "Environmental Damage", "Fine Lines"],
    howItWorks: "Micro-fine volcanic silica particles gently polish the skin surface while delivering micronutrients that stimulate collagen and elastin synthesis."
  },
  {
    id: "kaolin-clay",
    slug: "kaolin-clay-therapy",
    number: "5",
    name: "Kaolin Clay",
    fullName: "Kaolin Pure White Clay (Porcelain Soothing Mud)",
    origin: "Natural Hydrothermal Kaolinite Deposits",
    color: "#475569",
    accentColor: "slate",
    badge: "Ultra-Gentle & Soothing",
    duration: "45 Mins",
    price: 1600,
    priceFormatted: "₹1,600",
    image: "/images/clay_kaolin.jpg",
    skinType: "Ultra-Sensitive, Dry, Reactive, Rosacea-Prone & Delicate Skin",
    doshaEffect: "Profound Pitta Pacification (Cooling, Softening & Anti-Inflammatory)",
    composition: "100% Pure Kaolinite Mineral, Calcium, Zinc Oxide, Aloe Vera & Chamomile Distillate",
    tagline: "Gentle Mineral Soothing, Sensitive Skin Healing & Cooling Balance",
    shortDesc: "The gentlest healing clay in dermatological science, designed to soothe redness, cool burning sensations, and deliver silky soft comfort.",
    description: "Pure White Kaolin Clay possesses the mildest pH of all therapeutic earths, making it ideal for hypersensitive, allergic, and dry skin. It absorbs surface impurities gently while nourishing the skin with cooling aloe vera and botanical chamomile.",
    benefits: [
      "Safely cleanses and purifies the most sensitive and delicate skin types",
      "Soothes sunburn, rosacea redness, itching, and active skin heat",
      "Maintains essential moisture and repairs fragile barrier lipids",
      "Gently smooths rough skin, giving a velvety porcelain finish",
      "Non-drying, hypoallergenic, and soothing for all age groups"
    ],
    indications: ["Ultra-Sensitive / Reactive Skin", "Rosacea & Redness", "Eczema / Dry Dermatitis", "Post-Sunburn Recovery", "Pitta Burning"],
    howItWorks: "Neutral pH micro-crystals provide silky physical cushioning while zinc and calcium ions reduce cellular histamine release and soothe inflammation."
  },
  {
    id: "bentonite-clay",
    slug: "bentonite-clay-therapy",
    number: "6",
    name: "Bentonite Clay",
    fullName: "Bentonite Clay (Volcanic Ash Detox Wrap)",
    origin: "Wyoming, USA & Global Volcanic Deposits",
    color: "#6b7280",
    accentColor: "gray",
    badge: "Full-Body Detox",
    duration: "45 Mins",
    price: 1700,
    priceFormatted: "₹1,700",
    image: "/images/clay_bentonite.jpg",
    skinType: "Oily, Acne-Prone, Congested, Infection-Prone & Full-Body Wrap",
    doshaEffect: "Deeply Pacifies All Three Doshas (Powerful Tridosha Detox)",
    composition: "Volcanic Ash Smectite, Calcium Montmorillonite, Neem & Turmeric Infusion",
    tagline: "Volcanic Ash Clay for Powerful Full-Body Detoxification",
    shortDesc: "High-absorbency volcanic ash clay that swells with water to create an ionic field, drawing toxins, parasites, and heavy metals from deep tissues.",
    description: "Bentonite Clay is formed from ancient volcanic ash and carries one of the highest negative ionic charges of all natural clays. When hydrated, it expands and generates a powerful electromagnetic field that pulls positively charged heavy metals, pesticides, and bacteria from deep tissues. Blended with neem and turmeric for enhanced antimicrobial action.",
    benefits: [
      "Removes heavy metals, toxins, and pesticide residues from skin tissues",
      "Powerful antimicrobial action against skin bacteria and fungal infections",
      "Reduces body inflammation, joint swelling, and muscle soreness",
      "Alkalizes skin pH and strengthens immune skin barrier function",
      "Highly effective for full-body wrap detoxification sessions"
    ],
    indications: ["Heavy Metal Toxicity", "Skin Infections & Fungus", "Severe Acne & Cysts", "Joint & Muscle Pain", "Full Body Detox"],
    howItWorks: "The high negative ionic charge of hydrated bentonite creates an electromagnetic attraction that binds positively charged toxins and safely removes them during rinsing."
  },
  {
    id: "french-pink-clay",
    slug: "french-pink-clay-therapy",
    number: "7",
    name: "French Pink Clay",
    fullName: "French Pink Clay (Rose Petal Luminosity Glow)",
    origin: "France & Mediterranean Basin",
    color: "#ec4899",
    accentColor: "pink",
    badge: "Hydration & Glow",
    duration: "45 Mins",
    price: 1900,
    priceFormatted: "₹1,900",
    image: "/images/clay_french_pink.jpg",
    skinType: "Normal to Dry, Dull, Dehydrated & Sensitive Skin",
    doshaEffect: "Balances Vata & Pitta (Hydrating & Cooling)",
    composition: "White Kaolin & Red Illite Hybrid, Rose Petal Extract, Vitamin E, Jojoba Microspheres",
    tagline: "Gentle Blush Mineral Clay for Luminous Dewy Skin",
    shortDesc: "Rare blend of white kaolin and red illite producing a soft pink clay with unmatched skin-brightening, hydrating, and pore-refining properties.",
    description: "French Pink Clay is a gentle hybrid mineral clay blending white kaolin and red illite earth, prized across European wellness spas for exceptional softness and versatility. Ideal for normal to dry skin, it cleanses without stripping lipids, gently brightens dull complexion, and infuses deep hydration with a luminous rose glow finish.",
    benefits: [
      "Gently brightens and evens complexion with radiant rose luminosity",
      "Provides deep hydration while softly purifying surface impurities",
      "Refines pore appearance and improves overall skin smoothness",
      "Ideal for daily use — thoroughly nurtures without any over-drying",
      "Leaves skin with a healthy dewy glow and satin-soft finish"
    ],
    indications: ["Dull Dehydrated Skin", "Normal to Dry Skin Types", "Pore Refinement", "Age Spot Lightening", "Skin Luminosity Enhancement"],
    howItWorks: "The hybrid kaolin-illite matrix gently polishes while natural rose extracts deliver hydrating polyphenols deep into the dermal layers for sustained luminosity."
  },
  {
    id: "french-green-clay",
    slug: "french-green-clay-therapy",
    number: "8",
    name: "French Green Clay",
    fullName: "French Green Clay (Illite Forest Deep Purge)",
    origin: "Provence, France (Marine Sediment Deposits)",
    color: "#16a34a",
    accentColor: "green",
    badge: "Deep Cleanse & Tone",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/clay_french_green.jpg",
    skinType: "Oily, Acne-Prone, Combination & Congested Skin",
    doshaEffect: "Strongly Pacifies Kapha & Pitta Doshas",
    composition: "Illite Green Clay, Iron Oxide, Plant Matter Minerals, Spearmint & Green Tea Extract",
    tagline: "Deep-Acting Illite Earth for Oily Skin & Pore Minimisation",
    shortDesc: "Premium French Illite green clay with extraordinary oil absorption capacity and toning properties for oily, acne-prone, and congested skin.",
    description: "French Green Clay (Illite) gets its distinctive green color from decomposed plant matter and iron oxides mined from ancient ocean beds in France. With extraordinary absorbing power — pulling up to 200 times its own weight in sebum and debris — combined with spearmint and green tea, it creates a deep-cleansing, pore-minimising, toning ritual.",
    benefits: [
      "Absorbs excess sebum and deeply unclogs severely congested pores",
      "Tones and firms skin by powerfully stimulating micro-circulation",
      "Dramatically reduces blackhead formation and active acne breakouts",
      "Removes dead skin cells for visibly smoother, clearer skin surface",
      "Natural astringent action minimizes enlarged pore appearance"
    ],
    indications: ["Oily & Acne-Prone Skin", "Enlarged & Congested Pores", "Blackheads & Whiteheads", "Congested Dull Complexion", "Kapha Imbalance"],
    howItWorks: "Illite clay's extraordinary 200:1 absorption ratio creates a powerful suction effect on sebum and debris while green tea catechins provide antioxidant pore-tightening."
  },
  {
    id: "brazilian-purple-clay",
    slug: "brazilian-purple-clay-therapy",
    number: "9",
    name: "Brazilian Purple Clay",
    fullName: "Brazilian Purple Clay (Amazon Violet Anti-Aging Ritual)",
    origin: "Amazon Basin, Brazil (Rare Volcanic Deposits)",
    color: "#7c3aed",
    accentColor: "violet",
    badge: "Anti-Aging & Collagen",
    duration: "45 Mins",
    price: 2200,
    priceFormatted: "₹2,200",
    image: "/images/clay_brazilian_purple.jpg",
    skinType: "Mature, Sun-Damaged, Sagging & Anti-Aging Skin",
    doshaEffect: "Pacifies Vata Aging (Deep Ojas Restoration)",
    composition: "Rare Purple Volcanic Clay, Manganese, Silica, Iron Oxide, Acai Berry Antioxidants",
    tagline: "Rare Amazon Earth for Anti-Aging & Deep Collagen Renewal",
    shortDesc: "Exotic rare purple volcanic clay from Brazilian Amazon with the highest antioxidant mineral profile — a luxury anti-aging powerhouse.",
    description: "Brazilian Purple Clay is one of the rarest cosmetic clays on Earth, sourced from deep in the Amazon basin where centuries of volcanic activity created uniquely pigmented, mineral-dense deposits. Rich in manganese and silica with powerful antioxidant properties, it combats free radical skin damage and promotes collagen matrix renewal for youthful skin.",
    benefits: [
      "Powerful antioxidant effect combats free radical aging at cellular level",
      "Stimulates collagen and elastin synthesis for youthful firmness",
      "Deep detox action removes environmental pollutants and heavy metals",
      "Luxurious experience for mature and sun-stressed skin types",
      "Rare manganese-rich formula supports connective tissue repair"
    ],
    indications: ["Anti-Aging & Fine Lines", "Sagging & Loss of Firmness", "Environmental Skin Damage", "Mature Skin Renewal", "Vata Aging Imbalance"],
    howItWorks: "Rare Amazonian manganese compounds activate collagen synthase enzymes while the unique purple clay matrix delivers antioxidants directly into the cellular environment."
  },
  {
    id: "brazilian-yellow-clay",
    slug: "brazilian-yellow-clay-therapy",
    number: "10",
    name: "Brazilian Yellow Clay",
    fullName: "Brazilian Yellow Clay (Solar Energy Glow Wrap)",
    origin: "Brazilian Cerrado Region (Sun-Baked Mineral Beds)",
    color: "#d97706",
    accentColor: "amber",
    badge: "Radiance & Glow",
    duration: "45 Mins",
    price: 1900,
    priceFormatted: "₹1,900",
    image: "/images/clay_brazilian_yellow.jpg",
    skinType: "Dull, Sallow, Uneven Skin Tone & All Skin Types",
    doshaEffect: "Energizes & Balances Vata-Kapha (Warming & Illuminating)",
    composition: "Yellow Mineral Clay, Sulfur Compounds, Silica, Iron Chromophores, Lemongrass Extract",
    tagline: "Golden Tropical Clay for Energy Boost & Vibrant Skin Radiance",
    shortDesc: "Vibrant golden Brazilian clay rich in silica and sulfur compounds, energizing the skin and boosting natural radiance and golden glow.",
    description: "Brazilian Yellow Clay owes its warm golden hue to high concentrations of sulfur compounds, silica, and natural iron chromophores. Sourced from sun-baked Brazilian mineral deposits, this energizing clay stimulates skin renewal, evens out discoloration, softens rough patches, and imparts a warm healthy glow reminiscent of tropical golden sunlight.",
    benefits: [
      "Energizes dull skin and imparts vibrant warm golden radiance",
      "Smoothes uneven skin texture and softens rough dry patches",
      "Rich silica content supports skin firmness and cellular renewal",
      "Ideal for face and body brightening wrap treatments",
      "Natural sulfur compounds assist in gentle skin exfoliation"
    ],
    indications: ["Dull Sallow Complexion", "Uneven Skin Tone", "Rough Dry Patches", "Energy & Glow Boost", "Post-Summer Skin Repair"],
    howItWorks: "Natural sulfur compounds and silica synergistically accelerate keratinocyte renewal while iron chromophores impart a warm luminous golden cast to the complexion."
  },
  {
    id: "dead-sea-mud-clay",
    slug: "dead-sea-mud-clay-therapy",
    number: "11",
    name: "Dead Sea Mud",
    fullName: "Dead Sea Mud Clay (Mineral Immersion Therapy Wrap)",
    origin: "Dead Sea, Israel/Jordan (Lowest Point on Earth)",
    color: "#1c1917",
    accentColor: "stone",
    badge: "Arthritis & Pain Relief",
    duration: "60 Mins",
    price: 2500,
    priceFormatted: "₹2,500",
    image: "/images/clay_dead_sea_mud.jpg",
    skinType: "All Skin Types, Arthritic, Psoriasis, Chronic Pain & Inflammatory Conditions",
    doshaEffect: "Pacifies All Three Doshas — Especially Vata Joint Pain",
    composition: "21+ Dead Sea Minerals, Magnesium, Calcium, Bromide, Potassium, Lithium, Sulfur",
    tagline: "World-Renowned Black Mineral Mud for Joints, Arthritis & Deep Pain",
    shortDesc: "Authentic Dead Sea mud with 21 minerals — clinically proven to ease arthritis, psoriasis, fibromyalgia, and chronic joint and muscle pain.",
    description: "Dead Sea Mud is harvested from the deepest natural salt lake on Earth, containing 21 minerals not found in any other ocean — including magnesium, calcium, bromide, potassium, and lithium. Clinically studied for its anti-inflammatory, analgesic, and psoriasis-clearing effects. Applied as a full-body wrap, it deeply penetrates joints, muscles, and skin for profound therapeutic relief.",
    benefits: [
      "Clinically proven relief for rheumatoid arthritis, osteoarthritis, and joint pain",
      "Dramatically reduces psoriasis plaques and eczema flare-ups",
      "Deep magnesium infusion relaxes chronic muscle tension and spasms",
      "Anti-inflammatory properties reduce skin and joint redness and swelling",
      "Bromide and lithium compounds promote deep relaxation and stress relief"
    ],
    indications: ["Rheumatoid Arthritis", "Psoriasis & Eczema", "Chronic Joint & Muscle Pain", "Fibromyalgia Relief", "Inflammatory Skin Disorders"],
    howItWorks: "The world's highest mineral concentration (21 unique minerals) penetrates transdermally, inhibiting inflammatory prostaglandins and replenishing essential electrolytes in joint and muscle tissue."
  },
  {
    id: "calamine-clay",
    slug: "calamine-clay-therapy",
    number: "12",
    name: "Calamine Clay",
    fullName: "Calamine Clay (Cooling Zinc Mineral Ritual)",
    origin: "Naturally Occurring Zinc Carbonate Mineral Deposits",
    color: "#f9a8d4",
    accentColor: "rose",
    badge: "Cooling & Itch Relief",
    duration: "45 Mins",
    price: 1600,
    priceFormatted: "₹1,600",
    image: "/images/clay_calamine.jpg",
    skinType: "Irritated, Rash-Prone, Sunburned & Heat-Damaged Skin",
    doshaEffect: "Intensely Pacifies Pitta (Cooling Fire & Heat)",
    composition: "Zinc Oxide, Ferric Oxide, Calamine Mineral, Cucumber Extract, Sandalwood Distillate",
    tagline: "Zinc-Rich Soothing Clay for Rashes, Itching & Heat-Damaged Skin",
    shortDesc: "Traditional medicated zinc clay — the gold standard for instantly cooling sunburn, itchy rashes, insect bites, heat rash, and skin irritation.",
    description: "Calamine Clay is the original medicated mineral compound used for centuries to calm itching, soothe inflamed skin, and dry out weeping rashes. Rich in zinc oxide and ferric oxide, it creates a protective cooling film that instantly calms the itch-scratch cycle and promotes rapid skin barrier recovery. Blended with cooling cucumber and sandalwood.",
    benefits: [
      "Instantly cools and soothes itching from rashes, hives, and insect bites",
      "Reduces sunburn redness and heat-related skin inflammation rapidly",
      "Forms a protective zinc barrier that promotes faster skin healing",
      "Anti-bacterial properties prevent secondary skin infection development",
      "Safe for use on children and during pregnancy with physician advice"
    ],
    indications: ["Skin Rashes & Hives", "Insect Bites & Stings", "Sunburn & Heat Recovery", "Heat Prickly Rash", "Pitta Fire Cooling"],
    howItWorks: "Zinc oxide forms a physical cooling barrier that blocks nerve itch signals while ferric oxide draws out excess heat from inflamed skin tissue for immediate comfort."
  },
  {
    id: "siberian-blue-clay",
    slug: "siberian-blue-clay-therapy",
    number: "13",
    name: "Siberian Blue Clay",
    fullName: "Siberian Blue Clay (Arctic Baikal Mineral Regeneration)",
    origin: "Lake Baikal, Siberia, Russia (World's Deepest Lake)",
    color: "#1d4ed8",
    accentColor: "blue",
    badge: "Skin Regeneration",
    duration: "45 Mins",
    price: 2100,
    priceFormatted: "₹2,100",
    image: "/images/clay_siberian_blue.jpg",
    skinType: "Damaged, Aging, Scarred, Barrier-Impaired & Post-Procedure Skin",
    doshaEffect: "Balances Vata-Pitta (Regenerating & Anti-Inflammatory)",
    composition: "Glauconite Silicate, Rare Arctic Minerals, Iron-Potassium Complex, Arctic Lichen Extract",
    tagline: "Ultra-Rare Arctic Blue Earth for Intensive Skin Regeneration",
    shortDesc: "Exceptionally rare Siberian blue mineral clay from Lake Baikal with remarkable regenerating, antioxidant, and barrier-restoring properties.",
    description: "Siberian Blue Clay is harvested from Lake Baikal — the world's deepest and oldest freshwater lake in Russia. This rare clay has a distinctive deep blue-indigo color from high concentrations of glauconite and is prized for intense skin regeneration, anti-aging antioxidant effects, and its ability to restore deeply damaged skin barrier functions.",
    benefits: [
      "Intense skin regeneration restores deeply damaged skin tissue",
      "High glauconite content provides powerful antioxidant protection",
      "Supports collagen synthesis and noticeably reduces visible fine lines",
      "Detoxifies and re-mineralizes skin with rare Arctic trace minerals",
      "Exceptional barrier repair for post-procedure and compromised skin"
    ],
    indications: ["Deeply Damaged Skin", "Anti-Aging Intensive Care", "Skin Barrier Repair", "Pigmentation Disorders", "Vata-Pitta Imbalance"],
    howItWorks: "Glauconite's unique iron-potassium silicate matrix releases rare Arctic trace minerals that activate skin stem cell renewal pathways and restore epidermal barrier integrity."
  },
  {
    id: "chocolate-clay",
    slug: "chocolate-clay-therapy",
    number: "14",
    name: "Chocolate Cacao Clay",
    fullName: "Chocolate Cacao Clay (Antioxidant Indulgence Detox)",
    origin: "Cacao-Infused Natural Brown Clay Blend",
    color: "#92400e",
    accentColor: "amber",
    badge: "Antioxidant & Mood",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/clay_ghassoul_brown.jpg",
    skinType: "Dry, Dull, Stressed & All Skin Types",
    doshaEffect: "Deeply Nourishes Vata (Warming, Nourishing & Mood-Lifting)",
    composition: "Raw Cacao Powder, Natural Brown Clay, Polyphenol Extract, Magnesium, Vanilla Essence",
    tagline: "Antioxidant Cacao Clay Wrap for Skin Softening & Mood Elevation",
    shortDesc: "Luxurious blend of mineral-dense clay and raw cacao delivering deep nourishment, antioxidant protection, and mood-lifting aromatherapy.",
    description: "Chocolate Cacao Clay combines mineral-absorbing natural brown clay with the extraordinary antioxidant richness of raw cacao. Cacao is one of the highest natural sources of polyphenols and flavanols which combat free radical skin aging, while the intoxicating chocolate aroma creates a powerful mood-lifting aromatherapy experience.",
    benefits: [
      "High-antioxidant cacao polyphenols protect skin from free radical damage",
      "Deep nourishing moisture infusion softens and smoothes dry skin",
      "Mood-elevating chocolate aroma reduces stress hormones (cortisol)",
      "Stimulates micro-circulation for a warm healthy skin glow",
      "Magnesium-rich formula relaxes muscle tension during the wrap"
    ],
    indications: ["Dry & Rough Skin", "Anti-Aging Nourishment", "Stress & Anxiety Relief", "Dull Tired Complexion", "Vata Dryness"],
    howItWorks: "Theobromines and flavanols in raw cacao stimulate skin circulation while clay minerals bind surface toxins, creating a dual detox-and-nourish action."
  },
  {
    id: "activated-charcoal-clay",
    slug: "activated-charcoal-clay-therapy",
    number: "15",
    name: "Activated Charcoal Clay",
    fullName: "Activated Charcoal Clay (Urban Pollution Deep Purge)",
    origin: "Pharmaceutical-Grade Activated Carbon & Clay Blend",
    color: "#111827",
    accentColor: "gray",
    badge: "Urban Detox & Pores",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/clay_moroccan_blue.jpg",
    skinType: "Pollution-Exposed, Oily, Congested & Urban Skin",
    doshaEffect: "Powerfully Pacifies Kapha (Removing Toxin Accumulation)",
    composition: "Activated Carbon (1000+ m²/g), Natural Clay, Neem, Charcoal Mineral Complex",
    tagline: "Maximum-Strength Carbon Detox for City-Stressed Skin",
    shortDesc: "Ultra-fine activated carbon clay with 1,000× surface area — the ultimate detox for pollution-exposed, urban, oily and congested skin.",
    description: "Activated Charcoal Clay combines pharmaceutical-grade activated carbon with deep-cleansing mineral clay. Each gram of activated charcoal has 1,000+ square meters of surface area to bind and remove urban pollutants, PM2.5 particles, exhaust toxins, and cosmetic chemical build-up from within pores. A must for city dwellers.",
    benefits: [
      "Removes urban pollution, PM2.5, and chemical toxins from deep pores",
      "Absorbs excess sebum and eliminates stubborn blackheads effectively",
      "Reduces pore size visibly by up to 30% with regular use",
      "Brightens and clarifies dull pollution-grey skin complexion",
      "Antimicrobial carbon prevents acne bacteria proliferation"
    ],
    indications: ["Urban Pollution Exposure", "Severe Blackheads", "Congested Grey Skin", "Heavy Smoker Skin", "Deeply Clogged Pores"],
    howItWorks: "Activated carbon's extraordinary 1,000 m²/g surface area physically adsorbs pollutants, chemicals, and oxidized sebum through van der Waals molecular attraction forces."
  },
  {
    id: "multani-clay",
    slug: "multani-clay-therapy",
    number: "16",
    name: "Multani Mitti",
    fullName: "Multani Mitti (Fuller's Earth Classical Ayurvedic Ritual)",
    origin: "Multan Region, Pakistan & India (5000+ Year History)",
    color: "#a8a29e",
    accentColor: "stone",
    badge: "Ayurvedic Tradition",
    duration: "45 Mins",
    price: 1400,
    priceFormatted: "₹1,400",
    image: "/images/clay_ghassoul_brown.jpg",
    skinType: "Oily, Acne-Prone, Hyperpigmented & Combination Skin",
    doshaEffect: "Classical Pitta-Kapha Pacification (Cooling Oil Control)",
    composition: "Calcium Montmorillonite, Magnesium, Silica, Turmeric, Neem & Rose Water (Classical Formula)",
    tagline: "Classical Indian Fuller's Earth for Oil Control & Ayurvedic Skin Glow",
    shortDesc: "Time-honored Indian medicinal clay used for 5,000+ years in Ayurveda for cooling heat, controlling oil, brightening, and treating inflammation.",
    description: "Multani Mitti (Fuller's Earth) is one of Ayurveda's oldest beauty treatments, referenced in ancient Charaka Samhita. Rich in calcium montmorillonite minerals, it absorbs 5× its weight in sebum and toxins while imparting characteristic Ayurvedic skin brightening. Blended with turmeric, neem, and rose water in classical tradition.",
    benefits: [
      "Deep oil absorption controls severe oiliness and acne breakouts",
      "Classical Ayurvedic skin brightening and complexion enhancement",
      "Cooling anti-inflammatory properties reduce Pitta heat rashes",
      "Time-tested natural remedy for dandruff and scalp health",
      "5,000-year Ayurvedic heritage with clinically validated benefits"
    ],
    indications: ["Oily & Acne Skin", "Hyperpigmentation Lightening", "Heat Rashes & Prickly Heat", "Scalp Dandruff", "Pitta Fire Imbalance"],
    howItWorks: "Classical Charaka Samhita describes Multani Mitti's lekhana (scraping-cleansing) action removing excess Kapha and Pitta accumulations from the skin's dhatu layers."
  },
  {
    id: "rose-clay",
    slug: "rose-clay-therapy",
    number: "17",
    name: "Rose Clay",
    fullName: "Rose Clay (Bulgarian Petal Luxury Hydration Ritual)",
    origin: "Rose Valley, Bulgaria (Bulgarian Rose Damascena Infusion)",
    color: "#fb7185",
    accentColor: "rose",
    badge: "Romantic Luxury",
    duration: "45 Mins",
    price: 2000,
    priceFormatted: "₹2,000",
    image: "/images/clay_french_pink.jpg",
    skinType: "Dry, Dehydrated, Scarred & Stressed Skin",
    doshaEffect: "Harmonizes Vata-Pitta (Deeply Nourishing & Emotionally Calming)",
    composition: "Rose Clay Mineral, Bulgarian Rose Water (Rosa Damascena), Rose Hip Oil, Vitamin C",
    tagline: "Romantic Rose Mineral Clay for Hydration, Glow & Feminine Radiance",
    shortDesc: "Luxurious rose clay infused with pure Bulgarian Rose Water and rose hip Vitamin C oil for ultimate softness, brightness, and emotional wellness.",
    description: "Rose Clay is blended with 100% pure Bulgarian Rose Water (Rosa Damascena) — the world's finest therapeutic rose extract — and cold-pressed rose hip oil rich in Vitamin C. This luxury ritual deeply hydrates, firms, and brightens the skin while the exquisite natural rose fragrance calms the nervous system and uplifts emotional wellbeing.",
    benefits: [
      "Bulgarian Rose Water provides deep hydration and skin pH balance",
      "Rose hip Vitamin C brightens, fades scars, and evens skin tone",
      "Firm-lifting minerals tighten and revitalize tired, sagging skin",
      "Natural rose aroma calms anxiety and promotes emotional wellbeing",
      "Exceptional for post-inflammatory hyperpigmentation reduction"
    ],
    indications: ["Dehydrated & Dull Skin", "Hyperpigmentation & Scars", "Emotional Stress", "Sensitivity & Redness", "Romantic Skin Ritual"],
    howItWorks: "Bulgarian rose water flavonoids penetrate the dermal barrier delivering intense hydration while rose hip retinol precursors stimulate cellular turnover for luminous renewal."
  },
  {
    id: "nude-clay",
    slug: "nude-clay-therapy",
    number: "18",
    name: "Nude Clay",
    fullName: "Nude Clay (Pure Unscented Natural Mineral Therapy)",
    origin: "Multi-Origin Natural Clay Blend (Zero Additives)",
    color: "#d4c5a9",
    accentColor: "stone",
    badge: "Pure & Fragrance-Free",
    duration: "45 Mins",
    price: 1500,
    priceFormatted: "₹1,500",
    image: "/images/clay_kaolin.jpg",
    skinType: "Fragrance-Allergic, Chemical-Sensitive, Baby Skin & Ultra-Reactive",
    doshaEffect: "Tridosha Neutral (Safe for All Constitutions)",
    composition: "Pure Kaolin, Bentonite & Illite in Natural State — Zero Additives, Colorants, or Fragrances",
    tagline: "Pure Unscented Natural Earth for Sensitive & Minimal Skin Care",
    shortDesc: "100% pure, fragrance-free, dye-free natural mineral clay in its most authentic form — for chemical sensitivities and fragrance allergies.",
    description: "Nude Clay represents the purest, most minimal form of natural mineral clay — completely free of fragrance, artificial color, preservatives, or synthetic additives. A clean blend of natural kaolin, bentonite, and illite in their pure state, it provides essential clay mineral nourishment without any potential irritants. The gold standard for chemically sensitive skin.",
    benefits: [
      "100% fragrance-free and dye-free — safe for most chemical sensitivities",
      "Pure mineral cleansing without any risk of allergic reactions",
      "Gentle enough for post-procedure and post-treatment skin care",
      "Provides essential clay mineral nourishment in most authentic form",
      "Safe for use on baby skin and during pregnancy periods"
    ],
    indications: ["Fragrance Allergies", "Chemical Sensitivities", "Post-Procedure Recovery", "Baby & Children Skin", "Ultra-Sensitive Skin"],
    howItWorks: "By eliminating all additives, Nude Clay delivers pure ionic mineral exchange without any risk of allergic sensitization, making it accessible to virtually all skin types."
  },
  {
    id: "zeolite-clay",
    slug: "zeolite-clay-therapy",
    number: "19",
    name: "Zeolite Clay",
    fullName: "Zeolite Clay (Crystalline Nano-Cage Cellular Detox)",
    origin: "Natural Volcanic Zeolite Deposits (Global)",
    color: "#0f766e",
    accentColor: "teal",
    badge: "Advanced Cellular Detox",
    duration: "45 Mins",
    price: 2000,
    priceFormatted: "₹2,000",
    image: "/images/clay_bentonite.jpg",
    skinType: "Toxin-Overloaded, Heavy Metal Burdened & All Skin Types",
    doshaEffect: "Advanced Tridosha Detox (Removes Deep Ama/Toxin Accumulation)",
    composition: "Clinoptilolite Zeolite, Volcanic Silicate, Aluminum-Silicate Framework, Mineral Electrolytes",
    tagline: "Nano-Cage Mineral Crystal for Cutting-Edge Deep Cellular Detoxification",
    shortDesc: "Revolutionary zeolite mineral crystals with unique honeycomb cage structure that permanently traps heavy metals and toxins at cellular level.",
    description: "Zeolite is a naturally occurring volcanic mineral with a unique crystalline honeycomb structure. Unlike traditional clays that adsorb toxins on their surface, zeolite physically traps heavy metals, ammonia, and carcinogens inside its crystalline cages, permanently removing them from skin and underlying tissue — the most advanced natural detox mineral in dermatology.",
    benefits: [
      "Unique cage-structure permanently traps heavy metals at cellular level",
      "Removes ammonia toxins that cause premature skin aging and dullness",
      "Balances skin pH by absorbing excess acid compounds from tissues",
      "Clinically studied for removal of radiation-related cellular toxins",
      "Superior to traditional clay — permanent trapping vs surface adsorption"
    ],
    indications: ["Heavy Metal Overload", "Radiation Exposure Recovery", "Chronic Toxin Buildup", "Advanced Cellular Detox", "Anti-Aging Intensive"],
    howItWorks: "Zeolite's crystalline honeycomb structure physically encages heavy metal ions within sub-nanometer pores, preventing their reabsorption and permanently eliminating them."
  }
];


export const galleryPhotos = [
  {
    id: "g1",
    title: "Authentic Kadi Vasthi Lumbosacral Treatment",
    category: "Vasti",
    image: "/images/kadi_vasthi_authentic.jpg",
    description: "Medicated herbal oil pool over spine for chronic Sciatica and lumbar disc relief"
  },
  {
    id: "g2",
    title: "Synchronized 2-Therapist Abhyangam",
    category: "Massages",
    image: "/images/abhyanga_duo_authentic.png",
    description: "Classical Kerala rhythmic synchronized full body rejuvenation and muscle stretching"
  },
  {
    id: "g3",
    title: "Authentic Nethra Dhara Eye Wash",
    category: "Eye Care",
    image: "/images/nethra_dhara_leaf.png",
    description: "Medicated herbal stream through traditional leaf funnel to cool screen strain and redness"
  },
  {
    id: "g4",
    title: "Nethra Tharpanam Eye Rejuvenation",
    category: "Eye Care",
    image: "/images/nethra_tharpanam_face.png",
    description: "Herbal ghee pooling within dough dam for optic nerve nourishing and Computer Vision Syndrome"
  },
  {
    id: "g5",
    title: "Moroccan Blue Clay Therapy (Nila Detox)",
    category: "Clays",
    image: "/images/clay_moroccan_blue.jpg",
    description: "Royal Moroccan blue mineral mud for pigmentation removal and deep pore detox"
  },
  {
    id: "g6",
    title: "Moroccan Red Clay Therapy",
    category: "Clays",
    image: "/images/clay_moroccan_red.jpg",
    description: "Iron-rich terracotta mud for thermal muscle relief and micro-circulation"
  },
  {
    id: "g7",
    title: "Ghassoul Brown Clay Therapy",
    category: "Clays",
    image: "/images/clay_ghassoul_brown.jpg",
    description: "Organic Atlas volcanic mud for sebum balance and blackhead extraction"
  },
  {
    id: "g8",
    title: "Ghassoul Red Clay Therapy",
    category: "Clays",
    image: "/images/clay_ghassoul_red.jpg",
    description: "Silica volcanic red clay for skin elasticity and cellular renewal"
  },
  {
    id: "g9",
    title: "Kaolin Pure White Clay Therapy",
    category: "Clays",
    image: "/images/clay_kaolin.jpg",
    description: "Porcelain soothing white clay for ultra-sensitive skin and cooling relief"
  },
  {
    id: "g10",
    title: "Our 5 Specialized Pure Clays Menu",
    category: "Clays",
    image: "/images/clays_menu_list.png",
    description: "Moroccan Blue, Moroccan Red, Ghassoul Brown, Ghassoul Red & Kaolin Clay offerings"
  },
  {
    id: "g11",
    title: "Ela Kizhi Herbal Bolus Sudation",
    category: "Therapies",
    image: "/images/kizhi.jpg",
    description: "Warm herbal potli boluses for joint stiffness and back pain"
  },
  {
    id: "g12",
    title: "Pada Abhyanga & Foot Reflexology",
    category: "Massages",
    image: "/images/pada_abhyanga.jpg",
    description: "Herbal foot massage with bronze kansa bowl and medicated oils"
  },
  {
    id: "g13",
    title: "Nasyam Sinus & Cranial Therapy",
    category: "Panchakarma",
    image: "/images/nasyam.png",
    description: "Medicated herbal drops for sinus clearance and migraine relief"
  },
  {
    id: "g14",
    title: "Mukha Lepam Natural Herbal Facial",
    category: "Facials",
    image: "/images/mukha_lepam.png",
    description: "Rejuvenating Navara rice and saffron herbal face pack"
  },
  {
    id: "g15",
    title: "Ayush Ayurveda Center Emblem",
    category: "Center",
    image: "/images/logo.jpg",
    description: "Our certified Panchakarma and Pain Management clinic in Kompally"
  }
];

export const doshaQuizQuestions = [
  {
    question: "How would you describe your general body frame and physical build?",
    options: [
      { text: "Slender, light-boned, finds it hard to gain weight", dosha: "Vata" },
      { text: "Medium, athletic build, moderate muscle definition", dosha: "Pitta" },
      { text: "Solid, broad-shouldered, tends to gain weight easily", dosha: "Kapha" }
    ]
  },
  {
    question: "How does your skin typically feel across different seasons?",
    options: [
      { text: "Dry, rough, tends to crack, easily feels cold", dosha: "Vata" },
      { text: "Warm, sensitive, prone to redness, acne or freckles", dosha: "Pitta" },
      { text: "Smooth, cool, thick, well-hydrated, slightly oily", dosha: "Kapha" }
    ]
  },
  {
    question: "How is your usual digestion and appetite pattern?",
    options: [
      { text: "Irregular; sometimes very hungry, sometimes forget to eat, prone to gas/bloating", dosha: "Vata" },
      { text: "Strong and sharp; cannot tolerate skipping meals, prone to acidity", dosha: "Pitta" },
      { text: "Slow and steady; can skip meals easily, digestion feels heavy after eating", dosha: "Kapha" }
    ]
  },
  {
    question: "How do you respond mentally under stressful situations?",
    options: [
      { text: "Worry, anxiety, racing thoughts, restlessness", dosha: "Vata" },
      { text: "Frustration, irritability, short temper, impatience", dosha: "Pitta" },
      { text: "Withdrawal, resistance to change, procrastination, stubbornness", dosha: "Kapha" }
    ]
  },
  {
    question: "What is your sleep pattern like?",
    options: [
      { text: "Light, interrupted, difficulty falling asleep, dreams a lot", dosha: "Vata" },
      { text: "Sound and moderate; 6-7 hours is plenty, wake up alert", dosha: "Pitta" },
      { text: "Heavy, deep, love sleeping long hours, hard to wake up early", dosha: "Kapha" }
    ]
  }
];
