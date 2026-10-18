/**
 * Consistent section heading (eyebrow + H2 + intro) in light theme.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  id,
  className = '',
}) {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        id={id}
        className="mt-3 text-3xl leading-tight font-bold text-ink sm:text-4xl lg:text-[2.6rem]"
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed text-muted ${centered ? 'mx-auto' : ''} max-w-2xl`}>
          {intro}
        </p>
      )}
    </div>
  );
}
