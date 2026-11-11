export type BeforeAfterPair = {
  id: string;
  label: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
};

export type GalleryImage = {
  src: string;
  alt: string;
  className?: string;
};

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: "toilet",
    label: "Bathroom",
    before: {
      src: "/work/toilet-before.jpg",
      alt: "Toilet before professional cleaning",
    },
    after: {
      src: "/work/toilet-after.jpg",
      alt: "Toilet after Grace Living deep clean",
    },
  },
  {
    id: "fan",
    label: "Ceiling fan",
    before: {
      src: "/work/fan-before.jpg",
      alt: "Dusty ceiling fan before cleaning",
    },
    after: {
      src: "/work/fan-after.jpg",
      alt: "Ceiling fan after detailed dusting",
    },
  },
  {
    id: "stove",
    label: "Stovetop",
    before: {
      src: "/work/stove-before.jpg",
      alt: "Greasy stovetop before cleaning",
    },
    after: {
      src: "/work/stove-after.jpg",
      alt: "Polished stainless stovetop after cleaning",
    },
  },
  {
    id: "oven",
    label: "Oven",
    before: {
      src: "/work/oven-before.jpg",
      alt: "Oven interior before deep cleaning",
    },
    after: {
      src: "/work/oven-after.jpg",
      alt: "Oven interior after professional cleaning",
    },
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/work/living-suite.jpg",
    alt: "Freshly cleaned open living suite ready for guests",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/work/living-kitchen.jpg",
    alt: "Bright living room and kitchen after detailed cleaning",
  },
  {
    src: "/work/bedroom-master.jpg",
    alt: "Master bedroom with crisp linens after cleaning",
  },
  {
    src: "/work/bedroom-green.jpg",
    alt: "Bedroom with vacuum lines after professional service",
  },
  {
    src: "/work/bedroom-guest.jpg",
    alt: "Guest bedroom with twin beds after turnover cleaning",
  },
  {
    src: "/work/kitchen-clean.jpg",
    alt: "Spotless kitchen counters and range after cleaning",
    className: "md:col-span-2",
  },
];

export const heroImage = {
  src: "/work/living-kitchen.jpg",
  alt: "Bright, freshly cleaned living room and kitchen",
} as const;

export const aboutImage = {
  src: "/work/bedroom-master.jpg",
  alt: "Professionally cleaned master bedroom",
} as const;

export const teamImage = {
  src: "/work/kitchen-clean.jpg",
  alt: "Clean modern kitchen after Grace Living service",
} as const;

export const facebookPosts = [
  {
    href: "https://www.facebook.com/permalink.php?story_fbid=pfbid0EWaUZYviZaEZGhHZ5Dj7W13vCEjCb9vYpBE75kop6RAEX7wwVCnLZvyEUCr6WjLul&id=100076133720244",
    height: 329,
  },
  {
    href: "https://www.facebook.com/permalink.php?story_fbid=pfbid02Tmk4kUz9oL5t88aShzsCQtTwGL6pVXXXdQutdBTSz5QoV8XtHwxB7thSJRSQrzdzl&id=100076133720244",
    height: 329,
  },
  {
    href: "https://www.facebook.com/permalink.php?story_fbid=pfbid06cDtvxJcCKCNPLsxgc4iGdb6FAaW5bUEFCFd7HgXiUa2zsKY9QrddVsy758E7Fb1l&id=100076133720244",
    height: 562,
  },
] as const;
