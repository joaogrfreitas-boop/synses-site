"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Vídeo de 1 minuto feito com /brag a partir das telas reais do app (conta fictícia, dados de demonstração).
// Começa a tocar sem som quando aparece na tela (navegadores só permitem autoplay mudo) e pausa ao sair dela.
// Só baixa quando a pessoa chega perto da seção. Com "reduzir movimento" ou economia de dados, espera o clique.
export function ProductVideo() {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [manual, setManual] = useState(false);
  const [muted, setMuted] = useState(true);
  const visibleRef = useRef(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduceMotion || saveData) {
      // Sem autoplay: o efeito sincroniza com o ambiente do navegador, que só existe no cliente.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setManual(true);
      return;
    }

    // Monta o vídeo um pouco antes de ele entrar na tela, para já estar carregando.
    const preload = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          preload.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );

    // Toca com metade do vídeo visível; pausa quando sai.
    const visibility = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        const video = videoRef.current;
        if (!video) return;
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.5 },
    );

    preload.observe(frame);
    visibility.observe(frame);
    return () => {
      preload.disconnect();
      visibility.disconnect();
    };
  }, []);

  // Quando o vídeo monta, já mudo (exigência do autoplay), toca só se estiver visível.
  useEffect(() => {
    const video = videoRef.current;
    if (!mounted || !video || !video.muted) return;
    if (visibleRef.current) video.play().catch(() => {});
  }, [mounted]);

  function turnOnSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.currentTime = 0;
    video.play().catch(() => {});
    setMuted(false);
  }

  function playManually() {
    setManual(false);
    setMuted(false);
    setMounted(true);
  }

  return (
    <figure>
      <div
        ref={frameRef}
        className="relative aspect-video overflow-hidden rounded-xl border border-line bg-ice shadow-[0_24px_60px_-32px_rgba(11,31,59,0.28)]"
      >
        {mounted ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full"
            poster="/video/synses-capa.jpg"
            muted={muted}
            autoPlay={!muted}
            loop={muted}
            preload="auto"
            playsInline
            controls={!muted}
            onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
            aria-label="Vídeo de 1 minuto sobre a Synses"
          >
            <source src="/video/synses-720.mp4" type="video/mp4" media="(max-width: 767px)" />
            <source src="/video/synses-1080.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image src="/video/synses-capa.jpg" alt="" fill sizes="(min-width: 1152px) 1104px, 100vw" className="object-cover" />
        )}

        {manual && !mounted && (
          <button
            type="button"
            onClick={playManually}
            className="group absolute inset-0 h-full w-full cursor-pointer"
            aria-label="Assistir ao vídeo de 1 minuto sobre a Synses"
          >
            <span className="absolute bottom-[7%] left-[5.5%]">
              <span className="inline-flex items-center gap-2.5 rounded-md bg-navy px-4 py-2.5 text-sm font-medium text-white shadow-[0_12px_32px_-12px_rgba(11,31,59,0.6)] transition-colors group-hover:bg-navy-hover sm:gap-3 sm:px-5 sm:py-3 sm:text-base">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M4 2.5v11a.5.5 0 0 0 .76.43l9-5.5a.5.5 0 0 0 0-.86l-9-5.5A.5.5 0 0 0 4 2.5Z" />
                </svg>
                Assistir · 1 min
              </span>
            </span>
          </button>
        )}

        {mounted && muted && (
          // No canto superior direito, que fica vazio em todas as cenas; só o ícone no celular.
          <button
            type="button"
            onClick={turnOnSound}
            aria-label="Ativar som"
            className="absolute right-[2.5%] top-[4%] inline-flex items-center gap-2 rounded-md bg-navy/90 p-1.5 text-sm font-medium text-white shadow-[0_8px_24px_-10px_rgba(11,31,59,0.6)] transition-colors hover:bg-navy sm:px-3.5 sm:py-2"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4">
              <path d="M8.5 2.2a.5.5 0 0 0-.8-.4L4.3 4.5H2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h2.3l3.4 2.7a.5.5 0 0 0 .8-.4V2.2Zm2.6 2.6a.6.6 0 0 1 .85 0 4.5 4.5 0 0 1 0 6.4.6.6 0 1 1-.85-.85 3.3 3.3 0 0 0 0-4.7.6.6 0 0 1 0-.85Z" />
            </svg>
            <span className="hidden sm:inline">Ativar som</span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-sm text-faint">
        Da pergunta à conta, em 1 minuto. Telas reais do produto, com dados de demonstração.
      </figcaption>
    </figure>
  );
}
