function setSource(sourcesite)
{
  var xhttp = new XMLHttpRequest;
  var baseUrl = "http://newsapi.org/v2/top-headlines?";
  var source = "sources=" + sourcesite;
  var apiKey = "&apiKey=c23255fc1cf845f4b7b6ecc796c2e6d8";

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var articles = response.articles;

        var output = ' ';
        var urlString;
        for(var x = 0; x < articles.length; x++){
          urlString = articles[x].url;
          output+= '<li><a href =' + urlString + ">" +articles[x].title + '</a></li>';
        }
        document.getElementById("news").innerHTML = output;
      }
  };
  var url = baseUrl + source + apiKey;
  xhttp.open("GET", url, true);
  xhttp.send();

}

function setKeyword()
{
  var xhttp = new XMLHttpRequest;
  var baseUrl = "https://newsapi.org/v2/everything?"
  var keyword = document.getElementById("inputBar").value;
  var apiKey = "&apiKey=c23255fc1cf845f4b7b6ecc796c2e6d8";

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var articles = response.articles;
        console.log(articles.length);

        var output = ' ';
        var urlString;
        for(var x = 0; x < articles.length; x++){
          urlString = articles[x].url;
          output+= '<li><a href =' + urlString + ">" +articles[x].title + '</a></li>';
        }
        document.getElementById("news").innerHTML = output;
      }
  };
  var url = baseUrl + "q=" + keyword + apiKey;
  xhttp.open("GET", url, true);
  xhttp.send();

}
