import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Bpm() {
  const [tab, setTab] = useState('spmi');

  const docs = [
    { title: 'Kebijakan SPMI UNIZAR', unit: 'BPM', sk: 'No. 004/SK/2026', date: '06 Jan 2026', access: 'restricted', note: 'Dokumen sistem penjaminan mutu internal terintegrasi.' },
    { title: 'Manual SPMI (PPEPP)', unit: 'BPM', sk: 'No. 005/SK/2026', date: '06 Jan 2026', access: 'public', note: 'Manual Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan Standar Mutu.' },
    { title: 'Standar Mutu Pendidikan Tinggi UNIZAR', unit: 'BPM', sk: 'No. 006/SK/2026', date: '06 Jan 2026', access: 'public', note: 'Memuat 24 standar nasional ditambah standar muatan lokal/keislaman.' },
    { title: 'Laporan Audit Mutu Internal (AMI) 2025', unit: 'BPM', sk: 'No. 089/SK/2025', date: '20 Des 2025', access: 'restricted', note: 'Hasil evaluasi dan audit kepatuhan mutu akademik seluruh program studi.' },
    { title: 'Laporan Survei Kepuasan Sivitas 2025', unit: 'BPM', sk: 'No. 092/SK/2025', date: '28 Des 2025', access: 'summary', note: 'Ringkasan tingkat kepuasan mahasiswa, dosen, tendik, dan pengguna lulusan.' }
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#13231C', background: '#F4F8F6', minHeight: '100vh' }}>
      <section style={{ background: '#064E3B', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '22px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '13px', color: '#B7DCC9', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#B7DCC9' }}>Beranda</Link> / <span style={{ color: '#FFFFFF' }}>Badan Penjaminan Mutu</span>
          </nav>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '24px' }}>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#F2C230' }}>PENJAMINAN MUTU INTERNAL</span>
              <h1 style={{ margin: '6px 0 10px', fontSize: '40px', fontWeight: 800 }}>Badan Penjaminan Mutu (BPM)</h1>
              <p style={{ margin: 0, fontSize: '16px', color: '#D3EBDF', maxWidth: '720px' }}>Mengawal mutu akademik dan non-akademik secara berkelanjutan melalui siklus PPEPP dan Audit Mutu Internal (AMI).</p>
            </div>
            <Link to="/peta-bukti-banpt" style={{ background: '#F2C230', color: '#053B2C', padding: '12px 20px', borderRadius: '10px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>Peta Bukti BAN-PT →</Link>
          </div>
          <div role="tablist" style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {[['spmi', 'Kebijakan & Standar SPMI'], ['ppepp', 'Siklus PPEPP'], ['ami', 'Audit Mutu Internal (AMI)'], ['survei', 'Survei Kepuasan']].map(([k, label]) => (
              <button key={k} onClick={() => setTab(k)} style={{ border: 0, cursor: 'pointer', padding: '13px 18px', fontSize: '15px', fontWeight: 700, borderRadius: '12px 12px 0 0', background: tab === k ? '#F4F8F6' : 'transparent', color: tab === k ? '#064E3B' : '#D3EBDF', minHeight: '48px' }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '32px 32px 64px' }}>
        {tab === 'spmi' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '16px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#064E3B', margin: '0 0 8px' }}>Dokumen Kebijakan</h3>
                <p style={{ fontSize: '14px', color: '#44574E', margin: 0, lineHeight: 1.5 }}>Arah dan komitmen penjaminan mutu seluruh unit kerja di lingkungan Universitas Islam Al-Azhar.</p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#064E3B', margin: '0 0 8px' }}>24 Standar Dikti + Mulok</h3>
                <p style={{ fontSize: '14px', color: '#44574E', margin: 0, lineHeight: 1.5 }}>Mengacu pada SN-Dikti ditambah standar keunggulan lokal, etika kedokteran, dan nilai keislaman.</p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#064E3B', margin: '0 0 8px' }}>Manual & Formula Mutu</h3>
                <p style={{ fontSize: '14px', color: '#44574E', margin: 0, lineHeight: 1.5 }}>Panduan praktis bagi pelaksana standar dan auditor mutu dalam menjalankan evaluasi.</p>
              </div>
            </div>

            <section style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '18px', padding: '26px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#064E3B', margin: '0 0 16px' }}>Repositori Dokumen Penjaminan Mutu</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {docs.map((d, i) => (
                  <div key={i} style={{ background: '#F4F8F6', borderRadius: '12px', padding: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '16px', fontWeight: 800 }}>{d.title}</span>
                        <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 9px', borderRadius: '999px', background: d.access === 'restricted' ? '#FBE3E4' : d.access === 'summary' ? '#FFF1C2' : '#E3F1EA', color: d.access === 'restricted' ? '#8E1B20' : d.access === 'summary' ? '#6B4E00' : '#064E3B' }}>
                          {d.access === 'restricted' ? 'Terbatas' : d.access === 'summary' ? 'Ringkasan' : 'Publik'}
                        </span>
                      </div>
                      <div style={{ fontSize: '13px', color: '#44574E', marginTop: '4px' }}>{d.sk} · {d.unit} · Berlaku: {d.date}</div>
                      <p style={{ fontSize: '14px', color: '#13231C', margin: '6px 0 0' }}>{d.note}</p>
                    </div>
                    <a href="#" style={{ background: '#064E3B', color: '#FFFFFF', padding: '10px 16px', borderRadius: '8px', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>
                      {d.access === 'restricted' ? 'Minta Akses' : 'Unduh File'}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {tab === 'ppepp' && (
          <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '18px', padding: '28px' }}>
            <h2 style={{ color: '#064E3B', margin: '0 0 12px' }}>Implementasi Siklus PPEPP</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '12px', marginTop: '20px' }}>
              {['Penetapan', 'Pelaksanaan', 'Evaluasi', 'Pengendalian', 'Peningkatan'].map((step, i) => (
                <div key={i} style={{ background: '#F4F8F6', padding: '18px', borderRadius: '12px', borderTop: '4px solid #0A6B4F' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#0A6B4F' }}>TAHAP 0{i + 1}</div>
                  <div style={{ fontSize: '16px', fontWeight: 800, marginTop: '4px' }}>{step}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}