
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
              <h3 className={styles.timelineTitle}>Recieved Second Certification (CompTIA Netowrk+)</h3>
              <p>Solidfying my knowledge within the networking side of IT</p>
            </div>

            <div className={styles.timelineItem}>
              <time className={styles.timelineDate}>2024</time>
              <h3 className={styles.timelineTitle}>Upgraded my Homelab!</h3>
              <p>Upgraded my homelab with a Zimaboard running Proxmox where I can start hosting. Retired the Raspberry pi for side projects</p>
            </div>

            <div className={styles.timelineItem}>
              <time className={styles.timelineDate}>2024</time>
              <h3 className={styles.timelineTitle}>First CompTIA Certification (CompTIA A+)</h3>
              <p>Passed my first Certification in IT building my foundation of comptuer systems</p>
            </div>

            <div className={styles.timelineItem}>
              <time className={styles.timelineDate}>2023</time>
              <h3 className={styles.timelineTitle}>Started my Homelab</h3>
              <p>Started my homelab by creating my first PiCluster with 3 Raspberry Pis and K3s</p>
            </div>

            <div className={styles.timelineItem}>
              <time className={styles.timelineDate}>2023</time>
              <h3 className={styles.timelineTitle}>Continued my journey in IT as a IT Technician </h3>
              <p>Accepting a position as an IT Technician</p>
            </div>

            <div className={styles.timelineItem}>
              <time className={styles.timelineDate}>2022</time>
              <h3 className={styles.timelineTitle}>Started First Position in IT as a Engineering Intern</h3>
              <p>This is where my journey in tech started </p>
            </div>

            <div className={styles.timelineItem}>
              <time className={styles.timelineDate}>2021</time>
              <h3 className={styles.timelineTitle}>Started College as a Computer Science Student at University at Buffalo</h3>
              <p>This is where my journey in Computer Science started </p>
            </div>

          </div>
        </div>
      </section>

      {/* <section className={`${styles.section} bg-muted`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Key Achievements</h2>
          <div className={`${styles.grid} ${styles.grid2Cols}`}>
            <Card>
              <CardHeader>
                <CardTitle>Open Source Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Contributed to several popular open-source projects, including [Project Names].</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Conference Speaker</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Presented at [Conference Name] on [Topic], sharing knowledge with the developer community.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hackathon Winner</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Won first place at [Hackathon Name] for developing [Project Name].</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mentorship Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Established a mentorship program at [Company Name], helping junior developers grow their skills.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </>
  )
}

