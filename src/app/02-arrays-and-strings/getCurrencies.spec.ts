import {getCurrencies} from './getCurrencies';

describe('getCurrencies', () => {
  it('returns supported currencies', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('EUR');
    expect(result).toContain('AUD');
  });
});
