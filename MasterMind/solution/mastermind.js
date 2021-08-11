const mastermind = (guess, answer) => {
  const result = { correctNumberCorrectPlace: 0, correctNumberIncorrectPlace: 0 };

  const usedIndex = new Set();
  const unusedNumbers = new Map();

  for (const [index, currentGuess] of guess.entries()) {
    const answerAtIndex = answer[index];
    if (currentGuess === answerAtIndex) {
      usedIndex.add(index);
      result.correctNumberCorrectPlace++;
    } else {
      const unusedNumberCount = unusedNumbers.get(answerAtIndex) || 0;
      unusedNumbers.set(answerAtIndex, unusedNumberCount + 1);
    }
  }

  for (const [index, guessItem] of guess.entries()) {
    if (usedIndex.has(index)) {
      continue;
    }
    const unusedNumberCount = unusedNumbers.get(guessItem);
    if (unusedNumberCount) {
      result.correctNumberIncorrectPlace++;
      unusedNumbers.set(guessItem, unusedNumberCount - 1);
    }
  }

  return result;
};

module.exports = { mastermind };
