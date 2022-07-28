import Image from "next/image";
import styles from "./Beer.module.scss";

const Beer = ({ name, description, loading, image_url }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={styles.beerContainer}>
      <div className={styles.beerRow}>
        <div className={styles.beerCard}>
          <Image src={image_url} alt="beer image" height={100} width={100} />
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Beer;
