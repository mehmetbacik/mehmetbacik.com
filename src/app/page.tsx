import Sidebar from "@/components/Sidebar/Sidebar";
import Home from "@/app/home/Home";
import About from "@/app/about/About";
import Experience from "@/app/experience/Experience";
import Portfolio from "@/app/portfolio/Portfolio";
import Technology from "@/app/technology/Technology";
import Contact from "@/app/contact/Contact";
import Education from "@/app/education/Education";
import "@/styles/styles.scss";


export default function MainPage() {
  return (
    <>
      <Sidebar />
      <main>
        <Home id="home" />
        <About id="about" />
        <Experience id="experience" />
        <Education id="education" />
        <Technology id="technology" />
        <Portfolio id="portfolio" />
        <Contact id="contact" />
      </main>
    </>
  );
}
