/**
 * Renders JSON-LD structured data safely.
 * `<` is escaped so content can never break out of the script element.
 */
export default function JsonLd({ data }) {
  const items = Array.isArray(data) ? data : [data];
  return items.map((item, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, '\\u003c') }}
    />
  ));
}
