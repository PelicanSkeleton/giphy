var topics = ["guitar", "midi", "the simpsons"];

$("#buttons-view").on("click", function () {



    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=lFyc435XxCo3b1qWzTBW8rFFBIpm1m4A";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var gifDiv = $("<div class='gif'");
        console.log(response);
        var imageUrl = response.data.image_original_url;
        console.log(imageUrl);
        var gifImage = $("<img>");
        gifImage.attr("src", imageUrl);
        $("#gif-view").prepend(gifDiv);


    });

});

function renderButtons() {
    $("#buttons-view").empty();

    for (i = 0; i < topics.length; i++) {
        var a = $("<button>");

        a.addClass("topics-button");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
};

$("#add-gif").on("click", function (event) {
    event.preventDefault();
    var topic = $("#gif-input").val().trim();
    topics.push(topic);
    console.log(topics);
    renderButtons();
})


renderButtons();


