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
                return true
            }
        }
    });
};

const duplicateCharacterChecker3 = (stringToCheck) => {
    const checker = new Set();
    const exists = [...stringToCheck].some(letter => {
        if (checker.has(letter)) {
            return true;
        }
        checker.add(letter);
    });
    return exists;
};
