import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PetaBanpt() {
  const [k, setK] = useState(0);

  const KR = [
    { no: 1, label: 'Budaya Mutu', from: 1, to: 4 },
    { no: 2, label: 'Relevansi Pendidikan', from: 5, to: 15 },
    { no: 3, label: 'Relevansi Penelitian', from: 16, to: 19 },
    { no: 4, label: 'Relevansi PkM', from: 20, to: 23 },
    { no: 5, label: 'Akuntabilitas', from: 24, to: 35 },
    { no: 6, label: 'Diferensiasi Misi', from: 36, to: 39 }
  ];

  const IND = [
    [1, 'Masukan', 'SPMI dikembangkan dengan tata kelola baik, akuntabel, transparan, nirlaba, efektif & efisien.', 'BPM › SPMI', 'lock'],
    [2, 'Proses', 'Implementasi SPMI melalui siklus PPEPP di bidang akademik & non-akademik.', 'BPM › PPEPP', 'lock'],
    [3, 'Luaran', 'Laporan implementasi SPMI & kinerja PT berkala, dikelola melalui PD Dikti.', 'BPM › PDDIKTI', 'sum'],
    [4, 'Dampak', 'Pengakuan mutu: akreditasi program studi dari LAM / BAN-PT.', 'Beranda › Akreditasi', 'pub'],
    [5, 'Masukan', 'Kebijakan & pedoman penyusunan, pelaksanaan, evaluasi kurikulum OBE.', 'Pendidikan › Kurikulum', 'pub']
  ];

  const ACC = { pub: ['Publik', '#E3F1EA', '#064E3B'], sum: ['Ringkasan', '#FFF1C2', '#6B4E00'], lock: ['Terbatas', '#FBE3E4', '#8E1B20'] };

  const rows = IND.filter(x => !k || (x[0] >= KR[k - 1].from && x[0] <= KR[k - 1].to));

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#13231C', background: '#F4F8F6', minHeight: '100vh' }}>
      <section style={{ background: '#FFF8E1', borderBottom: '1px solid #F2D27A' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '22px 32px 28px', display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <nav style={{ fontSize: '13px', color: '#5A4500', marginBottom: '12px' }}>
              <Link to="/" style={{ color: '#5A4500' }}>Beranda</Link> / Direktori / <span style={{ fontWeight: 700 }}>Peta Bukti BAN-PT</span>
            </nav>
            <h1 style={{ margin: '0 0 8px', fontSize: '38px', color: '#3D2E00', fontWeight: 800 }}>Peta Bukti BAN-PT</h1>
            <p style={{ margin: 0, fontSize: '16px', color: '#5A4500', maxWidth: '760px' }}>Instrumen Akreditasi Perguruan Tinggi (IAPT) — Status Terakreditasi Unggul.</p>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '26px 32px 64px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', gap: '12px' }}>
          {KR.map(c => {
            const sel = k === c.no;
            return (
              <button key={c.no} onClick={() => setK(sel ? 0 : c.no)} style={{ textAlign: 'left', cursor: 'pointer', background: sel ? '#064E3B' : '#FFFFFF', border: `1.5px solid ${sel ? '#064E3B' : '#DCE6E0'}`, borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: sel ? '#F2C230' : '#8A6500' }}>KRITERIA {c.no}</span>
                <span style={{ fontSize: '16px', fontWeight: 800, color: sel ? '#FFFFFF' : '#13231C' }}>{c.label}</span>
              </button>
            );
          })}
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: '#F4F8F6', textAlign: 'left', color: '#44574E', fontSize: '12px' }}>
                <th style={{ padding: '14px 16px' }}>Tahap</th>
                <th style={{ padding: '14px 12px' }}>Sasaran & Uraian Mutu</th>
                <th style={{ padding: '14px 12px' }}>Bukti di Website</th>
                <th style={{ padding: '14px 12px' }}>Akses</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const a = ACC[r[4]];
                return (
                  <tr key={i} style={{ borderTop: '1px solid #EEF3F0' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 800, color: '#8A6500' }}>{r[1]}</td>
                    <td style={{ padding: '14px 12px', color: '#2B3D35' }}>{r[2]}</td>
                    <td style={{ padding: '14px 12px', fontWeight: 600, color: '#0A6B4F' }}>{r[3]}</td>
                    <td style={{ padding: '14px 12px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 9px', borderRadius: '999px', background: a[1], color: a[2] }}>{a[0]}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}