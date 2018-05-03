import { Injectable } from '@angular/core';
import * as keywords from 'assets/keywords/keywords.json';

@Injectable()
export class ArticleParserService {

  positives: string[];
  negatives: string[];
  constructor() {
    this.positives = (<any> keywords).positives;
    this.negatives = (<any> keywords).negatives;
  }

  parse(feed: string) : number {
    let weight = 0;
    for (let word of this.positives) {
      if (word.length == 0) continue;
      try {
        weight += (feed.match(new RegExp(word, "g")) || []).length;

      }
      catch (err) {
        continue;
      }
    }

    for (let word of this.negatives) {
      if (word.length == 0) continue;
      try {
        weight -= (feed.match(new RegExp(word, "g")) || []).length;

      }

      catch (err) {
        continue;
      }
    }
    return weight;
  }
}
