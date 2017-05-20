import { FitnessPartnerPage } from './app.po';

describe('fitness-partner App', () => {
  let page: FitnessPartnerPage;

  beforeEach(() => {
    page = new FitnessPartnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
