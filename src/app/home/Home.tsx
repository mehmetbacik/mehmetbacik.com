interface HomeProps {
  id: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen">
      <h1>Home</h1>
    </section>
  );
};

export default Home;
