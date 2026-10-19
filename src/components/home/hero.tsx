import { ContactForm } from "./contact-form";
import { Container, PilotBadge, SecondaryLink } from "./primitives";

// O cartão de entrada no piloto, ao lado das mensagens do hero: só nome, e-mail e empresa.
function PilotCard() {
  return (
    <div
      id="participe"
      className="relative rounded-xl border border-line bg-white p-6 shadow-[0_24px_60px_-32px_rgba(11,31,59,0.28)] sm:p-7"
    >
      <span aria-hidden="true" className="sinal" />
      <h2 className="editorial mt-4 text-2xl text-navy">Participe do piloto</h2>
      <p className="mt-1.5 text-sm leading-relaxed">Deixe seu contato. Respondemos pelo e-mail informado.</p>
      <div className="mt-6">
        <ContactForm variant="compact" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <Container className="grid items-center gap-12 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-20">
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
          {/* No celular o formulário vem logo abaixo; o link só aparece a partir do tablet. */}
          <div className="mt-10 hidden sm:block">
            <SecondaryLink href="#como-funciona">Ver como funciona</SecondaryLink>
          </div>
        </div>
        <PilotCard />
      </Container>
    </section>
  );
}
