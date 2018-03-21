import {LikeComponent} from './like.component';

describe('LikeComponent', () => {
  let component: LikeComponent;

  beforeEach(() => {
    component = new LikeComponent();
  });

  it('initializes without input values provided', () => {
    expect(component).toBeTruthy();
  });

  it('clicking iLike will mark item as liked', () => {
    component.click();

    expect(component.iLike).toBeTruthy();
  });

  it('clicking iLike on a liked item will unlike it', () => {
    component.iLike = true;
    component.click();

    expect(component.iLike).toBeFalsy();
  });

  it('iLiking item with no likes will increment total likes by 1', () => {
    let likes = 0;
    component.totalLikes = likes;
    component.click();

    expect(component.totalLikes).toBe(likes+1);
  });

    xit('after clicking iLiked item with 0 likes passed, the item will show 0 likes', () => {   // defensive
      let likes = 0;
      component.iLike = true;
      component.totalLikes = likes;
      component.click();

      expect(component.totalLikes).toBe(0);
    });

  it('clicking iLiked item will decrement total likes by 1', () => {
    let likes = 123;
    component.iLike = true;
    component.totalLikes = likes;
    component.click();

    expect(component.totalLikes).toBe(likes-1);
  });
});
