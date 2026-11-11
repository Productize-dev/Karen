import { business } from "./business";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceRecord = {
  slug: string;
  name: string;
  shortName: string;
  category: "residential" | "commercial";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  includes: string[];
  benefits: string[];
  faqs: ServiceFaq[];
};

const region = business.primaryGeoPhrase;

export const services: ServiceRecord[] = [
  {
    slug: "residential-cleaning",
    name: "Residential Cleaning",
    shortName: "Residential",
    category: "residential",
    metaTitle: `Residential Cleaning ${business.address.state} | ${business.shortName}`,
    metaDescription: `Detailed residential cleaning in ${region}. Personalized house cleaning you can trust. Call ${business.phoneDisplay} for a custom quote.`,
    h1: `Residential Cleaning in ${region}`,
    intro: `${business.legalName} provides detailed, personalized residential cleaning across ${business.serviceRegion}. From kitchens and bathrooms to living spaces and bedrooms, we help families enjoy clean, organized, and welcoming homes.`,
    includes: [
      "Kitchen counters, sinks, and appliance exteriors",
      "Bathroom sinks, toilets, mirrors, tubs, and showers",
      "Dusting furniture, shelves, and reachable surfaces",
      "Vacuuming carpets and mopping hard floors",
      "Bedrooms, living areas, and high-touch surfaces",
      "Trash removal and tidy finishing touches",
      "Attention to the details that make a home feel cared for",
      "Flexible one-time or recurring visit options",
    ],
    benefits: [
      "Personalized cleaning tailored to your home",
      "Consistent quality and clear communication",
      "Trust and peace of mind between visits",
      "Custom quotes based on size, condition, and needs",
    ],
    faqs: [
      {
        question: "Is residential cleaning available as a one-time visit?",
        answer:
          "Yes. We offer one-time residential cleans as well as recurring schedules. Many new clients start with a deep clean, then move to a maintenance plan.",
      },
      {
        question: "Do you bring supplies?",
        answer:
          "We can discuss supplies during your quote. Tell us about preferences, sensitivities, or products you already keep at home so we can plan the visit correctly.",
      },
    ],
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    shortName: "Deep Clean",
    category: "residential",
    metaTitle: `Deep Cleaning ${business.address.state} | ${business.shortName}`,
    metaDescription: `Top-to-bottom deep cleaning in ${region}. Ideal for new clients and reset cleans. Call ${business.phoneDisplay} for a personalized quote.`,
    h1: `Deep Cleaning in ${region}`,
    intro: `When your home needs more than a maintenance clean, our deep cleaning service resets kitchens, bathrooms, and living spaces with meticulous detail. ${business.shortName} is trusted by new clients across ${business.serviceRegion} who want a thorough starting point.`,
    includes: [
      "Detailed kitchen cleaning including appliance exteriors and sinks",
      "Bathroom scrubbing — tubs, showers, tile, fixtures, and mirrors",
      "Baseboards, switches, and often-missed high-touch areas",
      "Dusting of reachable surfaces, fans, and fixtures",
      "Inside of microwave and select appliance detailing as requested",
      "Floors vacuumed and mopped throughout",
      "Build-up removal in high-use zones",
      "Ideal reset before starting a recurring plan",
    ],
    benefits: [
      "A true top-to-bottom reset for your home",
      "Perfect foundation for biweekly or monthly cleaning",
      "Extra focus on buildup and detail areas",
      "Personalized scope based on condition and priorities",
    ],
    faqs: [
      {
        question: "When should I book a deep clean?",
        answer:
          "Deep cleans are ideal for new clients, seasonal resets, after renovations, before hosting, or anytime your home needs more than a standard maintenance visit.",
      },
      {
        question: "How is deep cleaning different from recurring cleaning?",
        answer:
          "Deep cleaning takes more time and covers more detail work. Recurring cleaning maintains the results on a weekly, biweekly, or monthly schedule.",
      },
    ],
  },
  {
    slug: "recurring-cleaning",
    name: "Recurring Cleaning",
    shortName: "Recurring",
    category: "residential",
    metaTitle: `Recurring House Cleaning ${business.address.state} | ${business.shortName}`,
    metaDescription: `Weekly, biweekly, and monthly house cleaning in ${region}. Reliable recurring service with personalized care. Call ${business.phoneDisplay}.`,
    h1: `Recurring Cleaning in ${region}`,
    intro: `Keep your home consistently fresh with weekly, biweekly, or monthly cleaning from ${business.legalName}. Recurring residential cleaning is one of our most requested services across ${business.serviceRegion} — especially biweekly and monthly plans.`,
    includes: [
      "Kitchen and bathroom maintenance each visit",
      "Dusting, vacuuming, and mopping on a set cadence",
      "Living areas and bedrooms kept tidy and fresh",
      "Flexible weekly, biweekly, or monthly scheduling",
      "Consistent communication before and after visits",
      "Priority focus areas based on your household",
      "Optional add-ons discussed during your quote",
      "A cleaning rhythm that fits your lifestyle",
    ],
    benefits: [
      "Homes that stay clean without the weekend scramble",
      "Schedules that match how your household actually lives",
      "Trusted, personalized service over time",
      "Less stress and more time for what matters",
    ],
    faqs: [
      {
        question: "Which recurring schedule is most popular?",
        answer:
          "Biweekly and monthly plans are our most requested recurring options, though weekly service is available when your home needs more frequent care.",
      },
      {
        question: "Can I change my schedule later?",
        answer:
          "Yes. As your needs change, we can discuss adjusting frequency, focus areas, or visit timing subject to availability.",
      },
    ],
  },
  {
    slug: "airbnb-vacation-rental-cleaning",
    name: "Airbnb & Vacation Rental Cleaning",
    shortName: "Airbnb Cleaning",
    category: "residential",
    metaTitle: `Airbnb Cleaning ${business.address.state} | ${business.shortName}`,
    metaDescription: `Guest-ready Airbnb and vacation rental cleaning in ${region}. Reliable turnovers with attention to detail. Call ${business.phoneDisplay}.`,
    h1: `Airbnb & Vacation Rental Cleaning in ${region}`,
    intro: `Short-term rentals need fast, consistent, guest-ready results. ${business.legalName} provides Airbnb and vacation rental cleaning across ${business.serviceRegion} so every turnover feels welcoming, spotless, and review-ready.`,
    includes: [
      "Full turnover cleans between guest stays",
      "Kitchen, bathroom, and living space reset",
      "Bedding and laundry coordination as requested",
      "Trash removal and fresh presentation",
      "Inventory checks for essentials when requested",
      "Attention to guest-facing details and first impressions",
      "Flexible scheduling around check-out and check-in windows",
      "Communication that helps hosts stay on track",
    ],
    benefits: [
      "Guest-ready spaces that support strong reviews",
      "Reliable turnovers for busy host calendars",
      "Detail-oriented presentation, not just surface cleaning",
      "A partner who understands short-term rental standards",
    ],
    faqs: [
      {
        question: "Can you work around same-day turnovers?",
        answer:
          "When availability allows, yes. Share your check-out and check-in windows when you call so we can plan the right schedule.",
      },
      {
        question: "Do you follow a host checklist?",
        answer:
          "Absolutely. Send your property checklist and preferences and we'll align the turnover to your standards.",
      },
    ],
  },
  {
    slug: "move-in-move-out-cleaning",
    name: "Move-In / Move-Out Cleaning",
    shortName: "Move-In / Move-Out",
    category: "residential",
    metaTitle: `Move-In Move-Out Cleaning ${business.address.state} | ${business.shortName}`,
    metaDescription: `Move-in and move-out cleaning in ${region}. Empty-home detail cleans for landlords, sellers, and new residents. Call ${business.phoneDisplay}.`,
    h1: `Move-In / Move-Out Cleaning in ${region}`,
    intro: `Moving is stressful enough without worrying about the final clean. ${business.legalName} delivers detailed move-in and move-out cleaning across ${business.serviceRegion} so homes are ready for new residents, showings, or deposit walkthroughs.`,
    includes: [
      "Empty-home deep cleaning of kitchens and bathrooms",
      "Cabinets, counters, sinks, and appliance exteriors",
      "Inside appliances when accessible and requested",
      "Closets, shelves, and often-overlooked corners",
      "Baseboards, doors, and light switches",
      "Floors vacuumed and mopped throughout",
      "Windowsills and reachable interior glass as needed",
      "A fresh start for landlords, sellers, and buyers",
    ],
    benefits: [
      "Homes ready for keys, showings, or move-in day",
      "Detail work that empty spaces make possible",
      "Support for landlords, realtors, and families",
      "Custom quotes based on home size and condition",
    ],
    faqs: [
      {
        question: "Should the home be empty before move-out cleaning?",
        answer:
          "An empty or nearly empty home allows the most thorough results. If some items remain, tell us during the quote so we can set expectations.",
      },
      {
        question: "Do you clean for both move-in and move-out?",
        answer:
          "Yes. We help outgoing residents leave a space ready and help incoming residents start fresh in a clean home.",
      },
    ],
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    shortName: "Office Cleaning",
    category: "commercial",
    metaTitle: `Office Cleaning ${business.address.state} | ${business.shortName}`,
    metaDescription: `Professional office cleaning in ${region}. Workspaces, restrooms, and common areas kept polished. Call ${business.phoneDisplay} for a quote.`,
    h1: `Office Cleaning in ${region}`,
    intro: `A clean office supports focus, professionalism, and first impressions. ${business.legalName} provides office cleaning across ${business.serviceRegion} with the same attention to detail we bring to residential work.`,
    includes: [
      "Workstations, desks, and shared surfaces",
      "Kitchenette and breakroom cleaning",
      "Restroom sanitizing and restocking coordination as requested",
      "Vacuuming and mopping of office floors",
      "Trash and recycling removal",
      "Reception and common-area presentation",
      "Flexible before-hours or after-hours scheduling when available",
      "Recurring or as-needed commercial visits",
    ],
    benefits: [
      "A polished workplace for staff and visitors",
      "Reliable schedules that respect business hours",
      "Detail-focused commercial care",
      "Personalized plans for offices of different sizes",
    ],
    faqs: [
      {
        question: "Can you clean outside business hours?",
        answer:
          "When availability allows, we can schedule before-hours or after-hours cleaning so your team is not interrupted.",
      },
      {
        question: "Do you clean small offices as well as larger suites?",
        answer:
          "Yes. We tailor the scope to your square footage, restrooms, kitchenettes, and how often the space is used.",
      },
    ],
  },
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    shortName: "Commercial",
    category: "commercial",
    metaTitle: `Commercial Cleaning ${business.address.state} | ${business.shortName}`,
    metaDescription: `Commercial cleaning for offices and light commercial spaces in ${region}. Personalized service and custom quotes. Call ${business.phoneDisplay}.`,
    h1: `Commercial Cleaning in ${region}`,
    intro: `${business.legalName} supports businesses across ${business.serviceRegion} with commercial cleaning that is detailed, dependable, and tailored to each property. From offices to light commercial spaces, we help your business present its best every day.`,
    includes: [
      "Offices, suites, and professional workspaces",
      "Common areas, lobbies, and shared spaces",
      "Restroom cleaning and sanitizing",
      "Breakrooms and kitchenettes",
      "Floor care — vacuuming and mopping",
      "High-touch surface attention",
      "Recurring maintenance or periodic deep cleans",
      "Clear communication with property or office contacts",
    ],
    benefits: [
      "Commercial spaces that reflect your brand standards",
      "Flexible plans for different business needs",
      "The same personalized care as our residential clients",
      "Quotes based on size, traffic, and service scope",
    ],
    faqs: [
      {
        question: "What types of commercial spaces do you clean?",
        answer:
          "We focus on offices and light commercial spaces. Share your property type and needs when you call and we'll confirm fit and scope.",
      },
      {
        question: "Is commercial cleaning available on a recurring schedule?",
        answer:
          "Yes. Many commercial clients prefer recurring service, while others book periodic deep cleans. We'll recommend a cadence during your quote.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceSlugs() {
  return services.map((service) => service.slug);
}

export function getRelatedServices(slug: string, limit = 3) {
  const current = getServiceBySlug(slug);
  if (!current) return services.slice(0, limit);
  const sameCategory = services.filter(
    (service) => service.slug !== slug && service.category === current.category
  );
  const others = services.filter(
    (service) => service.slug !== slug && service.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}
