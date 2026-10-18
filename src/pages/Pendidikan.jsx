import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Pendidikan() {
  const location = useLocation();

  // 10 TAB SUB-MENU PENDIDIKAN
  const MENU_ITEMS = [
    { key: "pmb", label: "PMB & Beasiswa" },
    { key: "kurikulum", label: "Kebijakan Kurikulum OBE" },
    { key: "kalender", label: "Kalender & Panduan Akademik" },
    { key: "proses", label: "Proses & Evaluasi Pembelajaran" },
    { key: "mbkm", label: "MBKM (≥ 10 sks luar prodi)" },
    { key: "suasana", label: "Suasana Akademik & Kebebasan Mimbar" },
    { key: "capaian", label: "Capaian Kompetensi Lulusan" },
    { key: "pmb-inklusif", label: "PMB Afirmatif & Inklusif" },
    { key: "beasiswa", label: "Beasiswa & Bantuan Biaya" },
    { key: "rpl", label: "RPL · PJJ · PKKMB" },
  ];

  const VALID_TABS = MENU_ITEMS.map((m) => m.key);

  const [tab, setTab] = useState(() => {
    return location.state?.tab && VALID_TABS.includes(location.state.tab) ? location.state.tab : "pmb";
  });

  const [faqOpen, setFaqOpen] = useState(null);
  const tabRefs = useRef({});

  useEffect(() => {
    const targetTab = location.state?.tab && VALID_TABS.includes(location.state.tab) ? location.state.tab : "pmb";

    setTab(targetTab);

    // Jump ke paling atas
    window.scrollTo(0, 0);

    // Auto-scroll tab horizontal ke tengah
    const timer = setTimeout(() => {
      if (tabRefs.current[targetTab]) {
        tabRefs.current[targetTab].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [location.state, location.key]);

  const handleTabClick = (key) => {
    setTab(key);
    window.scrollTo(0, 0);
    if (tabRefs.current[key]) {
      tabRefs.current[key].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const activeMenu = MENU_ITEMS.find((m) => m.key === tab) || MENU_ITEMS[0];

  const STY = {
    pub: { badge: "Publik", bg: "#E3F1EA", fg: "#064E3B", action: "Unduh PDF" },
    sum: { badge: "Ringkasan", bg: "#FFF1C2", fg: "#6B4E00", action: "Lihat ringkasan" },
    ext: { badge: "Tautan sistem", bg: "#E6EEF8", fg: "#1D3F6E", action: "Buka sistem" },
  };

  const D = (name, acc, meta) => {
    const s = STY[acc] || STY.pub;
    return { name, meta, badge: s.badge, bg: s.bg, fg: s.fg, action: s.action };
  };

  const S = (label, v) => ({ label, v });
  const SK = "SK Rektor No. [—] · [tgl]";

  const KONTEN_SUBMENU = {
    kurikulum: {
      stats: [S("Prodi Kurikulum OBE", "100%"), S("Kepuasan Pembelajaran", "84%"), S("RPS Daring LMS", "96%")],
      sections: [
        {
          title: "Kebijakan Kurikulum",
          docs: [
            D("Pedoman Penyusunan Kurikulum OBE", "pub", SK),
            D("Pedoman Evaluasi Kurikulum", "pub", SK),
            D("Pedoman Pendidikan Anti Korupsi", "pub", SK),
          ],
        },
        {
          title: "Proses Pembelajaran",
          docs: [
            D("Kebijakan Pembelajaran Inklusif & Kolaboratif", "pub", SK),
            D("Hasil Evaluasi Proses Pembelajaran", "sum", "EDOM 2025"),
            D("LMS / E-Learning UNIZAR", "ext", "Login civitas"),
          ],
        },
      ],
    },
    kalender: {
      stats: [
        S("Pekan Efektif / Semester", "16 Pekan"),
        S("Periode Wisuda / Tahun", "2 Kali"),
        S("Masa Studi Rata-rata (S1)", "4.3 Tahun"),
      ],
      sections: [
        {
          title: "Kalender & Panduan Akademik",
          docs: [
            D("Kalender Akademik 2026/2027", "pub", SK),
            D("Panduan Akademik Mahasiswa", "pub", "Edisi 2026"),
            D("Jadwal Wisuda & Kelulusan", "pub", "Periode I & II"),
          ],
        },
      ],
    },
    proses: {
      stats: [
        S("Kehadiran Dosen Daring/Luring", "98%"),
        S("Kesesuaian RPS", "95%"),
        S("Umpan Balik EDOM Selesai", "100%"),
      ],
      sections: [
        {
          title: "Proses & Evaluasi Pembelajaran",
          docs: [
            D("SOP Pelaksanaan Perkuliahan & Ujian", "pub", SK),
            D("Laporan Evaluasi Pembelajaran (EDOM)", "sum", "Semester Berjalan"),
            D("Sistem Penilaian & Remedial", "pub", SK),
          ],
        },
      ],
    },
    mbkm: {
      stats: [
        S("Partisipasi Mahasiswa MBKM", "41%"),
        S("Rata-rata Konversi SKS", "14 SKS"),
        S("Mitra MBKM Aktif", "52 Mitra"),
      ],
      sections: [
        {
          title: "Kebijakan & Panduan",
          docs: [
            D("Pedoman MBKM UNIZAR", "pub", SK),
            D("Panduan Konversi & Pengakuan SKS", "pub", "v2.0"),
            D("Daftar Mitra MBKM", "pub", "Diperbarui per semester"),
          ],
        },
        {
          title: "Capaian",
          docs: [
            D("Rekap Partisipasi MBKM 3 Tahun", "sum", "2023–2025"),
            D("Testimoni & Luaran MBKM", "pub", "Dokumentasi Kegiatan"),
            D("Portal MBKM Nasional Kemdiktisaintek", "ext", "Sistem Eksternal"),
          ],
        },
      ],
    },
    suasana: {
      stats: [
        S("Kuliah Umum & Seminar", "86 Kegiatan"),
        S("Penanganan Plagiarisme", "100% Selesai"),
        S("Kelompok Studi Aktif", "34 Kluster"),
      ],
      sections: [
        {
          title: "Kebijakan Kebebasan Akademik",
          docs: [
            D("Kebijakan Otonomi Keilmuan & Kebebasan Akademik", "pub", SK),
            D("Pedoman Integritas Akademik & Anti Plagiarisme", "pub", SK),
            D("Pedoman Kebebasan Mimbar Akademik", "pub", SK),
          ],
        },
        {
          title: "Bukti Pelaksanaan",
          docs: [
            D("Agenda Kuliah Umum & Seminar Akademik", "pub", "Arsip 3 Tahun"),
            D("Laporan Suasana Akademik Tahunan", "sum", "Ikhtisar Institusi"),
          ],
        },
      ],
    },
    capaian: {
      stats: [
        S("Kelulusan Tepat Waktu", "82%"),
        S("Masa Tunggu Kerja", "2.8 Bulan"),
        S("Kesesuaian Bidang Kerja", "88%"),
      ],
      sections: [
        {
          title: "Kompetensi & Tracer Study",
          docs: [
            D("Standar Capaian Pembelajaran Lulusan (CPL)", "pub", SK),
            D("Laporan Tracer Study & Pengguna Lulusan", "sum", "Survei 2025"),
            D("Sertifikasi Kompetensi Mahasiswa", "pub", "Dokumen Pedoman"),
          ],
        },
      ],
    },
    "pmb-inklusif": {
      stats: [
        S("Kapasitas Penerimaan", "1.500 Kuota"),
        S("Jalur Seleksi Aktif", "5 Jalur"),
        S("Pendaftar Afirmasi", "100% Inklusif"),
      ],
      sections: [
        {
          title: "Penerimaan Mahasiswa Baru & Inklusivitas",
          docs: [
            D("Kebijakan PMB Afirmatif & Inklusif", "pub", SK),
            D("Panduan Layanan Disabilitas PMB", "pub", "SOP Layanan"),
            D("Portal Pendaftaran Online PMB", "ext", "Sistem PMB UNIZAR"),
          ],
        },
      ],
    },
    beasiswa: {
      stats: [
        S("Penerima Beasiswa", "1.120 Mhs"),
        S("Kuota KIP-Kuliah", "220 Kursi"),
        S("Cakupan Bantuan Biaya", "Hingga 100%"),
      ],
      sections: [
        {
          title: "Skema Beasiswa & Keringanan UKT",
          docs: [
            D("Pedoman Beasiswa KIP-Kuliah", "pub", SK),
            D("Kebijakan Beasiswa Afirmasi 3T & Tahfidz", "pub", SK),
            D("Prosedur Pengajuan Keringanan UKT", "pub", SK),
          ],
        },
      ],
    },
    rpl: {
      stats: [
        S("Prodi Penyelenggara RPL", "100% Terakreditasi"),
        S("Layanan PJJ Aktif", "Tersedia"),
        S("Kelulusan PKKMB", "100% Mhs Baru"),
      ],
      sections: [
        {
          title: "RPL, PJJ & Layanan Akademik Khusus",
          docs: [
            D("Pedoman Rekognisi Pembelajaran Lampau (RPL)", "pub", SK),
            D("Panduan Pembelajaran Jarak Jauh (PJJ)", "pub", SK),
            D("Panduan PKKMB & Adaptasi Kampus", "pub", SK),
          ],
        },
      ],
    },
  };

  const curData = KONTEN_SUBMENU[tab];

  const paths = [
    { t: "Reguler", d: "Seleksi berbasis tes potensi akademik daring.", l: "Semua prodi", c: "#0A6B4F" },
    { t: "Prestasi", d: "Rapor dan prestasi akademik/non-akademik.", l: "Bebas tes", c: "#3A9B76" },
    {
      t: "Afirmasi & KIP-Kuliah",
      d: "Untuk calon mahasiswa kurang mampu dan daerah 3T.",
      l: "Ind. 31A, 27B",
      c: "#F2C230",
    },
    { t: "RPL", d: "Rekognisi pengalaman kerja menjadi sks.", l: "Terhubung SIERRA", c: "#E8A33A" },
    { t: "Pindahan / PJJ", d: "Transfer kredit dan pembelajaran jarak jauh.", l: "Terhubung SPADA", c: "#C1272D" },
  ];

  const schol = [
    { t: "KIP-Kuliah", d: "Pemerintah · biaya pendidikan & hidup", q: "220 kursi" },
    { t: "Beasiswa Afirmasi Daerah 3T", d: "Universitas · potongan UKT hingga 100%", q: "40 kursi" },
    { t: "Beasiswa Prestasi", d: "Akademik, olahraga, seni", q: "60 kursi" },
    { t: "Beasiswa Tahfidz Al-Qur’an", d: "Hafalan minimal [n] juz", q: "30 kursi" },
    { t: "Keringanan UKT", d: "Bagi mahasiswa terdampak ekonomi", q: "Sepanjang tahun" },
  ];

  const FAQ = [
    [
      "Berapa biaya kuliah per semester?",
      "Biaya berbeda per prodi. Gunakan simulasi biaya untuk melihat rincian UKT, dan cek kemungkinan keringanan atau beasiswa.",
    ],
    [
      "Apakah penyandang disabilitas bisa mendaftar?",
      "Bisa. Unit Layanan Disabilitas mendampingi sejak pendaftaran, termasuk akomodasi ujian seleksi.",
    ],
    [
      "Bagaimana jika saya sudah bekerja?",
      "Jalur RPL memungkinkan pengalaman kerja diakui sebagai sks sehingga masa studi bisa lebih singkat.",
    ],
    [
      "Kapan pengumuman hasil seleksi?",
      "Hasil diumumkan paling lambat 14 hari setelah tes melalui akun pendaftar dan email.",
    ],
  ];

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        color: "#13231C",
        background: "#F4F8F6",
        minHeight: "100vh",
      }}
    >
      {/* Banner Header Hijau */}
      <section style={{ background: "#064E3B", color: "#FFFFFF" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "22px 32px 0" }}>
          {/* Breadcrumb Dinamis */}
          <nav aria-label="Breadcrumb" style={{ fontSize: "13px", color: "#B7DCC9" }}>
            <Link to="/" style={{ color: "#B7DCC9", textDecoration: "none" }}>
              Beranda
            </Link>{" "}
            / <span style={{ color: "#B7DCC9" }}>Pendidikan</span> /{" "}
            <span style={{ color: "#FFFFFF", fontWeight: 600 }}>{activeMenu.label}</span>
          </nav>

          <div style={{ padding: "18px 0 26px" }}>
            <h1 style={{ margin: 0, fontSize: "40px", lineHeight: 1.1, fontWeight: 800 }}>Pendidikan</h1>
          </div>

          {/* TAB NAVIGASI SUB-MENU WITH AUTO-SCROLL */}
          <div
            role="tablist"
            aria-label="Sub-menu Pendidikan"
            style={{ display: "flex", gap: "4px", overflowX: "auto", paddingBottom: "0" }}
          >
            {MENU_ITEMS.map((item) => {
              const isSel = tab === item.key;
              return (
                <button
                  key={item.key}
                  ref={(el) => (tabRefs.current[item.key] = el)}
                  role="tab"
                  aria-selected={isSel}
                  onClick={() => handleTabClick(item.key)}
                  style={{
                    border: 0,
                    cursor: "pointer",
                    padding: "12px 18px",
                    fontSize: "14px",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    borderRadius: "12px 12px 0 0",
                    background: isSel ? "#F4F8F6" : "transparent",
                    color: isSel ? "#064E3B" : "#D3EBDF",
                    minHeight: "44px",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Konten Utama */}
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "28px 32px 64px" }}>
        {/* 1. TAB PALING AWAL: PMB & BEASISWA */}
        {tab === "pmb" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
            {/* Banner Utama PMB */}
            <section
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "20px",
                padding: "30px",
                display: "flex",
                flexWrap: "wrap",
                gap: "24px",
                alignItems: "center",
              }}
            >
              <div style={{ flex: "2 1 480px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    color: "#8A6500",
                    textTransform: "uppercase",
                  }}
                >
                  PENERIMAAN MAHASISWA BARU 2027
                </span>
                <h2 style={{ margin: 0, fontSize: "30px", lineHeight: 1.15, color: "#064E3B", fontWeight: 800 }}>
                  Gelombang 1 dibuka sampai [tgl]
                </h2>
                <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "#44574E" }}>
                  Pendaftaran sepenuhnya daring. Tidak membedakan suku, ras, agama, golongan, asal daerah, maupun
                  disabilitas.
                </p>
              </div>
              <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href="#"
                  style={{
                    background: "#F2C230",
                    color: "#053B2C",
                    padding: "15px",
                    borderRadius: "12px",
                    fontWeight: 800,
                    fontSize: "16px",
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  Daftar sekarang
                </a>
                <a
                  href="#"
                  style={{
                    border: "1.5px solid #064E3B",
                    color: "#064E3B",
                    padding: "13px",
                    borderRadius: "12px",
                    fontWeight: 700,
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  Simulasi biaya kuliah
                </a>
              </div>
            </section>

            {/* Jalur Masuk */}
            <section aria-labelledby="h-jal">
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  color: "#8A6500",
                  textTransform: "uppercase",
                }}
              >
                IND. 31B · PERLUASAN AKSES
              </div>
              <h2 id="h-jal" style={{ margin: "6px 0 14px", fontSize: "22px", color: "#064E3B", fontWeight: 800 }}>
                Jalur masuk
              </h2>
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}
              >
                {paths.map((p, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #DCE6E0",
                      borderRadius: "16px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      textDecoration: "none",
                      color: "#13231C",
                      borderTop: `5px solid ${p.c}`,
                    }}
                  >
                    <span style={{ fontSize: "17px", fontWeight: 800 }}>{p.t}</span>
                    <span style={{ fontSize: "13px", color: "#44574E", lineHeight: 1.5 }}>{p.d}</span>
                    <span style={{ marginTop: "auto", fontSize: "12px", fontWeight: 700, color: "#0A6B4F" }}>
                      {p.l}
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* Beasiswa & Widget Inklusif */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              <section
                aria-labelledby="h-bea"
                style={{
                  flex: "3 1 540px",
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "18px",
                  padding: "26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    color: "#8A6500",
                    textTransform: "uppercase",
                  }}
                >
                  IND. 27B, 31B · BANTUAN BIAYA
                </div>
                <h2 id="h-bea" style={{ margin: 0, fontSize: "22px", color: "#064E3B", fontWeight: 800 }}>
                  Beasiswa & keringanan
                </h2>
                {schol.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "14px",
                      alignItems: "center",
                      padding: "12px 0",
                      borderBottom: "1px solid #EEF3F0",
                    }}
                  >
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontWeight: 800, fontSize: "15px" }}>{s.t}</span>
                      <span style={{ fontSize: "13px", color: "#44574E" }}>{s.d}</span>
                    </span>
                    <span
                      style={{
                        flex: "none",
                        fontSize: "12px",
                        fontWeight: 800,
                        padding: "4px 10px",
                        borderRadius: "999px",
                        background: "#E3F1EA",
                        color: "#064E3B",
                      }}
                    >
                      {s.q}
                    </span>
                  </div>
                ))}
              </section>

              <section style={{ flex: "2 1 360px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div
                  style={{
                    background: "#064E3B",
                    color: "#FFFFFF",
                    borderRadius: "18px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: ".12em", color: "#F2C230" }}>
                    IND. 31A · KEBIJAKAN INKLUSIF
                  </div>
                  <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 800 }}>Kampus untuk semua</h2>
                  <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: "#D3EBDF" }}>
                    Unit Layanan Disabilitas mendampingi sejak pendaftaran: akomodasi ujian, akses gedung, dan materi
                    aksesibel.
                  </p>
                  <a href="#" style={{ color: "#F2C230", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                    Kebijakan PMB afirmatif & inklusif (PDF) →
                  </a>
                </div>

                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DCE6E0",
                    borderRadius: "18px",
                    padding: "22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: ".12em", color: "#8A6500" }}>
                    IND. 32A · PKKMB
                  </div>
                  <div style={{ fontSize: "17px", fontWeight: 800 }}>Pengenalan Kehidupan Kampus</div>
                  <div style={{ fontSize: "14px", color: "#44574E", lineHeight: 1.55 }}>
                    Integritas akademik, kampus bebas kekerasan, dan adaptasi kehidupan kampus.
                  </div>
                  <a href="#" style={{ fontSize: "14px", fontWeight: 700, color: "#0A6B4F", textDecoration: "none" }}>
                    Panduan PKKMB 2027 →
                  </a>
                </div>
              </section>
            </div>

            {/* FAQ */}
            <section
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "18px",
                padding: "26px",
              }}
            >
              <h2 style={{ margin: "0 0 12px", fontSize: "22px", color: "#064E3B", fontWeight: 800 }}>
                Pertanyaan umum
              </h2>
              {FAQ.map((f, i) => {
                const isOpen = faqOpen === i;
                return (
                  <div key={i} style={{ borderBottom: "1px solid #EEF3F0" }}>
                    <button
                      onClick={() => setFaqOpen(isOpen ? null : i)}
                      style={{
                        width: "100%",
                        border: 0,
                        background: "transparent",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px 0",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#13231C",
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      {f[0]}
                      <span style={{ color: "#0A6B4F", fontSize: "20px" }}>{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <p style={{ margin: "0 0 16px", fontSize: "15px", lineHeight: 1.6, color: "#44574E" }}>{f[1]}</p>
                    )}
                  </div>
                );
              })}
            </section>
          </div>
        )}

        {/* 2. TAB KONTEN SUB-MENU LAINNYA */}
        {tab !== "pmb" && curData && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h2 style={{ margin: 0, fontSize: "28px", color: "#064E3B", fontWeight: 800 }}>{activeMenu.label}</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {curData.stats.map((st, i) => (
                <div
                  key={i}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DCE6E0",
                    borderRadius: "14px",
                    padding: "18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#44574E" }}>{st.label}</span>
                  <span style={{ fontSize: "28px", fontWeight: 800, color: "#064E3B", lineHeight: 1.1 }}>{st.v}</span>
                </div>
              ))}
            </div>

            {curData.sections.map((sec, i) => (
              <section key={i} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ margin: 0, fontSize: "20px", color: "#064E3B", fontWeight: 800 }}>{sec.title}</h3>
                <div
                  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "14px" }}
                >
                  {sec.docs.map((d, j) => (
                    <div
                      key={j}
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #DCE6E0",
                        borderRadius: "14px",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "10px",
                          alignItems: "flex-start",
                        }}
                      >
                        <span style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.35, color: "#13231C" }}>
                          {d.name}
                        </span>
                        <span
                          style={{
                            flex: "none",
                            fontSize: "11px",
                            fontWeight: 700,
                            padding: "3px 9px",
                            borderRadius: "999px",
                            background: d.bg,
                            color: d.fg,
                          }}
                        >
                          {d.badge}
                        </span>
                      </div>
                      <span style={{ fontSize: "12px", color: "#44574E" }}>{d.meta}</span>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          gap: 8,
                          marginTop: "auto",
                        }}
                      >
                        <a
                          href="#"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            background: "#0A6B4F",
                            color: "#FFFFFF",
                            padding: "11px 18px",
                            borderRadius: "10px",
                            fontWeight: 700,
                            fontSize: "14px",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                        >
                          {d.action} →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
