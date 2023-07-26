import React from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navbar_list}>
          <li className={styles.navbar_item}>
            <Link href="/" className={styles.navbar_link}>
              Home
            </Link>
          </li>
          <li className={styles.navbar_item}>
            <Link href="/blog" className={styles.navbar_link}>
              Popular Blogs
            </Link>
          </li>
          <li className={styles.navbar_item}>
            <Link href="/about" className={styles.navbar_link}>
              About
            </Link>
          </li>
          <li className={styles.navbar_item}>
            <Link href="contact" className={styles.navbar_link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
