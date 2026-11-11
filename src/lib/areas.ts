import { business } from "./business";
import { services } from "./services";

export type AreaOverride = {
  intro?: string;
  extra?: string;
};

export type CityRecord = {
  name: string;
  slug: string;
  county: string;
  state: "TN";
  isHq?: boolean;
  priority?: number;
  override?: AreaOverride;
};

function slugifyCity(name: string) {
  return `${name
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}-tn`;
}

const countyCities: Record<string, string[]> = {
  "Williamson County": [
    "Franklin",
    "Brentwood",
    "Thompson's Station",
    "Spring Hill",
    "Nolensville",
    "Fairview",
    "College Grove",
    "Arrington",
    "Leiper's Fork",
  ],
  "Rutherford County": [
    "Murfreesboro",
    "Smyrna",
    "La Vergne",
    "Eagleville",
    "Christiana",
  ],
  "Davidson County": [
    "Nashville",
    "Belle Meade",
    "Berry Hill",
    "Forest Hills",
    "Oak Hill",
    "Bellevue",
    "Green Hills",
    "Antioch",
    "Madison",
    "Goodlettsville",
    "Donelson",
    "Hermitage",
    "Inglewood",
    "East Nashville",
    "West Nashville",
    "Sylvan Park",
  ],
};

const overrides: Record<string, AreaOverride> = {
  Franklin: {
    intro: `${business.legalName} is proudly based in Franklin, Tennessee, providing detailed residential and commercial cleaning for neighbors throughout Williamson County and Greater Nashville. From recurring house cleaning to deep cleans, Airbnb turnovers, and office care, Franklin homes and businesses trust our personalized approach.`,
    extra:
      "Franklin’s mix of historic neighborhoods, new developments, and busy professional households means every clean is tailored — never one-size-fits-all. Whether you need biweekly maintenance near Cool Springs or a move-out clean closer to downtown Franklin, we schedule by appointment and build the quote around your property.",
  },
  Nashville: {
    intro: `Looking for trusted house and commercial cleaning in Nashville? ${business.legalName} serves homes, Airbnbs, and offices across Davidson County with the same detail-focused care that defines our Franklin-based team.`,
    extra:
      "Nashville properties range from East Nashville bungalows to Green Hills residences and short-term rentals near popular corridors. Tell us about your neighborhood, property type, and timing — we’ll craft a personalized quote and visit plan.",
  },
  Murfreesboro: {
    intro: `${business.legalName} provides residential and commercial cleaning in Murfreesboro and across Rutherford County. Families, landlords, and offices count on our thorough, personalized service.`,
    extra:
      "Murfreesboro’s growth means more busy households and rental turnovers that need dependable cleaning. We commonly support recurring biweekly and monthly plans, deep cleans for new clients, and move-in / move-out resets.",
  },
  Brentwood: {
    intro: `Brentwood homeowners choose ${business.legalName} for discreet, detail-oriented residential cleaning — including deep cleans and recurring maintenance that protect beautiful spaces.`,
    extra:
      "From larger homes to busy family schedules, Brentwood clients appreciate clear communication and a customized scope. Call us and we’ll tailor the visit to your property’s size and condition.",
  },
  "Thompson's Station": {
    intro: `${business.legalName} proudly serves Thompson's Station with residential cleaning, deep cleans, recurring plans, and move-related services for growing Williamson County households.`,
    extra:
      "Thompson's Station families often need flexible appointment-based cleaning that fits school and work calendars. We’re nearby in Franklin and ready to help with personalized quotes.",
  },
  "Spring Hill": {
    intro: `Spring Hill residents and businesses rely on ${business.legalName} for thorough house cleaning, deep cleans, and recurring residential service across the Williamson and Maury corridor.`,
    extra:
      "Whether you’re establishing a monthly clean or need a move-in reset in a new build, we customize every quote for Spring Hill properties.",
  },
  Smyrna: {
    intro: `${business.legalName} offers residential and light commercial cleaning in Smyrna, with flexible scheduling for busy Rutherford County households and offices.`,
    extra:
      "Smyrna clients often request recurring cleaning and Airbnb or rental turnovers. Share your property details and preferred cadence when you call.",
  },
};

export const cities: CityRecord[] = Object.entries(countyCities).flatMap(
  ([county, names]) =>
    names.map((name) => {
      const record: CityRecord = {
        name,
        slug: slugifyCity(name),
        county,
        state: "TN",
      };
      if (name === "Franklin") {
        record.isHq = true;
        record.priority = 1;
      } else if (name === "Nashville") {
        record.priority = 2;
      } else if (name === "Murfreesboro") {
        record.priority = 3;
      } else if (
        ["Brentwood", "Thompson's Station", "Spring Hill", "Smyrna"].includes(
          name
        )
      ) {
        record.priority = 4;
      }
      if (overrides[name]) {
        record.override = overrides[name];
      }
      return record;
    })
);

export const counties = Object.keys(countyCities);

export function getCitiesByCounty() {
  return counties.map((county) => ({
    county,
    cities: cities.filter((city) => city.county === county),
  }));
}

export function getCityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export function getCitySlugs() {
  return cities.map((city) => city.slug);
}

export function getTopCities(limit = 8) {
  return [...cities]
    .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99))
    .slice(0, limit);
}

export function getNearbyCities(slug: string, limit = 6) {
  const current = getCityBySlug(slug);
  if (!current) return getTopCities(limit);
  const sameCounty = cities.filter(
    (city) => city.slug !== slug && city.county === current.county
  );
  const others = cities.filter(
    (city) => city.slug !== slug && city.county !== current.county
  );
  return [...sameCounty, ...others].slice(0, limit);
}

export function getDefaultCityIntro(city: CityRecord) {
  return (
    city.override?.intro ??
    `Looking for trusted residential and commercial cleaning in ${city.name}? ${business.legalName} provides detailed, personalized cleaning for homes and businesses across ${city.name} and ${city.county} — with custom quotes and service by appointment.`
  );
}

export function getCityMetaTitle(city: CityRecord) {
  return `House Cleaning ${city.name} ${city.state} | ${business.shortName}`;
}

export function getCityMetaDescription(city: CityRecord) {
  return `Professional house cleaning in ${city.name}, ${city.state}. Residential, deep clean, Airbnb, move-out & office cleaning. Call ${business.phoneDisplay} for a custom quote.`;
}

export function getCityH1(city: CityRecord) {
  return `House Cleaning in ${city.name}, ${city.state}`;
}

export function getFeaturedServicesForCity() {
  return services.slice(0, 4);
}
