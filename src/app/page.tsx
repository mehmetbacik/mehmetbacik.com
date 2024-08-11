import Home from "@/app/home/Home";
import About from "@/app/about/About";
import Resume from "@/app/resume/Resume";
import Portfolio from "@/app/portfolio/Portfolio";
import Services from "@/app/services/Services";
import Contact from "@/app/contact/Contact";
import "@/styles/styles.scss";

export default function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
}
