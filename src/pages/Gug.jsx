import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Gug() {
  const location = useLocation();

  const TAB_LABELS = {
    ikhtisar: "Ikhtisar",
    etik: "Integritas & Etik",
    ppks: "Kampus Aman",
    pengawasan: "Pengawasan & Risiko",
    pengelolaan: "Pengelolaan",
    keuangan: "Keuangan",
  };

  const [tab, setTab] = useState(location.state?.tab || "ikhtisar");

  useEffect(() => {
    if (location.state?.tab) {
      setTab(location.state.tab);
    } else {
      setTab("ikhtisar");
    }
  }, [location.state, location.key]);

  // Styling Badge Akses
  const STY = {
    pub: {
      badge: "Publik",
      bg: "#E3F1EA",
      fg: "#064E3B",
      action: "Unduh PDF",
      btnBg: "#0A6B4F",
      btnFg: "#FFFFFF",
      href: "#",
    },
    sum: {
      badge: "Ringkasan",
      bg: "#FFF1C2",
      fg: "#6B4E00",
      action: "Lihat ringkasan",
      btnBg: "#FFF1C2",
      btnFg: "#3D2E00",
      href: "#",
    },
    lock: {
      badge: "Terbatas",
      bg: "#FBE3E4",
      fg: "#8E1B20",
      action: "Masuk untuk membuka",
      btnBg: "#FFFFFF",
      btnFg: "#8E1B20",
      href: "#",
    },
    svc: {
      badge: "Layanan",
      bg: "#E3F1EA",
      fg: "#064E3B",
      action: "Buka layanan",
      btnBg: "#0A6B4F",
      btnFg: "#FFFFFF",
      href: "#",
    },
  };

  const D = (name, acc, meta) => {
    const s = STY[acc];
    return {
      name,
      meta,
      badge: s.badge,
      bg: s.bg,
      fg: s.fg,
      action: s.action,
      btnBg: s.btnBg,
      btnFg: s.btnFg,
      href: s.href,
    };
  };

  const S = (label, v) => ({ label, v });
  const SK = "SK Rektor No. [—] · [tgl]";

  const TABS_DATA = {
    etik: {
      intro:
        "Kode etik seluruh sivitas akademika dan lembaga yang menegakkannya, untuk menjamin tata nilai dan integritas.",
      stats: [
        S("Kasus etik ditangani (2025)", "7"),
        S("Rata-rata waktu penyelesaian", "21 hari"),
        S("Sosialisasi kode etik", "100% unit"),
      ],
      sections: [
        {
          title: "Kode Etik",
          docs: [
            D("Kode Etik Dosen", "pub", SK),
            D("Kode Etik Tenaga Kependidikan", "pub", SK),
            D("Kode Etik Mahasiswa", "pub", SK),
          ],
        },
        {
          title: "Lembaga Penegak Etik",
          docs: [
            D("Profil Dewan Kehormatan / Komite Etik", "pub", "Susunan & tugas"),
            D("Prosedur Pemeriksaan Etik", "pub", "SOP · v1.0"),
            D("Rekap Putusan Etik", "sum", "Tanpa identitas pihak"),
          ],
        },
      ],
    },
    ppks: {
      intro:
        "Pencegahan dan penanganan kekerasan seksual, perundungan, dan intoleransi untuk kampus yang aman dan nyaman.",
      stats: [
        S("Laporan diterima (2025)", "5"),
        S("Laporan selesai ditangani", "100%"),
        S("Sivitas terpapar sosialisasi", "3.800+"),
      ],
      sections: [
        {
          title: "Kebijakan",
          docs: [
            D("Pedoman PPKS", "pub", SK),
            D("Kebijakan Anti-Perundungan & Intoleransi", "pub", SK),
            D("SK Satgas PPKS", "pub", "Periode 2025–2027"),
          ],
        },
        {
          title: "Layanan",
          docs: [
            D("Kanal Pelaporan Satgas PPKS", "svc", "Rahasia · 24 jam"),
            D("Layanan Konseling & Pendampingan", "svc", "Psikolog kampus"),
            D("Laporan Tahunan Satgas", "sum", "Statistik tanpa identitas"),
          ],
        },
      ],
    },
    pengawasan: {
      intro:
        "Pemantauan, evaluasi, dan mitigasi risiko — termasuk risiko korupsi dan penurunan mutu — serta pembangunan Zona Integritas.",
      stats: [
        S("Temuan audit ditindaklanjuti", "92%"),
        S("Risiko utama terpetakan", "38"),
        S("Laporan WBS diproses", "100%"),
      ],
      sections: [
        {
          title: "Sistem Pengawasan",
          docs: [
            D("Kebijakan Manajemen Risiko", "pub", SK),
            D("Register Risiko Institusi", "lock", "Pembaruan tahunan"),
            D("Program WBK/WBBM", "pub", "Rencana & capaian"),
          ],
        },
        {
          title: "Hasil Pengawasan",
          docs: [
            D("Ikhtisar Hasil Audit Internal SPI", "sum", "Tahun 2025"),
            D("Laporan Audit Lengkap", "lock", "Untuk pimpinan & asesor"),
            D("Whistleblowing System", "svc", "Identitas dirahasiakan"),
          ],
        },
      ],
    },
    pengelolaan: {
      intro:
        "Keberfungsian sistem pengelolaan: perencanaan, pengorganisasian, penempatan personil, pengarahan, dan pengawasan — beserta 11 pedoman bidang.",
      stats: [
        S("Pedoman bidang tersedia", "11 / 11"),
        S("Unit dengan SOP mutakhir", "87%"),
        S("Rapat kerja terdokumentasi", "4 / tahun"),
      ],
      sections: [
        {
          title: "Fungsi Manajemen (POSLC)",
          docs: [
            D("Bukti Perencanaan & Raker", "pub", "Notulen ringkas"),
            D("Pengorganisasian & Staffing", "pub", "OTK & analisis jabatan"),
            D("Pengarahan & Pengawasan", "sum", "Laporan kinerja unit"),
          ],
        },
        {
          title: "11 Pedoman Pengelolaan",
          docs: [
            D("Pedoman Pendidikan & Suasana Akademik", "pub", SK),
            D("Pedoman Penelitian, PkM & Kerjasama", "pub", SK),
            D("Pedoman SDM, Keuangan, Sarpras, SI & SPMI", "pub", SK),
          ],
        },
      ],
    },
    keuangan: {
      intro:
        "Rencana strategis keuangan lima tahunan, sumber dana di luar mahasiswa, pola pengelolaan sesuai status PTS, dan audit eksternal.",
      stats: [
        S("Opini akuntan publik 2025", "WTP"),
        S("Dana di luar UKT/SPP", "18%"),
        S("Mahasiswa penerima bantuan biaya", "1.120"),
      ],
      sections: [
        {
          title: "Perencanaan & Pola Pengelolaan",
          docs: [
            D("Renstra Keuangan 2025–2029", "pub", SK),
            D("Pola Pengelolaan Keuangan PTS", "pub", "Peraturan Yayasan"),
            D("RKAT Tahunan", "lock", "Rinci per unit"),
          ],
        },
        {
          title: "Pelaporan & Audit",
          docs: [
            D("Ikhtisar Laporan Keuangan Teraudit", "sum", "KAP [Nama] · 2023–2025"),
            D("Kebijakan Bantuan Biaya Pendidikan", "pub", SK),
            D("Laporan Keuangan Rinci", "lock", "Untuk pimpinan & asesor"),
          ],
        },
      ],
    },
  };

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

  const cur = TABS_DATA[tab] || { intro: "", stats: [], sections: [] };

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
            / <span style={{ color: "#FFFFFF", fontWeight: 600 }}>Good University Governance</span>
          </nav>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              justifyContent: "space-between",
              alignItems: "flex-end",
              padding: "18px 0 26px",
            }}
          >
            <div style={{ flex: "1 1 560px" }}>
              <h1 style={{ margin: "0 0 10px", fontSize: "40px", lineHeight: 1.1, fontWeight: 800 }}>
                Good University Governance
              </h1>
              <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.6, color: "#D3EBDF", maxWidth: "720px" }}>
                Akuntabilitas, integritas, keamanan sivitas, dan tata kelola keuangan UNIZAR — dibuka seluas mungkin
                kepada publik, dengan ringkasan untuk dokumen yang bersifat rahasia.
              </p>
            </div>
          </div>

          {/* Navigasi Tab Sub-Menu */}
          <div role="tablist" aria-label="Sub-menu GUG" style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
            {[
              ["ikhtisar", "Ikhtisar"],
              ["etik", "Integritas & Etik"],
              ["ppks", "Kampus Aman"],
              ["pengawasan", "Pengawasan & Risiko"],
              ["pengelolaan", "Pengelolaan"],
              ["keuangan", "Keuangan"],
            ].map(([k, label]) => {
              const isSel = tab === k;
              return (
                <button
                  key={k}
                  role="tab"
                  aria-selected={isSel}
                  onClick={() => setTab(k)}
                  style={{
                    border: 0,
                    cursor: "pointer",
                    padding: "13px 18px",
                    fontSize: "15px",
                    fontWeight: 700,
                    borderRadius: "12px 12px 0 0",
                    background: isSel ? "#F4F8F6" : "transparent",
                    color: isSel ? "#064E3B" : "#D3EBDF",
                    minHeight: "48px",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Konten Utama */}
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "28px 32px 64px" }}>
        {/* 1. TAB IKHTISAR */}
        {tab === "ikhtisar" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <section aria-labelledby="h-pil">
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  color: "#8A6500",
                  textTransform: "uppercase",
                }}
              >
                Praktik baik GUG
              </div>
              <h2 id="h-pil" style={{ margin: "6px 0 16px", fontSize: "26px", color: "#064E3B", fontWeight: 800 }}>
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
                          justifyCenter: "center",
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
                    padding: "13px 16px",
                    borderRadius: "10px",
                    fontWeight: 700,
                    fontSize: "15px",
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  Lapor ke Satgas PPKS
                </a>
                <a
                  href="#"
                  style={{
                    background: "#FFFFFF",
                    color: "#8E1B20",
                    border: "1.5px solid #8E1B20",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    fontWeight: 700,
                    fontSize: "15px",
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  Whistleblowing System (WBS)
                </a>
                <a href="#" style={{ fontSize: "14px", fontWeight: 700, color: "#5C1013" }}>
                  Lacak tiket laporan →
                </a>
              </section>
            </div>

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

        {/* 2. TAB GENERIK */}
        {tab !== "ikhtisar" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={{ margin: 0, fontSize: "17px", lineHeight: 1.6, color: "#2B3D35", maxWidth: "860px" }}>
              {cur.intro}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {cur.stats.map((st, i) => (
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
                  <span style={{ fontSize: "30px", fontWeight: 800, color: "#064E3B", lineHeight: 1.1 }}>{st.v}</span>
                </div>
              ))}
            </div>

            {cur.sections.map((sec, i) => (
              <section key={i} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h2 style={{ margin: 0, fontSize: "20px", color: "#064E3B", fontWeight: 800 }}>{sec.title}</h2>
                <div
                  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "12px" }}
                >
                  {sec.docs.map((d, j) => (
                    <div
                      key={j}
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
                        <span style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.35 }}>{d.name}</span>
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
                          href={d.href}
                          style={{
                            fontSize: "14px",
                            fontWeight: 700,
                            padding: "9px 14px",
                            borderRadius: "999px",
                            background: d.btnBg,
                            color: d.btnFg,
                            textDecoration: "none",
                          }}
                        >
                          {d.action}
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
