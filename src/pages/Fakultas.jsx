import React, { useState, useMemo } from 'react';
import { Link, useParams, useSearchParams, Navigate } from 'react-router-dom';
import data from '../data/fakultas.json';

const C = {
  primary: '#064E3B',
  mid: '#0A6B4F',
  gold: '#F2C230',
  bg: '#F4F8F6',
  text: '#13231C',
  muted: '#44574E',
  border: '#DCE6E0',
  light: '#D3EBDF',
  soft: '#E3F1EA',
  white: '#FFFFFF',
};

/** Daftar semua fakultas — banner hijau + tombol kembali (tanpa submenu, agar tidak double dengan Header) */
function FakultasList() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: C.text, background: C.bg, minHeight: '100vh' }}>
      <section style={{ background: C.primary, color: C.white }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '18px 32px 28px' }}>
          <div style={{ marginBottom: 14 }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: C.light,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
                padding: '8px 14px',
                borderRadius: 10,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              ← Kembali
            </Link>
          </div>

          <nav style={{ fontSize: 13, color: '#B7DCC9', marginBottom: 10 }}>
            <Link to="/" style={{ color: '#B7DCC9', textDecoration: 'none' }}>Beranda</Link>
            {' / '}
            <span style={{ color: C.white, fontWeight: 600 }}>Fakultas</span>
          </nav>

          <h1 style={{ margin: 0, fontSize: 36, fontWeight: 800, color: C.white, lineHeight: 1.15 }}>
            Fakultas & Program Studi
          </h1>
        </div>
      </section>

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '28px 32px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 16 }}>
          {data.fakultas.map((f) => (
            <div
              key={f.id}
              style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                borderRadius: 16,
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                borderTop: `5px solid ${C.mid}`,
              }}
            >
              <Link to={`/fakultas/${f.id}`} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{
                  width: 44, height: 44, borderRadius: 10, background: C.soft, color: C.primary,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, flexShrink: 0,
                }}>
                  {f.singkatan}
                </span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 18, color: C.primary }}>{f.nama}</div>
                </div>
              </Link>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', color: '#8A6500', textTransform: 'uppercase' }}>
                  Program Studi
                </div>
                {f.prodi.map((p) => (
                  <Link
                    key={p.id}
                    to={`/fakultas/${f.id}/${p.id}/profil`}
                    style={{
                      fontSize: 14, fontWeight: 600, color: C.text, padding: '8px 10px', borderRadius: 8,
                      background: C.bg, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8,
                    }}
                  >
                    <span>
                      <span style={{ color: C.mid, fontWeight: 800, marginRight: 6 }}>{p.jenjang}</span>
                      {p.nama}
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: C.primary, whiteSpace: 'nowrap' }}>
                      {p.akreditasi.peringkat}
                    </span>
                  </Link>
                ))}
              </div>

              <Link to={`/fakultas/${f.id}?tab=lab`} style={{ marginTop: 'auto', fontWeight: 700, fontSize: 14, color: C.mid }}>
                Laboratorium & Fasilitas →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Detail satu fakultas */
function FakultasDetail({ fac }) {
  const [sp, setSp] = useSearchParams();
  const tab = sp.get('tab') || 'beranda';
  const setTab = (t) => setSp(t === 'beranda' ? {} : { tab: t });

  const [dosenSearch, setDosenSearch] = useState('');
  const [dosenJad, setDosenJad] = useState('all');
  const [dosenFac, setDosenFac] = useState('all');

  const tabs = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'prodi', label: 'Program Studi' },
    { id: 'lab', label: 'Laboratorium & Fasilitas' },
    { id: 'dosen', label: 'Dosen' },
  ];

  const dosen = useMemo(
    () =>
      Array.from(
        new Map(fac.prodi.flatMap((p) => p.dosen.map((d) => [d.nama, { ...d, prodi: p.nama }]))).values()
      ),
    [fac]
  );

  const filteredDosen = useMemo(() => {
    return dosen.filter((d) => {
      const matchFac = dosenFac === 'all' || fac.nama === dosenFac;
      const matchJad = dosenJad === 'all' || d.jabatan === dosenJad;
      const q = dosenSearch.toLowerCase();
      const matchSearch =
        !q ||
        d.nama.toLowerCase().includes(q) ||
        (d.bidang || '').toLowerCase().includes(q) ||
        (d.prodi || '').toLowerCase().includes(q);
      return matchFac && matchJad && matchSearch;
    });
  }, [dosen, fac.nama, dosenFac, dosenJad, dosenSearch]);

  const JAD_STATS_FIXED = [
    { l: 'Guru Besar', v: '4%', w: '4%' },
    { l: 'Lektor Kepala', v: '30%', w: '30%' },
    { l: 'Lektor', v: '41%', w: '41%' },
    { l: 'Asisten Ahli', v: '19%', w: '19%' },
    { l: 'Belum JAD', v: '6%', w: '6%' },
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: C.text, background: C.bg, minHeight: '100vh' }}>
      <div style={{ background: C.primary, color: C.white }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ paddingTop: 14, marginBottom: 8 }}>
            <Link
              to="/fakultas"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: C.light,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
                padding: '8px 14px',
                borderRadius: 10,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              ← Kembali ke daftar fakultas
            </Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 4 }}>
            <span style={{
              width: 36, height: 36, borderRadius: 8, background: C.white, color: C.primary,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13,
            }}>
              {fac.singkatan}
            </span>
            <span style={{ fontWeight: 800, fontSize: 16 }}>{fac.nama}</span>
          </div>
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 8 }}>
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                style={{
                  background: 'none', border: 'none',
                  color: tab === t.id ? C.white : C.light,
                  padding: '14px 12px',
                  borderBottom: tab === t.id ? `3px solid ${C.gold}` : '3px solid transparent',
                  cursor: 'pointer', fontWeight: 700, fontSize: 14, fontFamily: 'inherit',
                }}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '26px 32px 64px' }}>
        <nav style={{ fontSize: 13, color: C.muted, marginBottom: 20 }}>
          <Link to="/fakultas" style={{ color: C.mid }}>Fakultas</Link>
          {' / '}
          <span style={{ color: C.text, fontWeight: 600 }}>{fac.nama}</span>
        </nav>

        {tab === 'beranda' && (
          <>
            <section style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginBottom: 28 }}>
              <div style={{ flex: '3 1 520px', background: C.white, border: `1px solid ${C.border}`, borderRadius: 20, padding: 32 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', color: '#8A6500', textTransform: 'uppercase' }}>
                  Diferensiasi fakultas
                </div>
                <h1 style={{ margin: '10px 0 18px', fontSize: 30, color: C.primary, fontWeight: 800, lineHeight: 1.2 }}>{fac.tagline}</h1>
                <a
                  href="#"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: 'transparent',
                    color: C.primary,
                    border: `1.5px solid ${C.border}`,
                    padding: '10px 16px',
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: 'none',
                  }}
                >
                  Renstra Fakultas
                </a>
              </div>

              <div style={{ flex: '1 1 280px', background: C.primary, color: C.white, borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 12, border: '2px dashed rgba(255,255,255,.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: C.light, flexShrink: 0,
                  }}>
                    Foto
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: C.gold, letterSpacing: '.08em' }}>DEKAN</div>
                    <div style={{ fontSize: 15, fontWeight: 800 }}>{fac.dekan}</div>
                    <a href="#" style={{ fontSize: 13, fontWeight: 700, color: C.light, textDecoration: 'none' }}>Sambutan dekan →</a>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {fac.stats.map((s) => (
                    <div key={s.label} style={{ background: 'rgba(255,255,255,.1)', borderRadius: 12, padding: '12px 14px' }}>
                      <div style={{ fontSize: 24, fontWeight: 800 }}>{s.value}</div>
                      <div style={{ fontSize: 12, color: C.light }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 11, color: 'rgba(211,235,223,.85)' }}>Angka simulasi · sinkron PD Dikti</div>
              </div>
            </section>

            <h2 style={{ margin: '0 0 14px', fontSize: 24, color: C.primary }}>Program studi</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 14, marginBottom: 28 }}>
              {fac.prodi.map((p, i) => (
                <Link
                  key={p.id}
                  to={`/fakultas/${fac.id}/${p.id}/profil`}
                  style={{
                    background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: 22,
                    borderTop: `5px solid ${i === 0 ? C.mid : '#3A9B76'}`,
                    display: 'flex', flexDirection: 'column', gap: 8, color: C.text,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase' }}>{p.jenjang === 'Profesi' ? 'Profesi' : `Sarjana (${p.jenjang})`}</span>
                    <span style={{ fontSize: 11, fontWeight: 800, padding: '3px 9px', borderRadius: 999, background: C.soft, color: C.primary }}>
                      {p.akreditasi.peringkat} · {p.akreditasi.lembaga}
                    </span>
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 800 }}>{p.nama}</div>
                  <div style={{ fontSize: 14, color: C.muted }}>Kurikulum OBE · {p.sks} sks · {p.semester} semester · gelar {p.gelar}</div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: C.mid, marginTop: 'auto' }}>Buka halaman prodi →</span>
                </Link>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 16, marginBottom: 28 }}>
              <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 18, padding: 24 }}>
                <h3 style={{ margin: '0 0 16px', fontSize: 20, color: C.primary }}>Mutu Fakultas (Gugus Penjaminan Mutu)</h3>
                {[
                  { n: 'Renstra & Standar Fakultas', b: 'Publik', bg: C.soft, fg: C.primary },
                  { n: 'Laporan Kinerja Fakultas 2025', b: 'Ringkasan', bg: '#FFF1C2', fg: '#6B4E00' },
                  { n: 'Laporan AMI & RTM Fakultas', b: 'Terbatas', bg: '#FBE3E4', fg: '#8E1B20' },
                  { n: 'Hasil Survei Kepuasan Mahasiswa', b: 'Ringkasan', bg: '#FFF1C2', fg: '#6B4E00' },
                ].map((row) => (
                  <div
                    key={row.n}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
                      padding: '12px 0', borderBottom: '1px solid #EEF3F0',
                    }}
                  >
                    <span style={{ fontSize: 15, fontWeight: 600, color: C.text }}>{row.n}</span>
                    <span style={{ flex: 'none', fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 999, background: row.bg, color: row.fg }}>
                      {row.b}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 18, padding: 24 }}>
                <h3 style={{ margin: '0 0 16px', fontSize: 20, color: C.primary }}>Kelompok keilmuan & pakar</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
                  {(fac.prodi || []).slice(0, 4).map((p) => (
                    <div key={p.id} style={{ background: C.bg, borderRadius: 12, padding: 14 }}>
                      <div style={{ fontWeight: 800, fontSize: 14, color: C.primary }}>{p.nama}</div>
                      <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>
                        {p.dosen?.length || 0} dosen · kepakaran prodi
                      </div>
                    </div>
                  ))}
                </div>
                <button type="button" onClick={() => setTab('dosen')} style={{ background: 'none', border: 'none', color: C.mid, fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}>
                  Cari pakar fakultas →
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
              <h2 style={{ margin: 0, fontSize: 24, color: C.primary }}>Kabar fakultas</h2>
              <a href="#" style={{ fontSize: 14, fontWeight: 700, color: C.mid, textDecoration: 'none' }}>Semua berita →</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 14, marginBottom: 28 }}>
              {[
                { cat: 'Akademik', title: `Kegiatan akademik ${fac.nama}` },
                { cat: 'Penelitian', title: `Publikasi & riset dosen ${fac.singkatan}` },
                { cat: 'Pengabdian', title: `Pengabdian masyarakat ${fac.singkatan}` },
                { cat: 'Prestasi', title: `Prestasi mahasiswa ${fac.singkatan}` },
              ].map((n) => (
                <div key={n.cat} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, overflow: 'hidden' }}>
                  <div style={{ height: 100, background: `linear-gradient(135deg, ${C.soft}, ${C.light})` }} />
                  <div style={{ padding: 16 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.08em', color: C.mid, textTransform: 'uppercase' }}>{n.cat}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: C.text, marginTop: 6, lineHeight: 1.35 }}>{n.title}</div>
                    <div style={{ fontSize: 12, color: C.muted, marginTop: 8 }}>[tg]</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 24, color: C.primary, marginBottom: 14 }}>Laboratorium & Fasilitas</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 12 }}>
              {fac.lab.map((l) => (
                <div key={l.nama} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 14, padding: 18 }}>
                  <div style={{ fontWeight: 800, fontSize: 15, color: C.primary }}>{l.nama}</div>
                  <div style={{ fontSize: 13, color: C.muted, marginTop: 6 }}>{l.fungsi}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'prodi' && (
          <>
            <h2 style={{ fontSize: 28, color: C.primary, marginBottom: 8 }}>Program Studi</h2>
            <p style={{ color: C.muted, marginBottom: 20 }}>Klik prodi untuk melihat profil, akreditasi, kurikulum, dan dosen.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 16 }}>
              {fac.prodi.map((p) => (
                <Link
                  key={p.id}
                  to={`/fakultas/${fac.id}/${p.id}/profil`}
                  style={{
                    background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24,
                    borderLeft: `5px solid ${C.mid}`, display: 'flex', flexDirection: 'column', gap: 10, color: C.text,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: C.mid }}>{p.jenjang}</span>
                    <span style={{ fontSize: 11, fontWeight: 800, padding: '3px 9px', borderRadius: 999, background: C.soft, color: C.primary }}>
                      Akreditasi {p.akreditasi.peringkat}
                    </span>
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 800 }}>{p.nama}</div>
                  {p.profil ? (
                    <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.5, margin: 0 }}>{p.profil.slice(0, 120)}…</p>
                  ) : null}
                  <span style={{ fontWeight: 700, color: C.mid, fontSize: 14 }}>Lihat detail →</span>
                </Link>
              ))}
            </div>
          </>
        )}

        {tab === 'lab' && (
          <>
            <h2 style={{ fontSize: 28, color: C.primary, marginBottom: 8 }}>Laboratorium & Fasilitas</h2>
            <p style={{ color: C.muted, marginBottom: 20 }}>Fasilitas di {fac.nama}.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 14 }}>
              {fac.lab.map((l, i) => (
                <div key={l.nama} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, overflow: 'hidden' }}>
                  <div style={{
                    height: 90, background: `linear-gradient(135deg, ${C.soft}, ${C.light})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28, fontWeight: 800, color: C.primary, opacity: 0.35,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ padding: 18 }}>
                    <div style={{ fontWeight: 800, fontSize: 16, color: C.primary }}>{l.nama}</div>
                    <div style={{ fontSize: 14, color: C.muted, marginTop: 8 }}>{l.fungsi}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'dosen' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid #DCE6E0',
                borderRadius: 16,
                padding: 16,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                alignItems: 'flex-end',
              }}
            >
              <div style={{ flex: '3 1 320px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="o-q" style={{ fontSize: 12, fontWeight: 700, color: '#44574E' }}>
                  Nama atau bidang keahlian
                </label>
                <input
                  id="o-q"
                  type="search"
                  placeholder="mis. kedokteran kerja, hukum pidana, agribisnis"
                  value={dosenSearch}
                  onChange={(e) => setDosenSearch(e.target.value)}
                  style={{
                    height: 46,
                    border: '1.5px solid #B9CCC2',
                    borderRadius: 10,
                    padding: '0 14px',
                    fontSize: 15,
                    outline: 'none',
                    fontFamily: 'inherit',
                  }}
                />
              </div>
              <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="o-f" style={{ fontSize: 12, fontWeight: 700, color: '#44574E' }}>
                  Fakultas
                </label>
                <select
                  id="o-f"
                  value={dosenFac}
                  onChange={(e) => setDosenFac(e.target.value)}
                  style={{
                    height: 46,
                    border: '1.5px solid #B9CCC2',
                    borderRadius: 10,
                    padding: '0 12px',
                    fontSize: 15,
                    background: '#FFFFFF',
                    fontFamily: 'inherit',
                  }}
                >
                  <option value="all">Semua fakultas</option>
                  <option value="Fakultas Kedokteran">Fakultas Kedokteran</option>
                  <option value="Fakultas Hukum">Fakultas Hukum</option>
                  <option value="Fakultas Teknik">Fakultas Teknik</option>
                  <option value="Fakultas Pertanian">Fakultas Pertanian</option>
                  <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                  <option value="Fakultas Agama Islam">Fakultas Agama Islam</option>
                </select>
              </div>
              <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="o-j" style={{ fontSize: 12, fontWeight: 700, color: '#44574E' }}>
                  Jabatan akademik
                </label>
                <select
                  id="o-j"
                  value={dosenJad}
                  onChange={(e) => setDosenJad(e.target.value)}
                  style={{
                    height: 46,
                    border: '1.5px solid #B9CCC2',
                    borderRadius: 10,
                    padding: '0 12px',
                    fontSize: 15,
                    background: '#FFFFFF',
                    fontFamily: 'inherit',
                  }}
                >
                  <option value="all">Semua</option>
                  <option value="Guru Besar">Guru Besar</option>
                  <option value="Lektor Kepala">Lektor Kepala</option>
                  <option value="Lektor">Lektor</option>
                  <option value="Asisten Ahli">Asisten Ahli</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-start' }}>
              <div
                style={{
                  flex: '999 1 640px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: 12,
                }}
              >
                {filteredDosen.map((d, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #DCE6E0',
                      borderRadius: 14,
                      padding: 16,
                      display: 'flex',
                      gap: 12,
                      textDecoration: 'none',
                      color: '#13231C',
                    }}
                  >
                    <span
                      style={{
                        flex: 'none',
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        background: '#D3EBDF',
                      }}
                    />
                    <span style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <span style={{ fontWeight: 800, fontSize: 15 }}>{d.nama}</span>
                      <span style={{ fontSize: 12, color: '#44574E' }}>
                        {d.prodi} · {d.bidang}
                      </span>
                      <span style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 2 }}>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            padding: '2px 8px',
                            borderRadius: 999,
                            background: '#E3F1EA',
                            color: '#064E3B',
                          }}
                        >
                          {d.jabatan}
                        </span>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            padding: '2px 8px',
                            borderRadius: 999,
                            background: '#F4F8F6',
                            color: '#44574E',
                          }}
                        >
                          {d.pendidikan || 'Magister'}
                        </span>
                      </span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#0A6B4F', marginTop: 2 }}>
                        SINTA · Scholar · Scopus ↗
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <aside
                style={{
                  flex: '1 1 300px',
                  background: '#FFFFFF',
                  border: '1px solid #DCE6E0',
                  borderRadius: 16,
                  padding: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 800 }}>Komposisi jabatan akademik</div>
                {JAD_STATS_FIXED.map((j, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '110px 1fr 40px',
                      gap: 10,
                      alignItems: 'center',
                      fontSize: 13,
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{j.l}</span>
                    <span
                      style={{
                        height: 10,
                        background: '#EEF3F0',
                        borderRadius: 999,
                        overflow: 'hidden',
                        display: 'block',
                      }}
                    >
                      <span style={{ display: 'block', height: 10, width: j.w, background: '#0A6B4F' }} />
                    </span>
                    <span style={{ fontWeight: 800, textAlign: 'right' }}>{j.v}</span>
                  </div>
                ))}
                <span style={{ fontSize: 12, color: '#44574E' }}>
                  Sumber: PD Dikti · data simulasi. Data pribadi tidak ditampilkan.
                </span>
              </aside>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/** Router internal: /fakultas atau /fakultas/:id */
export default function Fakultas() {
  const { id } = useParams();
  if (!id) return <FakultasList />;
  const fac = data.fakultas.find((f) => f.id === id);
  if (!fac) return <Navigate to="/fakultas" replace />;
  return <FakultasDetail fac={fac} />;
}
