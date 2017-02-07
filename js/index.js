// this will be sent to the twitter link
// TODO: modify twitter link to make it include this data
function updateTwitterLink(quote, author) {
  $("#twitter-link").attr("href", "http://www.google.com");
  $("#twitter-link").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent('"' + quote + '" -' + author));
}

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "y7zVXhDu30mshkawllC8uoBq4NVUp1r0BAMjsnhk5mwZwWgIW4"
      , Accept: "application/json"
      , "Content-Type": "application/x-www-form-urlencoded"
    }
    , url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat='
    , success: function (data) {
      var json = JSON.parse(data);
      var quote = json.quote;
      var author = json.author;
      $("#quote-text").text(quote);
      $("#author-text").text(author);
      updateTwitterLink(quote, author);
    }
  });
  // update twitter link
}
// js function that gets the quote text
// the squery thing will modify content and call js function
$(document).ready(function () {
  getQuote();
  $("#get-quote").on("click", getQuote);
  // $("twitter-button").on("click", getQuote());
});