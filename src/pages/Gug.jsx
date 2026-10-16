import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Gug() {
  const location = useLocation();

  // 11 SUB-MENU TAB BERSIH
  const MENU_ITEMS = [
    { key: "ikhtisar", label: "Ikhtisar" },
    { key: "kebijakan", label: "Kebijakan & Praktik Baik GUG" },
    { key: "laporan-tahunan", label: "Laporan Tahunan" },
    { key: "kode-etik", label: "Kode Etik & Lembaga Etik" },
    { key: "ppkpt", label: "Kampus Aman & Satgas PPKPT" },
    { key: "pengawasan", label: "Pengawasan & WBK/WBBM" },
    { key: "wbs", label: "Whistleblowing System" },
    { key: "pengelolaan", label: "Pengelolaan & 11 Pedoman" },
    { key: "survei", label: "Survei Kepuasan Tata Pamong" },
    { key: "renstra", label: "Renstra & Pola Keuangan" },
    { key: "laporan-keuangan", label: "Laporan Keuangan & Audit Eksternal" },
  ];

  const [tab, setTab] = useState(location.state?.tab || "ikhtisar");

  // Ref untuk menampung elemen tombol tab
  const tabRefs = useRef({});

  // EFFECT UNTUK NAVIGASI DARI HEADER / PERUBAHAN LOCATION STATE
  useEffect(() => {
    const targetTab = location.state?.tab || "ikhtisar";
    setTab(targetTab);

    // 1. LOMPAT BROWSER LANGSUNG KE PALING ATAS
    window.scrollTo(0, 0);

    // 2. SCROLL TOMBOL TAB KE TENGAH CONTAINER SETELAH RENDER
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

  // FUNGSI SAAT TOMBOL TAB DIKLIK MANUAL DI DALAM HALAMAN
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

  // STYLING BADGE AKSES DOKUMEN
  const STY = {
    pub: { badge: "Publik", bg: "#E3F1EA", fg: "#064E3B", action: "Unduh PDF" },
    sum: { badge: "Ringkasan", bg: "#FFF1C2", fg: "#6B4E00", action: "Lihat ringkasan" },
    lock: { badge: "Terbatas", bg: "#FBE3E4", fg: "#8E1B20", action: "Masuk untuk membuka" },
    svc: { badge: "Layanan", bg: "#E3F1EA", fg: "#064E3B", action: "Buka layanan" },
  };

  const D = (name, acc, meta) => {
    const s = STY[acc] || STY.pub;
    return { name, meta, badge: s.badge, bg: s.bg, fg: s.fg, action: s.action };
  };

  const S = (label, v) => ({ label, v });
  const SK = "SK Rektor No. [—] · [tgl]";

  // DATA TAB IKHTISAR
  const pillars = [
    {
      no: "1",
      title: "Kredibilitas",
      desc: "Kepemimpinan yang dipercaya, keputusan berbasis data dan regulasi.",
      count: 6,
    },
    {
      no: "2",
      title: "Transparansi",
      desc: "Informasi publik terbuka melalui website, PPID, dan laporan berkala.",
      count: 9,
    },
    {
      no: "3",
      title: "Akuntabilitas",
      desc: "Laporan kinerja dan keuangan diaudit serta diumumkan ke masyarakat.",
      count: 7,
    },
    {
      no: "4",
      title: "Tanggung jawab",
      desc: "Kepatuhan pada peraturan, etika akademik, dan tanggung jawab sosial.",
      count: 5,
    },
    { no: "5", title: "Keadilan", desc: "Perlakuan setara bagi sivitas, penerimaan afirmatif dan inklusif.", count: 4 },
    {
      no: "6",
      title: "Manajemen risiko",
      desc: "Pemetaan dan mitigasi risiko institusi, termasuk risiko korupsi.",
      count: 5,
    },
  ];

  const years = [
    { y: "2025", op: "WTP" },
    { y: "2024", op: "WTP" },
    { y: "2023", op: "WTP" },
  ];

  const survey = [
    { label: "Mahasiswa", v: "82%", w: "82%" },
    { label: "Dosen", v: "86%", w: "86%" },
    { label: "Tenaga kependidikan", v: "84%", w: "84%" },
    { label: "Alumni", v: "79%", w: "79%" },
    { label: "Mitra & pengguna lulusan", v: "88%", w: "88%" },
  ];

  // DATA KONTEN SUB-MENU (HANYA DOKUMEN & STATS)
  const KONTEN_SUBMENU = {
    kebijakan: {
      stats: [S("Pilar Tata Kelola", "6 Pilar"), S("Tingkat Kepatuhan", "98%"), S("Unit Terimplementasi", "100%")],
      sections: [
        {
          title: "Enam Pilar Utama GUG",
          docs: [
            D("Kredibilitas & Kepemimpinan", "pub", "Pilar 1 · " + SK),
            D("Transparansi & Keterbukaan Informasi", "pub", "Pilar 2 · " + SK),
            D("Akuntabilitas Publik & Audit", "pub", "Pilar 3 · " + SK),
            D("Tanggung Jawab Sosial & Akademik", "pub", "Pilar 4 · " + SK),
            D("Keadilan & Inklusivitas Sivitas", "pub", "Pilar 5 · " + SK),
            D("Manajemen Risiko Institusi", "pub", "Pilar 6 · " + SK),
          ],
        },
        {
          title: "Dokumen Kebijakan Dasar & Regulasi",
          docs: [
            D("Statuta UNIZAR Tentang GUG", "pub", "Peraturan Yayasan"),
            D("Pedoman Tata Pamong & Tata Kelola", "pub", SK),
            D("SOP Pelayanan Informasi Publik (PPID)", "pub", "v2.0"),
          ],
        },
      ],
    },
    "laporan-tahunan": {
      stats: [S("Arsip Terdokumentasi", "≥ 3 Tahun"), S("Capaian IKU 2025", "94%"), S("Opini Audit", "WTP")],
      sections: [
        {
          title: "Laporan Tahunan & Keuangan Teraudit",
          docs: [
            D("Laporan Tahunan UNIZAR 2025", "sum", "Ringkasan Eksekutif"),
            D("Ikhtisar Laporan Keuangan 2025", "sum", "Audited KAP"),
            D("Laporan Tahunan UNIZAR 2024", "sum", "Ringkasan Eksekutif"),
            D("Ikhtisar Laporan Keuangan 2024", "sum", "Audited KAP"),
            D("Laporan Tahunan UNIZAR 2023", "sum", "Ringkasan Eksekutif"),
            D("Laporan Keuangan Rinci", "lock", "Akses Terbatas / Asesor"),
          ],
        },
      ],
    },
    "kode-etik": {
      stats: [
        S("Kasus Etik Ditangani (2025)", "7"),
        S("Rata-rata Penyelesaian", "21 hari"),
        S("Sosialisasi Kode Etik", "100% unit"),
      ],
      sections: [
        {
          title: "Kode Etik Sivitas Akademika",
          docs: [
            D("Kode Etik Dosen", "pub", SK),
            D("Kode Etik Tenaga Kependidikan", "pub", SK),
            D("Kode Etik Mahasiswa", "pub", SK),
          ],
        },
        {
          title: "Lembaga Penegak Etik",
          docs: [
            D("Profil Dewan Kehormatan / Komite Etik", "pub", "Susunan & Tugas"),
            D("Prosedur Pemeriksaan Etik", "pub", "SOP · v1.0"),
            D("Rekap Putusan Etik", "sum", "Tanpa Identitas Pihak"),
          ],
        },
      ],
    },
    ppkpt: {
      stats: [
        S("Laporan Diterima (2025)", "5"),
        S("Laporan Selesai Ditangani", "100%"),
        S("Sivitas Terpapar Sosialisasi", "3.800+"),
      ],
      sections: [
        {
          title: "Kebijakan & Pedoman PPKPT",
          docs: [
            D("Pedoman PPKPT", "pub", SK),
            D("Kebijakan Anti-Perundungan & Intoleransi", "pub", SK),
            D("SK Satgas PPKPT", "pub", "Periode 2025–2027"),
          ],
        },
        {
          title: "Layanan Aduan & Pendampingan",
          docs: [
            D("Kanal Pelaporan Satgas PPKPT", "svc", "Rahasia · 24 Jam"),
            D("Layanan Konseling & Pendampingan", "svc", "Psikolog Kampus"),
            D("Laporan Tahunan Satgas", "sum", "Statistik Tanpa Identitas"),
          ],
        },
      ],
    },
    pengawasan: {
      stats: [
        S("Temuan Audit Ditindaklanjuti", "92%"),
        S("Risiko Utama Terpetakan", "38"),
        S("Laporan WBS Diproses", "100%"),
      ],
      sections: [
        {
          title: "Sistem Pengawasan Internal",
          docs: [
            D("Kebijakan Manajemen Risiko", "pub", SK),
            D("Register Risiko Institusi", "lock", "Pembaruan Tahunan"),
            D("Program WBK/WBBM", "pub", "Rencana & Capaian"),
          ],
        },
        {
          title: "Hasil Pengawasan Internal",
          docs: [
            D("Ikhtisar Hasil Audit Internal SPI", "sum", "Tahun 2025"),
            D("Laporan Audit Lengkap", "lock", "Untuk Pimpinan & Asesor"),
          ],
        },
      ],
    },
    wbs: {
      stats: [
        S("Kanal Pengaduan", "24 Jam"),
        S("Kerahasiaan Identitas", "100% Protected"),
        S("Proses Verifikasi", "Maks 3 Hari"),
      ],
      sections: [
        {
          title: "Kanal & Pedoman Whistleblowing System",
          docs: [
            D("Whistleblowing System (WBS)", "svc", "Identitas Dirahasiakan"),
            D("Pedoman & SOP Pengaduan WBS", "pub", SK),
            D("Lacak Tiket Laporan WBS", "svc", "Monitoring Penanganan"),
          ],
        },
      ],
    },
    pengelolaan: {
      stats: [
        S("Pedoman Bidang Tersedia", "11 / 11"),
        S("Unit SOP Mutakhir", "87%"),
        S("Rapat Kerja Terdokumentasi", "4 / tahun"),
      ],
      sections: [
        {
          title: "Fungsi Manajemen (POSLC)",
          docs: [
            D("Bukti Perencanaan & Raker", "pub", "Notulen Ringkas"),
            D("Pengorganisasian & Staffing", "pub", "OTK & Analisis Jabatan"),
            D("Pengarahan & Pengawasan", "sum", "Laporan Kinerja Unit"),
          ],
        },
        {
          title: "11 Pedoman Pengelolaan Bidang",
          docs: [
            D("Pedoman Pendidikan & Suasana Akademik", "pub", SK),
            D("Pedoman Penelitian, PkM & Kerjasama", "pub", SK),
            D("Pedoman SDM, Keuangan, Sarpras, SI & SPMI", "pub", SK),
          ],
        },
      ],
    },
    survei: {
      stats: [
        S("Total Responden (2025)", "1.240"),
        S("Skala Kepuasan", "Sangat Puas"),
        S("Tindak Lanjut Result", "100% Implemented"),
      ],
      sections: [
        {
          title: "Hasil Survei & Action Plan",
          docs: [
            D("Survei Kepuasan Tata Pamong 2025", "sum", "Data n = 1.240"),
            D("Laporan Hasil Survei Lengkap", "sum", "Ikhtisar Publik"),
            D("Dokumen Action Plan & Rencana Perbaikan", "pub", "Rencana Tindak Lanjut"),
          ],
        },
      ],
    },
    renstra: {
      stats: [
        S("Dana di luar UKT/SPP", "18%"),
        S("Penerima Bantuan Biaya", "1.120 mhs"),
        S("Periode Renstra", "2025–2029"),
      ],
      sections: [
        {
          title: "Perencanaan & Pola Pengelolaan Keuangan",
          docs: [
            D("Renstra Keuangan 2025–2029", "pub", SK),
            D("Pola Pengelolaan Keuangan PTS", "pub", "Peraturan Yayasan"),
            D("RKAT Tahunan", "lock", "Rinci per Unit"),
            D("Kebijakan Bantuan Biaya Pendidikan", "pub", SK),
          ],
        },
      ],
    },
    "laporan-keuangan": {
      stats: [S("Opini Akuntan Publik (2025)", "WTP"), S("Siklus Audit", "Tahunan"), S("Kategori PTS", "Akuntabel")],
      sections: [
        {
          title: "Pelaporan & Hasil Audit Eksternal",
          docs: [
            D("Ikhtisar Laporan Keuangan Teraudit", "sum", "KAP Independen · 2023–2025"),
            D("Laporan Audit Eksternal Rinci", "lock", "Untuk Pimpinan & Asesor"),
          ],
        },
      ],
    },
  };

  const curData = KONTEN_SUBMENU[tab];

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
            / <span style={{ color: "#B7DCC9" }}>Good University Governance</span> /{" "}
            <span style={{ color: "#FFFFFF", fontWeight: 600 }}>{activeMenu.label}</span>
          </nav>

          <div style={{ padding: "18px 0 26px" }}>
            <h1 style={{ margin: 0, fontSize: "40px", lineHeight: 1.1, fontWeight: 800 }}>
              Good University Governance
            </h1>
          </div>

          {/* TAB SUB-MENU NAVIGASI WITH AUTO-SCROLL */}
          <div
            role="tablist"
            aria-label="Sub-menu GUG"
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
        {/* 1. TAB IKHTISAR (DEFAULT) */}
        {tab === "ikhtisar" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {/* Section 6 Pilar */}
            <section aria-labelledby="h-pil">
              <h2 id="h-pil" style={{ margin: "0 0 16px", fontSize: "26px", color: "#064E3B", fontWeight: 800 }}>
                Enam pilar tata kelola
              </h2>
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "14px" }}
              >
                {pillars.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #DCE6E0",
                      borderRadius: "16px",
                      padding: "22px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      color: "#13231C",
                    }}
                  >
                    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "10px",
                          background: "#E3F1EA",
                          color: "#064E3B",
                          fontWeight: 800,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {p.no}
                      </span>
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "#0A6B4F" }}>{p.count} bukti →</span>
                    </span>
                    <span style={{ fontSize: "18px", fontWeight: 800 }}>{p.title}</span>
                    <span style={{ fontSize: "14px", lineHeight: 1.55, color: "#44574E" }}>{p.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section Laporan Tahunan & Lapor Pelanggaran */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              <section
                aria-labelledby="h-lt"
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
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: ".12em",
                      color: "#8A6500",
                      textTransform: "uppercase",
                    }}
                  >
                    Arsip ≥ 3 tahun
                  </div>
                  <h2 id="h-lt" style={{ margin: "6px 0 0", fontSize: "24px", color: "#064E3B", fontWeight: 800 }}>
                    Laporan Tahunan & Keuangan Teraudit
                  </h2>
                </div>
                <div
                  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}
                >
                  {years.map((y, i) => (
                    <div
                      key={i}
                      style={{
                        border: "1px solid #DCE6E0",
                        borderRadius: "14px",
                        padding: "18px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <span style={{ fontSize: "28px", fontWeight: 800, color: "#064E3B" }}>{y.y}</span>
                      <span
                        style={{
                          alignSelf: "flex-start",
                          fontSize: "12px",
                          fontWeight: 800,
                          padding: "4px 10px",
                          borderRadius: "999px",
                          background: "#E3F1EA",
                          color: "#064E3B",
                        }}
                      >
                        Opini: {y.op}
                      </span>
                      <a href="#" style={{ fontSize: "14px", fontWeight: 700, color: "#0A6B4F" }}>
                        Laporan Tahunan (ringkasan)
                      </a>
                      <a href="#" style={{ fontSize: "14px", fontWeight: 700, color: "#0A6B4F" }}>
                        Ikhtisar Laporan Keuangan
                      </a>
                      <a href="#" style={{ fontSize: "13px", fontWeight: 700, color: "#8E1B20" }}>
                        Dokumen lengkap · Terbatas
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              <section
                aria-labelledby="h-rep"
                style={{
                  flex: "2 1 380px",
                  background: "#FBE3E4",
                  border: "1px solid #F0B8BB",
                  borderRadius: "18px",
                  padding: "26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    color: "#8E1B20",
                    textTransform: "uppercase",
                  }}
                >
                  Kanal aman
                </div>
                <h2 id="h-rep" style={{ margin: 0, fontSize: "24px", color: "#5C1013", fontWeight: 800 }}>
                  Laporkan pelanggaran atau kekerasan
                </h2>
                <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "#5C1013" }}>
                  Identitas pelapor dirahasiakan. Setiap laporan mendapat nomor tiket untuk memantau penanganan.
                </p>
                <a
                  href="#"
                  style={{
                    background: "#8E1B20",
                    color: "#FFFFFF",
                    padding: "11px 18px",
                    borderRadius: "10px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  Lapor ke Satgas PPKPT →
                </a>
                <a
                  href="#"
                  style={{
                    background: "#FFFFFF",
                    color: "#8E1B20",
                    border: "1.5px solid #8E1B20",
                    padding: "11px 18px",
                    borderRadius: "10px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  Whistleblowing System (WBS) →
                </a>
                <a href="#" style={{ fontSize: "14px", fontWeight: 700, color: "#5C1013" }}>
                  Lacak tiket laporan →
                </a>
              </section>
            </div>

            {/* Section Survei Kepuasan */}
            <section
              aria-labelledby="h-sv"
              style={{ background: "#FFFFFF", border: "1px solid #DCE6E0", borderRadius: "18px", padding: "26px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "18px",
                }}
              >
                <div>
                  <h2 id="h-sv" style={{ margin: "0", fontSize: "24px", color: "#064E3B", fontWeight: 800 }}>
                    Kepuasan pemangku kepentingan terhadap tata pamong
                  </h2>
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#6B4E00",
                    background: "#FFF8E1",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontWeight: 600,
                  }}
                >
                  Data simulasi · Survei 2025 (n = 1.240)
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "28px" }}>
                <div style={{ flex: "3 1 520px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  {survey.map((s, i) => (
                    <div
                      key={i}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "180px 1fr 56px",
                        gap: "14px",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 700 }}>{s.label}</span>
                      <span
                        style={{
                          height: "14px",
                          background: "#EEF3F0",
                          borderRadius: "999px",
                          overflow: "hidden",
                          display: "block",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            height: "14px",
                            width: s.w,
                            background: "#0A6B4F",
                            borderRadius: "999px",
                          }}
                        ></span>
                      </span>
                      <span style={{ fontSize: "15px", fontWeight: 800, color: "#064E3B", textAlign: "right" }}>
                        {s.v}
                      </span>
                    </div>
                  ))}
                  <span style={{ fontSize: "12px", color: "#44574E" }}>
                    Skala: persentase responden “puas” dan “sangat puas”.
                  </span>
                </div>
                <div
                  style={{
                    flex: "2 1 320px",
                    background: "#F4F8F6",
                    borderRadius: "14px",
                    padding: "18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div style={{ fontSize: "14px", fontWeight: 800 }}>Tindak lanjut hasil survei</div>
                  <div style={{ fontSize: "14px", lineHeight: 1.55, color: "#2B3D35" }}>
                    1. Waktu layanan administrasi dipercepat melalui SIAKAD terpadu.
                  </div>
                  <div style={{ fontSize: "14px", lineHeight: 1.55, color: "#2B3D35" }}>
                    2. Publikasi laporan keuangan diringkas dalam infografis triwulanan.
                  </div>
                  <div style={{ fontSize: "14px", lineHeight: 1.55, color: "#2B3D35" }}>
                    3. Forum dengar pendapat mahasiswa per semester.
                  </div>
                  <a href="#" style={{ fontSize: "14px", fontWeight: 700, marginTop: "4px", color: "#0A6B4F" }}>
                    Laporan survei lengkap (ringkasan) →
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 2. TAB KONTEN SUB-MENU */}
        {tab !== "ikhtisar" && curData && (
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

                      {/* TOMBOL AKSI */}
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
