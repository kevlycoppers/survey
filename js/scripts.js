$(document).ready(function() {
  $("#survey form").submit(function(event) {
    var nameInput = $("#name").val();
    var foodTypeInput = $("#food-type").val();
    var beverageTypeInput = $("#beverage-type").val();
    var favoriteArtistInput = $("#favorite-artist").val();
    var dobInput = $("#born").val();

    $(".name").text(nameInput);
    $(".food-type").text(foodTypeInput);
    $(".beverage-type").text(beverageTypeInput);
    $(".favorite-artist").text(favoriteArtistInput);
    $(".dob").text(dobInput);

    $("#paragraph").show();

    event.preventDefault();

  });
});
