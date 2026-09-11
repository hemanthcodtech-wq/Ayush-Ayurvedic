const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'src', 'data', 'ayurvedaData.js');
let content = fs.readFileSync(dataFile, 'utf8');

content = content.replace(/(name: "Abhyangam \(Full Body Massage\)",[^]+?duration:\s*")60 Mins"/g, '$145 Mins"');
content = content.replace(/(name: "Shirodhara \(Mind & Nervous Stream Therapy\)",[^]+?duration:\s*")45 Mins"/g, '$155 Mins"');
content = content.replace(/(name: "Ela Kizhi \(Pathra Pinda Sweda\)",[^]+?duration:\s*")60 Mins"/g, '$150 Mins"');
content = content.replace(/(name: "Podi Kizhi \(Choornapinda Sweda\)",[^]+?duration:\s*")60 Mins"/g, '$150 Mins"');
content = content.replace(/(name: "Kadi Vasthi \(Lumbosacral Oil Retention\)",[^]+?duration:\s*")30 Mins"/g, '$150 Mins"');
content = content.replace(/(name: "Head, Neck & Shoulder Massage",[^]+?duration:\s*")30 Mins"/g, '$120 Mins"');
content = content.replace(/(name: "Leg & Foot Massage \(Pada Abhyanga\)",[^]+?duration:\s*")30 Mins"/g, '$120 Mins"');
content = content.replace(/(name: "Back Massage \(Spinal Care\)",[^]+?duration:\s*")30 Mins"/g, '$120 Mins"');

const newTherapies = `
  {
    id: "abhy-dara-package",
    slug: "abhy-dara-package",
    name: "Abhyangam + Shirodara (Package)",
    category: "massages",
    categoryName: "Body Massages",
    duration: "90 Mins",
    price: 3500,
    priceFormatted: "₹3,500",
    image: "/images/kizhi.jpg",
    featured: true,
    tagline: "Ultimate Relaxation Combo",
    shortDesc: "A profound combination of full-body herbal oil massage and mind-calming oil stream on the forehead.",
    description: "This signature package combines the physical rejuvenation of Abhyangam with the deep mental relaxation of Shirodhara. Ideal for stress, anxiety, and full body wellness.",
    benefits: ["Relieves deep physical tension", "Calms the nervous system", "Improves sleep quality"],
    indications: ["Stress", "Insomnia", "Fatigue"]
  },
  {
    id: "beauty-care-kerala",
    slug: "beauty-care-kerala",
    name: "Beauty Care of Kerala",
    category: "facials",
    categoryName: "Ayur Beauty",
    duration: "65 Mins",
    price: 2500,
    priceFormatted: "₹2,500",
    image: "/images/mukha_lepam.png",
    featured: false,
    tagline: "Traditional Skin Radiance",
    shortDesc: "Authentic Kerala beauty rituals for skin nourishment and glowing complexion.",
    description: "An authentic skin-brightening treatment using classical herbs, milk, and honey to restore natural vitality and glow to the face and body.",
    benefits: ["Improves skin tone", "Reduces blemishes", "Natural glow"],
    indications: ["Dull skin", "Blemishes"]
  },
  {
    id: "kayalepam",
    slug: "kayalepam",
    name: "Kayalepam",
    category: "ayur-care",
    categoryName: "Ayur Care",
    duration: "45 Mins",
    price: 2000,
    priceFormatted: "₹2,000",
    image: "/images/pada_abhyanga.jpg",
    featured: false,
    tagline: "Full Body Herbal Wrap",
    shortDesc: "Application of medicinal herbal pastes over the entire body for skin health and detoxification.",
    description: "Kayalepam involves applying specialized medicated herbal pastes all over the body. It is highly effective for skin diseases, reducing fat, and detoxifying the body.",
    benefits: ["Detoxifies skin", "Treats dermatological issues", "Reduces excess body heat"],
    indications: ["Psoriasis", "Eczema", "Skin impurities"]
  },
  {
    id: "soundaryavardhini-headpack",
    slug: "soundaryavardhini-headpack",
    name: "Soundaryavardhini with head pack",
    category: "facials",
    categoryName: "Ayur Beauty",
    duration: "115 Mins",
    price: 3500,
    priceFormatted: "₹3,500",
    image: "/images/mukha_lepam.png",
    featured: true,
    tagline: "Complete Royal Beauty Ritual",
    shortDesc: "Comprehensive face, body, and head beauty treatment for ultimate rejuvenation.",
    description: "A luxurious and intensive beauty therapy that includes full body polishing, facial glow treatments, and a nourishing herbal head pack for hair health and stress relief.",
    benefits: ["Total body rejuvenation", "Hair nourishment", "Skin brightening"],
    indications: ["Pre-bridal care", "Stress", "Dull skin and hair"]
  },
  {
    id: "soundaryavardhini",
    slug: "soundaryavardhini",
    name: "Soundaryavardhini without headpack",
    category: "facials",
    categoryName: "Ayur Beauty",
    duration: "90 Mins",
    price: 2800,
    priceFormatted: "₹2,800",
    image: "/images/mukha_lepam.png",
    featured: false,
    tagline: "Body & Face Beauty Ritual",
    shortDesc: "Intensive body and facial beauty therapy.",
    description: "A dedicated beauty therapy focusing on bringing out the natural radiance of the skin through classical Ayurvedic scrubbing and masking.",
    benefits: ["Skin brightening", "Exfoliation"],
    indications: ["Dull skin"]
  },
  {
    id: "kadikizhi",
    slug: "kadikizhi",
    name: "Kadikizhi",
    category: "kizhi",
    categoryName: "Kizhi Therapies",
    duration: "45 Mins",
    price: 2000,
    priceFormatted: "₹2,000",
    image: "/images/kizhi.jpg",
    featured: false,
    tagline: "Hip & Lower Back Potli",
    shortDesc: "Specialized potli massage targeting the hip and pelvic region.",
    description: "A localized potli (bolus) therapy primarily applied to the hip and lower back area to relieve stiffness, pain, and inflammation.",
    benefits: ["Relieves pelvic stiffness", "Eases hip joint pain"],
    indications: ["Sciatica", "Lower back ache"]
  },
  {
    id: "mamsakizhi",
    slug: "mamsakizhi",
    name: "Mamsakizhi",
    category: "kizhi",
    categoryName: "Kizhi Therapies",
    duration: "45 Mins",
    price: 2500,
    priceFormatted: "₹2,500",
    image: "/images/kizhi.jpg",
    featured: false,
    tagline: "Nourishing Meat Bolus Therapy",
    shortDesc: "Potent strengthening therapy using boluses of medicated meat.",
    description: "A deeply nourishing therapy designed for severe musculoskeletal and neurological wasting conditions. Boluses of medicated goat meat and herbs are used to strengthen muscles.",
    benefits: ["Builds muscle mass", "Strengthens nerves"],
    indications: ["Muscular dystrophy", "Paralysis", "Severe weakness"]
  },
  {
    id: "mottakizhi",
    slug: "mottakizhi",
    name: "Mottakizhi",
    category: "kizhi",
    categoryName: "Kizhi Therapies",
    duration: "45 Mins",
    price: 1800,
    priceFormatted: "₹1,800",
    image: "/images/kizhi.jpg",
    featured: false,
    tagline: "Egg Bolus Therapy",
    shortDesc: "Fomentation therapy using boiled eggs and herbs.",
    description: "A unique therapy where boluses made of boiled eggs and medicated herbs are applied to the body. Highly effective for facial paralysis and muscular wasting.",
    benefits: ["Nourishes facial nerves", "Relieves stiff muscles"],
    indications: ["Facial palsy", "Muscle atrophy"]
  },
  {
    id: "pizichil",
    slug: "pizichil",
    name: "Pizichil (Medicated Oil Bath)",
    category: "dhara",
    categoryName: "Dhara Therapies",
    duration: "60 Mins",
    price: 3000,
    priceFormatted: "₹3,000",
    image: "/images/pada_abhyanga.jpg",
    featured: true,
    tagline: "The Royal Oil Bath",
    shortDesc: "Continuous pouring of warm medicated oil all over the body accompanied by gentle massage.",
    description: "Known as the treatment for aristocrats, Pizichil involves squeezing warm, medicated oil from cloth continuously over the body while massaging. It combines the benefits of both snehana (oleation) and swedana (sudation).",
    benefits: ["Profoundly anti-aging", "Lubricates joints", "Pacifies severe Vata disorders"],
    indications: ["Arthritis", "Neurological disorders", "Rheumatism"]
  },
  {
    id: "matravasti",
    slug: "matravasti",
    name: "Matravasti",
    category: "vasti",
    categoryName: "Vasti Therapies",
    duration: "30 Mins",
    price: 1200,
    priceFormatted: "₹1,200",
    image: "/images/pada_abhyanga.jpg",
    featured: false,
    tagline: "Daily Medicated Oil Enema",
    shortDesc: "A mild medicated oil enema that can be administered daily.",
    description: "Matra Vasti is a type of Anuvasana Vasti where a smaller quantity of medicated oil or ghee is administered rectally. It nourishes the body, promotes weight gain, and pacifies Vata without needing strict dietary restrictions.",
    benefits: ["Strengthens lower body", "Relieves chronic constipation"],
    indications: ["Vata disorders", "Constipation", "Weakness"]
  },
`;

const insertIndex = content.lastIndexOf('];', content.indexOf('export const testimonials'));
if (insertIndex !== -1) {
  content = content.slice(0, insertIndex) + newTherapies + content.slice(insertIndex);
}

fs.writeFileSync(dataFile, content, 'utf8');
console.log('Update complete.');
