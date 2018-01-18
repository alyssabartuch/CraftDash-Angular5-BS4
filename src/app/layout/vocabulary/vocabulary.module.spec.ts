import { VocabularyModule } from './vocabulary.module';

describe('VocabularyModule', () => {
    let vocabularyModule: VocabularyModule;

    beforeEach(() => {
        vocabularyModule = new VocabularyModule();
    });

    it('should create an instance', () => {
        expect(VocabularyModule).toBeTruthy();
    });
});
