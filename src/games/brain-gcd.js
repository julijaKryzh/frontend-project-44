#!/usr/bin/env node
import { runGame } from '../index.js'
import { getRandomInt } from '../utils.js'

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b))

const playGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.'

  const getRoundData = () => {
    const num1 = getRandomInt(1, 100)
    const num2 = getRandomInt(1, 100)

    const question = `${num1} ${num2}`
    const answer = getGcd(num1, num2)

    return [question, String(answer)]
  }

  runGame(description, getRoundData)
}
export default playGcd
