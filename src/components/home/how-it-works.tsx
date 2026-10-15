import { Container, Eyebrow, Heading } from "./primitives";

const steps = [
  {
    title: "Traga seus dados.",
    body: "Planilhas e arquivos que a sua empresa já usa no dia a dia. Para começar, você não precisa montar um sistema novo.",
  },
  {
    title: "Pergunte como perguntaria a um consultor.",
    body: "Em português, do seu jeito. “Quanto sobra de cada venda?” é uma pergunta válida.",
  },
  {
    title: "Receba a resposta com a conta.",
    body: "A Synses investiga, calcula e responde. Junto vêm a fórmula, os valores usados e a origem de cada um.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-title" className="border-t border-line py-20 md:py-28">
      <Container>
        <Eyebrow>Como funciona</Eyebrow>
        <Heading id="como-funciona-title">Do dado à resposta, em três passos.</Heading>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-4">
                <span className="kicker data-num !text-navy">0{index + 1}</span>
                <span aria-hidden="true" className="h-px flex-1 bg-line" />
              </div>
              <h3 className="editorial mt-5 text-xl text-navy text-balance">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-pretty">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
