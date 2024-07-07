import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import About from "@/app/home/components/About";
import Contact from "@/app/home/components/Contact";
import Experience from "@/app/home/components/Experience";
import TechStack from "@/app/home/components/TechStack";
import styles from "../page.module.css";


const Home = () => {
  return (
    <div id="home" className={styles.main}>
      <Header />
      <div className="container mx-auto px-4">
        <About />
        <Contact />
        <Experience />
        <TechStack />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
