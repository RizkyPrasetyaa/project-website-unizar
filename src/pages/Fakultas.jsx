
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Fakultas() {
  const [activeView, setActiveView] = useState('list');

  const facs = [
    {
      n: 'Fakultas Kedokteran',
      d: 'Pendidikan dokter & Profesi Dokter.',
      onClick: () => setActiveView('kedokteran')
    },
    {
      n: 'Fakultas Teknik',
      d: 'S1 Teknik Sipil & S1 Ilmu Komputer.',
      onClick: null
    },
    {
      n: 'Fakultas Hukum',
      d: 'S1 Hukum.',
      onClick: null
    },
    {
      n: 'Fakultas Ekonomi & Bisnis',
      d: 'S1 Akuntansi & S1 Ekonomi Pembangunan.',
      onClick: null
    },
    {
      n: 'Fakultas Pertanian',
      d: 'S1 Agribisnis & S1 Agroekotenologi.',
      onClick: null
    },
    {
      n: 'Fakultas MIPA',
      d: 'S1 Biologi.',
      onClick: null
    },
    {
      n: 'Fakultas Agama Islam',
      d: 'Bisnis Ekonomi Syariah & Menejemen Syariah.',
      onClick: null
    }
  ];

  // VIEW 1: DAFTAR UTAMA FAKULTAS
  if (activeView === 'list') {
    return (
      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: '#13231C',
          background: '#F4F8F6',
          minHeight: '100vh',
          padding: '32px'
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          <div>
            <h1
              style={{
                color: '#064E3B',
                fontSize: '38px',
                fontWeight: 800,
                margin: 0
              }}
            >
              Fakultas & Program Studi
            </h1>

            <p style={{ color: '#44574E', marginTop: '6px' }}>
              Direktori fakultas penyelenggara pendidikan sarjana dan profesi
              di UNIZAR.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '16px'
            }}
          >
            {facs.map((f, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #DCE6E0',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <h2
                  style={{
                    color: '#064E3B',
                    margin: 0,
                    fontSize: '22px'
                  }}
                >
                  {f.n}
                </h2>

                <p
                  style={{
                    color: '#44574E',
                    fontSize: '14px',
                    margin: 0
                  }}
                >
                  {f.d}
                </p>

                {f.onClick ? (
                  <button
                    onClick={f.onClick}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: '#0A6B4F',
                      fontWeight: 700,
                      fontSize: '14px',
                      marginTop: 'auto',
                      paddingTop: '12px',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    Lihat program studi →
                  </button>
                ) : (
                  <span
                    style={{
                      color: '#A0AEC0',
                      fontWeight: 700,
                      fontSize: '14px',
                      marginTop: 'auto',
                      paddingTop: '12px'
                    }}
                  >
                    Lihat program studi →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // VIEW 2: DETAIL FAKULTAS KEDOKTERAN
  // Navbar utama tidak dibuat ulang di sini.
  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        color: '#13231C',
        background: '#F4F8F6',
        minHeight: '100vh'
      }}
    >
      {/* Navigasi khusus Fakultas Kedokteran */}
      <div style={{ background: '#0A6B4F', color: '#FFFFFF' }}>
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px 24px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 0'
            }}
          >
            <span
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#FFFFFF',
                color: '#064E3B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '13px'
              }}
            >
              FK
            </span>

            <span style={{ fontWeight: 800, fontSize: '16px' }}>
              Fakultas Kedokteran
            </span>
          </div>

          <nav
            aria-label="Menu fakultas"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2px',
              fontSize: '14px',
              fontWeight: 700
            }}
          >
            <span
              style={{
                color: '#FFFFFF',
                padding: '14px 12px',
                borderBottom: '3px solid #F2C230',
                cursor: 'pointer'
              }}
            >
              Beranda
            </span>

            <span
              style={{
                color: '#D3EBDF',
                padding: '14px 12px',
                cursor: 'pointer'
              }}
            >
              Profil
            </span>

            <Link
              to="/prodi"
              style={{
                color: '#D3EBDF',
                padding: '14px 12px',
                textDecoration: 'none'
              }}
            >
              Program Studi
            </Link>

            <span
              style={{
                color: '#D3EBDF',
                padding: '14px 12px',
                cursor: 'pointer'
              }}
            >
              Dosen
            </span>

            <span
              style={{
                color: '#D3EBDF',
                padding: '14px 12px',
                cursor: 'pointer'
              }}
            >
              Penelitian & PkM
            </span>

            <span
              style={{
                color: '#D3EBDF',
                padding: '14px 12px',
                cursor: 'pointer'
              }}
            >
              Mutu Fakultas
            </span>

            <span
              style={{
                color: '#D3EBDF',
                padding: '14px 12px',
                cursor: 'pointer'
              }}
            >
              Kemahasiswaan
            </span>
          </nav>
        </div>
      </div>

      {/* Container Utama */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '26px 32px 64px',
          display: 'flex',
          flexDirection: 'column',
          gap: '28px'
        }}
      >
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          style={{ fontSize: '13px', color: '#44574E' }}
        >
          <button
            onClick={() => setActiveView('list')}
            style={{
              background: 'none',
              border: 'none',
              color: '#0A6B4F',
              padding: 0,
              fontSize: '13px',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            Fakultas
          </button>{' '}
          /{' '}
          <span style={{ color: '#13231C', fontWeight: 600 }}>
            Fakultas Kedokteran
          </span>
        </nav>

        {/* Hero Section */}
        <section style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <div
            style={{
              flex: '3 1 560px',
              background: '#FFFFFF',
              border: '1px solid #DCE6E0',
              borderRadius: '20px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '.12em',
                color: '#8A6500',
                textTransform: 'uppercase'
              }}
            >
              Diferensiasi fakultas
            </span>

            <h1
              style={{
                margin: 0,
                fontSize: '40px',
                lineHeight: '1.1',
                color: '#064E3B',
                fontWeight: 800
              }}
            >
              [Tagline keunggulan Fakultas Kedokteran]
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#2B3D35',
                maxWidth: '640px'
              }}
            >
              [Ringkasan fokus keunggulan fakultas yang selaras dengan
              diferensiasi misi universitas — 2–3 kalimat, menautkan ke Renstra
              Fakultas.]
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link
                to="#"
                style={{
                  border: '1.5px solid #064E3B',
                  color: '#064E3B',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '15px',
                  textDecoration: 'none'
                }}
              >
                Renstra Fakultas
              </Link>
            </div>
          </div>

          <div
            style={{
              flex: '2 1 360px',
              background: '#064E3B',
              color: '#FFFFFF',
              borderRadius: '20px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div
                style={{
                  width: '84px',
                  height: '100px',
                  borderRadius: '12px',
                  border: '2px dashed rgba(255,255,255,.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  color: '#D3EBDF',
                  textAlign: 'center'
                }}
              >
                [Foto Dekan]
              </div>

              <div>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#F2C230',
                    fontWeight: 700,
                    letterSpacing: '.08em'
                  }}
                >
                  DEKAN
                </div>

                <div style={{ fontSize: '18px', fontWeight: 800 }}>
                  [Nama & gelar Dekan]
                </div>

                <Link
                  to="#"
                  style={{
                    color: '#D3EBDF',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  Sambutan dekan →
                </Link>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '10px'
              }}
            >
              {[
                ['2', 'Program studi'],
                ['68', 'Dosen tetap'],
                ['940', 'Mahasiswa aktif'],
                ['1.850', 'Alumni']
              ].map(([number, label]) => (
                <div
                  key={label}
                  style={{
                    background: 'rgba(255,255,255,.08)',
                    borderRadius: '12px',
                    padding: '14px'
                  }}
                >
                  <div style={{ fontSize: '26px', fontWeight: 800 }}>
                    {number}
                  </div>
                  <div style={{ fontSize: '12px', color: '#D3EBDF' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <span style={{ fontSize: '11px', color: '#B7DCC9' }}>
              Angka simulasi · sinkron PD Dikti
            </span>
          </div>
        </section>


{/* Section Program Studi */}
<section aria-labelledby="h-ps">
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '14px'
    }}
  >
    <div>
      <div
        style={{
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '.12em',
          color: '#8A6500',
          textTransform: 'uppercase'
        }}
      >
        Indikator 4 · Akreditasi prodi
      </div>

      <h2
        id="h-ps"
        style={{
          margin: '6px 0 0',
          fontSize: '26px',
          color: '#064E3B'
        }}
      >
        Program Studi
      </h2>
    </div>

    <Link
      to="/prodi"
      style={{
        fontWeight: 700,
        fontSize: '14px',
        color: '#0A6B4F',
        textDecoration: 'none'
      }}
    >
      Lihat semua program studi →
    </Link>
  </div>

  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
      gap: '14px'
    }}
  >
    {/* Kartu Pendidikan Dokter */}
    <Link
      to="/prodi"
      style={{
        background: '#FFFFFF',
        border: '1px solid #DCE6E0',
        borderRadius: '16px',
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        textDecoration: 'none',
        color: '#13231C',
        borderTop: '5px solid #0A6B4F',
        boxSizing: 'border-box'
      }}
    >
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap'
        }}
      >
        <span style={{ fontSize: '12px', fontWeight: 800 }}>
          SARJANA (S1)
        </span>

        <span
          style={{
            fontSize: '11px',
            fontWeight: 800,
            padding: '3px 9px',
            borderRadius: '999px',
            background: '#E3F1EA',
            color: '#064E3B'
          }}
        >
          [Peringkat] · LAM-PTKes
        </span>
      </span>

      <span style={{ fontSize: '20px', fontWeight: 800 }}>
        Pendidikan Dokter
      </span>

      <span
        style={{
          fontSize: '14px',
          color: '#44574E',
          lineHeight: 1.5
        }}
      >
        Kurikulum OBE · 146 sks · 7 semester · gelar S.Ked
      </span>

      <span
        style={{
          fontSize: '14px',
          fontWeight: 700,
          color: '#0A6B4F',
          marginTop: 'auto'
        }}
      >
        Buka halaman prodi →
      </span>
    </Link>

    {/* Kartu Profesi Dokter */}
    <Link
      to="/prodi"
      style={{
        background: '#FFFFFF',
        border: '1px solid #DCE6E0',
        borderRadius: '16px',
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        textDecoration: 'none',
        color: '#13231C',
        borderTop: '5px solid #3A9B76',
        boxSizing: 'border-box'
      }}
    >
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap'
        }}
      >
        <span style={{ fontSize: '12px', fontWeight: 800 }}>
          PROFESI
        </span>

        <span
          style={{
            fontSize: '11px',
            fontWeight: 800,
            padding: '3px 9px',
            borderRadius: '999px',
            background: '#E3F1EA',
            color: '#064E3B'
          }}
        >
          [Peringkat] · LAM-PTKes
        </span>
      </span>

      <span style={{ fontSize: '20px', fontWeight: 800 }}>
        Profesi Dokter
      </span>

      <span
        style={{
          fontSize: '14px',
          color: '#44574E',
          lineHeight: 1.5
        }}
      >
        Kepaniteraan klinik · RS pendidikan & jejaring · gelar dr.
      </span>

      <span
        style={{
          fontSize: '14px',
          fontWeight: 700,
          color: '#0A6B4F',
          marginTop: 'auto'
        }}
      >
        Buka halaman prodi →
      </span>
    </Link>

    {/* Kartu informasi */}
    <div
      style={{
        background: '#F4F8F6',
        border: '1.5px dashed #B9CCC2',
        borderRadius: '16px',
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        justifyContent: 'center',
        color: '#44574E',
        boxSizing: 'border-box'
      }}
    >
      <span
        style={{
          fontSize: '16px',
          fontWeight: 800,
          color: '#13231C'
        }}
      >
        Informasi Program Studi
      </span>

      <span style={{ fontSize: '14px', lineHeight: 1.5 }}>
        Klik kartu Pendidikan Dokter atau Profesi Dokter untuk membuka
        halaman Program Studi.
      </span>

      <Link
        to="/prodi"
        style={{
          fontSize: '14px',
          fontWeight: 700,
          color: '#0A6B4F',
          textDecoration: 'none'
        }}
      >
        Kunjungi halaman prodi →
      </Link>
    </div>
  </div>
</section>


        {/* Section Mutu Fakultas dan Kelompok Keilmuan */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <section
            aria-labelledby="h-mf"
            style={{
              flex: '1 1 420px',
              background: '#FFFFFF',
              border: '1px solid #DCE6E0',
              borderRadius: '18px',
              padding: '26px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            <div
              style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '.12em',
                color: '#8A6500',
                textTransform: 'uppercase'
              }}
            >
              Ind. 1–3 di tingkat fakultas
            </div>

            <h2 id="h-mf" style={{ margin: 0, fontSize: '22px', color: '#064E3B' }}>
              Mutu Fakultas (Gugus Penjaminan Mutu)
            </h2>

            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <li style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', padding: '12px 0', borderBottom: '1px solid #EEF3F0', fontSize: '15px' }}>
                <Link to="#" style={{ fontWeight: 600, color: '#13231C', textDecoration: 'none' }}>
                  Renstra & Standar Fakultas
                </Link>
                <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 9px', borderRadius: '999px', background: '#E3F1EA', color: '#064E3B', height: 'fit-content' }}>
                  Publik
                </span>
              </li>

              <li style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', padding: '12px 0', borderBottom: '1px solid #EEF3F0', fontSize: '15px' }}>
                <Link to="#" style={{ fontWeight: 600, color: '#13231C', textDecoration: 'none' }}>
                  Laporan Kinerja Fakultas 2025
                </Link>
                <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 9px', borderRadius: '999px', background: '#FFF1C2', color: '#6B4E00', height: 'fit-content' }}>
                  Ringkasan
                </span>
              </li>

              <li style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', padding: '12px 0', borderBottom: '1px solid #EEF3F0', fontSize: '15px' }}>
                <Link to="/login" style={{ fontWeight: 600, color: '#13231C', textDecoration: 'none' }}>
                  Laporan AMI & RTM Fakultas
                </Link>
                <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 9px', borderRadius: '999px', background: '#FBE3E4', color: '#8E1B20', height: 'fit-content' }}>
                  Terbatas
                </span>
              </li>

              <li style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', padding: '12px 0', fontSize: '15px' }}>
                <Link to="#" style={{ fontWeight: 600, color: '#13231C', textDecoration: 'none' }}>
                  Hasil Survei Kepuasan Mahasiswa
                </Link>
                <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 9px', borderRadius: '999px', background: '#FFF1C2', color: '#6B4E00', height: 'fit-content' }}>
                  Ringkasan
                </span>
              </li>
            </ul>
          </section>

          <section
            aria-labelledby="h-rf"
            style={{
              flex: '1 1 420px',
              background: '#FFFFFF',
              border: '1px solid #DCE6E0',
              borderRadius: '18px',
              padding: '26px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            <div
              style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '.12em',
                color: '#8A6500',
                textTransform: 'uppercase'
              }}
            >
              Ind. 16–23 · Kepakaran
            </div>

            <h2 id="h-rf" style={{ margin: 0, fontSize: '22px', color: '#064E3B' }}>
              Kelompok keilmuan & pakar
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '10px'
              }}
            >
              <div style={{ background: '#F4F8F6', borderRadius: '12px', padding: '14px' }}>
                <div style={{ fontWeight: 800 }}>[Kelompok Keilmuan 1]</div>
                <div style={{ fontSize: '13px', color: '#44574E', marginTop: '4px' }}>
                  8 dosen · 21 publikasi
                </div>
              </div>

              <div style={{ background: '#F4F8F6', borderRadius: '12px', padding: '14px' }}>
                <div style={{ fontWeight: 800 }}>[Kelompok Keilmuan 2]</div>
                <div style={{ fontSize: '13px', color: '#44574E', marginTop: '4px' }}>
                  6 dosen · 14 publikasi
                </div>
              </div>

              <div style={{ background: '#F4F8F6', borderRadius: '12px', padding: '14px' }}>
                <div style={{ fontWeight: 800 }}>[Kelompok Keilmuan 3]</div>
                <div style={{ fontSize: '13px', color: '#44574E', marginTop: '4px' }}>
                  7 dosen · 18 publikasi
                </div>
              </div>

              <div style={{ background: '#F4F8F6', borderRadius: '12px', padding: '14px' }}>
                <div style={{ fontWeight: 800 }}>[Kelompok Keilmuan 4]</div>
                <div style={{ fontSize: '13px', color: '#44574E', marginTop: '4px' }}>
                  5 dosen · 9 publikasi
                </div>
              </div>
            </div>

            <Link
              to="#"
              style={{
                fontWeight: 700,
                fontSize: '14px',
                color: '#0A6B4F',
                textDecoration: 'none',
                marginTop: 'auto'
              }}
            >
              Cari pakar fakultas →
            </Link>
          </section>
        </div>

        {/* Section Kabar Fakultas */}
        <section aria-labelledby="h-nf">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '14px'
            }}
          >
            <h2 id="h-nf" style={{ margin: 0, fontSize: '24px', color: '#064E3B' }}>
              Kabar fakultas
            </h2>

            <Link
              to="#"
              style={{
                fontWeight: 700,
                fontSize: '14px',
                color: '#0A6B4F',
                textDecoration: 'none'
              }}
            >
              Semua berita →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '14px'
            }}
          >
            {['AKADEMIK', 'PENELITIAN', 'PENGABDIAN', 'PRESTASI'].map(
              (category) => (
                <article
                  key={category}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #DCE6E0',
                    borderRadius: '14px',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ height: '110px', background: '#D3EBDF' }} />

                  <div
                    style={{
                      padding: '14px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        color: '#8E1B20'
                      }}
                    >
                      {category}
                    </span>

                    <Link
                      to="#"
                      style={{
                        fontWeight: 700,
                        color: '#13231C',
                        lineHeight: '1.4',
                        textDecoration: 'none'
                      }}
                    >
                      [Judul berita fakultas]
                    </Link>

                    <span style={{ fontSize: '12px', color: '#44574E' }}>
                      [tgl]
                    </span>
                  </div>
                </article>
              )
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
