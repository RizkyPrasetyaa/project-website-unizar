import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function KemahasiswaanAlumni() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const SERVICES = [
    {
      m: "BK",
      t: "Bimbingan & Konseling",
      d: "Psikolog kampus, rahasia terjamin.",
    },
    { m: "KS", t: "Layanan Kesehatan", d: "Klinik kampus & rujukan." },
    { m: "DS", t: "Layanan Disabilitas", d: "Akomodasi belajar & akses." },
    { m: "BS", t: "Beasiswa", d: "Informasi & pendaftaran." },
    { m: "MB", t: "MBKM", d: "Program belajar di luar prodi." },
    { m: "KW", t: "Kewirausahaan", d: "Inkubasi & pendanaan usaha." },
  ];

  const PRESTASI_STATS = [
    { y: "2021", t: 53, wi: "3.6%", wn: "16.3%", ww: "28.1%" },
    { y: "2022", t: 65, wi: "5.4%", wn: "21.8%", ww: "31.8%" },
    { y: "2023", t: 76, wi: "8.1%", wn: "26.3%", ww: "34.5%" },
    { y: "2024", t: 87, wi: "10.0%", wn: "32.7%", ww: "36.3%" },
    { y: "2025", t: 101, wi: "12.7%", wn: "38.1%", ww: "40.9%" },
  ];

  const LATEST_PRESTASI = [
    {
      lv: "INTERNASIONAL",
      bg: "#064E3B",
      fg: "#FFFFFF",
      t: "[Juara kompetisi debat internasional]",
      w: "[Nama mahasiswa] · [Prodi] · Sep 2026",
    },
    {
      lv: "NASIONAL",
      bg: "#3A9B76",
      fg: "#FFFFFF",
      t: "[Medali emas PIMNAS]",
      w: "[Tim] · [Prodi] · Agu 2026",
    },
    {
      lv: "NASIONAL",
      bg: "#3A9B76",
      fg: "#FFFFFF",
      t: "[Juara olimpiade sains nasional]",
      w: "[Nama] · [Prodi] · Jul 2026",
    },
    {
      lv: "WILAYAH",
      bg: "#F2C230",
      fg: "#3D2E00",
      t: "[Juara MTQ mahasiswa wilayah]",
      w: "[Nama] · [Prodi] · Jun 2026",
    },
  ];

  const ORMAWA_LIST = [
    "BEM Universitas",
    "DPM",
    "UKM Kerohanian",
    "UKM Tahfidz",
    "UKM Olahraga",
    "UKM Seni & Budaya",
    "UKM Pecinta Alam",
    "UKM Jurnalistik",
    "UKM Penelitian",
    "UKM Kewirausahaan",
    "UKM Bahasa Asing",
    "KSR PMI",
  ];

  const JOB_LIST = [
    { t: "[Posisi lowongan 1]", c: "[Perusahaan] · Mataram", d: "Tutup [tgl]" },
    {
      t: "[Posisi lowongan 2]",
      c: "[Instansi] · Lombok Tengah",
      d: "Tutup [tgl]",
    },
    { t: "[Program magang]", c: "[Mitra industri]", d: "Tutup [tgl]" },
  ];

  return (
    <div
      style={{
        background: "#F4F8F6",
        minHeight: "100vh",
        color: "#13231C",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        scrollBehavior: "smooth",
      }}
    >
      {/* Header Banner Hijau */}
      <section style={{ background: "#064E3B", color: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "22px 32px 34px",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              flex: "1 1 560px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <nav
              aria-label="Breadcrumb"
              style={{ fontSize: "13px", color: "#B7DCC9" }}
            >
              <Link to="/" style={{ color: "#B7DCC9", textDecoration: "none" }}>
                Beranda
              </Link>{" "}
              / <span style={{ color: "#FFFFFF" }}>Kemahasiswaan & Alumni</span>
            </nav>
            <h1
              style={{
                margin: 0,
                fontSize: "40px",
                lineHeight: 1.1,
                fontWeight: 800,
              }}
            >
              Tumbuh selama kuliah, terhubung setelahnya
            </h1>
          </div>

          <nav
            aria-label="Lompat ke bagian"
            style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
          >
            <button
              onClick={() => scrollToSection("layanan")}
              style={{
                background: "rgba(255,255,255,.1)",
                color: "#FFFFFF",
                padding: "10px 16px",
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: "14px",
                border: 0,
                cursor: "pointer",
              }}
            >
              Layanan Mahasiswa
            </button>
            <button
              onClick={() => scrollToSection("prestasi")}
              style={{
                background: "rgba(255,255,255,.1)",
                color: "#FFFFFF",
                padding: "10px 16px",
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: "14px",
                border: 0,
                cursor: "pointer",
              }}
            >
              Prestasi Mahasiswa
            </button>
            <button
              onClick={() => scrollToSection("ormawa")}
              style={{
                background: "rgba(255,255,255,.1)",
                color: "#FFFFFF",
                padding: "10px 16px",
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: "14px",
                border: 0,
                cursor: "pointer",
              }}
            >
              Ormawa & UKM
            </button>
            <button
              onClick={() => scrollToSection("alumni")}
              style={{
                background: "#F2C230",
                color: "#053B2C",
                padding: "10px 16px",
                borderRadius: "999px",
                fontWeight: 800,
                fontSize: "14px",
                border: 0,
                cursor: "pointer",
              }}
            >
              Alumni & Karir
            </button>
          </nav>
        </div>
      </section>

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "28px 32px 64px",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        {/* Section Layanan Mahasiswa dengan Margin Offset Header */}
        <section id="layanan" style={{ scrollMarginTop: "120px" }}>
          <h2
            style={{ margin: "0 0 14px", fontSize: "24px", color: "#064E3B" }}
          >
            Layanan untuk Mahasiswa
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {SERVICES.map((s, idx) => (
              <a
                key={idx}
                href="#"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "16px",
                  padding: "18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  textDecoration: "none",
                  color: "#13231C",
                }}
              >
                <span
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "#E3F1EA",
                    color: "#064E3B",
                    fontWeight: 800,
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {s.m}
                </span>
                <span
                  style={{ fontWeight: 800, fontSize: "15px", lineHeight: 1.3 }}
                >
                  {s.t}
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#44574E",
                    lineHeight: 1.45,
                  }}
                >
                  {s.d}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Section Prestasi Mahasiswa */}
        <div
          id="prestasi"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            scrollMarginTop: "120px",
          }}
        >
          <section
            style={{
              flex: "3 1 560px",
              background: "#FFFFFF",
              border: "1px solid #DCE6E0",
              borderRadius: "18px",
              padding: "26px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              <div>
                <h2 style={{ margin: 0, fontSize: "22px", color: "#064E3B" }}>
                  Prestasi Mahasiswa per Tingkat
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  fontSize: "12px",
                  color: "#44574E",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    gap: "6px",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "3px",
                      background: "#064E3B",
                    }}
                  ></span>
                  Internasional
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    gap: "6px",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "3px",
                      background: "#3A9B76",
                    }}
                  ></span>
                  Nasional
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    gap: "6px",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "3px",
                      background: "#F2C230",
                    }}
                  ></span>
                  Wilayah
                </span>
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {PRESTASI_STATS.map((p, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "50px 1fr 44px",
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontWeight: 800, color: "#44574E" }}>
                    {p.y}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      height: "22px",
                      borderRadius: "6px",
                      overflow: "hidden",
                      background: "#F4F8F6",
                    }}
                  >
                    <span style={{ width: p.wi, background: "#064E3B" }}></span>
                    <span style={{ width: p.wn, background: "#3A9B76" }}></span>
                    <span style={{ width: p.ww, background: "#F2C230" }}></span>
                  </span>
                  <span
                    style={{
                      fontWeight: 800,
                      color: "#064E3B",
                      textAlign: "right",
                    }}
                  >
                    {p.t}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section
            style={{
              flex: "2 1 380px",
              background: "#FFFFFF",
              border: "1px solid #DCE6E0",
              borderRadius: "18px",
              padding: "26px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "22px", color: "#064E3B" }}>
              Prestasi Terbaru
            </h2>
            {LATEST_PRESTASI.map((l, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  gap: "12px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid #EEF3F0",
                }}
              >
                <span
                  style={{
                    flex: "none",
                    fontSize: "11px",
                    fontWeight: 800,
                    padding: "4px 8px",
                    borderRadius: "6px",
                    background: l.bg,
                    color: l.fg,
                    height: "fit-content",
                  }}
                >
                  {l.lv}
                </span>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: "14px" }}>
                    {l.t}
                  </span>
                  <span style={{ fontSize: "12px", color: "#44574E" }}>
                    {l.w}
                  </span>
                </span>
              </div>
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "auto",
                paddingTop: "8px",
              }}
            >
              <a
                href="#"
                style={{
                  display: "inline-block",
                  background: "#064E3B",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  borderRadius: "14px",
                  padding: "10px 18px",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                Laporkan Prestasi →
              </a>
            </div>
          </section>
        </div>

        {/* Section Ormawa & UKM */}
        <section
          id="ormawa"
          style={{
            background: "#FFFFFF",
            border: "1px solid #DCE6E0",
            borderRadius: "18px",
            padding: "26px",
            scrollMarginTop: "120px",
          }}
        >
          <h2
            style={{ margin: "0 0 14px", fontSize: "22px", color: "#064E3B" }}
          >
            Organisasi Mahasiswa & UKM
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {ORMAWA_LIST.map((u, idx) => (
              <a
                key={idx}
                href="#"
                style={{
                  background: "#F4F8F6",
                  border: "1px solid #DCE6E0",
                  borderRadius: "999px",
                  padding: "9px 16px",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#13231C",
                  textDecoration: "none",
                }}
              >
                {u}
              </a>
            ))}
          </div>
        </section>

        {/* Section Alumni & Karir */}
        <section
          id="alumni"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            scrollMarginTop: "120px",
          }}
        >
          <div
            style={{
              flex: "3 1 560px",
              background: "#064E3B",
              color: "#FFFFFF",
              borderRadius: "18px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "24px" }}>
              Ke mana lulusan UNIZAR melangkah?
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
                gap: "10px",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "12px",
                  padding: "14px",
                }}
              >
                <div style={{ fontSize: "26px", fontWeight: 800 }}>4,1 bln</div>
                <div style={{ fontSize: "12px", color: "#D3EBDF" }}>
                  Masa tunggu kerja
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "12px",
                  padding: "14px",
                }}
              >
                <div style={{ fontSize: "26px", fontWeight: 800 }}>72%</div>
                <div style={{ fontSize: "12px", color: "#D3EBDF" }}>
                  Bekerja sesuai bidang
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "12px",
                  padding: "14px",
                }}
              >
                <div style={{ fontSize: "26px", fontWeight: 800 }}>11%</div>
                <div style={{ fontSize: "12px", color: "#D3EBDF" }}>
                  Berwirausaha
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "12px",
                  padding: "14px",
                }}
              >
                <div style={{ fontSize: "26px", fontWeight: 800 }}>85%</div>
                <div style={{ fontSize: "12px", color: "#D3EBDF" }}>
                  Kepuasan pengguna
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "4px",
              }}
            >
              <a
                href="#"
                style={{
                  background: "#F2C230",
                  color: "#053B2C",
                  padding: "10px 18px",
                  borderRadius: "14px",
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                Isi Tracer Study →
              </a>
              <a
                href="#"
                style={{
                  background: "#064E3B",
                  border: "1.5px solid #D3EBDF",
                  color: "#FFFFFF",
                  padding: "10px 18px",
                  borderRadius: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Laporan Tracer Study →
              </a>
            </div>
          </div>

          <div
            style={{
              flex: "2 1 380px",
              background: "#FFFFFF",
              border: "1px solid #DCE6E0",
              borderRadius: "18px",
              padding: "26px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "22px", color: "#064E3B" }}>
              Pusat Karir & Ikatan Alumni
            </h2>
            {JOB_LIST.map((j, idx) => (
              <a
                key={idx}
                href="#"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  padding: "12px 0",
                  borderBottom: "1px solid #EEF3F0",
                  textDecoration: "none",
                  color: "#13231C",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <span style={{ fontWeight: 700 }}>{j.t}</span>
                  <span style={{ fontSize: "12px", color: "#44574E" }}>
                    {j.c}
                  </span>
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#8E1B20",
                    whiteSpace: "nowrap",
                  }}
                >
                  {j.d}
                </span>
              </a>
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "auto",
                paddingTop: "12px",
              }}
            >
              <a
                href="#"
                style={{
                  background: "#064E3B",
                  color: "#FFFFFF",
                  padding: "10px 18px",
                  borderRadius: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Semua Lowongan →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
