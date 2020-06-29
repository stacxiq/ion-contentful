import { Component } from '@angular/core';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  news: any = [];
  constructor(private contentful: ContentfulService) {
    this.news = [];
    this.contentful.getNews().then((data: any) => {
      {
        console.log(data);
        this.news = data;
      }
    })
  }



}
