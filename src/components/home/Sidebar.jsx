import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      route: "/layanan",
      paramKey: "sub",
      items: [
        { label: "SIAKAD & Layanan Akademik", val: "siakad" },
        { label: "E-Learning / LMS", val: "lms" },
        { label: "Perpustakaan Digital", val: "perpus" },
        { label: "Layanan TIK & Helpdesk", val: "tik" },
        { label: "Sarpras & K3", val: "sarpras" },
        { label: "Layanan Informasi Publik", val: "ppid" },
      ],
    },
    {
      k: "orang",
      mono: "Or",
      label: "Orang",
      route: "/orang",
      paramKey: "tab",
      items: [
        { label: "Pimpinan Universitas", val: "pimpinan" },
        { label: "Dosen & Kepakaran", val: "dosen" },
        { label: "Tenaga Kependidikan", val: "tendik" },
        { label: "Renstra SDM", val: "renstra" },
      ],
    },
    {
      k: "kerjasama",
      mono: "Ks",
      label: "Kerjasama",
      route: "/kerjasama",
      paramKey: "tab",
      items: [
        { label: "Kerjasama Dalam Negeri", val: "dn" },
        { label: "Kerjasama Luar Negeri", val: "ln" },
        { label: "MoU/MoA & Realisasi", val: "mou" },
      ],
    },
    {
      k: "mhs",
      mono: "Mh",
      label: "Kemahasiswaan & Alumni",
      route: "/kemahasiswaan",
      paramKey: "tab",
      items: [
        { label: "Layanan Mahasiswa", val: "layanan" },
        { label: "Prestasi Mahasiswa", val: "prestasi" },
        { label: "Tracer Study & Kepuasan Pengguna", val: "tracer" },
        { label: "Ikatan Alumni & Karir", val: "alumni" },
      ],
    },
  ];

  return (
    <aside
      aria-label="Menu samping"
      style={{
        flex: "1 1 260px",
        maxWidth: "290px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
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

      {/* Accordion Navigation */}
      <nav
        aria-label="Menu samping utama"
        style={{
          background: "#FFFFFF",
          border: "1px solid #DCE6E0",
          borderRadius: "14px",
          overflow: "hidden",
        }}
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
                <span
                  aria-hidden="true"
                  style={{
                    color: "#0A6B4F",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: "4px 0 10px",
                  }}
                >
                  {g.items.map((subItem, idx) => (
                    <li key={idx}>
                      <Link
                        to={`${g.route}?${g.paramKey}=${subItem.val}`}
                        style={{
                          width: "100%",
                          textDecoration: "none",
                          display: "block",
                          padding: "8px 16px 8px 58px",
                          fontSize: "14px",
                          color: "#2B3D35",
                          fontWeight: 500,
                          boxSizing: "border-box",
                        }}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to={g.route}
                      style={{
                        display: "block",
                        padding: "8px 16px 4px 58px",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#0A6B4F",
                        textDecoration: "none",
                      }}
                    >
                      Buka halaman →
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          );
        })}
      </nav>

      {/* Pusat Akreditasi Card */}
      <nav
        aria-label="Pusat Akreditasi"
        style={{
          background: "#FFF8E1",
          border: "1px solid #F2D27A",
          borderRadius: "20px",
          padding: "22px 20px",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            fontWeight: 800,
            letterSpacing: ".1em",
            color: "#8A6500",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          PUSAT AKREDITASI
        </div>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <li>
            <Link
              to="/peta-bukti-banpt"
              style={{
                width: "100%",
                textDecoration: "none",
                display: "block",
                fontWeight: 700,
                fontSize: "15px",
                color: "#13231C",
                padding: "2px 0",
              }}
            >
              Peta Bukti BAN-PT
            </Link>
          </li>
          <li>
            {/* PUSAT DOKUMEN (Kirim state: { tab: "dokumen" } ke Direktori) */}
            <Link
              to="/direktori"
              state={{ tab: "dokumen" }}
              style={{
                textDecoration: "none",
                display: "block",
                fontWeight: 600,
                fontSize: "15px",
                color: "#13231C",
                padding: "2px 0",
              }}
            >
              Pusat Dokumen
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              style={{
                textDecoration: "none",
                display: "block",
                fontWeight: 600,
                fontSize: "15px",
                color: "#13231C",
                padding: "2px 0",
              }}
            >
              Dashboard Kinerja
            </Link>
          </li>
          <li>
            <Link
              to="/transparansi-ppid"
              style={{
                textDecoration: "none",
                display: "block",
                fontWeight: 600,
                fontSize: "15px",
                color: "#13231C",
                padding: "2px 0",
              }}
            >
              Transparansi & PPID
            </Link>
          </li>
          <li>
            <Link
              to="/gug"
              state={{ tab: "wbs" }}
              style={{
                textDecoration: "none",
                display: "block",
                fontWeight: 600,
                fontSize: "15px",
                color: "#13231C",
                padding: "2px 0",
              }}
            >
              Pengaduan / WBS
            </Link>
          </li>
        </ul>
      </nav>

      {/* Card Akses Dokumen */}
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #DCE6E0",
          borderRadius: "20px",
          padding: "22px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div style={{ fontWeight: 800, fontSize: "15px", color: "#13231C" }}>Akses dokumen</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            fontSize: "14px",
            color: "#44574E",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                background: "#E3F1EA",
                color: "#064E3B",
                fontWeight: 800,
                fontSize: "12px",
                padding: "4px 12px",
                borderRadius: "999px",
                flexShrink: 0,
              }}
            >
              Publik
            </span>
            <span>terbuka untuk semua</span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <span
              style={{
                background: "#FFF3C4",
                color: "#6B4E00",
                fontWeight: 800,
                fontSize: "12px",
                padding: "4px 12px",
                borderRadius: "999px",
                flexShrink: 0,
              }}
            >
              Ringkasan
            </span>
            <span style={{ lineHeight: 1.35 }}>ikhtisar publik, dokumen penuh terkunci</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                background: "#FCE8E6",
                color: "#C1272D",
                fontWeight: 800,
                fontSize: "12px",
                padding: "4px 12px",
                borderRadius: "999px",
                flexShrink: 0,
              }}
            >
              Terbatas
            </span>
            <span>login SSO / asesor</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
