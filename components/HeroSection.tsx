import Link from 'next/link';
import { Button } from '@/components/ui/button';
import styles from '@/styles/home.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Planning, Patience, Precision</h1>
        <p className={styles.heroSubtitle}>
          Software Developer | Homelab Enthusiast | Lifelong Learner
        </p>
        <div className={styles.buttonGroup}>
          <Link href="/journey">
            <Button variant="secondary" size="lg" className={styles.highlightButton}>
              Explore My Journey
            </Button>
          </Link>
          <Link href="/resume">
            <Button variant="secondary" size="lg" className={styles.highlightButton}>
              Explore My Resume
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
