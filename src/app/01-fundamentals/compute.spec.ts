import { compute } from './compute';

describe('compute', () => {
  it('returns 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('increments input if the input is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
