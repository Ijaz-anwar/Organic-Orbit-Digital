import Breadcrumbs from './Breadcrumbs';

/**
 * Light-themed hero used at the top of every inner page.
 * Provides the page's single H1, breadcrumbs, and an optional action area.
 */
export default function PageHero({ eyebrow, title, intro, breadcrumbs, children, icon: Icon }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-gradient-to-b from-mist via-mist/70 to-white text-ink">
      <div className="bg-grid-light absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute -top-32 -left-24 -z-10 h-80 w-80 rounded-full bg-orbit-200/40 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 -bottom-40 -z-10 h-96 w-96 rounded-full bg-organic-200/30 blur-3xl" aria-hidden="true" />
      {/* subtle light orbit rings */}
      <div className="absolute top-1/2 -right-40 -z-10 hidden h-[34rem] w-[34rem] -translate-y-1/2 md:block" aria-hidden="true">
        <div className="orbit-ring-spin absolute inset-0 rounded-full border border-dashed border-orbit-200/80" />
        <div className="absolute inset-16 rounded-full border border-orbit-200/60" />
        <div className="absolute inset-32 rounded-full border border-orbit-100" />
        <span className="absolute top-16 left-24 h-2.5 w-2.5 rounded-full bg-organic-500 shadow-[0_0_14px_3px_rgb(57_201_133/0.35)]" />
        <span className="absolute bottom-24 left-8 h-2 w-2 rounded-full bg-orbit-500 shadow-[0_0_14px_3px_rgb(65_105_245/0.4)]" />
      </div>

      <div className="container-site relative py-14 sm:py-18 lg:py-22">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} tone="light" />}
        <div className="mt-7 max-w-3xl">
          {eyebrow && (
            <p className="eyebrow rounded-full border border-orbit-100 bg-white px-3.5 py-1 shadow-2xs">
              {Icon && <Icon className="h-4 w-4 text-orbit-600" aria-hidden="true" />}
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 text-4xl leading-[1.1] font-bold text-ink sm:text-5xl lg:text-[3.35rem]">{title}</h1>
          {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
