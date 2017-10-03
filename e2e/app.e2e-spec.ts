import { MultiStepFormPracticePage } from './app.po';

describe('multi-step-form-practice App', () => {
  let page: MultiStepFormPracticePage;

  beforeEach(() => {
    page = new MultiStepFormPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
