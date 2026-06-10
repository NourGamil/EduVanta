import Link from "next/link";
import { brand, footerLinks } from "../../lib/site";
import { Icon } from "../ui/icons";

export default function Footer() {
  return (
    <footer className="mt-16 bg-ink px-4 pt-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 pb-12 lg:grid-cols-[1.15fr_.85fr_.85fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-ocean to-skybeam shadow-glow"><Icon name="book" /></span>
            <span className="font-display text-2xl font-black">{brand.name}</span>
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-white/62">A modern online academy for practical courses, expert mentorship, and career-focused learning journeys.</p>
          <div className="mt-6 flex gap-2">
            {['f','x','in','ig','yt'].map((s) => <span key={s} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xs font-black text-white/80">{s}</span>)}
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-black">Get In Touch</h3>
          <div className="mt-5 grid gap-3 text-sm font-semibold text-white/62">
            <p>{brand.location}</p>
            <p>{brand.phone}</p>
            <p>{brand.email}</p>
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-black">Our Courses</h3>
          <div className="mt-5 grid gap-3 text-sm font-semibold text-white/62">
            {footerLinks.courses.map((link) => <Link key={link} href="/course" className="hover:text-white">{link}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-black">Newsletter</h3>
          <p className="mt-5 leading-7 text-white/62">Get new course drops, discounts, and learning resources in your inbox.</p>
          <div className="mt-5 flex rounded-full bg-white p-1">
            <input placeholder="Email" className="min-w-0 flex-1 rounded-full px-4 text-sm font-bold text-ink outline-none" />
            <button className="rounded-full bg-ocean px-5 py-3 text-sm font-black text-white">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 py-6 text-sm font-semibold text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {brand.name}. All Rights Reserved.</p>
                                      <a
          href="https://nourgamil.github.io/Main-Portfolio/"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center gap-[20px]"
          >
            <span className="">Copyright © 2026 Nour</span>
            <div className="flex max-sm:h-[44px] max-sm:w-[44px] h-[54px] w-[54px] items-center justify-center rounded-full border border-[white]/50 bg-[white]/[0.5] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:scale-110 hover:border-[#fdc700]/40 hover:shadow-[0_18px_45px_rgba(253,199,0,0.12)]">
              <img className="max-sm:h-[24px] max-sm:w-[24px] h-[34px] w-[34px]" src="images/favicon.ico" alt="" />
            </div>
          </a>
      </div>
    </footer>
  );
}
