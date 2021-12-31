import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.scss'],
})
export class FlashCardsComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('assets/data/hiragana.json').subscribe((data) => {
      console.log(data);
    });
  }
}
