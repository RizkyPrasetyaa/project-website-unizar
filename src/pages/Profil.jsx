import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Profil() {
  const location = useLocation();
  const [tab, setTab] = useState("identitas");

  // State untuk internal sub-tab di "pimpinan" (Pimpinan & Yayasan)
  const [subPimpinan, setSubPimpinan] = useState("universitas");

  // State untuk filter kategori di "evaluasi" (Ketercapaian IKU IKT)
  const [ikuCategory, setIkuCategory] = useState("all");

  const IKU_IKT_DATA = [
    // IKU (8 Indikator Kinerja Utama - Diktiristek)
    {
      type: "iku",
      code: "IKU 1",
      title: "Kesiapan Kerja Lulusan",
      desc: "Persentase lulusan S1/Profesi yang berhasil mendapat pekerjaan layak, berwirausaha mandiri, atau melanjutkan studi lanjut dalam waktu ≤ 6 bulan.",
      target: "75%",
      realisasi: "82.6%",
      achievement: 110.1,
      status: "Melampaui Target",
      badgeColor: "#0A6B4F",
      badgeBg: "#E3F1EA",
      unit: "LP2M & CDC UNIZAR",
    },
    {
      type: "iku",
      code: "IKU 2",
      title: "Mahasiswa Berkegiatan di Luar Kampus",
      desc: "Persentase mahasiswa yang menghabiskan minimal 20 SKS di luar kampus (Magang MBKM, Proyek Desa, Riset, Pertukaran Mahasiswa, Studi Independen).",
      target: "30%",
      realisasi: "36.4%",
      achievement: 121.3,
      status: "Melampaui Target",
      badgeColor: "#0A6B4F",
      badgeBg: "#E3F1EA",
      unit: "Pusat MBKM UNIZAR",
    },
    {
      type: "iku",
      code: "IKU 3",
      title: "Dosen Berkegiatan di Luar Kampus",
      desc: "Persentase dosen berkegiatan tridharma di kampus lain, berkolaborasi dengan industri bereputasi, atau menjadi pakar/konsultan lembaga eksternal.",
      target: "25%",
      realisasi: "28.5%",
      achievement: 114.0,
      status: "Melampaui Target",
      badgeColor: "#0A6B4F",
      badgeBg: "#E3F1EA",
      unit: "Biro Kepegawaian & SDM",
    },
    {
      type: "iku",
      code: "IKU 4",
      title: "Praktisi Mengajar di Kampus",
      desc: "Persentase dosen berkualifikasi S3/Doktor dan praktisi ahli industri terkemuka yang aktif mengajar di program studi.",
      target: "40%",
      realisasi: "43.8%",
      achievement: 109.5,
      status: "Melampaui Target",
      badgeColor: "#0A6B4F",
      badgeBg: "#E3F1EA",
      unit: "Fakultas & Program Studi",
    },
    {
      type: "iku",
      code: "IKU 5",
      title: "Hasil Riset & Karya Dosen Digunakan",
      desc: "Publikasi ilmiah terindeks Scopus/SINTA, HKI/Paten terdaftar, dan hasil riset terapan yang diadopsi masyarakat serta pemerintah daerah.",
      target: "200 Luaran",
      realisasi: "246 Luaran",
      achievement: 123.0,
      status: "Melampaui Target",
      badgeColor: "#0A6B4F",
      badgeBg: "#E3F1EA",
      unit: "LPPM UNIZAR",
    },
    {
      type: "iku",
      code: "IKU 6",
      title: "Kemitraan Program Studi dengan Mitra",
      desc: "Persentase prodi yang memiliki kemitraan aktif dengan DUDI, lembaga pemerintah, dan perguruan tinggi bereputasi internasional.",
      target: "85%",
      realisasi: "91.2%",
      achievement: 107.3,
      status: "Melampaui Target",
      badgeColor: "#0A6B4F",
      badgeBg: "#E3F1EA",
      unit: "Biro Humas & Kerjasama",
    },
    {
      type: "iku",
      code: "IKU 7",
      title: "Kelas Kolaboratif & Partisipatif",
      desc: "Persentase mata kuliah yang mengimplementasikan metode pembelajaran berbasis pemecahan kasus (Case Method) atau Team-Based Project.",
      target: "60%",
      realisasi: "68.5%",
      achievement: 114.2,
      status: "Melampaui Target",
      badgeColor: "#0A6B4F",
      badgeBg: "#E3F1EA",
      unit: "Biro Akademik & BPM",
    },
    {
      type: "iku",
      code: "IKU 8",
      title: "Akreditasi Program Studi Unggul",
      desc: "Persentase program studi dengan capaian akreditasi Unggul/A dari LAM/BAN-PT atau tersertifikasi secara internasional.",
      target: "70%",
      realisasi: "78.6%",
      achievement: 112.3,
      status: "Melampaui Target",
      badgeColor: "#0A6B4F",
      badgeBg: "#E3F1EA",
      unit: "Badan Penjaminan Mutu (BPM)",
    },

    // IKT (Indikator Kinerja Tambahan - Khusus UNIZAR)
    {
      type: "ikt",
      code: "IKT 1",
      title: "Integrasi Nilai Rahmatan Lil Alamin",
      desc: "Integrasi kurikulum bermuatan nilai-nilai keislaman moderat, kepesantrenan luhur, dan etika profesi di 100% program studi.",
      target: "100%",
      realisasi: "100%",
      achievement: 100.0,
      status: "Tercapai Penuh",
      badgeColor: "#0A6B4F",
      badgeBg: "#E3F1EA",
      unit: "Pusat Studi Islam & Karakter",
    },
    {
      type: "ikt",
      code: "IKT 2",
      title: "Riset Berwawasan Kepariwisataan & Medis",
      desc: "Jumlah proyek penelitian dan pengabdian unggulan yang berfokus pada ekowisata, halal tourism, dan kesehatan pariwisata NTB.",
      target: "45 Judul",
      realisasi: "52 Judul",
      achievement: 115.6,
      status: "Melampaui Target",
      badgeColor: "#0A6B4F",
      badgeBg: "#E3F1EA",
      unit: "LPPM & Fakultas Kedokteran",
    },
    {
      type: "ikt",
      code: "IKT 3",
      title: "Sertifikasi Kompetensi Mahasiswa (SKPI)",
      desc: "Persentase lulusan yang mengantongi sertifikasi kompetensi berlisensi BNSP atau lembaga profesi sebelum diwisuda.",
      target: "70%",
      realisasi: "76.5%",
      achievement: 109.3,
      status: "Melampaui Target",
      badgeColor: "#0A6B4F",
      badgeBg: "#E3F1EA",
      unit: "Lembaga Sertifikasi Profesi (LSP)",
    },
    {
      type: "ikt",
      code: "IKT 4",
      title: "Indeks Kepuasan Pengguna (Stakeholders)",
      desc: "Skor survei kepuasan tahunan dari mitra industri, instansi pengguna lulusan, dan mahasiswa terhadap kualitas layanan tridharma.",
      target: "3.50 / 4.00",
      realisasi: "3.78 / 4.00",
      achievement: 108.0,
      status: "Sangat Memuaskan",
      badgeColor: "#0A6B4F",
      badgeBg: "#E3F1EA",
      unit: "Badan Penjaminan Mutu (BPM)",
    },
    {
      type: "ikt",
      code: "IKT 5",
      title: "Kepatuhan GUG & Tindak Lanjut AMI",
      desc: "Persentase penyelesaian tindak lanjut temuan Audit Mutu Internal (AMI) dan kepatuhan sistem tata kelola akuntabel (WBK/WBBM).",
      target: "90%",
      realisasi: "94.8%",
      achievement: 105.3,
      status: "Melampaui Target",
      badgeColor: "#0A6B4F",
      badgeBg: "#E3F1EA",
      unit: "Satuan Pengawas Internal (SPI)",
    },
    {
      type: "ikt",
      code: "IKT 6",
      title: "Desa Binaan & Pemberdayaan NTB",
      desc: "Jumlah desa binaan aktif di Pulau Lombok dan Sumbawa sebagai wahana terintegrasi KKN tematik dan pemberdayaan ekonomi masyarakat.",
      target: "30 Desa",
      realisasi: "38 Desa",
      achievement: 126.7,
      status: "Melampaui Target",
      badgeColor: "#0A6B4F",
      badgeBg: "#E3F1EA",
      unit: "Pusat PkM LPPM UNIZAR",
    },
  ];

  // Mapping nama key tab ke label untuk Breadcrumb Dinamis
  const TAB_LABELS = {
    identitas: "Sambutan & Sejarah",
    visimisi: "Visi, Misi & Diferensiasi",
    renstra: "Renip & Roadmap",
    evaluasi: "Ketercapaian IKU IKT",
    statuta: "Statuta",
    sotk: "Struktur Organisasi",
    pimpinan: "Pimpinan & Yayasan",
    penghargaan: "Penghargaan",
  };

  // Daftar key tab yang valid di halaman Profil
  const VALID_TABS = ["identitas", "visimisi", "renstra", "evaluasi", "statuta", "sotk", "pimpinan", "penghargaan"];

  const getValidTab = (rawTab) => {
    if (rawTab === "capaian") return "penghargaan";
    return rawTab && VALID_TABS.includes(rawTab) ? rawTab : "identitas";
  };

  useEffect(() => {
    if (location.state?.tab) {
      setTab(getValidTab(location.state.tab));
    } else {
      setTab("identitas");
    }
  }, [location.state, location.key]);

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        color: "#13231C",
        background: "#F4F8F6",
        minHeight: "100vh",
      }}
    >
      {/* Header Banner Profil */}
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
            / <span style={{ color: "#B7DCC9" }}>Profil</span> /{" "}
            <span style={{ color: "#FFFFFF", fontWeight: 600 }}>{TAB_LABELS[tab] || "Sambutan & Sejarah"}</span>
          </nav>

          <div style={{ paddingBottom: "20px" }}>
            <h1 style={{ margin: "6px 0 0", fontSize: "40px", fontWeight: 800 }}>Profil Institusi</h1>
          </div>

          {/* Sub-Menu Navigasi Profil */}
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
              ["identitas", "Sambutan & Sejarah"],
              ["visimisi", "Visi, Misi & Diferensiasi"],
              ["renstra", "Renip & Roadmap"],
              ["evaluasi", "Ketercapaian IKU IKT"],
              ["statuta", "Statuta"],
              ["sotk", "Struktur Organisasi"],
              ["pimpinan", "Pimpinan & Yayasan"],
              ["penghargaan", "Penghargaan"],
            ].map(([k, label]) => (
              <button
                key={k}
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

      {/* Konten Utama Halaman Profil */}
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
        {/* 1. SAMBUTAN & SEJARAH */}
        {tab === "identitas" && (
          <>
            <section
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "18px",
                padding: "28px",
                display: "flex",
                flexWrap: "wrap",
                gap: "28px",
                alignItems: "start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "12px",
                  flex: "0 1 240px",
                }}
              >
                {/* Foto Rektor menggantikan div placeholder */}
                <img
                  src="/assets/img/rektor.png" /* Sesuaikan nama & format file gambarmu (jpg/png) */
                  alt="Rektor UNIZAR"
                  style={{
                    width: "100%",
                    maxWidth: "220px",
                    aspectRatio: "3 / 4",
                    borderRadius: "16px",
                    objectFit: "cover" /* Memastikan gambar tidak gepeng */,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 800,
                      color: "#064E3B",
                    }}
                  >
                    Rektor UNIZAR
                  </div>
                  <div style={{ fontSize: "13px", color: "#44574E" }}>Universitas Islam Al-Azhar</div>
                </div>
              </div>

              <div style={{ flex: "1 1 420px", minWidth: "280px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#8A6500",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Sambutan Rektor
                </span>
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: 800,
                    color: "#064E3B",
                    margin: "8px 0 16px",
                  }}
                >
                  Membangun generasi unggul berintegritas
                </h2>
                <div
                  style={{
                    fontSize: "15px",
                    color: "#44574E",
                    lineHeight: 1.75,
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    borderLeft: "4px solid #0A6B4F",
                    paddingLeft: "18px",
                  }}
                >
                  <p style={{ margin: 0, fontStyle: "italic", color: "#13231C" }}>Salam sejahtera bagi kita semua.</p>
                  <p style={{ margin: 0, textAlign: "justify" }}>
                    Sebagai pionir pendidikan tinggi di Indonesia, Universitas Islam Al-Azhar Mataram (UNIZAR) memiliki
                    akar yang kuat dalam tradisi kebebasan akademik, di mana keberagaman pemikiran mendapatkan ruang
                    apresiasi yang tinggi. Kami senantiasa menjaga dan mengembangkan lingkungan akademik yang tidak
                    hanya kondusif, tetapi juga mendorong mahasiswa untuk berpikir kritis, kreatif, dan inovatif.
                  </p>
                  <p style={{ margin: 0, textAlign: "justify" }}>
                    Dalam perjalanan kami, UNIZAR berkomitmen untuk menjadi lembaga pendidikan yang unggul dan dapat
                    diandalkan dalam mencetak pemimpin masa depan. Melalui pendidikan yang berbasis pada nilai-nilai
                    Islam yang moderat, kami mendidik mahasiswa tidak hanya dalam aspek ilmu pengetahuan dan
                    keterampilan, tetapi juga dalam membangun karakter yang tangguh, berintegritas, dan memiliki
                    kepedulian sosial yang tinggi.
                  </p>
                  <p style={{ margin: 0, textAlign: "justify" }}>
                    Lingkungan pembelajaran di UNIZAR dipenuhi dengan semangat, kolaborasi, serta potensi untuk
                    berinovasi. Kami memberikan ruang bagi mahasiswa untuk mengeksplorasi berbagai ide dan gagasan,
                    serta mendorong mereka untuk menjadi agen perubahan yang berkontribusi positif baik di tingkat
                    nasional maupun global. Selain itu, kami berkomitmen untuk terus memperkuat kualitas pengajaran dan
                    penelitian yang berorientasi pada kebutuhan masyarakat dan dunia kerja.
                  </p>
                </div>
              </div>
            </section>

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
                  letterSpacing: "0.08em",
                }}
              >
                Sejarah & Rekam Jejak
              </span>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "#064E3B",
                  margin: "8px 0 16px",
                }}
              >
                Sejarah Universitas Islam Al-Azhar
              </h2>
              <div
                style={{
                  fontSize: "15px",
                  color: "#44574E",
                  lineHeight: 1.8,
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  maxWidth: "1280px",
                }}
              >
                <p style={{ margin: 0, textAlign: "justify", lineHeight: 1.8 }}>
                  <strong>Yayasan Pesantren Luhur Al-Azhar</strong> didirikan pada tahun 1979 dengan komitmen luhur
                  mengambil peran aktif dalam mencerdaskan kehidupan bangsa melalui bidang pendidikan tinggi. Pada masa
                  tersebut, ketersediaan perguruan tinggi di Provinsi Nusa Tenggara Barat masih sangat terbatas dan
                  tidak sebanding dengan lonjakan animo lulusan menengah atas yang ingin melanjutkan studi. Menjawab
                  tantangan dan urgensi tersebut, Yayasan secara resmi menerbitkan{" "}
                  <strong>Surat Keputusan Nomor 01/YPLA/1981</strong> pada tanggal <strong>10 Mei 1981</strong> tentang
                  pembentukan <strong>Universitas Islam Al-Azhar (UNIZAR)</strong> di Provinsi Nusa Tenggara Barat.
                </p>
                <p style={{ margin: 0, textAlign: "justify", lineHeight: 1.8 }}>
                  Pada masa awal pendiriannya, UNIZAR mengoperasikan empat fakultas perintis:{" "}
                  <strong>Fakultas Hukum</strong> (Jurusan Hukum Keperdataan dan Hukum Pidana, yang pada tahun 1993
                  melebur menjadi Program Studi Ilmu Hukum), <strong>Fakultas Pertanian</strong> (Program Studi Sosial
                  Ekonomi Pertanian), <strong>Fakultas Teknik</strong> (Program Studi Teknik Sipil), dan{" "}
                  <strong>Fakultas Ekonomi</strong> (Program Studi Ekonomi Pembangunan). Landasan legalitas institusi
                  ini semakin kokoh setelah keempat fakultas tersebut secara serentak memperoleh status terdaftar dari
                  Menteri Pendidikan dan Kebudayaan Republik Indonesia, <strong>Prof. Dr. Nugroho Notusanto</strong>,
                  melalui <strong>SK Nomor 0378/0/1984</strong> tertanggal <strong>18 Agustus 1984</strong>.
                </p>
                <p style={{ margin: 0, textAlign: "justify", lineHeight: 1.8 }}>
                  Seiring berjalannya waktu, Rektor sekaligus pendiri UNIZAR, <strong>H. Abdurrahim, S.H.</strong>,
                  memprakarsai gagasan visioner untuk mendirikan Fakultas Kedokteran guna mencetak tenaga medis lokal
                  yang kompeten. Mengingat persyaratan awal yang sangat ketat, atas saran dari{" "}
                  <strong>Prof. Dr. dr. Soewignjo Soemohardjo, Sp.PD, KGEH</strong>, UNIZAR mendirikan Fakultas Biologi
                  terlebih dahulu pada tahun 1990. Berdasarkan arahan Kopertis Wilayah VIII, entitas ini kemudian
                  bertransformasi menjadi <strong>Fakultas Matematika dan Ilmu Pengetahuan Alam (MIPA)</strong> dengan
                  Biologi sebagai jurusan dan program studi, serta resmi meraih status terdaftar melalui Keputusan
                  Dirjen Dikti <strong>Nomor 154/DIKTI/Kep/1992</strong> pada 28 April 1992. Fakultas MIPA ini menjadi
                  embrio utama yang melahirkan Program Studi Pendidikan Dokter setelah Dirjen Dikti menerbitkan izin
                  penyelenggaraan resmi melalui Surat <strong>Nomor 2100/D/T/2004</strong> pada tanggal{" "}
                  <strong>17 Juni 2004</strong>.
                </p>
                <p style={{ margin: 0, textAlign: "justify", lineHeight: 1.8 }}>
                  Memasuki era pendidikan tinggi modern, dinamika pengembangan program studi di UNIZAR terus bergerak
                  progresif guna menjawab kebutuhan dunia industri dan masyarakat luas. Ekspansi akademik tersebut
                  ditandai dengan dibukanya Program Studi <strong>Akuntansi</strong> (2016), Program Studi{" "}
                  <strong>Agroekoteknologi</strong> (2020), serta Program Studi <strong>Ilmu Komputer</strong> pada
                  Fakultas Teknik (2022). Komitmen penguatan nilai-nilai keislaman dan tata kelola bisnis modern semakin
                  ditegaskan dengan berdirinya <strong>Fakultas Agama Islam (FAI)</strong> pada tahun 2023, yang
                  menaungi Program Studi <strong>Ekonomi Syariah</strong> dan <strong>Manajemen Bisnis Syariah</strong>.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "12px",
                  marginTop: "24px",
                }}
              >
                {[
                  ["1979", "Yayasan Pesantren Luhur Al-Azhar berdiri"],
                  ["1981", "UNIZAR dibentuk melalui SK 01/YPLA/1981"],
                  ["1984", "Status terdaftar empat fakultas awal"],
                  ["1990", "Fakultas Biologi berdiri, cikal bakal MIPA"],
                  ["1992", "Fakultas MIPA mendapat status terdaftar"],
                  ["2004", "Izin Program Studi Pendidikan Dokter"],
                  ["2016", "Program Studi Akuntansi dibuka"],
                  ["2020", "Program Studi Agroekoteknologi dibuka"],
                  ["2022", "Program Studi Ilmu Komputer dibuka"],
                  ["2023", "Fakultas Agama Islam berdiri"],
                ].map(([year, note]) => (
                  <div
                    key={year}
                    style={{
                      background: "#F4F8F6",
                      borderRadius: "12px",
                      padding: "14px 16px",
                      borderLeft: "4px solid #0A6B4F",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: 800,
                        color: "#064E3B",
                      }}
                    >
                      {year}
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#44574E",
                        marginTop: "4px",
                        lineHeight: 1.45,
                      }}
                    >
                      {note}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "16px",
                  marginTop: "24px",
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
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#0A6B4F",
                    }}
                  >
                    Nama Resmi
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 800,
                      marginTop: "4px",
                    }}
                  >
                    Universitas Islam Al-Azhar
                  </div>
                </div>
                <div
                  style={{
                    background: "#F4F8F6",
                    padding: "18px",
                    borderRadius: "12px",
                    borderLeft: "4px solid #0A6B4F",
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#0A6B4F",
                    }}
                  >
                    Lokasi Utama
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 800,
                      marginTop: "4px",
                    }}
                  >
                    Mataram, NTB
                  </div>
                </div>
                <div
                  style={{
                    background: "#F4F8F6",
                    padding: "18px",
                    borderRadius: "12px",
                    borderLeft: "4px solid #0A6B4F",
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#0A6B4F",
                    }}
                  >
                    Penyelenggara
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 800,
                      marginTop: "4px",
                    }}
                  >
                    Yayasan Pesantren Luhur Al-Azhar
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* 2. VISI, MISI & DIFERENSIASI */}
        {tab === "visimisi" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* VISI — kartu penuh di atas */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderLeft: "6px solid #064E3B",
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
                  letterSpacing: "0.08em",
                }}
              >
                Visi
              </span>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#13231C",
                  lineHeight: 1.7,
                  margin: "10px 0 0",
                }}
              >
                Menjadi Universitas terkemuka dalam pengembangan ilmu pengetahuan
                dan teknologi (IPTEK) berwawasan kepariwisataan yang professional
                dan berintegritas berdasarkan nilai Islam Rahmatan Lil Alamin.
              </p>
            </div>

            {/* DIFERENSIASI MISI & MISI */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#064E3B",
                    margin: "0 0 16px",
                  }}
                >
                  Diferensiasi Misi
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {[
                    "Menyelenggarakan Pendidikan dan pembelajaran secara professional yang berwawasan kepariwisataan dalam perkembangan IPTEK.",
                    "Menyelenggarakan penelitian berwawasan kepariwisataan yang berkontribusi pada perkembangan IPTEK.",
                    "Menyelenggarakan pengabdian kepada masyarakat berwawasan kepariwisataan untuk meningkatkan kesejahteraan masyarakat.",
                  ].map((t, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: "26px",
                          height: "26px",
                          borderRadius: "999px",
                          background: "#E3F1EA",
                          color: "#0A6B4F",
                          fontSize: "13px",
                          fontWeight: 800,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "2px",
                        }}
                      >
                        {i + 1}
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#44574E",
                          lineHeight: 1.6,
                        }}
                      >
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#064E3B",
                    margin: "0 0 16px",
                  }}
                >
                  Misi
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {[
                    "Menyelenggarakan tata Kelola kelembagaan universitas secara professional berdasarkan nilai-nilai Islam.",
                    "Mengembangkan Sumber Daya Manusia dan Kerjasama dengan pihak lain secara professional berdasarkan nilai-nilai Islam Rahmatan Lil Alamin.",
                  ].map((t, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: "26px",
                          height: "26px",
                          borderRadius: "999px",
                          background: "#E3F1EA",
                          color: "#0A6B4F",
                          fontSize: "13px",
                          fontWeight: 800,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "2px",
                        }}
                      >
                        {i + 4}
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#44574E",
                          lineHeight: 1.6,
                        }}
                      >
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* TUJUAN & SASARAN — di bawah */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#064E3B",
                    margin: "0 0 16px",
                  }}
                >
                  Tujuan
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {[
                    "Menghasilkan lulusan yang beriman, bertakwa, berakhlak mulia, kompeten di bidangnya, berwawasan kepariwisataan, dan berjiwa kewirausahaan.",
                    "Menghasilkan penelitian inovatif dan publikasi ilmiah yang berdaya saing serta berkontribusi bagi perkembangan IPTEK dan masyarakat.",
                    "Menerapkan hasil penelitian melalui pengabdian masyarakat untuk meningkatkan kesejahteraan dan kemandirian masyarakat.",
                    "Mewujudkan tata kelola organisasi universitas yang mandiri, efektif, efisien, akuntabel, dan transparan (Good University Governance).",
                    "Mewujudkan kerja sama strategis dengan berbagai pihak baik di tingkat regional, nasional, maupun internasional.",
                  ].map((t, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: "26px",
                          height: "26px",
                          borderRadius: "999px",
                          background: "#E3F1EA",
                          color: "#0A6B4F",
                          fontSize: "13px",
                          fontWeight: 800,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "2px",
                        }}
                      >
                        {i + 1}
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#44574E",
                          lineHeight: 1.6,
                        }}
                      >
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#064E3B",
                    margin: "0 0 16px",
                  }}
                >
                  Sasaran
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {[
                    "Peningkatan persentase kelulusan tepat waktu dengan masa tunggu kerja singkat serta tersertifikasi kompetensi.",
                    "Penerapan kurikulum berbasis Outcome-Based Education (OBE) dan perluasan implementasi program MBKM.",
                    "Peningkatan jumlah publikasi ilmiah bereputasi nasional dan internasional serta perolehan HKI/Paten.",
                    "Pencapaian akreditasi institusi dan seluruh program studi menuju predikat Unggul.",
                    "Peningkatan kualifikasi dosen berpendidikan Doktor (S3) serta jabatan akademik Lektor Kepala dan Guru Besar.",
                    "Penguatan realisasi kemitraan tridharma dengan dunia usaha, industri, dan perguruan tinggi mitra.",
                  ].map((t, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: "26px",
                          height: "26px",
                          borderRadius: "999px",
                          background: "#E3F1EA",
                          color: "#0A6B4F",
                          fontSize: "13px",
                          fontWeight: 800,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "2px",
                        }}
                      >
                        {i + 1}
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#44574E",
                          lineHeight: 1.6,
                        }}
                      >
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 3. RIP, RENSTRA & ROADMAP */}
        {tab === "renstra" && (
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
              ARAH STRATEGIS
            </span>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#064E3B",
                margin: "8px 0 16px",
              }}
            >
              Renip & Roadmap 2025–2029
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
                  padding: "20px",
                  borderRadius: "14px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 800,
                    color: "#064E3B",
                    margin: "0 0 6px",
                  }}
                >
                  Penguatan Akademik & OBE
                </h3>
                <p style={{ fontSize: "14px", color: "#44574E", margin: 0 }}>
                  Penerapan kurikulum berbasis capaian dan akreditasi internasional.
                </p>
              </div>
              <div
                style={{
                  background: "#F4F8F6",
                  padding: "20px",
                  borderRadius: "14px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 800,
                    color: "#064E3B",
                    margin: "0 0 6px",
                  }}
                >
                  Pengembangan SDM & Dosen
                </h3>
                <p style={{ fontSize: "14px", color: "#44574E", margin: 0 }}>
                  Peningkatan kualifikasi doktor dan jabatan akademik Lektor Kepala/Guru Besar.
                </p>
              </div>
              <div
                style={{
                  background: "#F4F8F6",
                  padding: "20px",
                  borderRadius: "14px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 800,
                    color: "#064E3B",
                    margin: "0 0 6px",
                  }}
                >
                  Kemitraan & Riset Terapan
                </h3>
                <p style={{ fontSize: "14px", color: "#44574E", margin: 0 }}>
                  Kolaborasi riset regional dan pengabdian masyarakat berbasis keunggulan lokal.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 4. KETERCAPAIAN IKU IKT */}
        {tab === "evaluasi" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
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
                  letterSpacing: "0.08em",
                }}
              >
                Akuntabilitas & Kinerja Mutu
              </span>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "#064E3B",
                  margin: "8px 0 12px",
                }}
              >
                Ketercapaian IKU & IKT UNIZAR
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "#44574E",
                  lineHeight: 1.6,
                  margin: "0 0 24px",
                  maxWidth: "960px",
                }}
              >
                Evaluasi komprehensif ketercapaian Indikator Kinerja Utama (IKU)
                berdasarkan ketetapan Ditjen Diktiristek Kemendikbudristek serta
                Indikator Kinerja Tambahan (IKT) yang mencerminkan diferensiasi
                misi Universitas Islam Al-Azhar berbasis wawasan kepariwisataan,
                kesehatan, dan nilai Islam Rahmatan Lil Alamin.
              </p>

              {/* 4 Highlight Metric Cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "16px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    background: "#F4F8F6",
                    padding: "20px",
                    borderRadius: "14px",
                    borderLeft: "4px solid #0A6B4F",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#0A6B4F",
                      textTransform: "uppercase",
                    }}
                  >
                    Rata-rata IKU Nasional
                  </div>
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: 800,
                      color: "#064E3B",
                      marginTop: "4px",
                    }}
                  >
                    113.8%
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#44574E",
                      marginTop: "4px",
                    }}
                  >
                    8 Sasaran Utama Terlampaui
                  </div>
                </div>

                <div
                  style={{
                    background: "#F4F8F6",
                    padding: "20px",
                    borderRadius: "14px",
                    borderLeft: "4px solid #0A6B4F",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#0A6B4F",
                      textTransform: "uppercase",
                    }}
                  >
                    Rata-rata IKT Unggulan
                  </div>
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: 800,
                      color: "#064E3B",
                      marginTop: "4px",
                    }}
                  >
                    110.8%
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#44574E",
                      marginTop: "4px",
                    }}
                  >
                    6 Sasaran Khusus UNIZAR
                  </div>
                </div>

                <div
                  style={{
                    background: "#F4F8F6",
                    padding: "20px",
                    borderRadius: "14px",
                    borderLeft: "4px solid #0A6B4F",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#0A6B4F",
                      textTransform: "uppercase",
                    }}
                  >
                    Kesiapan Kerja Lulusan
                  </div>
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: 800,
                      color: "#064E3B",
                      marginTop: "4px",
                    }}
                  >
                    82.6%
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#44574E",
                      marginTop: "4px",
                    }}
                  >
                    Target Nasional: 75%
                  </div>
                </div>

                <div
                  style={{
                    background: "#F4F8F6",
                    padding: "20px",
                    borderRadius: "14px",
                    borderLeft: "4px solid #0A6B4F",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#0A6B4F",
                      textTransform: "uppercase",
                    }}
                  >
                    Publikasi & Riset
                  </div>
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: 800,
                      color: "#064E3B",
                      marginTop: "4px",
                    }}
                  >
                    246+
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#44574E",
                      marginTop: "4px",
                    }}
                  >
                    Scopus, SINTA & Paten HKI
                  </div>
                </div>
              </div>

              {/* Sub-Tab Kapsul Filter */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  alignItems: "center",
                  marginBottom: "24px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid #EEF3F0",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#44574E",
                    marginRight: "6px",
                  }}
                >
                  Tampilkan:
                </span>
                {[
                  ["all", "Semua Indikator (14)"],
                  ["iku", "IKU Nasional (8 Standar Diktiristek)"],
                  ["ikt", "IKT Khusus UNIZAR (6 Standar Unggulan)"],
                ].map(([key, label]) => {
                  const isSel = ikuCategory === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setIkuCategory(key)}
                      style={{
                        border: 0,
                        cursor: "pointer",
                        padding: "8px 18px",
                        fontSize: "13px",
                        fontWeight: 700,
                        borderRadius: "999px",
                        background: isSel ? "#064E3B" : "#F4F8F6",
                        color: isSel ? "#FFFFFF" : "#44574E",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Grid Kartu Indikator */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                  gap: "20px",
                }}
              >
                {IKU_IKT_DATA.filter(
                  (item) => ikuCategory === "all" || item.type === ikuCategory
                ).map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#F4F8F6",
                      borderRadius: "14px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "14px",
                      border: "1px solid #E2ECE6",
                      borderTop: `4px solid ${
                        item.type === "iku" ? "#0A6B4F" : "#8A6500"
                      }`,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: 800,
                            padding: "4px 10px",
                            borderRadius: "6px",
                            background:
                              item.type === "iku" ? "#E3F1EA" : "#FFF7D6",
                            color: item.type === "iku" ? "#064E3B" : "#8A6500",
                          }}
                        >
                          {item.code} ·{" "}
                          {item.type === "iku"
                            ? "Standar Diktiristek"
                            : "Kekhasan UNIZAR"}
                        </span>
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 700,
                            padding: "3px 8px",
                            borderRadius: "999px",
                            background: item.badgeBg,
                            color: item.badgeColor,
                          }}
                        >
                          {item.status}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: "16px",
                          fontWeight: 800,
                          color: "#064E3B",
                          margin: "0 0 6px",
                          lineHeight: 1.35,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#44574E",
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>

                    <div>
                      {/* Metric Row */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, 1fr)",
                          gap: "8px",
                          background: "#FFFFFF",
                          padding: "10px 14px",
                          borderRadius: "10px",
                          marginBottom: "12px",
                          border: "1px solid #E6EFEA",
                        }}
                      >
                        <div>
                          <div style={{ fontSize: "11px", color: "#6A7B72" }}>
                            Target
                          </div>
                          <div
                            style={{
                              fontSize: "13px",
                              fontWeight: 700,
                              color: "#13231C",
                            }}
                          >
                            {item.target}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: "11px", color: "#6A7B72" }}>
                            Realisasi
                          </div>
                          <div
                            style={{
                              fontSize: "13px",
                              fontWeight: 700,
                              color: "#064E3B",
                            }}
                          >
                            {item.realisasi}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: "11px", color: "#6A7B72" }}>
                            Capaian
                          </div>
                          <div
                            style={{
                              fontSize: "13px",
                              fontWeight: 800,
                              color: "#0A6B4F",
                            }}
                          >
                            {item.achievement}%
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div
                        style={{
                          height: "6px",
                          background: "#D8E6DF",
                          borderRadius: "999px",
                          overflow: "hidden",
                          marginBottom: "8px",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${Math.min(item.achievement, 100)}%`,
                            background:
                              item.type === "iku" ? "#0A6B4F" : "#8A6500",
                            borderRadius: "999px",
                          }}
                        />
                      </div>

                      <div
                        style={{
                          fontSize: "11.5px",
                          color: "#6A7B72",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Unit: {item.unit}</span>
                        <span style={{ fontWeight: 600, color: "#0A6B4F" }}>
                          ✓ Terverifikasi BPM
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Siklus PPEPP Card */}
            <section
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "18px",
                padding: "26px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "#E3F1EA",
                    color: "#064E3B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "18px",
                  }}
                >
                  ✓
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      color: "#064E3B",
                      margin: 0,
                    }}
                  >
                    Mekanisme Pengendalian Ketercapaian Mutu (Siklus PPEPP)
                  </h3>
                  <p style={{ fontSize: "13px", color: "#44574E", margin: 0 }}>
                    Penjaminan mutu berkelanjutan yang dikawal secara independen oleh
                    Badan Penjaminan Mutu (BPM) UNIZAR
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "14px",
                }}
              >
                {[
                  {
                    step: "1. Penetapan",
                    desc: "Perumusan target IKU & IKT dalam Renstra 5 tahunan dan Perjanjian Kinerja tahunan Rektor.",
                  },
                  {
                    step: "2. Pelaksanaan",
                    desc: "Implementasi tridharma oleh fakultas, prodi, LPPM, dan unit kerja melalui SOP terstandarisasi.",
                  },
                  {
                    step: "3. Evaluasi",
                    desc: "Audit Mutu Internal (AMI), Evaluasi Diri, dan pemantauan pelaporan PDDIKTI secara berkala.",
                  },
                  {
                    step: "4. Pengendalian",
                    desc: "Penyusunan Rencana Tindak Lanjut (RTL) atas deviasi atau rekomendasi hasil temuan audit.",
                  },
                  {
                    step: "5. Peningkatan",
                    desc: "Peningkatan standar mutu baru melalui Rapat Tinjauan Manajemen (RTM) bersama Yayasan.",
                  },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#F4F8F6",
                      padding: "16px",
                      borderRadius: "12px",
                      borderLeft: "3px solid #0A6B4F",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 800,
                        color: "#064E3B",
                      }}
                    >
                      {s.step}
                    </div>
                    <div
                      style={{
                        fontSize: "12.5px",
                        color: "#44574E",
                        marginTop: "4px",
                        lineHeight: 1.45,
                      }}
                    >
                      {s.desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* 5. STATUTA */}
        {tab === "statuta" && (
          <section
            style={{
              background: "#FFFFFF",
              border: "1px solid #DCE6E0",
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#064E3B",
                margin: "0 0 12px",
              }}
            >
              Statuta UNIZAR
            </h2>
            <p style={{ fontSize: "15px", color: "#44574E", lineHeight: 1.6 }}>
              Statuta UNIZAR merupakan pedoman dasar penyelenggaraan kegiatan tridharma, tata kelola, dan norma akademik
              di Universitas Islam Al-Azhar.
            </p>
            <div
              style={{
                marginTop: "16px",
                padding: "16px",
                background: "#E3F1EA",
                borderRadius: "12px",
                color: "#064E3B",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              ✓ Statuta Terupdate Disahkan Melalui SK Yayasan No. 008/2024
            </div>
          </section>
        )}

        {/* 6. STRUKTUR ORGANISASI */}
        {tab === "sotk" && (
          <section
            style={{
              background: "#FFFFFF",
              border: "1px solid #DCE6E0",
              borderRadius: "18px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  color: "#8A6500",
                  textTransform: "uppercase",
                }}
              >
                TATA KELOLA KAMPUS
              </span>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "#064E3B",
                  margin: "6px 0 8px",
                }}
              >
                Struktur Organisasi & Tata Kerja (SOTK)
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "#44574E",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Bagan tata kerja terintegrasi antara Senat Universitas, Yayasan Pesantren Luhur Al-Azhar, Rektorat,
                Badan Penjaminan Mutu, Fakultas, dan Unit Pelaksana Teknis.
              </p>
            </div>

            {/* Container Gambar (EKSPLISIT STRUKTUR-ORGANISASI.PNG) */}
            <div
              style={{
                background: "#F4F8F6",
                border: "1px solid #DCE6E0",
                borderRadius: "14px",
                padding: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                overflowX: "auto",
              }}
            >
              <img
                src="/assets/img/struktur-organisasi.png"
                alt="Bagan Struktur Organisasi UNIZAR"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            </div>

            {/* Keterangan Penutup */}
            <div
              style={{
                background: "#F4F8F6",
                border: "1px solid #DCE6E0",
                borderRadius: "14px",
                padding: "18px 22px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ fontSize: "14px", fontWeight: 800, color: "#13231C" }}>
                Keterangan Hubungan Kerja & Koordinasi:
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "12px",
                  fontSize: "13px",
                  color: "#44574E",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      width: "24px",
                      height: "3px",
                      background: "#13231C",
                    }}
                  ></span>
                  <span>Garis Perintah</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      width: "24px",
                      height: "2px",
                      borderBottom: "2px dashed #13231C",
                    }}
                  ></span>
                  <span>Garis Koordinasi</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "3px",
                      background: "#0A6B4F",
                    }}
                  ></span>
                  <span>Garis Perintah WR I</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "3px",
                      background: "#6B46C1",
                    }}
                  ></span>
                  <span>Garis Perintah WR II</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "3px",
                      background: "#2B6CB0",
                    }}
                  ></span>
                  <span>Garis Perintah WR III</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "3px",
                      background: "#DD6B20",
                    }}
                  ></span>
                  <span>Garis Perintah WR IV</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 7. PIMPINAN & YAYASAN */}
        {tab === "pimpinan" && (
          <section
            style={{
              background: "#FFFFFF",
              border: "1px solid #DCE6E0",
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            {/* SUB-NAVIGASI (TAB KAPSUL INTERAKTIF) */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                borderBottom: "1.5px solid #EEF3F0",
                paddingBottom: "14px",
                marginBottom: "24px",
                overflowX: "auto",
              }}
            >
              <button
                type="button"
                onClick={() => setSubPimpinan("universitas")}
                style={{
                  border: 0,
                  cursor: "pointer",
                  padding: "8px 18px",
                  fontSize: "18px",
                  fontWeight: 800,
                  borderRadius: "999px",
                  background: subPimpinan === "universitas" ? "#064E3B" : "transparent",
                  color: subPimpinan === "universitas" ? "#FFFFFF" : "#44574E",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                Pimpinan Universitas
              </button>
              <button
                type="button"
                onClick={() => setSubPimpinan("yayasan")}
                style={{
                  border: 0,
                  cursor: "pointer",
                  padding: "8px 18px",
                  fontSize: "18px",
                  fontWeight: 800,
                  borderRadius: "999px",
                  background: subPimpinan === "yayasan" ? "#064E3B" : "transparent",
                  color: subPimpinan === "yayasan" ? "#FFFFFF" : "#44574E",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                Yayasan
              </button>
            </div>

            {/* KONTEN 1: PIMPINAN UNIVERSITAS */}
            {subPimpinan === "universitas" ? (
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#064E3B",
                    margin: "0 0 16px",
                  }}
                >
                  Rektorat & Pimpinan Universitas
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {[
                    {
                      jabatan: "Rektor",
                      nama: "Dr. Ir. Muh. Ansyar, MP.",
                      foto: "/assets/img/pimpinan/Dr. Ir. Muh. Ansyar, MP..png",
                    },
                    {
                      jabatan: "Wakil Rektor I",
                      nama: "Dr. Sri Karyati, SH., MH",
                      foto: "/assets/img/pimpinan/Dr. Sri Karyati, SH., MH.png",
                    },
                    {
                      jabatan: "Wakil Rektor II",
                      nama: "Restusari Evayanti, ST., M.Eng",
                      foto: "/assets/img/pimpinan/Restusari Evayanti, ST., M.Eng.png",
                    },
                    {
                      jabatan: "Wakil Rektor III",
                      nama: "Fathurrahman, S.E., M.Ak",
                      foto: "/assets/img/pimpinan/Fathurrahman, S.E., M.Ak.png",
                    },
                    {
                      jabatan: "Wakil Rektor IV",
                      nama: "Dr. dr. Iing. M.Erg",
                      foto: "/assets/img/pimpinan/Dr. dr. Iing. M.Erg.png",
                    },
                  ].map((pimpinan, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#F4F8F6",
                        border: "1px solid #DCE6E0",
                        borderRadius: "14px",
                        padding: "16px",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={pimpinan.foto}
                        alt={`${pimpinan.jabatan} - ${pimpinan.nama}`}
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          margin: "0 auto 12px",
                          display: "block",
                          border: "2px solid #0A6B4F",
                        }}
                      />
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: 800,
                          color: "#8A6500",
                          textTransform: "uppercase",
                        }}
                      >
                        {pimpinan.jabatan}
                      </div>
                      <div
                        style={{
                          fontSize: "15px",
                          fontWeight: 800,
                          color: "#13231C",
                          marginTop: "4px",
                          lineHeight: 1.3,
                        }}
                      >
                        {pimpinan.nama}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* KONTEN 2: PENGURUS YAYASAN */
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#064E3B",
                    margin: "0 0 16px",
                  }}
                >
                  Pengurus Yayasan Pesantren Luhur Al-Azhar
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {[
                    {
                      jabatan: "Ketua Yayasan",
                      nama: "[Nama Ketua Yayasan]",
                      foto: "/assets/img/yayasan/ketua.jpg",
                    },
                    {
                      jabatan: "Sekretaris Yayasan",
                      nama: "[Nama Sekretaris Yayasan]",
                      foto: "/assets/img/yayasan/sekretaris.jpg",
                    },
                    {
                      jabatan: "Bendahara Yayasan",
                      nama: "[Nama Bendahara Yayasan]",
                      foto: "/assets/img/yayasan/bendahara.jpg",
                    },
                  ].map((pengurus, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#F1F5F2",
                        border: "1px solid #DCE6E0",
                        borderRadius: "14px",
                        padding: "16px",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={pengurus.foto}
                        alt={`${pengurus.jabatan} - ${pengurus.nama}`}
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          margin: "0 auto 12px",
                          display: "block",
                          border: "2px solid #0A6B4F",
                        }}
                      />
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: 800,
                          color: "#8A6500",
                          textTransform: "uppercase",
                        }}
                      >
                        {pengurus.jabatan}
                      </div>
                      <div
                        style={{
                          fontSize: "15px",
                          fontWeight: 800,
                          color: "#13231C",
                          marginTop: "4px",
                          lineHeight: 1.3,
                        }}
                      >
                        {pengurus.nama}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 8. PENGHARGAAN */}
        {tab === "penghargaan" && (
          <section
            style={{
              background: "#FFFFFF",
              border: "1px solid #DCE6E0",
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#064E3B",
                margin: "0 0 16px",
              }}
            >
              Penghargaan Institusi
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div
                style={{
                  padding: "16px",
                  background: "#FFF8E1",
                  border: "1px solid #F2D27A",
                  borderRadius: "12px",
                  color: "#5A4500",
                }}
              >
                <strong style={{ color: "#3D2E00" }}>Akreditasi Unggul Institusi</strong> — Diakui BAN-PT berdasarkan
                penilaian instrumen IAPT 4.1.
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#F4F8F6",
                  borderRadius: "12px",
                }}
              >
                <strong>Penghargaan Kampus Islami Berdampak</strong> — Rekognisi atas pengabdian masyarakat dan
                pemberdayaan desa binaan di NTB.
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
