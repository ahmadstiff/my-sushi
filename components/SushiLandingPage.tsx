"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Star,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Utensils,
} from "lucide-react";
import { motion } from "framer-motion";

//fade up animation
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function SushiLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Nikmati Kelezatan Sushi Autentik",
      subtitle:
        "Rasakan pengalaman kuliner Jepang terbaik dengan cita rasa otentik.",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
    },
    {
      title: "Menu Premium Pilihan",
      subtitle: "Dibuat dengan bahan-bahan berkualitas terbaik dan segar.",
      image:
        "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Suasana Autentik Jepang",
      subtitle: "Nikmati suasana restoran dengan desain tradisional Jepang.",
      image:
        "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Smooth scroll effect
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slider */}
      <header className="relative h-screen">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        />

        <nav className="relative z-20 flex items-center justify-between px-6 py-4">
          <motion.h1
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            SushiRhuuma
          </motion.h1>
          <motion.div
            className="hidden md:flex space-x-6 text-white"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a href="#menu" className="hover:text-red-400 transition-colors">
              Menu
            </a>
            <a href="#about" className="hover:text-red-400 transition-colors">
              Tentang
            </a>
            <a
              href="#location"
              className="hover:text-red-400 transition-colors"
            >
              Lokasi
            </a>
            <a href="#contact" className="hover:text-red-400 transition-colors">
              Kontak
            </a>
          </motion.div>
        </nav>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {slides[currentSlide].title}
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl">
              {slides[currentSlide].subtitle}
            </p>
          </motion.div>

          <motion.button
            className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pesan Sekarang
          </motion.button>

          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-red-600" : "bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </motion.div>

          <button
            className="absolute left-4 top-1/2 z-20 text-white"
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="absolute right-4 top-1/2 z-20 text-white"
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      </header>

      <motion.section
        id="about"
        className="py-20 px-6 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-gray-800 font-bold mb-4">
              Sushiruma • すしルマ
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div className="relative" variants={fadeInUp}>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683505.jpg?t=st=1736954806~exp=1736958406~hmac=8865d65fb4e7e7e2b57759b306a024293b6ef6d00ac0f112d6042f191838dac0&w=360"
                  alt="Restaurant Interior"
                  className="w-[30vw] h-[90vh] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">100% HALAL</h3>
                <p className="text-sm">حلال‎</p>
              </div>
            </motion.div>

            <motion.div className="space-y-6" variants={fadeInUp}>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-red-600 " />
                  <span className="text-gray-800">Jam Operasional</span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-800">
                      Senin - Kamis & Sabtu - Minggu:
                    </span>
                    <span className="font-semibold text-gray-800">
                      12:00 WIB - Tutup
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-red-600">
                    <span>Jumat:</span>
                    <span className="font-semibold">13:00 WIB - Tutup</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <span className="text-gray-800">Lokasi</span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                    <span className="text-gray-800">Yogyakarta</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                    <span className="text-gray-800">Solo/Surakarta</span>
                  </li>
                </ul>
              </div>

              <motion.div
                className="bg-red-600 text-white p-6 rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Utensils className="w-6 h-6" />
                  Moto Kami
                </h3>
                <p className="text-lg font-medium italic">
                  "MAKAN ENAK ADALAH HAK SEGALA BANGSA!"
                </p>
              </motion.div>

              <p className="text-gray-600">
                Kami menghadirkan pengalaman kuliner Jepang yang autentik dengan
                menjamin kehalalan setiap hidangan. Komitmen kami adalah
                menyajikan makanan Jepang berkualitas tinggi yang dapat
                dinikmati oleh semua kalangan.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Menu Section with Scroll Animation */}
      <motion.section
        id="menu"
        className="py-20 px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-4xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            <span className="text-red-600">Menu Favorit</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
            {[
              {
                name: "Salmon Nigiri",
                price: "Rp 35.000",
                description: "Irisan salmon segar di atas nasi yang sempurna",
                image:
                  "https://images.unsplash.com/photo-1648146299289-d4d464c79413?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Dragon Roll",
                price: "Rp 85.000",
                description: "Roll spesial dengan topping unagi dan alpukat",
                image:
                  "https://images.unsplash.com/photo-1607247098731-5bf6416d2e8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJhZ29uJTIwcm9sbCUyMHN1c2hpfGVufDB8fDB8fHww",
              },
              {
                name: "Chirashi Bowl",
                price: "Rp 120.000",
                description:
                  "Mangkuk nasi dengan berbagai topping sashimi premium",
                image:
                  "https://img.freepik.com/free-photo/japanese-rice-bowl-with-sashimi-seafood-top_1203-8307.jpg?t=st=1736854031~exp=1736857631~hmac=6037796149eb30c62dd9f0eab947500ab3f10f589ecb31bd24f19935abb13e5b&w=1060",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-red-600 font-bold">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section with Scroll Animation */}
      <motion.section
        className="bg-gray-50 py-20 px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: Star,
                title: "Kualitas Premium",
                desc: "Bahan-bahan terbaik yang dipilih langsung oleh chef kami",
              },
              {
                icon: Clock,
                title: "Cepat & Segar",
                desc: "Disiapkan langsung setelah pemesanan",
              },
              {
                icon: MapPin,
                title: "Lokasi Strategis",
                desc: "Mudah dijangkau dari berbagai lokasi",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={fadeInUp}
              >
                <feature.icon className="w-12 h-12 text-red-600 mb-4" />
                <h4 className="text-xl font-bold mb-2 text-gray-800">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section with Animation */}
      <motion.section
        id="contact"
        className="py-20 px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 text-gray-800">
            Hubungi Kami
          </h3>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Nama"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Pesan"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 md:col-span-2"
                rows={4}
              />
              <motion.button
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition md:col-span-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kirim Pesan
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 className="text-xl font-bold mb-4">Sushi Sakura</h4>
            <p className="text-gray-400">Pengalaman kuliner Jepang terbaik</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Jam Buka</h4>
            <p className="text-gray-400">Senin - Minggu</p>
            <p className="text-gray-400">11:00 - 22:00</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Kontak</h4>
            <p className="text-gray-400">+62 123 456 789</p>
            <p className="text-gray-400">info@sushisakura.com</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Alamat</h4>
            <p className="text-gray-400">
              Jl. Sushi No. 123
              <br />
              Jakarta, Indonesia
            </p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
