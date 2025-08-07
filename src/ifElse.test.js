'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let condition, first, second;

  beforeEach(() => {
    condition = jest.fn();
    first = jest.fn();
    second = jest.fn();
  });

  it('does not return anything from the function', () => {
    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
  });

  it('evaluates the condition exactly once', () => {
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
  });

  it('executes the "first" callback when condition returns true', () => {
    const trueCondition = jest.fn().mockReturnValue(true);

    ifElse(trueCondition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it('executes the "second" callback when condition returns false', () => {
    const falseCondition = jest.fn().mockReturnValue(false);

    ifElse(falseCondition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
  });
});
