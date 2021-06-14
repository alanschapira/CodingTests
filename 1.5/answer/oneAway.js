const oneAway1 = (firstWord, secondWord) => {
  if (Math.abs(firstWord.length - secondWord.length) > 1) {
    return false;
  }
  if (firstWord.length === secondWord.length) {
    let count = 0;
    for (let i = 0; i < firstWord.length; i++) {
      let firstWordChar = firstWord[i];
      let secondWordChar = secondWord[i];
      if (firstWordChar !== secondWordChar) {
        count++;
      }
    }
    if (count === 1) {
      return true;
    }
  } else {
    // must be 1 char away
    let longerWord = firstWord.length > secondWord.length ? firstWord : secondWord;
    let shorterWord = firstWord.length > secondWord.length ? secondWord : firstWord;

    // if the strings are the exact same, return false or true depending on requirements
    for (i = 0; i < longerWord.length; i++) {
      let longerWordCharRemoved = longerWord.slice(0, i) + longerWord.slice(i + 1);
      if (longerWordCharRemoved === shorterWord) {
        return true;
      }
    }
  }

  return false;
};

// This answer is the easiest to read answer
const oneAway2 = (firstWord, secondWord) => {
  // these 2 functions would best be defined outside oneAway2, but have been kept here for organisation
  const oneAwayReplace = (firstWord, secondWord) => {
    let foundDifference = false;
    for (let i = 0; i < firstWord.length; i++) {
      if (firstWord[i] != secondWord[i]) {
        if (foundDifference) {
          return false;
        }
        foundDifference = true;
      }
    }
    return true;
  };
  const oneAwayInsert = (longWord, shortWord) => {
    let longWordIndex = 0;
    let shortWordIndex = 0;
    while (longWordIndex < longWord.length && shortWordIndex < shortWord.length) {
      if (longWord[longWordIndex] !== shortWord[shortWordIndex]) {
        if (longWordIndex !== shortWordIndex) {
          return false;
        }
        shortWordIndex++;
      } else {
        shortWordIndex++;
        longWordIndex++;
      }
    }
    return true;
  };
  if (firstWord.length === secondWord.length) {
    return oneAwayReplace(firstWord, secondWord);
  } else if (firstWord.length + 1 === secondWord.length) {
    return oneAwayInsert(firstWord, secondWord);
  } else if (firstWord.length - 1 === secondWord.length) {
    return oneAwayInsert(secondWord, firstWord);
  }
  return false;
};

// this answer is the most efficient answer that combines the 2 functions above into 1
const oneAway3 = (firstWord, secondWord) => {
  if (Math.abs(firstWord.length - secondWord.length) > 1) {
    return false;
  }
  let longerWord = firstWord.length > secondWord.length ? firstWord : secondWord;
  let shorterWord = firstWord.length > secondWord.length ? secondWord : firstWord;

  let longerWordIndex = 0;
  let shorterWordIndex = 0;

  const wordsAreSameLength = longerWord.length === shorterWord.length;

  let foundDifferent = false;
  while (shorterWordIndex < shorterWord.length && longerWordIndex < longerWord.length) {
    if (shorterWord[shorterWordIndex] !== longerWord[longerWordIndex]) {
      if (foundDifferent) {
        return false;
      }
      foundDifferent = true;
      if (wordsAreSameLength) {
        shorterWordIndex++;
      }
    } else {
      shorterWordIndex++;
    }
    longerWordIndex++;
  }
  return true;
};
