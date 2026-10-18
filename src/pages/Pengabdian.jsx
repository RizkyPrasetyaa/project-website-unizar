import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Pengabdian() {
  const location = useLocation();

  // 1. REGISTRASI 5 TAB VALID
  const MENU_ITEMS = [
    { key: "renstra", label: "Renstra & Peta Jalan PkM" },
    { key: "pedoman", label: "Pedoman & Kepakaran" },
    { key: "tatakelola", label: "Tata Kelola & Proses PkM" },
    { key: "luaran", label: "Luaran & Kemitraan" },
    { key: "rekognisi", label: "Rekognisi Kepakaran" },
  ];

  const VALID_TABS = MENU_ITEMS.map((m) => m.key);

  // 2. INITIALIZATION STATE DENGAN FALLBACK AMAN
  const [tab, setTab] = useState(() => {
    return location.state?.tab && VALID_TABS.includes(location.state.tab) ? location.state.tab : "renstra";
  });

  const tabRefs = useRef({});

  // 3. SINKRONISASI REALTIME DARI MEGA MENU HEADER
  useEffect(() => {
    const targetTab = location.state?.tab && VALID_TABS.includes(location.state.tab) ? location.state.tab : "renstra";

    setTab(targetTab);
    window.scrollTo(0, 0);

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

  // 4. HANDLER KLIK TAB INTERNAL
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

  // HELPER STYLING DOKUMEN
  const STY = {
    pub: { badge: "Publik", bg: "#E3F1EA", fg: "#064E3B", action: "Unduh PDF" },
    sum: { badge: "Ringkasan", bg: "#FFF1C2", fg: "#6B4E00", action: "Lihat ringkasan" },
    lock: { badge: "Terbatas", bg: "#FBE3E4", fg: "#8E1B20", action: "Masuk untuk membuka" },
    ext: { badge: "Tautan sistem", bg: "#E6EEF8", fg: "#1D3F6E", action: "Buka ↗" },
    dir: { badge: "Direktori", bg: "#E3F1EA", fg: "#064E3B", action: "Jelajahi" },
  };

  const D = (name, acc, meta) => {
    const s = STY[acc] || STY.pub;
    return { name, meta, badge: s.badge, bg: s.bg, fg: s.fg, action: s.action };
  };

  const SK = "SK Rektor No. [—] · [tgl]";

  // DATA DOKUMEN PER SUB-MENU
  const TABS_DATA = {
    renstra: {
      intro:
        "Landasan, peta jalan, serta sasaran dan indikator kinerja pengabdian kepada masyarakat (PkM) yang berdampak langsung bagi masyarakat.",
      sections: [
        {
          title: "Perencanaan & Peta Jalan PkM",
          docs: [
            D("Renstra & Peta Jalan PkM 2025–2029", "pub", SK),
            D("Peta Jalan PkM Berbasis Wilayah & Tematik", "pub", "Infografis + dokumen"),
            D("Target Capaian & Indikator Dampak PkM", "pub", "Tabel target 5 tahun"),
          ],
        },
      ],
    },
    pedoman: {
      intro: "Pedoman pelaksanaan PkM serta pengembangan kepakaran dosen untuk mendukung pengabdian berkualitas.",
      sections: [
        {
          title: "Pedoman & SDM",
          docs: [
            D("Pedoman PkM & Pengembangan Kepakaran", "pub", SK),
            D("Pedoman Beban Kerja Dosen bidang PkM", "pub", SK),
            D("Program Klinik Proposal PkM Internal", "pub", "Jadwal 2026"),
          ],
        },
      ],
    },
    tatakelola: {
      intro: "Proses seleksi, tata cara review, kelayakan etika, serta pengawasan pelaksanaan PkM.",
      sections: [
        {
          title: "Tata Kelola & Proses",
          docs: [
            D("Tata Cara Review & SK Reviewer PkM", "pub", "SOP · v2.0"),
            D("Laporan Monev PkM 2025", "sum", "Ikhtisar 2025"),
            D("Kontrak & Penugasan PkM Dosen", "lock", "Per judul"),
          ],
        },
      ],
    },
    luaran: {
      intro: "Kemitraan strategis dengan desa binaan, Pemda, UMKM, serta publikasi dan produk PkM.",
      sections: [
        {
          title: "Luaran & Kemitraan Strategis",
          docs: [
            D("Analisis Luaran PkM vs Target", "sum", "Laporan tahunan LPPM"),
            D("Direktori Mitra Aktif PkM (Pemda & Industri)", "dir", "64 Mitra aktif"),
            D("Laporan Akhir PkM per Judul", "lock", "Khusus civitas akademika"),
          ],
        },
      ],
    },
    rekognisi: {
      intro:
        "Pengakuan atas kepakaran dosen UNIZAR sebagai konsultan, reviewer, dan pemateri tingkat regional maupun nasional.",
      sections: [
        {
          title: "Rekognisi Kepakaran Dosen",
          docs: [
            D("Direktori Pakar Bersertifikat", "dir", "39 Pakar tersertifikasi"),
            D("Daftar Dosen Saksi Ahli & Konsultan Pemda", "pub", "Rekap 2024–2026"),
            D("Penghargaan & Anugerah PkM", "pub", "Nasional & regional"),
          ],
        },
      ],
    },
  };

  // DATA TAB UTAMA (IKHTISAR / OVERVIEW PAGE)
  const kpi = [
    { l: "Program PkM 2025", v: "118" },
    { l: "Mitra aktif", v: "64" },
    { l: "Desa / kelurahan binaan", v: "27" },
    { l: "Pakar bersertifikat", v: "39" },
  ];

  const regions = [
    { n: "Kota Mataram", v: 26, w: "100%" },
    { n: "Lombok Barat", v: 21, w: "80%" },
    { n: "Lombok Tengah", v: 18, w: "69%" },
    { n: "Lombok Timur", v: 16, w: "61%" },
    { n: "Lombok Utara", v: 12, w: "46%" },
    { n: "Sumbawa", v: 9, w: "34%" },
    { n: "Dompu & Bima", v: 8, w: "30%" },
    { n: "Luar NTB", v: 8, w: "30%" },
  ];

  const progs = [
    {
      tag: "DESA BINAAN",
      t: "[Program unggulan 1]",
      d: "Pendampingan berkelanjutan 3 tahun dengan indikator dampak terukur.",
      m: "Pemerintah desa · Pemda",
    },
    {
      tag: "KESEHATAN",
      t: "[Program unggulan 2]",
      d: "Layanan dan edukasi kesehatan berbasis kepakaran dosen dan mahasiswa.",
      m: "Puskesmas · Dinas Kesehatan",
    },
    {
      tag: "UMKM & EKONOMI",
      t: "[Program unggulan 3]",
      d: "Penguatan usaha lokal melalui pelatihan, legalitas, dan pemasaran digital.",
      m: "Koperasi · BUMDes",
    },
  ];

  const experts = [
    { n: "[Nama pakar 1]", f: "[Bidang keahlian]", c: "Sertifikat kompetensi BNSP" },
    { n: "[Nama pakar 2]", f: "[Bidang keahlian]", c: "Asesor / auditor tersertifikasi" },
    { n: "[Nama pakar 3]", f: "[Bidang keahlian]", c: "Saksi ahli · Pemda" },
    { n: "[Nama pakar 4]", f: "[Bidang keahlian]", c: "Konsultan industri" },
  ];

  const curData = TABS_DATA[tab];

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        color: "#13231C",
        background: "#F4F8F6",
        minHeight: "100vh",
      }}
    >
      {/* BANNER HEADER HIJAU CLEAN */}
      <section style={{ background: "#064E3B", color: "#FFFFFF" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "22px 32px 0" }}>
          {/* Breadcrumb Dinamis */}
          <nav aria-label="Breadcrumb" style={{ fontSize: "13px", color: "#B7DCC9" }}>
            <Link to="/" style={{ color: "#B7DCC9", textDecoration: "none" }}>
              Beranda
            </Link>{" "}
            / LPPM / <span style={{ color: "#FFFFFF", fontWeight: 600 }}>{activeMenu.label}</span>
          </nav>

          <div style={{ padding: "18px 0 26px" }}>
            <h1 style={{ margin: 0, fontSize: "40px", lineHeight: 1.1, fontWeight: 800 }}>
              Pengabdian kepada Masyarakat
            </h1>
          </div>

          {/* TAB NAVIGASI HORIZONTAL */}
          <div
            role="tablist"
            aria-label="Sub-menu pengabdian"
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

      {/* KONTEN UTAMA */}
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
        {/* HERO BANNER SECTION (Di dalam tab Renstra / Default) */}
        {tab === "renstra" && (
          <>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              <div
                style={{
                  flex: "3 1 560px",
                  background: "#064E3B",
                  color: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <h2 style={{ margin: 0, fontSize: "36px", lineHeight: 1.15, fontWeight: 800 }}>
                  Ilmu yang hadir di tengah masyarakat
                </h2>
                <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.6, color: "#D3EBDF", maxWidth: "620px" }}>
                  Program pengabdian berbasis kepakaran dosen, bersama pemerintah daerah, komunitas, dan industri di
                  Nusa Tenggara Barat.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "4px" }}>
                  <a
                    href="#ajukan"
                    style={{
                      background: "#F2C230",
                      color: "#053B2C",
                      padding: "12px 20px",
                      borderRadius: "10px",
                      fontWeight: 800,
                      fontSize: "15px",
                      textDecoration: "none",
                    }}
                  >
                    Ajukan kolaborasi
                  </a>
                  <a
                    href="#pakar"
                    style={{
                      border: "1.5px solid #D3EBDF",
                      color: "#FFFFFF",
                      padding: "11px 20px",
                      borderRadius: "10px",
                      fontWeight: 700,
                      fontSize: "15px",
                      textDecoration: "none",
                    }}
                  >
                    Cari pakar
                  </a>
                </div>
              </div>

              {/* KPI STATS GRID */}
              <div
                style={{
                  flex: "2 1 380px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "12px",
                }}
              >
                {kpi.map((k, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #DCE6E0",
                      borderRadius: "16px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ fontSize: "13px", color: "#44574E", fontWeight: 600 }}>{k.l}</div>
                    <div
                      style={{ fontSize: "34px", fontWeight: 800, color: "#064E3B", lineHeight: 1.1, marginTop: "4px" }}
                    >
                      {k.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SEBARAN REGION & PETA NTB */}
            <section
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "18px",
                padding: "26px",
                display: "flex",
                flexWrap: "wrap",
                gap: "24px",
              }}
            >
              <div style={{ flex: "3 1 520px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    color: "#8A6500",
                    textTransform: "uppercase",
                  }}
                >
                  SEBARAN & DAMPAK
                </span>
                <h2 style={{ margin: 0, fontSize: "22px", color: "#064E3B", fontWeight: 800 }}>
                  Jangkauan pengabdian di NTB
                </h2>
                <div
                  style={{
                    flex: 1,
                    minHeight: "260px",
                    borderRadius: "14px",
                    background: "#E3F1EA",
                    border: "1.5px dashed #9CCFB6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0A6B4F",
                    fontSize: "14px",
                    fontWeight: 600,
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  [Peta interaktif NTB — titik lokasi program PkM, klik untuk detail kegiatan, mitra, dan luaran]
                </div>
              </div>

              <div style={{ flex: "2 1 320px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ fontSize: "14px", fontWeight: 800, marginBottom: "4px" }}>
                  Program per kabupaten/kota (2025)
                </div>
                {regions.map((r, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "140px 1fr 36px",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: 600 }}>{r.n}</span>
                    <span
                      style={{
                        height: "10px",
                        background: "#EEF3F0",
                        borderRadius: "999px",
                        overflow: "hidden",
                        display: "block",
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          height: "10px",
                          width: r.w,
                          background: "#0A6B4F",
                          borderRadius: "999px",
                        }}
                      ></span>
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: 800, color: "#064E3B", textAlign: "right" }}>
                      {r.v}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* PROGRAM UNGGULAN */}
            <section>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "14px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: ".12em",
                      color: "#8A6500",
                      textTransform: "uppercase",
                    }}
                  >
                    PETA JALAN PKM
                  </span>
                  <h2 style={{ margin: "6px 0 0", fontSize: "22px", color: "#064E3B", fontWeight: 800 }}>
                    Program unggulan
                  </h2>
                </div>
                <a href="#" style={{ fontWeight: 700, fontSize: "14px", color: "#0A6B4F", textDecoration: "none" }}>
                  Semua program →
                </a>
              </div>
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px" }}
              >
                {progs.map((p, idx) => (
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
                        height: "140px",
                        background: "#D3EBDF",
                        display: "flex",
                        alignItems: "center",
                        justifyCenter: "center",
                        color: "#0A6B4F",
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      [Foto program]
                    </div>
                    <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 800, color: "#8E1B20", letterSpacing: ".06em" }}>
                        {p.tag}
                      </span>
                      <span style={{ fontSize: "17px", fontWeight: 800, lineHeight: 1.35 }}>{p.t}</span>
                      <span style={{ fontSize: "14px", color: "#44574E", lineHeight: 1.55 }}>{p.d}</span>
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "#0A6B4F", marginTop: "auto" }}>
                        Mitra: {p.m}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* DOKUMEN & PAKAR DIREKTORI */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              <section
                id="pakar"
                style={{
                  flex: "3 1 560px",
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "18px",
                  padding: "26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    color: "#8A6500",
                    textTransform: "uppercase",
                  }}
                >
                  LAYANAN KEPAKARAN
                </span>
                <h2 style={{ margin: 0, fontSize: "22px", color: "#064E3B", fontWeight: 800 }}>
                  Direktori pakar & layanan profesional
                </h2>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <input
                    type="search"
                    placeholder="Cari bidang keahlian, mis. ergonomi, hukum agraria, UMKM"
                    style={{
                      flex: "1 1 320px",
                      height: "46px",
                      border: "1.5px solid #B9CCC2",
                      borderRadius: "10px",
                      padding: "0 14px",
                      fontSize: "15px",
                      outline: "none",
                    }}
                  />
                  <button
                    style={{
                      height: "46px",
                      border: 0,
                      borderRadius: "10px",
                      background: "#064E3B",
                      color: "#FFFFFF",
                      fontWeight: 700,
                      padding: "0 20px",
                      fontSize: "15px",
                      cursor: "pointer",
                    }}
                  >
                    Cari
                  </button>
                </div>
                <div
                  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}
                >
                  {experts.map((e, idx) => (
                    <a
                      key={idx}
                      href="#"
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        padding: "14px",
                        borderRadius: "12px",
                        background: "#F4F8F6",
                        textDecoration: "none",
                        color: "#13231C",
                      }}
                    >
                      <span
                        style={{
                          flex: "none",
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          background: "#D3EBDF",
                        }}
                      ></span>
                      <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontWeight: 800, fontSize: "14px" }}>{e.n}</span>
                        <span style={{ fontSize: "12px", color: "#44574E" }}>{e.f}</span>
                        <span style={{ fontSize: "11px", fontWeight: 700, color: "#6B4E00" }}>{e.c}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </section>

              {/* DOKUMEN PKM LIST */}
              <section
                style={{
                  flex: "2 1 380px",
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "18px",
                  padding: "26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <h2 style={{ margin: "0 0 8px", fontSize: "22px", color: "#064E3B", fontWeight: 800 }}>Dokumen PkM</h2>
                {curData.sections[0].docs.map((d, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      alignItems: "center",
                      padding: "11px 0",
                      borderBottom: "1px solid #EEF3F0",
                    }}
                  >
                    <span style={{ display: "flex", flexDirection: "column" }}>
                      <a
                        href="#"
                        style={{ fontWeight: 700, fontSize: "14px", color: "#13231C", textDecoration: "none" }}
                      >
                        {d.name}
                      </a>
                    </span>
                    <span
                      style={{
                        flex: "none",
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "3px 9px",
                        borderRadius: "999px",
                        background: d.badge === "Publik" ? "#E3F1EA" : "#FFF1C2",
                        color: d.badge === "Publik" ? "#064E3B" : "#6B4E00",
                      }}
                    >
                      {d.badge}
                    </span>
                  </div>
                ))}
              </section>
            </div>

            {/* FORM KOLABORASI */}
            <section
              id="ajukan"
              style={{
                background: "#FFF8E1",
                border: "1px solid #F2D27A",
                borderRadius: "18px",
                padding: "28px",
                display: "flex",
                flexWrap: "wrap",
                gap: "24px",
              }}
            >
              <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <h2 style={{ margin: 0, fontSize: "24px", color: "#3D2E00", fontWeight: 800 }}>
                  Ajukan kolaborasi pengabdian
                </h2>
                <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "#5A4500" }}>
                  Untuk pemerintah desa/daerah, komunitas, sekolah, UMKM, dan industri. Permintaan dicocokkan dengan
                  pakar yang relevan dalam 7 hari kerja.
                </p>
              </div>
              <form
                style={{
                  flex: "2 1 560px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="aj-org" style={{ fontSize: "13px", fontWeight: 700, color: "#3D2E00" }}>
                    Nama lembaga / komunitas
                  </label>
                  <input
                    id="aj-org"
                    type="text"
                    style={{
                      height: "44px",
                      border: "1.5px solid #E2C46A",
                      borderRadius: "10px",
                      padding: "0 12px",
                      fontSize: "15px",
                      background: "#FFFFFF",
                      outline: "none",
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="aj-kab" style={{ fontSize: "13px", fontWeight: 700, color: "#3D2E00" }}>
                    Kabupaten / kota
                  </label>
                  <select
                    id="aj-kab"
                    style={{
                      height: "44px",
                      border: "1.5px solid #E2C46A",
                      borderRadius: "10px",
                      padding: "0 12px",
                      fontSize: "15px",
                      background: "#FFFFFF",
                      outline: "none",
                    }}
                  >
                    <option>Pilih…</option>
                    <option>Kota Mataram</option>
                    <option>Lombok Barat</option>
                    <option>Lombok Tengah</option>
                    <option>Lombok Timur</option>
                  </select>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", gridColumn: "1 / span 2" }}>
                  <label htmlFor="aj-need" style={{ fontSize: "13px", fontWeight: 700, color: "#3D2E00" }}>
                    Kebutuhan / permasalahan
                  </label>
                  <textarea
                    id="aj-need"
                    rows="3"
                    style={{
                      border: "1.5px solid #E2C46A",
                      borderRadius: "10px",
                      padding: "10px 12px",
                      fontSize: "15px",
                      background: "#FFFFFF",
                      resize: "vertical",
                      outline: "none",
                    }}
                  ></textarea>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="aj-cp" style={{ fontSize: "13px", fontWeight: 700, color: "#3D2E00" }}>
                    Narahubung (email / WA)
                  </label>
                  <input
                    id="aj-cp"
                    type="text"
                    style={{
                      height: "44px",
                      border: "1.5px solid #E2C46A",
                      borderRadius: "10px",
                      padding: "0 12px",
                      fontSize: "15px",
                      background: "#FFFFFF",
                      outline: "none",
                    }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <button
                    type="button"
                    style={{
                      width: "100%",
                      height: "44px",
                      border: 0,
                      borderRadius: "10px",
                      background: "#064E3B",
                      color: "#FFFFFF",
                      fontWeight: 800,
                      fontSize: "15px",
                      cursor: "pointer",
                    }}
                  >
                    Kirim permintaan
                  </button>
                </div>
              </form>
            </section>
          </>
        )}

        {/* TAB SUB-MENU LAINNYA */}
        {tab !== "renstra" && curData && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={{ margin: 0, fontSize: "17px", lineHeight: 1.6, color: "#2B3D35", maxWidth: "860px" }}>
              {curData.intro}
            </p>

            {curData.sections.map((sec, idx) => (
              <section key={idx} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ margin: 0, fontSize: "20px", color: "#064E3B", fontWeight: 800 }}>{sec.title}</h3>
                <div
                  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "14px" }}
                >
                  {sec.docs.map((d, dIdx) => (
                    <div
                      key={dIdx}
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
                          paddingTop: "8px",
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
                            padding: "9px 14px",
                            borderRadius: "9px",
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
