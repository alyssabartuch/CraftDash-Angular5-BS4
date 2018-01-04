import { CheatsheetModule } from './cheatsheet.module';

describe('CheatsheetModule', () => {
  let cheatsheetModule: CheatsheetModule;

  beforeEach(() => {
    cheatsheetModule = new CheatsheetModule();
  });

  it('should create an instance', () => {
    expect(cheatsheetModule).toBeTruthy();
  });
});
