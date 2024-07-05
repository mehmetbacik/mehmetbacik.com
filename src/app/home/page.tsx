import Header from "@/components/Header";
import About from "@/app/home/components/About";
import Contact from "@/app/home/components/Contact";
import styles from "../page.module.css";

const Home = () => {
  return (
    <div id="home" className={styles.main}>
      <Header />
      <div className="container mx-auto px-4">
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
