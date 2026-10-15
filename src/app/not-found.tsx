import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
      <p className="kicker">Erro 404</p>
      <h1 className="editorial mt-3 text-4xl text-navy">Página não encontrada.</h1>
      <p className="mt-4 text-lg">O endereço pode ter mudado ou não existe.</p>
      <Link
        href="/"
        className="mt-10 inline-flex rounded-md bg-navy px-5 py-3 font-medium text-white transition-colors hover:bg-navy-hover"
      >
        Voltar para o início
      </Link>
    </section>
  );
}
