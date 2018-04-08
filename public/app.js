// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < 5; i++) {
    // Display the apropos information on the page
    $("#articles").append( "<div  class=border border-dark card-body>" +
    "<p>"  + data[i].title +"</p>" +
      "<p>" +
    "<a href='" + data[i].link + "'>  Click here to read more </a>"+ "<br>" +
      "<p>" +
    "<p>" + "<br />"  +"<button class=btn-default data-save='" + data[i]._id + "'> Save </button>" + "<button class=btn-danger data-delete='" + data[i]._id + "'> Delete </button>" +

    "</div>" +
    "<br>");
  }
});

// <a href="data[i].link" >data[i].link</a>
