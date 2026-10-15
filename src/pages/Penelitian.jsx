import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Penelitian() {
  const [tab, setTab] = useState('ikhtisar');

  const kpi = [
    { l: 'Judul penelitian 2025', v: '146' },
    { l: 'Dana penelitian (Rp)', v: '4,2 M' },
    { l: 'Publikasi bereputasi (3 th)', v: '214' },
    { l: 'HKI tercatat (3 th)', v: '57' },
    { l: 'Melibatkan mahasiswa', v: '68%' }
  ];

  const themes = [
    { no: 'TEMA 1', title: '[Tema riset unggulan 1]', sub: 'Selaras fokus diferensiasi misi universitas; melibatkan lintas fakultas.' },
    { no: 'TEMA 2', title: '[Tema riset unggulan 2]', sub: 'Berbasis kebutuhan daerah NTB dan mitra industri.' },
    { no: 'TEMA 3', title: '[Tema riset unggulan 3]', sub: 'Integrasi keilmuan dan nilai-nilai keislaman.' }
  ];

  const flow = [
    { n: 1, t: 'Usulan', d: 'Proposal diunggah ke SIM-LPPM sesuai tema peta jalan.' },
    { n: 2, t: 'Review', d: 'Penilaian oleh reviewer ber-SK, dua tahap.' },
    { n: 3, t: 'Etik & kontrak', d: 'Kelaikan etik dan surat penugasan peneliti.' },
    { n: 4, t: 'Pelaksanaan', d: 'Logbook daring; mahasiswa memperoleh sks.' },
    { n: 5, t: 'Monev', d: 'Monitoring kemajuan dan seminar hasil.' },
    { n: 6, t: 'Luaran', d: 'Publikasi berlisensi terbuka, HKI, repositori.' }
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#13231C', background: '#F4F8F6', minHeight: '100vh' }}>
      <section style={{ background: '#064E3B', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '22px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '13px', color: '#B7DCC9' }}>
            <Link to="/" style={{ color: '#B7DCC9' }}>Beranda</Link> / LPPM / <span style={{ color: '#FFFFFF' }}>Penelitian</span>
          </nav>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'flex-end', padding: '18px 0 26px' }}>
            <div style={{ flex: '1 1 560px' }}>
              <h1 style={{ margin: '0 0 10px', fontSize: '40px', lineHeight: 1.1, fontWeight: 800 }}>Penelitian</h1>
              <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: '#D3EBDF', maxWidth: '700px' }}>Ekosistem riset UNIZAR yang terarah pada diferensiasi misi — dari peta jalan, tata kelola yang etis, hingga luaran yang terbuka dan diakui.</p>
            </div>
            <a href="#" style={{ background: '#FFFFFF', color: '#064E3B', padding: '11px 16px', borderRadius: '10px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>Portal SIM-LPPM ↗</a>
          </div>
          <div role="tablist" style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {[['ikhtisar', 'Ikhtisar'], ['renstra', 'Renstra & Peta Jalan'], ['tatakelola', 'Tata Kelola'], ['luaran', 'Publikasi & Luaran'], ['hki', 'HKI & Rekognisi']].map(([k, label]) => (
              <button key={k} onClick={() => setTab(k)} style={{ border: 0, cursor: 'pointer', padding: '13px 18px', fontSize: '15px', fontWeight: 700, borderRadius: '12px 12px 0 0', background: tab === k ? '#F4F8F6' : 'transparent', color: tab === k ? '#064E3B' : '#D3EBDF', minHeight: '48px' }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '28px 32px 64px' }}>
        {tab === 'ikhtisar' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '12px' }}>
              {kpi.map((k, i) => (
                <div key={i} style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#44574E' }}>{k.l}</span>
                  <span style={{ fontSize: '30px', fontWeight: 800, color: '#064E3B', lineHeight: 1.1 }}>{k.v}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <section style={{ flex: '3 1 560px', background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '18px', padding: '26px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h2 style={{ margin: 0, fontSize: '22px', color: '#064E3B' }}>Publikasi dosen per tahun</h2>
                <p style={{ color: '#44574E', fontSize: '14px' }}>Grafik peningkatan artikel jurnal internasional bereputasi dan nasional terakreditasi.</p>
              </section>

              <section style={{ flex: '2 1 360px', background: '#FFF8E1', border: '1px solid #F2D27A', borderRadius: '18px', padding: '26px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#7A5900', textTransform: 'uppercase' }}>Hibah dibuka</div>
                <h2 style={{ margin: 0, fontSize: '22px', color: '#3D2E00' }}>Hibah Penelitian Internal 2027</h2>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#5A4500' }}>Skema dasar, terapan, dan kolaborasi internasional. Proposal wajib selaras peta jalan dan melibatkan mahasiswa.</p>
                <a href="#" style={{ background: '#064E3B', color: '#FFFFFF', padding: '13px', borderRadius: '10px', fontWeight: 700, textAlign: 'center', textDecoration: 'none' }}>Ajukan proposal</a>
              </section>
            </div>

            <section>
              <h2 style={{ margin: '6px 0 14px', fontSize: '22px', color: '#064E3B' }}>Tema riset unggulan</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
                {themes.map((t, i) => (
                  <div key={i} style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 800, color: '#C1272D' }}>{t.no}</span>
                    <span style={{ fontSize: '18px', fontWeight: 800 }}>{t.title}</span>
                    <span style={{ fontSize: '14px', color: '#44574E', lineHeight: 1.55 }}>{t.sub}</span>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '18px', padding: '26px' }}>
              <h2 style={{ margin: '6px 0 18px', fontSize: '22px', color: '#064E3B' }}>Alur penelitian di UNIZAR</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', gap: '10px' }}>
                {flow.map((f, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', borderRadius: '14px', background: '#F4F8F6', borderTop: '4px solid #0A6B4F' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#0A6B4F' }}>LANGKAH {f.n}</span>
                    <span style={{ fontSize: '15px', fontWeight: 800 }}>{f.t}</span>
                    <span style={{ fontSize: '13px', color: '#44574E', lineHeight: 1.5 }}>{f.d}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div style={{ background: '#FFF', padding: '28px', borderRadius: '18px', border: '1px solid #DCE6E0' }}>
            <h2 style={{ color: '#064E3B', marginTop: 0 }}>Dokumen: {tab.toUpperCase()}</h2>
            <p style={{ color: '#44574E' }}>Dokumen panduan, tata kelola, dan laporan luaran penelitian.</p>
          </div>
        )}
      </div>
    </div>
  );
}