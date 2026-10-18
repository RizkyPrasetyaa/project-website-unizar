import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Penelitian() {
  const location = useLocation();

  // 1. REGISTRASI 6 TAB VALID
  const MENU_ITEMS = [
    { key: "ikhtisar", label: "Ikhtisar" },
    { key: "renstra", label: "Renstra & Peta Jalan" },
    { key: "tatakelola", label: "Tata Kelola" },
    { key: "luaran", label: "Publikasi & Luaran" },
    { key: "hki", label: "HKI & Rekognisi" },
    { key: "laporan", label: "Laporan Penelitian Rinci" },
  ];

  const VALID_TABS = MENU_ITEMS.map((m) => m.key);

  // 2. STATE INITIALIZATION DENGAN FALLBACK AMAN
  const [tab, setTab] = useState(() => {
    return location.state?.tab && VALID_TABS.includes(location.state.tab) ? location.state.tab : "ikhtisar";
  });

  const tabRefs = useRef({});

  // 3. SINKRONISASI REALTIME DARI MEGA MENU HEADER + JUMP TO TOP
  useEffect(() => {
    const targetTab = location.state?.tab && VALID_TABS.includes(location.state.tab) ? location.state.tab : "ikhtisar";

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
        "Landasan, peta jalan, sumber daya, serta sasaran dan indikator kinerja penelitian yang selaras dengan diferensiasi misi.",
      sections: [
        {
          title: "Perencanaan",
          docs: [
            D("Renstra Penelitian 2025–2029", "pub", SK),
            D("Peta Jalan Penelitian per Tema", "pub", "Infografis + dokumen"),
            D("Indikator Kinerja & Target Berdampak", "pub", "Tabel target 5 tahun"),
          ],
        },
        {
          title: "Pengembangan SDM Peneliti",
          docs: [
            D("Pedoman Penelitian", "pub", SK),
            D("Pedoman Penugasan & Bobot Kerja Dosen", "pub", SK),
            D("Program Klinik Proposal & Penulisan Artikel", "pub", "Jadwal 2026"),
          ],
        },
      ],
    },
    tatakelola: {
      intro:
        "Pengelolaan penelitian yang terstruktur, ilmiah, dan etis — dari review proposal sampai monitoring-evaluasi.",
      sections: [
        {
          title: "Proses & Legalitas",
          docs: [
            D("Tata Cara Review Proposal", "pub", "SOP · v2.0"),
            D("SK Reviewer Internal", "pub", "Periode 2026"),
            D("Kontrak & Penugasan Peneliti", "lock", "Per judul"),
          ],
        },
        {
          title: "Etika & Pengawasan",
          docs: [
            D("Kode Etik Penelitian & Komisi Etik", "pub", SK),
            D("Tata Kelola HKI", "pub", SK),
            D("Laporan Monev Penelitian", "sum", "Ikhtisar 2025"),
          ],
        },
      ],
    },
    luaran: {
      intro:
        "Luaran penelitian dosen dan mahasiswa: publikasi, prosiding, buku, dan produk — dengan prinsip lisensi terbuka.",
      sections: [
        {
          title: "Direktori Luaran",
          docs: [
            D("Direktori Publikasi (3 tahun)", "dir", "Terhubung SINTA & Scopus"),
            D("Repositori Institusi (lisensi terbuka)", "ext", "Open access · CC BY"),
            D("Jurnal Terbitan UNIZAR", "ext", "OJS · status akreditasi Sinta"),
          ],
        },
        {
          title: "Analisis Ketercapaian",
          docs: [
            D("Analisis Luaran vs Target Berdampak", "sum", "Laporan tahunan LPPM"),
            D("Penelitian Melibatkan Mahasiswa", "pub", "Rekap & konversi sks"),
          ],
        },
      ],
    },
    hki: {
      intro: "Pengakuan bidang penelitian dan pemanfaatannya: HKI, sitasi, kolaborasi, dan hilirisasi.",
      sections: [
        {
          title: "Kekayaan Intelektual",
          docs: [
            D("Daftar Paten & Paten Sederhana", "dir", "Terhubung PDKI"),
            D("Daftar Hak Cipta & Desain Industri", "dir", "3 tahun terakhir"),
            D("Produk & Hilirisasi", "pub", "Mitra pengguna hasil riset"),
          ],
        },
        {
          title: "Rekognisi",
          docs: [
            D("Kolaborasi Riset Internasional", "pub", "Mitra & luaran bersama"),
            D("Dosen sebagai Reviewer / Editor Jurnal", "pub", "Rekap 2024–2026"),
            D("Penghargaan Riset", "pub", "Nasional & internasional"),
          ],
        },
      ],
    },
    laporan: {
      intro: "Laporan rinci hasil penelitian yang dapat diakses oleh civitas akademika sesuai kriteria otorisasi.",
      sections: [
        {
          title: "Laporan Penelitian Rinci",
          docs: [
            D("Laporan Penelitian Rinci (Per Judul)", "lock", "Per judul penelitian"),
            D("Laporan Akhir Hibah Internal", "lock", "Khusus peneliti & reviewer"),
          ],
        },
      ],
    },
  };

  // DATA IKHTISAR (BERSIH TANPA LABEL INDIKATOR)
  const kpi = [
    { l: "Judul penelitian 2025", v: "146" },
    { l: "Dana penelitian (Rp)", v: "4,2 M" },
    { l: "Publikasi bereputasi (3 th)", v: "214" },
    { l: "HKI tercatat (3 th)", v: "57" },
    { l: "Melibatkan mahasiswa", v: "68%" },
  ];

  const rawBars = [
    { y: "2021", total: 62, hi: "27px", hn: "66px" },
    { y: "2022", total: 75, hi: "36px", hn: "77px" },
    { y: "2023", total: 89, hi: "47px", hn: "87px" },
    { y: "2024", total: 102, hi: "59px", hn: "95px" },
    { y: "2025", total: 117, hi: "71px", hn: "105px" },
  ];

  const themes = [
    {
      no: "TEMA 1",
      title: "[Tema riset unggulan 1]",
      sub: "Selaras fokus diferensiasi misi universitas; melibatkan lintas fakultas.",
      n: 42,
      p: 61,
    },
    {
      no: "TEMA 2",
      title: "[Tema riset unggulan 2]",
      sub: "Berbasis kebutuhan daerah NTB dan mitra industri.",
      n: 35,
      p: 48,
    },
    {
      no: "TEMA 3",
      title: "[Tema riset unggulan 3]",
      sub: "Integrasi keilmuan dan nilai-nilai keislaman.",
      n: 28,
      p: 37,
    },
  ];

  const flow = [
    { n: 1, t: "Usulan", d: "Proposal diunggah ke SIM-LPPM sesuai tema peta jalan." },
    { n: 2, t: "Review", d: "Penilaian oleh reviewer ber-SK, dua tahap." },
    { n: 3, t: "Etik & kontrak", d: "Kelaikan etik dan surat penugasan peneliti." },
    { n: 4, t: "Pelaksanaan", d: "Logbook daring; mahasiswa memperoleh sks." },
    { n: 5, t: "Monev", d: "Monitoring kemajuan dan seminar hasil." },
    { n: 6, t: "Luaran", d: "Publikasi berlisensi terbuka, HKI, repositori." },
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
      {/* BANNER HEADER HIJAU */}
      <section style={{ background: "#064E3B", color: "#FFFFFF" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "22px 32px 0" }}>
          {/* Breadcrumb Dinamis */}
          <nav aria-label="Breadcrumb" style={{ fontSize: "13px", color: "#B7DCC9" }}>
            <Link to="/" style={{ color: "#B7DCC9", textDecoration: "none" }}>
              Beranda
            </Link>{" "}
            / LPPM / <span style={{ color: "#FFFFFF", fontWeight: 600 }}>{activeMenu.label}</span>
          </nav>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "18px 0 26px",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "40px", lineHeight: 1.1, fontWeight: 800 }}>Penelitian</h1>

            {/* ACTION BUTTON UTAMA */}
            <a
              href="#"
              style={{
                background: "#FFFFFF",
                color: "#064E3B",
                padding: "11px 18px",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Portal SIM-LPPM ↗
            </a>
          </div>

          {/* TAB NAVIGASI HORIZONTAL */}
          <div
            role="tablist"
            aria-label="Sub-menu penelitian"
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
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "28px 32px 64px" }}>
        {/* 1. TAB IKHTISAR */}
        {tab === "ikhtisar" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
            {/* KPI Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              {kpi.map((k, idx) => (
                <div
                  key={idx}
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
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#44574E" }}>{k.l}</span>
                  <span style={{ fontSize: "30px", fontWeight: 800, color: "#064E3B", lineHeight: 1.1 }}>{k.v}</span>
                </div>
              ))}
            </div>

            {/* Grafik & Hibah */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
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
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: ".12em",
                        color: "#8A6500",
                        textTransform: "uppercase",
                      }}
                    >
                      TREN 5 TAHUN
                    </span>
                    <h2 style={{ margin: "6px 0 0", fontSize: "22px", color: "#064E3B", fontWeight: 800 }}>
                      Publikasi dosen per tahun
                    </h2>
                  </div>
                  <div style={{ display: "flex", gap: "14px", fontSize: "12px", color: "#44574E" }}>
                    <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                      <span
                        style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#064E3B" }}
                      ></span>
                      Internasional bereputasi
                    </span>
                    <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                      <span
                        style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#9CCFB6" }}
                      ></span>
                      Nasional terakreditasi
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                    gap: "18px",
                    alignItems: "end",
                    height: "220px",
                    borderBottom: "1px solid #DCE6E0",
                    padding: "0 8px",
                  }}
                >
                  {rawBars.map((b, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "6px",
                        height: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <span style={{ fontSize: "13px", fontWeight: 800, color: "#064E3B" }}>{b.total}</span>
                      <div style={{ width: "56px", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ height: b.hn, background: "#9CCFB6", borderRadius: "6px 6px 0 0" }}></div>
                        <div style={{ height: b.hi, background: "#064E3B" }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                    gap: "18px",
                    padding: "0 8px",
                    textAlign: "center",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#44574E",
                  }}
                >
                  {rawBars.map((b, idx) => (
                    <span key={idx}>{b.y}</span>
                  ))}
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#6B4E00",
                    background: "#FFF8E1",
                    alignSelf: "flex-start",
                    padding: "4px 10px",
                    borderRadius: "6px",
                  }}
                >
                  Data simulasi · sumber SINTA & Scopus, verifikasi PD Dikti
                </span>
              </section>

              <section
                style={{
                  flex: "2 1 360px",
                  background: "#FFF8E1",
                  border: "1px solid #F2D27A",
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
                    fontWeight: 800,
                    letterSpacing: ".12em",
                    color: "#7A5900",
                    textTransform: "uppercase",
                  }}
                >
                  Hibah dibuka
                </span>
                <h2 style={{ margin: 0, fontSize: "22px", color: "#3D2E00", fontWeight: 800 }}>
                  Hibah Penelitian Internal 2027
                </h2>
                <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: "#5A4500" }}>
                  Skema dasar, terapan, dan kolaborasi internasional. Proposal wajib selaras peta jalan dan melibatkan
                  mahasiswa.
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#3D2E00" }}>
                  <span>Batas unggah</span>
                  <b>[tgl]</b>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#3D2E00" }}>
                  <span>Pengumuman</span>
                  <b>[tgl]</b>
                </div>
                <a
                  href="#"
                  style={{
                    background: "#064E3B",
                    color: "#FFFFFF",
                    padding: "13px",
                    borderRadius: "10px",
                    fontWeight: 700,
                    textAlign: "center",
                    textDecoration: "none",
                    marginTop: "4px",
                  }}
                >
                  Ajukan proposal
                </a>
                <a href="#" style={{ fontSize: "14px", fontWeight: 700, color: "#3D2E00", textDecoration: "none" }}>
                  Panduan hibah (PDF) →
                </a>
              </section>
            </div>

            {/* Tema Riset Unggulan */}
            <section>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  color: "#8A6500",
                  textTransform: "uppercase",
                }}
              >
                Peta jalan
              </span>
              <h2 style={{ margin: "6px 0 14px", fontSize: "22px", color: "#064E3B", fontWeight: 800 }}>
                Tema riset unggulan
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "14px" }}>
                {themes.map((t, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #DCE6E0",
                      borderRadius: "16px",
                      padding: "22px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <span style={{ fontSize: "13px", fontWeight: 800, color: "#C1272D" }}>{t.no}</span>
                    <span style={{ fontSize: "18px", fontWeight: 800 }}>{t.title}</span>
                    <span style={{ fontSize: "14px", color: "#44574E", lineHeight: 1.55 }}>{t.sub}</span>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "auto" }}>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          padding: "3px 9px",
                          borderRadius: "999px",
                          background: "#E3F1EA",
                          color: "#064E3B",
                        }}
                      >
                        {t.n} judul
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          padding: "3px 9px",
                          borderRadius: "999px",
                          background: "#F4F8F6",
                          color: "#44574E",
                        }}
                      >
                        {t.p} publikasi
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Alur Penelitian */}
            <section
              style={{ background: "#FFFFFF", border: "1px solid #DCE6E0", borderRadius: "18px", padding: "26px" }}
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
                Tata kelola
              </span>
              <h2 style={{ margin: "6px 0 18px", fontSize: "22px", color: "#064E3B", fontWeight: 800 }}>
                Alur penelitian di UNIZAR
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "10px" }}>
                {flow.map((f, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      padding: "16px",
                      borderRadius: "14px",
                      background: "#F4F8F6",
                      borderTop: "4px solid #0A6B4F",
                    }}
                  >
                    <span style={{ fontSize: "12px", fontWeight: 800, color: "#0A6B4F" }}>LANGKAH {f.n}</span>
                    <span style={{ fontSize: "15px", fontWeight: 800 }}>{f.t}</span>
                    <span style={{ fontSize: "13px", color: "#44574E", lineHeight: 1.5 }}>{f.d}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* 2. TAB KONTEN SUB-MENU LAINNYA */}
        {tab !== "ikhtisar" && curData && (
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
