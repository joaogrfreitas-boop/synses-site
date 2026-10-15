import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Synses · Seu negócio, entendido.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(join(process.cwd(), "public/brand/synses_logo.png"), "base64");
const logoSrc = `data:image/png;base64,${logoData}`;

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          color: "#0B1F3B",
          background:
            "radial-gradient(ellipse at 96% 0%, rgba(0,212,187,0.12), rgba(0,212,187,0) 520px), #F7FAFD",
        }}
      >
        <img src={logoSrc} width={240} height={61} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 84, fontWeight: 600, letterSpacing: "-0.04em" }}>Seu negócio, entendido.</span>
          <div
            style={{
              width: 64,
              height: 6,
              borderRadius: 6,
              marginTop: 28,
              background: "linear-gradient(90deg, #00D4BB, #27A9E1)",
            }}
          />
          <span style={{ fontSize: 34, color: "#425466", maxWidth: "960px", lineHeight: 1.35, marginTop: 28 }}>
            Saiba quanto você ganha no que vende e quanto precisa vender para cobrir seus custos.
          </span>
        </div>
        <span style={{ fontSize: 24, color: "#657386" }}>Cada número mostra a conta e de onde veio.</span>
      </div>
    ),
    size,
  );
}
