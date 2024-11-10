import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>uzmaIMRAN.</div>
      <nav>
        <ul className={styles.navLinks}>
          <li><a href="#home" className={styles.link}>Home</a></li>
          <li><a href="#about" className={styles.link}>About</a></li>
          <li><a href="#skills" className={styles.link}>Skills</a></li>
          <li><a href="#projects" className={styles.link}>Projects</a></li>
          <li><a href="#contact" className={styles.link}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
