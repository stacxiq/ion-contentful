import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: 'w6xl4gywp978',
    accessToken: 'cf8K5QUSZYAsW1nznnCKHo_0YCzEDAaXWLiHJ53d0NA'
  });
  constructor() { }

  async getNews(query?: object): Promise<Entry<any>[]> {
    const res = await this.client.getEntries(Object.assign({
      content_type: 'news'
    }, query));
    return res.items;
  }
}
