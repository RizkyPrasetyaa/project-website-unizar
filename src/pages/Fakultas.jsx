import React from "react";
import { Link } from "react-router-dom";

export default function Fakultas() {
  const facs = [
    {
      n: "Fakultas Kedokteran",
      d: "Pendidikan dokter & Profesi Dokter.",
      href: "/prodi",
    },
    {
      n: "Fakultas Teknik",
      d: "S1 Teknik Sipil & S1 Ilmu Komputer.",
      href: "#",
    },
    { n: "Fakultas Hukum", d: "S1 Hukum.", href: "#" },
    {
      n: "Fakultas Ekonomi & Bisnis",
      d: "S1 Akuntansi & S1 Ekonomi Pembangunan.",
      href: "#",
    },
    {
      n: "Fakultas Pertanian",
      d: "S1 Agribisnis & S1 Agroekotenologi.",
      href: "#",
    },
    { n: "Fakultas MIPA", d: "S1 Biologi.", href: "#" },
    {
      n: "Fakultas Agama Islam",
      d: "Bisnis Ekonomi Syariah & Menejemen Syariah.",
      href: "#",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        color: "#13231C",
        background: "#F4F8F6",
        minHeight: "100vh",
        padding: "32px",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div>
          <h1
            style={{
              color: "#064E3B",
              fontSize: "38px",
              fontWeight: 800,
              margin: 0,
            }}
          >
            Fakultas & Program Studi
          </h1>
          <p style={{ color: "#44574E", marginTop: "6px" }}>
            Direktori fakultas penyelenggara pendidikan sarjana dan profesi di
            UNIZAR.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "16px",
          }}
        >
          {facs.map((f, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <h2 style={{ color: "#064E3B", margin: 0, fontSize: "22px" }}>
                {f.n}
              </h2>
              <p style={{ color: "#44574E", fontSize: "14px", margin: 0 }}>
                {f.d}
              </p>
              <Link
                to={f.href}
                style={{
                  color: "#0A6B4F",
                  fontWeight: 700,
                  fontSize: "14px",
                  marginTop: "auto",
                  paddingTop: "12px",
                }}
              >
                Lihat program studi →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
