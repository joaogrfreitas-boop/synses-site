"use client";

import Image from "next/image";
import { useState } from "react";

// Vídeo de 1 minuto feito com /brag a partir das telas reais do app (conta fictícia, dados de demonstração).
// Só a capa carrega com a página; o vídeo baixa quando a pessoa clica em assistir.
export function ProductVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-xl border border-line bg-ice shadow-[0_24px_60px_-32px_rgba(11,31,59,0.28)]">
        {playing ? (
          <video
            className="absolute inset-0 h-full w-full"
            controls
            autoPlay
            playsInline
            poster="/video/synses-capa.jpg"
          >
            <source src="/video/synses-720.mp4" type="video/mp4" media="(max-width: 767px)" />
            <source src="/video/synses-1080.mp4" type="video/mp4" />
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full cursor-pointer"
            aria-label="Assistir ao vídeo de 1 minuto sobre a Synses"
          >
            <Image
              src="/video/synses-capa.jpg"
              alt=""
              fill
              sizes="(min-width: 1152px) 1104px, 100vw"
              className="object-cover"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/10" />
            {/* No canto inferior esquerdo, sob a coluna de texto da capa, para não cobrir os valores. */}
            <span className="absolute bottom-[7%] left-[5.5%]">
              <span className="inline-flex items-center gap-2.5 rounded-md bg-navy px-4 py-2.5 text-sm font-medium text-white sm:gap-3 sm:px-5 sm:py-3 sm:text-base shadow-[0_12px_32px_-12px_rgba(11,31,59,0.6)] transition-colors group-hover:bg-navy-hover">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M4 2.5v11a.5.5 0 0 0 .76.43l9-5.5a.5.5 0 0 0 0-.86l-9-5.5A.5.5 0 0 0 4 2.5Z" />
                </svg>
                Assistir · 1 min
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-sm text-faint">
        Da pergunta à conta, em 1 minuto. Telas reais do produto, com dados de demonstração.
      </figcaption>
    </figure>
  );
}
