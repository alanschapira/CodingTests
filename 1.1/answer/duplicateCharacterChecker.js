const duplicateCharacterChecker1 = (stringToCheck) => {
  for (let i = 0; i <= stringToCheck.length; i++) {
    for (let j = 0; j <= stringToCheck.length; j++) {
      if (i !== j && stringToCheck[i] === stringToCheck[j]) {
        return true;
      }
    }
  }
  return false;
};

const duplicateCharacterChecker2 = (stringToCheck) => {
  return [...stringToCheck].some((letter, index) => {
    for (let i = 0; i <= stringToCheck.length; i++) {
      if (i !== index && letter === stringToCheck[i]) {
        return true;
      }
    }
  });
};

const duplicateCharacterChecker3 = (stringToCheck) => {
  const checker = new Set();
  let isDuplicate = false;
  stringToCheck.split("").forEach((letter) => {
    if (checker.has(letter)) {
      isDuplicate = true;
    } else {
      checker.add(letter);
    }
  });
  return isDuplicate;
};

const duplicateCharacterChecker4 = (stringToCheck) => {
  const checker = new Set();
  const exists = [...stringToCheck].some((letter) => {
    if (checker.has(letter)) {
      return true;
    }
    checker.add(letter);
  });
  return exists;
};

const duplicateCharacterChecker5 = (stringToCheck) => {
  const checker = new Set();
  let duplicateExists = false;
  for (const letter of stringToCheck) {
    if (checker.has(letter)) {
      duplicateExists = true;
      break;
    }
    checker.add(letter);
  }
  return duplicateExists;
};

const duplicateCharacterChecker6 = (stringToCheck) => {
  // ascii only
  if (stringToCheck.length > 128) {
    return true;
  }
  const checker = new Set();
  let duplicateExists = false;
  for (const letter of stringToCheck) {
    if (checker.has(letter)) {
      duplicateExists = true;
      break;
    }
    checker.add(letter);
  }
  return duplicateExists;
};
