import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed-page',
  templateUrl: './newsfeed-page.component.html',
  styleUrls: ['./newsfeed-page.component.css']
})
export class NewsfeedPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   setSource(sourcesite) {
    let xhttp = new XMLHttpRequest;
    let baseUrl = "http://newsapi.org/v2/top-headlines?";
    let source = "sources=" + sourcesite;
    let apiKey = "&apiKey=c23255fc1cf845f4b7b6ecc796c2e6d8";

    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(xhttp.responseText);
        let articles = response.articles;

        let output = ' ';
        let urlString;
        for(let x = 0; x < articles.length; x++){
          urlString = articles[x].url;
          output+= '<li><a href =' + urlString + ">" +articles[x].title + '</a></li>';
        }
        document.getElementById("news").innerHTML = output;
      }
    };
    let url = baseUrl + source + apiKey;
    xhttp.open("GET", url, true);
    xhttp.send();

  }

  setKeyword() {
    let xhttp = new XMLHttpRequest;
    let baseUrl = "https://newsapi.org/v2/everything?";
    let keyword = document.getElementById("inputBar").valueOf();
    let apiKey = "&apiKey=c23255fc1cf845f4b7b6ecc796c2e6d8";

    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(xhttp.responseText);
        let articles = response.articles;
        console.log(articles.length);

        let output = ' ';
        let urlString;
        for(let x = 0; x < articles.length; x++){
          urlString = articles[x].url;
          output+= '<li><a href =' + urlString + ">" +articles[x].title + '</a></li>';
        }
        document.getElementById("news").innerHTML = output;
      }
    };
    let url = baseUrl + "q=" + keyword + " Stock" + apiKey;
    xhttp.open("GET", url, true);
    xhttp.send();

  }

}
