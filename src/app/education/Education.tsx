interface EducationProps {
    id: string;
  }
  
  const Education: React.FC<EducationProps> = ({ id }) => {
    return (
      <section id={id} className="min-h-screen">
        <h1>Education</h1>
      </section>
    );
  };
  
  export default Education;
  