import React from 'react';
import { Link } from 'react-router-dom';

export default function Gug() {
  const pillars = [
    { title: 'Kredibilitas', desc: 'Sistem kepemimpinan dan tata kelola yang teruji.' },
    { title: 'Transparansi', desc: 'Keterbukaan informasi publik dan akuntabilitas kinerja.' },
    { title: 'Akuntabilitas', desc: 'Pertanggungjawaban keuangan teraudit dan penjaminan mutu.' },
    { title: 'Tanggung Jawab', desc: 'Kepatuhan pada regulasi dan etika keislaman.' },
    { title: 'Keadilan', desc: 'Kesetaraan akses dan perlindungan civitas akademika.' },
    { title: 'Manajemen Risiko', desc: 'Pengawasan internal berkala oleh Satuan Pengawasan Internal (SPI).' }
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#13231C', background: '#F4F8F6', minHeight: '100vh' }}>
      <section style={{ background: '#064E3B', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '22px 32px 32px' }}>
          <nav style={{ fontSize: '13px', color: '#B7DCC9', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#B7DCC9' }}>Beranda</Link> / <span style={{ color: '#FFFFFF' }}>Good University Governance</span>
          </nav>
          <h1 style={{ margin: '0 0 10px', fontSize: '40px', fontWeight: 800 }}>Good University Governance (GUG)</h1>
          <p style={{ margin: 0, fontSize: '16px', color: '#D3EBDF', maxWidth: '720px' }}>Akuntabilitas, integritas, keamanan sivitas, dan tata kelola keuangan UNIZAR yang transparan.</p>
        </div>
      </section>

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '28px 32px 64px' }}>
        <h2 style={{ color: '#064E3B', fontSize: '24px', fontWeight: 800, marginBottom: '16px' }}>Enam Pilar Tata Kelola UNIZAR</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '16px' }}>
          {pillars.map((p, i) => (
            <div key={i} style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#064E3B', margin: '0 0 8px' }}>{p.title}</h3>
              <p style={{ fontSize: '14px', color: '#44574E', margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}