import React from "react";
import styles from "./Homecomponent.module.css";

function Homecomponent2() {
  return (
    <div className={styles.maincardsdiv}>
      {" "}
      <h1 className={styles.maincardsdivhead}> Why us ? </h1>
      <p className={styles.maincardsdivp}>
        {" "}
        Our web app has some exxlusive and first in segment features tah help
        you invest and grow fast
      </p>
      <div className={styles.cardsdiv}>
        <div className={styles.maincard}>
          <h1 className={styles.cardheading}> User Dashboard </h1>
          <p className={styles.maincardpara1}>
            {" "}
            We have top notch dashboard that wil help you track your investments
            , referrals , assosciates etc . You can raise a withdrawl request
            anytime you want via your dashboard . You Dashboard will conatin all
            your details invetments , earnings , withdrawls , sponsors etc
          </p>
        </div>{" "}
        <div className={styles.maincard}>
          <h1 className={styles.cardheading}> Easy investment</h1>
          <p className={styles.maincardpara1}>
            {" "}
            Investing is now a game you would love to play , wiht few click you
            can invest your money with us on top properties and start earning
            profit on that .investment by people in your lower level of chain
            will make you earn money hile you are sleeping .
          </p>
        </div>{" "}
        <div className={styles.maincard}>
          <h1 className={styles.cardheading}> 24/7 Support</h1>
          <p className={styles.maincardpara1}>
            {" "}
            Our support team is always availabel to help you out in any tech
            issue . Be it deposit , be it withdrawl or if you are facing any
            problem in our app . We are just a call/mail away .Our team of
            experts will guide you through onboarding process , investments and
            sponsor system .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homecomponent2;
