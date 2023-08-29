// components/Navbar.js
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="/">
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="/about">
            About
          </Link>
        </li>
        {/* <li className={styles.navItem}>
          <Link className={styles.navLink} href="/services">
            Services
          </Link>
        </li> */}
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <ul className={styles.rightNavList}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="/login">
            Login
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="/signup">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
