import React from "react";
import Sidebar from "../components/home/Sidebar";
import HeroBanner from "../components/home/HeroBanner";
import Akreditasi from "../components/home/Akreditasi";
import Diferensiasi from "../components/home/Diferensiasi";
import Kinerja from "../components/home/Kinerja";
import NewsAgenda from "../components/home/NewsAgenda";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        color: "#13231C",
        background: "#F4F8F6",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "28px 32px 56px",
          display: "flex",
          flexWrap: "wrap",
          gap: "28px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT KANAN */}
        <main style={{ flex: "999 1 600px", minWidth: 0, display: "flex", flexDirection: "column", gap: "28px" }}>
          <HeroBanner />
          <Akreditasi />
          <Diferensiasi />
          <Kinerja />
          <NewsAgenda />
        </main>
      </div>
    </div>
  );
}
