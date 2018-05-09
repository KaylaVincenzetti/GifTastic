var carMakes = ["subaru", "honda", "ford", "dodge", "mazda", "chevrolet", "lexus", "audi"];
    for (var i = 0; i < carMakes.length; i++) {
        var button = $('<button class="car-btn" data-attribute="'+carMakes[i]+'">' + carMakes[i] + '</button>')
        $('#buttonsDiv').append(button);
    }

    $("button").on("click", function() {
        var car = $(this).attr("data-attribute");
        console.log("button clicked. car=",car);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        car + "&api_key=cg0paXaXQKvFVxfoMlKSFfWdnoCPkd3k&limit=10";
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
          })

          .then(function(response) {
            console.log(queryURL);
  
            console.log(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var carDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var carImage = $("<img>");
                carImage.attr("src", results[i].images.fixed_height.url);

                carDiv.append(p);
                carDiv.append(carImage);

                $("#gifs-appear-here").prepend(carDiv);
          }
          });
    });