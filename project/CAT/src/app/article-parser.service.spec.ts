import { TestBed, inject } from '@angular/core/testing';

import { ArticleParserService } from './article-parser.service';

describe('ArticleParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleParserService]
    });
  });

  it('should be created', inject([ArticleParserService], (service: ArticleParserService) => {
    expect(service).toBeTruthy();
  }));
});
