import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: '#053B2C', color: '#D3EBDF', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      {/* Garis Aksen Emas Khas UNIZAR */}
      <div style={{ height: '4px', background: '#F2C230' }}></div>

      {/* Area Utama Footer (4 Kolom) */}
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '44px 32px 28px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '32px'
      }}>
        {/* Kolom 1: Logo & Info Identitas Kampus */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <img src="/assets/img/unizar-logo.png" alt="Logo UNIZAR" style={{ width: '52px', height: '51px', objectFit: 'contain' }} />
            <div style={{ fontWeight: 800, color: '#FFFFFF', lineHeight: 1.3, fontSize: '15px' }}>
              Universitas Islam<br />Al-Azhar Mataram
            </div>
          </div>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: '#D3EBDF' }}>
            Jl. Unizar No. 20, Turida, Sandubaya,<br />
            Mataram, Nusa Tenggara Barat 83232<br />
            (0370) 6175555 · humas@unizar.ac.id
          </p>
        </div>

        {/* Kolom 2: Akuntabilitas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
          <div style={{ fontWeight: 800, color: '#FFFFFF', marginBottom: '4px', fontSize: '15px' }}>
            Akuntabilitas
          </div>
          <Link to="/pusat-dokumen" style={{ color: '#D3EBDF', textDecoration: 'none' }}>Statuta & Renstra</Link>
          <Link to="/orang" style={{ color: '#D3EBDF', textDecoration: 'none' }}>Struktur Organisasi</Link>
          <Link to="/pusat-dokumen" style={{ color: '#D3EBDF', textDecoration: 'none' }}>Laporan Tahunan</Link>
          <Link to="/gug" style={{ color: '#D3EBDF', textDecoration: 'none' }}>Laporan Keuangan Teraudit</Link>
        </div>

        {/* Kolom 3: Layanan & Integritas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
          <div style={{ fontWeight: 800, color: '#FFFFFF', marginBottom: '4px', fontSize: '15px' }}>
            Layanan & Integritas
          </div>
          <Link to="/ppid" style={{ color: '#D3EBDF', textDecoration: 'none' }}>PPID</Link>
          <a href="#" style={{ color: '#D3EBDF', textDecoration: 'none' }}>Whistleblowing System</a>
          <Link to="/gug" style={{ color: '#D3EBDF', textDecoration: 'none' }}>Satgas PPKS</Link>
          <Link to="/bpm" style={{ color: '#D3EBDF', textDecoration: 'none' }}>Survei Kepuasan</Link>
        </div>

        {/* Kolom 4: Sistem Nasional */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
          <div style={{ fontWeight: 800, color: '#FFFFFF', marginBottom: '4px', fontSize: '15px' }}>
            Sistem Nasional
          </div>
          <a href="https://pddikti.kemdiktisaintek.go.id/" target="_blank" rel="noreferrer" style={{ color: '#D3EBDF', textDecoration: 'none' }}>PD Dikti ↗</a>
          <a href="#" style={{ color: '#D3EBDF', textDecoration: 'none' }}>SPADA Indonesia ↗</a>
          <a href="#" style={{ color: '#D3EBDF', textDecoration: 'none' }}>SIERRA (RPL) ↗</a>
          <a href="#" style={{ color: '#D3EBDF', textDecoration: 'none' }}>SINTA Kemdiktisaintek ↗</a>
        </div>
      </div>

      {/* Copyright Bar Paling Bawah */}
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '16px 32px 28px',
        borderTop: '1px solid rgba(211,235,223,.2)',
        display: 'flex',
        justify: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        fontSize: '12px',
        color: '#D3EBDF'
      }}>
        <span>© 2026 Universitas Islam Al-Azhar Mataram</span>
        <span>Kebijakan Privasi · Peta Situs · Aksesibilitas</span>
      </div>
    </footer>
  );
};

export default Footer;