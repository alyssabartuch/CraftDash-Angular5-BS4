import { StitchRefModule } from './stitch-ref.module';

describe('StitchRefModule', () => {
  let stitchRefModule: StitchRefModule;

  beforeEach(() => {
    stitchRefModule = new StitchRefModule();
  });

  it('should create an instance', () => {
    expect(stitchRefModule).toBeTruthy();
  });
});
