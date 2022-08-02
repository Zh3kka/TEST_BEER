import { useRouter } from "next/router";
import styles from "./Paginate.module.scss";

const Paginate = ({page}) => {
  const router = useRouter();
  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => router.push(`/?page=${1}&per_page=16`)}>First page</button>
      <button onClick={() => router.push(`/?page=${page + 1}&per_page=16`)}>
        Next page
      </button>
      <button onClick={() => router.push(`/?page=${page - 1}&per_page=16`)}>
        Prev page
      </button>
    </div>
  );
};

export default Paginate;
