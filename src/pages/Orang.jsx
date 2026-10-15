import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import peopleData from '../data/people.json';

export default function Orang() {
  const [tab, setTab] = useState('dosen');

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#13231C', background: '#F4F8F6', minHeight: '100vh' }}>
      <section style={{ background: '#064E3B', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '22px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '13px', color: '#B7DCC9' }}>
            <Link to="/" style={{ color: '#B7DCC9' }}>Beranda</Link> / <span style={{ color: '#FFFFFF' }}>Orang</span>
          </nav>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'flex-end', padding: '18px 0 26px' }}>
            <div>
              <h1 style={{ margin: '0 0 10px', fontSize: '40px', fontWeight: 800 }}>Orang di UNIZAR</h1>
              <p style={{ margin: 0, fontSize: '16px', color: '#D3EBDF', maxWidth: '640px' }}>Pimpinan, dosen, dan tenaga kependidikan — kualifikasi dan kepakaran yang menggerakkan tridharma.</p>
            </div>
          </div>
          <div role="tablist" style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {[['pimpinan', 'Pimpinan'], ['dosen', 'Dosen & Kepakaran'], ['tendik', 'Tenaga Kependidikan']].map(([k, label]) => (
              <button key={k} onClick={() => setTab(k)} style={{ border: 0, cursor: 'pointer', padding: '13px 18px', fontSize: '15px', fontWeight: 700, borderRadius: '12px 12px 0 0', background: tab === k ? '#F4F8F6' : 'transparent', color: tab === k ? '#064E3B' : '#D3EBDF', minHeight: '48px' }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '28px 32px 64px' }}>
        {tab === 'pimpinan' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '16px' }}>
            {peopleData.leaders.map((l, i) => (
              <div key={i} style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ height: '160px', background: '#D3EBDF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0A6B4F' }}>[Foto Resmi]</div>
                <div style={{ padding: '16px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#8A6500' }}>{l.role}</span>
                  <div style={{ fontSize: '16px', fontWeight: 800, marginTop: '4px' }}>{l.name}</div>
                  <div style={{ fontSize: '13px', color: '#44574E' }}>{l.unit}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'dosen' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '16px' }}>
            {peopleData.lecturers.map((d) => (
              <div key={d.id} style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '14px', padding: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#D3EBDF', flexNone: true }}></div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '15px' }}>{d.name}</div>
                  <div style={{ fontSize: '12px', color: '#44574E' }}>{d.faculty} · {d.field}</div>
                  <span style={{ display: 'inline-block', marginTop: '4px', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '999px', background: '#E3F1EA', color: '#064E3B' }}>{d.academicRank}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'tendik' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '12px' }}>
            {peopleData.staffSummary.map((s, i) => (
              <div key={i} style={{ background: '#FFFFFF', border: '1px solid #DCE6E0', borderRadius: '14px', padding: '18px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#44574E' }}>{s.label}</span>
                <div style={{ fontSize: '30px', fontWeight: 800, color: '#064E3B', marginTop: '4px' }}>{s.count}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}