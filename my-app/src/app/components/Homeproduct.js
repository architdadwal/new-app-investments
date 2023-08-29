import React from "react";
import styles from "./Homeproduct.module.css"; // Import CSS module for styling

function Homeproduct() {
  return (
    <div className={styles.row}>
      <div
        className={`${styles.col} ${styles.md} ${styles.col8}  ${styles.sm} ${styles.col6}`}
      >
        <h1 className={styles.gradienttext}>Investments made easy</h1>
        <p className={styles.hometoppara}>
          {" "}
          A game changer web app that will make you earn faster. Multiply your
          income with our multi-level income sharing system. Start today by
          investing some money, add more people to your network, and witness the
          exponential growth of your earnings. Explore new possibilities and
          take control of your financial future.{" "}
        </p>
      </div>
      <div
        className={`${styles.col} ${styles.md} ${styles.col4}  ${styles.sm} ${styles.col6}`}
      >
        <div className={styles.maincard}>
          <h1> Safe investment</h1>
          <p className={styles.maincardpara}>
            {" "}
            With property prices rising every year . Its a high time you put
            some money in good properties and expect a good return plus more
            benefits if more people join through your referal code . Everytime
            they invest you also earn something.
          </p>
          <div className={styles.maincardbutttondiv}>
            <button className={styles.maincardbutton}> Checkout Us</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeproduct;
