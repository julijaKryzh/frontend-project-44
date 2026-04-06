import readlineSync from 'readline-sync'

export function yourName() {
  const name = readlineSync.question('May I have your name?:')
  return name
}
