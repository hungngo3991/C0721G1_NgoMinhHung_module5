import {Component, OnDestroy, OnInit} from '@angular/core';
import {Word} from '../../model/word';
import {Subscription} from 'rxjs';
import {DictionaryService} from '../../service/dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit, OnDestroy {

  eWord: Word;
  sub: Subscription;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      const mean = this.dictionaryService.translate(word);
      this.eWord = {word, mean};
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
