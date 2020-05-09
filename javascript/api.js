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
            console.log(topics)
        }
    }

    function dislayGifs () {
        let music = $(this).attr('data-name');
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + music + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(queryURL)
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
            for (let i=o; i<results.length; i++){
                let gifDiv = $('<div>');
                gifDiv.addClass('gifDiv');
                let gifRating = $('<p>').text("Rating: " + results[i].rating);
                gifDiv.append(gifRating);
                let gifImage = $('<img>')
            }   
        })
    
    
    
    
    }

















});
















