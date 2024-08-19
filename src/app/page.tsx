import Sidebar from "@/components/Sidebar/Sidebar";
import Home from "@/app/home/Home";
import About from "@/app/about/About";
import Experience from "@/app/experience/Experience";
import Project from "@/app/project/Project";
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
        <Project id="project" />
        <Contact id="contact" />
      </main>
    </>
  );
}
