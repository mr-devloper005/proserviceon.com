import { slot4BrandConfig } from '@/editable/theme/brand.config'

const brandName = slot4BrandConfig.siteName

export const pagesContent = {
  home: {
    metadata: {
      title: 'Find trusted local businesses and service experts',
      description: 'Search local business listings, compare providers, and contact verified service experts for home, education, events, repairs, and professional services.',
      openGraphTitle: 'Find trusted local businesses and service experts',
      openGraphDescription: 'A business listing directory built for quick service discovery, comparisons, enquiries, and local growth.',
      keywords: ['business listing', 'local services', 'service experts', 'business directory', 'find local providers'],
    },
    hero: {
      badge: 'Trusted directory',
      title: ['Fast, simple way to find', 'trusted service experts.'],
      description: 'Search by service or location, compare useful business details, and connect with local providers who are ready to help.',
      primaryCta: { label: 'Find experts', href: '/listings' },
      secondaryCta: { label: 'List your business', href: '/create' },
      searchPlaceholder: 'Find cleaning, catering, tuition, repairs, events...',
      focusLabel: 'Popular services',
      featureCardBadge: 'local discovery',
      featureCardTitle: 'Compare businesses before you call.',
      featureCardDescription: 'Ratings, service categories, locations, contact options, and quick actions stay visible where customers need them.',
    },
    intro: {
      badge: 'Why people use us',
      title: 'A cleaner directory experience for finding dependable local providers.',
      paragraphs: [
        `${brandName} brings business listings, service categories, contact details, and enquiry actions into one easy browsing flow.`,
        'Visitors can scan providers by location, service type, profile strength, and available contact options without moving through stretched or cluttered pages.',
        'Businesses get a practical listing surface built for discovery, enquiries, and trust signals instead of generic content cards.',
      ],
      sideBadge: 'Directory promise',
      sidePoints: [
        'Service-first homepage with clear search and category cards.',
        'Compact listing grids designed for comparison and quick action.',
        'Detail pages with phone, chat, directions, services, gallery, and similar experts.',
        'Readable forms with visible text, clear labels, and practical submission copy.',
      ],
      primaryLink: { label: 'Browse listings', href: '/listings' },
      secondaryLink: { label: 'Contact support', href: '/contact' },
    },
    cta: {
      badge: 'Grow locally',
      title: 'Put your business where customers are already searching.',
      description: 'Create a listing with your services, location, images, contact details, and a clear reason for customers to enquire.',
      primaryCta: { label: 'Create a listing', href: '/create' },
      secondaryCta: { label: 'Search services', href: '/search' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse recently added service providers and business profiles.',
    },
  },
  about: {
    badge: 'About the directory',
    title: `Helping customers find the right local business on ${brandName}.`,
    description: `${brandName} is a business listing directory built for people who want quick discovery, trustworthy details, and direct contact with local service experts.`,
    paragraphs: [
      'We organize providers by service category, location, and useful business context so customers can compare options before making a call or sending an enquiry.',
      'Every page is shaped around practical decisions: what the business does, where it serves, how to contact them, and why a customer might choose them.',
      'For business owners, the platform creates a focused listing presence with room for services, photos, descriptions, contact details, and credibility cues.',
    ],
    values: [
      {
        title: 'Discovery that feels quick',
        description: 'Service categories, search, and compact cards help customers move from need to shortlist without visual clutter.',
      },
      {
        title: 'Business details that matter',
        description: 'Listings highlight location, contact paths, summaries, services, images, and similar experts in a consistent layout.',
      },
      {
        title: 'Local growth without complexity',
        description: 'The create flow keeps listing submissions focused on the information customers actually use when choosing a provider.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${brandName}`,
    title: 'Need help listing, updating, or finding a business?',
    description: 'Send a message about business onboarding, listing edits, category requests, partnerships, or support. We will route your request to the right directory workflow.',
    formTitle: 'Send a directory request',
  },

  search: {
    metadata: {
      title: 'Search local businesses',
      description: 'Search business listings, service categories, locations, and provider profiles.',
    },
    hero: {
      badge: 'Search services',
      title: 'Find local businesses by service, category, or location.',
      description: 'Use search to shortlist providers for home services, events, education, repairs, professional work, and everyday local needs.',
      placeholder: 'Search service, business name, city, or category',
    },
    resultsTitle: 'Latest business listings',
  },
  create: {
    metadata: {
      title: 'Create a business listing',
      description: 'Create and submit a business listing for the directory.',
    },
    locked: {
      badge: 'Business owner access',
      title: 'Login to list your business.',
      description: 'Use your account to create a business listing with service details, location, images, contact information, and a customer-ready description.',
    },
    hero: {
      badge: 'Listing workspace',
      title: 'Create a clear business listing customers can act on.',
      description: 'Add your business name, category, service summary, website, image, and detailed description so customers can compare and enquire confidently.',
    },
    formTitle: 'Business listing details',
    submitLabel: 'Submit listing',
    successTitle: 'Listing saved successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login to manage business listings and enquiries.',
      badge: 'Member access',
      title: 'Welcome back to your business listing account.',
      description: 'Login to create listings, manage saved submissions, and keep your local business information ready for customers.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Create an account to submit business listings.',
      badge: 'Business owner access',
      title: 'Create an account and start listing your services.',
      description: 'Sign up to add business details, prepare listings, and make your services easier for local customers to find.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Similar experts',
      fallbackTitle: 'Business listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested providers',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Website',
    },
  },
} as const
