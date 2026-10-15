import React, { useState } from "react";

export default function Sidebar() {
  const [sideOpen, setSideOpen] = useState({
    layanan: true,
    orang: false,
    kerjasama: false,
    mhs: false,
  });

  const toggleSide = (key) => {
    setSideOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const sideGroups = [
    {
      k: "layanan",
      mono: "Ly",
      label: "Layanan",
      items: [
        "SIAKAD & Layanan Akademik",
        "E-Learning / LMS",
        "Perpustakaan Digital",
        "Layanan TIK & Helpdesk",
        "Sarpras & K3",
        "Layanan Informasi Publik",
      ],
    },
    {
      k: "orang",
      mono: "Or",
      label: "Orang",
      items: ["Pimpinan Universitas", "Dosen & Kepakaran", "Tenaga Kependidikan", "Renstra SDM"],
    },
    {
      k: "kerjasama",
      mono: "Ks",
      label: "Kerjasama",
      items: ["Kerjasama Dalam Negeri", "Kerjasama Luar Negeri", "MoU/MoA & Realisasi"],
    },
    {
      k: "mhs",
      mono: "Mh",
      label: "Kemahasiswaan & Alumni",
      items: ["Layanan Mahasiswa", "Prestasi Mahasiswa", "Tracer Study & Kepuasan Pengguna", "Ikatan Alumni & Karir"],
    },
  ];

  return (
    <aside
      aria-label="Menu samping"
      style={{ flex: "1 1 260px", maxWidth: "290px", display: "flex", flexDirection: "column", gap: "16px" }}
    >
      {/* Tombol Login SSO */}
      <button
        type="button"
        style={{
          width: "100%",
          border: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          background: "#064E3B",
          color: "#FFFFFF",
          padding: "14px 16px",
          borderRadius: "12px",
          fontWeight: 700,
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <path d="M10 17l5-5-5-5"></path>
          <path d="M15 12H3"></path>
        </svg>
        Masuk · SSO UNIZAR
      </button>

      {/* Menu Samping Utama Accordion */}
      <nav
        aria-label="Menu samping utama"
        style={{ background: "#FFFFFF", border: "1px solid #DCE6E0", borderRadius: "14px", overflow: "hidden" }}
      >
        {sideGroups.map((g) => {
          const isOpen = sideOpen[g.k];
          return (
            <div key={g.k} style={{ borderBottom: "1px solid #EEF3F0" }}>
              <button
                type="button"
                onClick={() => toggleSide(g.k)}
                style={{
                  width: "100%",
                  border: 0,
                  background: isOpen ? "#F4F8F6" : "#FFFFFF",
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#13231C",
                  minHeight: "48px",
                }}
              >
                <span
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "8px",
                    background: "#E3F1EA",
                    color: "#0A6B4F",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight: 800,
                  }}
                >
                  {g.mono}
                </span>
                <span style={{ flex: 1 }}>{g.label}</span>
                <span aria-hidden="true" style={{ color: "#0A6B4F", fontSize: "18px", fontWeight: 700 }}>
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <ul style={{ listStyle: "none", margin: 0, padding: "4px 0 10px" }}>
                  {g.items.map((itemLabel, idx) => (
                    <li key={idx}>
                      <button
                        type="button"
                        style={{
                          width: "100%",
                          border: 0,
                          background: "transparent",
                          textAlign: "left",
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "8px",
                          padding: "9px 16px 9px 58px",
                          fontSize: "14px",
                          color: "#2B3D35",
                          cursor: "pointer",
                        }}
                      >
                        <span>{itemLabel}</span>
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      type="button"
                      style={{
                        width: "100%",
                        border: 0,
                        background: "transparent",
                        textAlign: "left",
                        display: "block",
                        padding: "9px 16px 4px 58px",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#0A6B4F",
                        cursor: "pointer",
                      }}
                    >
                      Buka halaman →
                    </button>
                  </li>
                </ul>
              )}
            </div>
          );
        })}
      </nav>

      {/* Pusat Akreditasi Hub Card */}
      <nav
        aria-label="Pusat Akreditasi"
        style={{ background: "#FFF8E1", border: "1px solid #F2D27A", borderRadius: "14px", padding: "16px" }}
      >
        <div
          style={{
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: ".12em",
            color: "#7A5900",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          PUSAT AKREDITASI
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
          <li>
            <button
              type="button"
              style={{
                width: "100%",
                border: 0,
                background: "transparent",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 6px",
                fontWeight: 700,
                fontSize: "14px",
                color: "#13231C",
                cursor: "pointer",
              }}
            >
              <span>Peta Bukti BAN-PT</span>
              <span
                style={{
                  background: "#064E3B",
                  color: "#FFF",
                  fontSize: "11px",
                  padding: "2px 8px",
                  borderRadius: "999px",
                }}
              >
                39
              </span>
            </button>
          </li>
          <li>
            <button
              type="button"
              style={{
                width: "100%",
                border: 0,
                background: "transparent",
                textAlign: "left",
                display: "block",
                padding: "10px 6px",
                fontWeight: 600,
                fontSize: "14px",
                color: "#13231C",
                cursor: "pointer",
              }}
            >
              Pusat Dokumen
            </button>
          </li>
          <li>
            <button
              type="button"
              style={{
                width: "100%",
                border: 0,
                background: "transparent",
                textAlign: "left",
                display: "block",
                padding: "10px 6px",
                fontWeight: 600,
                fontSize: "14px",
                color: "#13231C",
                cursor: "pointer",
              }}
            >
              Dashboard Kinerja
            </button>
          </li>
          <li>
            <button
              type="button"
              style={{
                width: "100%",
                border: 0,
                background: "transparent",
                textAlign: "left",
                display: "block",
                padding: "10px 6px",
                fontWeight: 600,
                fontSize: "14px",
                color: "#13231C",
                cursor: "pointer",
              }}
            >
              Transparansi & PPID
            </button>
          </li>
          <li>
            <button
              type="button"
              style={{
                width: "100%",
                border: 0,
                background: "transparent",
                textAlign: "left",
                display: "block",
                padding: "10px 6px",
                fontWeight: 600,
                fontSize: "14px",
                color: "#13231C",
                cursor: "pointer",
              }}
            >
              Pengaduan / WBS
            </button>
          </li>
        </ul>
      </nav>

      {/* Legenda Akses Dokumen */}
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #DCE6E0",
          borderRadius: "14px",
          padding: "16px",
          fontSize: "13px",
          color: "#44574E",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div style={{ fontWeight: 700, color: "#13231C" }}>Akses dokumen</div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: "999px",
              background: "#E3F1EA",
              color: "#064E3B",
            }}
          >
            Publik
          </span>
          terbuka untuk semua
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: "999px",
              background: "#FFF1C2",
              color: "#6B4E00",
            }}
          >
            Ringkasan
          </span>
          ikhtisar publik, dokumen penuh terkunci
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: "999px",
              background: "#FBE3E4",
              color: "#8E1B20",
            }}
          >
            Terbatas
          </span>
          login SSO / asesor
        </div>
      </div>
    </aside>
  );
}
