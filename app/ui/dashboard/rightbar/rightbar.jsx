import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Take 4 minute to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis iste itaque quas impedit molestiae alias exercitationem?
            Odio tempore vero dolorum!
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
       
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Take 4 minute to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis iste itaque quas impedit molestiae alias exercitationem?
            Odio tempore vero dolorum!
          </p>
          <button className={styles.button}>
            <MdReadMore />
           Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
