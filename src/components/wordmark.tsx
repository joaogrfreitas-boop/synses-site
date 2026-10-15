import Image from "next/image";

// Logo aprovado do board "Opção 1 · Clareza Analítica" (13 out): o "S" de faixas dobradas em gradiente e "synses" em
// Navy. A versão branca só troca a cor da palavra, para fundo Navy. Proporção 800 × 202; mínimo de 120 px de largura.
// Raster: o master vetorial ainda não existe.
const LOGO = { claro: "/brand/synses_logo.png", escuro: "/brand/synses_logo_branco.png" } as const;

export function Logo({ width = 128, onDark = false, priority = false }: { width?: number; onDark?: boolean; priority?: boolean }) {
  const largura = Math.max(120, width);
  return (
    <Image
      src={onDark ? LOGO.escuro : LOGO.claro}
      alt="Synses"
      width={largura}
      height={Math.round((largura * 202) / 800)}
      priority={priority}
    />
  );
}
