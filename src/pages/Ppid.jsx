import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Ppid() {
  const [cat, setCat] = useState('berkala');

  const CAT = {
    berkala: { label: 'Berkala', desc: 'Informasi yang wajib diumumkan secara berkala.', items: ['Profil, struktur organisasi & pimpinan', 'Renstra & laporan kinerja', 'Ikhtisar laporan keuangan teraudit', 'Laporan tahunan'] },
    sertamerta: { label: 'Serta-merta', desc: 'Informasi yang diumumkan tanpa penundaan.', items: ['Peringatan dini bencana & evakuasi', 'Pengumuman darurat kesehatan kampus'] },
    setiapsaat: { label: 'Setiap saat', desc: 'Informasi yang tersedia dan dapat diminta kapan saja.', items: ['Statuta & SK pimpinan', 'Pedoman akademik', 'Daftar kerjasama & MoU'] },
    dikecualikan: { label: 'Dikecualikan', desc: 'Informasi yang dikecualikan berdasarkan uji konsekuensi.', items: ['Data pribadi sivitas akademika', 'Laporan audit internal rinci'] }
  };

  const flow = [
    { n: '01', t: 'Ajukan', d: 'Isi formulir daring dengan identitas & rincian informasi.' },
    { n: '02', t: 'Registrasi', d: 'Nomor permohonan dikirim ke email Anda.' },
    { n: '03', t: 'Proses', d: 'PPID berkoordinasi dengan unit pemilik informasi.' },
    { n: '04', t: 'Jawaban', d: 'Paling lambat 10 hari kerja, dapat diperpanjang 7 hari.' },
    { n: '05', t: 'Keberatan', d: 'Jika tidak puas, ajukan keberatan ke atasan PPID.' }
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#13231C', background: '#F4F8F6', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '24px 32px 64px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: '13px', color: '#44574E' }}>
          <Link to="/">Beranda</Link> / Direktori / <span style={{ color: '#13231C', fontWeight: 600 }}>PPID</span>
        </nav>

        <section style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h1 style={{ margin: 0, fontSize: '40px', color: '#064E3B', fontWeight: 800 }}>Transparansi & Layanan Informasi Publik (PPID)</h1>
          <p style={{ margin: 0, fontSize: '16px', color: '#2B3D35', maxWidth: '700px' }}>PPID UNIZAR melayani permohonan informasi publik secara terbuka dan transparan.</p>
        </section>

        <section style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '18px', overflow: 'hidden' }}>
          <div style={{ padding: '22px 26px 0' }}>
            <h2 style={{ margin: '0 0 14px', fontSize: '22px', color: '#064E3B' }}>Daftar Informasi Publik</h2>
            <div style={{ display: 'flex', gap: '4px', borderBottom: '1px solid #DCE6E0' }}>
              {Object.keys(CAT).map(k => (
                <button key={k} onClick={() => setCat(k)} style={{ border: 0, background: 'transparent', padding: '12px 16px', fontSize: '15px', fontWeight: 700, color: cat === k ? '#064E3B' : '#44574E', borderBottom: cat === k ? '3px solid #0A6B4F' : 'transparent', cursor: 'pointer' }}>
                  {CAT[k].label}
                </button>
              ))}
            </div>
          </div>
          <div style={{ padding: '18px 26px 26px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <p style={{ margin: '0 0 8px', fontSize: '14px', color: '#44574E' }}>{CAT[cat].desc}</p>
            {CAT[cat].items.map((it, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #EEF3F0', fontSize: '14px', fontWeight: 700 }}>
                <span>{it}</span>
                <a href="#" style={{ color: '#0A6B4F' }}>Lihat / unduh →</a>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '18px', padding: '26px' }}>
          <h2 style={{ margin: '0 0 16px', fontSize: '22px', color: '#064E3B' }}>Alur permohonan informasi</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '10px' }}>
            {flow.map((f, i) => (
              <div key={i} style={{ background: '#F4F8F6', borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '4px solid #0A6B4F' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#0A6B4F' }}>{f.n}</span>
                <span style={{ fontWeight: 800, fontSize: '15px' }}>{f.t}</span>
                <span style={{ fontSize: '13px', color: '#44574E' }}>{f.d}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}