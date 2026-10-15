import type { Metadata } from "next";
import Link from "next/link";
import { Email, Value } from "@/components/company-value";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Condições de uso do site institucional synses.app.",
  alternates: { canonical: "/termos" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Termos de Uso">
      <p>
        Estes Termos de Uso regulam o acesso ao site institucional synses.app, mantido por{" "}
        <Value>{company.legalName}</Value>, inscrita no CNPJ sob o nº {company.cnpj} (“Synses”).
      </p>

      <h2>1. Aceitação</h2>
      <p>
        Ao acessar e usar este site, você concorda com estes Termos. Se não concordar, por favor não utilize o
        site.
      </p>

      <h2>2. Sobre o site e o produto</h2>
      <p>
        Este site tem finalidade informativa: apresentar a empresa e a plataforma Synses. A plataforma está em
        piloto fechado, com acesso restrito, e não está disponível publicamente para contratação. Nada neste site
        constitui oferta de contratação, proposta comercial ou garantia de acesso ao piloto.
      </p>
      <p>
        O uso da plataforma por participantes do piloto é regido por informações e termos próprios, apresentados
        no ingresso no piloto, e não por estes Termos.
      </p>

      <h2>3. Uso permitido</h2>
      <p>Ao usar este site, você se compromete a não:</p>
      <ul>
        <li>usá-lo para fins ilícitos ou que violem direitos de terceiros;</li>
        <li>enviar pelo formulário conteúdo falso, ofensivo, automatizado em massa ou que contenha código malicioso;</li>
        <li>tentar acessar áreas, sistemas ou dados não disponibilizados publicamente;</li>
        <li>interferir no funcionamento ou na segurança do site.</li>
      </ul>

      <h2>4. Propriedade intelectual</h2>
      <p>
        A marca Synses, o logotipo, os textos, as imagens, as telas do produto e o design deste site pertencem à
        Synses ou são usados com autorização, e são protegidos pela legislação de propriedade intelectual. Não é
        permitido copiar, reproduzir ou usar esse conteúdo para fins comerciais sem autorização prévia por
        escrito.
      </p>

      <h2>5. Conteúdo ilustrativo</h2>
      <p>
        Os exemplos, perguntas, valores e telas apresentados neste site usam dados de demonstração e têm caráter
        exclusivamente ilustrativo. Eles não representam resultados de empresas reais e não constituem
        consultoria contábil, fiscal, jurídica ou financeira.
      </p>

      <h2>6. Limitação de responsabilidade</h2>
      <p>
        Buscamos manter as informações deste site corretas e atualizadas, mas não garantimos que estejam livres
        de erros ou que o site esteja disponível de forma ininterrupta. Na extensão permitida pela lei, a Synses
        não se responsabiliza por decisões tomadas com base exclusivamente no conteúdo informativo deste site.
      </p>

      <h2>7. Links de terceiros</h2>
      <p>
        Este site pode conter links para sites de terceiros. Não controlamos esses sites e não nos
        responsabilizamos por seu conteúdo ou por suas práticas de privacidade.
      </p>

      <h2>8. Privacidade</h2>
      <p>
        O tratamento de dados pessoais coletados neste site é descrito na nossa{" "}
        <Link href="/privacidade">Política de Privacidade</Link>.
      </p>

      <h2>9. Alterações</h2>
      <p>
        Podemos alterar estes Termos a qualquer momento. A versão vigente é sempre a publicada nesta página, com a
        data da última atualização no topo.
      </p>

      <h2>10. Lei aplicável e foro</h2>
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca da
        sede da Synses para resolver eventuais controvérsias, ressalvadas as hipóteses em que a lei assegure foro
        diverso.
      </p>

      <h2>11. Contato</h2>
      <p>
        Dúvidas sobre estes Termos podem ser enviadas para <Email address={company.contactEmail} />.
      </p>
    </LegalPage>
  );
}
