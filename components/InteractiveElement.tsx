'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function InteractiveElement() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  const handleClick = () => {
    setCount(count + 1)
    if (count === 4) {
      setMessage("You've found an Easter egg! 🎉")
    } else if (count === 9) {
      setMessage("You're really curious, aren't you? 😄")
    } else if (count >= 10) {
      setMessage("Okay, you win! Here's a virtual high five! ✋")
    } else {
      setMessage('')
    }
  }

  return (
    <div className="mt-8 text-center">
      <Button onClick={handleClick}>Click me!</Button>
      <p className="mt-2">{message}</p>
    </div>
  )
}

