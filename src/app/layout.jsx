import "./globals.css";
import Navigation from "../components/site/Navigation";
import Footer from "../components/site/Footer";
import AnimationProvider from "../components/site/AnimationProvider";
import { brand } from "../lib/site";

export const metadata = {
  title: `${brand.name} | Premium Online Learning`,
  description: "A modern online academy for practical skills, expert mentorship, and guided learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <div className="noise-layer" />
          <AnimationProvider />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
