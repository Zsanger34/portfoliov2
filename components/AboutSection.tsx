import Link from 'next/link';
import { Button } from '@/components/ui/button';

import styles from '@/styles/home.module.css';


export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.grid} ${styles.grid2Cols}`}>
        
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>About Me</h2>
            <p className={styles.aboutText}>
              Hi there! I&apos;m Zachary Sanger, a passionate software developer with a love for building and tinkering.
              When I&apos;m not coding, you can find me experimenting with my homelab or exploring the latest tech trends.
            </p>
            <Link href="/about">
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
