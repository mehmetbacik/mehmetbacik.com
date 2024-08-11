interface ResumeProps {
    id: string;
  }
  
  const Resume: React.FC<ResumeProps> = ({ id }) => {
    return (
      <section id={id} className="min-h-screen">
        <h1>Resume</h1>
      </section>
    );
  };
  
  export default Resume;
  