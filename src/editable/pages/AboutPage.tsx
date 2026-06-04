import { pagesContent } from '@/editable/content/pages.content'
import { globalContent } from '@/editable/content/global.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { Building2, CheckCircle2, MapPin, Search } from 'lucide-react'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#fffaf3)] px-4 py-10 text-[var(--editable-page-text,#241915)] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[var(--editable-container)] gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-lg border border-[var(--editable-border)] bg-white p-7 shadow-sm lg:p-9">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff5f2a]">{pagesContent.about.badge}</p>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">About {globalContent.site.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">{pagesContent.about.description}</p>
            <div className="mt-7 space-y-4 text-sm leading-8 text-slate-600">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[['Search', 'Find services by need'], ['Compare', 'Review listing details'], ['Contact', 'Call or enquire directly']].map(([title, body], index) => {
                const Icon = index === 0 ? Search : index === 1 ? CheckCircle2 : MapPin
                return (
                  <div key={title} className="rounded-lg bg-[#f7f8fb] p-4">
                    <Icon className="h-5 w-5 text-[#ff5f2a]" />
                    <p className="mt-3 text-sm font-extrabold">{title}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-600">{body}</p>
                  </div>
                )
              })}
            </div>
          </article>
          <aside className="space-y-4">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="rounded-lg border border-[var(--editable-border)] bg-white p-5 shadow-sm">
                <Building2 className="h-5 w-5 text-[#ff5f2a]" />
                <h2 className="mt-3 text-xl font-extrabold tracking-tight">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
