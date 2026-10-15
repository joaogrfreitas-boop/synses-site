import Link from "next/link";
import { company, site } from "@/lib/site";
import { Email, Value } from "./company-value";
import { Logo } from "./wordmark";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-navy text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1.4fr_1fr]">
        <div>
          <Logo onDark width={124} />
          <p className="mt-4 text-sm">{site.tagline}</p>
          <span aria-hidden="true" className="sinal mt-3" />
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.095em] text-white">Contato</h2>
          <p className="mt-4 text-sm">
            <Email address={company.contactEmail} className="hover:text-white" />
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.095em] text-white">Empresa</h2>
          <address className="mt-4 space-y-1 text-sm not-italic">
            <p>
              <Value>{company.legalName}</Value>
            </p>
            <p>CNPJ {company.cnpj}</p>
            {company.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.095em] text-white">Legal</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/privacidade" className="hover:text-white">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos" className="hover:text-white">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-white/60 sm:px-6">
          © 2026 Synses. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
