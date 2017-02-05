// this will be sent to the twitter link
// TODO: modify twitter link to make it include this data
var quote = "";
var author = "";
// js function that gets the quote text
// the squery thing will modify content and call js function
$(document).ready(function() {
  $("#get-quote").on("click", function() {
    $.ajax({
        headers: {
          "X-Mashape-Key": "y7zVXhDu30mshkawllC8uoBq4NVUp1r0BAMjsnhk5mwZwWgIW4",
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function(data) {
          var json = JSON.parse(data);
          $("#quote-text").text(json.quote);
          $("#quote-author").text(json.author);
        }
    });
    // update twitter link
  });
  
  $("twitter-button").on("click", function() {
    
  });
  
});