import type { Metadata } from "next";
import Link from "next/link";
import { Email, Value } from "@/components/company-value";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a Synses trata os dados pessoais coletados no site institucional synses.app.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidade">
      <p>
        Esta Política de Privacidade se aplica ao site institucional synses.app. Participantes do piloto da
        plataforma Synses estarão sujeitos a informações e termos próprios apresentados no ingresso no piloto.
      </p>
      <p>
        Aqui explicamos quais dados pessoais coletamos neste site, por que coletamos, com quem compartilhamos e
        como você pode exercer seus direitos, de acordo com a Lei Geral de Proteção de Dados Pessoais (Lei nº
        13.709/2018, “LGPD”).
      </p>

      <h2>1. Quem é o controlador</h2>
      <p>
        O controlador dos dados pessoais tratados neste site é <Value>{company.legalName}</Value>, inscrita no
        CNPJ sob o nº {company.cnpj}, com sede em <Value>{company.address}</Value> (“Synses”).
      </p>

      <h2>2. Quais dados coletamos</h2>
      <p>
        <strong>Dados que você nos envia.</strong> Quando você preenche o formulário “Quero conhecer a Synses”,
        coletamos: nome, e-mail, nome da empresa e, se você quiser informar, o segmento de atuação e uma mensagem
        sobre o que gostaria de entender do seu negócio. Pedimos que você não inclua no formulário dados
        financeiros, senhas ou informações de terceiros.
      </p>
      <p>
        <strong>Dados técnicos.</strong> Como qualquer site, nosso provedor de hospedagem registra
        automaticamente dados técnicos de acesso, como endereço IP, data e hora, página acessada e tipo de
        navegador. Esses registros são usados para manter o site funcionando e seguro.
      </p>
      <p>
        <strong>Cookies.</strong> Este site não usa cookies de publicidade, pixels de rastreamento nem
        ferramentas de analytics.
      </p>

      <h2>3. Para que usamos os dados e com qual base legal</h2>
      <ul>
        <li>
          <strong>Responder ao seu contato</strong> e avaliar o interesse da sua empresa em conhecer ou participar
          do piloto da Synses, com base na execução de procedimentos preliminares a pedido do titular (art. 7º, V,
          da LGPD) e no legítimo interesse (art. 7º, IX).
        </li>
        <li>
          <strong>Manter a segurança e o funcionamento do site</strong>, incluindo a prevenção de abuso e de envios
          automatizados, com base no legítimo interesse (art. 7º, IX).
        </li>
        <li>
          <strong>Cumprir obrigações legais ou regulatórias</strong>, quando aplicável (art. 7º, II).
        </li>
      </ul>
      <p>Não vendemos seus dados pessoais e não os usamos para publicidade de terceiros.</p>

      <h2>4. Com quem compartilhamos</h2>
      <p>
        Compartilhamos dados apenas com prestadores de serviço que nos ajudam a operar este site, na condição de
        operadores e somente para as finalidades descritas aqui:
      </p>
      <ul>
        <li>
          <strong>Vercel</strong>, provedora de hospedagem do site;
        </li>
        <li>
          <strong>Resend</strong>, serviço usado para entregar ao nosso e-mail as mensagens enviadas pelo
          formulário.
        </li>
      </ul>
      <p>
        Também podemos compartilhar dados quando exigido por lei, ordem judicial ou autoridade competente.
      </p>

      <h2>5. Transferência internacional</h2>
      <p>
        Os prestadores de serviço citados podem armazenar ou processar dados fora do Brasil. Nesses casos, a
        transferência ocorre nas hipóteses permitidas pelo art. 33 da LGPD, com a adoção de salvaguardas
        adequadas.
      </p>

      <h2>6. Por quanto tempo guardamos</h2>
      <p>
        Os dados enviados pelo formulário são mantidos pelo tempo necessário para conduzir a conversa com você e,
        depois disso, por até 24 meses a partir do último contato, salvo se você pedir a exclusão antes ou se
        houver obrigação legal de mantê-los. Os registros técnicos de acesso seguem os prazos do provedor de
        hospedagem e da legislação aplicável.
      </p>

      <h2>7. Seus direitos</h2>
      <p>Nos termos do art. 18 da LGPD, você pode, a qualquer momento:</p>
      <ul>
        <li>confirmar se tratamos seus dados e acessá-los;</li>
        <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li>pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários ou excessivos;</li>
        <li>pedir a portabilidade dos dados;</li>
        <li>pedir a eliminação dos dados tratados com base no seu consentimento;</li>
        <li>saber com quem compartilhamos seus dados;</li>
        <li>opor-se a um tratamento que considere irregular.</li>
      </ul>
      <p>
        Para exercer esses direitos, escreva para <Email address={company.privacyEmail} />. Você também pode
        apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>8. Segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas razoáveis para proteger os dados pessoais contra acesso não
        autorizado, perda ou uso indevido, como tráfego criptografado (HTTPS) e acesso restrito às mensagens
        recebidas. Nenhum sistema é totalmente imune a incidentes; se algum ocorrer e puder causar risco ou dano
        relevante, comunicaremos os titulares afetados e a ANPD, conforme a lei.
      </p>

      <h2>9. Encarregado pelo tratamento de dados</h2>
      <p>
        O contato responsável por questões de privacidade é <Value>{company.privacyContact}</Value>, pelo e-mail{" "}
        <Email address={company.privacyEmail} />.
      </p>

      <h2>10. Alterações desta política</h2>
      <p>
        Podemos atualizar esta política para refletir mudanças no site ou na legislação. A data da última
        atualização aparece no topo da página. Veja também os <Link href="/termos">Termos de Uso</Link>.
      </p>
    </LegalPage>
  );
}
