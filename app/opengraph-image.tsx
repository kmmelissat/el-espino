import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Salvemos El Espino — Protege el Pulmón Verde de San Salvador";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "#0a1f0e",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        {/* green glow blob */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,212,120,0.25) 0%, transparent 70%)",
          }}
        />

        {/* tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              background: "#22D478",
              color: "#0a1f0e",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.2em",
              padding: "6px 16px",
              borderRadius: 99,
              textTransform: "uppercase",
            }}
          >
            Movimiento Ciudadano
          </div>
        </div>

        {/* headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.0,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          Salvemos El Espino 🌳
        </div>

        {/* sub */}
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.55)",
            maxWidth: 700,
            lineHeight: 1.4,
            marginBottom: 48,
          }}
        >
          91 hectáreas de bosque en peligro. Únete al movimiento y firma la petición.
        </div>

        {/* bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 18 }}>
            salvemoselespino.sv
          </div>
          <div
            style={{
              background: "#FF6B35",
              color: "#ffffff",
              fontSize: 20,
              fontWeight: 800,
              padding: "14px 36px",
              borderRadius: 99,
            }}
          >
            ✍️ Firma Ahora
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
