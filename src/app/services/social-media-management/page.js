import ServicePageTemplate from '@/components/ServicePageTemplate';
import { buildMetadata } from '@/lib/seo';
import { getServiceContent } from '@/lib/service-content';

const slug = 'social-media-management';
const content = getServiceContent(slug);

export const metadata = buildMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: `/services/${slug}/`,
  absoluteTitle: true,
});

export default function SocialMediaManagementPage() {
  return <ServicePageTemplate slug={slug} />;
}
