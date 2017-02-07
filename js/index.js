function updateTwitterLink(quote, author) {
  $("#twitter-link").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent('"' + quote + '" -' + author));
}

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "y7zVXhDu30mshkawllC8uoBq4NVUp1r0BAMjsnhk5mwZwWgIW4",
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=',
    success: function (data) {
      var json = JSON.parse(data);
      var quote = json.quote;
      var author = json.author;
      $("#quote-text").text(quote);
      $("#author-text").text(author);
      updateTwitterLink(quote, author);
    }
  });
}
$(document).ready(function () {
  getQuote();
  $("#get-quote").on("click", getQuote);
});