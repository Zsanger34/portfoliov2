import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import styles from '@/styles/home.module.css';
import photo from '@/public/4DEA37D4-E0F1-42C4-8DCC-E8E6244C7652.jpg'

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.grid} ${styles.grid2Cols}`}>
        <Image
              src={photo}
              alt="Your Name"
              className={styles.profileImage}
              layout="responsive"
              width={200}
              height={200}
            />
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>About Me</h2>
            <p className={styles.aboutText}>
              Hi there! I'm Zachary Sanger, a passionate software developer with a love for building and tinkering.
              When I'm not coding, you can find me experimenting with my homelab or exploring the latest tech trends.
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
