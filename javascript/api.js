$(document).reday(function () {
    let topics = ['Johny Cash', 'ACDC', 'The Doors', 'Led Zepplin', 'Beastie Boys', 'Frank Sinatra', 'Davis Bowie', 'Hank Williams', 'Queen', 'Daft Punk', 'Bruse Springsteen', 'Wham!']


    function displayGifsButton (){
        $("#gifButtonsView").empty();
        for (var i = 0; i < topics.length; i++) {
            let gifButton = $('<button>');
            gifButton.addClass('bands');
            gifButton.addClass('btn bt-primary');
            gifButton.attr('data-name', topics[i]);
            gifButton.text(topics[1]);
            $('#gifButtonsView').append(gifButton);
        }

    }





















})










