import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { AccountService } from '@app/_services';
import { Observable } from 'rxjs';
import { NewsApiService } from 'src/news-api.service';

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent {
    account = this.accountService.accountValue;
    mArticles$: Observable<any> | undefined;
    mSources$: Observable<any> | undefined;
    constructor( private accountService: AccountService, private newsapi: NewsApiService) {
    }
    ngOnInit() {
        this.mArticles$ = this.newsapi.initArticles();
        this.mSources$ = this.newsapi.initSources();
      }
    
    
      // function to search for articles based on a news source (selected from UI mat-menu)
      searchArticles(source: string) {
        this.mArticles$ = this.newsapi.getArticlesByID(source);
      }
    // tslint:disable-next-line: use-life-cycle-interface
   
   
}


