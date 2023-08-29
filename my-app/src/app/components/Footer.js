// components/Footer.js
import Link from "next/link";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        {/* Add social media icons here */}
        <Link className={styles.socialIconLink} href="https://facebook.com">
          <FaFacebook />
        </Link>
        <Link className={styles.socialIconLink} href="https://twitter.com">
          <FaTwitter />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
