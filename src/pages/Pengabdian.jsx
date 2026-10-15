import React from 'react';
import { Link } from 'react-router-dom';

export default function Pengabdian() {
  const reg = [['Kota Mataram', 26], ['Lombok Barat', 21], ['Lombok Tengah', 18], ['Lombok Timur', 16], ['Lombok Utara', 12], ['Sumbawa', 9], ['Dompu & Bima', 8], ['Luar NTB', 8]];
  const regions = reg.map(r => ({ n: r[0], v: r[1], w: Math.round(r[1] / 26 * 100) + '%' }));

  const progs = [
    { tag: 'DESA BINAAN', t: '[Program unggulan 1]', d: 'Pendampingan berkelanjutan 3 tahun dengan indikator dampak terukur.', m: 'Pemerintah desa · Pemda' },
    { tag: 'KESEHATAN', t: '[Program unggulan 2]', d: 'Layanan dan edukasi kesehatan berbasis kepakaran dosen dan mahasiswa.', m: 'Puskesmas · Dinas Kesehatan' },
    { tag: 'UMKM & EKONOMI', t: '[Program unggulan 3]', d: 'Penguatan usaha lokal melalui pelatihan, legalitas, dan pemasaran digital.', m: 'Koperasi · BUMDes' }
  ];

  const experts = [
    { n: '[Nama pakar 1]', f: '[Bidang keahlian]', c: 'Sertifikat kompetensi BNSP' },
    { n: '[Nama pakar 2]', f: '[Bidang keahlian]', c: 'Asesor / auditor tersertifikasi' },
    { n: '[Nama pakar 3]', f: '[Bidang keahlian]', c: 'Saksi ahli · Pemda' },
    { n: '[Nama pakar 4]', f: '[Bidang keahlian]', c: 'Konsultan industri' }
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#13231C', background: '#F4F8F6', minHeight: '100vh' }}>
      <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '26px 32px 0' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: '13px', color: '#44574E', marginBottom: '16px' }}>
          <Link to="/">Beranda</Link> / LPPM / <span style={{ color: '#13231C', fontWeight: 600 }}>Pengabdian kepada Masyarakat</span>
        </nav>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ flex: '3 1 560px', background: '#064E3B', color: '#FFFFFF', borderRadius: '20px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.12em', color: '#F2C230' }}>LPPM UNIZAR</span>
            <h1 style={{ margin: 0, fontSize: '42px', lineHeight: 1.1, fontWeight: 800 }}>Ilmu yang hadir di tengah masyarakat</h1>
            <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: '#D3EBDF', maxWidth: '620px' }}>Program pengabdian berbasis kepakaran dosen, bersama pemerintah daerah, komunitas, dan industri di NTB.</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#ajukan" style={{ background: '#F2C230', color: '#053B2C', padding: '13px 20px', borderRadius: '10px', fontWeight: 800, fontSize: '15px', textDecoration: 'none' }}>Ajukan kolaborasi</a>
              <a href="#pakar" style={{ border: '1.5px solid #D3EBDF', color: '#FFFFFF', padding: '12px 20px', borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>Cari pakar</a>
            </div>
          </div>
          <div style={{ flex: '2 1 380px', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
            <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '20px' }}><div style={{ fontSize: '13px', color: '#44574E', fontWeight: 600 }}>Program PkM 2025</div><div style={{ fontSize: '34px', fontWeight: 800, color: '#064E3B' }}>118</div></div>
            <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '20px' }}><div style={{ fontSize: '13px', color: '#44574E', fontWeight: 600 }}>Mitra aktif</div><div style={{ fontSize: '34px', fontWeight: 800, color: '#064E3B' }}>64</div></div>
            <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '20px' }}><div style={{ fontSize: '13px', color: '#44574E', fontWeight: 600 }}>Desa binaan</div><div style={{ fontSize: '34px', fontWeight: 800, color: '#064E3B' }}>27</div></div>
            <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', padding: '20px' }}><div style={{ fontSize: '13px', color: '#44574E', fontWeight: 600 }}>Pakar tersertifikasi</div><div style={{ fontSize: '34px', fontWeight: 800, color: '#064E3B' }}>39</div></div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '28px 32px 64px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <section style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '18px', padding: '26px', display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ flex: '3 1 520px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '22px', color: '#064E3B' }}>Jangkauan pengabdian di NTB</h2>
            <div style={{ flex: 1, minHeight: '300px', borderRadius: '14px', background: '#E3F1EA', border: '1.5px dashed #9CCFB6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0A6B4F', fontSize: '14px', fontWeight: 600 }}>[Peta Interaktif PkM NTB]</div>
          </div>
          <div style={{ flex: '2 1 320px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '14px', fontWeight: 800, marginBottom: '4px' }}>Program per kabupaten/kota (2025)</div>
            {regions.map((r, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr 36px', gap: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>{r.n}</span>
                <span style={{ height: '10px', background: '#EEF3F0', borderRadius: '999px', overflow: 'hidden', display: 'block' }}>
                  <span style={{ display: 'block', height: '10px', width: r.w, background: '#0A6B4F' }}></span>
                </span>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#064E3B', textAlign: 'right' }}>{r.v}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ margin: '0 0 14px', fontSize: '22px', color: '#064E3B' }}>Program unggulan</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
            {progs.map((p, i) => (
              <article key={i} style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '140px', background: '#D3EBDF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0A6B4F', fontSize: '12px' }}>[Foto program]</div>
                <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#8E1B20' }}>{p.tag}</span>
                  <span style={{ fontSize: '17px', fontWeight: 800 }}>{p.t}</span>
                  <span style={{ fontSize: '14px', color: '#44574E' }}>{p.d}</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#0A6B4F' }}>Mitra: {p.m}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="pakar" style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '18px', padding: '26px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h2 style={{ margin: 0, fontSize: '22px', color: '#064E3B' }}>Direktori pakar & layanan profesional</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px' }}>
            {experts.map((e, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '14px', borderRadius: '12px', background: '#F4F8F6' }}>
                <span style={{ flex: 'none', width: '48px', height: '48px', borderRadius: '50%', background: '#D3EBDF' }}></span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontWeight: 800, fontSize: '14px' }}>{e.n}</span>
                  <span style={{ fontSize: '12px', color: '#44574E' }}>{e.f}</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#6B4E00' }}>{e.c}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="ajukan" style={{ background: '#FFF8E1', border: '1px solid #F2D27A', borderRadius: '18px', padding: '28px', display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h2 style={{ margin: 0, fontSize: '24px', color: '#3D2E00' }}>Ajukan kolaborasi pengabdian</h2>
            <p style={{ margin: 0, fontSize: '15px', color: '#5A4500' }}>Untuk desa, komunitas, UMKM, dan industri. Kami akan hubungkan dengan pakar yang sesuai.</p>
          </div>
          <form style={{ flex: '2 1 560px', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
            <input type="text" placeholder="Nama lembaga / komunitas" style={{ height: '46px', border: '1.5px solid #E2C46A', borderRadius: '10px', padding: '0 12px' }} />
            <input type="text" placeholder="Kabupaten / Kota" style={{ height: '46px', border: '1.5px solid #E2C46A', borderRadius: '10px', padding: '0 12px' }} />
            <textarea placeholder="Kebutuhan / permasalahan" rows="3" style={{ gridColumn: '1 / span 2', border: '1.5px solid #E2C46A', borderRadius: '10px', padding: '10px 12px' }}></textarea>
            <button type="button" style={{ gridColumn: '1 / span 2', height: '46px', border: 0, borderRadius: '10px', background: '#064E3B', color: '#FFFFFF', fontWeight: 800, cursor: 'pointer' }}>Kirim permintaan</button>
          </form>
        </section>
      </div>
    </div>
  );
}