import { Container, PilotBadge, PrimaryLink, SecondaryLink } from "./primitives";

const rows = [
  { label: "Preço de venda", value: "R$ 89,90" },
  { label: "Custo do produto", value: "− R$ 41,20" },
  { label: "Taxa do cartão (3,5%)", value: "− R$ 3,15" },
  { label: "Imposto sobre venda", value: "− R$ 5,39", note: "Premissa confirmada nos dados de demonstração" },
];

function FileIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M9.5 1.75H4.25a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5L9.5 1.75Z" />
      <path d="M9.5 1.75V5h3.25" />
    </svg>
  );
}

// Ilustração na linguagem do produto (a fala do dono, a resposta do consultor, a conta e a fonte), com dados de demonstração.
function ConversationCard() {
  return (
    <figure className="rounded-xl border border-line bg-white p-5 shadow-[0_24px_60px_-32px_rgba(11,31,59,0.28)] sm:p-7">
      <div className="flex justify-end">
        <p className="max-w-[85%] rounded-lg bg-navy px-4 py-2.5 text-sm text-white">
          Quanto eu ganho em cada Kit Presente?
        </p>
      </div>

      <div className="mt-6">
        <p className="flex items-center gap-2 text-xs font-medium text-navy">
          <span aria-hidden="true" className="sinal !w-5" />
          Seu consultor
        </p>
        <p className="kicker mt-4 !text-[0.6875rem]">Conta feita · set/2026</p>
        <p className="editorial mt-1.5 text-2xl leading-tight text-navy sm:text-[1.75rem]">
          Ganho por unidade do Kit Presente: <span className="text-money data-num">R$ 40,16</span>
        </p>
        <p className="mt-2 text-sm">Margem de 44,7% sobre o preço de venda.</p>
      </div>

      <div className="mt-6">
        <p className="kicker flex items-center gap-3 !text-[0.6875rem]">
          <span className="data-num text-navy">01</span>A conta
        </p>
        <dl className="mt-3 overflow-hidden rounded-lg border border-line text-[0.8125rem]">
          {rows.map((row) => (
            <div key={row.label} className="flex items-baseline justify-between gap-4 border-b border-line px-4 py-2.5">
              <dt className="text-navy">
                {row.label}
                {row.note && <span className="mt-0.5 block text-[0.6875rem] text-faint">{row.note}</span>}
              </dt>
              <dd className="data-num shrink-0 text-navy">{row.value}</dd>
            </div>
          ))}
          <div className="flex items-baseline justify-between gap-4 bg-sunken/60 px-4 py-2.5 font-semibold text-navy">
            <dt>Ganho por unidade</dt>
            <dd className="data-num">R$ 40,16</dd>
          </div>
        </dl>
        <p className="mt-2 flex gap-1.5 text-[0.6875rem] text-evidence">
          <FileIcon />
          Fonte: tabela_de_precos.xlsx, custos_por_produto.xlsx e extrato_maquininha_set.xlsx
        </p>
      </div>

      <figcaption className="mt-5 border-t border-line pt-3 text-[0.6875rem] text-faint">
        Ilustração com dados de demonstração.
      </figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <Container className="grid items-center gap-14 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <PilotBadge />
          <h1 id="hero-title" className="editorial mt-6 text-5xl leading-[1.04] text-navy sm:text-[4rem]">
            Seu negócio, entendido.
          </h1>
          <span aria-hidden="true" className="sinal mt-6" />
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-navy text-pretty sm:text-[1.375rem]">
            Saiba quanto você ganha no que vende e quanto precisa vender para cobrir seus custos.
          </p>
          <p className="mt-3 text-base">Cada número mostra a conta e de onde veio.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryLink href="#contato">Quero conhecer a Synses</PrimaryLink>
            <SecondaryLink href="#como-funciona">Ver como funciona</SecondaryLink>
          </div>
        </div>
        <ConversationCard />
      </Container>
    </section>
  );
}
