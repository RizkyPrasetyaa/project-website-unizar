import React from 'react';
import { Link } from 'react-router-dom';

export default function Fakultas() {
  const facs = [
    { n: 'Fakultas Kedokteran', d: 'Pendidikan dokter profesional beretika Islami.', href: '/prodi' },
    { n: 'Fakultas Teknik', d: 'Pengembangan infrastruktur & rekayasa berwawasan lingkungan.', href: '#' },
    { n: 'Fakultas Hukum', d: 'Pendidikan hukum berkeadilan dan berintegritas.', href: '#' },
    { n: 'Fakultas Ekonomi & Bisnis', d: 'Manajemen, akuntansi & kewirausahaan syariah.', href: '#' },
    { n: 'Fakultas Pertanian', d: 'Agribisnis dan teknologi pertanian berkelanjutan.', href: '#' },
    { n: 'Fakultas MIPA', d: 'Riset biologi, farmasi, dan sains terapan.', href: '#' },
     { n: 'Fakultas Agama Islam', d: 'Bisnis Ekonomi Syariah & Menejemen Syariah.', href: '#' }
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#13231C', background: '#F4F8F6', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h1 style={{ color: '#064E3B', fontSize: '38px', fontWeight: 800, margin: 0 }}>Fakultas & Program Studi</h1>
          <p style={{ color: '#44574E', marginTop: '6px' }}>Direktori fakultas penyelenggara pendidikan sarjana dan profesi di UNIZAR.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '16px' }}>
          {facs.map((f, i) => (
            <div key={i} style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h2 style={{ color: '#064E3B', margin: 0, fontSize: '22px' }}>{f.n}</h2>
              <p style={{ color: '#44574E', fontSize: '14px', margin: 0 }}>{f.d}</p>
              <Link to={f.href} style={{ color: '#0A6B4F', fontWeight: 700, fontSize: '14px', marginTop: 'auto', paddingTop: '12px' }}>Lihat program studi →</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}