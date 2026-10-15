import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  // State untuk accordion menu samping
  const [sideOpen, setSideOpen] = useState({
    layanan: true,
    orang: false,
    kerjasama: false,
    mhs: false
  });

  const toggleSide = (key) => {
    setSideOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Data Menu Samping
  const sideGroups = [
    {
      k: 'layanan',
      mono: 'Ly',
      label: 'Layanan',
      href: '/pusat-dokumen',
      items: ['SIAKAD & Layanan Akademik', 'E-Learning / LMS', 'Perpustakaan Digital', 'Layanan TIK & Helpdesk', 'Sarpras & K3', 'Layanan Informasi Publik']
    },
    {
      k: 'orang',
      mono: 'Or',
      label: 'Orang',
      href: '/orang',
      items: ['Pimpinan Universitas', 'Dosen & Kepakaran', 'Tenaga Kependidikan', 'Renstra SDM']
    },
    {
      k: 'kerjasama',
      mono: 'Ks',
      label: 'Kerjasama',
      href: '/pusat-dokumen',
      items: ['Kerjasama Dalam Negeri', 'Kerjasama Luar Negeri', 'MoU/MoA & Realisasi']
    },
    {
      k: 'mhs',
      mono: 'Mh',
      label: 'Kemahasiswaan & Alumni',
      href: '/pendidikan',
      items: ['Layanan Mahasiswa', 'Prestasi Mahasiswa', 'Tracer Study & Kepuasan Pengguna', 'Ikatan Alumni & Karir']
    }
  ];

  // Data Akreditasi Prodi
  const akr = [
    { n: '12', label: 'Unggul', pct: '40,0%', c: '#0A6B4F' },
    { n: '9', label: 'Baik Sekali', pct: '30,0%', c: '#3A9B76' },
    { n: '6', label: 'Baik', pct: '20,0%', c: '#F2C230' },
    { n: '3', label: 'Terakreditasi / Sementara', pct: '10,0%', c: '#C1272D' }
  ];

  // Data Dashboard Kinerja (KPI) - Tanpa Tag Indikator
  const kpi = [
    { label: 'Rasio dosen : mahasiswa', v: '1 : 22', w: '70%', trend: 'Membaik dari 1 : 27' },
    { label: 'Dosen Lektor Kepala & GB', v: '34%', w: '34%', trend: '+6 poin dalam 3 tahun' },
    { label: 'Lulus tepat waktu', v: '78%', w: '78%', trend: 'Rata-rata 3 tahun' },
    { label: 'Masa tunggu kerja', v: '4,1 bln', w: '60%', trend: 'Tracer study 2025' },
    { label: 'Publikasi bereputasi (3 th)', v: '214', w: '64%', trend: 'Scopus/WoS & Sinta 1–2' },
    { label: 'HKI tercatat (3 th)', v: '57', w: '48%', trend: 'Paten, hak cipta, desain' }
  ];

  // Data Berita & Agenda
  const news = [
    { cat: 'Penjaminan Mutu', title: 'BPM gelar Audit Mutu Internal siklus 2026 di seluruh fakultas', date: '08 Okt 2026' },
    { cat: 'Penelitian', title: 'Dosen UNIZAR raih hibah riset kolaborasi internasional', date: '02 Okt 2026' },
    { cat: 'Kemahasiswaan', title: 'Mahasiswa juara tingkat nasional pada kompetisi ilmiah', date: '27 Sep 2026' }
  ];

  const agenda = [
    { d: '20', m: 'OKT', title: 'Rapat Tinjauan Manajemen (RTM)' },
    { d: '28', m: 'OKT', title: 'Survei kepuasan pemangku kepentingan dibuka' },
    { d: '05', m: 'NOV', title: 'Pelatihan auditor internal SPMI' },
    { d: '18', m: 'NOV', title: 'Wisuda Periode II 2026' }
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", color: '#13231C', background: '#F4F8F6', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '28px 32px 56px', display: 'flex', flexWrap: 'wrap', gap: '28px', alignItems: 'flex-start' }}>
        
        {/* ================= LEFT SIDEBAR (WAJIB SAMANYA) ================= */}
        <aside aria-label="Menu samping" style={{ flex: '1 1 260px', maxWidth: '290px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Tombol Login SSO */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#064E3B', color: '#FFFFFF', padding: '14px 16px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <path d="M10 17l5-5-5-5"></path>
              <path d="M15 12H3"></path>
            </svg>
            Masuk · SSO UNIZAR
          </a>

          {/* Menu Samping Utama Accordion */}
          <nav aria-label="Menu samping utama" style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '14px', overflow: 'hidden' }}>
            {sideGroups.map((g) => {
              const isOpen = sideOpen[g.k];
              return (
                <div key={g.k} style={{ borderBottom: '1px solid #EEF3F0' }}>
                  <button
                    onClick={() => toggleSide(g.k)}
                    style={{
                      width: '100%',
                      border: 0,
                      background: isOpen ? '#F4F8F6' : '#FFFFFF',
                      padding: '14px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#13231C',
                      minHeight: '48px'
                    }}
                  >
                    <span style={{ width: '30px', height: '30px', borderRadius: '8px', background: '#E3F1EA', color: '#0A6B4F', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800 }}>
                      {g.mono}
                    </span>
                    <span style={{ flex: 1 }}>{g.label}</span>
                    <span aria-hidden="true" style={{ color: '#0A6B4F', fontSize: '18px', fontWeight: 700 }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <ul style={{ listStyle: 'none', margin: 0, padding: '4px 0 10px' }}>
                      {g.items.map((itemLabel, idx) => (
                        <li key={idx}>
                          <Link to={g.href} style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', padding: '9px 16px 9px 58px', fontSize: '14px', color: '#2B3D35', textDecoration: 'none' }}>
                            <span>{itemLabel}</span>
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link to={g.href} style={{ display: 'block', padding: '9px 16px 4px 58px', fontSize: '13px', fontWeight: 700, color: '#0A6B4F', textDecoration: 'none' }}>
                          Buka halaman →
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Pusat Akreditasi Hub Card */}
          <nav aria-label="Pusat Akreditasi" style={{ background: '#FFF8E1', border: '1px solid #F2D27A', borderRadius: '14px', padding: '16px' }}>
            <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '.12em', color: '#7A5900', textTransform: 'uppercase', marginBottom: '10px' }}>
              PUSAT AKREDITASI
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <li>
                <Link to="/peta-bukti-banpt" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 6px', fontWeight: 700, fontSize: '14px', color: '#13231C', textDecoration: 'none' }}>
                  <span>Peta Bukti BAN-PT</span>
                  <span style={{ background: '#064E3B', color: '#FFF', fontSize: '11px', padding: '2px 8px', borderRadius: '999px' }}>39</span>
                </Link>
              </li>
              <li>
                <Link to="/pusat-dokumen" style={{ display: 'block', padding: '10px 6px', fontWeight: 600, fontSize: '14px', color: '#13231C', textDecoration: 'none' }}>
                  Pusat Dokumen
                </Link>
              </li>
              <li>
                <a href="#kinerja" style={{ display: 'block', padding: '10px 6px', fontWeight: 600, fontSize: '14px', color: '#13231C', textDecoration: 'none' }}>
                  Dashboard Kinerja
                </a>
              </li>
              <li>
                <Link to="/ppid" style={{ display: 'block', padding: '10px 6px', fontWeight: 600, fontSize: '14px', color: '#13231C', textDecoration: 'none' }}>
                  Transparansi & PPID
                </Link>
              </li>
              <li>
                <a href="#" style={{ display: 'block', padding: '10px 6px', fontWeight: 600, fontSize: '14px', color: '#13231C', textDecoration: 'none' }}>
                  Pengaduan / WBS
                </a>
              </li>
            </ul>
          </nav>

          {/* Legenda Akses Dokumen */}
          <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '14px', padding: '16px', fontSize: '13px', color: '#44574E', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontWeight: 700, color: '#13231C' }}>Akses dokumen</div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '999px', background: '#E3F1EA', color: '#064E3B' }}>Publik</span>
              terbuka untuk semua
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '999px', background: '#FFF1C2', color: '#6B4E00' }}>Ringkasan</span>
              ikhtisar publik, dokumen penuh terkunci
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '999px', background: '#FBE3E4', color: '#8E1B20' }}>Terbatas</span>
              login SSO / asesor
            </div>
          </div>
        </aside>

        {/* ================= MAIN CONTENT KANAN ================= */}
        <main style={{ flex: '999 1 600px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '28px' }}>

          {/* Hero Banner + Card Video */}
          <section style={{ background: '#064E3B', color: '#FFFFFF', borderRadius: '20px', overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: '3 1 420px', padding: '48px 44px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <span style={{ alignSelf: 'flex-start', fontSize: '12px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#F2C230' }}>
                Universitas Islam Al-Azhar Mataram
              </span>
              <h1 style={{ margin: 0, fontSize: '46px', lineHeight: 1.08, letterSpacing: '-.01em', fontWeight: 800 }}>
                Kampus Islami yang unggul dan berdampak
              </h1>
              <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: '#D3EBDF', maxWidth: '560px' }}>
                Pendidikan, penelitian, dan pengabdian berlandaskan nilai Islam untuk Nusa Tenggara Barat dan dunia.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '6px' }}>
                <a href="#" style={{ background: '#F2C230', color: '#053B2C', padding: '13px 22px', borderRadius: '10px', fontWeight: 800, fontSize: '15px', textDecoration: 'none' }}>
                  PMB 2027
                </a>
                <Link to="/pusat-dokumen" style={{ border: '1.5px solid #D3EBDF', color: '#FFFFFF', padding: '12px 22px', borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
                  Profil institusi
                </Link>
              </div>
            </div>

            <div style={{ flex: '2 1 300px', background: '#0A6B4F', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '18px', minHeight: '340px', position: 'relative' }}>
              <div style={{ border: '2px dashed rgba(255,255,255,.35)', borderRadius: '14px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#D3EBDF', fontSize: '13px', padding: '16px', minHeight: '160px' }}>
                [Foto kampus / video profil 30 detik]
              </div>
              <div style={{ background: '#FFFFFF', color: '#13231C', borderRadius: '14px', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: '#FFF1C2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#6B4E00', fontSize: '12px', textAlign: 'center', lineHeight: 1.1 }}>
                  BAN<br />PT
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12px', color: '#44574E', fontWeight: 600 }}>Akreditasi institusi</div>
                  <div style={{ fontSize: '20px', fontStyle: 'normal', fontWeight: 800, color: '#064E3B' }}>[Status Akreditasi]</div>
                  <div style={{ fontSize: '12px', color: '#44574E' }}>SK [Nomor] · s.d. [Tanggal]</div>
                </div>
                <a href="#" style={{ fontSize: '13px', fontWeight: 700, color: '#0A6B4F', textDecoration: 'none' }}>Verifikasi ↗</a>
              </div>
            </div>
          </section>

          {/* Akreditasi Program Studi */}
          <section aria-labelledby="h-akr" style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '18px', padding: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px', flexWrap: 'wrap', marginBottom: '18px' }}>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.12em', color: '#8A6500', textTransform: 'uppercase' }}>
                  Pengakuan mutu
                </div>
                <h2 id="h-akr" style={{ margin: '6px 0 0', fontSize: '26px', color: '#064E3B' }}>
                  Status akreditasi program studi
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '13px', color: '#44574E', flexWrap: 'wrap' }}>
                <span>Diperbarui 10 Okt 2026</span>
                <a href="#" style={{ fontWeight: 700, color: '#0A6B4F', textDecoration: 'none' }}>Sumber: PD Dikti / LAM ↗</a>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '12px' }}>
              {akr.map((a, idx) => (
                <div key={idx} style={{ border: '1px solid #DCE6E0', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px', borderTop: `5px solid ${a.c}` }}>
                  <div style={{ fontSize: '38px', fontWeight: 800, color: '#064E3B', lineHeight: 1 }}>{a.n}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700 }}>{a.label}</div>
                  <div style={{ fontSize: '12px', color: '#44574E' }}>{a.pct}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '12px', fontSize: '12px', color: '#6B4E00', background: '#FFF8E1', display: 'inline-block', padding: '4px 10px', borderRadius: '6px' }}>
              Data simulasi — angka akan tersinkron dengan PD Dikti
            </div>
          </section>

          {/* Diferensiasi Misi */}
          <section aria-labelledby="h-dif" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.12em', color: '#8A6500', textTransform: 'uppercase' }}>
                  Diferensiasi misi
                </div>
                <h2 id="h-dif" style={{ margin: '6px 0 0', fontSize: '26px', color: '#064E3B' }}>
                  Keunggulan pembeda UNIZAR
                </h2>
              </div>
              <Link to="/pusat-dokumen" style={{ fontWeight: 700, fontSize: '14px', color: '#0A6B4F', textDecoration: 'none' }}>
                Baca Renstra & RIP →
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#C1272D' }}>01</div>
                <div style={{ fontSize: '18px', fontWeight: 800 }}>[Fokus Diferensiasi Misi 1]</div>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#44574E' }}>
                  Ringkasan capaian & target berdampak sesuai Renstra / RIP. Tautan ke peta jalan dan hasil benchmarking.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#C1272D' }}>02</div>
                <div style={{ fontSize: '18px', fontWeight: 800 }}>[Fokus Diferensiasi Misi 2]</div>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#44574E' }}>
                  Program unggulan tridharma yang menjadi pembeda UNIZAR di tingkat wilayah, nasional, dan internasional.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#C1272D' }}>03</div>
                <div style={{ fontSize: '18px', fontWeight: 800 }}>[Fokus Diferensiasi Misi 3]</div>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#44574E' }}>
                  Rekognisi & apresiasi eksternal — penghargaan, mitra strategis, dan pengakuan kepakaran.
                </p>
              </div>
            </div>
          </section>

          {/* Dashboard Kinerja Sekilas */}
          <section id="kinerja" aria-labelledby="h-kin" style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '18px', padding: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px', flexWrap: 'wrap', marginBottom: '18px' }}>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.12em', color: '#8A6500', textTransform: 'uppercase' }}>
                  Kinerja Utama
                </div>
                <h2 id="h-kin" style={{ margin: '6px 0 0', fontSize: '26px', color: '#064E3B' }}>
                  Sekilas capaian kinerja
                </h2>
              </div>
              <a href="#" style={{ fontWeight: 700, fontSize: '14px', color: '#0A6B4F', textDecoration: 'none' }}>
                Dashboard kinerja lengkap →
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '12px' }}>
              {kpi.map((k, idx) => (
                <div key={idx} style={{ background: '#F4F8F6', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', color: '#44574E', fontWeight: 600 }}>{k.label}</span>
                  </div>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: '#064E3B', lineHeight: 1 }}>{k.v}</div>
                  <div style={{ height: '6px', background: '#DCE6E0', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ height: '6px', width: k.w, background: '#0A6B4F' }}></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#44574E' }}>
                    <span>{k.trend}</span>
                    <a href="#" style={{ fontWeight: 700, color: '#0A6B4F', textDecoration: 'none' }}>PD Dikti ↗</a>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '12px', fontSize: '12px', color: '#6B4E00', background: '#FFF8E1', display: 'inline-block', padding: '4px 10px', borderRadius: '6px' }}>
              Data simulasi — angka akan tersinkron dengan PD Dikti
            </div>
          </section>

          {/* Berita & Agenda */}
          <section aria-labelledby="h-news" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ flex: '2 1 480px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <h2 id="h-news" style={{ margin: 0, fontSize: '26px', color: '#064E3B' }}>Berita & sorotan</h2>
                <a href="#" style={{ fontWeight: 700, fontSize: '14px', color: '#0A6B4F', textDecoration: 'none' }}>Semua berita →</a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
                {news.map((nw, idx) => (
                  <article key={idx} style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: '120px', background: '#D3EBDF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0A6B4F', fontSize: '12px' }}>
                      [Foto kegiatan]
                    </div>
                    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '.08em', color: '#8E1B20', textTransform: 'uppercase' }}>{nw.cat}</span>
                      <a href="#" style={{ fontSize: '15px', fontWeight: 700, lineHeight: 1.4, color: '#13231C', textDecoration: 'none' }}>{nw.title}</a>
                      <span style={{ fontSize: '12px', color: '#44574E' }}>{nw.date}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div style={{ flex: '1 1 280px', background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h2 style={{ margin: 0, fontSize: '20px', color: '#064E3B' }}>Agenda</h2>
              {agenda.map((ag, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #EEF3F0' }}>
                  <div style={{ width: '54px', textAlign: 'center', background: '#E3F1EA', borderRadius: '10px', padding: '6px 0' }}>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#064E3B', lineHeight: 1.1 }}>{ag.d}</div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#0A6B4F' }}>{ag.m}</div>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, lineHeight: 1.4 }}>{ag.title}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Assessor Band */}
          <section style={{ background: '#FFF8E1', border: '1px solid #F2D27A', borderRadius: '18px', padding: '28px 32px', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 420px' }}>
              <h2 style={{ margin: '0 0 6px', fontSize: '22px', color: '#3D2E00' }}>Asesor atau mitra? Mulai dari sini.</h2>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#5A4500' }}>
                Setiap indikator tertaut langsung ke halaman buktinya — dokumen publik terbuka, dokumen terbatas melalui login asesor.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link to="/peta-bukti-banpt" style={{ background: '#064E3B', color: '#FFFFFF', padding: '13px 20px', borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
                Peta Bukti BAN-PT →
              </Link>
              <Link to="/pusat-dokumen" style={{ background: '#FFFFFF', border: '1.5px solid #064E3B', color: '#064E3B', padding: '12px 20px', borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
                Pusat Dokumen
              </Link>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}