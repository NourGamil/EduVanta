import Link from "next/link";

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-36 lg:pt-40">
      <div className="absolute inset-0 -z-10">
        <img src="images/page-header.jpg" alt="Page header" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-porcelain/92 to-skybeam/20" />
      </div>
      <div data-hero className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[.35em] text-ocean">{subtitle || "Premium academy"}</p>
          <h1 className="font-display text-5xl font-black tracking-tight text-ink sm:text-6xl">{title}</h1>
          <div className="mt-6 flex items-center gap-3 text-sm font-extrabold text-slate-500">
            <Link href="/" className="text-ocean">Home</Link>
            <span>/</span>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
