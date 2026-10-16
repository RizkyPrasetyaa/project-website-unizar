import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Profil() {
  const location = useLocation();
  const [tab, setTab] = useState("identitas");

  // Efek ini bakal kemicu setiap kali diklik dari Mega Menu
  useEffect(() => {
    if (location.state && location.state.tab) {
      setTab(location.state.tab);
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
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "22px 32px 0" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "13px", color: "#B7DCC9", marginBottom: "12px" }}>
            <Link to="/" style={{ color: "#B7DCC9", textDecoration: "none" }}>
              Beranda
            </Link>{" "}
            / <span style={{ color: "#FFFFFF" }}>Profil</span>
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
            <h1 style={{ margin: "6px 0 0", fontSize: "40px", fontWeight: 800 }}>Profil Institusi</h1>
          </div>

          {/* Sub-Menu Navigasi Profil */}
          <div role="tablist" style={{ display: "flex", gap: "4px", alignItems: "center", overflowX: "auto" }}>
            {[
              ["identitas", "Sejarah & Identitas"],
              ["visimisi", "Visi, Misi & Diferensiasi"],
              ["renstra", "RIP, Renstra & Roadmap"],
              ["evaluasi", "Evaluasi Tridharma"],
              ["statuta", "Statuta"],
              ["sotk", "Struktur Organisasi"],
              ["pimpinan", "Pimpinan & Yayasan"],
              ["capaian", "Capaian & Penghargaan"],
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
        {/* 1. SEJARAH & IDENTITAS */}
        {tab === "identitas" && (
          <section
            style={{ background: "#FFFFFF", border: "1px solid #DCE6E0", borderRadius: "18px", padding: "28px" }}
          >
            <span style={{ fontSize: "12px", fontWeight: 800, color: "#8A6500", textTransform: "uppercase" }}>
              SEJARAH & REKAM JEJAK
            </span>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#064E3B", margin: "8px 0 12px" }}>
              Sejarah Universitas Islam Al-Azhar
            </h2>
            <p style={{ fontSize: "15px", color: "#44574E", lineHeight: 1.6, margin: "0 0 16px" }}>
              Yayasan Pesantren Luhur Al-Azhar berdiri tahun 1979, mengambil peran di bidang pendidikan. Yayasan menganggap bidang pendidikan merupakan persoalan yang sangat urgen untuk dipecahkan. Pada saat yang bersamaan, jumlah perguruan tinggi di NTB masih sangat sedikit, tidak sebanding dengan jumlah calon mahasiswa yang terus mengalami peningkatan dari tahun ke tahun. Untuk alasan itulah, kemudian pada tanggal 10 Mei 1981 Yayasan Pesantren Luhur Al-Azhar mengeluarkan Surat Keputusan Nomor 01/YPLA/1981 tentang Pembentukan Universitas Islam Al-Azhar di Provinsi Nusa Tenggara Barat.

              Pada mulanya UNIZAR memiliki 4 (empat) Fakultas, yakni:

              (1) Fakultas Hukum: Jurusan Hukum Keperdataan dan Jurusan Hukum Pidana, yang belakangan pada tahun 1993, program nasional pendidikan tinggi ilmu hukum mengalami reorientasi pendidikan yang dilaksanakan dengan melebur seluruh jurusan menjadi program studi tunggal, yakni program studi ilmu hukum,

              (2) Fakultas Pertanian: Program Studi Sosial Ekonomi,

              (3) Fakultas Teknik: Program Studi Teknik Sipil,

              (4) Fakultas Ekonomi: Program Studi Ekonomi Pembangunan.

              Kesemuanya mendapat status terdaftar dari Menteri Pendidikan dan Kebudayaan, yang kala itu dijabat oleh Prof. Dr. Nugroho Notusanto, pada tanggal 18 Agustus 1984, dengan SK Nomor 0378/0/1984 tentang Pemberian Status Terdaftar kepada Fakultas dan Jurusan dalam Lingkungan Universitas Islam Al-Azhar di Mataram.

              Setelah itu, Rektor sekaligus pendiri Unizar, orang menyebutnya tokoh tiga zaman, H. Abdurrahim, S.H, menggagas pendirian Fakultas Kedokteran. Namun, karena berbagai persyaratan masih belum dipenuhi saat itu, maka atas saran Prof. Dr. dr. Soewignjo Soemohardjo, Sp.PD, KGEH, tahun 1990 berdirilah Fakultas Biologi. Dalam proses pengurusan ijin, atas saran dari Kopertis Wilayah VIII, namanya kemudian berubah menjadi Fakultas Matematika dan Ilmu Pengetahuan Alam (MIPA), sedangkan biologi dijadikan nama jurusan dan program studi.

              Kurang lebih dua tahun berikutnya, tepatnya tanggal 28 April 1992, Fakultas MIPA mendapat status terdaftar dari Direktur Jenderal Pendidikan Tinggi (Dirjen Dikti) dengan Keputusan Nomor 154/DIKTI/Kep/1992 tentang Pemberian Status Terdaftar kepada Jurusan Biologi Program Studi Biologi untuk Jenjang Program S1 pada Fakultas MIPA di Lingkungan Unizar di Mataram. Fakultas baru ini dianggap sebagai embrio dari Fakultas Kedokteran.

              Beberapa tahun setelahnya, tepatnya tahun 2000, gagasan untuk mendirikan Fakultas Kedokteran dimunculkan kembali, dan baru setelah 4 (empat) tahun kemudian, tepatnya pada tanggal 17 Juni 2004, Dirjen Dikti mengeluarkan Surat Ijin Penyelenggaraan, yakni dengan Surat nomor 2100/D/T/2004, perihal Ijin Penyelenggaraan Program Studi Pendidikan Dokter pada Universitas Islam Al-Azhar (Unizar) Mataram.

              Setelah itu, berdirilah Program Studi Akuntansi dengan SK Izin Operasional Nomor 500/KPT/I/2016 tanggal 7 Desember 2016. Selanjutnya, Program Studi Agroekoteknologi berdiri melalui Keputusan Menteri Pendidikan Dan Kebudayaan Republik Indonesia Nomor 1193/M/2020 tentang Izin Pembukaan Program Studi Agroekoteknologi Program Sarjana Pada Universitas Islam Al-Azhar di Kota Mataram yang diselenggarakan oleh Yayasan Pesantren Luhur Al-Azhar tanggal 30 Desember 2020.

              Untuk memenuhi kebutuhan dan tantangan di zaman yang semakin berkembang saat ini. Pada tahun 2022 didirikan Program Studi Ilmu Komputer pada Fakultas Teknik yang saat ini terakreditasi dengan nomor 007/SK/LAM-INFOKOM/Ak.Min/S/I/2024. Setahun berikutnya, yaitu pada 2023, selain penambahan program studi, Universitas Islam Al-Azhar juga mendirikan Fakultas Agama Islam yang memiliki Program Studi Ekonomi Syariah yang terakreditasi dengan nomor: 050/DE/A.5/AR.11/X/2023, dan Program Studi Manajemen Bisnis Syariah dengan nomor akreditasi: 081/DE/A.5/AR.11/XII/2023.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
                marginTop: "20px",
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
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#0A6B4F" }}>Nama Resmi</div>
                <div style={{ fontSize: "16px", fontWeight: 800, marginTop: "4px" }}>Universitas Islam Al-Azhar</div>
              </div>
              <div
                style={{
                  background: "#F4F8F6",
                  padding: "18px",
                  borderRadius: "12px",
                  borderLeft: "4px solid #0A6B4F",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#0A6B4F" }}>Lokasi Utama</div>
                <div style={{ fontSize: "16px", fontWeight: 800, marginTop: "4px" }}>Mataram, NTB</div>
              </div>
              <div
                style={{
                  background: "#F4F8F6",
                  padding: "18px",
                  borderRadius: "12px",
                  borderLeft: "4px solid #0A6B4F",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#0A6B4F" }}>Penyelenggara</div>
                <div style={{ fontSize: "16px", fontWeight: 800, marginTop: "4px" }}>
                  Yayasan Pesantren Luhur Al-Azhar
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 2. VISI, MISI & DIFERENSIASI */}
        {tab === "visimisi" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            <div style={{ background: "#FFFFFF", border: "1px solid #DCE6E0", borderRadius: "18px", padding: "28px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#064E3B", margin: "0 0 12px" }}>Visi</h2>
              <p style={{ fontSize: "15px", color: "#44574E", lineHeight: 1.6, margin: 0 }}>
                Menjadi Universitas terkemuka dalam pengembangan ilmu pengetahuan dan teknologi (IPTEK) berwawasan kepariwisataan yang professional dan berintegritas berdasarkan nilai Islam Rahmatan Lil Alamin.
              </p>
            </div>

            <div style={{ background: "#FFFFFF", border: "1px solid #DCE6E0", borderRadius: "18px", padding: "28px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#064E3B", margin: "0 0 12px" }}>Misi</h2>
              <ul style={{ fontSize: "14px", color: "#44574E", lineHeight: 1.6, margin: 0, paddingLeft: "18px" }}>
                <li>Menyelenggarakan Pendidikan dan pembelajaran secara professional yang berwawasan kepariwisataan dalam perkembangan IPTEK.</li>
                <li>Menyelenggarakan penelitian berwawasan kepariwisataan yang berkontribusi pada perkembangan IPTEK.</li>
                <li>Menyelenggarakan pengabdian kepada masyarakat berwawasan kepariwisataan untuk meningkatkan kesejahteraan masyarakat.</li>
                <li>Menyelenggarakan tata Kelola kelembagaan universitas secara professional berdasarkan nilai-nilai Islam.</li>
                <li>Mengembangkan Sumber Daya Manusia dan Kerjasama dengan pihak lain secara professional berdasarkan nilai-nilai Islam Rahmatan Lil Alamin.</li>
              </ul>
            </div>

            <div style={{ background: "#FFFFFF", border: "1px solid #DCE6E0", borderRadius: "18px", padding: "28px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#064E3B", margin: "0 0 12px" }}>
                Diferensiasi Misi
              </h2>
              <p style={{ fontSize: "15px", color: "#44574E", lineHeight: 1.6, margin: 0 }}>
                Fokus pada solusi kebutuhan masyarakat NTB melalui pendidikan kedokteran, hukum, teknik, ekonomi,
                pertanian, dan sains yang terintegrasi nilai keislaman.
              </p>
            </div>
          </div>
        )}

        {/* 3. RIP, RENSTRA & ROADMAP */}
        {tab === "renstra" && (
          <section
            style={{ background: "#FFFFFF", border: "1px solid #DCE6E0", borderRadius: "18px", padding: "28px" }}
          >
            <span style={{ fontSize: "12px", fontWeight: 800, color: "#8A6500", textTransform: "uppercase" }}>
              ARAH STRATEGIS
            </span>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#064E3B", margin: "8px 0 16px" }}>
              RIP, Renstra & Roadmap 2025–2029
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
              <div style={{ background: "#F4F8F6", padding: "20px", borderRadius: "14px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#064E3B", margin: "0 0 6px" }}>
                  Penguatan Akademik & OBE
                </h3>
                <p style={{ fontSize: "14px", color: "#44574E", margin: 0 }}>
                  Penerapan kurikulum berbasis capaian dan akreditasi internasional.
                </p>
              </div>
              <div style={{ background: "#F4F8F6", padding: "20px", borderRadius: "14px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#064E3B", margin: "0 0 6px" }}>
                  Pengembangan SDM & Dosen
                </h3>
                <p style={{ fontSize: "14px", color: "#44574E", margin: 0 }}>
                  Peningkatan kualifikasi doktor dan jabatan akademik Lektor Kepala/Guru Besar.
                </p>
              </div>
              <div style={{ background: "#F4F8F6", padding: "20px", borderRadius: "14px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#064E3B", margin: "0 0 6px" }}>
                  Kemitraan & Riset Terapan
                </h3>
                <p style={{ fontSize: "14px", color: "#44574E", margin: 0 }}>
                  Kolaborasi riset regional dan pengabdian masyarakat berbasis keunggulan lokal.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 4. EVALUASI TRIDHARMA */}
        {tab === "evaluasi" && (
          <section
            style={{ background: "#FFFFFF", border: "1px solid #DCE6E0", borderRadius: "18px", padding: "28px" }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#064E3B", margin: "0 0 16px" }}>
              Evaluasi Capaian Tridharma
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px" }}>
              <div style={{ background: "#F4F8F6", padding: "18px", borderRadius: "12px" }}>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#064E3B" }}>78%</div>
                <div style={{ fontSize: "14px", fontWeight: 700, marginTop: "4px" }}>Kelulusan Tepat Waktu</div>
              </div>
              <div style={{ background: "#F4F8F6", padding: "18px", borderRadius: "12px" }}>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#064E3B" }}>214</div>
                <div style={{ fontSize: "14px", fontWeight: 700, marginTop: "4px" }}>Publikasi Bereputasi</div>
              </div>
              <div style={{ background: "#F4F8F6", padding: "18px", borderRadius: "12px" }}>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#064E3B" }}>118</div>
                <div style={{ fontSize: "14px", fontWeight: 700, marginTop: "4px" }}>Program Pengabdian</div>
              </div>
            </div>
          </section>
        )}

        {/* 5. STATUTA */}
        {tab === "statuta" && (
          <section
            style={{ background: "#FFFFFF", border: "1px solid #DCE6E0", borderRadius: "18px", padding: "28px" }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#064E3B", margin: "0 0 12px" }}>Statuta UNIZAR</h2>
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
            style={{ background: "#FFFFFF", border: "1px solid #DCE6E0", borderRadius: "18px", padding: "28px" }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#064E3B", margin: "0 0 16px" }}>
              Struktur Organisasi & Tata Kerja (SOTK)
            </h2>
            <p style={{ fontSize: "15px", color: "#44574E", lineHeight: 1.6 }}>
              Bagan tata kerja terintegrasi antara Senat Universitas, Yayasan, Rektorat, Badan Penjaminan Mutu,
              Fakultas, dan Unit Pelaksana Teknis.
            </p>
          </section>
        )}

        {/* 7. PIMPINAN & YAYASAN */}
        {tab === "pimpinan" && (
          <section
            style={{ background: "#FFFFFF", border: "1px solid #DCE6E0", borderRadius: "18px", padding: "28px" }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#064E3B", margin: "0 0 16px" }}>
              Pimpinan Universitas & Yayasan
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              {["Ketua Yayasan", "Rektor", "Wakil Rektor I", "Wakil Rektor II", "Wakil Rektor III"].map(
                (jabatan, i) => (
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
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        background: "#D3EBDF",
                        margin: "0 auto 12px",
                      }}
                    ></div>
                    <div style={{ fontSize: "12px", fontWeight: 800, color: "#8A6500" }}>{jabatan}</div>
                    <div style={{ fontSize: "15px", fontWeight: 800, marginTop: "4px" }}>[Nama Pimpinan]</div>
                  </div>
                )
              )}
            </div>
          </section>
        )}

        {/* 8. CAPAIAN & PENGHARGAAN */}
        {tab === "capaian" && (
          <section
            style={{ background: "#FFFFFF", border: "1px solid #DCE6E0", borderRadius: "18px", padding: "28px" }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#064E3B", margin: "0 0 16px" }}>
              Capaian & Penghargaan Institusi
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
              <div style={{ padding: "16px", background: "#F4F8F6", borderRadius: "12px" }}>
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
