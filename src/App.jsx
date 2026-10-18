import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Direktori from "./pages/Direktori";
import ScrollToTop from "./components/ScrollToTop";
import Fakultas from "./pages/Fakultas";
import Pendidikan from "./pages/Pendidikan";
import Penelitian from "./pages/Penelitian";
import Pengabdian from "./pages/Pengabdian";
import Bpm from "./pages/Bpm";
import Footer from "./components/Footer";
import Gug from "./pages/Gug";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        {/* Beranda */}
        <Route path="/" element={<Home />} />

        {/* Profil Institusi */}
        <Route path="/profil" element={<Profil />} />

        {/* Fakultas */}
        <Route path="/fakultas" element={<Fakultas />} />

        {/* Halaman Direktori UNIZAR (Termasuk Pusat Dokumen, Dosen, Unit, dll) */}
        <Route path="/direktori" element={<Direktori />} />

        {/* Alias Rute: Agar URL /pusat-dokumen tetap mengarah mulus ke Halaman Direktori */}
        <Route path="/pusat-dokumen" element={<Direktori />} />

        {/* Rute Halaman Good University Governance (GUG) */}
        <Route path="/gug" element={<Gug />} />

        <Route path="/pendidikan" element={<Pendidikan />} />
        <Route path="/penelitian" element={<Penelitian />} />
        <Route path="/pengabdian" element={<Pengabdian />} />
        <Route path="/bpm" element={<Bpm />} />
        {/* Fallback jika rute tidak ditemukan */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}
