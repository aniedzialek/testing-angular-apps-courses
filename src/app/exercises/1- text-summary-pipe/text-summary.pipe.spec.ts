import {TextSummaryPipe} from './text-summary.pipe';

describe('TextSummaryPipe: transform returns', () => {
  let pipe: TextSummaryPipe;

  beforeEach(() => {
    pipe = new TextSummaryPipe();
  });

  it('an empty string when falsy value is provided', () => {
    let result = pipe.transform(null);
    expect(result).toBe('');
  });

  it('10 first chars from given string when no args provided', () => {
    const input = 'qwertyuiopa';
    let result = pipe.transform(input);

    expect(result).toBe(expectedSubstring(input, 10));
  });

  it('substring with the provided length', () => {
    const input = 'qwertyuiopasdfghjkl';
    const limit = 13;

    let result = pipe.transform(input, limit);

    expect(result).toBe(expectedSubstring(input, limit));
  });

  it('the whole string when length is smaller than limit', () => {
    const input = 'qwerty';

    let result = pipe.transform(input);

    expect(result).toBe(input);
  });

  function expectedSubstring(input, limit) {
    return input.substr(0, limit) + '...';
  }
});
