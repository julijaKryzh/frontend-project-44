#!/usr/bin/env node
import { runGame } from '../index.js'
import { getRandomInt } from '../getRandomInt.js'

const playEven = () => {

    const description = `Answer "yes" if the number is even, otherwise answer "no".`

    const getRoundData = () => {

      const question = getRandomInt(1, 100)
      const answer = question % 2 === 0 ? 'yes' : 'no'

      return [question, answer]
      }

  runGame(description, getRoundData)
}

export default playEven
