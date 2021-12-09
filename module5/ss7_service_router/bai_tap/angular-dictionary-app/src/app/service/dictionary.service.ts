import {Injectable} from '@angular/core';
import {Word} from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  words: Word[] = [
    {
      word: 'blue',
      mean: 'màu xanh'
    },
    {
      word: 'computer',
      mean: 'máy tính'
    },
    {
      word: 'class',
      mean: 'lớp học'
    },
    {
      word: 'paper',
      mean: 'giấy'
    },
    {
      word: 'home',
      mean: 'nhà'
    }
  ];

  constructor() {
  }

  findAll() {
    return this.words;
  }

  translate(word: string | null): string {
    if (!word) {
      return '';
    }
    const translateWord = this.words.find(item => item.word === word);
    if (translateWord) {
      return translateWord.mean;
    }
    return ' Word Not Found!!';
  }
}
