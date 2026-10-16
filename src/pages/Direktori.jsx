import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Direktori() {
  const location = useLocation();

  // Mapping label untuk Breadcrumb Dinamis
  const TAB_LABELS = {
    unit: "Unit Kerja & Kontak",
    dosen: "Direktori Dosen & Pakar",
    prodi: "Direktori Program Studi",
    dokumen: "Pusat Dokumen",
    kerjasama: "Direktori MoU/MoA",
    peta: "Peta Kampus",
  };

  // Fallback default dipastikan selalu ke 'unit' (sub-menu pertama)
  const [tab, setTab] = useState(location.state?.tab || "unit");

  useEffect(() => {
    if (location.state?.tab) {
      setTab(location.state.tab);
    } else {
      setTab("unit");
    }
  }, [location.state, location.key]);

  // Data & State Simulasi Khusus Sub-Menu Pusat Dokumen
  const [docFilter, setDocFilter] = useState("all");
  const [selectedIdx, setSelectedIdx] = useState(0);

  const STY = {
    pub: {
      badge: "Publik",
      bg: "#E3F1EA",
      fg: "#064E3B",
      action: "Unduh PDF",
      actFg: "#0A6B4F",
      btnBg: "#0A6B4F",
      btnFg: "#FFFFFF",
    },
    sum: {
      badge: "Ringkasan",
      bg: "#FFF1C2",
      fg: "#6B4E00",
      action: "Lihat ringkasan",
      actFg: "#6B4E00",
      btnBg: "#FFF1C2",
      btnFg: "#3D2E00",
    },
    lock: {
      badge: "Terbatas",
      bg: "#FBE3E4",
      fg: "#8E1B20",
      action: "Masuk untuk membuka",
      actFg: "#8E1B20",
      btnBg: "#8E1B20",
      btnFg: "#FFFFFF",
    },
  };

  const DOCS = [
    {
      name: "Statuta Universitas Islam Al-Azhar",
      unit: "Yayasan",
      cat: "Peraturan",
      sk: "No. [—]/YYS/2024",
      date: "12 Mar 2024",
      ver: "v3.0",
      ind: "24",
      acc: "pub",
      note: "Memuat identitas, penyelenggaraan tridharma, sistem pengelolaan, SPMI, pendanaan, dan ketentuan penutup.",
    },
    {
      name: "Rencana Induk Pengembangan 2025–2045",
      unit: "Rektorat",
      cat: "Renstra",
      sk: "No. [—]/SK/2025",
      date: "02 Jan 2025",
      ver: "v1.1",
      ind: "36B",
      acc: "sum",
      note: "Ringkasan eksekutif publik memuat peta jalan, indikator, dan hasil benchmarking; versi lengkap terbatas.",
    },
    {
      name: "Renstra 2025–2029",
      unit: "Rektorat",
      cat: "Renstra",
      sk: "No. [—]/SK/2025",
      date: "02 Jan 2025",
      ver: "v1.2",
      ind: "24, 36B",
      acc: "pub",
      note: "Rencana strategis jangka menengah beserta target terukur per tahun.",
    },
    {
      name: "Struktur Organisasi & Tata Kerja",
      unit: "Rektorat",
      cat: "Peraturan",
      sk: "No. [—]/SK/2025",
      date: "15 Feb 2025",
      ver: "v2.0",
      ind: "24",
      acc: "pub",
      note: "Lima unsur wajib: penyusun kebijakan, pelaksana akademik, pengawas & penjamin mutu, penunjang akademik, pelaksana administrasi.",
    },
    {
      name: "Kebijakan SPMI",
      unit: "BPM",
      cat: "SPMI",
      sk: "No. [—]/SK/2026",
      date: "06 Jan 2026",
      ver: "v4.0",
      ind: "1",
      acc: "lock",
      note: "Dokumen inti SPMI. Ikhtisar publik tersedia pada halaman BPM.",
    },
    {
      name: "Laporan Audit Mutu Internal 2025",
      unit: "BPM",
      cat: "Laporan",
      sk: "No. [—]/BPM/2025",
      date: "30 Sep 2025",
      ver: "v1.0",
      ind: "2, 25",
      acc: "lock",
      note: "Temuan, rekomendasi, dan status tindak lanjut per unit.",
    },
    {
      name: "Kode Etik Dosen, Tendik & Mahasiswa",
      unit: "Rektorat",
      cat: "Pedoman",
      sk: "No. [—]/SK/2024",
      date: "20 Agu 2024",
      ver: "v1.3",
      ind: "28B",
      acc: "pub",
      note: "Berlaku untuk seluruh sivitas akademika, termasuk mekanisme penegakan.",
    },
    {
      name: "Pedoman PPKS",
      unit: "Satgas PPKS",
      cat: "Pedoman",
      sk: "No. [—]/SK/2025",
      date: "11 Mar 2025",
      ver: "v1.1",
      ind: "28C",
      acc: "pub",
      note: "Pencegahan dan penanganan kekerasan seksual, perundungan, dan intoleransi.",
    },
    {
      name: "Laporan Tahunan 2025",
      unit: "Rektorat",
      cat: "Laporan",
      sk: "—",
      date: "28 Feb 2026",
      ver: "v1.0",
      ind: "28A",
      acc: "sum",
      note: "Ikhtisar publik kinerja tahunan; laporan lengkap untuk internal dan asesor.",
    },
  ];

  const countByAcc = (k) => (k === "all" ? DOCS.length : DOCS.filter((d) => d.acc === k).length);
  const filteredDocs = DOCS.filter((d) => docFilter === "all" || d.acc === docFilter);
  const selDoc = DOCS[selectedIdx] || DOCS[0];
  const selStyle = STY[selDoc.acc];

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        color: "#13231C",
        background: "#F4F8F6",
        minHeight: "100vh",
      }}
    >
      {/* Banner Header Hijau Persis Profil */}
      <section style={{ background: "#064E3B", color: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "22px 32px 0",
          }}
        >
          {/* Breadcrumb Dinamis */}
          <nav aria-label="Breadcrumb" style={{ fontSize: "13px", color: "#B7DCC9", marginBottom: "12px" }}>
            <Link to="/" style={{ color: "#B7DCC9", textDecoration: "none" }}>
              Beranda
            </Link>{" "}
            / <span style={{ color: "#B7DCC9" }}>Direktori</span> /{" "}
            <span style={{ color: "#FFFFFF", fontWeight: 600 }}>{TAB_LABELS[tab] || "Unit Kerja & Kontak"}</span>
          </nav>

          <div style={{ paddingBottom: "20px" }}>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#F2C230",
                letterSpacing: ".12em",
                textTransform: "uppercase",
              }}
            >
              Universitas Islam Al-Azhar Mataram
            </span>
            <h1 style={{ margin: "6px 0 0", fontSize: "40px", fontWeight: 800 }}>Direktori UNIZAR</h1>
          </div>

          {/* Sub-Menu Navigasi Tab Persis Profil */}
          <div
            role="tablist"
            style={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
              overflowX: "auto",
            }}
          >
            {[
              ["unit", "Unit Kerja & Kontak"],
              ["dosen", "Direktori Dosen & Pakar"],
              ["prodi", "Direktori Program Studi"],
              ["dokumen", "Pusat Dokumen"],
              ["kerjasama", "Direktori MoU/MoA"],
              ["peta", "Peta Kampus"],
            ].map(([k, label]) => (
              <button
                key={k}
                type="button"
                onClick={() => setTab(k)}
                style={{
                  border: 0,
                  cursor: "pointer",
                  padding: "12px 16px",
                  fontSize: "14px",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  borderRadius: "12px 12px 0 0",
                  background: tab === k ? "#F4F8F6" : "transparent",
                  color: tab === k ? "#064E3B" : "#D3EBDF",
                  minHeight: "44px",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Konten Utama Halaman Direktori */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "32px 32px 64px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* 1. SUB-MENU: UNIT KERJA & KONTAK (DEFAULT) */}
        {tab === "unit" && (
          <section
            style={{
              background: "#FFFFFF",
              border: "1px solid #DCE6E0",
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 800,
                color: "#8A6500",
                textTransform: "uppercase",
              }}
            >
              INFORMASI KONTAK & ALAMAT
            </span>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#064E3B",
                margin: "8px 0 12px",
              }}
            >
              Unit Kerja & Kontak Kampus
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#44574E",
                lineHeight: 1.6,
                margin: "0 0 20px",
              }}
            >
              Daftar biro, lembaga, dan unit kerja operasional di lingkungan Universitas Islam Al-Azhar.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                "Rektorat & Sekretariat",
                "Badan Penjaminan Mutu (BPM)",
                "LPPM UNIZAR",
                "Biro Keuangan & Administrasi",
                "Biro Kemahasiswaan",
                "UPT Perpustakaan",
              ].map((u, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid #E3F1EA",
                    padding: "18px",
                    borderRadius: "12px",
                    background: "#F4F8F6",
                    borderLeft: "4px solid #0A6B4F",
                  }}
                >
                  <h4
                    style={{
                      margin: "0 0 6px",
                      color: "#064E3B",
                      fontSize: "16px",
                      fontWeight: 800,
                    }}
                  >
                    {u}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      color: "#44574E",
                      lineHeight: 1.5,
                    }}
                  >
                    Email: unit{i + 1}@unizar.ac.id
                    <br />
                    Lokasi: Gedung Rektorat Lt. 2
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2. SUB-MENU: DIREKTORI DOSEN & PAKAR */}
        {tab === "dosen" && (
          <section
            style={{
              background: "#FFFFFF",
              border: "1px solid #DCE6E0",
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 800,
                color: "#8A6500",
                textTransform: "uppercase",
              }}
            >
              CIVITAS AKADEMIKA
            </span>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#064E3B",
                margin: "8px 0 12px",
              }}
            >
              Direktori Dosen & Pakar
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#44574E",
                lineHeight: 1.6,
                margin: "0 0 20px",
              }}
            >
              Pencarian kepakaran, profil akademis, dan rekam jejak riset dosen UNIZAR.
            </p>
            <input
              type="search"
              placeholder="Cari nama dosen atau bidang keahlian..."
              style={{
                width: "100%",
                height: "46px",
                borderRadius: "10px",
                border: "1.5px solid #B9CCC2",
                padding: "0 14px",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              {[1, 2, 3, 4].map((d) => (
                <div
                  key={d}
                  style={{
                    border: "1px solid #DCE6E0",
                    borderRadius: "14px",
                    padding: "20px",
                    textAlign: "center",
                    background: "#F4F8F6",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "#0A6B4F",
                      color: "#FFF",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 12px",
                      fontWeight: 800,
                      fontSize: "18px",
                    }}
                  >
                    Dr
                  </div>
                  <h4
                    style={{
                      margin: "0 0 4px",
                      color: "#13231C",
                      fontSize: "16px",
                      fontWeight: 800,
                    }}
                  >
                    Nama Dosen, M.T.
                  </h4>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#0A6B4F",
                      fontWeight: 700,
                    }}
                  >
                    Pakar Sistem Informasi
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. SUB-MENU: DIREKTORI PROGRAM STUDI */}
        {tab === "prodi" && (
          <section
            style={{
              background: "#FFFFFF",
              border: "1px solid #DCE6E0",
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 800,
                color: "#8A6500",
                textTransform: "uppercase",
              }}
            >
              PROGRAM AKADEMIK
            </span>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#064E3B",
                margin: "8px 0 16px",
              }}
            >
              Direktori Program Studi
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "16px",
              }}
            >
              <div
                style={{
                  background: "#F4F8F6",
                  padding: "18px",
                  borderRadius: "12px",
                  borderLeft: "4px solid #0A6B4F",
                }}
              >
                <h4
                  style={{
                    margin: "0 0 8px",
                    color: "#064E3B",
                    fontSize: "16px",
                  }}
                >
                  Fakultas Kedokteran
                </h4>
                <p style={{ margin: 0, fontSize: "14px", color: "#44574E" }}>S1 Pendidikan Dokter · Profesi Dokter</p>
              </div>
              <div
                style={{
                  background: "#F4F8F6",
                  padding: "18px",
                  borderRadius: "12px",
                  borderLeft: "4px solid #0A6B4F",
                }}
              >
                <h4
                  style={{
                    margin: "0 0 8px",
                    color: "#064E3B",
                    fontSize: "16px",
                  }}
                >
                  Fakultas Teknik
                </h4>
                <p style={{ margin: 0, fontSize: "14px", color: "#44574E" }}>S1 Teknik Sipil · S1 Informatika</p>
              </div>
              <div
                style={{
                  background: "#F4F8F6",
                  padding: "18px",
                  borderRadius: "12px",
                  borderLeft: "4px solid #0A6B4F",
                }}
              >
                <h4
                  style={{
                    margin: "0 0 8px",
                    color: "#064E3B",
                    fontSize: "16px",
                  }}
                >
                  Fakultas Ekonomi
                </h4>
                <p style={{ margin: 0, fontSize: "14px", color: "#44574E" }}>S1 Akuntansi · S1 Manajemen</p>
              </div>
            </div>
          </section>
        )}

        {/* 4. SUB-MENU: PUSAT DOKUMEN (DENGAN BADGE STATS) */}
        {tab === "dokumen" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Header Judul & Badge Statistik */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h2 style={{ margin: "0 0 4px", fontSize: "28px", color: "#064E3B", fontWeight: 800 }}>
                  Pusat Dokumen & Kebijakan
                </h2>
                <p style={{ margin: 0, fontSize: "14px", color: "#44574E" }}>
                  Satu pintu untuk statuta, renstra, kebijakan, pedoman, SOP, dan laporan resmi UNIZAR.
                </p>
              </div>

              {/* BADGE STATISTIK (DOKUMEN & DIPERBARUI) */}
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <span
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DCE6E0",
                    padding: "8px 16px",
                    borderRadius: "12px",
                    fontSize: "14px",
                    color: "#44574E",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                  }}
                >
                  <strong style={{ color: "#064E3B", fontSize: "16px" }}>412</strong> dokumen
                </span>
                <span
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DCE6E0",
                    padding: "8px 16px",
                    borderRadius: "12px",
                    fontSize: "14px",
                    color: "#44574E",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                  }}
                >
                  Diperbarui <strong style={{ color: "#064E3B" }}>10 Okt 2026</strong>
                </span>
              </div>
            </div>

            {/* Form Filter Pencarian Lengkap */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                alignItems: "flex-end",
              }}
            >
              <div style={{ flex: "3 1 360px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <label htmlFor="d-q" style={{ fontSize: "12px", fontWeight: 700, color: "#44574E" }}>
                  Cari dokumen, nomor SK, atau indikator
                </label>
                <input
                  id="d-q"
                  type="search"
                  placeholder="mis. Statuta, 024/SK/2026, Ind. 28"
                  style={{
                    height: "48px",
                    border: "1.5px solid #B9CCC2",
                    borderRadius: "10px",
                    padding: "0 14px",
                    fontSize: "14px",
                  }}
                />
              </div>
              <div style={{ flex: "1 1 180px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <label htmlFor="d-unit" style={{ fontSize: "12px", fontWeight: 700, color: "#44574E" }}>
                  Unit penerbit
                </label>
                <select
                  id="d-unit"
                  style={{
                    height: "48px",
                    border: "1.5px solid #B9CCC2",
                    borderRadius: "10px",
                    padding: "0 12px",
                    fontSize: "14px",
                    background: "#FFFFFF",
                  }}
                >
                  <option>Semua unit</option>
                  <option>Rektorat</option>
                  <option>BPM</option>
                  <option>LPPM</option>
                  <option>Biro Keuangan</option>
                </select>
              </div>
              <div style={{ flex: "1 1 140px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <label htmlFor="d-yr" style={{ fontSize: "12px", fontWeight: 700, color: "#44574E" }}>
                  Tahun
                </label>
                <select
                  id="d-yr"
                  style={{
                    height: "48px",
                    border: "1.5px solid #B9CCC2",
                    borderRadius: "10px",
                    padding: "0 12px",
                    fontSize: "14px",
                    background: "#FFFFFF",
                  }}
                >
                  <option>Semua</option>
                  <option>2026</option>
                  <option>2025</option>
                  <option>2024</option>
                </select>
              </div>
              <button
                type="button"
                style={{
                  height: "48px",
                  border: 0,
                  borderRadius: "10px",
                  background: "#064E3B",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  padding: "0 24px",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                Cari
              </button>
            </div>

            {/* Filter Chips Akses */}
            <div
              role="group"
              aria-label="Filter akses"
              style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}
            >
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#44574E", marginRight: "4px" }}>Akses:</span>
              {[
                ["all", "Semua", "#13231C"],
                ["pub", "Publik", "#064E3B"],
                ["sum", "Ringkasan", "#6B4E00"],
                ["lock", "Terbatas", "#8E1B20"],
              ].map(([key, label, color]) => {
                const isSelected = docFilter === key;
                return (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setDocFilter(key)}
                    style={{
                      border: `1.5px solid ${color}`,
                      background: isSelected ? color : "#FFFFFF",
                      color: isSelected ? "#FFFFFF" : color,
                      borderRadius: "999px",
                      padding: "8px 16px",
                      fontSize: "13px",
                      fontWeight: 700,
                      cursor: "pointer",
                      minHeight: "38px",
                    }}
                  >
                    {label} · {countByAcc(key)}
                  </button>
                );
              })}
            </div>

            {/* Tabel Utama & Panel Detail Kanan */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
              {/* Tabel Dokumen */}
              <div
                style={{
                  flex: "999 1 720px",
                  minWidth: 0,
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", minWidth: "760px" }}>
                    <thead>
                      <tr
                        style={{
                          background: "#F4F8F6",
                          textAlign: "left",
                          color: "#44574E",
                          fontSize: "12px",
                          textTransform: "uppercase",
                          letterSpacing: ".06em",
                        }}
                      >
                        <th scope="col" style={{ padding: "14px 16px" }}>
                          DOKUMEN
                        </th>
                        <th scope="col" style={{ padding: "14px 12px" }}>
                          NO. SK · TANGGAL
                        </th>
                        <th scope="col" style={{ padding: "14px 12px" }}>
                          VERSI
                        </th>
                        <th scope="col" style={{ padding: "14px 12px" }}>
                          INDIKATOR
                        </th>
                        <th scope="col" style={{ padding: "14px 12px" }}>
                          AKSES
                        </th>
                        <th scope="col" style={{ padding: "14px 16px", textAlign: "right" }}>
                          AKSI
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredDocs.map((d, i) => {
                        const st = STY[d.acc];
                        const isSelected = i === selectedIdx;
                        return (
                          <tr
                            key={i}
                            style={{ borderTop: "1px solid #EEF3F0", background: isSelected ? "#F1F8F4" : "#FFFFFF" }}
                          >
                            <td style={{ padding: "14px 16px" }}>
                              <button
                                type="button"
                                onClick={() => setSelectedIdx(i)}
                                style={{
                                  border: 0,
                                  background: "transparent",
                                  padding: 0,
                                  textAlign: "left",
                                  cursor: "pointer",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "3px",
                                }}
                              >
                                <span style={{ fontWeight: 700, fontSize: "15px", color: "#13231C" }}>{d.name}</span>
                                <span style={{ fontSize: "12px", color: "#44574E" }}>
                                  {d.unit} · {d.cat}
                                </span>
                              </button>
                            </td>
                            <td style={{ padding: "14px 12px", color: "#2B3D35", fontSize: "13px" }}>
                              {d.sk}
                              <br />
                              <span style={{ color: "#44574E" }}>{d.date}</span>
                            </td>
                            <td style={{ padding: "14px 12px", fontWeight: 700 }}>{d.ver}</td>
                            <td style={{ padding: "14px 12px", color: "#0A6B4F", fontWeight: 700, fontSize: "13px" }}>
                              {d.ind}
                            </td>
                            <td style={{ padding: "14px 12px" }}>
                              <span
                                style={{
                                  fontSize: "11px",
                                  fontWeight: 700,
                                  padding: "3px 9px",
                                  borderRadius: "999px",
                                  background: st.bg,
                                  color: st.fg,
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {st.badge}
                              </span>
                            </td>
                            <td style={{ padding: "14px 16px", textAlign: "right" }}>
                              <button
                                type="button"
                                style={{
                                  border: 0,
                                  background: "transparent",
                                  fontSize: "13px",
                                  fontWeight: 700,
                                  color: st.actFg,
                                  whiteSpace: "nowrap",
                                  cursor: "pointer",
                                }}
                              >
                                {st.action}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Panel Detail Dokumen Kanan */}
              <aside
                aria-label="Detail dokumen"
                style={{
                  flex: "1 1 320px",
                  maxWidth: "400px",
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "16px",
                  padding: "22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: ".12em",
                    color: "#8A6500",
                    textTransform: "uppercase",
                  }}
                >
                  DETAIL DOKUMEN
                </div>
                <h2 style={{ margin: 0, fontSize: "22px", lineHeight: 1.25, color: "#064E3B", fontWeight: 800 }}>
                  {selDoc.name}
                </h2>
                <span
                  style={{
                    alignSelf: "flex-start",
                    fontSize: "12px",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: selStyle.bg,
                    color: selStyle.fg,
                  }}
                >
                  {selStyle.badge}
                </span>

                <dl
                  style={{
                    margin: 0,
                    display: "grid",
                    gridTemplateColumns: "110px 1fr",
                    gap: "8px 12px",
                    fontSize: "14px",
                  }}
                >
                  <dt style={{ color: "#44574E" }}>Nomor SK</dt>
                  <dd style={{ margin: 0, fontWeight: 600 }}>{selDoc.sk}</dd>
                  <dt style={{ color: "#44574E" }}>Ditetapkan</dt>
                  <dd style={{ margin: 0, fontWeight: 600 }}>{selDoc.date}</dd>
                  <dt style={{ color: "#44574E" }}>Unit</dt>
                  <dd style={{ margin: 0, fontWeight: 600 }}>{selDoc.unit}</dd>
                  <dt style={{ color: "#44574E" }}>Indikator</dt>
                  <dd style={{ margin: 0, fontWeight: 700, color: "#0A6B4F" }}>Ind. {selDoc.ind}</dd>
                </dl>

                <div
                  style={{
                    background: "#F4F8F6",
                    borderRadius: "12px",
                    padding: "14px",
                    fontSize: "14px",
                    lineHeight: 1.55,
                    color: "#2B3D35",
                  }}
                >
                  {selDoc.note}
                </div>

                <div>
                  <div style={{ fontSize: "13px", fontWeight: 800, marginBottom: "8px" }}>
                    Riwayat versi (siklus PPEPP)
                  </div>
                  <ol
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 0,
                    }}
                  >
                    <li
                      style={{
                        display: "flex",
                        gap: "12px",
                        padding: "8px 0",
                        borderLeft: "2px solid #D3EBDF",
                        paddingLeft: "14px",
                      }}
                    >
                      <span style={{ fontWeight: 800, color: "#064E3B", minWidth: "36px" }}>{selDoc.ver}</span>
                      <span style={{ fontSize: "13px", color: "#2B3D35" }}>Berlaku · ditetapkan {selDoc.date}</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        gap: "12px",
                        padding: "8px 0",
                        borderLeft: "2px solid #D3EBDF",
                        paddingLeft: "14px",
                      }}
                    >
                      <span style={{ fontWeight: 800, color: "#064E3B", minWidth: "36px" }}>v—</span>
                      <span style={{ fontSize: "13px", color: "#2B3D35" }}>
                        Revisi setelah evaluasi & RTM tahun sebelumnya
                      </span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        gap: "12px",
                        padding: "8px 0",
                        borderLeft: "2px solid #D3EBDF",
                        paddingLeft: "14px",
                      }}
                    >
                      <span style={{ fontWeight: 800, color: "#064E3B", minWidth: "36px" }}>v1.0</span>
                      <span style={{ fontSize: "13px", color: "#2B3D35" }}>Penetapan awal</span>
                    </li>
                  </ol>
                </div>

                <button
                  type="button"
                  style={{
                    width: "100%",
                    border: 0,
                    textAlign: "center",
                    padding: "13px",
                    borderRadius: "10px",
                    background: selStyle.btnBg,
                    color: selStyle.btnFg,
                    fontWeight: 700,
                    fontSize: "15px",
                    cursor: "pointer",
                    marginTop: "6px",
                  }}
                >
                  {selStyle.action}
                </button>
              </aside>
            </div>
          </div>
        )}

        {/* 5. SUB-MENU: DIREKTORI MOU / MOA */}
        {tab === "kerjasama" && (
          <section
            style={{
              background: "#FFFFFF",
              border: "1px solid #DCE6E0",
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 800,
                color: "#8A6500",
                textTransform: "uppercase",
              }}
            >
              KEMITRAAN & KERJA SAMA
            </span>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#064E3B",
                margin: "8px 0 16px",
              }}
            >
              Direktori MoU / MoA
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div
                style={{
                  padding: "16px",
                  background: "#F4F8F6",
                  borderRadius: "12px",
                  borderLeft: "4px solid #0A6B4F",
                }}
              >
                <strong style={{ color: "#064E3B" }}>MoU Pemda NTB & UNIZAR</strong> — Kemitraan strategis bidang
                pengabdian masyarakat dan riset daerah.
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#F4F8F6",
                  borderRadius: "12px",
                  borderLeft: "4px solid #0A6B4F",
                }}
              >
                <strong style={{ color: "#064E3B" }}>MoA Fakultas Kedokteran & RSUD</strong> — Kerja sama wahana
                pendidikan klinis mahasiswa kedokteran.
              </div>
            </div>
          </section>
        )}

        {/* 6. SUB-MENU: PETA KAMPUS */}
        {tab === "peta" && (
          <section
            style={{
              background: "#FFFFFF",
              border: "1px solid #DCE6E0",
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 800,
                color: "#8A6500",
                textTransform: "uppercase",
              }}
            >
              LOKASI & FASILITAS
            </span>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#064E3B",
                margin: "8px 0 16px",
              }}
            >
              Peta Kampus & Denah Lokasi
            </h2>
            <div
              style={{
                background: "#E3F1EA",
                height: "280px",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#064E3B",
                fontWeight: 800,
                fontSize: "16px",
              }}
            >
              [ Visual Peta Interaktif Kampus UNIZAR ]
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
