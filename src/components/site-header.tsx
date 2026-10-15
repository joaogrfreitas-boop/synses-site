import Link from "next/link";
import { Logo } from "./wordmark";

const nav = [
  { href: "/#o-que-e", label: "O que é" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#produto", label: "Produto" },
  { href: "/#confianca", label: "Confiança" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ice/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" aria-label="Synses, início" className="inline-flex rounded-sm">
          <Logo width={124} priority />
        </Link>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-ink">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-navy">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/#contato"
          className="rounded-md bg-navy px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-hover"
        >
          <span className="sm:hidden">Quero conhecer</span>
          <span className="hidden sm:inline">Quero conhecer a Synses</span>
        </Link>
      </div>
    </header>
  );
}
