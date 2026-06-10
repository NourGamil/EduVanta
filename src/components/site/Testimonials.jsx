"use client";

import { useState } from "react";
import gsap from "gsap";
import SectionTitle from "./SectionTitle";
import { testimonials } from "../../lib/site";
import { Icon } from "../ui/icons";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  function move(direction) {
    const next = (index + direction + testimonials.length) % testimonials.length;
    setIndex(next);
    requestAnimationFrame(() => {
      gsap.fromTo(".testimonial-panel", { y: 20, opacity: 0, scale: .985 }, { y: 0, opacity: 1, scale: 1, duration: .5, ease: "power3.out" });
    });
  }

  return (
    <section className="px-4 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionTitle eyebrow="Testimonial" title="What say our students" text="Hear from learners who used EduVanta to build confidence, finish projects, and take the next step in their careers." />
          <div data-animate className="mt-8 flex gap-3">
            <button onClick={() => move(-1)} className="grid h-12 w-12 place-items-center rounded-full bg-white text-ink shadow-soft transition hover:-translate-y-1 hover:bg-ink hover:text-white"><Icon name="chevronLeft" /></button>
            <button onClick={() => move(1)} className="grid h-12 w-12 place-items-center rounded-full bg-white text-ink shadow-soft transition hover:-translate-y-1 hover:bg-ink hover:text-white"><Icon name="chevronRight" /></button>
          </div>
        </div>
        <div data-animate className="testimonial-panel dark-card relative overflow-hidden rounded-[3rem] p-8 text-white lg:p-12">
          <div className="absolute right-10 top-10 text-skybeam/20"><Icon name="quote" className="h-28 w-28" /></div>
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-4">
              <img src={current.image} alt={current.name} className="h-20 w-20 rounded-3xl object-cover ring-4 ring-white/10" />
              <div>
                <h3 className="font-display text-2xl font-black">{current.name}</h3>
                <p className="font-bold text-skybeam">{current.role}</p>
              </div>
            </div>
            <p className="text-2xl font-semibold leading-10 text-white/88">“{current.text}”</p>
            <div className="mt-8 flex gap-2">
              {testimonials.map((_, i) => <span key={i} className={`h-2 rounded-full transition-all ${i === index ? "w-9 bg-skybeam" : "w-2 bg-white/30"}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
