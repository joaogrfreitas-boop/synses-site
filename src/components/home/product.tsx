import Image from "next/image";
import { Container, Eyebrow, Heading } from "./primitives";
import { ProductVideo } from "./product-video";

// Telas reais do app (build de produção local, conta local fictícia "Marina Souza · Ateliê Bem Feito", consultor simulado e
// planilhas fictícias de camisetas e canecas), capturadas a 1440 × 900 em 2x.
const screens: { title: string; body: string; src: string; alt: string }[] = [
  {
    title: "Início",
    body: "O Início é a conversa: você pergunta o que quer entender ou começa por uma sugestão. A última conta feita fica à mão.",
    src: "/produto/inicio.png",
    alt: "Tela inicial da Synses: “O que você quer entender hoje?”, com o campo de pergunta, duas sugestões e a leitura atual.",
  },
  {
    title: "Conversa",
    body: "Antes da conta, o consultor pergunta o que precisa saber. Depois responde com os números da sua empresa.",
    src: "/produto/conversa.png",
    alt: "Conversa na Synses: o dono confirma como o imposto entra e o consultor responde com preço, custo e ganho por unidade de cada produto.",
  },
  {
    title: "O que encontrei",
    body: "A conta fica guardada: o resultado, do que ele é feito e de onde veio cada número.",
    src: "/produto/o-que-encontrei.png",
    alt: "Tela “O que encontrei” da Synses: o custo de uma unidade de cada produto e a composição desse custo.",
  },
];

function BrowserFrame({ screen }: { screen: (typeof screens)[number] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_24px_60px_-32px_rgba(11,31,59,0.28)]">
      <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-line bg-ice px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>
      <div className="relative aspect-[16/10] bg-ice">
        <Image
          src={screen.src}
          alt={screen.alt}
          fill
          sizes="(min-width: 1152px) 840px, (min-width: 1024px) 75vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

export function Product() {
  return (
    <section id="produto" aria-labelledby="produto-title" className="border-t border-line py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>O produto</Eyebrow>
          <Heading id="produto-title">Veja a Synses por dentro.</Heading>
          <p className="mt-5 text-lg leading-relaxed">
            Telas reais do produto em desenvolvimento, com dados de demonstração.
          </p>
        </div>

        <div className="mt-12">
          <ProductVideo />
        </div>

        <ol className="mt-20 space-y-16 md:space-y-24">
          {screens.map((screen, index) => (
            <li
              key={screen.title}
              className={`grid items-center gap-8 ${
                index % 2 === 1 ? "lg:grid-cols-[3.5fr_1fr]" : "lg:grid-cols-[1fr_3.5fr]"
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="kicker data-num !text-navy">0{index + 1}</p>
                <h3 className="editorial mt-2 text-2xl text-navy">{screen.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-pretty lg:text-base">{screen.body}</p>
              </div>
              <BrowserFrame screen={screen} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
