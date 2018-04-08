// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < 5; i++) {
    // Display the apropos information on the page
    $("#articles").append("<p class=border border-dark card-body>"  + data[i].title +  data[i].link + "<a href='" + data[i].link + "'>"+ "<br />"  +"<button class=btn-default data-save='" + data[i]._id + "'> Save </button>" + "<button class=btn-danger data-delete='" + data[i]._id + "'> Delete </button>"+ "</p>" + "<br>");
  }
});

// <a href=" data[i].link" class="card-link">Card link</a>
//
// "<a href=" data[i].link" '>"
// "<a href='" + data[i]._id + "'>"


// + "<a href='" + data[i].link + "'>"
