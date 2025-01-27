import Image from 'next/image';
import styles from './project.module.css'

const Project = () => {
  return (
    <section id="projects">
    <div className={styles.projectContainer}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectList}>
        <div className={styles.projectCard}>
          <Image src="/countdowntimer.png" alt="Project 1" width={300} height={200} className={styles.projectImage} />
          <h3>CountDown Timer</h3>
          <p>countdown timer using Next-js....</p>
          <button className={styles.viewButton}>View Project</button>
        </div>
        <div className={styles.projectCard}>
          <Image src="/signinpage.png" alt="Project 2" width={300} height={200} className={styles.projectImage} />
          <h3>Sign-in page</h3>
          <p>facebook sign in page using HTML,css and javascript.</p>
          <button className={styles.viewButton}>View Project</button>
        </div>
        <div className={styles.projectCard}>
          <Image src="/staticresume.png" alt="Project 3" width={300} height={200} className={styles.projectImage} />
          <h3>Static Resume</h3>
          <p>This is static resume using HTML,CSS javascript</p>
          <button className={styles.viewButton}>View Project</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Project;
