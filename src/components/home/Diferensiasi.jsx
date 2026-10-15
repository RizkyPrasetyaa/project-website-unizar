import React from "react";

export default function Diferensiasi() {
  return (
    <section aria-labelledby="h-dif" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: ".12em",
              color: "#8A6500",
              textTransform: "uppercase",
            }}
          >
            Diferensiasi misi
          </div>
          <h2 id="h-dif" style={{ margin: "6px 0 0", fontSize: "26px", color: "#064E3B" }}>
            Keunggulan pembeda UNIZAR
          </h2>
        </div>
        <button
          type="button"
          style={{
            border: 0,
            background: "transparent",
            fontWeight: 700,
            fontSize: "14px",
            color: "#0A6B4F",
            cursor: "pointer",
          }}
        >
          Baca Renstra & RIP →
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "14px" }}>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #DCE6E0",
            borderRadius: "16px",
            padding: "22px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ fontSize: "13px", fontWeight: 800, color: "#C1272D" }}>01</div>
          <div style={{ fontSize: "18px", fontWeight: 800 }}>[Fokus Diferensiasi Misi 1]</div>
          <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: "#44574E" }}>
            Ringkasan capaian & target berdampak sesuai Renstra / RIP. Tautan ke peta jalan dan hasil benchmarking.
          </p>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #DCE6E0",
            borderRadius: "16px",
            padding: "22px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ fontSize: "13px", fontWeight: 800, color: "#C1272D" }}>02</div>
          <div style={{ fontSize: "18px", fontWeight: 800 }}>[Fokus Diferensiasi Misi 2]</div>
          <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: "#44574E" }}>
            Program unggulan tridharma yang menjadi pembeda UNIZAR di tingkat wilayah, nasional, dan internasional.
          </p>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #DCE6E0",
            borderRadius: "16px",
            padding: "22px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ fontSize: "13px", fontWeight: 800, color: "#C1272D" }}>03</div>
          <div style={{ fontSize: "18px", fontWeight: 800 }}>[Fokus Diferensiasi Misi 3]</div>
          <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: "#44574E" }}>
            Rekognisi & apresiasi eksternal — penghargaan, mitra strategis, dan pengakuan kepakaran.
          </p>
        </div>
      </div>
    </section>
  );
}
