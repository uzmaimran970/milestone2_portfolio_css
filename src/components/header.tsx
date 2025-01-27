"use client";
import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>uzmaIMRAN.</div>

      {/* Hamburger Button */}
      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      {/* Navigation Links */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.show : ""}`}>
        <ul className={styles.navLinks}>
          <li>
            <a href="#home" className={styles.link} onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#home" className={styles.link} onClick={() => setIsMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className={styles.link} onClick={() => setIsMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.link} onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contactform" className={styles.link} onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
