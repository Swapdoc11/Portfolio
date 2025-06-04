'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function About() {
  const experiences = [
    {
      period: '2024 - 2025',
      company: 'MAULI Collage of Engineering, Shegaon',
      role: 'Web Development Instructor',
      description: 'Teaching OOP, AI, and practical courses on React, Node, Next.js and Software Engineering. Managing CSESA and ISTE portfolios.',
    },
    {
      period: '2023 - 2024',
      company: 'IQVIA Consultants',
      role: 'Web Developer',
      description: 'Web application development, migration, and data handling. Providing training on HIS modules to doctors.',
    },
    {
      period: '2021 - 2022',
      company: 'Cyberthon Technologies',
      role: 'Web Developer & Trainer',
      description: 'Web application development, migration and training students in project development phases.',
    },
    {
      period: '2017 - 2021',
      company: 'Navyug Education',
      role: 'HOD & Web Developer',
      description: 'IT Professor, Computer Lab in-charge, Website maintenance, and trainer for programming and electronics.',
    },
    {
      period: '2016 - 2017',
      company: 'Techleaper System Pvt. Ltd',
      role: 'Web Developer',
      description: 'Developed projects from scratch and handled client interactions.',
    },
  ];

  const education = [
    {
      period: '2011 - 2015',
      degree: 'B.E. in Computer Science and Engineering',
      institution: 'North Maharashtra University',
    },
    {
      period: '2008 - 2011',
      degree: 'Diploma in Computer Science and Engineering',
      institution: 'MSBTE',
    },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.title}>About Me</h1>
          <div className={styles.downloadResume}>
            <a href="/Resume.pdf" download className={styles.resumeButton}>
              Download Resume
            </a>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelinePeriod}>{exp.period}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.company}>{exp.company}</h3>
                  <div className={styles.role}>{exp.role}</div>
                  <p className={styles.description}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.timeline}>
            {education.map((edu, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelinePeriod}>{edu.period}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <div className={styles.institution}>{edu.institution}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 