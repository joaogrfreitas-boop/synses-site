"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitContact, type ContactField, type ContactState } from "@/app/actions";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "mt-2 block w-full rounded-md border border-field bg-white px-3.5 py-2.5 text-navy placeholder:text-faint transition-colors focus:border-navy aria-[invalid=true]:border-[#b54747]";

function Field({
  name,
  label,
  optional,
  state,
  children,
}: {
  name: ContactField;
  label: string;
  optional?: boolean;
  state: ContactState;
  children: React.ReactNode;
}) {
  const error = state.fieldErrors?.[name];
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-navy">
        {label}
        {optional && <span className="font-normal text-ink"> (opcional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-erro`} className="mt-1.5 text-sm text-[#b54747]">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

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
  const describedBy = (name: ContactField) => (invalid(name) ? `${name}-erro` : undefined);

  return (
    <form action={formAction} className="space-y-5 rounded-xl border border-line bg-ice p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="nome" label="Nome" state={state}>
          <input
            id="nome"
            name="nome"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            defaultValue={state.values?.nome}
            aria-invalid={invalid("nome")}
            aria-describedby={describedBy("nome")}
            className={inputClass}
          />
        </Field>
        <Field name="email" label="E-mail" state={state}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            defaultValue={state.values?.email}
            aria-invalid={invalid("email")}
            aria-describedby={describedBy("email")}
            className={inputClass}
          />
        </Field>
        <Field name="empresa" label="Empresa" state={state}>
          <input
            id="empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            required
            maxLength={160}
            defaultValue={state.values?.empresa}
            aria-invalid={invalid("empresa")}
            aria-describedby={describedBy("empresa")}
            className={inputClass}
          />
        </Field>
        <Field name="segmento" label="Segmento" optional state={state}>
          <input
            id="segmento"
            name="segmento"
            type="text"
            maxLength={120}
            placeholder="Ex.: varejo, alimentação"
            defaultValue={state.values?.segmento}
            aria-invalid={invalid("segmento")}
            aria-describedby={describedBy("segmento")}
            className={inputClass}
          />
        </Field>
      </div>

      <Field name="mensagem" label="O que você gostaria de entender sobre o seu negócio?" optional state={state}>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          maxLength={2000}
          defaultValue={state.values?.mensagem}
          aria-invalid={invalid("mensagem")}
          aria-describedby={describedBy("mensagem")}
          className={`${inputClass} resize-y`}
        />
      </Field>

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-md border border-[#b54747]/30 bg-[#fbeeee] px-4 py-3 text-sm text-[#8f3434]">
          {state.message}
        </p>
      )}

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed sm:max-w-xs">
          Ao enviar, você concorda com o tratamento dos seus dados conforme a{" "}
          <Link href="/privacidade" className="text-navy underline decoration-line-strong underline-offset-2 hover:decoration-navy">
            Política de Privacidade
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex shrink-0 justify-center rounded-md bg-navy px-5 py-3 font-medium text-white transition-colors hover:bg-navy-hover disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Enviando…" : "Quero conhecer a Synses"}
        </button>
      </div>
    </form>
  );
}
