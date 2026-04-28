import { ImageResponse } from "next/og";

export const alt = "Sai Nitish Bimari - AI Product Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#10130f",
          color: "#f4f0e8",
          padding: "72px",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 20%, rgba(94,234,212,0.26), transparent 28%), radial-gradient(circle at 80% 20%, rgba(245,158,11,0.22), transparent 30%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "26px" }}>
          <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#5eead4" }}>
            Official Portfolio
          </div>
          <div style={{ fontSize: 86, lineHeight: 0.95, fontWeight: 700, maxWidth: 920 }}>
            Sai Nitish Bimari
          </div>
          <div style={{ fontSize: 36, color: "#fbbf24" }}>AI Product Engineer</div>
        </div>
        <div style={{ position: "relative", display: "flex", gap: "18px", fontSize: 26, color: "#ded6c8" }}>
          <span>AI Products</span>
          <span>-</span>
          <span>Full-Stack Systems</span>
          <span>-</span>
          <span>Operational Platforms</span>
        </div>
      </div>
    ),
    size,
  );
}
