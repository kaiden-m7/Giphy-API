$(document).ready(function () { 
   

    let topics = ["Johny Cash", "ACDC", 'The Doors', 'Led Zepplin', 'Beastie Boys', 'Frank Sinatra', 'Davis Bowie', 'Hank Williams', 'Queen', 'Daft Punk', 'Bruse Springsteen', 'Wham!']
    //array of music i have chosen that will be buttons to load gifs

    function displayGifsButton (){ //adds buttons from array to html page 
        $("#gifButtonsView").empty();
        for (let i = 0; i < topics.length; i++) {
            let gifButton = $('<button>');
            gifButton.addClass('music');
            gifButton.addClass('btn bt-primary');
            gifButton.attr('data-name', topics[i]);
            gifButton.text(topics[i]);
            $('#gifButtonsView').append(gifButton);
        }
    }
    console.log(topics);

    displayGifsButton();

    let music = $(this).attr('data-name');
    let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + music + "&api_key=dc6zaTOxFJmzC&limit=10";
    
    function displayGifs () {

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function (response){
            $('#gifsview').empty();
            let results = response.data;
            if (results === "") {
                alert('I guess they dont like that kind of music?')
            }
            for (let i=0; i<results.length; i++){
                let gifDiv = $('<div>');
                gifDiv.addClass('gifDiv');
                let gifRating = $('<p>').text("Rating: " + results[i].rating);
                gifDiv.append(gifRating);
                let gifImage = $('<img>');
                gifImage.attr("src", results[i].images.fixed_heigth_small_still.queryURL);
                gifImage.attr("data-still", results[i].images.fixed_heigth_small_still.queryURL);
                gifImage.attr("data-animate", results[i].images.fixed_heigth_small.queryURL);
                gifImage.attr("data-state", "still");
                gifImage.addClass("image");
                gifDiv.append(gifImage);
                $('#gifsView').prepend(gifDiv);
            }   
        });
    }

    console.log(queryURL);

    $(document).on('click', '.music', displayGifs);
    $(document).on('click', '.image', function(){
        let state = $(this).attr('data-state');
        if (state === 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        }
    });

















});
















