import styles from "./styles/Technology.module.scss";

interface TechnologyProps {
  id: string;
}

const Technology: React.FC<TechnologyProps> = ({ id }) => {
  return (
    <section id={id} className={styles.technology}>
      <h1>Tech Stack</h1>
    </section>
  );
};

export default Technology;
