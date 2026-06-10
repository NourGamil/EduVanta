import Link from "next/link";
import { Icon } from "../ui/icons";

export default function CTASection() {
  return (
    <section className="px-4 py-20">
      <div data-animate className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-ink p-8 text-white shadow-soft lg:p-14">
        <img src="images/bg-image.jpg" alt="Learning background" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ocean/50" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[.35em] text-skybeam">Limited enrollment</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-black tracking-tight sm:text-5xl">30% off for new students ready to learn smarter.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">Start your learning journey with a course path shaped around your goals, schedule, and future career direction.</p>
          </div>
          <Link href="/contact" className="magnetic-button inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-extrabold text-ink shadow-soft transition hover:-translate-y-1">
            Join Us <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
