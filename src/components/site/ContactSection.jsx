import SectionTitle from "./SectionTitle";
import { brand } from "../../lib/site";
import { Icon } from "../ui/icons";

const contacts = [
  { title: "Our Location", text: brand.location, icon: "pin" },
  { title: "Call Us", text: brand.phone, icon: "phone" },
  { title: "Email Us", text: brand.email, icon: "mail" },
];

export default function ContactSection() {
  return (
    <section className="px-4 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <SectionTitle eyebrow="Need help?" title="Send us a message" text="Have a question about courses, enrollment, or your learning path? Send us a message and our team will help you choose the right next step." />
          <div className="mt-8 grid gap-4">
            {contacts.map((item) => (
              <div data-animate key={item.title} className="premium-card flex items-center gap-4 rounded-[1.75rem] p-5">
                <div className="grid h-13 w-13 place-items-center rounded-2xl bg-ocean/10 text-ocean"><Icon name={item.icon} /></div>
                <div>
                  <h3 className="font-display text-lg font-black text-ink">{item.title}</h3>
                  <p className="text-sm font-bold text-slate-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form data-animate className="premium-card rounded-[3rem] p-6 lg:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="glass-input" placeholder="Your Name" />
            <input className="glass-input" placeholder="Your Email" type="email" />
          </div>
          <input className="glass-input mt-4" placeholder="Subject" />
          <textarea className="glass-input mt-4 min-h-40 resize-none" placeholder="Message" />
          <button type="button" className="magnetic-button mt-5 w-full rounded-full bg-gradient-to-r from-ocean to-skybeam px-7 py-4 font-extrabold text-white shadow-glow transition hover:-translate-y-1">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
