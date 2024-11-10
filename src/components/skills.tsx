import Image from 'next/image';
import styles from './skills.module.css'

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsList}>
        <div className={styles.skillItem}>
          <Image src="/html2.webp" alt="HTML" width={50} height={50} className={styles.skillIcon} />
          <p>HTML</p>
        </div>
        <div className={styles.skillItem}>
          <Image src="/css4.webp" alt="CSS" width={50} height={50} className={styles.skillIcon} />
          <p>CSS</p>
        </div>
        <div className={styles.skillItem}>
          <Image src="/js.png" alt="JavaScript" width={50} height={50} className={styles.skillIcon} />
          <p>JavaScript</p>
        </div>
        <div className={styles.skillItem}>
          <Image src="/tsss.webp" alt="TypeScript" width={50} height={50} className={styles.skillIcon} />
          <p>TypeScript</p>
        </div>
        <div className={styles.skillItem}>
          <Image src="/next1.png" alt="Next.js" width={50} height={50} className={styles.skillIcon} />
          <p>Next.js</p>
        </div>
        <div className={styles.skillItem}>
          <Image src="/react.png" alt="React" width={50} height={50} className={styles.skillIcon} />
          <p>React</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
