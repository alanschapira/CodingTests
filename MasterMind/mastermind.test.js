const { mastermind } = require("./mastermind");

describe('mastermind', () => {
  it('should show the correct response when they are all wrong', () => {
    const guess = [1, 1, 2, 2];
    const answer = [3, 4, 5, 6];
    const result = mastermind(guess, answer);
    expect(result).toEqual({ correctNumberCorrectPlace: 0, correctNumberIncorrectPlace: 0 });
  });
  it('should show the correct response when they are all right', () => {
    const guess = [1, 2, 3, 4];
    const answer = [1, 2, 3, 4];
    const result = mastermind(guess, answer);
    expect(result).toEqual({ correctNumberCorrectPlace: 4, correctNumberIncorrectPlace: 0 });
  });
  it('should show the correct response when they are all right but wrong order', () => {
    const guess = [1, 2, 3, 4];
    const answer = [4, 3, 2, 1];
    const result = mastermind(guess, answer);
    expect(result).toEqual({ correctNumberCorrectPlace: 0, correctNumberIncorrectPlace: 4 });
  });
  it('should show the correct response when some are right, and some are right but in the wrong order', () => {
    const guess = [1, 2, 3, 4];
    const answer = [1, 2, 4, 3];
    const result = mastermind(guess, answer);
    expect(result).toEqual({ correctNumberCorrectPlace: 2, correctNumberIncorrectPlace: 2 });
  });
  it('should show the correct response when some are right, and some are right but in the wrong order, and some are wrong', () => {
    const guess = [1, 6, 5, 4];
    const answer = [1, 2, 4, 3];
    const result = mastermind(guess, answer);
    expect(result).toEqual({ correctNumberCorrectPlace: 1, correctNumberIncorrectPlace: 1 });
  });
  it('should ignore duplicates, when the correct one in the right place', () => {
    const guess = [1, 6, 5, 1];
    const answer = [1, 2, 4, 3];
    const result = mastermind(guess, answer);
    expect(result).toEqual({ correctNumberCorrectPlace: 1, correctNumberIncorrectPlace: 0 });
  });
  it('should ignore duplicates in the wrong place', () => {
    const guess = [6, 1, 5, 1];
    const answer = [1, 2, 4, 3];
    const result = mastermind(guess, answer);
    expect(result).toEqual({ correctNumberCorrectPlace: 0, correctNumberIncorrectPlace: 1 });
  });
});
