import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Quote } from './quote';
import { QuoteService } from './quote.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuoteService]
})

 
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getQuotes();
  }
  constructor(private quoteService: QuoteService) { }
  title = ' Angular Quotes!';
  quotes = Quote[0];
  getQuotes(): void {
    this.quotes = this.quoteService.getQuotes();    
  }

  add(newtext: string, newbyline: string){
    newtext = newtext.trim();
    newbyline = newbyline.trim();
    var quote:Quote = {
       id:this.quotes.length+1,
       text: newtext,
       byline: newbyline
    };
    this.quotes.unshift(quote);
  }
}

