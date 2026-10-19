"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitContact, type ContactField, type ContactState } from "@/app/actions";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "mt-2 block w-full rounded-md border border-field bg-white px-3.5 py-2.5 text-navy placeholder:text-faint transition-colors focus:border-navy aria-[invalid=true]:border-[#b54747]";

type Variant = "full" | "compact";

function Field({
  id,
  name,
  label,
  optional,
  state,
  children,
}: {
  id: string;
  name: ContactField;
  label: string;
  optional?: boolean;
  state: ContactState;
  children: React.ReactNode;
}) {
  const error = state.fieldErrors?.[name];
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
        {optional && <span className="font-normal text-ink"> (opcional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-erro`} className="mt-1.5 text-sm text-[#b54747]">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * "full": o formulário da seção Contato. "compact": o do topo da página (só nome, e-mail e empresa).
 * Os dois enviam para a mesma ação; `origem` diz no e-mail de qual deles o contato veio.
 */
export function ContactForm({ variant = "full" }: { variant?: Variant }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const compact = variant === "compact";
  // Os dois formulários ficam na mesma página: os ids precisam ser únicos.
  const id = (name: string) => (compact ? `topo-${name}` : name);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-xl border border-line bg-ice p-8 text-center sm:p-10">
        <span aria-hidden="true" className="sinal mx-auto" />
        <p className="editorial mt-5 text-xl text-navy">Recebido.</p>
        <p className="mt-2 leading-relaxed">
          Obrigado pelo interesse. Vamos responder pelo e-mail informado.
        </p>
      </div>
    );
  }

  const invalid = (name: ContactField) => Boolean(state.fieldErrors?.[name]);
  const describedBy = (name: ContactField) => (invalid(name) ? `${id(name)}-erro` : undefined);
  const input = (name: ContactField, props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
      id={id(name)}
      name={name}
      defaultValue={state.values?.[name]}
      aria-invalid={invalid(name)}
      aria-describedby={describedBy(name)}
      className={inputClass}
      {...props}
    />
  );

  const essentials = (
    <>
      <Field id={id("nome")} name="nome" label="Nome" state={state}>
        {input("nome", { type: "text", autoComplete: "name", required: true, maxLength: 120 })}
      </Field>
      <Field id={id("email")} name="email" label="E-mail" state={state}>
        {input("email", { type: "email", autoComplete: "email", required: true, maxLength: 254 })}
      </Field>
      <Field id={id("empresa")} name="empresa" label="Empresa" state={state}>
        {input("empresa", { type: "text", autoComplete: "organization", required: true, maxLength: 160 })}
      </Field>
    </>
  );

  const privacy = (
    <p className={`leading-relaxed ${compact ? "text-xs" : "text-sm sm:max-w-xs"}`}>
      Ao enviar, você concorda com o tratamento dos seus dados conforme a{" "}
      <Link href="/privacidade" className="text-navy underline decoration-line-strong underline-offset-2 hover:decoration-navy">
        Política de Privacidade
      </Link>
      .
    </p>
  );

  const submit = (
    <button
      type="submit"
      disabled={pending}
      className={`inline-flex shrink-0 justify-center rounded-md bg-navy px-5 py-3 font-medium text-white transition-colors hover:bg-navy-hover disabled:cursor-wait disabled:opacity-70 ${compact ? "w-full" : ""}`}
    >
      {pending ? "Enviando…" : compact ? "Quero participar do piloto" : "Quero conhecer a Synses"}
    </button>
  );

  return (
    <form
      action={formAction}
      className={compact ? "space-y-4" : "space-y-5 rounded-xl border border-line bg-ice p-6 sm:p-8"}
    >
      <input type="hidden" name="origem" value={compact ? "topo" : "contato"} />

      {compact ? (
        essentials
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            {essentials}
            <Field id={id("segmento")} name="segmento" label="Segmento" optional state={state}>
              {input("segmento", { type: "text", maxLength: 120, placeholder: "Ex.: varejo, alimentação" })}
            </Field>
          </div>

          <Field id={id("mensagem")} name="mensagem" label="O que você gostaria de entender sobre o seu negócio?" optional state={state}>
            <textarea
              id={id("mensagem")}
              name="mensagem"
              rows={4}
              maxLength={2000}
              defaultValue={state.values?.mensagem}
              aria-invalid={invalid("mensagem")}
              aria-describedby={describedBy("mensagem")}
              className={`${inputClass} resize-y`}
            />
          </Field>
        </>
      )}

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id("website")}>Não preencha este campo</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-md border border-[#b54747]/30 bg-[#fbeeee] px-4 py-3 text-sm text-[#8f3434]">
          {state.message}
        </p>
      )}

      {compact ? (
        <div className="space-y-3 pt-1">
          {submit}
          {privacy}
        </div>
      ) : (
        <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
          {privacy}
          {submit}
        </div>
      )}
    </form>
  );
}
