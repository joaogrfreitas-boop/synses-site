import { ContactForm } from "./contact-form";
import { Container, Eyebrow, Heading } from "./primitives";

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="border-t border-line bg-white py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Eyebrow>Contato</Eyebrow>
          <Heading id="contato-title">Quero conhecer a Synses</Heading>
          <p className="mt-5 text-lg leading-relaxed text-pretty">
            Conte um pouco sobre a sua empresa. Entraremos em contato pelo <span className="whitespace-nowrap">e-mail</span> informado.
          </p>
        </div>
        <div className="relative">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
