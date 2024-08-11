interface AboutProps {
    id: string;
  }
  
  const About: React.FC<AboutProps> = ({ id }) => {
    return (
      <section id={id} className="min-h-screen">
        <h1>About</h1>
      </section>
    );
  };
  
  export default About;
  