import React, { useState } from 'react';
import docsData from '../data/documents.json';

const PusatDokumen = () => {
  const [filter, setFilter] = useState('all');

  const filteredDocs = filter === 'all' 
    ? docsData 
    : docsData.filter(doc => doc.accessLevel === filter);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#064E3B', marginBottom: '8px' }}>Pusat Dokumen & Kebijakan</h1>
      <p style={{ color: '#44574E', marginBottom: '24px' }}>Repositori dokumen tata kelola, pedoman akademik, dan laporan penjaminan mutu UNIZAR.</p>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
        <button onClick={() => setFilter('all')} style={{ padding: '8px 16px', borderRadius: '20px', border: 'none', background: filter === 'all' ? '#0A6B4F' : '#E3F1EA', color: filter === 'all' ? '#FFF' : '#064E3B', fontWeight: '700', cursor: 'pointer' }}>Semua</button>
        <button onClick={() => setFilter('public')} style={{ padding: '8px 16px', borderRadius: '20px', border: 'none', background: filter === 'public' ? '#0A6B4F' : '#E3F1EA', color: filter === 'public' ? '#FFF' : '#064E3B', fontWeight: '700', cursor: 'pointer' }}>Publik</button>
        <button onClick={() => setFilter('summary')} style={{ padding: '8px 16px', borderRadius: '20px', border: 'none', background: filter === 'summary' ? '#0A6B4F' : '#E3F1EA', color: filter === 'summary' ? '#FFF' : '#064E3B', fontWeight: '700', cursor: 'pointer' }}>Ringkasan</button>
        <button onClick={() => setFilter('restricted')} style={{ padding: '8px 16px', borderRadius: '20px', border: 'none', background: filter === 'restricted' ? '#0A6B4F' : '#E3F1EA', color: filter === 'restricted' ? '#FFF' : '#064E3B', fontWeight: '700', cursor: 'pointer' }}>Terbatas</button>
      </div>

      {/* Daftar Dokumen */}
      <div style={{ display: 'grid', gap: '16px' }}>
        {filteredDocs.map((doc) => (
          <div key={doc.id} style={{ background: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1px solid #DCE6E0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700' }}>{doc.title}</h3>
                <span className={`badge-${doc.accessLevel}`}>
                  {doc.accessLevel === 'public' ? 'Publik' : doc.accessLevel === 'summary' ? 'Ringkasan' : 'Terbatas'}
                </span>
              </div>
              <p style={{ fontSize: '13px', color: '#44574E' }}>{doc.skNumber} · Unit: {doc.unit} · Berlaku: {doc.effectiveDate}</p>
              <p style={{ fontSize: '14px', color: '#13231C', marginTop: '6px' }}>{doc.note}</p>
            </div>
            <a href="#" style={{ padding: '10px 18px', background: '#0A6B4F', color: '#FFF', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              {doc.accessLevel === 'restricted' ? 'Minta Akses' : 'Unduh Dokumen'}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PusatDokumen;