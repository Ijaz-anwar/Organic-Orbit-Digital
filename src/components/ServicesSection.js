import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import SectionHeading from './SectionHeading';
import { services } from '@/lib/services';

/**
 * Grid of all five services. Used on the homepage and services overview.
 */
export default function ServicesSection({
  eyebrow = 'What we do',
  title = 'Connected services for every stage of online growth',
  intro = 'Each service stands on its own, but they work best together. Your website, search visibility, social presence and advertising should reinforce each other, not compete for attention.',
  showHeading = true,
  className = 'bg-mist',
}) {
  return (
    <section className={`section relative ${className}`} aria-labelledby={showHeading ? 'services-heading' : undefined}>
      <div className="bg-dots-light absolute inset-x-0 top-0 h-72 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="container-site relative">
        {showHeading && (
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading id="services-heading" eyebrow={eyebrow} title={title} intro={intro} />
            <Link href="/services/" className="btn btn-outline shrink-0 self-start lg:self-auto">
              All services overview <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
        <div className={`${showHeading ? 'mt-14' : ''} grid gap-6 md:grid-cols-2 lg:grid-cols-6`}>
          {services.map((s, i) => (
            <div key={s.slug} className={`reveal ${i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
              <ServiceCard service={s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
