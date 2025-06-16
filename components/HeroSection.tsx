import Link from 'next/link';
import { Button } from '@/components/ui/button';
import styles from '@/styles/home.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Thoughtful Code, Practical Solutions</h1>
        <p className={styles.heroSubtitle}>
          Crafting efficient web experiences and sharing my journey
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
