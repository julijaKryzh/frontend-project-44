#!/usr/bin/env node
import { runGame } from '../src/index.js'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }
  return progression
}

const playProgression = () => {
  const description = 'What number is missing in the progression?'

  const getRoundData = () => {
    const start = getRandomInt(1, 50)
    const step = getRandomInt(2, 10)
    const length = getRandomInt(5, 10)

    const progression = generateProgression(start, step, length)

    const hiddenIndex = getRandomInt(0, length - 1)
    const correctAnswer = progression[hiddenIndex]

    progression[hiddenIndex] = '..'
    const question = progression.join(' ')

    return [question, String(correctAnswer)]
  }

  runGame(description, getRoundData)
}

playProgression()
