export function Icon({ name, className = "h-5 w-5" }) {
  const common = { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

  const icons = {
    book: <svg {...common}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/><path d="M8 6h8"/><path d="M8 10h6"/></svg>,
    menu: <svg {...common}><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>,
    close: <svg {...common}><path d="M6 6l12 12"/><path d="M18 6L6 18"/></svg>,
    arrow: <svg {...common}><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>,
    play: <svg {...common}><path d="M8 5v14l11-7z"/></svg>,
    star: <svg {...common} fill="currentColor" strokeWidth=".6"><path d="m12 2 2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 16.82l-5.8 3.05 1.11-6.47-4.7-4.58 6.49-.94L12 2z"/></svg>,
    user: <svg {...common}><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>,
    clock: <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
    mentor: <svg {...common}><path d="M16 21v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="7" r="4"/><path d="M19 8l2 2-2 2"/><path d="M5 8l-2 2 2 2"/></svg>,
    certificate: <svg {...common}><path d="M7 3h10a2 2 0 0 1 2 2v14l-4-2-3 2-3-2-4 2V5a2 2 0 0 1 2-2z"/><path d="M9 8h6"/><path d="M9 12h6"/></svg>,
    screen: <svg {...common}><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>,
    spark: <svg {...common}><path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z"/></svg>,
    phone: <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L9 10.7a16 16 0 0 0 4.3 4.3l1.27-1.27a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92z"/></svg>,
    mail: <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
    pin: <svg {...common}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    quote: <svg {...common}><path d="M10 11H6a3 3 0 0 1 3-3V5a6 6 0 0 0-6 6v6h7v-6z"/><path d="M21 11h-4a3 3 0 0 1 3-3V5a6 6 0 0 0-6 6v6h7v-6z"/></svg>,
    chevronLeft: <svg {...common}><path d="m15 18-6-6 6-6"/></svg>,
    chevronRight: <svg {...common}><path d="m9 18 6-6-6-6"/></svg>,
    check: <svg {...common}><path d="m20 6-11 11-5-5"/></svg>,
  };
  return icons[name] || icons.spark;
}
