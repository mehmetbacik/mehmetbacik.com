import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
