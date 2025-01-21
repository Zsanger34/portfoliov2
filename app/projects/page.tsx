import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image';
import styles from './projects.module.css';

const projects = [
  {
    title: 'WealthWise',
    description:
      'A personal finance management tool to help you track expenses, set budgets, and achieve financial goals.',
    details: 'WealthWise is built with React, Node.js, PHP, and PostgreSQL to provide a comprehensive personal finance management solution. This tool allows users to track expenses, set budgets, and monitor financial goals in real-time.',
    image: '/logo-reRZrjJo.svg',
    technologies: ['React', 'Node.js', 'PHP', 'PostgreSQL'],
    link: 'https://wealthwise.zacharysanger.com/',
  },
  {
    title: 'RoutineFlex',
    description:
      'RoutineFlex is a workout and routine-sharing social media platform. Developed as a class project focused on backend development, the application currently runs without WebSockets enabled, so the chat feature is not functional.',
    details: 'RoutineFlex combines backend development skills with a focus on real-world applications. Built with Next.js and TypeScript, it allows users to share and discover routines. Note: Chat functionality is currently disabled due to WebSocket limitations.',
    image: '/-design-a-sleek-and-modern-svg-icon-for-routinefle.svg',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Python'],
    link: 'https://routineflex.zacharysanger.com/',
  },
  {
    title: 'EmotionAI',
    description:
      'EmotionAI is a Convolutional Neural Network (CNN) model built with OpenCV and trained on the FER-2013 dataset. It detects and interprets the emotions of a person based on their facial expressions.',
    details: 'EmotionAI leverages OpenCV, TensorFlow, and the FER-2013 dataset to analyze emotions in real-time. It uses CNN for accurate emotion detection and is designed for applications in AI-assisted communication and mental health analysis.',
    image: '/images.png', // Replace with actual image
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'CNN'],
    link: 'https://github.com/Zsanger34/EmotionAi',
  },
];

export default function Projects() {
  return (
    <section className={styles.section}>
      <div className="container mx-auto">
        <h1 className={styles.title}>My Projects</h1>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Dialog key={index}>
              {/* Trigger (Clickable Card) */}
              <DialogTrigger asChild>
                <Card className={`${styles.card} cursor-pointer`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className={styles.image}
                  />
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={styles.description}>{project.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>

              {/* Dialog Content (Expanded View) */}
              <DialogContent className="dialog-content">
            <DialogHeader className="dialog-header">
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.details}</DialogDescription>
            </DialogHeader>
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="dialog-image"
            />
            <div className="dialog-technologies">
              <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
              <ul className="dialog-list">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="dialog-list-item">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <Button variant="outline" asChild className="dialog-button">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            </Button>
          </DialogContent>

            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
