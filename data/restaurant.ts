/**
 * Central source of truth for all restaurant-specific content.
 *
 * Every field below is a PLACEHOLDER. Nothing here is a fabricated fact —
 * do not let a placeholder value ("[Restaurant Name]", "TODO", etc.) make
 * it into copy that reads as a real claim. Replace this whole object with
 * real, supplied restaurant data before treating the site as done.
 *
 * Components must only ever read from this file — never hardcode
 * restaurant-specific text inline in a component.
 */

export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  image?: string;
  featured?: boolean;
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
};

export type OpeningHoursRow = {
  days: string;
  open?: string;
  close?: string;
  closed?: boolean;
};

export type GalleryImage = {
  src: string;
  alt: string;
  /** Relative aspect weight for the editorial grid — "large" | "regular" */
  size?: "large" | "regular";
};

export type Testimonial = {
  quote: string;
  author: string;
  source?: string;
};

export type RestaurantData = {
  name: string;

  brand: {
    shortName: string;
    tagline: string;
    description: string;
  };

  location: {
    address: string;
    city: string;
    country: string;
    /** Google Maps / directions URL — only set once a real, valid URL exists */
    mapsUrl?: string;
    latitude?: number;
    longitude?: number;
  };

  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };

  hours: OpeningHoursRow[];

  social: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };

  hero: {
    title: string;
    subtitle: string;
    image: string;
  };

  about: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
  };

  menu: {
    categories: MenuCategory[];
  };

  signatureDish?: {
    name: string;
    description: string;
    price?: string;
    image: string;
  };

  gallery: GalleryImage[];

  /**
   * Only populate with testimonials the restaurant has explicitly
   * approved for use. Leave empty (not fabricated) until then — the
   * TestimonialsSection component omits itself when this is empty.
   */
  testimonials: Testimonial[];

  /**
   * How the primary "Reserve a Table" CTA behaves. Exactly one of these
   * should be set — reservationUrl takes priority if present, falling
   * back to tel:, then mailto:. No fabricated booking system.
   */
  reservation: {
    reservationUrl?: string;
    phone?: string;
    email?: string;
  };

  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
};

export const restaurant: RestaurantData = {
  name: "Ma Der Kin Khao ມາເດີกินข้าว | Authentic Thai and Lao Restaurant in Singapore",

  brand: {
    shortName: "Ma Der Kin Khao",
    tagline: "[One-line tagline — TODO, replace with real positioning]",
    description:
      "[Two to three sentence description of the restaurant — replace with factual, supplied information.]",
  },

  location: {
    address: "371 Beach Rd, B1-22 City Gate, Singapore 199597",
    city: "[City]",
    country: "[Country]",
    // mapsUrl intentionally omitted — only add once a real, valid URL exists.
  },

  contact: {
    phone: undefined,
    email: undefined,
    website: undefined,
  },

  hours: [
    { days: "Monday", closed: true },
    { days: "Tuesday", open: "TODO", close: "TODO" },
    { days: "Wednesday", open: "TODO", close: "TODO" },
    { days: "Thursday", open: "TODO", close: "TODO" },
    { days: "Friday", open: "TODO", close: "TODO" },
    { days: "Saturday", open: "TODO", close: "TODO" },
    { days: "Sunday", closed: true },
  ],

  social: {},

  hero: {
    title: "[Restaurant Name]",
    subtitle: "[Short subtitle describing cuisine + location]",
    image: "/images/hero-placeholder.jpg",
  },

  about: {
    eyebrow: "OUR STORY",
    title: "[Short, specific headline about the restaurant's approach]",
    description:
      "[Factual paragraph about the restaurant — no invented history, chef names, or awards.]",
    image: "/images/about-placeholder.jpg",
  },

  menu: {
    categories: [
      {
        name: "[Category — e.g. Starters]",
        items: [
          {
            name: "[Dish name]",
            description: "[Short factual description]",
            price: "[Price]",
          },
        ],
      },
    ],
  },

  // signatureDish intentionally omitted until a real signature dish is supplied.

  gallery: [
    // { src: "/images/gallery-1.jpg", alt: "TODO", size: "large" },
  ],

  testimonials: [],

  reservation: {
    // Set exactly one of reservationUrl / phone / email once known.
  },

  seo: {
    title: "Ma Der Kin Khao — B1-22 City Gate, Singapore",
    description: "[SEO description — factual, under ~160 characters]",
  },
};
