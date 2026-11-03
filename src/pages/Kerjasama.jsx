import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";

export default function KerjaSama() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedScope, setSelectedScope] = useState("all");
  const [selectedField, setSelectedField] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const SCOPES = [
    { key: "all", label: "Semua Cakupan" },
    { key: "dn", label: "Kerjasama Dalam Negeri" },
    { key: "ln", label: "Kerjasama Luar Negeri" },
  ];

  const FIELDS = [
    { key: "all", label: "Semua Bidang" },
    { key: "Pendidikan", label: "Pendidikan" },
    { key: "Penelitian", label: "Penelitian" },
    { key: "Pengabdian", label: "Pengabdian" },
    { key: "Magang/MBKM", label: "Magang / MBKM" },
  ];

  const PARTNERSHIPS = [
    {
      code: "UNV",
      n: "[Universitas mitra, Malaysia]",
      loc: "Kuala Lumpur, Malaysia",
      sc: "ln",
      t: "MoA",
      f: "Pendidikan",
      until: "s.d. 2028",
      st: "done",
      sLabel: "Terealisasi",
      c: "#0A6B4F",
      url: "#",
    },
    {
      code: "UNV",
      n: "[Universitas mitra, Jepang]",
      loc: "Osaka, Jepang",
      sc: "ln",
      t: "MoU",
      f: "Penelitian",
      until: "s.d. 2027",
      st: "run",
      sLabel: "Berjalan",
      c: "#E8A33A",
      url: "#",
    },
    {
      code: "RS",
      n: "[Rumah sakit jejaring]",
      loc: "Mataram, NTB",
      sc: "dn",
      t: "PKS",
      f: "Pendidikan",
      until: "s.d. 2029",
      st: "done",
      sLabel: "Terealisasi",
      c: "#0A6B4F",
      url: "#",
    },
    {
      code: "PEM",
      n: "[Pemerintah Provinsi NTB]",
      loc: "Mataram, NTB",
      sc: "dn",
      t: "MoU",
      f: "Pengabdian",
      until: "s.d. 2027",
      st: "done",
      sLabel: "Terealisasi",
      c: "#0A6B4F",
      url: "#",
    },
    {
      code: "IND",
      n: "[Perusahaan mitra industri]",
      loc: "Lombok Tengah, NTB",
      sc: "dn",
      t: "MoA",
      f: "Magang/MBKM",
      until: "s.d. 2026",
      st: "run",
      sLabel: "Berjalan",
      c: "#E8A33A",
      url: "#",
    },
    {
      code: "UNV",
      n: "[Universitas mitra, Turki]",
      loc: "Istanbul, Turki",
      sc: "ln",
      t: "MoU",
      f: "Pendidikan",
      until: "s.d. 2026",
      st: "none",
      sLabel: "Belum ada kegiatan",
      c: "#C1272D",
      url: "#",
    },
    {
      code: "LSM",
      n: "[Lembaga swadaya masyarakat]",
      loc: "Lombok Timur, NTB",
      sc: "dn",
      t: "PKS",
      f: "Pengabdian",
      until: "s.d. 2027",
      st: "done",
      sLabel: "Terealisasi",
      c: "#0A6B4F",
      url: "#",
    },
    {
      code: "UNV",
      n: "[Perguruan tinggi nasional]",
      loc: "Yogyakarta",
      sc: "dn",
      t: "MoA",
      f: "Penelitian",
      until: "s.d. 2028",
      st: "run",
      sLabel: "Berjalan",
      c: "#E8A33A",
      url: "#",
    },
  ];

  const filteredData = useMemo(() => {
    return PARTNERSHIPS.filter((item) => {
      const matchScope = selectedScope === "all" || item.sc === selectedScope;
      const matchField = selectedField === "all" || item.f === selectedField;
      const matchSearch =
        item.n.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.loc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.t.toLowerCase().includes(searchQuery.toLowerCase());
      return matchScope && matchField && matchSearch;
    });
  }, [selectedScope, selectedField, searchQuery]);

  return (
    <div
      style={{
        background: "#F4F8F6",
        minHeight: "100vh",
        color: "#13231C",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      {/* Banner Header Hijau */}
      <section style={{ background: "#064E3B", color: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "22px 32px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <nav
            aria-label="Breadcrumb"
            style={{ fontSize: "13px", color: "#B7DCC9" }}
          >
            <Link to="/" style={{ color: "#B7DCC9", textDecoration: "none" }}>
              Beranda
            </Link>{" "}
            / <span style={{ color: "#FFFFFF" }}>Kerjasama</span>
          </nav>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div style={{ flex: "1 1 500px" }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: "40px",
                  lineHeight: 1.1,
                  fontWeight: 800,
                }}
              >
                Kerjasama & Kemitraan
              </h1>
            </div>

            {/* Metric Widgets */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "10px",
                minWidth: "520px",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "12px",
                  padding: "12px 14px",
                }}
              >
                <div style={{ fontSize: "22px", fontWeight: 800 }}>186</div>
                <div style={{ fontSize: "12px", color: "#D3EBDF" }}>
                  Mitra aktif
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "12px",
                  padding: "12px 14px",
                }}
              >
                <div style={{ fontSize: "22px", fontWeight: 800 }}>23</div>
                <div style={{ fontSize: "12px", color: "#D3EBDF" }}>
                  Luar negeri
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "12px",
                  padding: "12px 14px",
                }}
              >
                <div style={{ fontSize: "22px", fontWeight: 800 }}>81%</div>
                <div style={{ fontSize: "12px", color: "#D3EBDF" }}>
                  MoU terealisasi
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "12px",
                  padding: "12px 14px",
                }}
              >
                <div style={{ fontSize: "22px", fontWeight: 800 }}>312</div>
                <div style={{ fontSize: "12px", color: "#D3EBDF" }}>
                  Kegiatan 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "28px 32px 64px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Search & Filter Controls */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #DCE6E0",
            borderRadius: "16px",
            padding: "16px",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            type="search"
            placeholder="Cari nama mitra, lokasi, atau jenis dokumen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: "1 1 300px",
              height: "44px",
              border: "1.5px solid #B9CCC2",
              borderRadius: "10px",
              padding: "0 14px",
              fontSize: "14px",
              outline: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {SCOPES.map((sc) => {
              const isSel = selectedScope === sc.key;
              return (
                <button
                  key={sc.key}
                  type="button"
                  onClick={() => setSelectedScope(sc.key)}
                  style={{
                    border: "1.5px solid #064E3B",
                    background: isSel ? "#064E3B" : "#FFFFFF",
                    color: isSel ? "#FFFFFF" : "#064E3B",
                    borderRadius: "999px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {sc.label}
                </button>
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              gap: "6px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {FIELDS.map((fd) => {
              const isSel = selectedField === fd.key;
              return (
                <button
                  key={fd.key}
                  type="button"
                  onClick={() => setSelectedField(fd.key)}
                  style={{
                    border: "1.5px solid #B9CCC2",
                    background: isSel ? "#E3F1EA" : "#FFFFFF",
                    color: isSel ? "#064E3B" : "#44574E",
                    borderRadius: "999px",
                    padding: "7px 14px",
                    fontSize: "12px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {fd.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Table Kerjasama */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #DCE6E0",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "900px",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "#F4F8F6",
                    textAlign: "left",
                    color: "#44574E",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                  }}
                >
                  <th style={{ padding: "14px 16px" }}>Mitra</th>
                  <th style={{ padding: "14px 12px" }}>Jenis</th>
                  <th style={{ padding: "14px 12px" }}>Bidang</th>
                  <th style={{ padding: "14px 12px" }}>Masa berlaku</th>
                  <th style={{ padding: "14px 12px" }}>Realisasi</th>
                  <th style={{ padding: "14px 16px", textAlign: "right" }}>
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((r, i) => (
                    <tr key={i} style={{ borderTop: "1px solid #EEF3F0" }}>
                      <td style={{ padding: "14px 16px" }}>
                        <div
                          style={{
                            display: "flex",
                            gap: "12px",
                            alignItems: "center",
                          }}
                        >
                          <span
                            style={{
                              flex: "none",
                              width: "40px",
                              height: "40px",
                              borderRadius: "10px",
                              background: "#F4F8F6",
                              border: "1px solid #DCE6E0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "11px",
                              fontWeight: 800,
                              color: "#44574E",
                            }}
                          >
                            {r.code}
                          </span>
                          <span
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span style={{ fontWeight: 700 }}>{r.n}</span>
                            <span
                              style={{ fontSize: "12px", color: "#44574E" }}
                            >
                              {r.loc}
                            </span>
                          </span>
                        </div>
                      </td>
                      <td style={{ padding: "14px 12px", fontWeight: 700 }}>
                        {r.t}
                      </td>
                      <td style={{ padding: "14px 12px" }}>{r.f}</td>
                      <td
                        style={{
                          padding: "14px 12px",
                          fontSize: "13px",
                          color: "#2B3D35",
                        }}
                      >
                        {r.until}
                      </td>
                      <td style={{ padding: "14px 12px" }}>
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
                              background: r.c,
                            }}
                          ></span>
                          {r.sLabel}
                        </span>
                      </td>
                      {/* UKURAN BUTTON DISAMAKAN DENGAN HALAMAN LAYANAN & ORANG (PADDING: 10px 18px, RADIUS: 14px) */}
                      <td style={{ padding: "14px 16px", textAlign: "right" }}>
                        <a
                          href={r.url}
                          style={{
                            display: "inline-block",
                            background: "#064E3B",
                            color: "#FFFFFF",
                            textDecoration: "none",
                            borderRadius: "14px",
                            padding: "10px 18px",
                            fontSize: "14px",
                            fontWeight: 700,
                            boxSizing: "border-box",
                          }}
                        >
                          Detail Dokumen →
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      style={{
                        padding: "32px",
                        textAlign: "center",
                        color: "#44574E",
                      }}
                    >
                      Tidak ada data kerjasama yang sesuai dengan pencarian
                      Anda.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div
            style={{
              padding: "14px 16px",
              borderTop: "1px solid #EEF3F0",
              fontSize: "13px",
              color: "#44574E",
            }}
          >
            Menampilkan {filteredData.length} kerjasama. Klik tombol aksi untuk
            melihat bukti realisasi publik.
          </div>
        </div>

        {/* Section Pengajuan Kerjasama Baru */}
        <section
          style={{
            background: "#064E3B",
            color: "#FFFFFF",
            borderRadius: "18px",
            padding: "28px",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1 1 480px" }}>
            <h2 style={{ margin: "0 0 6px", fontSize: "22px" }}>
              Ingin bermitra dengan UNIZAR?
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.6,
                color: "#D3EBDF",
              }}
            >
              Ajukan kerjasama pendidikan, penelitian, pengabdian, atau magang.
              Tim kerjasama merespons dalam 5 hari kerja.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            <a
              href="#"
              style={{
                background: "#064E3B",
                border: "1.5px solid #D3EBDF",
                color: "#FFFFFF",
                padding: "10px 18px",
                borderRadius: "14px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Ajukan Kerjasama →
            </a>
            <a
              href="#"
              style={{
                background: "#064E3B",
                border: "1.5px solid #D3EBDF",
                color: "#FFFFFF",
                padding: "10px 18px",
                borderRadius: "14px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Pedoman Kerjasama (PDF) →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
