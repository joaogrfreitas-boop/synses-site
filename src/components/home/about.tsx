import { Container, Eyebrow, Heading } from "./primitives";

const pillars = [
  {
    title: "Seus dados, não médias de mercado.",
    body: "As respostas partem dos números da sua empresa.",
  },
  {
    title: "Investigação, não só gráfico.",
    body: "A Synses cruza as informações, faz as contas e explica o que encontrou.",
  },
  {
    title: "Rastreável do início ao fim.",
    body: "Toda resposta mostra a conta e a origem de cada número.",
  },
];

export function About() {
  return (
    <section id="o-que-e" aria-labelledby="o-que-e-title" className="border-t border-line bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>O que é</Eyebrow>
            <Heading id="o-que-e-title">Um consultor de negócios que trabalha com os seus números.</Heading>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-pretty lg:pt-9">
            <p>
              A Synses é um consultor de negócios com IA feito para pequenas e médias empresas brasileiras.
              Ela parte dos dados que a sua empresa já tem (vendas, custos, despesas) e transforma perguntas
              do dia a dia em investigações com respostas que você consegue conferir.
            </p>
            <p>
              Não é um ERP. Também não é mais um painel para você interpretar sozinho. É onde você investiga
              o que mudou na margem, quais produtos mais contribuem para o resultado e quanto precisa vender
              para cobrir seus custos.
            </p>
          </div>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <li key={pillar.title} className="rounded-xl border border-line bg-ice p-7">
              <span aria-hidden="true" className="sinal" />
              <h3 className="editorial mt-5 text-lg text-navy">{pillar.title}</h3>
              <p className="mt-2 leading-relaxed">{pillar.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
