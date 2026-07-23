"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Stories", href: "/stories" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Gallery", href: "/gallery" },
    { name: "Pricing", href: "/pricing" },
  ];


  const isLinkActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F8F5EF]/92 backdrop-blur-md shadow-[0_1px_0_rgba(110,86,68,0.12),0_10px_30px_-18px_rgba(110,86,68,0.4)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3.5 text-inherit">
          <span className="font-caveat text-[34px] text-primary leading-none">jl</span>
          <span className="block border-l border-primary-dark/35 pl-3.5">
            <span className="block font-cormorant font-semibold tracking-[0.18em] text-[19px] text-[#2A241F] leading-none">
              JOURNEYS
            </span>
            <span className="block text-[9px] tracking-[0.42em] text-[#7C7267] mt-0.5">
              OF LIFE
            </span>
          </span>
        </Link>

        {/* DESKTOP NAVLINKS */}
        <div className="hidden lg:flex items-center gap-8 text-[12.5px] tracking-[0.14em] uppercase font-semibold text-[#2A241F]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors duration-300 ${
                isLinkActive(link.href)
                  ? "text-primary"
                  : "text-[#2A241F] hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-[#1E1B18] text-[#F8F5EF] px-6 py-3 rounded-full text-[11.5px] tracking-[0.16em] uppercase font-semibold transition-all duration-400 hover:bg-primary hover:text-[#1E1B18] hover:-translate-y-0.5"
          >
            Start Your Film
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#2A241F] hover:text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE NAV MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F5EF]/98 backdrop-blur-lg border-t border-[#6E5644]/10 absolute top-full left-0 right-0 py-6 px-6 shadow-xl flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-[14px] tracking-[0.14em] uppercase py-2 border-b border-[#6E5644]/5 transition-colors duration-300 ${
                isLinkActive(link.href)
                  ? "text-primary font-semibold"
                  : "text-[#2A241F] hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-[#1E1B18] text-[#F8F5EF] text-center py-3 rounded-full text-[11.5px] tracking-[0.16em] uppercase font-semibold mt-2 hover:bg-primary hover:text-[#1E1B18] transition-all"
          >
            Start Your Film
          </Link>
        </div>
      )}
    </nav>
  );
}
