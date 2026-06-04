import Link from 'next/link'
import { ArrowRight, BriefcaseBusiness, CheckCircle2, GraduationCap, Home, MapPin, Search, ShieldCheck, Sparkles, Star, Wrench } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { globalContent } from '@/editable/content/global.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const serviceGroups = [
  {
    title: 'Home Services',
    tone: 'bg-[#eaf8ed]',
    icon: Home,
    items: ['Cleaning', 'Packers & Movers', 'Interior Designers', 'Pest Control'],
  },
  {
    title: 'Education',
    tone: 'bg-[#fff0e4]',
    icon: GraduationCap,
    items: ['School Tuitions', 'Colleges', 'Job Training', 'Overseas Education'],
  },
  {
    title: 'Business Services',
    tone: 'bg-[#f2edff]',
    icon: BriefcaseBusiness,
    items: ['Security Guards', 'Consultants', 'Architects', 'AC Services'],
  },
]

const cityCards = ['Chennai', 'Bangalore', 'Delhi', 'Hyderabad', 'Mumbai', 'Pune', 'Kolkata', 'Ahmedabad']

const trustStats = [
  ['10k+', 'local searches supported'],
  ['500+', 'service categories'],
  ['24/7', 'business discovery access'],
]

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function serviceHref(label: string) {
  return `/search?q=${encodeURIComponent(label)}`
}

function DirectoryListingCard({ post, href }: { post: SitePost; href: string }) {
  const content = post.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const location = typeof content.location === 'string' ? content.location : typeof content.city === 'string' ? content.city : 'Local area'
  const phone = typeof content.phone === 'string' ? content.phone : typeof content.mobile === 'string' ? content.mobile : ''
  return (
    <article className="group grid gap-4 rounded-lg border border-[var(--editable-border)] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[126px_minmax(0,1fr)]">
      <Link href={href} className="relative aspect-[4/3] overflow-hidden rounded-md bg-[var(--slot4-media-bg)] sm:aspect-square">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </Link>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700"><CheckCircle2 className="h-3.5 w-3.5" /> Verified</span>
          <span className="inline-flex items-center gap-1 rounded bg-orange-50 px-2 py-1 text-xs font-bold text-orange-700"><Star className="h-3.5 w-3.5 fill-current" /> 4.8</span>
        </div>
        <Link href={href} className="mt-3 block text-xl font-extrabold leading-tight tracking-tight text-slate-950 hover:text-[#ff5f2a]">{post.title}</Link>
        <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-slate-600"><MapPin className="h-4 w-4 text-[#ff5f2a]" /> {location}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{getEditableExcerpt(post, 135)}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href={href} className="inline-flex h-10 items-center rounded-md bg-[#ff5f2a] px-4 text-sm font-extrabold text-white">Enquire Now</Link>
          {phone ? <a href={`tel:${phone}`} className="inline-flex h-10 items-center rounded-md border border-[var(--editable-border)] px-4 text-sm font-bold text-slate-700">Call</a> : null}
        </div>
      </div>
    </article>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ')
  return (
    <section className="bg-[#2d275b] text-white">
      <div className="mx-auto max-w-[1180px] px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-200">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{heroTitle}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/78">{pagesContent.home.hero.description}</p>
        </div>

        <form action="/search" className="mx-auto mt-9 grid max-w-3xl gap-0 overflow-hidden rounded-lg bg-white shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:grid-cols-[0.42fr_1fr_auto]">
          <label className="flex min-h-14 items-center gap-2 border-b border-slate-200 px-4 sm:border-b-0 sm:border-r">
            <MapPin className="h-5 w-5 text-slate-500" />
            <input name="location" placeholder="Your city" defaultValue="Kichha" className="min-w-0 flex-1 bg-transparent text-sm font-bold text-slate-950 outline-none placeholder:text-slate-500" />
          </label>
          <label className="flex min-h-14 items-center gap-2 px-4">
            <Search className="h-5 w-5 text-slate-500" />
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent text-sm font-bold text-slate-950 outline-none placeholder:text-slate-500" />
          </label>
          <button className="min-h-14 bg-[#ff5f2a] px-6 text-sm font-extrabold text-white" type="submit">Search</button>
        </form>

        <div className="-mb-36 mt-12 grid gap-4 md:grid-cols-3">
          {serviceGroups.map((group) => (
            <article key={group.title} className={`${group.tone} rounded-lg border border-white/50 p-5 text-slate-950 shadow-[0_18px_50px_rgba(0,0,0,0.16)]`}>
              <div className="flex items-center justify-center gap-2">
                <group.icon className="h-5 w-5 text-[#ff5f2a]" />
                <h2 className="text-base font-extrabold">{group.title}</h2>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {group.items.map((item) => (
                  <Link key={item} href={serviceHref(item)} className="rounded-md bg-white/70 px-3 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-[#ff5f2a]">{item}</Link>
                ))}
              </div>
              <Link href={primaryRoute} className="mx-auto mt-5 inline-flex items-center gap-1 text-sm font-extrabold text-[#3157ff]">View all <ArrowRight className="h-4 w-4" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 6)
  return (
    <section className="bg-white pt-40">
      <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className={dc.type.sectionTitle}>Discover major cities</h2>
            <p className="mt-2 text-sm font-semibold text-slate-600">Browse popular service providers by city.</p>
          </div>
          <Link href="/search" className="inline-flex items-center gap-2 rounded-md border border-[var(--editable-border)] bg-white px-4 py-2 text-sm font-bold">Search all cities <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {cityCards.map((city, index) => (
            <Link key={city} href={`/search?location=${encodeURIComponent(city)}`} className="group text-center">
              <div className="mx-auto flex aspect-square w-full max-w-[118px] items-center justify-center overflow-hidden rounded-lg bg-[#f1f3f6] ring-1 ring-[var(--editable-border)] transition group-hover:-translate-y-1 group-hover:shadow-lg">
                <span className="text-2xl font-extrabold text-[#2d275b]">{city.slice(0, 2)}</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-800">{city}</p>
            </Link>
          ))}
        </div>

        {railPosts.length ? (
          <div className="mt-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className={dc.type.sectionTitle}>Featured local businesses</h2>
                <p className="mt-2 text-sm font-semibold text-slate-600">A quick look at recently added providers and service experts.</p>
              </div>
              <Link href={primaryRoute} className="hidden text-sm font-extrabold text-[#ff5f2a] sm:inline-flex">View listings</Link>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {railPosts.map((post) => <DirectoryListingCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const serviceSections = [
    ['Overseas Education', 'Admission counsellors, university guidance, visa support, and training experts.'],
    ['Aviation Education', 'Pilot training, airport operations, cabin crew courses, and career programs.'],
    ['Home Improvement', 'Construction, architects, interiors, painting, and repair specialists.'],
    ['Wedding & Events', 'Caterers, planners, photographers, decorators, halls, and celebration services.'],
  ]
  return (
    <section className="bg-[#f7f8fb]">
      <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Service categories</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">Find the right provider without digging through wide pages.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">The homepage keeps popular categories compact, scannable, and action-led, following the business listing references without copying them directly.</p>
            <div className="mt-6 grid gap-3">
              {trustStats.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-[var(--editable-border)] bg-white p-4">
                  <p className="text-2xl font-extrabold text-[#ff5f2a]">{value}</p>
                  <p className="text-sm font-semibold text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceSections.map(([title, description], index) => (
              <article key={title} className="rounded-lg border border-[var(--editable-border)] bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-50 text-[#ff5f2a]">
                  {index === 0 ? <GraduationCap className="h-5 w-5" /> : index === 1 ? <Sparkles className="h-5 w-5" /> : index === 2 ? <Wrench className="h-5 w-5" /> : <ShieldCheck className="h-5 w-5" />}
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-slate-950">{title}</h3>
                <p className="mt-2 min-h-[54px] text-sm leading-6 text-slate-600">{description}</p>
                <Link href={serviceHref(title)} className="mt-5 inline-flex items-center gap-2 rounded-md border border-[#ff5f2a] px-4 py-2 text-sm font-bold text-[#ff5f2a]">Explore <ArrowRight className="h-4 w-4" /></Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const sourcePosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(6)
  const cards = sourcePosts.slice(0, 8)
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Directory archive</p>
            <h2 className={dc.type.sectionTitle}>Latest {taskLabel(primaryTask).toLowerCase()}</h2>
            <p className="mt-2 text-sm font-semibold text-slate-600">Compare businesses, open profiles, and send enquiries from one clean grid.</p>
          </div>
          <form action="/search" className="flex w-full max-w-md rounded-md border border-[var(--editable-border)] bg-white p-1 shadow-sm sm:w-auto">
            <input name="q" placeholder="Search a service" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold text-slate-950 outline-none" />
            <button className="inline-flex items-center gap-2 rounded-md bg-[#2d275b] px-4 py-2 text-sm font-bold text-white"><Search className="h-4 w-4" /> Search</button>
          </form>
        </div>
        {cards.length ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {cards.map((post) => <DirectoryListingCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
          </div>
        ) : (
          <div className="mt-6 rounded-lg border border-dashed border-[var(--editable-border)] bg-[#f7f8fb] p-8 text-center">
            <p className="text-lg font-extrabold">Listings will appear here after businesses are added.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="bg-[#fff7ef]">
      <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-lg border border-orange-100 bg-white p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className={`${dc.type.eyebrow} ${pal.accentText}`}>List your business</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">Help customers find your services on {globalContent.site.name}.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Add your category, service description, contact details, and image so visitors can shortlist you faster.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/create" className="inline-flex h-11 items-center justify-center rounded-md bg-[#ff5f2a] px-5 text-sm font-extrabold text-white">Create listing</Link>
            <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-md border border-[var(--editable-border)] bg-white px-5 text-sm font-bold text-slate-800">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
