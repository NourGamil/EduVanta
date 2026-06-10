export default function SectionTitle({ eyebrow, title, text, center = false, dark = false }) {
  return (
    <div data-animate className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className={`mb-3 text-sm font-black uppercase tracking-[0.35em] ${dark ? "text-skybeam" : "text-ocean"}`}>{eyebrow}</p>
      <h2 className={`font-display text-4xl font-black tracking-tight sm:text-5xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-8 ${dark ? "text-white/70" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}
