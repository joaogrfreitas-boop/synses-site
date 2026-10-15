import { Container, Eyebrow, Heading } from "./primitives";

const principles = [
  {
    title: "A conta sempre visível.",
    body: "Fórmula, valores e resultado, passo a passo.",
  },
  {
    title: "A origem de cada número.",
    body: "O arquivo, o período e o registro de onde cada valor saiu.",
  },
  {
    title: "Premissas por escrito.",
    body: "Quando a resposta depende de uma suposição, como o regime tributário ou uma taxa média, ela aparece escrita para você confirmar ou corrigir.",
  },
  {
    title: "O que falta, dito com clareza.",
    body: "Se faltarem informações necessárias, a Synses pede confirmação ou mostra o que ainda precisa ser entendido em vez de apresentar aquilo como um fato confirmado.",
  },
  {
    title: "Dados separados por empresa.",
    body: "A Synses foi projetada para manter os dados de cada empresa separados e rastrear a origem das informações usadas nas respostas.",
  },
];

export function Trust() {
  return (
    <section id="confianca" aria-labelledby="confianca-title" className="border-t border-line bg-white py-20 md:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Eyebrow>Confiança</Eyebrow>
          <Heading id="confianca-title">Número sem origem é opinião.</Heading>
          <p className="mt-6 text-lg leading-relaxed text-pretty">
            Uma decisão de negócio não pode depender de uma resposta que ninguém consegue conferir. Por isso a
            Synses foi construída em torno da rastreabilidade.
          </p>
        </div>

        <ul className="space-y-7">
          {principles.map((item) => (
            <li key={item.title} className="mark-rule">
              <h3 className="editorial text-lg text-navy">{item.title}</h3>
              <p className="mt-1.5 leading-relaxed text-pretty">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
