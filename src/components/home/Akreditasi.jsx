import React from "react";

export default function Akreditasi() {
  const akr = [
    { n: "12", label: "Unggul", pct: "40,0%", c: "#0A6B4F" },
    { n: "9", label: "Baik Sekali", pct: "30,0%", c: "#3A9B76" },
    { n: "6", label: "Baik", pct: "20,0%", c: "#F2C230" },
    { n: "3", label: "Terakreditasi / Sementara", pct: "10,0%", c: "#C1272D" },
  ];

  return (
    <section
      aria-labelledby="h-akr"
      style={{ background: "#FFFFFF", border: "1px solid #DCE6E0", borderRadius: "18px", padding: "28px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "16px",
          flexWrap: "wrap",
          marginBottom: "18px",
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
            Pengakuan mutu
          </div>
          <h2 id="h-akr" style={{ margin: "6px 0 0", fontSize: "26px", color: "#064E3B" }}>
            Status akreditasi program studi
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            fontSize: "13px",
            color: "#44574E",
            flexWrap: "wrap",
          }}
        >
          <span>Diperbarui 10 Okt 2026</span>
          <button
            type="button"
            style={{
              border: 0,
              background: "transparent",
              fontWeight: 700,
              color: "#0A6B4F",
              cursor: "pointer",
              fontSize: "13px",
            }}
          >
            Sumber: PD Dikti / LAM ↗
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "12px" }}>
        {akr.map((a, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #DCE6E0",
              borderRadius: "14px",
              padding: "18px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              borderTop: `5px solid ${a.c}`,
            }}
          >
            <div style={{ fontSize: "38px", fontWeight: 800, color: "#064E3B", lineHeight: 1 }}>{a.n}</div>
            <div style={{ fontSize: "14px", fontWeight: 700 }}>{a.label}</div>
            <div style={{ fontSize: "12px", color: "#44574E" }}>{a.pct}</div>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: "12px",
          fontSize: "12px",
          color: "#6B4E00",
          background: "#FFF8E1",
          display: "inline-block",
          padding: "4px 10px",
          borderRadius: "6px",
        }}
      >
        Data simulasi — angka akan tersinkron dengan PD Dikti
      </div>
    </section>
  );
}
