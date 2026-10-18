import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Bpm() {
  const location = useLocation();

  // 1. REGISTRASI 8 TAB VALID
  const MENU_ITEMS = [
    { key: "dash", label: "Dashboard Mutu" },
    { key: "profil", label: "Profil BPM" },
    { key: "spmi", label: "Dokumen SPMI" },
    { key: "ami", label: "Monev & AMI" },
    { key: "rtm", label: "RTM & RTL" },
    { key: "spme", label: "SPME / Akreditasi" },
    { key: "spi", label: "SPI" },
    { key: "pddikti", label: "PDDIKTI" },
  ];

  const VALID_TABS = MENU_ITEMS.map((m) => m.key);

  // 2. STATE INITIALIZATION DENGAN FALLBACK AMAN
  const [tab, setTab] = useState(() => {
    return location.state?.tab && VALID_TABS.includes(location.state.tab) ? location.state.tab : "dash";
  });

  const tabRefs = useRef({});

  // 3. SINKRONISASI REALTIME DARI MEGA MENU HEADER + JUMP TO TOP
  useEffect(() => {
    const targetTab = location.state?.tab && VALID_TABS.includes(location.state.tab) ? location.state.tab : "dash";

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
    svc: { badge: "Layanan", bg: "#E3F1EA", fg: "#064E3B", action: "Ajukan" },
  };

  const D = (name, acc, meta) => {
    const s = STY[acc] || STY.pub;
    return { name, meta, badge: s.badge, bg: s.bg, fg: s.fg, action: s.action };
  };

  const SK = "SK Rektor No. [—] · ditetapkan [tgl] · v1.0";

  // DATA DOKUMEN PER SUB-TAB
  const TABS_DATA = {
    spmi: {
      label: "Dokumen SPMI",
      intro:
        "Dokumen inti Sistem Penjaminan Mutu Internal. Isi penuh terbatas untuk civitas dan asesor; publik dapat melihat ikhtisar kebijakan.",
      sections: [
        {
          title: "Dokumen SPMI",
          docs: [
            D("Kebijakan SPMI", "lock", SK),
            D("Manual SPMI (PPEPP)", "lock", SK),
            D("Standar SPMI — Akademik & Non-Akademik", "lock", SK + " · 32 standar"),
            D("Formulir & Cara Pendokumentasian", "lock", "Kumpulan template · v2.0"),
          ],
        },
        {
          title: "Untuk Publik",
          docs: [D("Ikhtisar Kebijakan & Standar SPMI", "sum", "Ringkasan 4 halaman · Sep 2026")],
        },
      ],
    },
    ami: {
      label: "Monev & AMI",
      intro: "Monitoring-evaluasi dan Audit Mutu Internal — bukti pelaksanaan siklus Evaluasi dan Pengendalian mutu.",
      sections: [
        {
          title: "Monev",
          docs: [D("Panduan Monev", "lock", SK), D("Laporan Monev 2026", "lock", "Semester Ganjil 2025/2026")],
        },
        {
          title: "Audit Mutu Internal",
          docs: [
            D("Daftar Auditor Internal", "lock", "SK penugasan · 2026"),
            D("Pedoman AMI", "lock", SK),
            D("Laporan AMI 2025", "lock", "Akademik & non-akademik"),
            D("Instrumen AMI (SIM-AMI)", "ext", "Sistem informasi audit · login"),
          ],
        },
      ],
    },
    rtm: {
      label: "RTM & RTL",
      intro: "Rapat Tinjauan Manajemen dan Rencana Tindak Lanjut sebagai komitmen perbaikan mutu berkelanjutan.",
      sections: [
        {
          title: "Rapat Tinjauan Manajemen (RTM)",
          docs: [D("Template Laporan RTM", "lock", "v1.2"), D("Laporan RTM 2025", "lock", "Notulen & keputusan")],
        },
        {
          title: "Rencana Tindak Lanjut (RTL)",
          docs: [
            D("Template Laporan RTL", "lock", "v1.2"),
            D("Laporan RTL 2025", "lock", "Status tindak lanjut temuan"),
          ],
        },
      ],
    },
    spme: {
      label: "SPME / Akreditasi",
      intro: "Sistem Penjaminan Mutu Eksternal: alur dan dokumen akreditasi institusi serta program studi.",
      sections: [
        {
          title: "Akreditasi",
          docs: [
            D("Alur Pengajuan Akreditasi", "pub", "Infografis · BAN-PT & LAM"),
            D("Instrumen Akreditasi (IAPT 4.1 / IAPS)", "lock", "Salinan kerja internal"),
            D("Laporan Evaluasi Diri (LED)", "lock", "Institusi & prodi"),
            D("Laporan Kinerja PT", "sum", "Ikhtisar publik tersedia"),
          ],
        },
        {
          title: "Benchmarking",
          docs: [D("Laporan Benchmarking / Studi Banding", "pub", "Ringkasan 2024–2026")],
        },
        {
          title: "Evaluasi Hasil Akreditasi",
          docs: [
            D("Berita Acara Visitasi", "lock", "Per prodi"),
            D("Monev & Tindak Lanjut Akreditasi", "lock", "Rekap rekomendasi asesor"),
          ],
        },
      ],
    },
    spi: {
      label: "SPI",
      intro: "Satuan Pengawasan Internal: pengawasan, pengendalian risiko, dan integritas tata kelola.",
      sections: [
        {
          title: "Dokumen SPI",
          docs: [
            D("Peraturan Anti Fraud", "pub", SK),
            D("Piagam Audit", "lock", SK),
            D("Pedoman Audit", "lock", SK),
            D("SOP SPI", "lock", "Kumpulan SOP · v1.1"),
          ],
        },
        {
          title: "Layanan",
          docs: [
            D("Konsultasi & Pendampingan", "svc", "Untuk unit kerja"),
            D("Whistleblowing System", "svc", "Identitas pelapor dirahasiakan"),
            D("Pengawasan", "pub", "Jadwal & ruang lingkup"),
          ],
        },
      ],
    },
    pddikti: {
      label: "PDDIKTI",
      intro: "Alur pelaporan data ke Pangkalan Data Pendidikan Tinggi dan tautan sistem terkait.",
      sections: [
        {
          title: "Pelaporan & Tautan Sistem",
          docs: [
            D("Alur Pelaporan PDDIKTI", "pub", "Infografis · tenggat per semester"),
            D("PDDIKTI UNIZAR", "ext", "pddikti.kemdiktisaintek.go.id"),
            D("Neo Feeder", "ext", "Login operator"),
            D("Profeeder", "ext", "Login operator"),
            D("PISN", "ext", "Penomoran ijazah nasional"),
          ],
        },
      ],
    },
  };

  // DATA TAB DASHBOARD MUTU
  const rawAkreditasi = [
    { label: "Unggul", n: "8", pct: "26,7%", c: "#0A6B4F" },
    { label: "A", n: "2", pct: "6,7%", c: "#3A9B76" },
    { label: "Baik Sekali", n: "9", pct: "30,0%", c: "#6DB894" },
    { label: "B", n: "3", pct: "10,0%", c: "#F2C230" },
    { label: "Baik", n: "5", pct: "16,7%", c: "#E8A33A" },
    { label: "Terakreditasi", n: "1", pct: "3,3%", c: "#C1272D" },
    { label: "Terakreditasi Sementara", n: "1", pct: "3,3%", c: "#8E1B20" },
    { label: "Terakreditasi Pertama", n: "1", pct: "3,3%", c: "#44574E" },
  ];

  const services = [
    { mono: "DA", label: "Direktori Akreditasi" },
    { mono: "SK", label: "Survei Kepuasan Stakeholder" },
    { mono: "LA", label: "Kirim Laporan / Aduan / Kritik / Saran" },
    { mono: "BM", label: "Benchmarking / Studi Banding" },
    { mono: "PL", label: "Pelatihan SPMI / AMI" },
  ];

  const months = [
    { l: "Jan", bg: "#F4F8F6", fg: "#44574E" },
    { l: "Feb", bg: "#F4F8F6", fg: "#44574E" },
    { l: "Mar", bg: "#F4F8F6", fg: "#44574E" },
    { l: "Apr", bg: "#F4F8F6", fg: "#44574E" },
    { l: "Mei", bg: "#F4F8F6", fg: "#44574E" },
    { l: "Jun", bg: "#F4F8F6", fg: "#44574E" },
    { l: "Jul", bg: "#F4F8F6", fg: "#44574E" },
    { l: "Agu", bg: "#F4F8F6", fg: "#44574E" },
    { l: "Sep", bg: "#F4F8F6", fg: "#44574E" },
    { l: "Okt", bg: "#064E3B", fg: "#FFFFFF" },
    { l: "Nov", bg: "#F4F8F6", fg: "#44574E" },
    { l: "Des", bg: "#F4F8F6", fg: "#44574E" },
  ];

  const cal = [
    {
      label: "Penetapan",
      phase: "P1",
      col: "2 / span 2",
      note: "Revisi & pengesahan standar",
      c: "#064E3B",
      fg: "#FFFFFF",
    },
    {
      label: "Pelaksanaan",
      phase: "P2",
      col: "4 / span 10",
      note: "Implementasi standar di seluruh unit",
      c: "#3A9B76",
      fg: "#FFFFFF",
    },
    { label: "Monev", phase: "E", col: "5 / span 1", note: "Monev I", c: "#F2C230", fg: "#3D2E00" },
    {
      label: "Audit Mutu Internal",
      phase: "E",
      col: "9 / span 2",
      note: "AMI akademik & non-akademik",
      c: "#E8A33A",
      fg: "#3D2E00",
    },
    { label: "RTM", phase: "P3", col: "11 / span 1", note: "RTM", c: "#C1272D", fg: "#FFFFFF" },
    { label: "RTL", phase: "P3", col: "12 / span 1", note: "RTL", c: "#8E1B20", fg: "#FFFFFF" },
    { label: "Peningkatan", phase: "P4", col: "13 / span 1", note: "Naik standar", c: "#053B2C", fg: "#FFFFFF" },
  ];

  const acts = [
    {
      tag: "AUDIT MUTU INTERNAL",
      title: "Kick-off AMI 2026 untuk 10 fakultas dan unit penunjang",
      date: "08 Okt 2026",
    },
    { tag: "PELATIHAN", title: "Pelatihan auditor internal SPMI angkatan III", date: "22 Sep 2026" },
    { tag: "BENCHMARKING", title: "Studi banding tata kelola SPMI ke perguruan tinggi rujukan", date: "05 Sep 2026" },
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
          <nav aria-label="Breadcrumb" style={{ fontSize: "13px", color: "#B7DCC9" }}>
            <Link to="/" style={{ color: "#B7DCC9", textDecoration: "none" }}>
              Beranda
            </Link>{" "}
            / <span style={{ color: "#FFFFFF", fontWeight: 600 }}>Badan Penjaminan Mutu</span>
          </nav>

          <div style={{ padding: "18px 0 26px" }}>
            <h1 style={{ margin: 0, fontSize: "40px", lineHeight: 1.1, fontWeight: 800 }}>Badan Penjaminan Mutu</h1>
          </div>

          <div
            role="tablist"
            aria-label="Sub-menu BPM"
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
                    padding: "12px 20px",
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

      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "28px 32px 64px" }}>
        {/* 1. TAB DASHBOARD MUTU (DEFAULT) */}
        {tab === "dash" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <section
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "18px",
                padding: "28px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "18px" }}>
                <div style={{ flex: 1, height: "1px", background: "#DCE6E0" }}></div>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    fontWeight: 800,
                    letterSpacing: ".12em",
                    color: "#064E3B",
                    textTransform: "uppercase",
                  }}
                >
                  Statistik Akreditasi (30 Prodi)
                </h2>
                <div style={{ flex: 1, height: "1px", background: "#DCE6E0" }}></div>
              </div>
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px" }}
              >
                {rawAkreditasi.map((s, idx) => (
                  <div
                    key={idx}
                    style={{
                      border: "1px solid #DCE6E0",
                      borderRadius: "14px",
                      padding: "18px 10px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                      borderBottom: `4px solid ${s.c}`,
                    }}
                  >
                    <span style={{ fontSize: "40px", fontWeight: 800, color: "#064E3B", lineHeight: 1 }}>{s.n}</span>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: ".04em",
                        textAlign: "center",
                      }}
                    >
                      {s.label}
                    </span>
                    <span style={{ fontSize: "12px", color: "#44574E" }}>{s.pct}</span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: "14px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "8px",
                  fontSize: "12px",
                  color: "#44574E",
                }}
              >
                <span style={{ color: "#6B4E00", background: "#FFF8E1", padding: "4px 10px", borderRadius: "6px" }}>
                  Data simulasi · sinkron otomatis dari PDDikti / LAM
                </span>
                <span>Diperbarui 10 Okt 2026</span>
              </div>
            </section>

            <section
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}
            >
              {services.map((sv, idx) => (
                <a
                  key={idx}
                  href="#"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DCE6E0",
                    borderRadius: "16px",
                    padding: "22px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    textAlign: "center",
                    textDecoration: "none",
                    color: "#13231C",
                  }}
                >
                  <span
                    style={{
                      width: "58px",
                      height: "58px",
                      borderRadius: "50%",
                      border: "2px solid #0A6B4F",
                      color: "#0A6B4F",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "15px",
                    }}
                  >
                    {sv.mono}
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: 700, lineHeight: 1.35 }}>{sv.label}</span>
                </a>
              ))}
            </section>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              <section
                style={{
                  flex: "3 1 640px",
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "18px",
                  padding: "26px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "16px",
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
                      SIKLUS PPEPP
                    </span>
                    <h2 style={{ margin: "6px 0 0", fontSize: "24px", color: "#064E3B", fontWeight: 800 }}>
                      Kalender Mutu 2026
                    </h2>
                  </div>
                </div>

                <div style={{ overflowX: "auto" }}>
                  <div style={{ minWidth: "620px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "150px repeat(12, minmax(0, 1fr))",
                        gap: "4px",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#44574E",
                        textAlign: "center",
                      }}
                    >
                      <span></span>
                      {months.map((mo, idx) => (
                        <span
                          key={idx}
                          style={{ padding: "4px 0", borderRadius: "6px", background: mo.bg, color: mo.fg }}
                        >
                          {mo.l}
                        </span>
                      ))}
                    </div>

                    {cal.map((r, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "150px repeat(12, minmax(0, 1fr))",
                          gap: "4px",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ fontSize: "13px", fontWeight: 700, display: "flex", flexDirection: "column" }}>
                          <span>{r.label}</span>
                          <span style={{ fontSize: "11px", color: "#44574E", fontWeight: 600 }}>{r.phase}</span>
                        </span>
                        <span
                          style={{
                            gridColumn: r.col,
                            height: "26px",
                            borderRadius: "8px",
                            background: r.c,
                            color: r.fg,
                            fontSize: "11px",
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            padding: "0 8px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                          }}
                        >
                          {r.note}
                        </span>
                      </div>
                    ))}
                  </div>
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
                  gap: "14px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <h2 style={{ margin: 0, fontSize: "24px", color: "#064E3B", fontWeight: 800 }}>Kegiatan BPM</h2>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#44574E",
                      background: "#F4F8F6",
                      padding: "3px 8px",
                      borderRadius: "6px",
                    }}
                  >
                    Sumber: Humas UNIZAR
                  </span>
                </div>

                {acts.map((ac, idx) => (
                  <article
                    key={idx}
                    style={{ display: "flex", gap: "14px", paddingBottom: "14px", borderBottom: "1px solid #EEF3F0" }}
                  >
                    <div
                      style={{
                        flex: "none",
                        width: "96px",
                        height: "72px",
                        borderRadius: "10px",
                        background: "#D3EBDF",
                      }}
                    ></div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 800, color: "#8E1B20", letterSpacing: ".06em" }}>
                        {ac.tag}
                      </span>
                      <a
                        href="#"
                        style={{
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#13231C",
                          lineHeight: 1.35,
                          textDecoration: "none",
                        }}
                      >
                        {ac.title}
                      </a>
                      <span style={{ fontSize: "12px", color: "#44574E" }}>{ac.date}</span>
                    </div>
                  </article>
                ))}
              </section>
            </div>
          </div>
        )}

        {/* 2. TAB PROFIL BPM */}
        {tab === "profil" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.6, color: "#2B3D35", maxWidth: "820px" }}>
              Identitas kelembagaan Badan Penjaminan Mutu: struktur, kepemimpinan, visi misi, dan komitmen mutu
              universitas.
            </p>

            {/* SAMBUTAN KEPALA BPM */}
            <section
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "18px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "#064E3B",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                >
                  BPM
                </div>
                <div>
                  <h2 style={{ margin: 0, fontSize: "22px", color: "#064E3B", fontWeight: 800 }}>
                    Sambutan Kepala BPM
                  </h2>
                  <span style={{ fontSize: "13px", color: "#44574E" }}>Diperbarui September 2026</span>
                </div>
              </div>

              <div
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#2B3D35",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p style={{ margin: 0 }}>Assalamu'alaikum Warahmatullahi Wabarakatuh.</p>
                <p style={{ margin: 0 }}>
                  Selamat datang di halaman resmi Badan Penjaminan Mutu (BPM) Universitas Islam Al-Azhar. BPM
                  berkomitmen penuh untuk mengawal penetapan, pelaksanaan, evaluasi, pengendalian, dan peningkatan
                  (PPEPP) standar pendidikan tinggi guna mewujudkan budaya mutu yang berkelanjutan di seluruh unit kerja
                  UNIZAR.
                </p>
              </div>
            </section>

            {/* VISI & MISI BPM */}
            <section
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "18px",
              }}
            >
              {/* VISI */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "18px",
                  padding: "26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: ".12em",
                    color: "#8A6500",
                    textTransform: "uppercase",
                  }}
                >
                  KELEMBAGAAN
                </span>
                <h3 style={{ margin: 0, fontSize: "20px", color: "#064E3B", fontWeight: 800 }}>Visi BPM</h3>
                <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "#2B3D35", fontWeight: 600 }}>
                  "Menjadi lembaga penjaminan mutu yang profesional, terpercaya, dan independen dalam mewujudkan budaya
                  mutu sehingga mampu mengantarkan UNIZAR menjadi Universitas yang terkemuka di tingkat regional pada
                  tahun 2029."
                </p>
              </div>

              {/* MISI */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "18px",
                  padding: "26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: ".12em",
                    color: "#8A6500",
                    textTransform: "uppercase",
                  }}
                >
                  KELEMBAGAAN
                </span>
                <h3 style={{ margin: 0, fontSize: "20px", color: "#064E3B", fontWeight: 800 }}>Misi BPM</h3>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "18px",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#2B3D35",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <li>Menanamkan budaya standar mutu pada sivitas akademika UNIZAR.</li>
                  <li>
                    Menyelenggarakan system penjaminan mutu internal secara berencana dan berkelanjutan pada setiap unit
                    kerja sesuai dengan standar mutu Pendidikan Tinggi.
                  </li>
                  <li>
                    Menyelenggarakan audit mutu internal secara berencana dan berkelanjutan pada setiap unit kerja di
                    lingkungan UNIZAR.
                  </li>
                </ul>
              </div>
            </section>

            {/* SEJARAH BPM */}
            <section
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "18px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: ".12em",
                  color: "#8A6500",
                  textTransform: "uppercase",
                }}
              >
                REKAM JEJAK
              </span>
              <h3 style={{ margin: 0, fontSize: "20px", color: "#064E3B", fontWeight: 800 }}>Sejarah BPM</h3>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "#2B3D35" }}>
                Badan Penjaminan Mutu (BPM) UNIZAR dibentuk sebagai bentuk komitmen tata kelola universitas yang
                transparan dan akuntabel. Sejak awal pendiriannya, BPM terus berkembang dari penjaminan mutu tingkat
                fakultas hingga menjadi badan tersentralisasi yang mengintegrasikan sistem SPMI, SPME, AMI, dan
                pelaporan PDDIKTI.
              </p>
            </section>

            {/* STRUKTUR ORGANISASI VISUAL */}
            <section
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "18px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 800,
                      letterSpacing: ".12em",
                      color: "#8A6500",
                      textTransform: "uppercase",
                    }}
                  >
                    TATA KELOLA
                  </span>
                  <h3 style={{ margin: "4px 0 0", fontSize: "20px", color: "#064E3B", fontWeight: 800 }}>
                    Struktur Organisasi & Bagian
                  </h3>
                </div>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#0A6B4F",
                    color: "#FFFFFF",
                    padding: "9px 16px",
                    borderRadius: "10px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                >
                  Unduh Dokumen SK (PDF) ↗
                </a>
              </div>

              {/* Diagram Hirarki UI */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "center",
                  background: "#F4F8F6",
                  padding: "20px",
                  borderRadius: "14px",
                  border: "1px dashed #B9CCC2",
                }}
              >
                <div
                  style={{
                    background: "#064E3B",
                    color: "#FFFFFF",
                    padding: "12px 24px",
                    borderRadius: "10px",
                    textAlign: "center",
                    fontWeight: 800,
                    minWidth: "220px",
                  }}
                >
                  Kepala BPM
                  <div style={{ fontSize: "12px", fontWeight: 500, color: "#D3EBDF" }}>
                    Dr. [Nama Kepala BPM], M.Si.
                  </div>
                </div>

                <div style={{ width: "2px", height: "16px", background: "#0A6B4F" }}></div>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
                  <div
                    style={{
                      background: "#FFFFFF",
                      border: "1.5px solid #0A6B4F",
                      color: "#13231C",
                      padding: "10px 18px",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: "14px", color: "#064E3B" }}>Pusat SPMI & AMI</div>
                    <div style={{ fontSize: "12px", color: "#44574E" }}>Divisi Penjaminan Mutu Internal</div>
                  </div>
                  <div
                    style={{
                      background: "#FFFFFF",
                      border: "1.5px solid #0A6B4F",
                      color: "#13231C",
                      padding: "10px 18px",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: "14px", color: "#064E3B" }}>Pusat SPME & Akreditasi</div>
                    <div style={{ fontSize: "12px", color: "#44574E" }}>Divisi Akreditasi & PDDIKTI</div>
                  </div>
                  <div
                    style={{
                      background: "#FFFFFF",
                      border: "1.5px solid #0A6B4F",
                      color: "#13231C",
                      padding: "10px 18px",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: "14px", color: "#064E3B" }}>Satuan Pengawasan (SPI)</div>
                    <div style={{ fontSize: "12px", color: "#44574E" }}>Divisi Pengendalian & Audit</div>
                  </div>
                </div>
              </div>
            </section>

            {/* DOKUMEN RESMI (DEKLARASI MUTU UNIVERSITAS) */}
            <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3 style={{ margin: 0, fontSize: "20px", color: "#064E3B", fontWeight: 800 }}>Komitmen Mutu</h3>
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "12px" }}
              >
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DCE6E0",
                    borderRadius: "14px",
                    padding: "18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between", gap: "10px", alignItems: "flex-start" }}
                  >
                    <span style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.35, color: "#13231C" }}>
                      Deklarasi Mutu Universitas
                    </span>
                    <span
                      style={{
                        flex: "none",
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "3px 9px",
                        borderRadius: "999px",
                        background: "#E3F1EA",
                        color: "#064E3B",
                      }}
                    >
                      Publik
                    </span>
                  </div>
                  <span style={{ fontSize: "12px", color: "#44574E" }}>
                    Ditandatangani pimpinan universitas · [tgl]
                  </span>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "auto", paddingTop: "6px" }}>
                    <a
                      href="#"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "#0A6B4F",
                        color: "#FFFFFF",
                        padding: "9px 14px",
                        borderRadius: "999px",
                        fontWeight: 700,
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      Unduh PDF →
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 3. TAB SUB-MENU LAINNYA (SPMI, AMI, RTM, SPME, SPI, PDDIKTI) */}
        {tab !== "dash" && tab !== "profil" && curData && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
            <nav
              style={{
                flex: "1 1 240px",
                maxWidth: "280px",
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "16px",
                padding: "18px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: ".12em",
                  color: "#8A6500",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                {curData.label}
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {curData.sections.map((sec, sIdx) => (
                  <li key={sIdx}>
                    <a
                      href="#"
                      style={{
                        display: "block",
                        padding: "10px 4px",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#13231C",
                        borderBottom: "1px solid #EEF3F0",
                        textDecoration: "none",
                      }}
                    >
                      {sec.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: "16px",
                  fontSize: "12px",
                  lineHeight: 1.5,
                  color: "#44574E",
                  background: "#F4F8F6",
                  borderRadius: "10px",
                  padding: "12px",
                }}
              >
                Dokumen bertanda <b style={{ color: "#8E1B20" }}>Terbatas</b> dapat dibuka setelah masuk SSO civitas
                atau Akun Asesor.
              </div>
            </nav>

            <div style={{ flex: "999 1 640px", minWidth: 0, display: "flex", flexDirection: "column", gap: "22px" }}>
              <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.6, color: "#2B3D35", maxWidth: "820px" }}>
                {curData.intro}
              </p>

              {curData.sections.map((sec, idx) => (
                <section key={idx} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h2 style={{ margin: 0, fontSize: "20px", color: "#064E3B", fontWeight: 800 }}>{sec.title}</h2>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                      gap: "12px",
                    }}
                  >
                    {sec.docs.map((d, dIdx) => (
                      <div
                        key={dIdx}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #DCE6E0",
                          borderRadius: "14px",
                          padding: "18px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
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
                            paddingTop: "6px",
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
                              borderRadius: "999px",
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
          </div>
        )}
      </div>
    </div>
  );
}
