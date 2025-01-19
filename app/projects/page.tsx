import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import styles from './projects.module.css'

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1 and its key features.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://project1.example.com"
  },
  {
    title: "Project 2",
    description: "An overview of Project 2 and what makes it unique.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "https://project2.example.com"
  },
  {
    title: "Project 3",
    description: "Highlighting the main aspects and achievements of Project 3.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Vue.js", "Express", "GraphQL"],
    link: "https://project3.example.com"
  }
]

export default function Projects() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>My Projects</h1>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Card key={index} className={styles.card}>
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
                <div className={styles.technologies}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={styles.tech}>{tech}</span>
                  ))}
                </div>
                <Button asChild className={styles.button}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

