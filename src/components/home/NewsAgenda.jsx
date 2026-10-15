import React from "react";

export default function NewsAgenda() {
  const news = [
    {
      cat: "Penjaminan Mutu",
      title: "BPM gelar Audit Mutu Internal siklus 2026 di seluruh fakultas",
      date: "08 Okt 2026",
    },
    { cat: "Penelitian", title: "Dosen UNIZAR raih hibah riset kolaborasi internasional", date: "02 Okt 2026" },
    { cat: "Kemahasiswaan", title: "Mahasiswa juara tingkat nasional pada kompetisi ilmiah", date: "27 Sep 2026" },
  ];

  const agenda = [
    { d: "20", m: "OKT", title: "Rapat Tinjauan Manajemen (RTM)" },
    { d: "28", m: "OKT", title: "Survei kepuasan pemangku kepentingan dibuka" },
    { d: "05", m: "NOV", title: "Pelatihan auditor internal SPMI" },
    { d: "18", m: "NOV", title: "Wisuda Periode II 2026" },
  ];

  return (
    <>
      <section aria-labelledby="h-news" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ flex: "2 1 480px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <h2 id="h-news" style={{ margin: 0, fontSize: "26px", color: "#064E3B" }}>
              Berita & sorotan
            </h2>
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
              Semua berita →
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "14px" }}>
            {news.map((nw, idx) => (
              <article
                key={idx}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: "120px",
                    background: "#D3EBDF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0A6B4F",
                    fontSize: "12px",
                  }}
                >
                  [Foto kegiatan]
                </div>
                <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: ".08em",
                      color: "#8E1B20",
                      textTransform: "uppercase",
                    }}
                  >
                    {nw.cat}
                  </span>
                  <button
                    type="button"
                    style={{
                      border: 0,
                      background: "transparent",
                      textAlign: "left",
                      padding: 0,
                      fontSize: "15px",
                      fontWeight: 700,
                      lineHeight: 1.4,
                      color: "#13231C",
                      cursor: "pointer",
                    }}
                  >
                    {nw.title}
                  </button>
                  <span style={{ fontSize: "12px", color: "#44574E" }}>{nw.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          style={{
            flex: "1 1 280px",
            background: "#FFFFFF",
            border: "1px solid #DCE6E0",
            borderRadius: "16px",
            padding: "22px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "20px", color: "#064E3B" }}>Agenda</h2>
          {agenda.map((ag, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "center",
                padding: "8px 0",
                borderBottom: "1px solid #EEF3F0",
              }}
            >
              <div
                style={{
                  width: "54px",
                  textAlign: "center",
                  background: "#E3F1EA",
                  borderRadius: "10px",
                  padding: "6px 0",
                }}
              >
                <div style={{ fontSize: "20px", fontWeight: 800, color: "#064E3B", lineHeight: 1.1 }}>{ag.d}</div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#0A6B4F" }}>{ag.m}</div>
              </div>
              <div style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1.4 }}>{ag.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Assessor Band */}
      <section
        style={{
          background: "#FFF8E1",
          border: "1px solid #F2D27A",
          borderRadius: "18px",
          padding: "28px 32px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1 1 420px" }}>
          <h2 style={{ margin: "0 0 6px", fontSize: "22px", color: "#3D2E00" }}>Asesor atau mitra? Mulai dari sini.</h2>
          <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "#5A4500" }}>
            Setiap indikator tertaut langsung ke halaman buktinya — dokumen publik terbuka, dokumen terbatas melalui
            login asesor.
          </p>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button
            type="button"
            style={{
              border: 0,
              background: "#064E3B",
              color: "#FFFFFF",
              padding: "13px 20px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Peta Bukti BAN-PT →
          </button>
          <button
            type="button"
            style={{
              border: "1.5px solid #064E3B",
              background: "#FFFFFF",
              color: "#064E3B",
              padding: "12px 20px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Pusat Dokumen
          </button>
        </div>
      </section>
    </>
  );
}
