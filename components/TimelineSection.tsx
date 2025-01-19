import Link from 'next/link';
import { Button } from '@/components/ui/button';
import styles from '@/styles/home.module.css';

export default function TimelineSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>My Journey</h2>
        <div className={styles.timeline}>
        <div className={styles.timelineItem}>
              <time className={styles.timelineDate}>2023</time>
              <h3 className={styles.timelineTitle}>Continued my journey in IT as a IT Technician </h3>
              <p>Accepting a position as an IT Technician</p>
            </div>

          <div className={styles.timelineItem}>
              <time className={styles.timelineDate}>2021</time>
              <h3 className={styles.timelineTitle}>Started College as a Computer Science Student at University at Buffalo</h3>
              <p>This is where my journey in Computer Science started </p>
            </div>
        </div>
        <div className="text-center mt-6">
          <Link href="/journey">
            <Button>View Full Journey</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
