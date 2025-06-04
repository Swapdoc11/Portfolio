'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:swapnil.sendme@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Get in Touch</h1>
        
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h2>Contact Information</h2>
            <div className={styles.infoItem}>
              <strong>Email:</strong>
              <a href="mailto:swapnil.sendme@gmail.com">swapnil.sendme@gmail.com</a>
            </div>
            <div className={styles.infoItem}>
              <strong>LinkedIn:</strong>
              <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/janedoe
              </a>
            </div>
            <div className={styles.infoItem}>
              <strong>GitHub:</strong>
              <a href="https://github.com/Swapdoc11" target="_blank" rel="noopener noreferrer">
                github.com/Swapdoc11
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
                rows={5}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
} 