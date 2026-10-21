import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TransparansiPpid() {
  const [activeCat, setActiveCat] = useState("berkala");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const CAT_DATA = {
    berkala: {
      label: "Berkala",
      desc: "Informasi yang wajib diumumkan secara berkala, sekurang-kurangnya setiap 6 bulan sekali.",
      items: [
        {
          n: "Profil, struktur organisasi & pimpinan",
          m: "Profil · Ind. 24",
          a: "Lihat / unduh",
          c: "#0A6B4F",
          h: "#",
        },
        {
          n: "Renstra & laporan kinerja (ringkasan)",
          m: "Profil · Ind. 36, 37",
          a: "Lihat / unduh",
          c: "#0A6B4F",
          h: "#",
        },
        {
          n: "Ikhtisar laporan keuangan teraudit",
          m: "GUG · Ind. 35",
          a: "Lihat / unduh",
          c: "#0A6B4F",
          h: "#",
        },
        {
          n: "Laporan tahunan (ringkasan)",
          m: "GUG · Ind. 28A",
          a: "Lihat / unduh",
          c: "#0A6B4F",
          h: "#",
        },
        {
          n: "Laporan layanan informasi publik",
          m: "PPID",
          a: "Lihat / unduh",
          c: "#0A6B4F",
          h: "#",
        },
      ],
    },
    sertamerta: {
      label: "Serta-merta",
      desc: "Informasi yang dapat mengancam hajat hidup orang banyak dan ketertiban umum, diumumkan tanpa penundaan.",
      items: [
        {
          n: "Peringatan dini bencana & prosedur evakuasi",
          m: "Sarpras & K3 · Ind. 8B",
          a: "Lihat / unduh",
          c: "#0A6B4F",
          h: "#",
        },
        {
          n: "Pengumuman darurat kesehatan kampus",
          m: "Layanan kesehatan",
          a: "Lihat / unduh",
          c: "#0A6B4F",
          h: "#",
        },
        {
          n: "Gangguan layanan sistem kritikal",
          m: "Status sistem · Ind. 26",
          a: "Lihat / unduh",
          c: "#0A6B4F",
          h: "#",
        },
      ],
    },
    setiapsaat: {
      label: "Setiap saat",
      desc: "Informasi yang tersedia dan dapat diminta kapan saja.",
      items: [
        {
          n: "Statuta, peraturan & SK pimpinan",
          m: "Pusat Dokumen",
          a: "Lihat / unduh",
          c: "#0A6B4F",
          h: "/direktori",
        },
        {
          n: "Pedoman akademik & kalender",
          m: "Pendidikan",
          a: "Lihat / unduh",
          c: "#0A6B4F",
          h: "#",
        },
        {
          n: "Daftar kerjasama & realisasi",
          m: "Kerjasama · Ind. 16–21",
          a: "Lihat / unduh",
          c: "#0A6B4F",
          h: "/kerjasama",
        },
        {
          n: "Kebijakan PMB & biaya pendidikan",
          m: "Pendidikan · Ind. 31",
          a: "Lihat / unduh",
          c: "#0A6B4F",
          h: "#",
        },
        {
          n: "Hasil survei kepuasan (ringkasan)",
          m: "GUG · Ind. 34",
          a: "Lihat / unduh",
          c: "#0A6B4F",
          h: "#",
        },
      ],
    },
    dikecualikan: {
      label: "Dikecualikan",
      desc: "Informasi yang dikecualikan berdasarkan uji konsekuensi — dapat diakses terbatas oleh pihak berwenang (mis. asesor) melalui login.",
      items: [
        {
          n: "Data pribadi mahasiswa, dosen & tendik",
          m: "Perlindungan data pribadi",
          a: "Dikecualikan",
          c: "#8E1B20",
          h: "#",
        },
        {
          n: "Laporan audit internal rinci",
          m: "SPI / BPM",
          a: "Dikecualikan",
          c: "#8E1B20",
          h: "#",
        },
        {
          n: "Laporan keuangan rinci & RKAT",
          m: "Biro Keuangan",
          a: "Dikecualikan",
          c: "#8E1B20",
          h: "#",
        },
        {
          n: "Identitas pelapor WBS & PPKS",
          m: "Kerahasiaan pelapor",
          a: "Dikecualikan",
          c: "#8E1B20",
          h: "#",
        },
      ],
    },
  };

  const FLOW_ITEMS = [
    {
      n: "01",
      t: "Ajukan",
      d: "Isi formulir daring dengan identitas & rincian informasi.",
    },
    { n: "02", t: "Registrasi", d: "Nomor permohonan dikirim ke email Anda." },
    {
      n: "03",
      t: "Proses",
      d: "PPID berkoordinasi dengan unit pemilik informasi.",
    },
    {
      n: "04",
      t: "Jawaban",
      d: "Paling lambat 10 hari kerja, dapat diperpanjang 7 hari.",
    },
    {
      n: "05",
      t: "Keberatan",
      d: "Jika tidak puas, ajukan keberatan ke atasan PPID.",
    },
  ];

  const currentCat = CAT_DATA[activeCat];

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        color: "#13231C",
        background: "#F4F8F6",
        minHeight: "100vh",
      }}
    >
      {/* Header Banner Hijau */}
      <section style={{ background: "#064E3B", color: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "22px 32px 34px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <nav
            aria-label="Breadcrumb"
            style={{ fontSize: "13px", color: "#B7DCC9" }}
          >
            <Link to="/" style={{ color: "#B7DCC9", textDecoration: "none" }}>
              Beranda
            </Link>{" "}
            / Pusat Akreditasi /{" "}
            <span style={{ color: "#FFFFFF", fontWeight: 600 }}>
              Transparansi & PPID
            </span>
          </nav>
          <h1
            style={{
              margin: 0,
              fontSize: "38px",
              color: "#FFFFFF",
              fontWeight: 800,
            }}
          >
            Transparansi & Layanan Informasi Publik
          </h1>
        </div>
      </section>

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "26px 32px 64px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Top Hero Section */}
        <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <div
            style={{
              flex: "3 1 560px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "16px",
                lineHeight: 1.6,
                color: "#2B3D35",
                maxWidth: "700px",
              }}
            >
              Pejabat Pengelola Informasi dan Dokumentasi (PPID) UNIZAR melayani
              permohonan informasi publik. Kami terbuka secara default dan hanya
              mengecualikan informasi yang dilindungi peraturan.
            </p>

            {/* Tombol Aksi Seragam Style Kapsul */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                flexWrap: "wrap",
                marginTop: "4px",
              }}
            >
              <a
                href="#"
                style={{
                  background: "#064E3B",
                  color: "#FFFFFF",
                  padding: "10px 20px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  fontSize: "14px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Ajukan permohonan informasi
              </a>
              <a
                href="#"
                style={{
                  border: "1.5px solid #064E3B",
                  background: "#FFFFFF",
                  color: "#064E3B",
                  padding: "10px 20px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  fontSize: "14px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Ajukan keberatan
              </a>
              <a
                href="#"
                style={{
                  border: "1.5px solid #064E3B",
                  background: "#FFFFFF",
                  color: "#064E3B",
                  padding: "10px 20px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  fontSize: "14px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Lacak permohonan →
              </a>
            </div>
          </div>

          {/* Metric Stats */}
          <div
            style={{
              flex: "2 1 380px",
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "12px",
            }}
          >
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "14px",
                padding: "18px",
              }}
            >
              <div
                style={{ fontSize: "13px", color: "#44574E", fontWeight: 600 }}
              >
                Permohonan 2025
              </div>
              <div
                style={{ fontSize: "30px", fontWeight: 800, color: "#064E3B" }}
              >
                148
              </div>
            </div>
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "14px",
                padding: "18px",
              }}
            >
              <div
                style={{ fontSize: "13px", color: "#44574E", fontWeight: 600 }}
              >
                Dipenuhi
              </div>
              <div
                style={{ fontSize: "30px", fontWeight: 800, color: "#064E3B" }}
              >
                94%
              </div>
            </div>
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "14px",
                padding: "18px",
              }}
            >
              <div
                style={{ fontSize: "13px", color: "#44574E", fontWeight: 600 }}
              >
                Rata-rata waktu
              </div>
              <div
                style={{ fontSize: "30px", fontWeight: 800, color: "#064E3B" }}
              >
                4 hari
              </div>
            </div>
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "14px",
                padding: "18px",
              }}
            >
              <div
                style={{ fontSize: "13px", color: "#44574E", fontWeight: 600 }}
              >
                Keberatan
              </div>
              <div
                style={{ fontSize: "30px", fontWeight: 800, color: "#064E3B" }}
              >
                3
              </div>
            </div>
          </div>
        </section>

        {/* Tabbed List Section */}
        <section
          aria-labelledby="h-dip"
          style={{
            background: "#FFFFFF",
            border: "1px solid #DCE6E0",
            borderRadius: "18px",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "22px 26px 0" }}>
            <h2
              id="h-dip"
              style={{
                margin: "0 0 14px",
                fontSize: "22px",
                color: "#064E3B",
                fontWeight: 800,
              }}
            >
              Daftar Informasi Publik
            </h2>
            <div
              role="tablist"
              aria-label="Kategori informasi"
              style={{
                display: "flex",
                gap: "4px",
                flexWrap: "wrap",
                borderBottom: "1px solid #DCE6E0",
              }}
            >
              {Object.keys(CAT_DATA).map((key) => {
                const isSel = activeCat === key;
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={isSel}
                    onClick={() => setActiveCat(key)}
                    style={{
                      border: 0,
                      background: "transparent",
                      padding: "12px 16px",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: isSel ? "#064E3B" : "#44574E",
                      borderBottom: isSel
                        ? "3px solid #0A6B4F"
                        : "3px solid transparent",
                      cursor: "pointer",
                      minHeight: "46px",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  >
                    {CAT_DATA[key].label}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            style={{
              padding: "18px 26px 26px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "14px",
                color: "#44574E",
                lineHeight: 1.55,
              }}
            >
              {currentCat.desc}
            </p>
            {currentCat.items.map((it, idx) => (
              <div
                key={idx}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 180px 140px",
                  gap: "14px",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "1px solid #EEF3F0",
                  fontSize: "14px",
                }}
              >
                <span style={{ fontWeight: 700, color: "#13231C" }}>
                  {it.n}
                </span>
                <span style={{ color: "#44574E", fontSize: "13px" }}>
                  {it.m}
                </span>
                {it.h.startsWith("/") ? (
                  <Link
                    to={it.h}
                    style={{
                      textAlign: "right",
                      fontWeight: 700,
                      color: it.c,
                      textDecoration: "none",
                    }}
                  >
                    {it.a} →
                  </Link>
                ) : (
                  <a
                    href={it.h}
                    style={{
                      textAlign: "right",
                      fontWeight: 700,
                      color: it.c,
                      textDecoration: "none",
                    }}
                  >
                    {it.a}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Flow & Policy Cards */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {/* Alur Permohonan */}
          <section
            aria-labelledby="h-alur"
            style={{
              flex: "3 1 560px",
              background: "#FFFFFF",
              border: "1px solid #DCE6E0",
              borderRadius: "18px",
              padding: "26px",
            }}
          >
            <h2
              id="h-alur"
              style={{
                margin: "0 0 16px",
                fontSize: "22px",
                color: "#064E3B",
                fontWeight: 800,
              }}
            >
              Alur Perhitungan / Permohonan Informasi
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                gap: "10px",
              }}
            >
              {FLOW_ITEMS.map((f, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#F4F8F6",
                    borderRadius: "14px",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    borderTop: "4px solid #0A6B4F",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "#0A6B4F",
                    }}
                  >
                    {f.n}
                  </span>
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: "15px",
                      color: "#13231C",
                    }}
                  >
                    {f.t}
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#44574E",
                      lineHeight: 1.5,
                    }}
                  >
                    {f.d}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Policy Box */}
          <section
            aria-labelledby="h-priv"
            style={{
              flex: "2 1 380px",
              background: "#064E3B",
              color: "#FFFFFF",
              borderRadius: "18px",
              padding: "26px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <h2
              id="h-priv"
              style={{ margin: 0, fontSize: "20px", fontWeight: 800 }}
            >
              Kebijakan Privasi & Klasifikasi Dokumen
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: 1.6,
                color: "#D3EBDF",
              }}
            >
              Payung kebijakan untuk seluruh label di website: kapan dokumen
              dibuka penuh, kapan hanya ringkasan, dan kapan dibatasi demi
              perlindungan data pribadi atau kepentingan strategis.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: "999px",
                  background: "#E3F1EA",
                  color: "#064E3B",
                }}
              >
                Publik
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: "999px",
                  background: "#FFF1C2",
                  color: "#6B4E00",
                }}
              >
                Ringkasan
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: "999px",
                  background: "#FBE3E4",
                  color: "#8E1B20",
                }}
              >
                Terbatas
              </span>
            </div>
            <Link
              to="/direktori"
              state={{ tab: "dokumen" }}
              style={{
                color: "#F2C230",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                marginTop: "4px",
              }}
            >
              Baca kebijakan klasifikasi →
            </Link>
            <a
              href="#"
              style={{
                color: "#F2C230",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Kebijakan privasi website →
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
