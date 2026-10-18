import Link from 'next/link';
import { FolderOpen, ArrowRight, Check, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects, conceptBlueprints } from '@/lib/portfolio';
import { servicePath } from '@/lib/services';

/**
 * Homepage Section H — Featured Work / Portfolio.
 * Displays real projects when `projects` has entries; otherwise displays an
 * honest "Our portfolio is growing" notice alongside clearly labelled
 * illustrative concept blueprints (never represented as real client work).
 */
export default function PortfolioSection() {
  const hasRealProjects = Array.isArray(projects) && projects.length > 0;

  return (
    <section className="section bg-mist" aria-labelledby="portfolio-heading">
      <div className="container-site">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="portfolio-heading"
            eyebrow="Featured work & blueprints"
            title={hasRealProjects ? 'Selected client projects' : 'Our portfolio is growing'}
            intro={
              hasRealProjects
                ? 'A look at websites and digital marketing systems we have delivered.'
                : 'We are currently curating verified client case studies for publication. Because we never publish invented clients, metrics, or testimonials, below are illustrative project blueprints showing how we scope and deliver common engagements.'
            }
          />
          <Link href="/contact/" className="btn btn-primary shrink-0 self-start lg:self-auto">
            Discuss Your Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {hasRealProjects ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.slug} className="card flex flex-col justify-between p-7">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-orbit-600 uppercase">{project.industry}</p>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{project.client}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{project.summary}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.services?.map((svc) => (
                    <span
                      key={svc}
                      className="rounded-full bg-orbit-50 px-3 py-1 text-xs font-medium text-orbit-700"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <>
            {/* Honest status banner */}
            <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-orbit-200 bg-white p-6 sm:flex-row sm:items-center sm:px-8">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orbit-50 text-orbit-600">
                  <FolderOpen className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-ink">
                    Our portfolio is growing — let&apos;s build something tailored to your business
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Every blueprint below is an illustrative concept of how we structure deliverables—not a claim of
                    past client results.
                  </p>
                </div>
              </div>
              <Link href="/contact/" className="link-underline shrink-0 text-sm">
                Request a tailored walkthrough →
              </Link>
            </div>

            {/* Clearly marked illustrative concept cards */}
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {conceptBlueprints.map((concept) => (
                <article key={concept.id} className="card reveal flex flex-col justify-between p-7 sm:p-8">
                  <div>
                    <p className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      {concept.label}
                    </p>
                    <h3 className="mt-5 text-xl font-semibold text-ink">{concept.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{concept.scenario}</p>

                    <p className="mt-6 text-xs font-semibold tracking-wider text-ink uppercase">
                      Typical scope &amp; deliverables
                    </p>
                    <ul className="mt-3 space-y-2.5 text-sm text-slate-700">
                      {concept.scope.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-organic-600" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-line pt-5 text-sm">
                    <Link href={servicePath(concept.relatedSlug)} className="link-underline">
                      Explore related service
                    </Link>
                    <Link href="/contact/" className="font-semibold text-ink hover:text-orbit-600">
                      Discuss this scope →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
