'use client';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a href="https://github.com/Swapdoc11" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:swapnil.sendme@gmail.com">Email</a>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Swapnil Jadhav. All rights reserved.
      </div>
    </footer>
  );
} 