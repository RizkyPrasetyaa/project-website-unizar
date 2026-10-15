import React from "react";

export default function Kinerja() {
  const kpi = [
    { label: "Rasio dosen : mahasiswa", v: "1 : 22", w: "70%", trend: "Membaik dari 1 : 27" },
    { label: "Dosen Lektor Kepala & GB", v: "34%", w: "34%", trend: "+6 poin dalam 3 tahun" },
    { label: "Lulus tepat waktu", v: "78%", w: "78%", trend: "Rata-rata 3 tahun" },
    { label: "Masa tunggu kerja", v: "4,1 bln", w: "60%", trend: "Tracer study 2025" },
    { label: "Publikasi bereputasi (3 th)", v: "214", w: "64%", trend: "Scopus/WoS & Sinta 1–2" },
    { label: "HKI tercatat (3 th)", v: "57", w: "48%", trend: "Paten, hak cipta, desain" },
  ];

  return (
    <section
      id="kinerja"
      aria-labelledby="h-kin"
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
            Kinerja Utama
          </div>
          <h2 id="h-kin" style={{ margin: "6px 0 0", fontSize: "26px", color: "#064E3B" }}>
            Sekilas capaian kinerja
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
          Dashboard kinerja lengkap →
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
        {kpi.map((k, idx) => (
          <div
            key={idx}
            style={{
              background: "#F4F8F6",
              borderRadius: "14px",
              padding: "18px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
              <span style={{ fontSize: "13px", color: "#44574E", fontWeight: 600 }}>{k.label}</span>
            </div>
            <div style={{ fontSize: "32px", fontWeight: 800, color: "#064E3B", lineHeight: 1 }}>{k.v}</div>
            <div style={{ height: "6px", background: "#DCE6E0", borderRadius: "999px", overflow: "hidden" }}>
              <div style={{ height: "6px", width: k.w, background: "#0A6B4F" }}></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#44574E" }}>
              <span>{k.trend}</span>
              <button
                type="button"
                style={{
                  border: 0,
                  background: "transparent",
                  fontWeight: 700,
                  color: "#0A6B4F",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                PD Dikti ↗
              </button>
            </div>
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
