import type { TaskKey } from '@/lib/site-config'

export type TaskPageVoice = {
  eyebrow: string
  headline: string
  description: string
  filterLabel: string
  secondaryNote: string
  chips: string[]
}

export const taskPageVoices = {
  article: {
    eyebrow: 'Business guides',
    headline: 'Helpful guides for choosing local service providers.',
    description: 'Read practical explainers, comparison notes, and service guidance that help customers make better local decisions.',
    filterLabel: 'Choose guide topic',
    secondaryNote: 'Readable advice that supports better service discovery.',
    chips: ['Service advice', 'Customer guidance', 'Local decisions'],
  },
  classified: {
    eyebrow: 'Local offers',
    headline: 'Classified posts for local offers, availability, and requests.',
    description: 'Scan quick posts from local businesses and customers with practical contact paths and short summaries.',
    filterLabel: 'Filter offer category',
    secondaryNote: 'Short, direct, and action-oriented local posts.',
    chips: ['Offers', 'Availability', 'Quick action'],
  },
  sbm: {
    eyebrow: 'Saved resources',
    headline: 'Useful business resources and service bookmarks.',
    description: 'Browse saved links, references, and local resource collections connected to service discovery.',
    filterLabel: 'Filter resource category',
    secondaryNote: 'Curated resources for customers and business owners.',
    chips: ['Resources', 'References', 'Collections'],
  },
  profile: {
    eyebrow: 'Provider profiles',
    headline: 'Profiles with identity, reputation, and contact context.',
    description: 'Find people, teams, and providers with clear summaries and useful trust signals.',
    filterLabel: 'Filter profile category',
    secondaryNote: 'Make identity and credibility easy to scan.',
    chips: ['Identity', 'Trust', 'Provider cards'],
  },
  pdf: {
    eyebrow: 'Document library',
    headline: 'Documents, menus, brochures, and service resources.',
    description: 'Open downloadable files that support business listings, service menus, and customer decisions.',
    filterLabel: 'Filter document type',
    secondaryNote: 'Document cards show file context and clear open actions.',
    chips: ['Brochures', 'Menus', 'Documents'],
  },
  listing: {
    eyebrow: 'Business directory',
    headline: 'Top local businesses ready for enquiries.',
    description: 'Compare service providers by location, category, summary, trust cues, and quick contact actions.',
    filterLabel: 'Filter business category',
    secondaryNote: 'Prioritize service type, location, and direct enquiry paths.',
    chips: ['Verified providers', 'Compare quickly', 'Contact directly'],
  },
  image: {
    eyebrow: 'Business gallery',
    headline: 'Photos from providers, venues, services, and completed work.',
    description: 'Browse service images and gallery posts that help customers inspect quality before contacting a business.',
    filterLabel: 'Filter visual category',
    secondaryNote: 'Let real service work and business photos carry the page.',
    chips: ['Gallery', 'Portfolio', 'Service photos'],
  },
} satisfies Record<TaskKey, TaskPageVoice>
