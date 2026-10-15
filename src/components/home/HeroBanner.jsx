import React from "react";

export default function HeroBanner() {
  return (
    <section
      style={{
        background: "#064E3B",
        color: "#FFFFFF",
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: "3 1 420px", padding: "48px 44px", display: "flex", flexDirection: "column", gap: "18px" }}>
        <span
          style={{
            alignSelf: "flex-start",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "#F2C230",
          }}
        >
          Universitas Islam Al-Azhar Mataram
        </span>
        <h1 style={{ margin: 0, fontSize: "46px", lineHeight: 1.08, letterSpacing: "-.01em", fontWeight: 800 }}>
          Kampus Islami yang unggul dan berdampak
        </h1>
        <p style={{ margin: 0, fontSize: "17px", lineHeight: 1.6, color: "#D3EBDF", maxWidth: "560px" }}>
          Pendidikan, penelitian, dan pengabdian berlandaskan nilai Islam untuk Nusa Tenggara Barat dan dunia.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "6px" }}>
          <button
            type="button"
            style={{
              border: 0,
              background: "#F2C230",
              color: "#053B2C",
              padding: "13px 22px",
              borderRadius: "10px",
              fontWeight: 800,
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            PMB 2027
          </button>
          <button
            type="button"
            style={{
              border: "1.5px solid #D3EBDF",
              background: "transparent",
              color: "#FFFFFF",
              padding: "12px 22px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Profil institusi
          </button>
        </div>
      </div>

      <div
        style={{
          flex: "2 1 300px",
          background: "#0A6B4F",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "18px",
          minHeight: "340px",
          position: "relative",
        }}
      >
        <div
          style={{
            border: "2px dashed rgba(255,255,255,.35)",
            borderRadius: "14px",
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#D3EBDF",
            fontSize: "13px",
            padding: "16px",
            minHeight: "160px",
          }}
        >
          [Foto kampus / video profil 30 detik]
        </div>
        <div
          style={{
            background: "#FFFFFF",
            color: "#13231C",
            borderRadius: "14px",
            padding: "16px 18px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "12px",
              background: "#FFF1C2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              color: "#6B4E00",
              fontSize: "12px",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            BAN
            <br />
            PT
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "12px", color: "#44574E", fontWeight: 600 }}>Akreditasi institusi</div>
            <div style={{ fontSize: "20px", fontStyle: "normal", fontWeight: 800, color: "#064E3B" }}>
              [Status Akreditasi]
            </div>
            <div style={{ fontSize: "12px", color: "#44574E" }}>SK [Nomor] · s.d. [Tanggal]</div>
          </div>
          <button
            type="button"
            style={{
              border: 0,
              background: "transparent",
              fontSize: "13px",
              fontWeight: 700,
              color: "#0A6B4F",
              cursor: "pointer",
            }}
          >
            Verifikasi ↗
          </button>
        </div>
      </div>
    </section>
  );
}
