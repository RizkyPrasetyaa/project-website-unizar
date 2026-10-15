import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Profil from "./pages/Profil"; // <-- Halaman Profil baru
import Fakultas from "./pages/Fakultas";
import Prodi from "./pages/Prodi";
import PusatDokumen from "./pages/PusatDokumen";
import Gug from "./pages/Gug";
import Pendidikan from "./pages/Pendidikan";
import Penelitian from "./pages/Penelitian";
import Pengabdian from "./pages/Pengabdian";
import Bpm from "./pages/Bpm";
import Orang from "./pages/Orang";
import Ppid from "./pages/Ppid";
import PetaBanpt from "./pages/PetaBanpt";

function App() {
  return (
    <Router>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#F4F8F6",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ScrollToTop />
        <Header />
        <main style={{ width: "100%", flex: "1" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profil />} /> {/* <-- Route Profil */}
            <Route path="/fakultas" element={<Fakultas />} />
            <Route path="/prodi" element={<Prodi />} />
            <Route path="/pusat-dokumen" element={<PusatDokumen />} />
            <Route path="/gug" element={<Gug />} />
            <Route path="/pendidikan" element={<Pendidikan />} />
            <Route path="/penelitian" element={<Penelitian />} />
            <Route path="/pengabdian" element={<Pengabdian />} />
            <Route path="/bpm" element={<Bpm />} />
            <Route path="/orang" element={<Orang />} />
            <Route path="/ppid" element={<Ppid />} />
            <Route path="/peta-bukti-banpt" element={<PetaBanpt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
