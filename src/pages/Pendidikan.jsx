import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Pendidikan() {
  const [tab, setTab] = useState('pmb');
  const [faqOpen, setFaqOpen] = useState(0);

  const paths = [
    { t: 'Reguler', d: 'Seleksi berbasis tes potensi akademik daring.', l: 'Semua prodi', c: '#0A6B4F' },
    { t: 'Prestasi', d: 'Rapor dan prestasi akademik/non-akademik.', l: 'Bebas tes', c: '#3A9B76' },
    { t: 'Afirmasi & KIP-Kuliah', d: 'Untuk calon mahasiswa kurang mampu dan daerah 3T.', l: 'Akses Luas', c: '#F2C230' },
    { t: 'RPL', d: 'Rekognisi pengalaman kerja menjadi sks.', l: 'Terhubung SIERRA', c: '#E8A33A' },
    { t: 'Pindahan / PJJ', d: 'Transfer kredit dan pembelajaran jarak jauh.', l: 'Terhubung SPADA', c: '#C1272D' }
  ];

  const schol = [
    { t: 'KIP-Kuliah', d: 'Pemerintah · biaya pendidikan & hidup', q: '220 kursi' },
    { t: 'Beasiswa Afirmasi Daerah 3T', d: 'Universitas · potongan UKT hingga 100%', q: '40 kursi' },
    { t: 'Beasiswa Prestasi', d: 'Akademik, olahraga, seni', q: '60 kursi' },
    { t: 'Beasiswa Tahfidz Al-Qur’an', d: 'Hafalan minimal [n] juz', q: '30 kursi' },
    { t: 'Keringanan UKT', d: 'Bagi mahasiswa terdampak ekonomi', q: 'Sepanjang tahun' }
  ];

  const FAQ = [
    ['Berapa biaya kuliah per semester?', 'Biaya berbeda per prodi. Gunakan simulasi biaya untuk melihat rincian UKT, dan cek kemungkinan keringanan atau beasiswa.'],
    ['Apakah penyandang disabilitas bisa mendaftar?', 'Bisa. Unit Layanan Disabilitas mendampingi sejak pendaftaran, termasuk akomodasi ujian seleksi.'],
    ['Bagaimana jika saya sudah bekerja?', 'Jalur RPL memungkinkan pengalaman kerja diakui sebagai sks sehingga masa studi bisa lebih singkat.'],
    ['Kapan pengumuman hasil seleksi?', 'Hasil diumumkan paling lambat 14 hari setelah tes melalui akun pendaftar dan email.']
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#13231C', background: '#F4F8F6', minHeight: '100vh' }}>
      <section style={{ background: '#064E3B', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '22px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '13px', color: '#B7DCC9' }}>
            <Link to="/" style={{ color: '#B7DCC9' }}>Beranda</Link> / <span style={{ color: '#FFFFFF' }}>Pendidikan</span>
          </nav>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'flex-end', padding: '18px 0 26px' }}>
            <div style={{ flex: '1 1 560px' }}>
              <h1 style={{ margin: '0 0 10px', fontSize: '40px', lineHeight: 1.1, fontWeight: 800 }}>Pendidikan</h1>
              <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: '#D3EBDF', maxWidth: '700px' }}>Penerimaan yang adil dan inklusif, kurikulum berbasis luaran, serta suasana akademik yang menjunjung kebebasan dan integritas.</p>
            </div>
          </div>
          <div role="tablist" style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {[['pmb', 'PMB & Beasiswa'], ['kurikulum', 'Kurikulum & Pembelajaran'], ['mbkm', 'MBKM'], ['suasana', 'Suasana Akademik'], ['kalender', 'Kalender Akademik']].map(([k, label]) => (
              <button key={k} onClick={() => setTab(k)} style={{ border: 0, cursor: 'pointer', padding: '13px 18px', fontSize: '15px', fontWeight: 700, borderRadius: '12px 12px 0 0', background: tab === k ? '#F4F8F6' : 'transparent', color: tab === k ? '#064E3B' : '#D3EBDF', minHeight: '48px' }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '28px 32px 64px' }}>
        {tab === 'pmb' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
            <section style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '20px', padding: '30px', display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center' }}>
              <div style={{ flex: '2 1 480px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.12em', color: '#8A6500', textTransform: 'uppercase' }}>Penerimaan Mahasiswa Baru 2027</span>
                <h2 style={{ margin: 0, fontSize: '30px', lineHeight: 1.15, color: '#064E3B' }}>Gelombang 1 dibuka sampai [tgl]</h2>
                <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#44574E' }}>Pendaftaran sepenuhnya daring. Tidak membedakan suku, ras, agama, golongan, asal daerah, maupun disabilitas.</p>
              </div>
              <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="#" style={{ background: '#F2C230', color: '#053B2C', padding: '15px', borderRadius: '12px', fontWeight: 800, fontSize: '16px', textAlign: 'center', textDecoration: 'none' }}>Daftar sekarang</a>
                <a href="#" style={{ border: '1.5px solid #064E3B', color: '#064E3B', padding: '13px', borderRadius: '12px', fontWeight: 700, textAlign: 'center', textDecoration: 'none' }}>Simulasi biaya kuliah</a>
              </div>
            </section>

            <section>
              <h2 style={{ margin: '6px 0 14px', fontSize: '22px', color: '#064E3B' }}>Jalur masuk</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '12px' }}>
                {paths.map((p, i) => (
                  <a key={i} href="#" style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px', textDecoration: 'none', color: '#13231C', borderTop: `5px solid ${p.c}` }}>
                    <span style={{ fontSize: '17px', fontWeight: 800 }}>{p.t}</span>
                    <span style={{ fontSize: '13px', color: '#44574E', lineHeight: 1.5 }}>{p.d}</span>
                    <span style={{ marginTop: 'auto', fontSize: '12px', fontWeight: 700, color: '#0A6B4F' }}>{p.l}</span>
                  </a>
                ))}
              </div>
            </section>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <section style={{ flex: '3 1 540px', background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '18px', padding: '26px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h2 style={{ margin: 0, fontSize: '22px', color: '#064E3B' }}>Beasiswa & keringanan</h2>
                {schol.map((s, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: '14px', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #EEF3F0' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontWeight: 800, fontSize: '15px' }}>{s.t}</span>
                      <span style={{ fontSize: '13px', color: '#44574E' }}>{s.d}</span>
                    </span>
                    <span style={{ flex: 'none', fontSize: '12px', fontWeight: 800, padding: '4px 10px', borderRadius: '999px', background: '#E3F1EA', color: '#064E3B' }}>{s.q}</span>
                  </div>
                ))}
              </section>

              <section style={{ flex: '2 1 360px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ background: '#064E3B', color: '#FFFFFF', borderRadius: '18px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h2 style={{ margin: 0, fontSize: '20px' }}>Kampus untuk semua</h2>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#D3EBDF' }}>Unit Layanan Disabilitas mendampingi sejak pendaftaran: akomodasi ujian, akses gedung, dan materi aksesibel.</p>
                </div>
              </section>
            </div>

            <section style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '18px', padding: '26px' }}>
              <h2 style={{ margin: '0 0 12px', fontSize: '22px', color: '#064E3B' }}>Pertanyaan umum</h2>
              {FAQ.map((f, i) => (
                <div key={i} style={{ borderBottom: '1px solid #EEF3F0' }}>
                  <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} style={{ width: '100%', border: 0, background: 'transparent', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', fontSize: '16px', fontWeight: 700, color: '#13231C', textAlign: 'left', cursor: 'pointer', minHeight: '48px' }}>
                    {f[0]}
                    <span style={{ color: '#0A6B4F', fontSize: '20px' }}>{faqOpen === i ? '−' : '+'}</span>
                  </button>
                  {faqOpen === i && <p style={{ margin: '0 0 16px', fontSize: '15px', lineHeight: 1.6, color: '#44574E', maxWidth: '860px' }}>{f[1]}</p>}
                </div>
              ))}
            </section>
          </div>
        ) : (
          <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '18px', padding: '28px' }}>
            <h2 style={{ color: '#064E3B', marginTop: 0 }}>Informasi: {tab.toUpperCase()}</h2>
            <p style={{ color: '#44574E' }}>Kurikulum, pedoman pembelajaran, dan kalender akademik UNIZAR.</p>
          </div>
        )}
      </div>
    </div>
  );
}