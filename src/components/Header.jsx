import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(null);
  const headerRef = useRef(null);
  const location = useLocation();

  // Otomatis menutup mega menu jika rute/halaman berpindah
  useEffect(() => {
    setOpen(null);
  }, [location.pathname]);

  // Fitur Click Outside: Otomatis menutup mega menu jika klik di luar header
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const MENUS = {
    profil: {
      id: "Profil",
      desc: "Identitas, arah strategis, dan dokumen legal-formal institusi.",
      href: "/profil",
      defaultTab: "identitas",
      items: [
        { label: "Sejarah & Identitas", access: "Publik", tab: "identitas" },
        { label: "Visi, Misi & Diferensiasi Misi", access: "Publik", tab: "visimisi" },
        { label: "RIP, Renstra & Roadmap", access: "Ringkasan", tab: "renstra" },
        { label: "Evaluasi Capaian Tridharma", access: "Ringkasan", tab: "evaluasi" },
        { label: "Statuta", access: "Publik", tab: "statuta" },
        { label: "Struktur Organisasi & Tata Kerja", access: "Publik", tab: "sotk" },
        { label: "Pimpinan & Yayasan", access: "Publik", tab: "pimpinan" },
        { label: "Capaian & Penghargaan", access: "Publik", tab: "capaian" },
      ],
    },
    fakultas: {
      id: "Fakultas",
      desc: "Fakultas, program studi, status akreditasi, dan kurikulum.",
      href: "/fakultas",
      items: [
        { label: "Daftar Fakultas & Prodi", access: "Publik" },
        { label: "Status Akreditasi Prodi", access: "Publik" },
        { label: "Kurikulum OBE per Prodi", access: "Publik" },
        { label: "Dosen per Prodi", access: "Publik" },
        { label: "Capaian Unggulan Prodi", access: "Publik" },
        { label: "Laboratorium & Fasilitas", access: "Publik" },
      ],
    },
    direktori: {
      id: "Direktori",
      desc: "Satu pintu menemukan unit, orang, dan dokumen.",
      href: "/pusat-dokumen",
      defaultTab: "unit",
      items: [
        { label: "Unit Kerja & Kontak", access: "Publik", tab: "unit" },
        { label: "Direktori Dosen & Pakar", access: "Publik", tab: "dosen" },
        { label: "Direktori Program Studi", access: "Publik", tab: "prodi" },
        { label: "Pusat Dokumen", access: "Publik", tab: "dokumen" },
        { label: "Direktori MoU/MoA", access: "Publik", tab: "kerjasama" },
        { label: "Peta Kampus", access: "Publik", tab: "peta" },
      ],
    },
    gug: {
      id: "GUG",
      desc: "Good University Governance: akuntabilitas, integritas, mitigasi risiko, dan keuangan.",
      href: "/gug",
      defaultTab: "ikhtisar",
      items: [
        { label: "Kebijakan & Praktik Baik GUG", access: "Publik", tab: "kebijakan" },
        { label: "Laporan Tahunan", access: "Ringkasan", tab: "laporan-tahunan" },
        { label: "Kode Etik & Lembaga Etik", access: "Publik", tab: "kode-etik" },
        { label: "Kampus Aman & Satgas PPKPT", access: "Publik", tab: "ppkpt" },
        { label: "Pengawasan & WBK/WBBM", access: "Ringkasan", tab: "pengawasan" },
        { label: "Whistleblowing System", access: "Publik", tab: "wbs" },
        { label: "Pengelolaan & 11 Pedoman", access: "Publik", tab: "pengelolaan" },
        { label: "Survei Kepuasan Tata Pamong", access: "Ringkasan", tab: "survei" },
        { label: "Renstra & Pola Keuangan", access: "Publik", tab: "renstra" },
        { label: "Laporan Keuangan & Audit Eksternal", access: "Ringkasan", tab: "laporan-keuangan" },
      ],
    },
    pendidikan: {
      id: "Pendidikan",
      desc: "Kurikulum, pembelajaran, MBKM, dan penerimaan mahasiswa baru.",
      href: "/pendidikan",
      defaultTab: "pmb",
      items: [
        { label: "Kebijakan Kurikulum OBE", access: "Publik", tab: "kurikulum" },
        { label: "Kalender & Panduan Akademik", access: "Publik", tab: "kalender" },
        { label: "Proses & Evaluasi Pembelajaran", access: "Publik", tab: "proses" },
        { label: "MBKM (≥ 10 sks luar prodi)", access: "Publik", tab: "mbkm" },
        { label: "Suasana Akademik & Kebebasan Mimbar", access: "Publik", tab: "suasana" },
        { label: "Capaian Kompetensi Lulusan", access: "Ringkasan", tab: "capaian" },
        { label: "PMB Afirmatif & Inklusif", access: "Publik", tab: "pmb-inklusif" },
        { label: "Beasiswa & Bantuan Biaya", access: "Publik", tab: "beasiswa" },
        { label: "RPL · PJJ · PKKMB", access: "Publik", tab: "rpl" },
      ],
    },
    penelitian: {
      id: "Penelitian",
      desc: "Ekosistem riset LPPM sesuai diferensiasi misi.",
      href: "/penelitian",
      defaultTab: "ikhtisar",
      items: [
        { label: "Ikhtisar Penelitian", access: "Publik", tab: "ikhtisar" },
        { label: "Renstra & Peta Jalan Penelitian", access: "Publik", tab: "renstra" },
        { label: "Tata Kelola & Proses Penelitian", access: "Publik", tab: "tatakelola" },
        { label: "Publikasi & Luaran", access: "Publik", tab: "luaran" },
        { label: "HKI & Rekognisi", access: "Publik", tab: "hki" },
        { label: "Laporan Penelitian Rinci", access: "Terbatas", tab: "laporan" },
      ],
    },
    pengabdian: {
      id: "Pengabdian",
      desc: "Tata kelola, luaran, dan dampak PkM bagi masyarakat.",
      href: "/pengabdian",
      items: [
        { label: "Renstra & Peta Jalan PkM", access: "Publik" },
        { label: "Pedoman & Kepakaran", access: "Publik" },
        { label: "Tata Kelola & Proses PkM", access: "Publik" },
        { label: "Luaran & Kemitraan", access: "Publik" },
        { label: "Rekognisi Kepakaran", access: "Publik" },
      ],
    },
    bpm: {
      id: "BPM",
      desc: "Badan Penjaminan Mutu: SPMI, AMI, SPME, SPI, dan PDDIKTI.",
      href: "/bpm",
      items: [
        { label: "Profil BPM", access: "Publik" },
        { label: "Dokumen SPMI", access: "Terbatas" },
        { label: "Monev & AMI", access: "Terbatas" },
        { label: "RTM & RTL", access: "Terbatas" },
        { label: "SPME / Akreditasi", access: "Publik" },
        { label: "SPI", access: "Terbatas" },
        { label: "PDDIKTI", access: "Publik" },
        { label: "Dashboard Mutu", access: "Publik" },
      ],
    },
  };

  const keysL = ["profil", "fakultas", "direktori", "gug"];
  const keysR = ["pendidikan", "penelitian", "pengabdian", "bpm"];

  const toggleMenu = (key) => {
    setOpen(open === key ? null : key);
  };

  const activeMega = open ? MENUS[open] : null;

  return (
    <header
      ref={headerRef}
      style={{
        background: "#FFFFFF",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      {/* Utility Bar Atas */}
      <div style={{ background: "#053B2C", color: "#E7F2EC", fontSize: "13px" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "8px 32px",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px 24px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#F2C230",
                }}
              ></span>
              Status akreditasi: Terakreditasi Unggul · BAN-PT
            </span>
            <span style={{ opacity: 0.55 }}>|</span>
            <span>Mataram, Nusa Tenggara Barat</span>
          </div>
          <div style={{ display: "flex", gap: "18px", alignItems: "center", flexWrap: "wrap" }}>
            <a href="#" style={{ color: "#E7F2EC", textDecoration: "none" }}>
              PMB 2027
            </a>
            <Link to="/ppid" style={{ color: "#E7F2EC", textDecoration: "none" }}>
              PPID
            </Link>
            <a href="#" style={{ color: "#E7F2EC", textDecoration: "none" }}>
              Kontak
            </a>
            <a href="#" style={{ color: "#E7F2EC", textDecoration: "none" }}>
              Aksesibilitas
            </a>
            <div
              role="group"
              aria-label="Bahasa"
              style={{
                display: "inline-flex",
                border: "1px solid rgba(231,242,236,.45)",
                borderRadius: "999px",
                overflow: "hidden",
              }}
            >
              <button
                aria-pressed="true"
                style={{
                  border: 0,
                  background: "#F2C230",
                  color: "#053B2C",
                  fontWeight: 700,
                  padding: "5px 12px",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                ID
              </button>
              <button
                aria-pressed="false"
                style={{
                  border: 0,
                  background: "transparent",
                  color: "#E7F2EC",
                  padding: "5px 12px",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Split Navigation Bar */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "10px 32px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <nav
          aria-label="Menu utama kiri"
          style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "4px", flexWrap: "wrap" }}
        >
          {keysL.map((k) => (
            <button
              key={k}
              onClick={() => toggleMenu(k)}
              aria-expanded={open === k}
              style={{
                border: 0,
                background: "transparent",
                padding: "10px 14px",
                fontSize: "15px",
                fontWeight: 700,
                color: "#13231C",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                borderBottom: open === k ? "3px solid #0A6B4F" : "3px solid transparent",
              }}
            >
              {MENUS[k].id}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A6B4F"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>
          ))}
        </nav>

        <Link
          to="/"
          onClick={() => setOpen(null)}
          aria-label="Beranda UNIZAR"
          style={{ display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}
        >
          <img
            src="/assets/img/unizar-logo.png"
            alt="Logo UNIZAR"
            style={{ width: "76px", height: "75px", objectFit: "contain" }}
          />
        </Link>

        <nav
          aria-label="Menu utama kanan"
          style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "4px", flexWrap: "wrap" }}
        >
          {keysR.map((k) => (
            <button
              key={k}
              onClick={() => toggleMenu(k)}
              aria-expanded={open === k}
              style={{
                border: 0,
                background: "transparent",
                padding: "10px 14px",
                fontSize: "15px",
                fontWeight: 700,
                color: "#13231C",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                borderBottom: open === k ? "3px solid #0A6B4F" : "3px solid transparent",
              }}
            >
              {MENUS[k].id}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A6B4F"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>
          ))}
        </nav>
      </div>

      <div style={{ height: "4px", background: "#F2C230" }}></div>
      <div style={{ height: "2px", background: "#C1272D" }}></div>

      {/* Mega Menu Dropdown */}
      {activeMega && (
        <div
          style={{
            background: "#FFFFFF",
            borderBottom: "1px solid #DCE6E0",
            boxShadow: "0 18px 30px rgba(5,59,44,.10)",
            position: "absolute",
            top: "100%",
            width: "100%",
            left: 0,
            zIndex: 1001,
          }}
        >
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              padding: "28px 32px 32px",
              display: "flex",
              flexWrap: "wrap",
              gap: "32px",
            }}
          >
            <div style={{ flex: "1 1 260px", maxWidth: "320px" }}>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  color: "#8A6500",
                  textTransform: "uppercase",
                }}
              >
                Jelajahi
              </div>
              <h2 style={{ margin: "8px 0 10px", fontSize: "28px", lineHeight: 1.15, color: "#064E3B" }}>
                {activeMega.id}
              </h2>
              <p style={{ margin: "0 0 16px", fontSize: "15px", lineHeight: 1.6, color: "#44574E" }}>
                {activeMega.desc}
              </p>
              <Link
                to={activeMega.href}
                state={{ tab: activeMega.defaultTab || (activeMega.items[0] && activeMega.items[0].tab) }}
                onClick={() => setOpen(null)}
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
                }}
              >
                Buka halaman →
              </Link>
            </div>
            <ul
              style={{
                flex: "999 1 600px",
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "6px 24px",
              }}
            >
              {activeMega.items.map((it, idx) => (
                <li key={idx} style={{ borderBottom: "1px solid #EEF3F0" }}>
                  <Link
                    to={activeMega.href}
                    state={{ tab: it.tab }}
                    onClick={() => setOpen(null)}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "10px",
                      padding: "12px 4px",
                      color: "#13231C",
                      textDecoration: "none",
                    }}
                  >
                    <span style={{ fontWeight: 600, fontSize: "15px" }}>{it.label}</span>
                    <span
                      style={{
                        flex: "none",
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: "999px",
                        background:
                          it.access === "Terbatas" ? "#FBE3E4" : it.access === "Ringkasan" ? "#FFF1C2" : "#E3F1EA",
                        color: it.access === "Terbatas" ? "#8E1B20" : it.access === "Ringkasan" ? "#6B4E00" : "#064E3B",
                      }}
                    >
                      {it.access}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
