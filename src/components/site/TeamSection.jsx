import SectionTitle from "./SectionTitle";
import { team } from "../../lib/site";

export default function TeamSection() {
  return (
    <section className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle center eyebrow="Instructors" title="Meet our instructors" text="Learn from experienced mentors who bring real industry knowledge, clear guidance, and practical feedback to every course." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article data-animate key={member.name} className="group overflow-hidden rounded-[2.1rem] bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-glow">
              <div className="relative overflow-hidden">
                <img src={member.image} alt={member.name} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/68 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-black text-ink">{member.name}</h3>
                <p className="mt-1 text-sm font-bold text-ocean">{member.role}</p>
                <div className="mt-5 flex justify-center gap-2">
                  {['f','x','in'].map((s) => <span key={s} className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-xs font-black text-slate-600">{s}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
