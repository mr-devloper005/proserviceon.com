'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Building2, LogIn, LogOut, Menu, PlusCircle, Search, UserCircle, UserPlus, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const brandName = globalContent.site.name
  const listingRoute = SITE_CONFIG.taskViews.listing || SITE_CONFIG.tasks.find((task) => task.key === 'listing')?.route || '/listings'
  const navVars = {
    '--editable-nav-bg': '#ffffff',
    '--editable-nav-text': '#151827',
    '--editable-nav-accent': '#ff6b2b',
    '--editable-nav-dark': '#2d275b',
    '--editable-search-bg': '#f6f7fa',
    '--editable-border': 'rgba(21,24,39,0.12)',
    '--editable-container': '1180px',
  } as CSSProperties
  const navItems = useMemo(
    () => [
      { label: 'Find Experts', href: listingRoute },
      { label: 'Search', href: '/search' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    [listingRoute]
  )

  const authItems = session
    ? [{ label: 'Create Listing', href: '/create' }]
    : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }]

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)]/95 text-[var(--editable-nav-text)] backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[68px] w-full max-w-[var(--editable-container)] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--editable-border)] bg-white lg:hidden" aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link href="/" className="group flex shrink-0 items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-white">
            <img src="/favicon.png?v=20260413" alt={brandName} className="h-8 w-8 object-contain" />
          </span>
          <span className="min-w-0">
            <span className="block max-w-[180px] truncate text-xl font-extrabold tracking-tight text-[var(--editable-nav-accent)]">{brandName}</span>
            <span className="hidden max-w-[190px] truncate text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 sm:block">{globalContent.nav.tagline}</span>
          </span>
        </Link>

        <form action="/search" className="mx-auto hidden min-w-0 flex-1 justify-center md:flex">
          <label className="relative flex h-11 w-full max-w-[390px] items-center rounded-md border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3">
            <Search className="h-4 w-4 text-slate-500" />
            <input name="q" type="search" placeholder="Find a service" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-500" />
          </label>
        </form>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-md px-3 py-2 text-sm font-bold transition ${active ? 'bg-orange-50 text-[var(--editable-nav-accent)]' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link href="/create" className="hidden h-10 items-center gap-2 rounded-md bg-[var(--editable-nav-dark)] px-4 text-sm font-extrabold text-white shadow-sm sm:inline-flex">
            <Building2 className="h-4 w-4" /> List Your Business <span className="rounded bg-[var(--editable-nav-accent)] px-1.5 py-0.5 text-[10px]">FREE</span>
          </Link>
          {session ? (
            <div className="hidden items-center gap-2 sm:flex">
              <span className="inline-flex max-w-[170px] items-center gap-2 rounded-md border border-[var(--editable-border)] bg-white px-3 py-2 text-sm font-bold text-slate-800">
                <UserCircle className="h-4 w-4 text-slate-500" />
                <span className="truncate">{session.name}</span>
              </span>
              <button type="button" onClick={logout} className="inline-flex h-10 items-center gap-2 rounded-md border border-[var(--editable-border)] bg-white px-3 text-sm font-bold text-slate-700 hover:text-slate-950"><LogOut className="h-4 w-4" /> Logout</button>
            </div>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <Link href="/login" className="inline-flex h-10 items-center gap-2 rounded-md border border-[var(--editable-border)] bg-white px-3 text-sm font-bold text-slate-700"><LogIn className="h-4 w-4" /> Login</Link>
              <Link href="/signup" className="inline-flex h-10 items-center gap-2 rounded-md bg-[var(--editable-nav-accent)] px-3 text-sm font-extrabold text-white"><UserPlus className="h-4 w-4" /> Sign up</Link>
            </div>
          )}
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-white px-4 py-4 lg:hidden">
          <form action="/search" className="mb-3 flex rounded-md border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2">
            <Search className="mt-1 h-4 w-4 text-slate-500" />
            <input name="q" type="search" placeholder="Find a service" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold text-slate-900 outline-none" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, ...authItems].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-bold">
                {item.label}
              </Link>
            ))}
            {session ? (
              <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-md border border-[var(--editable-border)] bg-white px-4 py-3 text-left text-sm font-bold">
                Logout {session.name}
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
