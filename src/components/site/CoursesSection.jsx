"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import SectionTitle from "./SectionTitle";
import { courses } from "../../lib/site";
import { Icon } from "../ui/icons";

export default function CoursesSection({ compact = false }) {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(courses.map((course) => course.category)))];
  const visible = useMemo(() => filter === "All" ? courses : courses.filter((course) => course.category === filter), [filter]);

  function updateFilter(value) {
    setFilter(value);
    requestAnimationFrame(() => {
      gsap.fromTo(".course-card", { y: 20, opacity: .2, scale: .98 }, { y: 0, opacity: 1, scale: 1, duration: .45, stagger: .06, ease: "power3.out" });
    });
  }

  return (
    <section className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Our courses"
            title="Checkout new releases of our courses"
            text="Explore focused learning tracks built to help you gain practical skills, complete meaningful projects, and move confidently toward your goals."
          />
          {!compact && (
            <div data-animate className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button key={category} onClick={() => updateFilter(category)} className={`rounded-full px-5 py-3 text-sm font-extrabold transition ${filter === category ? "bg-ink text-white shadow-soft" : "bg-white text-slate-600 hover:bg-ocean/10 hover:text-ocean"}`}>
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.slice(0, compact ? 3 : visible.length).map((course) => (
            <article data-animate key={course.title} className="course-card group overflow-hidden rounded-[2.2rem] bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-glow">
              <div className="relative overflow-hidden">
                <img src={course.image} alt={course.title} className="h-72 w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-ocean backdrop-blur">{course.category}</div>
                <div className="absolute bottom-5 right-5 rounded-full bg-ink px-4 py-2 text-sm font-black text-white">{course.price}</div>
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between text-sm font-bold text-slate-500">
                  <span className="flex items-center gap-2"><Icon name="user" className="h-4 w-4 text-ocean" /> {course.instructor}</span>
                  <span className="flex items-center gap-1 text-gold"><Icon name="star" className="h-4 w-4" /> {course.rating}</span>
                </div>
                <h3 className="font-display text-2xl font-black leading-tight text-ink">{course.title}</h3>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-slate-500">
                  <span>{course.students} students</span>
                  <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4 text-ocean" /> {course.duration}</span>
                </div>
                <Link href="/detail" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-slate-950 px-5 py-3 font-extrabold text-white transition hover:bg-ocean">
                  Course Detail <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
