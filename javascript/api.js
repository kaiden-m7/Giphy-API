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
    addNewButton();
    removeLastButton();

    
    
    function displayGifs () { //when button clicked gifs appear on screen
        let music = $(this).attr('data-name'); //giving array value to buttons
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + music + "&api_key=C3SeGI1CQWeWOgv1h2HvFaK5ZX4riIOv&limit=10"; //url is reading undifined, need to come back and fix that
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function (response){
            console.log(response);
            $('#gifsview').empty();
            let results = response.data;
            if (results === "") {
                alert('I guess they dont like that kind of music?')
            }
            for (let i=0; i < results.length; i++){

                let gifDiv = $('<div>');
                gifDiv.addClass('gifDiv');
                let gifRating = $('<p>').text("Rating: " + results[i].rating);
                gifDiv.append(gifRating);
                let gifImage = $('<img>');
                gifImage.attr("src", results[i].images.fixed_heigth_small_still.url);
                gifImage.attr("data-still", results[i].images.fixed_heigth_small_still.url);
                gifImage.attr("data-animate", results[i].images.fixed_heigth_small.url);
                gifImage.attr("data-state", "still");
                gifImage.addClass("image");
                gifDiv.append(gifImage);
                $('#gifsView').prepend(gifDiv);
            }   
        });
    }

    $(document).on('click', '.music', displayGifs);
    $(document).on('click', '.image', function(){
        let state = $(this).attr('data-state');
        if (state === 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    });

    function addNewButton () {
        $('#addGif').on('click', function (){
            let music = $('#topicInput').val().trim();
            if (music === "") {
                return false;
            }
            topics.push(music);

            displayGifsButton();
            return false;
        });
    }

    function removeLastButton () {
        $('#removeGif').on('click', function (){
            topics.pop(music);
            displayGifsButton();
            return false;
        });
    }


});
















