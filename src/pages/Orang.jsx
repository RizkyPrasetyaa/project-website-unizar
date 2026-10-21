import React, { useEffect, useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Orang() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Default tab ke 'pimpinan'
  const activeTab = searchParams.get("tab") || "pimpinan";

  // State Filter & Search Dosen
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("all");
  const [selectedJad, setSelectedJad] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const TABS = [
    { id: "pimpinan", label: "Pimpinan" },
    { id: "dosen", label: "Dosen & Kepakaran" },
    { id: "tendik", label: "Tenaga Kependidikan" },
    { id: "renstra", label: "Renstra & Pengembangan SDM" },
  ];

  const LEADERS = [
    { r: "REKTOR", n: "[Nama & gelar]", p: "Universitas Islam Al-Azhar" },
    { r: "WAKIL REKTOR I", n: "[Nama & gelar]", p: "[Bidang]" },
    { r: "WAKIL REKTOR II", n: "[Nama & gelar]", p: "[Bidang]" },
    { r: "WAKIL REKTOR III", n: "[Nama & gelar]", p: "[Bidang]" },
    { r: "KETUA YAYASAN", n: "[Nama & gelar]", p: "Badan Penyelenggara" },
    { r: "KEPALA BPM", n: "[Nama & gelar]", p: "Badan Penjaminan Mutu" },
    { r: "KETUA LPPM", n: "[Nama & gelar]", p: "Penelitian & Pengabdian" },
    { r: "KEPALA SPI", n: "[Nama & gelar]", p: "Satuan Pengawasan Internal" },
  ];

  const ALL_DOSEN = [
    {
      n: "[Nama dosen 1]",
      f: "[Fakultas] · [Bidang keahlian]",
      j: "Guru Besar",
      e: "Doktor",
      rawF: "Fakultas Kedokteran",
    },
    {
      n: "[Nama dosen 2]",
      f: "[Fakultas] · [Bidang keahlian]",
      j: "Lektor Kepala",
      e: "Doktor",
      rawF: "Fakultas Hukum",
    },
    {
      n: "[Nama dosen 3]",
      f: "[Fakultas] · [Bidang keahlian]",
      j: "Lektor Kepala",
      e: "Spesialis",
      rawF: "Fakultas Teknik",
    },
    {
      n: "[Nama dosen 4]",
      f: "[Fakultas] · [Bidang keahlian]",
      j: "Lektor",
      e: "Doktor",
      rawF: "Fakultas Pertanian",
    },
    {
      n: "[Nama dosen 5]",
      f: "[Fakultas] · [Bidang keahlian]",
      j: "Lektor",
      e: "Magister",
      rawF: "Fakultas Ekonomi",
    },
    {
      n: "[Nama dosen 6]",
      f: "[Fakultas] · [Bidang keahlian]",
      j: "Lektor",
      e: "Magister",
      rawF: "Fakultas Ekonomi",
    },
    {
      n: "[Nama dosen 7]",
      f: "[Fakultas] · [Bidang keahlian]",
      j: "Asisten Ahli",
      e: "Magister",
      rawF: "Fakultas Agama Islam",
    },
    {
      n: "[Nama dosen 8]",
      f: "[Fakultas] · [Bidang keahlian]",
      j: "Lektor",
      e: "Doktor",
      rawF: "Fakultas Kedokteran",
    },
    {
      n: "[Nama dosen 9]",
      f: "[Fakultas] · [Bidang keahlian]",
      j: "Lektor Kepala",
      e: "Doktor",
      rawF: "Fakultas Hukum",
    },
  ];

  const JAD_STATS = [
    { l: "Guru Besar", v: "4%", w: "4%" },
    { l: "Lektor Kepala", v: "30%", w: "30%" },
    { l: "Lektor", v: "41%", w: "41%" },
    { l: "Asisten Ahli", v: "19%", w: "19%" },
    { l: "Belum JAD", v: "6%", w: "6%" },
  ];

  const TENDIK_STATS = [
    { l: "Administrasi", v: "98" },
    { l: "Pustakawan", v: "14" },
    { l: "Laboran / teknisi", v: "52" },
    { l: "Pranata TI", v: "18" },
    { l: "Lainnya", v: "54" },
  ];

  // Teks aksi diseragamkan dengan panah ->
  const SDM_DOCS = [
    {
      n: "Renstra SDM 2025–2029",
      b: "Publik",
      bg: "#E3F1EA",
      fg: "#064E3B",
      actionText: "Unduh PDF →",
      url: "#",
    },
    {
      n: "Analisis Kebutuhan & Kecukupan Dosen",
      b: "Ringkasan",
      bg: "#FFF1C2",
      fg: "#6B4E00",
      actionText: "Lihat Ringkasan →",
      url: "#",
    },
    {
      n: "Juknis Pembinaan Karir Dosen",
      b: "Publik",
      bg: "#E3F1EA",
      fg: "#064E3B",
      actionText: "Unduh Juknis →",
      url: "#",
    },
    {
      n: "Rencana Studi Lanjut & Sertifikasi",
      b: "Publik",
      bg: "#E3F1EA",
      fg: "#064E3B",
      actionText: "Unduh Berkas →",
      url: "#",
    },
    {
      n: "Analisis Beban Kerja Tendik",
      b: "Ringkasan",
      bg: "#FFF1C2",
      fg: "#6B4E00",
      actionText: "Lihat Ringkasan →",
      url: "#",
    },
    {
      n: "Data Pribadi Pegawai",
      b: "Terbatas",
      bg: "#FBE3E4",
      fg: "#8E1B20",
      actionText: "Masuk untuk membuka →",
      url: "#",
    },
  ];

  const filteredDosen = useMemo(() => {
    return ALL_DOSEN.filter((d) => {
      const matchFaculty =
        selectedFaculty === "all" || d.rawF === selectedFaculty;
      const matchJad = selectedJad === "all" || d.j === selectedJad;
      const matchSearch =
        d.n.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.f.toLowerCase().includes(searchQuery.toLowerCase());
      return matchFaculty && matchJad && matchSearch;
    });
  }, [selectedFaculty, selectedJad, searchQuery]);

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
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "22px 32px 0",
          }}
        >
          <nav
            aria-label="Breadcrumb"
            style={{ fontSize: "13px", color: "#B7DCC9" }}
          >
            <Link to="/" style={{ color: "#B7DCC9", textDecoration: "none" }}>
              Beranda
            </Link>{" "}
            / <span style={{ color: "#FFFFFF" }}>Orang</span>
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
            <div style={{ flex: "1 1 520px" }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: "40px",
                  lineHeight: 1.1,
                  fontWeight: 800,
                }}
              >
                Orang di UNIZAR
              </h1>
            </div>

            {/* Metric Widgets */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "10px",
                minWidth: "420px",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "12px",
                  padding: "12px 14px",
                }}
              >
                <div style={{ fontSize: "24px", fontWeight: 800 }}>412</div>
                <div style={{ fontSize: "12px", color: "#D3EBDF" }}>
                  Dosen tetap
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "12px",
                  padding: "12px 14px",
                }}
              >
                <div style={{ fontSize: "24px", fontWeight: 800 }}>34%</div>
                <div style={{ fontSize: "12px", color: "#D3EBDF" }}>
                  LK & GB
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "12px",
                  padding: "12px 14px",
                }}
              >
                <div style={{ fontSize: "24px", fontWeight: 800 }}>236</div>
                <div style={{ fontSize: "12px", color: "#D3EBDF" }}>Tendik</div>
              </div>
            </div>
          </div>

          {/* Tab Menu Navigation */}
          <div
            role="tablist"
            aria-label="Sub-menu orang"
            style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}
          >
            {TABS.map((tb) => {
              const isSel = activeTab === tb.id;
              return (
                <button
                  key={tb.id}
                  role="tab"
                  aria-selected={isSel}
                  onClick={() => setSearchParams({ tab: tb.id })}
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
                  {tb.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "28px 32px 64px",
        }}
      >
        {/* TAB PIMPINAN */}
        {activeTab === "pimpinan" && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "14px",
              }}
            >
              {LEADERS.map((l, i) => (
                <div
                  key={i}
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
                      height: "180px",
                      background: "#D3EBDF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0A6B4F",
                      fontSize: "12px",
                    }}
                  >
                    [Foto resmi]
                  </div>
                  <div
                    style={{
                      padding: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        letterSpacing: ".06em",
                        color: "#8A6500",
                      }}
                    >
                      {l.r}
                    </span>
                    <span style={{ fontSize: "16px", fontWeight: 800 }}>
                      {l.n}
                    </span>
                    <span style={{ fontSize: "13px", color: "#44574E" }}>
                      {l.p}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#"
              style={{ fontSize: "14px", fontWeight: 700, color: "#0A6B4F" }}
            >
              SK pengangkatan pimpinan & struktur organisasi →
            </a>
          </div>
        )}

        {/* TAB DOSEN & KEPAKARAN */}
        {activeTab === "dosen" && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE6E0",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  flex: "3 1 320px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <label
                  htmlFor="o-q"
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#44574E",
                  }}
                >
                  Nama atau bidang keahlian
                </label>
                <input
                  id="o-q"
                  type="search"
                  placeholder="mis. kedokteran kerja, hukum pidana, agribisnis"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    height: "46px",
                    border: "1.5px solid #B9CCC2",
                    borderRadius: "10px",
                    padding: "0 14px",
                    fontSize: "15px",
                    outline: "none",
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 180px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <label
                  htmlFor="o-f"
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#44574E",
                  }}
                >
                  Fakultas
                </label>
                <select
                  id="o-f"
                  value={selectedFaculty}
                  onChange={(e) => setSelectedFaculty(e.target.value)}
                  style={{
                    height: "46px",
                    border: "1.5px solid #B9CCC2",
                    borderRadius: "10px",
                    padding: "0 12px",
                    fontSize: "15px",
                    background: "#FFFFFF",
                  }}
                >
                  <option value="all">Semua fakultas</option>
                  <option value="Fakultas Kedokteran">
                    Fakultas Kedokteran
                  </option>
                  <option value="Fakultas Hukum">Fakultas Hukum</option>
                  <option value="Fakultas Teknik">Fakultas Teknik</option>
                  <option value="Fakultas Pertanian">Fakultas Pertanian</option>
                  <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                  <option value="Fakultas Agama Islam">
                    Fakultas Agama Islam
                  </option>
                </select>
              </div>
              <div
                style={{
                  flex: "1 1 180px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <label
                  htmlFor="o-j"
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#44574E",
                  }}
                >
                  Jabatan akademik
                </label>
                <select
                  id="o-j"
                  value={selectedJad}
                  onChange={(e) => setSelectedJad(e.target.value)}
                  style={{
                    height: "46px",
                    border: "1.5px solid #B9CCC2",
                    borderRadius: "10px",
                    padding: "0 12px",
                    fontSize: "15px",
                    background: "#FFFFFF",
                  }}
                >
                  <option value="all">Semua</option>
                  <option value="Guru Besar">Guru Besar</option>
                  <option value="Lektor Kepala">Lektor Kepala</option>
                  <option value="Lektor">Lektor</option>
                  <option value="Asisten Ahli">Asisten Ahli</option>
                </select>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flex: "999 1 640px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "12px",
                }}
              >
                {filteredDosen.map((d, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #DCE6E0",
                      borderRadius: "14px",
                      padding: "16px",
                      display: "flex",
                      gap: "12px",
                      textDecoration: "none",
                      color: "#13231C",
                    }}
                  >
                    <span
                      style={{
                        flex: "none",
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        background: "#D3EBDF",
                      }}
                    ></span>
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "3px",
                      }}
                    >
                      <span style={{ fontWeight: 800, fontSize: "15px" }}>
                        {d.n}
                      </span>
                      <span style={{ fontSize: "12px", color: "#44574E" }}>
                        {d.f}
                      </span>
                      <span
                        style={{
                          display: "flex",
                          gap: "6px",
                          flexWrap: "wrap",
                          marginTop: "2px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 700,
                            padding: "2px 8px",
                            borderRadius: "999px",
                            background: "#E3F1EA",
                            color: "#064E3B",
                          }}
                        >
                          {d.j}
                        </span>
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
                          {d.e}
                        </span>
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "#0A6B4F",
                          marginTop: "2px",
                        }}
                      >
                        SINTA · Scholar · Scopus ↗
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <aside
                style={{
                  flex: "1 1 300px",
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div style={{ fontSize: "14px", fontWeight: 800 }}>
                  Komposisi jabatan akademik
                </div>
                {JAD_STATS.map((j, i) => (
                  <div
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "110px 1fr 40px",
                      gap: "10px",
                      alignItems: "center",
                      fontSize: "13px",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{j.l}</span>
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
                          width: j.w,
                          background: "#0A6B4F",
                        }}
                      ></span>
                    </span>
                    <span style={{ fontWeight: 800, textAlign: "right" }}>
                      {j.v}
                    </span>
                  </div>
                ))}
                <span style={{ fontSize: "12px", color: "#44574E" }}>
                  Sumber: PD Dikti · data simulasi. Data pribadi tidak
                  ditampilkan.
                </span>
              </aside>
            </div>
          </div>
        )}

        {/* TAB TENAGA KEPENDIDIKAN */}
        {activeTab === "tendik" && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                gap: "12px",
              }}
            >
              {TENDIK_STATS.map((t, i) => (
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
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#44574E",
                    }}
                  >
                    {t.l}
                  </span>
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: 800,
                      color: "#064E3B",
                    }}
                  >
                    {t.v}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#"
              style={{ fontSize: "14px", fontWeight: 700, color: "#0A6B4F" }}
            >
              Direktori unit & kontak layanan →
            </a>
          </div>
        )}

        {/* TAB RENSTRA SDM - BENTUK & WARNA BUTTON PRESISI DENGAN SCREENSHOT */}
        {activeTab === "renstra" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "12px",
            }}
          >
            {SDM_DOCS.map((d, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #DCE6E0",
                  borderRadius: "14px",
                  padding: "18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
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
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#13231C",
                    }}
                  >
                    {d.n}
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
                      alignSelf: "flex-start",
                    }}
                  >
                    {d.b}
                  </span>
                </div>

                {/* Tombol dengan Warna #0A6B4F, Border Radius 12px Melengkung Halus & Posisi Kanan */}
                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <a
                    href={d.url}
                    style={{
                      display: "inline-block",
                      background: "#0A6B4F",
                      color: "#FFFFFF",
                      padding: "10px 18px",
                      borderRadius: "12px",
                      fontSize: "14px",
                      fontWeight: 700,
                      textDecoration: "none",
                      boxSizing: "border-box",
                    }}
                  >
                    {d.actionText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
