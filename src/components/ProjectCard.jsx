'use client';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
          View Project
        </a>
      </div>
    </div>
  );
} 