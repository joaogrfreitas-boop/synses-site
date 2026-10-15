"use server";

import { company, isPending } from "@/lib/site";

export type ContactField = "nome" | "email" | "empresa" | "segmento" | "mensagem";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
  values?: Partial<Record<ContactField, string>>;
};

const LIMITS: Record<ContactField, number> = {
  nome: 120,
  email: 254,
  empresa: 160,
  segmento: 120,
  mensagem: 2000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Lê a variável sem espaços, quebras de linha ou aspas coladas nas pontas ao cadastrar na Vercel. */
function env(name: string) {
  return (process.env[name] ?? "").trim().replace(/^(["'])(.*)\1$/, "$2").trim();
}

function failureMessage() {
  const fallback = isPending(company.contactEmail) ? "" : ` ou escreva para ${company.contactEmail}`;
  return `Não conseguimos enviar agora. Tente de novo em alguns minutos${fallback}.`;
}

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Campo invisível para pessoas; robôs costumam preenchê-lo.
  if (String(formData.get("website") ?? "").trim()) {
    return { status: "success" };
  }

  const read = (field: ContactField) => String(formData.get(field) ?? "").trim();
  const values: Record<ContactField, string> = {
    nome: read("nome"),
    email: read("email"),
    empresa: read("empresa"),
    segmento: read("segmento"),
    mensagem: read("mensagem"),
  };

  const fieldErrors: Partial<Record<ContactField, string>> = {};
  if (!values.nome) fieldErrors.nome = "Informe seu nome.";
  if (!EMAIL_PATTERN.test(values.email)) fieldErrors.email = "Informe um e-mail válido.";
  if (!values.empresa) fieldErrors.empresa = "Informe o nome da empresa.";
  for (const field of Object.keys(LIMITS) as ContactField[]) {
    if (values[field].length > LIMITS[field]) {
      fieldErrors[field] = `Use no máximo ${LIMITS[field]} caracteres.`;
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Revise os campos destacados.", fieldErrors, values };
  }

  const text = [
    "Novo contato pelo site synses.app",
    "",
    `Nome: ${values.nome}`,
    `E-mail: ${values.email}`,
    `Empresa: ${values.empresa}`,
    `Segmento: ${values.segmento || "(não informado)"}`,
    "",
    "O que gostaria de entender sobre o negócio:",
    values.mensagem || "(não informado)",
  ].join("\n");

  const apiKey = env("RESEND_API_KEY");
  const from = env("CONTACT_FROM_EMAIL");
  const to = env("CONTACT_TO_EMAIL");

  if (!apiKey || !from || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[contato] Resend não configurado; envio simulado em desenvolvimento.\n${text}`);
      return { status: "success" };
    }
    console.error("[contato] Variáveis RESEND_API_KEY, CONTACT_FROM_EMAIL ou CONTACT_TO_EMAIL ausentes.");
    return { status: "error", message: failureMessage(), values };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `Interesse na Synses: ${values.empresa.replace(/[\r\n]+/g, " ")}`,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      // O corpo de erro do Resend traz só o tipo e a mensagem (nunca a chave); vai para o log, não para a pessoa.
      const detalhe = await response.text().catch(() => "");
      const formatoDaChave = apiKey.startsWith("re_") ? "" : " A chave não começa com re_.";
      console.error(`[contato] Resend respondeu ${response.status}.${formatoDaChave} ${detalhe.slice(0, 300)}`);
      return { status: "error", message: failureMessage(), values };
    }
  } catch (error) {
    console.error("[contato] Falha ao chamar o Resend.", error instanceof Error ? error.name : "");
    return { status: "error", message: failureMessage(), values };
  }

  return { status: "success" };
}
