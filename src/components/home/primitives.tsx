import Link from "next/link";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, number }: { children: React.ReactNode; number?: string }) {
  return (
    <p className="kicker flex items-center gap-3">
      {number && <span className="data-num text-navy">{number}</span>}
      {children}
    </p>
  );
}

export function Heading({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <h2 id={id} className={`editorial mt-4 text-3xl text-navy text-balance sm:text-[2.5rem] sm:leading-[1.1] ${className}`}>
      {children}
    </h2>
  );
}

export function PilotBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-3 py-1 text-xs font-medium text-navy">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#00a092]" />
      Em piloto fechado
    </span>
  );
}

export function PrimaryLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md bg-navy px-5 py-3 font-medium text-white transition-colors hover:bg-navy-hover ${className}`}
    >
      {children}
    </Link>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-md border border-line-strong bg-white px-5 py-3 font-medium text-navy transition-colors hover:bg-sunken"
    >
      {children}
    </Link>
  );
}
