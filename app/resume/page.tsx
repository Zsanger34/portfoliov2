import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import styles from './resume.module.css';


export default function Resume() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.content}>
          <h1 className={styles.title}>Digital Resume</h1>
          <a href="/Zac Sanger's Resume.pdf" download target="_blank" rel="noopener noreferrer">
            <Button className={styles.mb4}>Download PDF</Button>
          </a>

          <Card className={styles.mb8}>
            <CardHeader>
              <CardTitle>Executive Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Computer Science student with expertise in cloud technologies, full-stack development, and scripting. Passionate
                about leveraging technical and problem-solving skills to build scalable, innovative solutions addressing real-world
                challenges. Eager to contribute to a collaborative, customer-focused environment with a commitment to learning and growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.content}>
          <Card className={styles.mb8}>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-bold">IT Technician</h3>
                  <p className="text-sm text-muted-foreground">Techworks Consulting, United States</p>
                  <p className="text-sm text-muted-foreground">May 2022 – Present</p>
                  <ul className="list-disc pl-5">
                    <li>Automates repetitive tasks using bash and PowerShell scripts.</li>
                    <li>Troubleshoots and resolves software, hardware, and network issues.</li>
                    <li>Optimizes ticket resolution processes for enhanced productivity.</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.content}>
          <Card className={styles.mb8}>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-bold">WealthWise</h3>
                  <p>
                    Developed a financial management tool using React, PHP, and an SQL backend database. Focused on scalability, user
                    experience, and secure data handling.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold">RoutineFlex</h3>
                  <p>
                    Built a social media application for sharing workout routines and fitness goals using Python and PostgreSQL,
                    emphasizing user-friendly interaction and data integrity.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold">EmotionAI</h3>
                  <p>
                    Created an AI system for real-time emotion detection using CNNs with TensorFlow and OpenCV.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold">DreamInsight</h3>
                  <p>
                    Developed the front end of a sleep analysis platform using JavaScript and React, focusing on user interface
                    design and data visualization.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.content}>
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className={styles.list}>
                <li>Programming Languages: Python, PowerShell, JavaScript, Java, Scala, C, SQL</li>
                <li>Scripting and Automation: Bash, Python scripting, PowerShell</li>
                <li>Tools: Git, Docker, Kubernetes, Terraform, React, Django, Flask</li>
                <li>Cloud Solutions: AWS</li>
                <li>Full-Stack Development and REST APIs</li>
                <li>Soft Skills: Collaboration, Communication, Analytical Thinking</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className={`${styles.section}`}>
        <div className={styles.content}>
          <Card className={styles.mb8}>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-bold">Bachelor of Science, Computer Science</h3>
                  <p className="text-sm text-muted-foreground">University at Buffalo, Getzville, NY</p>
                  <p className="text-sm text-muted-foreground">Aug 2021 – Present</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
