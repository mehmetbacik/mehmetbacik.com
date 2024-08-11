interface ContactProps {
    id: string;
  }
  
  const Contact: React.FC<ContactProps> = ({ id }) => {
    return (
      <section id={id} className="min-h-screen">
        <h1>Contact</h1>
      </section>
    );
  };
  
  export default Contact;
  