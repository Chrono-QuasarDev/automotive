export default function Logo({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 40, text: 'text-xl' },
    lg: { icon: 56, text: 'text-3xl' },
  };
  const s = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gear outer ring */}
        <path d="M32 4L36 0h-8l4 4zm0 56l-4 4h8l-4-4zM4 32l-4-4v8l4-4zm56 0l4 4v-8l-4 4z" fill="#F2A33A" opacity="0.3"/>
        <circle cx="32" cy="32" r="28" stroke="#F2A33A" strokeWidth="2.5" fill="none"/>
        <circle cx="32" cy="32" r="22" stroke="#F2A33A" strokeWidth="1.5" fill="none" opacity="0.4"/>
        {/* Gear teeth */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect
            key={angle}
            x="30"
            y="2"
            width="4"
            height="8"
            rx="1"
            fill="#F2A33A"
            transform={`rotate(${angle} 32 32)`}
          />
        ))}
        {/* Inner gear */}
        <circle cx="32" cy="32" r="15" stroke="#F2A33A" strokeWidth="2" fill="rgba(242,163,58,0.08)"/>
        {/* Car silhouette inside */}
        <path
          d="M20 36h24v-2l-3-3h-4l-3-5h-8l-3 5h-4l-3 3v2zm4-8h16l-2-4H26l-2 4z"
          fill="#F2A33A"
        />
        {/* Wheels */}
        <circle cx="24" cy="37" r="2.5" fill="#0E0E0E" stroke="#F2A33A" strokeWidth="1.5"/>
        <circle cx="40" cy="37" r="2.5" fill="#0E0E0E" stroke="#F2A33A" strokeWidth="1.5"/>
        {/* Center dot */}
        <circle cx="32" cy="32" r="2" fill="#F2A33A" opacity="0.5"/>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className={`${s.text} font-extrabold tracking-wider text-brand-white font-[Poppins]`}>
          MACAR<span className="text-brand-orange"> SOLUTION</span>
        </span>
        <span className="text-[9px] tracking-[0.25em] uppercase text-brand-orange font-medium opacity-80">
          Solution @ Topnotch
        </span>
      </div>
    </div>
  );
}
