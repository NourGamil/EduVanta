"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { brand, navItems } from "../../lib/site";
import { Icon } from "../ui/icons";

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      gsap.fromTo(".mobile-menu-item", { x: 24, opacity: 0 }, { x: 0, opacity: 1, duration: .42, stagger: .05, ease: "power3.out" });
    }
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className={`mx-auto max-w-7xl rounded-[2rem] border transition-all duration-300 ${scrolled ? "border-white/80 bg-white/82 shadow-soft backdrop-blur-xl" : "border-white/55 bg-white/58 backdrop-blur-md"}`}>
        <div className="flex items-center justify-between px-4 py-3 lg:px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-ocean to-skybeam text-white shadow-glow">
              <Icon name="book" className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-display text-xl font-black tracking-tight text-ink">{brand.name}</span>
              <span className="hidden text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 sm:block">{brand.tagline}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2 text-sm font-bold transition ${active ? "bg-ink text-white shadow-soft" : "text-slate-600 hover:bg-slate-100 hover:text-ink"}`}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="/contact" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-ink transition hover:-translate-y-0.5 hover:border-ocean/30 hover:shadow-soft">Talk to us</a>
            <a href="/course" className="magnetic-button rounded-full bg-gradient-to-r from-ocean to-skybeam px-5 py-3 text-sm font-extrabold text-white shadow-glow transition hover:-translate-y-0.5">Join Us</a>
          </div>

          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-white lg:hidden">
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200/70 px-4 pb-4 lg:hidden">
            <div className="grid gap-2 pt-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="mobile-menu-item rounded-2xl bg-white/78 px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
