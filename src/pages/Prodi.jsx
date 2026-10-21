import React, { useState, useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
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

function findProdi(slug) {
  for (const f of data.fakultas) {
    const p = f.prodi.find((x) => x.id === slug);
    if (p) return { prodi: p, fakultas: f };
  }
  return null;
}

export default function Prodi() {
  const { id } = useParams();
  const [tab, setTab] = useState('profil');
  const [dosenSearch, setDosenSearch] = useState('');
  const [dosenJad, setDosenJad] = useState('all');
  const [dosenFac, setDosenFac] = useState('all');

  const found = findProdi(id || 'pendidikan-dokter');
  if (!found) return <Navigate to="/fakultas" replace />;

  const { prodi: p, fakultas: f } = found;
  const kurikulum = p.kurikulum || [];
  const bySem = kurikulum.reduce((a, r) => {
    (a[r.sem] = a[r.sem] || []).push(r);
    return a;
  }, {});

  const tabs = [
    { id: 'profil', label: 'Profil' },
    { id: 'akreditasi', label: 'Akreditasi' },
    { id: 'kurikulum', label: 'Kurikulum' },
    { id: 'lulusan', label: 'Lulusan' },
    { id: 'dosen', label: 'Dosen' },
  ];

  const filteredDosen = useMemo(() => {
    return (p.dosen || []).filter((d) => {
      const matchFac = dosenFac === 'all' || f.nama === dosenFac;
      const matchJad = dosenJad === 'all' || d.jabatan === dosenJad;
      const q = dosenSearch.toLowerCase();
      const matchSearch =
        !q ||
        d.nama.toLowerCase().includes(q) ||
        (d.bidang || '').toLowerCase().includes(q);
      return matchFac && matchJad && matchSearch;
    });
  }, [p.dosen, f.nama, dosenFac, dosenJad, dosenSearch]);

  // Komposisi tetap seperti Orang (persentase simulasi + dari data prodi)
  const JAD_STATS_FIXED = [
    { l: 'Guru Besar', v: '4%', w: '4%' },
    { l: 'Lektor Kepala', v: '30%', w: '30%' },
    { l: 'Lektor', v: '41%', w: '41%' },
    { l: 'Asisten Ahli', v: '19%', w: '19%' },
    { l: 'Belum JAD', v: '6%', w: '6%' },
  ];

  const jadStats = useMemo(() => {
    const list = p.dosen || [];
    const total = list.length || 1;
    const order = ['Guru Besar', 'Lektor Kepala', 'Lektor', 'Asisten Ahli'];
    const counts = {};
    list.forEach((d) => {
      const key = order.includes(d.jabatan) ? d.jabatan : 'Lainnya';
      counts[key] = (counts[key] || 0) + 1;
    });
    return order
      .filter((l) => counts[l])
      .map((l) => {
        const pct = Math.round((counts[l] / total) * 100);
        return { l, v: `${pct}%`, w: `${pct}%` };
      });
  }, [p.dosen]);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: C.text, background: C.bg, minHeight: '100vh' }}>
      <section style={{ background: C.primary, color: C.white }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '22px 32px 0' }}>
          <nav style={{ fontSize: 13, color: '#B7DCC9' }}>
            <Link to="/" style={{ color: '#B7DCC9' }}>Beranda</Link>
            {' / '}
            <Link to="/fakultas" style={{ color: '#B7DCC9' }}>Fakultas</Link>
            {' / '}
            <Link to={`/fakultas/${f.id}`} style={{ color: '#B7DCC9' }}>{f.nama}</Link>
            {' / '}
            <span style={{ color: C.white }}>{p.nama}</span>
          </nav>

          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'space-between',
            alignItems: 'flex-end', padding: '18px 0 0',
          }}>
            <div>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.gold, letterSpacing: '.08em' }}>
                PROGRAM {p.jenjang === 'Profesi' ? 'PROFESI' : 'SARJANA'} · {f.nama.toUpperCase()}
              </span>
              <h1 style={{ margin: '8px 0 10px', fontSize: 36, fontWeight: 800 }}>{p.nama}</h1>
              <p style={{ margin: 0, fontSize: 15, color: C.light, maxWidth: 640 }}>{p.profil.slice(0, 140)}…</p>
            </div>
            <div style={{
              background: C.white, color: C.text, borderRadius: 16, padding: '16px 20px',
              display: 'flex', gap: 20, marginBottom: 16,
            }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase' }}>Akreditasi</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: C.primary }}>{p.akreditasi.peringkat}</div>
                <div style={{ fontSize: 12, color: C.muted }}>{p.akreditasi.lembaga}</div>
              </div>
              <div style={{ width: 1, height: 40, background: C.border }} />
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase' }}>Gelar</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: C.primary }}>{p.gelar}</div>
                <div style={{ fontSize: 12, color: C.muted }}>{p.sks} sks · {p.semester} smt</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 4, overflowX: 'auto' }}>
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                style={{
                  background: tab === t.id ? C.bg : 'transparent', border: 'none', padding: '14px 18px',
                  fontWeight: 700, fontSize: 14, color: tab === t.id ? C.primary : C.light,
                  borderRadius: '12px 12px 0 0', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'inherit',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '28px 32px 64px' }}>
        {tab === 'profil' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 18, padding: 26 }}>
              <h2 style={{ margin: '0 0 12px', fontSize: 22, color: C.primary }}>Profil Program Studi</h2>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: '#2B3D35' }}>{p.profil}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginTop: 20 }}>
                {[
                  { l: 'Jenjang', v: p.jenjang },
                  { l: 'Gelar', v: p.gelar },
                  { l: 'SKS', v: `${p.sks}` },
                  { l: 'Semester', v: `${p.semester}` },
                ].map((x) => (
                  <div key={x.l} style={{ background: C.bg, borderRadius: 12, padding: 14 }}>
                    <div style={{ fontSize: 12, color: C.muted, fontWeight: 600 }}>{x.l}</div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: C.primary, marginTop: 4 }}>{x.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 18, padding: 26 }}>
              <h2 style={{ margin: '0 0 12px', fontSize: 22, color: C.primary }}>Capaian Pembelajaran (CPL)</h2>
              {p.cpl.map((c, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '70px 1fr 70px', gap: 12, padding: '12px 0',
                  borderBottom: i < p.cpl.length - 1 ? '1px solid #EEF3F0' : 'none', alignItems: 'center',
                }}>
                  <span style={{ fontWeight: 800, color: C.primary }}>{c.code}</span>
                  <span style={{ fontSize: 14 }}>{c.text}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.muted, textAlign: 'right' }}>{c.v}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'akreditasi' && (
          <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 18, padding: 26 }}>
            <h2 style={{ margin: '0 0 20px', fontSize: 22, color: C.primary }}>Status Akreditasi</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
              {[
                { l: 'Peringkat', v: p.akreditasi.peringkat },
                { l: 'Lembaga', v: p.akreditasi.lembaga },
                { l: 'Tahun SK', v: p.akreditasi.tahun },
                { l: 'Berlaku hingga', v: p.akreditasi.berlaku },
              ].map((x) => (
                <div key={x.l} style={{ background: C.bg, borderRadius: 14, padding: 20, borderTop: `4px solid ${C.mid}` }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: C.muted, textTransform: 'uppercase' }}>{x.l}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: C.primary, marginTop: 8 }}>{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'kurikulum' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 18, padding: 26 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', color: '#8A6500', textTransform: 'uppercase' }}>Kurikulum OBE</div>
                  <h2 style={{ margin: '6px 0 0', fontSize: 22, color: C.primary }}>Struktur Mata Kuliah</h2>
                </div>
                <div style={{ fontSize: 14, color: C.muted }}>
                  Total <strong style={{ color: C.primary }}>{p.sks} sks</strong>
                </div>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                  <thead>
                    <tr style={{ background: C.bg, textAlign: 'left', color: C.muted }}>
                      <th style={{ padding: '12px 14px' }}>Sem</th>
                      <th style={{ padding: '12px 14px' }}>Blok</th>
                      <th style={{ padding: '12px 14px' }}>Mata Kuliah</th>
                      <th style={{ padding: '12px 14px', textAlign: 'right' }}>SKS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kurikulum.map((k, i) => (
                      <tr key={i} style={{ borderTop: '1px solid #EEF3F0' }}>
                        <td style={{ padding: '12px 14px', fontWeight: 800, color: C.primary }}>{k.sem}</td>
                        <td style={{ padding: '12px 14px', color: C.muted }}>{k.blok}</td>
                        <td style={{ padding: '12px 14px' }}>{k.mk}</td>
                        <td style={{ padding: '12px 14px', fontWeight: 700, textAlign: 'right' }}>{k.sks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 12 }}>
              {Object.keys(bySem).sort((a, b) => Number(a) - Number(b)).map((sem) => {
                const total = bySem[sem].reduce((s, r) => s + Number(r.sks), 0);
                return (
                  <div key={sem} style={{
                    background: C.white, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16, textAlign: 'center',
                  }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: C.muted }}>Semester {sem}</div>
                    <div style={{ fontSize: 24, fontWeight: 800, color: C.primary }}>{total}</div>
                    <div style={{ fontSize: 12, color: C.muted }}>sks · {bySem[sem].length} MK</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === 'lulusan' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 18, padding: 26 }}>
              <h2 style={{ margin: '0 0 12px', fontSize: 22, color: C.primary }}>Profil Lulusan</h2>
              <p style={{ margin: '0 0 16px', fontSize: 15, lineHeight: 1.6 }}>{p.lulusan.ringkasan}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {p.lulusan.profil.map((pr) => (
                  <span key={pr} style={{
                    fontSize: 13, fontWeight: 700, padding: '6px 12px', borderRadius: 999, background: C.soft, color: C.primary,
                  }}>{pr}</span>
                ))}
              </div>
            </div>
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 18, padding: 26 }}>
              <h2 style={{ margin: '0 0 16px', fontSize: 22, color: C.primary }}>Tracer Study</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
                {[
                  { l: 'Bekerja', v: p.lulusan.tracer.bekerja, c: C.mid },
                  { l: 'Studi Lanjut', v: p.lulusan.tracer.studi_lanjut, c: '#3A9B76' },
                  { l: 'Wirausaha', v: p.lulusan.tracer.wirausaha, c: '#8A6500' },
                ].map((x) => (
                  <div key={x.l} style={{ textAlign: 'center', padding: 20, background: C.bg, borderRadius: 14 }}>
                    <div style={{ fontSize: 32, fontWeight: 800, color: x.c }}>{x.v}</div>
                    <div style={{ fontSize: 13, color: C.muted, fontWeight: 600 }}>{x.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}


        {/* TAB DOSEN — persis seperti Orang.jsx / screenshot */}
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
                        {f.nama} · {d.bidang}
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
