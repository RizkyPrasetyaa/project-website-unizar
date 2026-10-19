import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Layanan() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");
  const [selectedAud, setSelectedAud] = useState("all");
  const [activeModalItem, setActiveModalItem] = useState(null); // State buat Pop-up Detail

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data Master Layanan lengkap dengan Action Link & Instruksi
  const ALL_SERVICES = [
    {
      id: "siakad",
      cat: "Akademik",
      t: "SIAKAD UNIZAR",
      d: "KRS, KHS, transkrip nilai, dan cetak jadwal kuliah.",
      sla: "Daring 24 jam",
      who: "Mahasiswa · Dosen",
      login: true,
      aud: "mhs",
      actionText: "Buka SIAKAD ↗",
      url: "#",
      detailInfo:
        "Akses penuh menggunakan akun SSO UNIZAR. Digunakan untuk pengisian Kartu Rencana Studi (KRS), melihat hasil studi (KHS), dan jadwal perkuliahan semester berjalan.",
    },
    {
      id: "surat-aktif",
      cat: "Akademik",
      t: "Surat Keterangan Aktif Kuliah",
      d: "Terbit otomatis dengan tanda tangan elektronik (TTE).",
      sla: "1 hari kerja",
      who: "Mahasiswa",
      login: true,
      aud: "mhs",
      actionText: "Ajukan Surat",
      url: "#",
      detailInfo:
        "Persyaratan: Mahasiswa aktif semester berjalan dan tidak sedang dalam status Cuti Akademik. Dokumen terbit dengan format PDF resmi ber-QR Code TTE.",
    },
    {
      id: "legalisir",
      cat: "Akademik",
      t: "Legalisir Ijazah & Transkrip",
      d: "Ajukan daring, ambil langsung atau kirim via ekspedisi.",
      sla: "3 hari kerja",
      who: "Alumni",
      login: false,
      aud: "alumni",
      actionText: "Ajukan Legalisir",
      url: "#",
      detailInfo:
        "Khusus alumni UNIZAR. Unggah pemindaian (scan) Ijazah & Transkrip asli. Pembayaran admin dilakukan via Virtual Account.",
    },
    {
      id: "uct-pay",
      cat: "Keuangan",
      t: "Pembayaran UKT & Tagihan",
      d: "Cek tagihan & bayar via Virtual Account bank mitra.",
      sla: "Real-time",
      who: "Mahasiswa",
      login: true,
      aud: "mhs",
      actionText: "Cek Tagihan",
      url: "#",
      detailInfo:
        "Pembayaran terintegrasi otomatis dengan sistem akademik SIAKAD. Gunakan kode Virtual Account yang tertera di portal keuangan.",
    },
    {
      id: "keringanan-ukt",
      cat: "Keuangan",
      t: "Pengajuan Keringanan UKT",
      d: "Verifikasi berkas keringanan/angsuran secara online.",
      sla: "7 hari kerja",
      who: "Mahasiswa",
      login: true,
      aud: "mhs",
      actionText: "Form Pengajuan",
      url: "#",
      detailInfo:
        "Melampirkan surat keterangan tidak mampu, slip gaji orang tua, dan dokumen pendukung sesuai periode gelombang pengajuan UKT.",
    },
    {
      id: "sso-email",
      cat: "TIK",
      t: "Email & SSO UNIZAR",
      d: "Aktivasi akun Single Sign-On dan reset kata sandi.",
      sla: "1 jam",
      who: "Semua sivitas",
      login: false,
      aud: "all",
      actionText: "Aktivasi / Reset",
      url: "#",
      detailInfo:
        "Gunakan email institusi (@unizar.ac.id / @student.unizar.ac.id) untuk mengakses seluruh ekosistem layanan digital kampus.",
    },
    {
      id: "lms",
      cat: "TIK",
      t: "E-Learning / LMS",
      d: "Kelas digital, unduh materi, dan kuis perkuliahan.",
      sla: "Daring 24 jam",
      who: "Mahasiswa · Dosen",
      login: true,
      aud: "mhs",
      actionText: "Buka LMS ↗",
      url: "#",
      detailInfo:
        "Portal resmi Moodle UNIZAR. Mahasiswa masuk menggunakan akun SSO untuk mengakses ruang kelas dan pengumpulan tugas.",
    },
    {
      id: "perpus",
      cat: "Perpustakaan",
      t: "Perpustakaan Digital & E-Journal",
      d: "Katalog OPAC, e-book, repositori, & uji Turnitin.",
      sla: "Daring 24 jam",
      who: "Semua sivitas",
      login: true,
      aud: "all",
      actionText: "Akses Perpus ↗",
      url: "#",
      detailInfo:
        "Fasilitas pencarian koleksi buku fisik, akses jurnal terindeks (ScienceDirect, ProQuest), dan pengajuan verifikasi Turnitin skripsi.",
    },
    {
      id: "klinik",
      cat: "Kesehatan & Konseling",
      t: "Klinik & Konseling Mahasiswa",
      d: "Layanan kesehatan primer dan konsultasi psikolog.",
      sla: "Hari kerja",
      who: "Mahasiswa · Pegawai",
      login: false,
      aud: "mhs",
      actionText: "Jadwal Konsul",
      url: "#",
      detailInfo:
        "Layanan pendaftaran berobat di Klinik Kampus UNIZAR serta sesi konseling rahasia bersama tim Psikolog Kampus.",
    },
    {
      id: "simpeg",
      cat: "Kepegawaian",
      t: "SIMPEG & Jabatan Akademik",
      d: "Portofolio dosen/tendik dan usulan JAD.",
      sla: "14 hari kerja",
      who: "Dosen · Tendik",
      login: true,
      aud: "pegawai",
      actionText: "Masuk SIMPEG ↗",
      url: "#",
      detailInfo:
        "Manajemen data kepegawaian, pengurusan Beban Kerja Dosen (BKD), serta pengajuan Kenaikan Jabatan Akademik Dosen.",
    },
    {
      id: "sarpras-pinjam",
      cat: "Sarpras & K3",
      t: "Peminjaman Ruang & Fasilitas",
      d: "Cek jadwal ruang kosong dan ajukan formulir izin.",
      sla: "2 hari kerja",
      who: "Semua · Publik",
      login: false,
      aud: "all",
      actionText: "Pinjam Ruangan",
      url: "#",
      detailInfo:
        "Reservasi Gedung Serbaguna, Ruang Aula, Laboratorium Komputer, atau Alat Pendukung Kegiatan Mahasiswa.",
    },
    {
      id: "lapor-k3",
      cat: "Sarpras & K3",
      t: "Lapor Kerusakan / Insiden K3",
      d: "Adukan fasilitas rusak atau potensi bahaya kampus.",
      sla: "24 jam",
      who: "Semua",
      login: false,
      aud: "all",
      actionText: "Lapor Kerusakan",
      url: "#",
      detailInfo:
        "Form cepat pelaporan fasilitas AC/Proyektor rusak, kebocoran, atau potensi bahaya K3 lingkungan kampus UNIZAR.",
    },
  ];

  const CATEGORIES = [
    "all",
    "Akademik",
    "Keuangan",
    "TIK",
    "Perpustakaan",
    "Kesehatan & Konseling",
    "Kepegawaian",
    "Sarpras & K3",
  ];

  const AUDIENCES = [
    { key: "all", label: "Semua" },
    { key: "mhs", label: "Mahasiswa" },
    { key: "pegawai", label: "Dosen & Tendik" },
    { key: "alumni", label: "Alumni" },
  ];

  const SYSTEM_STATUS = [
    { n: "SIAKAD", up: "99,8%", s: "Normal", c: "#0A6B4F" },
    { n: "E-Learning / LMS", up: "99,5%", s: "Normal", c: "#0A6B4F" },
    { n: "SSO & Email", up: "99,9%", s: "Normal", c: "#0A6B4F" },
    {
      n: "Perpustakaan Digital",
      up: "97,2%",
      s: "Pemeliharaan malam ini",
      c: "#E8A33A",
    },
    { n: "Portal PMB", up: "99,7%", s: "Normal", c: "#0A6B4F" },
  ];

  // Filtering Logic
  const filteredAudienceServices = useMemo(() => {
    return ALL_SERVICES.filter(
      (x) => selectedAud === "all" || x.aud === selectedAud || x.aud === "all",
    );
  }, [selectedAud]);

  const displayedServices = useMemo(() => {
    return filteredAudienceServices.filter((x) => {
      const matchCat = selectedCat === "all" || x.cat === selectedCat;
      const matchSearch =
        x.t.toLowerCase().includes(searchQuery.toLowerCase()) ||
        x.d.toLowerCase().includes(searchQuery.toLowerCase()) ||
        x.cat.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [filteredAudienceServices, selectedCat, searchQuery]);

  return (
    <div
      style={{ background: "#F4F8F6", minHeight: "100vh", color: "#13231C" }}
    >
      {/* Banner Header Hijau Minimalis */}
      <section
        style={{ background: "#064E3B", color: "#FFFFFF", padding: "28px 0" }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <nav
            aria-label="Breadcrumb"
            style={{ fontSize: "13px", color: "#B7DCC9" }}
          >
            <Link to="/" style={{ color: "#B7DCC9", textDecoration: "none" }}>
              Beranda
            </Link>{" "}
            / <span style={{ color: "#FFFFFF" }}>Layanan</span>
          </nav>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(26px, 4vw, 38px)",
              lineHeight: 1.1,
              fontWeight: 800,
            }}
          >
            Layanan apa yang Anda butuhkan?
          </h1>

          {/* Search Box */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              maxWidth: "860px",
            }}
          >
            <input
              type="search"
              placeholder="misal: legalisir ijazah, reset password, surat aktif kuliah"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: "1 1 320px",
                height: "48px",
                border: 0,
                borderRadius: "12px",
                padding: "0 16px",
                fontSize: "15px",
                outline: "none",
              }}
            />
          </div>

          {/* Audience Pills Filter */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginTop: "4px",
            }}
          >
            {AUDIENCES.map((aud) => {
              const isSelected = selectedAud === aud.key;
              return (
                <button
                  key={aud.key}
                  type="button"
                  onClick={() => setSelectedAud(aud.key)}
                  style={{
                    border: "1.5px solid #D3EBDF",
                    background: isSelected ? "#F2C230" : "transparent",
                    color: isSelected ? "#053B2C" : "#FFFFFF",
                    borderRadius: "999px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {aud.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "32px 24px 64px",
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          alignItems: "flex-start",
        }}
      >
        {/* Sidebar Filter Kategori (Kiri) */}
        <nav
          aria-label="Kategori layanan"
          style={{
            flex: "1 1 240px",
            maxWidth: "280px",
            background: "#FFFFFF",
            border: "1px solid #DCE6E0",
            borderRadius: "16px",
            padding: "10px",
            width: "100%",
          }}
        >
          {CATEGORIES.map((k) => {
            const isSel = selectedCat === k;
            const count =
              k === "all"
                ? filteredAudienceServices.length
                : filteredAudienceServices.filter((x) => x.cat === k).length;
            return (
              <button
                key={k}
                type="button"
                onClick={() => setSelectedCat(k)}
                style={{
                  width: "100%",
                  border: 0,
                  background: isSel ? "#064E3B" : "transparent",
                  color: isSel ? "#FFFFFF" : "#13231C",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                  textAlign: "left",
                  marginBottom: "4px",
                  transition: "all 0.2s ease",
                }}
              >
                <span>{k === "all" ? "Semua Layanan" : k}</span>
                <span style={{ fontSize: "12px", opacity: 0.8 }}>{count}</span>
              </button>
            );
          })}
        </nav>

        {/* Dynamic Grid Cards (Kanan) */}
        <main
          style={{
            flex: "999 1 600px",
            minWidth: "0",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
              gap: "16px",
            }}
          >
            {displayedServices.length > 0 ? (
              displayedServices.map((s) => (
                <div
                  key={s.id}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DCE6E0",
                    borderRadius: "16px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                    position: "relative",
                  }}
                >
                  {/* Top Badge Info */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "#8E1B20",
                        letterSpacing: ".06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {s.cat}
                    </span>
                    {s.login && (
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "999px",
                          background: "#F4F8F6",
                          color: "#44574E",
                        }}
                      >
                        Perlu login
                      </span>
                    )}
                  </div>

                  {/* Judul & Deskripsi */}
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "17px",
                      fontWeight: 800,
                      lineHeight: 1.3,
                      color: "#13231C",
                    }}
                  >
                    {s.t}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      color: "#44574E",
                      lineHeight: 1.5,
                    }}
                  >
                    {s.d}
                  </p>

                  {/* Meta SLA & Target User */}
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#0A6B4F",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "auto",
                      paddingTop: "6px",
                    }}
                  >
                    <span>⏱️ {s.sla}</span>
                    <span style={{ color: "#44574E" }}>👤 {s.who}</span>
                  </div>

                  {/* ACTION BUTTONS (Fungsi Utama!) */}
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      marginTop: "8px",
                      paddingTop: "12px",
                      borderTop: "1px solid #EEF3F0",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveModalItem(s)}
                      style={{
                        flex: "1",
                        background: "#E3F1EA",
                        color: "#064E3B",
                        border: 0,
                        borderRadius: "8px",
                        padding: "9px 12px",
                        fontSize: "13px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Detail ℹ️
                    </button>
                    <a
                      href={s.url}
                      target={s.url.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      style={{
                        flex: "1.5",
                        background: "#064E3B",
                        color: "#FFFFFF",
                        textDecoration: "none",
                        borderRadius: "8px",
                        padding: "9px 12px",
                        fontSize: "13px",
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                    >
                      {s.actionText}
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div
                style={{
                  gridColumn: "1 / -1",
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "32px",
                  textAlign: "center",
                  color: "#44574E",
                }}
              >
                Tidak ada layanan yang sesuai dengan pencarian Anda.
              </div>
            )}
          </div>

          {/* Status Sistem & Helpdesk */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <section
              style={{
                flex: "2 1 360px",
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "16px",
                padding: "22px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    color: "#064E3B",
                    fontWeight: 800,
                  }}
                >
                  Status Sistem Informasi
                </h2>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#0A6B4F",
                  }}
                >
                  Ind. 9, 26
                </span>
              </div>
              {SYSTEM_STATUS.map((y, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto auto",
                    gap: "14px",
                    alignItems: "center",
                    padding: "8px 0",
                    borderBottom:
                      idx === SYSTEM_STATUS.length - 1
                        ? "none"
                        : "1px solid #EEF3F0",
                    fontSize: "14px",
                  }}
                >
                  <span style={{ fontWeight: 700 }}>{y.n}</span>
                  <span style={{ color: "#44574E", fontSize: "12px" }}>
                    Uptime 30 hari {y.up}
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      gap: "6px",
                      alignItems: "center",
                      fontWeight: 700,
                      fontSize: "13px",
                    }}
                  >
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: y.c,
                      }}
                    ></span>
                    {y.s}
                  </span>
                </div>
              ))}
            </section>

            <section
              style={{
                flex: "1 1 260px",
                background: "#FFF8E1",
                border: "1px solid #F2D27A",
                borderRadius: "16px",
                padding: "22px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "18px",
                  color: "#3D2E00",
                  fontWeight: 800,
                }}
              >
                Tidak menemukan layanan?
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: 1.55,
                  color: "#5A4500",
                }}
              >
                Buat tiket ke helpdesk terpadu. Respons pertama maksimal 1 hari
                kerja.
              </p>
              <a
                href="#"
                style={{
                  background: "#064E3B",
                  color: "#FFFFFF",
                  padding: "12px",
                  borderRadius: "10px",
                  fontWeight: 700,
                  textAlign: "center",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Buat tiket helpdesk
              </a>
            </section>
          </div>
        </main>
      </div>

      {/* POP-UP MODAL DETAIL LAYANAN */}
      {activeModalItem && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              maxWidth: "500px",
              width: "100%",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#8E1B20",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                  }}
                >
                  {activeModalItem.cat}
                </span>
                <h2
                  style={{
                    margin: "4px 0 0",
                    fontSize: "20px",
                    color: "#064E3B",
                    fontWeight: 800,
                  }}
                >
                  {activeModalItem.t}
                </h2>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                style={{
                  border: 0,
                  background: "transparent",
                  fontSize: "20px",
                  cursor: "pointer",
                  fontWeight: 800,
                  color: "#44574E",
                }}
              >
                ✕
              </button>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#44574E",
                lineHeight: 1.6,
              }}
            >
              {activeModalItem.detailInfo}
            </p>

            <div
              style={{
                background: "#F4F8F6",
                padding: "12px 16px",
                borderRadius: "10px",
                fontSize: "13px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <div>
                <strong>Estimasi SLA:</strong> {activeModalItem.sla}
              </div>
              <div>
                <strong>Sasaran Pengguna:</strong> {activeModalItem.who}
              </div>
              <div>
                <strong>Akses Login:</strong>{" "}
                {activeModalItem.login
                  ? "Memerlukan SSO Kampus"
                  : "Akses Publik"}
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
              <button
                onClick={() => setActiveModalItem(null)}
                style={{
                  flex: 1,
                  padding: "12px",
                  border: "1px solid #DCE6E0",
                  background: "#FFF",
                  borderRadius: "10px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Tutup
              </button>
              <a
                href={activeModalItem.url}
                target={
                  activeModalItem.url.startsWith("http") ? "_blank" : "_self"
                }
                rel="noopener noreferrer"
                style={{
                  flex: 1.5,
                  padding: "12px",
                  background: "#064E3B",
                  color: "#FFF",
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: "10px",
                  fontWeight: 700,
                }}
              >
                {activeModalItem.actionText}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
