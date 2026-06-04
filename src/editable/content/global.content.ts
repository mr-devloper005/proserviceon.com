import { slot4BrandConfig } from '@/editable/theme/brand.config'

const brandName = slot4BrandConfig.siteName

export const globalContent = {
  site: {
    name: brandName,
    tagline: slot4BrandConfig.tagline || 'Find trusted local businesses faster',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: '',
    primaryLinks: [
      { label: 'Find Experts', href: '/listings' },
      { label: 'List Business', href: '/create' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'List Your Business', href: '/create' },
      secondary: { label: 'Search Services', href: '/search' },
    },
  },
  footer: {
    tagline: 'One place to find and compare local service providers',
    description: `${brandName} helps visitors discover verified local businesses, compare service details, and contact providers for quotes, visits, appointments, and enquiries.`,
    columns: [
      {
        title: 'Popular Categories',
        links: [
          { label: 'Home Services', href: '/listings?category=home-services' },
          { label: 'Business Services', href: '/listings?category=business-services' },
          { label: 'Education & Training', href: '/listings?category=education' },
          { label: 'Events & Wedding', href: '/listings?category=events' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Search', href: '/search' },
          { label: 'Create Listing', href: '/create' },
        ],
      },
    ],
    bottomNote: `Built for practical local discovery on ${brandName}.`,
  },
  commonLabels: {
    readMore: 'View details',
    viewAll: 'View all',
    explore: 'Explore services',
    latest: 'Latest listings',
    related: 'Similar experts',
    published: 'Available now',
  },
} as const
