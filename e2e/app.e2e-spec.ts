import { ShoppingcartappPage } from './app.po';

describe('shoppingcartapp App', () => {
  let page: ShoppingcartappPage;

  beforeEach(() => {
    page = new ShoppingcartappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
