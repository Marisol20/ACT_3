$(function(){
    //Cached selectors
    var jokeButton = $('#joke-button');
    var jokeResetButton = $('#joke-reset-button');
    var jokesList = $('#jokes-list');
    var reaction = $('#reaction');
    var jokeLoader = $('#joke-loader');

    var list = document.getElementById('jokes-list');
    var reactionJoke = document.getElementById('reaction');
    
    jokeLoader.hide();
    jokeResetButton.hide();
  
    //Events
    jokeButton.on('click', function(e){
      //Do the magic here
        for (var i = 0; i < 5; i++) {
            var joke = document.createElement('div');
            joke.setAttribute('class','joke')
            joke.innerHTML = "<div>" +  JOKE_SERVICE.get() +"</div><img id='joke-image' src='" + JOKE_SERVICE.answer() +"'/>";
            
            list.appendChild(joke)
        }

        var react = document.createElement('div');


        jokeResetButton.show();
        jokeButton.attr("disabled", true);
    });
  
    jokeResetButton.on('click', function(){
        jokeButton.attr("disabled", false);
        jokeResetButton.hide();

        while (list.hasChildNodes()) {   
            list.removeChild(list.firstChild);
        }

        reactionJoke.removeChild(reactionJoke.firstChild);

    });
    
  })