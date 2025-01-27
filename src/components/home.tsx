
import styles from './home.module.css'

const Home = () => {
  return (
    <section id="home">
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="/buzma.jpg" alt="Profile" className={styles.profileImage} />
      </div>
      <div className={styles.right}>
        <h1>Hello, I am Uzma</h1>
        <p>
          I am a passionate developer with experience in HTML,CSS javascript,typscript Next-js and React i am also student of genrative Ai. and also certified in degital marketing.
        </p>
        <a 
      href="/resume.pdf" 
      download 
      style={{
        display: 'inline-block',
        backgroundColor: 'black',
        color: 'white',
        padding: '12px 24px',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
    >
      Download Resume
    </a>
      </div>
    </div>
    </section>
  );
};

export default Home;
