#!/usr/bin/env node
import { runGame } from '../index.js'
import { getRandomInt } from '../getRandom.js'

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

const playPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

  const getRoundData = () => {
    const number = getRandomInt(1, 100)
    const question = String(number)
    const answer = isPrime(number) ? 'yes' : 'no'

    return [question, answer]
  }

  runGame(description, getRoundData)
}

export default playPrime
