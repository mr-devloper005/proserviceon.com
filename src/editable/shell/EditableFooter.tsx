'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight, Building2, LogOut, Mail, MapPin, Search } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

const categoryRows = [
  ['Home Services', 'Cleaning Services', 'Packers and Movers', 'Interior Designers', 'Painting Contractors', 'Pest Control'],
  ['Education & Training', 'School Tuitions', 'Entrance Coaching', 'Overseas Education', 'Job Training', 'Colleges'],
  ['Events & Lifestyle', 'Catering Services', 'Event Organisers', 'Photographers', 'Marriage Halls', 'Beauty Services'],
  ['Business Needs', 'Security Guards', 'Building Contractors', 'AC Services', 'Architects', 'Consultants'],
]

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#f1f3f6', '--editable-footer-text': '#151827', '--editable-container': '1180px' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const brandName = globalContent.site.name

  return (
    <footer style={footerVars} className="border-t border-[var(--editable-border)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.75fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-[var(--editable-border)]">
                <img src="/favicon.png?v=20260413" alt={brandName} className="h-8 w-8 object-contain" />
              </span>
              <span>
                <span className="block text-xl font-extrabold tracking-tight text-[#ff5f2a]">{brandName}</span>
                <span className="block text-xs font-bold text-slate-500">{globalContent.footer.tagline}</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">{globalContent.footer.description}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/search" className="inline-flex items-center gap-2 rounded-md bg-[#2d275b] px-4 py-2 text-sm font-bold text-white"><Search className="h-4 w-4" /> Search services</Link>
              <Link href="/create" className="inline-flex items-center gap-2 rounded-md border border-[var(--editable-border)] bg-white px-4 py-2 text-sm font-bold"><Building2 className="h-4 w-4" /> List business</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold">Explore listing types</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {taskLinks.map((task) => (
                <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-950">
                  {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold">Company</h3>
            <div className="mt-4 grid gap-2">
              {[
                ['About', '/about'],
                ['Contact', '/contact'],
                ...(session ? [['Create Listing', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
              ].map(([label, href]) => (
                <Link key={href} href={href} className="text-sm font-semibold text-slate-600 hover:text-slate-950">{label}</Link>
              ))}
              {session ? <button type="button" onClick={logout} className="inline-flex items-center gap-2 text-left text-sm font-semibold text-slate-600 hover:text-slate-950"><LogOut className="h-4 w-4" /> Logout {session.name}</button> : null}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--editable-border)] pt-7">
          <h3 className="text-sm font-extrabold">Popular business categories</h3>
          <div className="mt-4 grid gap-5">
            {categoryRows.map(([title, ...links]) => (
              <div key={title} className="border-b border-[var(--editable-border)] pb-4 last:border-b-0">
                <p className="text-sm font-bold text-slate-950">{title}</p>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                  {links.map((label) => (
                    <Link key={label} href={`/search?q=${encodeURIComponent(label)}`} className="text-sm text-slate-600 hover:text-[#ff5f2a]">{label}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--editable-border)] pt-5 text-xs font-semibold text-slate-500">
          <span>Copyright {year} {brandName}. All rights reserved.</span>
          <span className="inline-flex items-center gap-4">
            <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Local service discovery</span>
            <span className="inline-flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> Support and listings</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
