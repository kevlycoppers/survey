$(document).ready(function() {
  $("#survey form").submit(function(event) {
    var nameInput = $("#name").val();
    var foodTypeInput = $("#food-type").val();
    var beverageTypeInput = $("#beverage-type").val();
    var favoriteArtistInput = $("#favorite-artist").val();
    var dobInput = $("#born").val();
    var colorInput = $("#color").val();

    $(".name").text(nameInput);
    $(".food-type").text(foodTypeInput);
    $(".beverage-type").text(beverageTypeInput);
    $(".favorite-artist").text(favoriteArtistInput);
    $(".dob").text(dobInput);
    $(".color").text(colorInput);

    $("#paragraph").show();

    event.preventDefault();

  });
});
