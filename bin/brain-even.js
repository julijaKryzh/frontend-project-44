#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { getRandomInt } from '../src/getRandom.js'

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')

let successCount = 0
const roundsToWin = 3

for (let i = 0; i < roundsToWin; i++) {
  const number = getRandomInt(1, 100)
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'

  console.log(`Question: ${number}`)
  const userAnswer = readlineSync.question('Your answer: ')

  if (userAnswer === correctAnswer) {
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
