import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import styles from '@/styles/home.module.css';

const projects = [
  {
    title: 'WealthWise',
    description:
      'A personal finance management tool to help you track expenses, set budgets, and achieve financial goals.',
    details:
      'WealthWise is built with React, Node.js, PHP, and PostgreSQL to provide a comprehensive personal finance management solution. It allows users to track expenses, set budgets, and monitor financial goals.',
    technologies: ['React', 'Node.js', 'PHP', 'PostgreSQL'],
  },
  {
    title: 'RoutineFlex',
    description:
      'RoutineFlex is a workout and routine-sharing social media platform. Developed as a class project focused on backend development, the application currently runs without WebSockets enabled, so the chat feature is not functional.',
    details:
      'RoutineFlex combines backend development skills with a focus on real-world applications. Built with Next.js and TypeScript, it allows users to share and discover routines. Note: Chat functionality is currently disabled due to WebSocket limitations.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Python'],
  },
  {
    title: 'EmotionAI',
    description:
      'EmotionAI is a Convolutional Neural Network (CNN) model built with OpenCV and trained on the FER-2013 dataset. It detects and interprets the emotions of a person based on their facial expressions.',
    details:
      'EmotionAI leverages OpenCV, TensorFlow, and the FER-2013 dataset to analyze emotions in real-time. It uses CNN for accurate emotion detection and is designed for applications in AI-assisted communication and mental health analysis.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'CNN'],
  },
];

export default function FeaturedProjects() {
  return (
    <section className={`${styles.section} bg-muted`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Featured Projects</h2>

        <div className={`${styles.grid} ${styles.grid3Cols}`}>
          {projects.map((project, index) => (
            <Dialog key={index}>
              {/* Trigger (Clickable Card with Button) */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="btn">
                      Learn More
                    </Button>
                  </DialogTrigger>
                </CardContent>
              </Card>

              {/* Dialog Content (Expanded Project Details) */}
              <DialogContent className="max-w-3xl mx-auto">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>{project.details}</DialogDescription>
                </DialogHeader>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <ul className="list-disc pl-5">
                    {project.technologies.map((tech, i) => (
                      <li key={i} className="mb-1">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
