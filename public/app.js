// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < 5; i++) {
    // Display the apropos information on the page
    $("#articles").append("<p>" + data[i].title + "<br />" + data[i].link +"<button data-edit='" + data[i]._id + "'>" + "<button data-delete='" + data[i]._id + "'>" + "</p>");
  }
});
// start here -
// "<button data-id='" + data[i]._id + "'>"
