#!/usr/bin/env node
import { runGame } from '../index.js'
import { getRandomInt } from '../utils.js'

const calculate = (a, b, sign) => {
  switch (sign) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    default: return null
  }
}

const playCalc = () => {
  const description = 'What is the result of the expression?'

  const getRoundData = () => {
    const num1 = getRandomInt(1, 20)
    const num2 = getRandomInt(1, 10)
    const signs = ['+', '-', '*']
    const sign = signs[getRandomInt(0, signs.length - 1)]

    const question = `${num1} ${sign} ${num2}`
    const answer = calculate(num1, num2, sign)

    return [question, answer]
  }

  runGame(description, getRoundData)
}

export default playCalc
