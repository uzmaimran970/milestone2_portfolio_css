import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Contact Me</h2>
      <form className={styles.form}>
        <label className={styles.label}>
          Name
          <input type="text" className={styles.input} placeholder="Your Name" required />
        </label>
        <label className={styles.label}>
          Email
          <input type="email" className={styles.input} placeholder="Your Email" required />
        </label>
        <label className={styles.label}>
          Phone
          <input type="tel" className={styles.input} placeholder="Your Phone Number" />
        </label>
        <label className={styles.label}>
          Subject
          <input type="text" className={styles.input} placeholder="Subject" />
        </label>
        <label className={styles.label}>
          Message
          <textarea className={styles.textarea} placeholder="Your Message" required />
        </label>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
