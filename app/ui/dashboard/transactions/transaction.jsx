import Image from "next/image";
import styles from "./transactions.module.css";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transaction</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src= "/noavatar.png"
                  alt="Loading"
                  width="40"
                  height="40"
                />
                John Doe
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src= "/noavatar.png"
                  alt="Loading"
                  width="40"
                  height="40"
                />
                John Doe
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>13.02.2024</td>
            <td>$250</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src= "/noavatar.png"
                  alt="Loading"
                  width="40"
                  height="40"
                />
                John Doe
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>12.02.2024</td>
            <td>$200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
