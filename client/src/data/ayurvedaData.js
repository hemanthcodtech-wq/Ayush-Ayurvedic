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
  { id: "relax", name: "Relax" },
  { id: "rejuvenate", name: "Rejuvenate" },
  { id: "treatments", name: "Treatments" }
];

export const therapies = [
  // ----------------------------------------
  // RELAX CATEGORY
  // ----------------------------------------
  {
    id: "abhyangam-relax",
    slug: "abhyangam-relax",
    name: "Abhyangam",
    category: "relax",
    categoryName: "Relax",
    duration: "45 Mins",
    price: 1500,
    priceFormatted: "₹1,500",
    image: "/images/ai_abhyangam.jpg",
    featured: true,
    tagline: "Total Physical Rejuvenation",
    shortDesc: "A deeply relaxing full-body warm herbal oil massage to melt away stress and fatigue.",
    description: "Abhyangam is the classical full-body massage using dosha-specific warm herbal oils. It profoundly relaxes the body, improves circulation, and balances the doshas, providing an immediate sense of well-being and stress relief.",
    benefits: ["Relieves physical stress", "Improves sleep quality", "Nourishes the skin and joints"],
    indications: ["Stress", "Fatigue", "Vata imbalance", "Insomnia"]
  },
  {
    id: "shirodara-relax",
    slug: "shirodara-relax",
    name: "Shirodara",
    category: "relax",
    categoryName: "Relax",
    duration: "55 Mins",
    price: 2500,
    priceFormatted: "₹2,500",
    image: "/images/ai_shirodhara.jpg",
    featured: true,
    tagline: "Profound Mental Calmness",
    shortDesc: "Continuous pouring of warm medicated oil over the forehead to deeply relax the nervous system.",
    description: "Shirodara is one of the most relaxing therapies in Ayurveda. A continuous, rhythmic stream of warm herbal oil is poured onto the center of the forehead (the 'third eye'), inducing a state of profound mental relaxation and peace.",
    benefits: ["Calms the nervous system", "Reduces anxiety and mental stress", "Enhances memory and focus"],
    indications: ["Anxiety", "Insomnia", "Migraines", "Depression"]
  },
  {
    id: "abhy-dara-relax",
    slug: "abhy-dara-relax",
    name: "Abhy + dara",
    category: "relax",
    categoryName: "Relax",
    duration: "90 Mins",
    price: 3500,
    priceFormatted: "₹3,500",
    image: "/images/ai_abhyangam.jpg",
    featured: true,
    tagline: "Ultimate Relaxation Combo",
    shortDesc: "A complete package combining full-body herbal oil massage with mind-calming Shirodara.",
    description: "This signature package combines the physical rejuvenation of Abhyangam with the deep mental relaxation of Shirodhara. It is the perfect therapy for those looking to relieve both physical tension and mental stress simultaneously.",
    benefits: ["Relieves deep physical tension", "Calms the nervous system", "Improves sleep quality"],
    indications: ["High Stress", "Insomnia", "Fatigue"]
  },
  {
    id: "elakizhi-relax",
    slug: "elakizhi-relax",
    name: "Elakizhi",
    category: "relax",
    categoryName: "Relax",
    duration: "50 Mins",
    price: 2000,
    priceFormatted: "₹2,000",
    image: "/images/ai_kizhi.jpg",
    featured: false,
    tagline: "Herbal Leaf Bolus Massage",
    shortDesc: "A specialized massage using warm poultices filled with fresh medicinal leaves.",
    description: "Elakizhi utilizes fresh medicinal leaves tied in cloth boluses, heated in herbal oil, and applied over the entire body. It induces deep sweating, relieves muscle pain, and improves joint mobility.",
    benefits: ["Relieves body aches", "Reduces joint stiffness", "Improves circulation"],
    indications: ["Arthritis", "Muscle Pain", "Sports injuries"]
  },
  {
    id: "podikizhi-relax",
    slug: "podikizhi-relax",
    name: "Podikizhi",
    category: "relax",
    categoryName: "Relax",
    duration: "50 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/ai_kizhi.jpg",
    featured: false,
    tagline: "Herbal Powder Bolus Massage",
    shortDesc: "Warm herbal powder poultices used for treating deep-seated inflammation and pain.",
    description: "Podikizhi involves applying warm cloth boluses filled with therapeutic herbal powders (choornam). It is highly effective for reducing Kapha and Vata related swelling, pain, and stiffness.",
    benefits: ["Reduces swelling", "Relieves stiff joints", "Breaks down fat"],
    indications: ["Rheumatoid arthritis", "Obesity", "Joint pain"]
  },
  {
    id: "kativasti-relax",
    slug: "kativasti-relax",
    name: "Kativasti",
    category: "relax",
    categoryName: "Relax",
    duration: "50 Mins",
    price: 1500,
    priceFormatted: "₹1,500",
    image: "/images/kadi_vasthi_authentic.jpg",
    featured: false,
    tagline: "Lower Back Oil Retention",
    shortDesc: "Pooling of warm medicated oil on the lower back for relieving spinal tension.",
    description: "Kativasti involves retaining warm medicated oil over the lumbosacral area inside a boundary of herbal dough. It deeply lubricates the spinal joints, relieves nerve compression, and soothes lower back pain.",
    benefits: ["Relieves lower back pain", "Nourishes spinal discs", "Eases sciatica"],
    indications: ["Sciatica", "Lumbar spondylosis", "Lower back ache"]
  },
  {
    id: "navarakizhi-relax",
    slug: "navarakizhi-relax",
    name: "Navarakizhi",
    category: "relax",
    categoryName: "Relax",
    duration: "60 Mins",
    price: 2500,
    priceFormatted: "₹2,500",
    image: "/images/ai_kizhi.jpg",
    featured: false,
    tagline: "Nourishing Rice Bolus Massage",
    shortDesc: "A highly rejuvenating therapy using special medicinal rice cooked in herbal decoction and milk.",
    description: "Navarakizhi is a deeply nourishing therapy that uses special Navara rice cooked with milk and herbs. It is applied all over the body, strengthening muscles, improving skin texture, and rejuvenating nerve endings.",
    benefits: ["Builds muscle mass", "Improves skin complexion", "Nourishes nerves"],
    indications: ["Muscular weakness", "Neurological disorders", "Anti-aging"]
  },
  {
    id: "thalapodichi-relax",
    slug: "thalapodichi-relax",
    name: "Thalapodichi",
    category: "relax",
    categoryName: "Relax",
    duration: "40 Mins",
    price: 1500,
    priceFormatted: "₹1,500",
    image: "/images/ai_shirodhara.jpg",
    featured: false,
    tagline: "Cooling Herbal Head Pack",
    shortDesc: "Application of a specialized herbal paste over the scalp for mental calmness and hair health.",
    description: "Thalapodichi involves applying a thick layer of medicated herbal paste (like amla or buttermilk based) over the scalp, covered with a leaf. It is highly cooling and relieves anxiety, insomnia, and promotes hair growth.",
    benefits: ["Cools the head", "Reduces stress and anger", "Prevents hair fall"],
    indications: ["Insomnia", "Anxiety", "Hair loss", "Migraines"]
  },
  {
    id: "udwartanam-relax",
    slug: "udwartanam-relax",
    name: "Udwartanam",
    category: "relax",
    categoryName: "Relax",
    duration: "60 Mins",
    price: 2200,
    priceFormatted: "₹2,200",
    image: "/images/ai_foot.jpg",
    featured: false,
    tagline: "Dry Herbal Powder Massage",
    shortDesc: "An invigorating full-body scrub using dry herbal powders to break down subcutaneous fat.",
    description: "Udwartanam is a specialized dry powder massage performed in an upward direction. It exfoliates the skin, reduces cellulite, improves blood circulation, and treats obesity.",
    benefits: ["Reduces body weight", "Improves skin tone", "Removes cellulite"],
    indications: ["Obesity", "Sluggish metabolism", "Dull skin"]
  },
  {
    id: "beauty-care-kerala-relax",
    slug: "beauty-care-kerala-relax",
    name: "Beauty Care of Kerala",
    category: "relax",
    categoryName: "Relax",
    duration: "65 Mins",
    price: 2500,
    priceFormatted: "₹2,500",
    image: "/images/ai_facial.jpg",
    featured: false,
    tagline: "Traditional Skin Radiance",
    shortDesc: "Authentic Kerala beauty rituals for skin nourishment and glowing complexion.",
    description: "An authentic skin-brightening treatment using classical herbs, milk, and honey to restore natural vitality and glow to the face and body.",
    benefits: ["Improves skin tone", "Reduces blemishes", "Natural glow"],
    indications: ["Dull skin", "Blemishes", "Pigmentation"]
  },

  // ----------------------------------------
  // REJUVENATE CATEGORY
  // ----------------------------------------
  {
    id: "head-massage-rejuvenate",
    slug: "head-massage-rejuvenate",
    name: "Head massage",
    category: "rejuvenate",
    categoryName: "Rejuvenate",
    duration: "20 Mins",
    price: 600,
    priceFormatted: "₹600",
    image: "/images/ai_shirodhara.jpg",
    featured: false,
    tagline: "Quick Scalp Tension Relief",
    shortDesc: "A relaxing head massage using medicated oils to relieve stress and improve sleep.",
    description: "A focused massage on the head, neck, and shoulders. It releases built-up tension in the scalp, stimulates hair follicles, and provides immediate relief from headaches.",
    benefits: ["Relieves headaches", "Promotes hair health", "Reduces mental fatigue"],
    indications: ["Tension headaches", "Stress", "Hair fall"]
  },
  {
    id: "foot-massage-rejuvenate",
    slug: "foot-massage-rejuvenate",
    name: "Foot Massage",
    category: "rejuvenate",
    categoryName: "Rejuvenate",
    duration: "20 Mins",
    price: 600,
    priceFormatted: "₹600",
    image: "/images/ai_foot.jpg",
    featured: false,
    tagline: "Reflexology & Foot Relaxation",
    shortDesc: "A soothing lower leg and foot massage to relieve tiredness and improve circulation.",
    description: "Pada Abhyanga (foot massage) focuses on vital marma points in the feet. It deeply relaxes the entire body, improves vision, and induces sound sleep.",
    benefits: ["Relieves foot fatigue", "Improves sleep", "Stimulates internal organs"],
    indications: ["Tired feet", "Insomnia", "Vata imbalance"]
  },
  {
    id: "back-massage-rejuvenate",
    slug: "back-massage-rejuvenate",
    name: "Back Massage",
    category: "rejuvenate",
    categoryName: "Rejuvenate",
    duration: "20 Mins",
    price: 800,
    priceFormatted: "₹800",
    image: "/images/ai_abhyangam.jpg",
    featured: false,
    tagline: "Spinal Tension Relief",
    shortDesc: "Targeted massage for the back to release muscle knots and spinal stiffness.",
    description: "A specialized massage focusing on the spine, shoulders, and lower back. It uses warm medicated oils to relieve chronic muscle spasms and correct posture.",
    benefits: ["Relieves back pain", "Reduces muscle stiffness", "Improves spinal flexibility"],
    indications: ["Backache", "Muscle spasms", "Poor posture"]
  },
  {
    id: "nasyam-rejuvenate",
    slug: "nasyam-rejuvenate",
    name: "Nasyam",
    category: "rejuvenate",
    categoryName: "Rejuvenate",
    duration: "40 Mins",
    price: 1200,
    priceFormatted: "₹1,200",
    image: "/images/ai_steam.jpg",
    featured: false,
    tagline: "Nasal Cleansing Therapy",
    shortDesc: "Administration of medicated oils through the nasal passages for head and neck conditions.",
    description: "Nasyam is a key Panchakarma therapy that cleanses the head region. Medicated oils are instilled into the nostrils, accompanied by facial massage and herbal steam. It clears the sinuses and strengthens cranial nerves.",
    benefits: ["Clears sinus congestion", "Relieves migraines", "Improves vision and voice"],
    indications: ["Sinusitis", "Migraines", "Allergies", "Facial palsy"]
  },
  {
    id: "kayalepam-rejuvenate",
    slug: "kayalepam-rejuvenate",
    name: "Kayalepam",
    category: "rejuvenate",
    categoryName: "Rejuvenate",
    duration: "45 Mins",
    price: 2000,
    priceFormatted: "₹2,000",
    image: "/images/ai_foot.jpg",
    featured: false,
    tagline: "Full Body Herbal Wrap",
    shortDesc: "Application of medicinal herbal pastes over the entire body for skin health and detoxification.",
    description: "Kayalepam involves applying specialized medicated herbal pastes all over the body. It is highly effective for skin diseases, reducing fat, and detoxifying the body.",
    benefits: ["Detoxifies skin", "Treats dermatological issues", "Reduces excess body heat"],
    indications: ["Psoriasis", "Eczema", "Skin impurities"]
  },
  {
    id: "soundaryavardhini-headpack-rejuvenate",
    slug: "soundaryavardhini-headpack-rejuvenate",
    name: "Soundaryavardhini with head pack",
    category: "rejuvenate",
    categoryName: "Rejuvenate",
    duration: "115 Mins",
    price: 3500,
    priceFormatted: "₹3,500",
    image: "/images/ai_facial.jpg",
    featured: true,
    tagline: "Complete Royal Beauty Ritual",
    shortDesc: "Comprehensive face, body, and head beauty treatment for ultimate rejuvenation.",
    description: "A luxurious and intensive beauty therapy that includes full body polishing, facial glow treatments, and a nourishing herbal head pack for hair health and stress relief.",
    benefits: ["Total body rejuvenation", "Hair nourishment", "Skin brightening"],
    indications: ["Pre-bridal care", "Stress", "Dull skin and hair"]
  },
  {
    id: "soundaryavardhini-rejuvenate",
    slug: "soundaryavardhini-rejuvenate",
    name: "Soundaryavardhini without headpack",
    category: "rejuvenate",
    categoryName: "Rejuvenate",
    duration: "90 Mins",
    price: 2800,
    priceFormatted: "₹2,800",
    image: "/images/ai_facial.jpg",
    featured: false,
    tagline: "Body & Face Beauty Ritual",
    shortDesc: "Intensive body and facial beauty therapy.",
    description: "A dedicated beauty therapy focusing on bringing out the natural radiance of the skin through classical Ayurvedic scrubbing and masking.",
    benefits: ["Skin brightening", "Full body exfoliation"],
    indications: ["Dull skin", "Skin tanning"]
  },
  {
    id: "mud-bath-rejuvenate",
    slug: "mud-bath-rejuvenate",
    name: "Natural Mud Bath",
    category: "rejuvenate",
    categoryName: "Rejuvenate",
    duration: "45 Mins",
    price: 1500,
    priceFormatted: "₹1,500",
    image: "/images/mud_bath.png",
    featured: true,
    tagline: "Natural Earth Healing",
    shortDesc: "A deeply detoxifying full body mud immersion for drawing out toxins and cooling the body.",
    description: "Our Natural Mud Bath therapy uses specially sourced, mineral-rich earth applied all over the body. The mud acts as a powerful detoxifier, drawing out impurities and excess heat from the tissues. It improves skin complexion, relieves stress, and profoundly relaxes the nervous system.",
    benefits: ["Draws out deep-seated toxins", "Cools the entire body", "Improves skin tone and texture"],
    indications: ["Skin conditions", "Excess body heat", "Stress", "Pitta imbalance"]
  },

  // ----------------------------------------
  // TREATMENTS CATEGORY
  // ----------------------------------------
  {
    id: "elakizhi-treatments",
    slug: "elakizhi-treatments",
    name: "Elakizhi",
    category: "treatments",
    categoryName: "Treatments",
    duration: "50 Mins",
    price: 2000,
    priceFormatted: "₹2,000",
    image: "/images/ai_kizhi.jpg",
    featured: false,
    tagline: "Herbal Leaf Bolus Massage",
    shortDesc: "A specialized massage using warm poultices filled with fresh medicinal leaves.",
    description: "Elakizhi utilizes fresh medicinal leaves tied in cloth boluses, heated in herbal oil, and applied over the entire body. It induces deep sweating, relieves muscle pain, and improves joint mobility.",
    benefits: ["Relieves body aches", "Reduces joint stiffness", "Improves circulation"],
    indications: ["Arthritis", "Muscle Pain", "Sports injuries"]
  },
  {
    id: "kadikizhi-treatments",
    slug: "kadikizhi-treatments",
    name: "Kadikizhi",
    category: "treatments",
    categoryName: "Treatments",
    duration: "45 Mins",
    price: 2000,
    priceFormatted: "₹2,000",
    image: "/images/ai_kizhi.jpg",
    featured: false,
    tagline: "Hip & Lower Back Potli",
    shortDesc: "Specialized potli massage targeting the hip and pelvic region.",
    description: "A localized potli (bolus) therapy primarily applied to the hip and lower back area to relieve stiffness, pain, and inflammation.",
    benefits: ["Relieves pelvic stiffness", "Eases hip joint pain"],
    indications: ["Sciatica", "Lower back ache", "Pelvic stiffness"]
  },
  {
    id: "podikizhi-treatments",
    slug: "podikizhi-treatments",
    name: "Podikizhi",
    category: "treatments",
    categoryName: "Treatments",
    duration: "50 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/ai_kizhi.jpg",
    featured: false,
    tagline: "Herbal Powder Bolus Massage",
    shortDesc: "Warm herbal powder poultices used for treating deep-seated inflammation and pain.",
    description: "Podikizhi involves applying warm cloth boluses filled with therapeutic herbal powders (choornam). It is highly effective for reducing Kapha and Vata related swelling, pain, and stiffness.",
    benefits: ["Reduces swelling", "Relieves stiff joints", "Breaks down fat"],
    indications: ["Rheumatoid arthritis", "Obesity", "Joint pain"]
  },
  {
    id: "mamsakizhi-treatments",
    slug: "mamsakizhi-treatments",
    name: "Mamsakizhi",
    category: "treatments",
    categoryName: "Treatments",
    duration: "45 Mins",
    price: 2500,
    priceFormatted: "₹2,500",
    image: "/images/ai_kizhi.jpg",
    featured: false,
    tagline: "Nourishing Meat Bolus Therapy",
    shortDesc: "Potent strengthening therapy using boluses of medicated meat.",
    description: "A deeply nourishing therapy designed for severe musculoskeletal and neurological wasting conditions. Boluses of medicated goat meat and herbs are used to strengthen muscles.",
    benefits: ["Builds muscle mass", "Strengthens nerves"],
    indications: ["Muscular dystrophy", "Paralysis", "Severe weakness"]
  },
  {
    id: "mottakizhi-treatments",
    slug: "mottakizhi-treatments",
    name: "Mottakizhi",
    category: "treatments",
    categoryName: "Treatments",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/ai_kizhi.jpg",
    featured: false,
    tagline: "Egg Bolus Therapy",
    shortDesc: "Fomentation therapy using boiled eggs and herbs.",
    description: "A unique therapy where boluses made of boiled eggs and medicated herbs are applied to the body. Highly effective for facial paralysis and muscular wasting.",
    benefits: ["Nourishes facial nerves", "Relieves stiff muscles"],
    indications: ["Facial palsy", "Muscle atrophy"]
  },
  {
    id: "navarakizhi-treatments",
    slug: "navarakizhi-treatments",
    name: "Navarakizhi",
    category: "treatments",
    categoryName: "Treatments",
    duration: "60 Mins",
    price: 2500,
    priceFormatted: "₹2,500",
    image: "/images/ai_kizhi.jpg",
    featured: true,
    tagline: "Nourishing Rice Bolus Massage",
    shortDesc: "A highly rejuvenating therapy using special medicinal rice cooked in herbal decoction and milk.",
    description: "Navarakizhi is a deeply nourishing therapy that uses special Navara rice cooked with milk and herbs. It is applied all over the body, strengthening muscles, improving skin texture, and rejuvenating nerve endings.",
    benefits: ["Builds muscle mass", "Improves skin complexion", "Nourishes nerves"],
    indications: ["Muscular weakness", "Neurological disorders", "Anti-aging"]
  },
  {
    id: "pizichil-treatments",
    slug: "pizichil-treatments",
    name: "Pizichil",
    category: "treatments",
    categoryName: "Treatments",
    duration: "60 Mins",
    price: 3000,
    priceFormatted: "₹3,000",
    image: "/images/ai_abhyangam.jpg",
    featured: true,
    tagline: "The Royal Oil Bath",
    shortDesc: "Continuous pouring of warm medicated oil all over the body accompanied by gentle massage.",
    description: "Known as the treatment for aristocrats, Pizichil involves squeezing warm, medicated oil from cloth continuously over the body while massaging. It combines the benefits of both snehana (oleation) and swedana (sudation).",
    benefits: ["Profoundly anti-aging", "Lubricates joints", "Pacifies severe Vata disorders"],
    indications: ["Arthritis", "Neurological disorders", "Rheumatism"]
  },
  {
    id: "vallukaswedam-treatments",
    slug: "vallukaswedam-treatments",
    name: "Vallukaswedam",
    category: "treatments",
    categoryName: "Treatments",
    duration: "30 Mins",
    price: 1500,
    priceFormatted: "₹1,500",
    image: "/images/ai_kizhi.jpg",
    featured: false,
    tagline: "Hot Sand Fomentation",
    shortDesc: "Dry heat therapy using warm sand boluses to relieve intense joint pain.",
    description: "Vallukaswedam (Manal Kizhi) uses purified sand heated and tied in boluses. It provides dry heat (Rooksha sweda), which is highly beneficial in inflammatory conditions like Rheumatoid arthritis where oil is contraindicated.",
    benefits: ["Reduces severe inflammation", "Relieves stiff joints"],
    indications: ["Rheumatoid arthritis", "Severe joint swelling", "Heavy limbs"]
  },
  {
    id: "kashayavasti-treatments",
    slug: "kashayavasti-treatments",
    name: "Kashayavasti",
    category: "treatments",
    categoryName: "Treatments",
    duration: "30 Mins",
    price: 1500,
    priceFormatted: "₹1,500",
    image: "/images/kadi_vasthi_authentic.jpg",
    featured: false,
    tagline: "Medicated Decoction Enema",
    shortDesc: "A cleansing enema therapy using herbal decoctions for deep detoxification.",
    description: "Kashaya Vasti is a therapeutic enema using herbal decoctions, honey, salt, and oil. It is the primary treatment for Vata disorders, cleansing the colon and deeply detoxifying the system.",
    benefits: ["Detoxifies the colon", "Pacifies Vata dosha completely"],
    indications: ["Neurological disorders", "Chronic constipation", "Arthritis"]
  },
  {
    id: "greevavasti-treatments",
    slug: "greevavasti-treatments",
    name: "Greevavasti",
    category: "treatments",
    categoryName: "Treatments",
    duration: "30 Mins",
    price: 1200,
    priceFormatted: "₹1,200",
    image: "/images/kadi_vasthi_authentic.jpg",
    featured: false,
    tagline: "Cervical Spine Oil Reservoir",
    shortDesc: "Pooling of warm medicated oil over the neck for cervical spine health.",
    description: "Greevavasti focuses on the cervical region. Warm medicated oil is retained on the back of the neck using a dough ring. It lubricates the cervical joints and relieves neck stiffness.",
    benefits: ["Relieves neck stiffness", "Nourishes cervical nerves"],
    indications: ["Cervical spondylosis", "Stiff neck", "Shoulder pain"]
  },
  {
    id: "januvasti-treatments",
    slug: "januvasti-treatments",
    name: "Januvasti",
    category: "treatments",
    categoryName: "Treatments",
    duration: "30 Mins",
    price: 1200,
    priceFormatted: "₹1,200",
    image: "/images/januvasti.png",
    featured: false,
    tagline: "Knee Joint Oil Pool",
    shortDesc: "Retention of warm oil over the knees to lubricate joints and relieve pain.",
    description: "Januvasti targets knee joint pain. Warm medicated oil is pooled over the knees, which deeply lubricates the joint capsule, strengthens ligaments, and reduces pain.",
    benefits: ["Lubricates knee joints", "Reduces knee pain and stiffness"],
    indications: ["Osteoarthritis of knees", "Knee injuries", "Joint stiffness"]
  },
  {
    id: "matravasti-treatments",
    slug: "matravasti-treatments",
    name: "Matravasti",
    category: "treatments",
    categoryName: "Treatments",
    duration: "30 Mins",
    price: 1000,
    priceFormatted: "₹1,000",
    image: "/images/kadi_vasthi_authentic.jpg",
    featured: false,
    tagline: "Daily Medicated Oil Enema",
    shortDesc: "A mild medicated oil enema that can be administered daily.",
    description: "Matra Vasti is a type of Anuvasana Vasti where a smaller quantity of medicated oil or ghee is administered rectally. It nourishes the body, promotes weight gain, and pacifies Vata without needing strict dietary restrictions.",
    benefits: ["Strengthens lower body", "Relieves chronic constipation"],
    indications: ["Vata disorders", "Constipation", "Weakness"]
  },
  {
    id: "nasyam-treatments",
    slug: "nasyam-treatments",
    name: "Nasyam",
    category: "treatments",
    categoryName: "Treatments",
    duration: "40 Mins",
    price: 1200,
    priceFormatted: "₹1,200",
    image: "/images/ai_steam.jpg",
    featured: false,
    tagline: "Nasal Cleansing Therapy",
    shortDesc: "Administration of medicated oils through the nasal passages for head and neck conditions.",
    description: "Nasyam is a key Panchakarma therapy that cleanses the head region. Medicated oils are instilled into the nostrils, accompanied by facial massage and herbal steam. It clears the sinuses and strengthens cranial nerves.",
    benefits: ["Clears sinus congestion", "Relieves migraines", "Improves vision and voice"],
    indications: ["Sinusitis", "Migraines", "Allergies", "Facial palsy"]
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
    image: "/images/ai_foot.jpg",
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
    image: "/images/ai_steam.jpg",
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
    image: "/images/ai_steam.jpg",
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
    image: "/images/ai_abhyangam.jpg",
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
    image: "/images/ai_kizhi.jpg",
    description: "Warm herbal potli boluses for joint stiffness and back pain"
  },
  {
    id: "g12",
    title: "Pada Abhyanga & Foot Reflexology",
    category: "Massages",
    image: "/images/ai_foot.jpg",
    description: "Herbal foot massage with bronze kansa bowl and medicated oils"
  },
  {
    id: "g13",
    title: "Nasyam Sinus & Cranial Therapy",
    category: "Panchakarma",
    image: "/images/ai_steam.jpg",
    description: "Medicated herbal drops for sinus clearance and migraine relief"
  },
  {
    id: "g14",
    title: "Mukha Lepam Natural Herbal Facial",
    category: "Facials",
    image: "/images/ai_facial.jpg",
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
