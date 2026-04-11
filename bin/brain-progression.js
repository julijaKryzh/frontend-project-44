import { runGame } from '../src/index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для создания самой прогрессии
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const playProgression = () => {
  const description = 'What number is missing in the progression?';

  const getRoundData = () => {
    const start = getRandomInt(1, 50); // Начальное число
    const step = getRandomInt(2, 10);   // Шаг прогрессии
    const length = getRandomInt(5, 10); // Длина (от 5 до 10 чисел)

    const progression = generateProgression(start, step, length);

    // Выбираем случайный индекс, который спрячем
    const hiddenIndex = getRandomInt(0, length - 1);
    const correctAnswer = progression[hiddenIndex];

    // Заменяем число на две точки
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');

    return [question, String(correctAnswer)];
  };

  runGame(description, getRoundData);
};

playProgression();
