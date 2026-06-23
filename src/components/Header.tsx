"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Phone, Menu, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export default function Header({
  onOpenQuote,
}: {
  onOpenQuote: () => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FacebookIcon />,
      href: "https://www.facebook.com/jaganhp/",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      icon: <TwitterIcon />,
      href: "https://x.com/Jagan1583553Hp",
      label: "X (Twitter)",
      color: "hover:text-sky-400",
    },
    {
      icon: <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />,
      href: "https://www.google.com/search?q=Digital+Network&ie=utf-8&oe=utf-8&aq=t#mpd=~8285487422315676011/customers/reviews",
      label: "Google Reviews",
      color: "hover:text-yellow-400",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="focus:outline-none">
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-slate-700 hover:text-blue-650 transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-2 border-r border-slate-200 pr-4 mr-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-500 ${link.color} transition-all w-8 h-8 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-100 flex items-center justify-center hover:scale-105`}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <a
              href="tel:9894740202"
              className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600 animate-bounce" />
              <span>9894740202</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-md shadow-blue-500/10 border-0 hover:scale-[1.03] transition-all flex items-center justify-center cursor-pointer outline-none text-sm"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:9894740202"
              className="p-2 text-slate-655 hover:text-blue-600"
              aria-label="Call Business"
            >
              <Phone className="w-5 h-5 text-blue-600" />
            </a>

            <Sheet>
              <SheetTrigger
                render={
                  <button className="p-2 text-slate-700 hover:text-blue-600 focus:outline-none">
                    <Menu className="w-6 h-6" />
                  </button>
                }
              />
              <SheetContent
                side="right"
                className="w-[280px] bg-white border-slate-200 p-6 flex flex-col gap-8 text-slate-900"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <SheetTitle className="text-left font-bold text-slate-950 text-lg">
                    MENU
                  </SheetTitle>
                </div>
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-lg font-semibold text-slate-750 hover:text-blue-600 transition-colors border-b border-slate-100 pb-2"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                  {/* Social links mobile */}
                  <div className="flex items-center gap-3 justify-center mb-2 pb-4 border-b border-slate-100">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-slate-500 ${link.color} transition-all w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center`}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>

                  <a
                    href="tel:9894740202"
                    className="flex items-center gap-3 text-slate-700 hover:text-blue-600 py-2 justify-center"
                  >
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="font-bold">9894740202</span>
                  </a>
                  <button
                    onClick={onOpenQuote}
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md border-0 flex items-center justify-center cursor-pointer transition-colors"
                  >
                    Request Quote
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
