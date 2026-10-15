import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Prodi() {
  const [tab, setTab] = useState('profil');

  const cpl = [
    { code: 'CPL-1', text: '[Sikap: profesionalisme luhur, etika, dan nilai keislaman]', v: '88%' },
    { code: 'CPL-2', text: '[Pengetahuan: landasan ilmiah ilmu kedokteran]', v: '79%' },
    { code: 'CPL-3', text: '[Keterampilan umum: komunikasi efektif & kolaborasi]', v: '84%' },
    { code: 'CPL-4', text: '[Keterampilan khusus: keterampilan klinis & pengelolaan masalah]', v: '76%' }
  ];

  const kur = [
    { s: '1', n: '[Blok 1] · Pendidikan Agama & Etika Profesi', sks: '6' },
    { s: '1', n: '[Blok 2]', sks: '7' },
    { s: '2', n: '[Blok 3]', sks: '7' },
    { s: '3', n: '[Blok 5] · Bioetika, Hukum Kesehatan & Integritas', sks: '6' },
    { s: '5', n: '[Blok elektif / lintas prodi]', sks: '10' }
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#13231C', background: '#F4F8F6', minHeight: '100vh' }}>
      <section style={{ background: '#064E3B', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '22px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '13px', color: '#B7DCC9' }}>
            <Link to="/" style={{ color: '#B7DCC9' }}>Beranda</Link> / <Link to="/fakultas" style={{ color: '#B7DCC9' }}>Fakultas Kedokteran</Link> / <span style={{ color: '#FFFFFF' }}>Pendidikan Dokter (S1)</span>
          </nav>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'flex-end', padding: '18px 0 24px' }}>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#F2C230' }}>PROGRAM SARJANA · FAKULTAS KEDOKTERAN</span>
              <h1 style={{ margin: '8px 0 10px', fontSize: '40px', fontWeight: 800 }}>Pendidikan Dokter</h1>
              <p style={{ margin: 0, fontSize: '16px', color: '#D3EBDF', maxWidth: '680px' }}>Mencetak tenaga medis profesional, unggul, dan beretika Islami di NTB.</p>
            </div>
            <div style={{ background: '#FFFFFF', color: '#13231C', borderRadius: '16px', padding: '18px 20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#44574E' }}>Akreditasi Program Studi</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#064E3B' }}>Terakreditasi Unggul</div>
              </div>
            </div>
          </div>
          <div role="tablist" style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {[['profil', 'Profil & CPL'], ['kurikulum', 'Kurikulum'], ['akreditasi', 'Akreditasi']].map(([k, label]) => (
              <button key={k} onClick={() => setTab(k)} style={{ border: 0, cursor: 'pointer', padding: '13px 18px', fontSize: '15px', fontWeight: 700, borderRadius: '12px 12px 0 0', background: tab === k ? '#F4F8F6' : 'transparent', color: tab === k ? '#064E3B' : '#D3EBDF', minHeight: '48px' }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '28px 32px 64px' }}>
        {tab === 'profil' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '18px', padding: '26px' }}>
              <h2 style={{ margin: '0 0 12px', fontSize: '22px', color: '#064E3B' }}>Capaian Pembelajaran Lulusan (CPL)</h2>
              {cpl.map((c, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '70px 1fr 140px', gap: '14px', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #EEF3F0' }}>
                  <span style={{ fontWeight: 800, color: '#064E3B' }}>{c.code}</span>
                  <span style={{ fontSize: '14px', color: '#2B3D35' }}>{c.text}</span>
                  <span style={{ fontSize: '12px', color: '#44574E', fontWeight: 700 }}>{c.v}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'kurikulum' && (
          <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#F4F8F6', textAlign: 'left', color: '#44574E' }}>
                  <th style={{ padding: '12px' }}>Sem</th>
                  <th style={{ padding: '12px' }}>Mata Kuliah / Blok</th>
                  <th style={{ padding: '12px' }}>sks</th>
                </tr>
              </thead>
              <tbody>
                {kur.map((k, i) => (
                  <tr key={i} style={{ borderTop: '1px solid #EEF3F0' }}>
                    <td style={{ padding: '12px', fontWeight: 800, color: '#064E3B' }}>{k.s}</td>
                    <td style={{ padding: '12px' }}>{k.n}</td>
                    <td style={{ padding: '12px', fontWeight: 700 }}>{k.sks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}