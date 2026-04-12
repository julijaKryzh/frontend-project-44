#!/usr/bin/env node
import readlineSync from 'readline-sync'

export const runGame = (description, getRoundData) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(`${description}`)

  let successCount = 0
  const roundsToWin = 3

  for (let i = 0; i < roundsToWin; i++) {
    const [question, correctAnswer] = getRoundData()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!')
      successCount++
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      break
    }
  }

  if (successCount === roundsToWin) {
    console.log(`Congratulations, ${name}!`)
  }
}
