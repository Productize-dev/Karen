export const business = {
  legalName: "Grace Living Cleaning Services",
  shortName: "Grace Living",
  tagline: "Clean Spaces. Happier Lives.",
  phone: "6157791232",
  phoneDisplay: "(615) 779-1232",
  phoneHref: "tel:+16157791232",
  smsHref: "sms:+16157791232",
  email: "hello@gracelivingcleaning.com",
  emailHref: "mailto:hello@gracelivingcleaning.com",
  address: {
    street: "",
    city: "Franklin",
    state: "TN",
    stateFull: "Tennessee",
    zip: "",
    country: "US",
  },
  geo: {
    latitude: 35.9251,
    longitude: -86.8689,
  },
  primaryCity: "Franklin",
  primaryGeoPhrase: "Franklin, Nashville & Middle Tennessee",
  serviceRegion: "Franklin, Thompson's Station, Murfreesboro, Nashville and nearby Middle Tennessee communities",
  hoursLabel: "By appointment, subject to availability",
  hoursSchema: "ByAppointmentOnly",
  bookingMethods: ["phone", "text", "quote form"] as const,
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100076133720244",
    google: "https://share.google/cRArUdt0DC0neycwT",
    instagram: "",
  },
  logoPath: "/brand/logo.jpg",
  description:
    "Professional residential and commercial cleaning company offering detailed, personalized cleaning services in Nashville and surrounding Middle Tennessee communities.",
  story:
    "Grace Living Cleaning Services was born from a desire to offer cleaning clients can truly trust. What began as a purpose to help families enjoy clean, organized, and welcoming homes has grown — through dedication, effort, and attention to detail — into lasting relationships with clients across Middle Tennessee.",
  meaning:
    "This business is more than a job. It represents effort, independence, growth, and the opportunity to build something lasting. We take pride in giving clients peace of mind and making a real difference in their homes.",
  differentiator:
    "Our commitment to quality, attention to detail, and personalized care. We don't just clean houses — we strive to deliver trust, peace of mind, and an excellent experience for every client.",
  pricingNote:
    "We prefer custom quotes. Pricing depends on property size, condition, and the services you need.",
} as const;

export const siteConfig = {
  name: business.legalName,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gracelivingcleaning.com",
  locale: "en_US",
} as const;

export const homeFaqs = [
  {
    question: "How do I get a price for cleaning?",
    answer:
      "We provide personalized quotes. Pricing depends on the size of your property, its condition, and the services you need. Call, text, or submit our online quote form and we'll follow up promptly.",
  },
  {
    question: "What areas do you serve?",
    answer: `We serve ${business.serviceRegion}. If you don't see your city listed, reach out — we may still be able to help.`,
  },
  {
    question: "How do I book a cleaning?",
    answer:
      "You can book by phone call, text message, or by submitting the quote request form on our website. Appointments are subject to availability.",
  },
  {
    question: "What services do you offer most often?",
    answer:
      "Our most requested work includes recurring residential cleaning (biweekly and monthly), deep cleans for new clients, Airbnb and vacation rental turnovers, and office cleaning.",
  },
  {
    question: "What are your hours?",
    answer: `${business.hoursLabel}. Reach out and we'll find a time that works for your schedule.`,
  },
] as const;

export const testimonials = [
  {
    quote:
      "Thorough, reliable, and so easy to communicate with. Our home has never looked better — we finally have peace of mind between visits.",
    author: "Homeowner",
    location: "Franklin, TN",
    source: "Client message",
  },
  {
    quote:
      "They treated our Airbnb like it was their own. Guests consistently mention how spotless the space is after every turnover.",
    author: "Property host",
    location: "Nashville, TN",
    source: "Client feedback",
  },
  {
    quote:
      "Attention to detail is unmatched. From the first deep clean to our biweekly schedule, everything feels personalized and professional.",
    author: "Recurring client",
    location: "Murfreesboro, TN",
    source: "Client feedback",
  },
] as const;

export function formatPhoneDisplay(phone = business.phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return business.phoneDisplay;
}
