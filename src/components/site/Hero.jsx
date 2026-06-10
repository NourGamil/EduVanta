import Link from "next/link";
import { stats } from "../../lib/site";
import { Icon } from "../ui/icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-36 lg:pb-28 lg:pt-40">
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-skybeam/20 blur-3xl" />
      <div className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-coral/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.03fr_.97fr]">
        <div className="relative z-10">
          <div data-hero className="inline-flex items-center gap-2 rounded-full border border-ocean/15 bg-white/80 px-4 py-2 text-sm font-extrabold text-ocean shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-coral shadow-[0_0_0_6px_rgba(255,90,112,.14)]" />
            New learning tracks are live
          </div>
          <h1 data-hero className="mt-6 max-w-4xl font-display text-5xl font-black leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Learn from home with <span className="gradient-text">world-class mentors.</span>
          </h1>
          <p data-hero className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            EduVanta helps ambitious learners build real-world skills through guided courses, expert instructors, and flexible online learning journeys.
          </p>
          <div data-hero className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/course" className="magnetic-button inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-ocean to-skybeam px-7 py-4 font-extrabold text-white shadow-glow transition hover:-translate-y-1">
              Explore Courses <Icon name="arrow" className="h-5 w-5" />
            </Link>
            <Link href="/detail" className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-4 font-extrabold text-ink shadow-soft transition hover:-translate-y-1 hover:border-ocean/30">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-white"><Icon name="play" className="h-4 w-4" /></span>
              View course detail
            </Link>
          </div>

          <div data-hero className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur">
                <div className="font-display text-2xl font-black text-ink">{item.value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div data-hero className="relative">
          <div className="absolute -left-8 top-16 z-10 hidden rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur md:block floating-orb">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/20 text-gold"><Icon name="star" /></div>
              <div>
                <p className="font-display text-2xl font-black text-ink">4.9/5</p>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Student rating</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-7 right-7 z-10 rounded-[2rem] border border-white/70 bg-ink p-5 text-white shadow-glow floating-orb [animation-delay:1s]">
            <p className="text-sm font-bold text-white/65">Next cohort</p>
            <p className="font-display text-2xl font-black">30% Off</p>
          </div>
          <div className="relative overflow-hidden rounded-[3rem] bg-ink p-3 shadow-[0_32px_100px_rgba(7,17,31,.32)]">
            <img data-parallax src="images/header.jpg" alt="Online education" className="h-[520px] w-full rounded-[2.4rem] object-cover" />
            <div className="absolute inset-3 rounded-[2.4rem] bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
