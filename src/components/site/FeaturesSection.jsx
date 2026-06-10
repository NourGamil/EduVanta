import SectionTitle from "./SectionTitle";
import { features } from "../../lib/site";
import { Icon } from "../ui/icons";

export default function FeaturesSection() {
  return (
    <section className="px-4 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <SectionTitle
            eyebrow="Why choose us?"
            title="Start learning with a platform that feels clear from the first click"
            text="Find mentor-led courses, certificate-ready outcomes, and practical projects designed to make online learning easier to follow."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {features.map((item) => (
              <div data-animate key={item.title} className="premium-card group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-glow">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-ocean to-skybeam text-white shadow-glow transition group-hover:rotate-3 group-hover:scale-105">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-black text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div data-animate className="relative">
          <div className="absolute -right-8 top-20 h-56 w-56 rounded-full bg-coral/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[3rem] bg-ink p-3 shadow-soft">
            <img src="images/feature.jpg" alt="Learning features" className="h-[680px] w-full rounded-[2.35rem] object-cover" />
            <div className="absolute inset-x-8 bottom-8 rounded-[2rem] bg-white/90 p-6 shadow-soft backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[.24em] text-ocean">Learning engine</p>
              <p className="mt-2 font-display text-2xl font-black text-ink">Guided paths, live support, and measurable progress.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
