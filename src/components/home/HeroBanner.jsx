import React from "react";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section
      aria-label="Selamat datang di UNIZAR"
      style={{
        background: "#064E3B",
        borderRadius: "20px",
        overflow: "hidden",
        color: "#FFFFFF",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          alignItems: "center",
        }}
      >
        {/* Sisi Kiri: Teks Utama & Tombol Aksi */}
        <div
          style={{
            padding: "40px 36px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: ".12em",
              color: "#F2C230",
              textTransform: "uppercase",
            }}
          >
            UNIVERSITAS ISLAM AL-AZHAR MATARAM
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.15,
            }}
          >
            Selamat Datang di Kampus Rahmatan lil 'Alamin
          </h1>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "8px",
            }}
          >
            {/* Tombol PMB */}
            <a
              href="https://pmb.unizar.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#F2C230",
                color: "#053B2C",
                padding: "12px 24px",
                borderRadius: "10px",
                fontWeight: 800,
                fontSize: "15px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              PMB 2027
            </a>

            {/* Tombol Profil Institusi */}
            <Link
              to="/profil"
              style={{
                border: "1.5px solid #FFFFFF",
                color: "#FFFFFF",
                padding: "12px 24px",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Profil institusi
            </Link>
          </div>
        </div>

        {/* Sisi Kanan: Foto Kampus & Card Akreditasi */}
        <div
          style={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            background: "#085D47",
            height: "100%",
            justifyContent: "center",
          }}
        >
          {/* Frame Foto Kampus */}
          <div
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              border: "2px dashed rgba(255, 255, 255, 0.3)",
              maxHeight: "220px",
              position: "relative",
            }}
          >
            <img
              src="/assets/img/gedung-unizar.jpg"
              alt="Gedung Rektorat UNIZAR Mataram"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Card Status Akreditasi BAN-PT */}
          <div
            style={{
              background: "#FFFFFF",
              color: "#13231C",
              borderRadius: "14px",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  background: "#FFF8E1",
                  color: "#7A5900",
                  padding: "8px 10px",
                  borderRadius: "8px",
                  fontSize: "11px",
                  fontWeight: 800,
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                BAN
                <br />
                PT
              </div>
              <div>
                <div style={{ fontSize: "12px", color: "#44574E" }}>
                  Akreditasi institusi
                </div>
                <div style={{ fontSize: "15px", fontWeight: 800 }}>
                  [Baik Sekali]
                </div>
                <div style={{ fontSize: "11px", color: "#44574E" }}>
                  SK No. 123/SK/BAN-PT/2024
                </div>
              </div>
            </div>

            {/* Link Verifikasi ke Halaman BPM */}
            <Link
              to="/bpm"
              style={{
                color: "#0A6B4F",
                fontSize: "13px",
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Verifikasi ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
