import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import styles from '@/styles/home.module.css';

export default function FeaturedProjects() {
  return (
    <section className={`${styles.section} bg-muted`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={`${styles.grid} ${styles.grid3Cols}`}>
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                <p className="mb-4">A brief description of the project and its key features.</p>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
