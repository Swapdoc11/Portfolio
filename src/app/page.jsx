'use client';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.profileImage}>
            <Image
              src="/images/swapnil.jpg"
              alt="Swapnil Jadhav"
              width={200}
              height={200}
              className={styles.avatar}
            />
          </div>
          <h1 className={styles.title}>Swapnil Jadhav</h1>
          <h2 className={styles.subtitle}>Full-Stack Developer + Trainer</h2>
          <p className={styles.summary}>
            Passionate developer with 5+ years of experience building scalable web applications. 
            Skilled in JavaScript, React, Node.js, and SQL.
          </p>
          <div className={styles.skills}>
            <h3>Core Skills</h3>
            <div className={styles.skillsList}>
              {['JavaScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git', 'Docker'].map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 