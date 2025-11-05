import Sidebar from "@/components/Sidebar/Sidebar";
import Home from "@/app/home/Home";
import About from "@/app/about/About";
import Experience from "@/app/experience/Experience";
import Project from "@/app/project/Project";
import Technology from "@/app/technology/TechnologyCard";
import Contact from "@/app/contact/Contact";
import Education from "@/app/education/Education";
import { Montserrat } from 'next/font/google'
import "@/styles/styles.scss";

const montserrat = Montserrat({ subsets: ['latin'] })


export default function MainPage() {
  return (
    <div className={montserrat.className}>
      <Sidebar />
      <main>
        <Home id="home" />
        <About id="about" />
        <Experience id="experience" />
        <Education id="education" />
        <Technology id="technology" />
        <Project id="project" />
        <Contact id="contact" />
      </main>
    </div>
  );
}
