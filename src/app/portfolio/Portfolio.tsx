interface PortfolioProps {
    id: string;
  }
  
  const Portfolio: React.FC<PortfolioProps> = ({ id }) => {
    return (
      <section id={id} className="min-h-screen">
        <h1>Portfolio</h1>
      </section>
    );
  };
  
  export default Portfolio;
  