'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';
import styles from './page.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal site built with Next.js and hosted on Vercel. Features a modern, responsive design with custom animations and components.',
      image: '/images/project1.png',
      link: 'https://portfolio-git-master-swapdoc11s-projects.vercel.app/',
    },
    {
      title: 'Food Delivery App',
      description: 'Full-stack food delivery and table management application built using MERN stack. Includes real-time order tracking and restaurant management features.',
      image: '/images/project2.png',
      link: 'https://food-delivery-khaki-eta.vercel.app',
    },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>My Projects</h1>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 