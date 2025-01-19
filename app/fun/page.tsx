'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import styles from './fun.module.css'

const techQuiz = [
  { question: "What does CPU stand for?", answer: "Central Processing Unit" },
  { question: "What is the most popular programming language in 2023?", answer: "JavaScript" },
  { question: "What does HTML stand for?", answer: "Hypertext Markup Language" },
  { question: "What is the name of the world's first programmer?", answer: "Ada Lovelace" },
  { question: "What year was the first iPhone released?", answer: "2007" },
]

export default function Fun() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % techQuiz.length)
    setShowAnswer(false)
  }

  return (
    <>
      <section className={styles.section}>
        <div className={styles.content}>
          <h1 className={styles.title}>Fun Zone</h1>
          <Card>
            <CardHeader>
              <CardTitle>Tech Trivia Quiz</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={styles.question}>{techQuiz[currentQuestion].question}</p>
              {showAnswer ? (
                <p className={styles.answer}>{techQuiz[currentQuestion].answer}</p>
              ) : (
                <Button onClick={() => setShowAnswer(true)} className="mb-4">Reveal Answer</Button>
              )}
              <Button onClick={handleNextQuestion}>Next Question</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className={`${styles.section} bg-muted`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Behind the Scenes</h2>
          <div className={`${styles.grid} ${styles.grid2Cols}`}>
            <Card>
              <CardHeader>
                <CardTitle>My First Computer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>When I want younger I would always get in trouble for taking apart my laptop and other gadgets. I took apart these devices to understand how they worked. 
                  The reason I got in trouble was because I would take them apart and not know how to put them back together. This early curiosity led me to journey into the world of technology but atleast now I can put them back together.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cooking around the world</CardTitle>
              </CardHeader>
              <CardContent>
                <p>My current cooking goal is to cook a meal from every country in the world. I have a long way to go but I am working on it.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

