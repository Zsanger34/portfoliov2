import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

import Image from 'next/image'
import styles from './about.module.css'


export default function About() {
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.grid} ${styles.grid2Cols}`}>
            <div>
            <Image
              src="/4DEA37D4-E0F1-42C4-8DCC-E8E6244C7652.jpg"
              alt="Zachary Sanger"
              className={styles.profileImage}
              layout="responsive"
              width={200}
              height={200}
            />
            </div>
            <div className={styles.aboutContent}>
              <h1 className={styles.title}>About Me</h1>
              <p className={styles.aboutText}>
                Hi there! I&apos;m Zachary Sanger, a passionate Software Developer with a love for technology and innovation. 
                My journey in the tech world began when I was younger when I used to take apart computers to try and learn how they work, 
                and since then, I&apos;ve been on an exciting adventure of continuous learning and growth.
              </p>
              <p className={styles.aboutText}>
                When I&apos;m not coding or tinkering with my homelab, you can find me Snowboarding, Cooking, or Lifting.
                I believe in the power of thinking 3 moves ahead, and I&apos;m always eager to take on new challenges and push the boundaries of what&apos;s possible.
              </p>
              <p className={styles.aboutText}>
                My goal is to build intuitive applications that make life easier and share what I learn along the way.
              </p>

            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} bg-muted`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>My Skills</h2>
          <div className={`${styles.grid} ${styles.grid3Cols}`}>
            <Card>
              <CardHeader>
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>CSS/SASS</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Python</li>
                  <li>SQL/NoSQL Databases</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>CI/CD</li>
                  <li>Cloud Platforms (AWS, GCP)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </>
  )
}

