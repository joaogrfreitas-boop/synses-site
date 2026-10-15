import { legalUpdatedAt } from "@/lib/site";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <p className="kicker">Synses · Legal</p>
      <h1 className="editorial mt-3 text-4xl text-navy sm:text-5xl">{title}</h1>
      <span aria-hidden="true" className="sinal mt-5" />
      <p className="mt-5 text-sm text-faint">Última atualização: {legalUpdatedAt}</p>
      <div className="legal mt-10">{children}</div>
    </article>
  );
}
