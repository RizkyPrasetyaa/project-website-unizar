import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PetaBuktiBanPt() {
  const [selectedKriteria, setSelectedKriteria] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const KRITERIA = [
    { no: 1, label: "Budaya Mutu", from: 1, to: 4, done: 3, total: 4 },
    {
      no: 2,
      label: "Relevansi Pendidikan",
      from: 5,
      to: 15,
      done: 7,
      total: 11,
    },
    {
      no: 3,
      label: "Relevansi Penelitian",
      from: 16,
      to: 19,
      done: 4,
      total: 4,
    },
    { no: 4, label: "Relevansi PkM", from: 20, to: 23, done: 3, total: 4 },
    { no: 5, label: "Akuntabilitas", from: 24, to: 35, done: 8, total: 12 },
    { no: 6, label: "Diferensiasi Misi", from: 36, to: 39, done: 3, total: 4 },
  ];

  const ALL_39_INDIKATOR = [
    [
      1,
      "Budaya Mutu",
      "Masukan",
      "SPMI dikembangkan dengan tata kelola baik, akuntabel, transparan, nirlaba, efektif & efisien.",
      [{ label: "BPM › SPMI › Kebijakan, Manual & Standar", href: "/bpm" }],
      "lock",
    ],
    [
      2,
      "Budaya Mutu",
      "Proses",
      "Implementasi SPMI melalui siklus PPEPP di bidang akademik & non-akademik.",
      [
        { label: "BPM › Kalender Mutu (PPEPP)", href: "/bpm" },
        { label: "BPM › AMI, RTM & RTL", href: "/bpm" },
      ],
      "lock",
    ],
    [
      3,
      "Budaya Mutu",
      "Luaran",
      "Laporan implementasi SPMI & kinerja PT berkala, dikelola melalui PD Dikti.",
      [
        { label: "BPM › PDDIKTI", href: "/bpm" },
        { label: "BPM › SPME › Laporan Kinerja", href: "/bpm" },
      ],
      "sum",
    ],
    [
      4,
      "Budaya Mutu",
      "Dampak",
      "Pengakuan mutu: akreditasi program studi dari LAM / BAN-PT.",
      [
        { label: "Beranda › Status Akreditasi", href: "/" },
        { label: "BPM › Dashboard Akreditasi", href: "/bpm" },
      ],
      "pub",
    ],
    [
      5,
      "Relevansi Pendidikan",
      "Masukan",
      "Kebijakan & pedoman penyusunan, pelaksanaan, evaluasi kurikulum OBE.",
      [{ label: "Pendidikan › Kebijakan Kurikulum OBE", href: "#" }],
      "pub",
    ],
    [
      6,
      "Relevansi Pendidikan",
      "Masukan",
      "Rencana strategis pengelolaan SDM; ketersediaan tenaga kependidikan.",
      [
        { label: "Orang › Renstra SDM", href: "/orang" },
        { label: "Orang › Tenaga Kependidikan", href: "/orang" },
      ],
      "pub",
    ],
    [
      7,
      "Relevansi Pendidikan",
      "Masukan",
      "Kecukupan dosen untuk setiap program studi.",
      [{ label: "Orang › Dosen & Kepakaran", href: "/orang" }],
      "pub",
    ],
    [
      8,
      "Relevansi Pendidikan",
      "Masukan",
      "Akses sarana-prasarana berkelanjutan sesuai diferensiasi misi; sistem K3.",
      [{ label: "Layanan › Sarpras & K3", href: "/layanan" }],
      "pub",
    ],
    [
      9,
      "Relevansi Pendidikan",
      "Masukan",
      "Sarpras berbasis TIK yang andal untuk pembelajaran.",
      [
        { label: "Layanan › E-Learning / LMS", href: "/layanan" },
        { label: "Layanan › TIK & Helpdesk", href: "/layanan" },
      ],
      "pub",
    ],
    [
      10,
      "Relevansi Pendidikan",
      "Proses",
      "Proses pembelajaran diperbaiki berkelanjutan berdasarkan evaluasi; MBKM ≥ 10 sks.",
      [
        { label: "Pendidikan › Proses & Evaluasi", href: "#" },
        { label: "Pendidikan › MBKM", href: "#" },
      ],
      "pub",
    ],
    [
      11,
      "Relevansi Pendidikan",
      "Luaran",
      "Dosen tetap dengan jabatan akademik.",
      [{ label: "Orang › Dosen & Kepakaran", href: "/orang" }],
      "pub",
    ],
    [
      12,
      "Relevansi Pendidikan",
      "Luaran",
      "Analisis luaran pendidikan: penyelesaian studi, evaluasi kinerja, capaian kompetensi.",
      [{ label: "Laporan Kinerja & Evaluasi Diri", href: "#" }],
      "sum",
    ],
    [
      13,
      "Relevansi Pendidikan",
      "Luaran",
      "Praktik baik internalisasi antikorupsi dalam pembelajaran.",
      [{ label: "Fakultas › Kurikulum per Prodi (PAK)", href: "#" }],
      "pub",
    ],
    [
      14,
      "Relevansi Pendidikan",
      "Dampak",
      "Pengakuan kompetensi lulusan oleh pemerintah, masyarakat & DUDIK.",
      [
        {
          label: "Kemahasiswaan & Alumni › Tracer Study",
          href: "/kemahasiswaan-alumni",
        },
        { label: "Kerjasama › Luar Negeri", href: "/kerjasama" },
      ],
      "sum",
    ],
    [
      15,
      "Relevansi Pendidikan",
      "Dampak",
      "Analisis prestasi mahasiswa, keterserapan kerja, tren mahasiswa baru 5 tahun.",
      [
        {
          label: "Kemahasiswaan & Alumni › Prestasi",
          href: "/kemahasiswaan-alumni",
        },
      ],
      "pub",
    ],
    [
      16,
      "Relevansi Penelitian",
      "Masukan",
      "Peta jalan & pedoman penelitian; pengembangan SDM peneliti.",
      [
        { label: "Penelitian › Renstra & Peta Jalan", href: "#" },
        { label: "Penelitian › Pedoman & SDM", href: "#" },
      ],
      "pub",
    ],
    [
      17,
      "Relevansi Penelitian",
      "Proses",
      "Penyelenggaraan proses penelitian yang terstruktur, etis, dan kolaboratif.",
      [
        { label: "Penelitian › Tata Kelola & Proses", href: "#" },
        { label: "Kerjasama › MoU/MoA", href: "/kerjasama" },
      ],
      "pub",
    ],
    [
      18,
      "Relevansi Penelitian",
      "Luaran",
      "Hasil penelitian bermutu, relevan, bermanfaat; luaran 3 tahun.",
      [{ label: "Penelitian › Publikasi & Luaran", href: "#" }],
      "pub",
    ],
    [
      19,
      "Relevansi Penelitian",
      "Dampak",
      "Pengakuan bidang penelitian dan pemanfaatannya.",
      [{ label: "Penelitian › HKI & Rekognisi", href: "#" }],
      "pub",
    ],
    [
      20,
      "Relevansi PkM",
      "Masukan",
      "Peta jalan & akses sumber daya PkM didukung sistem TIK.",
      [
        { label: "Pengabdian › Renstra & Peta Jalan", href: "#" },
        { label: "Pengabdian › Pedoman & Kepakaran", href: "#" },
      ],
      "pub",
    ],
    [
      21,
      "Relevansi PkM",
      "Proses",
      "Penyelenggaraan proses PkM terstruktur dan akuntabel.",
      [
        { label: "Pengabdian › Tata Kelola & Proses", href: "#" },
        { label: "Kerjasama › MoU/MoA", href: "/kerjasama" },
      ],
      "pub",
    ],
    [
      22,
      "Relevansi PkM",
      "Luaran",
      "Hasil PkM bermutu, disebarluaskan melalui lisensi terbuka.",
      [{ label: "Pengabdian › Luaran & Kemitraan", href: "#" }],
      "pub",
    ],
    [
      23,
      "Relevansi PkM",
      "Dampak",
      "Pengakuan kepakaran profesional dari masyarakat, pemerintah & industri.",
      [{ label: "Pengabdian › Rekognisi Kepakaran", href: "#" }],
      "pub",
    ],
    [
      24,
      "Akuntabilitas",
      "Masukan",
      "Renstra jangka panjang-menengah-pendek, statuta, OTK.",
      [
        { label: "Profil › Statuta", href: "#" },
        { label: "Profil › OTK", href: "#" },
        { label: "Profil › Renstra & RIP", href: "#" },
      ],
      "pub",
    ],
    [
      25,
      "Akuntabilitas",
      "Masukan",
      "Sistem tata pamong: akuntabilitas, transparansi, mitigasi risiko.",
      [
        { label: "GUG › Pengawasan & WBK/WBBM", href: "#" },
        { label: "BPM › SPI", href: "/bpm" },
        { label: "BPM › Hasil AMI", href: "/bpm" },
      ],
      "sum",
    ],
    [
      26,
      "Akuntabilitas",
      "Masukan",
      "Sistem pengelolaan data & informasi berbasis TIK.",
      [{ label: "Layanan › TIK & Helpdesk", href: "/layanan" }],
      "pub",
    ],
    [
      27,
      "Akuntabilitas",
      "Masukan",
      "Renstra keuangan 5 tahunan; pendanaan mahasiswa kurang beruntung.",
      [{ label: "GUG › Renstra & Pola Keuangan", href: "#" }],
      "pub",
    ],
    [
      28,
      "Akuntabilitas",
      "Proses",
      "Praktik GUG; kode etik; penanganan kekerasan seksual, perundungan, intoleransi.",
      [
        { label: "GUG › Kebijakan GUG", href: "#" },
        { label: "GUG › Kode Etik", href: "#" },
        { label: "GUG › Satgas PPKS", href: "#" },
      ],
      "pub",
    ],
    [
      29,
      "Akuntabilitas",
      "Proses",
      "Sistem pengelolaan fungsional (POSLC) & 11 pedoman bidang.",
      [{ label: "GUG › Pengelolaan & 11 Pedoman", href: "#" }],
      "pub",
    ],
    [
      30,
      "Akuntabilitas",
      "Proses",
      "Suasana akademik kondusif, kebebasan mimbar akademik.",
      [{ label: "Pendidikan › Suasana Akademik", href: "#" }],
      "pub",
    ],
    [
      31,
      "Akuntabilitas",
      "Proses",
      "Penerimaan mahasiswa baru afirmatif, inklusif, adil; perluasan akses.",
      [
        { label: "Pendidikan › PMB Afirmatif", href: "#" },
        { label: "Pendidikan › RPL & PJJ", href: "#" },
      ],
      "pub",
    ],
    [
      32,
      "Akuntabilitas",
      "Proses",
      "Pengelolaan & layanan mahasiswa; standar minimum pendidikan.",
      [
        {
          label: "Kemahasiswaan › Layanan Mahasiswa",
          href: "/kemahasiswaan-alumni",
        },
      ],
      "pub",
    ],
    [
      33,
      "Akuntabilitas",
      "Proses",
      "Pola pengelolaan keuangan sesuai status penyelenggaraan.",
      [{ label: "GUG › Renstra & Pola Keuangan", href: "#" }],
      "pub",
    ],
    [
      34,
      "Akuntabilitas",
      "Luaran",
      "Kepuasan pemangku kepentingan terhadap tata pamong.",
      [
        { label: "GUG › Survei Kepuasan", href: "#" },
        { label: "BPM › Survei Stakeholder", href: "/bpm" },
      ],
      "sum",
    ],
    [
      35,
      "Akuntabilitas",
      "Dampak",
      "Audit eksternal keuangan.",
      [{ label: "GUG › Laporan Keuangan & Audit", href: "#" }],
      "sum",
    ],
    [
      36,
      "Diferensiasi Misi",
      "Masukan",
      "Diferensiasi misi; renstra & peta jalan pengembangan PT.",
      [{ label: "Profil › Visi, Misi & Diferensiasi", href: "#" }],
      "pub",
    ],
    [
      37,
      "Diferensiasi Misi",
      "Proses",
      "Program tridharma sesuai renstra & peta jalan.",
      [{ label: "Profil › Evaluasi Capaian Tridharma", href: "#" }],
      "sum",
    ],
    [
      38,
      "Diferensiasi Misi",
      "Luaran",
      "Penilaian kesesuaian capaian tridharma terhadap diferensiasi misi.",
      [{ label: "Profil › Evaluasi Capaian Tridharma", href: "#" }],
      "sum",
    ],
    [
      39,
      "Diferensiasi Misi",
      "Dampak",
      "Pengakuan eksternal atas keunggulan tridharma sesuai diferensiasi misi.",
      [{ label: "Profil › Capaian & Penghargaan", href: "#" }],
      "pub",
    ],
  ];

  const SP_MAP = { 1: true, 2: true, 4: true, 7: true, 11: true };

  const ACC_CONFIG = {
    pub: { label: "Publik", bg: "#E3F1EA", fg: "#064E3B" },
    sum: { label: "Ringkasan", bg: "#FFF1C2", fg: "#6B4E00" },
    lock: { label: "Terbatas", bg: "#FBE3E4", fg: "#8E1B20" },
  };

  const getStatus = (no) => {
    if (no === 13 || no === 31)
      return { label: "Belum tersedia", color: "#C1272D", date: "—" };
    if (no % 5 === 0 || no === 2 || no === 38)
      return {
        label: "Perlu pembaruan",
        color: "#E8A33A",
        date: "Terakhir: Jan 2025",
      };
    return { label: "Lengkap", color: "#0A6B4F", date: "Diperbarui: Sep 2026" };
  };

  const filteredIndikator = ALL_39_INDIKATOR.filter((item) => {
    if (selectedKriteria === 0) return true;
    const krit = KRITERIA.find((k) => k.no === selectedKriteria);
    return item[0] >= krit.from && item[0] <= krit.to;
  });

  return (
    <div
      style={{
        background: "#F4F8F6",
        minHeight: "100vh",
        color: "#13231C",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
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
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ flex: "1 1 560px" }}>
            <nav
              aria-label="Breadcrumb"
              style={{
                fontSize: "13px",
                color: "#B7DCC9",
                marginBottom: "12px",
              }}
            >
              <Link to="/" style={{ color: "#B7DCC9", textDecoration: "none" }}>
                Beranda
              </Link>{" "}
              / Pusat Akreditasi /{" "}
              <span style={{ color: "#FFFFFF" }}>Peta Bukti BAN-PT</span>
            </nav>
            <h1
              style={{
                margin: 0,
                fontSize: "38px",
                color: "#FFFFFF",
                fontWeight: 800,
              }}
            >
              Peta Bukti BAN-PT
            </h1>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a
              href="#"
              style={{
                background: "rgba(255,255,255,.1)",
                border: "1px solid rgba(255,255,255,.2)",
                color: "#FFFFFF",
                padding: "10px 18px",
                borderRadius: "14px",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Masuk sebagai Asesor →
            </a>
            <a
              href="#"
              style={{
                background: "#F2C230",
                color: "#053B2C",
                padding: "10px 18px",
                borderRadius: "14px",
                fontWeight: 800,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Unduh Peta (PDF) →
            </a>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "26px 32px 64px",
          display: "flex",
          flexDirection: "column",
          gap: "22px",
        }}
      >
        {/* Widget Kriteria (BERSIH DARI TEKS INDIKATOR EXTRA) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "12px",
          }}
        >
          {KRITERIA.map((c) => {
            const isSelected = selectedKriteria === c.no;
            const pct = Math.round((c.done / c.total) * 100) + "%";

            return (
              <button
                key={c.no}
                onClick={() => setSelectedKriteria(isSelected ? 0 : c.no)}
                style={{
                  textAlign: "left",
                  cursor: "pointer",
                  background: isSelected ? "#064E3B" : "#FFFFFF",
                  border: isSelected
                    ? "1.5px solid #064E3B"
                    : "1.5px solid #DCE6E0",
                  borderRadius: "14px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  minHeight: "140px",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: ".1em",
                    color: isSelected ? "#F2C230" : "#8A6500",
                    textTransform: "uppercase",
                  }}
                >
                  KRITERIA {c.no}
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: isSelected ? "#FFFFFF" : "#13231C",
                    lineHeight: 1.25,
                  }}
                >
                  {c.label}
                </span>

                {/* Progress Bar & Status Text */}
                <span
                  style={{
                    marginTop: "auto",
                    height: "6px",
                    background: isSelected
                      ? "rgba(255,255,255,.25)"
                      : "#DCE6E0",
                    borderRadius: "999px",
                    overflow: "hidden",
                    display: "block",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      height: "6px",
                      width: pct,
                      background: isSelected ? "#F2C230" : "#0A6B4F",
                    }}
                  ></span>
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: isSelected ? "#F2C230" : "#8A6500",
                  }}
                >
                  {c.done} / {c.total} bukti lengkap
                </span>
              </button>
            );
          })}
        </div>

        {/* Filter Bar & Legend Status */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setSelectedKriteria(0)}
              style={{
                border: "1.5px solid #13231C",
                background: selectedKriteria === 0 ? "#13231C" : "#FFFFFF",
                color: selectedKriteria === 0 ? "#FFFFFF" : "#13231C",
                borderRadius: "999px",
                padding: "8px 16px",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Semua 39 Indikator
            </button>
            <span style={{ fontSize: "13px", color: "#44574E" }}>
              Menampilkan <b>{filteredIndikator.length}</b> indikator
            </span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "14px",
              fontSize: "12px",
              color: "#44574E",
              flexWrap: "wrap",
              alignItems: "center",
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
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#0A6B4F",
                }}
              ></span>
              Lengkap
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
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#E8A33A",
                }}
              ></span>
              Perlu pembaruan
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
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#C1272D",
                }}
              ></span>
              Belum tersedia
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
                  fontSize: "10px",
                  fontWeight: 800,
                  padding: "2px 6px",
                  borderRadius: "4px",
                  background: "#13231C",
                  color: "#FFFFFF",
                }}
              >
                SP
              </span>
              Syarat perlu
            </span>
          </div>
        </div>

        {/* Table Data */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #DCE6E0",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "980px",
                fontSize: "14px",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
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
                  <th style={{ padding: "14px 16px", width: "64px" }}>No</th>
                  <th style={{ padding: "14px 12px", width: "160px" }}>
                    Sasaran mutu
                  </th>
                  <th style={{ padding: "14px 12px" }}>Indikator (ringkas)</th>
                  <th style={{ padding: "14px 12px" }}>
                    Halaman bukti di website
                  </th>
                  <th style={{ padding: "14px 12px", width: "120px" }}>
                    Akses
                  </th>
                  <th style={{ padding: "14px 16px", width: "150px" }}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredIndikator.map((r, idx) => {
                  const no = r[0];
                  const kritName = r[1];
                  const stage = r[2];
                  const text = r[3];
                  const pages = r[4];
                  const acc = ACC_CONFIG[r[5]];
                  const st = getStatus(no);

                  return (
                    <tr
                      key={idx}
                      style={{
                        borderTop: "1px solid #EEF3F0",
                        verticalAlign: "top",
                      }}
                    >
                      <td style={{ padding: "14px 16px" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                            alignItems: "flex-start",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: 800,
                              color: "#064E3B",
                            }}
                          >
                            {no}
                          </span>
                          {SP_MAP[no] && (
                            <span
                              style={{
                                fontSize: "10px",
                                fontWeight: 800,
                                padding: "2px 6px",
                                borderRadius: "4px",
                                background: "#13231C",
                                color: "#FFFFFF",
                              }}
                            >
                              SP
                            </span>
                          )}
                        </div>
                      </td>
                      <td style={{ padding: "14px 12px" }}>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#44574E",
                            display: "block",
                          }}
                        >
                          {kritName}
                        </span>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: 800,
                            color: "#8A6500",
                            display: "block",
                            marginTop: "2px",
                          }}
                        >
                          {stage}
                        </span>
                      </td>
                      <td
                        style={{
                          padding: "14px 12px",
                          lineHeight: 1.5,
                          color: "#2B3D35",
                        }}
                      >
                        {text}
                      </td>
                      <td style={{ padding: "14px 12px" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                          }}
                        >
                          {pages.map((p, pIdx) => (
                            <Link
                              key={pIdx}
                              to={p.href}
                              style={{
                                fontSize: "13px",
                                fontWeight: 600,
                                color: "#064E3B",
                                textDecoration: "none",
                              }}
                            >
                              {p.label} →
                            </Link>
                          ))}
                        </div>
                      </td>
                      <td style={{ padding: "14px 12px" }}>
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 700,
                            padding: "3px 9px",
                            borderRadius: "999px",
                            background: acc.bg,
                            color: acc.fg,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {acc.label}
                        </span>
                      </td>
                      <td style={{ padding: "14px 16px" }}>
                        <span
                          style={{
                            display: "inline-flex",
                            gap: "6px",
                            alignItems: "center",
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#2B3D35",
                          }}
                        >
                          <span
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              background: st.color,
                            }}
                          ></span>
                          {st.label}
                        </span>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "#44574E",
                            marginTop: "4px",
                          }}
                        >
                          {st.date}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
