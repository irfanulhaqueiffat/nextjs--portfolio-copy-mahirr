"use client";
import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import banner from "../../app/Images/banner1.png"; // or use "/images/banner1.png" if in public/
import Image from "next/image";
import CountUp from "react-countup";

const counters = [
  { id: 1, end: 5, label: "Experiences" },
  { id: 2, end: 5, label: "Projects Done" },
  { id: 3, end: 5, label: "Happy Clients" },
];

const Banner = () => {
  return (
    <section id="home" className="container mx-auto px-4">
      <div className="both flex flex-col md:flex-row justify-between items-center flex-wrap py-12">
        {/* Left column */}
        <div className="flex flex-col bg-black px-6 w-full md:w-1/2">
          <p className="text-lg text-gray-400 mb-2">Hi, I am</p>

          <h1 className="text-3xl md:text-5xl font-bold text-amber-500 mb-3">
            Irfanul Haque Iffat
          </h1>

          <p className="text-gray-400 max-w-xl">
            I’m a passionate web developer who loves creating modern, responsive,
            and user-friendly web experiences. Let’s build something amazing!
          </p>

          {/* Social icons */}
          <div className="flex gap-6 mb-8 pt-5 md:mb-12" aria-hidden={false}>
            <a
              aria-label="Open Instagram (external)"
              href="https://www.instagram.com/irfanulhaque147/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl p-2 border border-gray-600 rounded-full transition-colors duration-300"
            >
              <FaInstagram />
            </a>

            <a
              aria-label="Open LinkedIn (external)"
              href="https://www.linkedin.com/in/irfanul-haque-iffat-8065b935b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl p-2 border border-gray-600 rounded-full transition-colors duration-300"
            >
              <CiLinkedin />
            </a>

            <a
              aria-label="Open Facebook (external)"
              href="https://www.facebook.com/irfanfrontenddeveloper/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl p-2 border border-gray-600 rounded-full transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
          </div>

          {/* Buttons */}
          <div className="button-part flex flex-wrap gap-4 md:gap-7">
            <a
              aria-label="Hire Irfanul on WhatsApp"
              href="https://wa.me/message/YD6SZLV35O67B1"
              className="hover:bg-amber-600 text-white border-2 border-gray-500 px-5 py-2 rounded-lg font-semibold transition"
            >
              Hire Me
            </a>

            <a
              aria-label="Download CV"
              href="/irfan-cv.pdf"
              download="irfan-cv"
              className="hover:bg-amber-600 text-white border-2 border-gray-500 px-5 py-2 rounded-lg font-semibold transition"
            >
              Download CV
            </a>
          </div>

          {/* Counter card */}
          <div className="counter-part py-7 px-6 bg-gray-900 mt-8 md:mt-20 rounded-2xl text-white">
            <div className="allCounter flex flex-wrap justify-center md:flex-nowrap md:justify-between items-center gap-y-6 md:gap-x-4">
              {counters.map((c, idx) => {
                // for separation styling between items
                const extraClass =
                  idx !== 0
                    ? "border-t border-gray-600 pt-6 mt-6 md:border-t-0 md:pt-0 md:mt-0 md:border-l md:pl-6"
                    : "";
                return (
                  <div
                    key={c.id}
                    className={`partOne text-center md:text-left w-full md:w-auto ${extraClass}`}
                  >
                    <h2 className="text-3xl font-bold text-amber-500 mb-2">
                      <CountUp end={c.end} duration={3} suffix="+" />
                    </h2>
                    <p className="text-gray-300">{c.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column / image */}
        <div className="img-part w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            alt="Portrait of Irfanul Haque Iffat — web developer"
            className="rounded-2xl w-full max-w-[500px] h-auto"
            src={banner}
            width={500}
            height={600}
            priority // optional: use for above-the-fold hero images
            // placeholder="blur" // optional if you have blurDataURL available
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
