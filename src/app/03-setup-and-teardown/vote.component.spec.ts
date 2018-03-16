import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('increments totalVotes when upvoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('decrements totalVotes when downvoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
