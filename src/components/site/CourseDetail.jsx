import { categories, courses } from "../../lib/site";
import { Icon } from "../ui/icons";
import Link from "next/link";

export default function CourseDetail() {
  const course = courses[0];
  const features = [
    ["Instructor", "John Doe"],
    ["Rating", "4.5 (250)"],
    ["Lectures", "15"],
    ["Duration", "10.00 Hrs"],
    ["Skill level", "All Level"],
    ["Language", "English"],
  ];

  return (
    <section className="px-4 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_380px]">
        <article data-animate className="premium-card overflow-hidden rounded-[3rem] p-4 lg:p-6">
          <img src={course.image} alt={course.title} className="h-[440px] w-full rounded-[2.35rem] object-cover" />
          <div className="p-2 pt-8 lg:p-6">
            <p className="text-sm font-black uppercase tracking-[.35em] text-ocean">Course Detail</p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-ink lg:text-5xl">Web design & development courses for beginners</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. This course overview gives you a clear look at the skills, pace, support, and outcomes you can expect before enrolling.</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">Each module is built around practical lessons, guided exercises, and mentor support so you can move from learning to applying with confidence.</p>
            <h3 className="mt-10 font-display text-3xl font-black text-ink">Related Courses</h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {courses.slice(1,3).map((item) => (
                <Link href="/detail" key={item.title} className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <img src={item.image} alt={item.title} className="h-48 w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="p-5">
                    <h4 className="font-display text-lg font-black text-ink">{item.title}</h4>
                    <p className="mt-2 flex items-center gap-1 text-sm font-bold text-gold"><Icon name="star" className="h-4 w-4" /> {item.rating} ({item.students})</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>

        <aside className="space-y-6">
          <div data-animate className="dark-card rounded-[2.5rem] p-7 text-white">
            <h3 className="font-display text-2xl font-black">Course Features</h3>
            <div className="mt-6 divide-y divide-white/10">
              {features.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between py-4 text-sm font-bold">
                  <span className="text-white/58">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-[1.6rem] bg-white p-5 text-center text-ink">
              <p className="font-display text-3xl font-black">Course Price: $199</p>
              <Link href="/contact" className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-ocean px-5 py-3 font-extrabold text-white">Enroll Now</Link>
            </div>
          </div>
          <div data-animate className="premium-card rounded-[2.5rem] p-7">
            <h3 className="font-display text-2xl font-black text-ink">Categories</h3>
            <div className="mt-5 grid gap-3">
              {categories.map((item) => <Link key={item.name} href="/course" className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-slate-600 transition hover:bg-ocean hover:text-white"><span>{item.name}</span><span>{item.count}</span></Link>)}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
