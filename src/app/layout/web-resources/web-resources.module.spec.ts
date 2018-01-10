import { WebResourcesModule } from './web-resources.module';

describe('WebResourcesModule', () => {
  let webResourcesModule: WebResourcesModule;

  beforeEach(() => {
    webResourcesModule = new WebResourcesModule();
  });

  it('should create an instance', () => {
    expect(webResourcesModule).toBeTruthy();
  });
});
