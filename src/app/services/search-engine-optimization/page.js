import ServicePageTemplate from '@/components/ServicePageTemplate';
import { buildMetadata } from '@/lib/seo';
import { getServiceContent } from '@/lib/service-content';

const slug = 'search-engine-optimization';
const content = getServiceContent(slug);

export const metadata = buildMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: `/services/${slug}/`,
});

export default function SearchEngineOptimizationPage() {
  return <ServicePageTemplate slug={slug} />;
}
