
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.textSection}>
        <h3>Why Should You Hire Me?</h3>
        <p>
          I am a dedicated developer with skills in HTML,<br></br> CSS, JavaScript, and modern frameworks like Next.js. 
          I bring creativity, <br></br>problem-solving, and a passion for efficient, responsive web design.
        </p>
      </div>
      <div className={styles.contactSection}>
        <a href="mailto:youremail@example.com" className={styles.contactLink}>youremail@example.com</a>
        <a href="tel:+1234567890" className={styles.contactLink}>+123-456-7890</a>
        <div className={styles.socialLinks}>
          <a href="https://github.com/uzmaimran970" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/uzma-imran-4b42b7300/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
