interface ServicesProps {
    id: string;
  }
  
  const Services: React.FC<ServicesProps> = ({ id }) => {
    return (
      <section id={id} className="min-h-screen">
        <h1>Services</h1>
      </section>
    );
  };
  
  export default Services;
  