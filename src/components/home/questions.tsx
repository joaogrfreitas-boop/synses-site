import { Container, Eyebrow, Heading } from "./primitives";

const groups = [
  {
    label: "Margem",
    questions: [
      "Quanto eu ganho em cada produto que vendo?",
      "Quais produtos vendem muito e deixam pouca margem?",
    ],
  },
  {
    label: "Ponto de equilíbrio",
    questions: [
      "Quanto preciso vender por mês para cobrir meus custos?",
      "Se um custo fixo aumentar R$ 2.000, quanto a mais preciso vender?",
    ],
  },
  {
    label: "Investigação",
    questions: [
      "O que pode estar associado à queda da margem em agosto, mesmo com vendas maiores?",
      "Quanto do meu faturamento está associado a taxas de cartão ou marketplace?",
    ],
  },
  {
    label: "Decisão",
    questions: ["Vale a pena dar 5% de desconto no Pix?"],
  },
];

export function Questions() {
  return (
    <section id="perguntas" aria-labelledby="perguntas-title" className="border-t border-line bg-white py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Perguntas</Eyebrow>
          <Heading id="perguntas-title">Perguntas que donos de negócio fazem de verdade.</Heading>
          <p className="mt-5 text-lg leading-relaxed text-pretty">
            Hoje, elas costumam ficar sem resposta ou dependem de uma planilha que só uma pessoa entende.
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="kicker">{group.label}</h3>
              <ul className="mt-4 space-y-3">
                {group.questions.map((question) => (
                  <li
                    key={question}
                    className="rounded-lg border border-line bg-ice px-4 py-3.5 text-navy"
                  >
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm">Exemplos do tipo de pergunta que a Synses foi feita para responder.</p>
      </Container>
    </section>
  );
}
