interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({ label, title, description, align = 'center', light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {label && (
        <div className={`flex items-center gap-3 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="w-8 h-0.5 bg-brand-orange" />
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.2em]">
            {label}
          </span>
          <span className="w-8 h-0.5 bg-brand-orange" />
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-brand-black' : 'text-brand-white'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-gray-600' : 'text-brand-text-muted'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
