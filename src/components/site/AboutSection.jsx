import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { stats } from "../../lib/site";
import { Icon } from "../ui/icons";

export default function AboutSection() {
  return (
    <section className="px-4 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div data-animate className="relative">
          <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-ocean/18 to-coral/12 blur-2xl" />
          <div className="relative overflow-hidden rounded-[3rem] bg-white p-3 shadow-soft">
            <img src="images/about.jpg" alt="Student learning online" className="h-[560px] w-full rounded-[2.35rem] object-cover" />
          </div>
          <div className="absolute -bottom-8 left-8 rounded-[2rem] bg-white p-6 shadow-glow">
            <p className="text-sm font-black uppercase tracking-[.25em] text-slate-500">Trusted by</p>
            <p className="font-display text-4xl font-black text-ink">1,234+</p>
            <p className="text-sm font-bold text-slate-500">happy students</p>
          </div>
        </div>

        <div>
          <SectionTitle
            eyebrow="About us"
            title="First choice for online education anywhere"
            text="Build practical skills through guided courses, expert support, and a learning experience designed to keep every step clear and motivating."
          />
          <div data-animate className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map((item) => (
              <div key={item.label} className="premium-card rounded-[1.75rem] p-5 transition hover:-translate-y-1">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-ocean/10 text-ocean"><Icon name="spark" /></div>
                <div className="font-display text-3xl font-black text-ink">{item.value}</div>
                <p className="mt-1 text-sm font-bold text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
          <div data-animate className="mt-8">
            <Link href="/about" className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-extrabold text-white shadow-soft transition hover:-translate-y-1">
              Learn More <Icon name="arrow" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
