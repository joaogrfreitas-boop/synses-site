import Link from "next/link";
import { Container } from "./primitives";

// No formato do cartão "Próximo passo" do produto: Navy, com régua Teal e a frase em Jakarta.
export function Pilot() {
  return (
    <section id="piloto" aria-labelledby="piloto-title" className="border-t border-line py-20 md:py-24">
      <Container>
        <div className="on-dark rounded-xl border-l-[3px] border-teal bg-navy px-6 py-10 sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.095em] text-teal">Em piloto fechado</p>
          <h2 id="piloto-title" className="editorial mt-4 max-w-2xl text-3xl text-white text-balance sm:text-4xl">
            Estamos abrindo aos poucos.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80 text-pretty">
            A Synses está em piloto fechado: o acesso é restrito enquanto refinamos o produto. Ainda não está
            disponível para contratação. Se a sua empresa quer participar das próximas etapas ou acompanhar o
            lançamento, deixe seu contato.
          </p>
          <Link
            href="#contato"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-navy transition-colors hover:bg-ice"
          >
            Quero conhecer a Synses <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
