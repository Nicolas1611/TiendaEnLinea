import { CarritoPage } from './app.po';

describe('carrito App', function() {
  let page: CarritoPage;

  beforeEach(() => {
    page = new CarritoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
