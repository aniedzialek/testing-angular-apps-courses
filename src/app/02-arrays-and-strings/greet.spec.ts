import {greet} from './greet';

describe('greet', () => {
  it('includes name in the message', () => {
    const name = 'mosh';
    expect(greet(name)).toContain(name);
  });
});
