
import styles from './journey.module.css'

export default function Journey() {
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <h1 className={styles.title}>My Journey</h1>
          <div className={styles.timeline}>

            <div className={styles.timelineItem}>
              <time className={styles.timelineDate}>2025</time>
              <h3 className={styles.timelineTitle}>Received Second Certification (CompTIA Network+)</h3>
              <p>Solidifying my knowledge within the networking side of IT</p>
            </div>

            <div className={styles.timelineItem}>
              <time className={styles.timelineDate}>2024</time>
              <h3 className={styles.timelineTitle}>Upgraded My Homelab!</h3>
              <p>Upgraded my homelab with a Zimaboard running Proxmox where I can start hosting. Retired the Raspberry Pi for side projects</p>
            </div>

            <div className={styles.timelineItem}>
              <time className={styles.timelineDate}>2024</time>
              <h3 className={styles.timelineTitle}>First CompTIA Certification (CompTIA A+)</h3>
              <p>Passed my first certification in IT, building my foundation of computer systems</p>
            </div>

            <div className={styles.timelineItem}>
              <time className={styles.timelineDate}>2023</time>
              <h3 className={styles.timelineTitle}>Started My Homelab</h3>
              <p>Started my homelab by creating my first PiCluster with 3 Raspberry Pis and K3s</p>
            </div>

            <div className={styles.timelineItem}>
              <time className={styles.timelineDate}>2023</time>
              <h3 className={styles.timelineTitle}>Continued My Journey in IT as an IT Technician</h3>
              <p>Accepted a position as an IT Technician</p>
            </div>

            <div className={styles.timelineItem}>
              <time className={styles.timelineDate}>2022</time>
              <h3 className={styles.timelineTitle}>Started First Position in IT as an Engineering Intern</h3>
              <p>This is where my journey in tech started</p>
            </div>

            <div className={styles.timelineItem}>
              <time className={styles.timelineDate}>2021</time>
              <h3 className={styles.timelineTitle}>Started College as a Computer Science Student at University at Buffalo</h3>
              <p>This is where my journey in Computer Science started</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
