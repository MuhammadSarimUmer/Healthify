export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Advantages", href: "#advantages" },
  { label: "Growth Plans", href: "#plans" },
  { label: "Blogs", href: "#stories" },
  { label: "Contact Us", href: "#contact" },
];

export const heroBadges = [
  { icon: "leaf", label: "Fresh Ingredients" },
  { icon: "badge", label: "Nutritionist Approved" },
  { icon: "truck", label: "Delivered to Your Door" },
] as const;

export const stats = [
  { icon: "salad", value: "1M+", label: "Meals Delivered" },
  { icon: "leaf", value: "30K+", label: "Happy Customers" },
  { icon: "star", value: "4.8/5", label: "Customer Satisfaction" },
  { icon: "users", value: "550+", label: "Corporate Clients" },
] as const;

export const aboutPoints = [
  { icon: "leaf", label: "Freshly Prepared Daily" },
  { icon: "scale", label: "Balanced Nutrition" },
  { icon: "smile", label: "Great Taste" },
] as const;

export const mealPlans = [
  {
    title: "Healthy Ready-To-Eat Meals",
    description: "Fresh, balanced meals prepared daily and ready to enjoy.",
    image: "/images/plan-ready-to-eat.jpg",
    alt: "Ready-to-eat bowl with avocado, tomatoes, chickpeas and sweet potato",
  },
  {
    title: "Customized Meal Plans",
    description: "Personalized nutrition plans designed for your goals.",
    image: "/images/plan-customized.jpg",
    alt: "Salmon with green beans, cauliflower rice and cherry tomatoes",
  },
  {
    title: "Weight Management Plans",
    description: "Delicious meals to support your weight loss or maintenance journey.",
    image: "/images/plan-weight.jpg",
    alt: "Colourful containers of fresh vegetables and proteins",
  },
  {
    title: "High-Protein Meal Plans",
    description: "Nutrient-rich meals for active lifestyles and fitness goals.",
    image: "/images/plan-protein.jpg",
    alt: "Plate with egg, greens, radish and avocado",
  },
];

export const advantages = [
  { icon: "gem", title: "Premium Quality", description: "High-quality, fresh ingredients" },
  { icon: "heart", title: "Health Focused", description: "Nutritionist designed meals" },
  { icon: "truck", title: "Convenient Delivery", description: "To your home or office" },
  { icon: "sprout", title: "Flexible Plans", description: "Options for every dietary need" },
] as const;

export const pricingPlans = [
  {
    name: "Essential Plan",
    icon: "leaf",
    description: "Great for individuals starting their healthy journey",
    price: "AED 299",
    features: ["Fresh daily meals", "Balanced nutrition", "Flexible delivery"],
    popular: false,
  },
  {
    name: "Balanced Plan",
    icon: "star",
    description: "Our best value plan for a healthier lifestyle.",
    price: "AED 499",
    features: [
      "Customized meal options",
      "Wide variety of meals",
      "Nutritionist support",
      "Flexible delivery",
    ],
    popular: true,
  },
  {
    name: "Performance Plan",
    icon: "chart",
    description: "For fitness enthusiasts and active lifestyles.",
    price: "AED 699",
    features: [
      "High-protein meals",
      "Performance-focused nutrition",
      "Personalized plans",
      "Priority support",
    ],
    popular: false,
  },
] as const;

export const steps = [
  { icon: "pin", title: "Choose Your Plan", description: "Select the meal plan that fits your goals." },
  { icon: "salad", title: "We Prepare Fresh Meals", description: "Our chefs prepare nutritious meals with care." },
  { icon: "truck", title: "Enjoy Convenient Delivery", description: "Receive your meals and enjoy a healthier you." },
] as const;

export const testimonials = [
  {
    quote:
      "Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!",
    name: "Sara M.",
    location: "Dubai, UAE",
    avatar: "/images/avatar-sara.jpg",
  },
  {
    quote:
      "Finally a healthy meal service that tastes amazing! It fits perfectly into my busy lifestyle.",
    name: "Ahmed R.",
    location: "Dubai, UAE",
    avatar: "/images/avatar-ahmed.jpg",
  },
  {
    quote:
      "Great quality, variety, and customer service. I feel healthier and more energized every day!",
    name: "Fatima K.",
    location: "Dubai, UAE",
    avatar: "/images/avatar-fatima.jpg",
  },
];

export const faqs = [
  {
    question: "What are your meal plans?",
    answer:
      "We offer Essential, Balanced and Performance plans, each with fresh, chef-prepared meals designed by nutritionists to match your goals.",
  },
  {
    question: "How does delivery work?",
    answer:
      "Meals are cooked fresh and delivered to your home or office across Dubai on the schedule you choose. You can pause or reschedule anytime.",
  },
  {
    question: "Can I customize my meals?",
    answer:
      "Yes. Tell us about your dietary needs, allergies and preferences, and we will tailor your menu accordingly.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, Apple Pay, and cash on delivery for selected areas.",
  },
  {
    question: "Do you have a mobile app?",
    answer:
      "Our mobile app is coming soon. For now you can order and manage your plan from our website or WhatsApp.",
  },
];

export const footerQuickLinks = [
  "Home",
  "About Us",
  "Our Services",
  "Advantages",
  "Growth Plans",
  "Blogs",
  "Contact Us",
];

export const footerServices = [
  "Healthy ready-to-eat meals",
  "Customized meal plans",
  "Weight management meal",
  "High-protein meal solutions",
  "Corporate meal solutions",
  "Fitness and wellness nutrition",
  "Healthy snacks and beverages",
  "Delivery and pickup services",
];

export const contactInfo = {
  location: "Dubai, UAE",
  phone: "+971 58 252 0144",
  email: "info@healthify.ae",
};
