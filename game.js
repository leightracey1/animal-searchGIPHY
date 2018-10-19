

var animalsArray = ["dog", "cat", "mouse"]

function animalDisplay () { 

    $("#put-animals").empty()

// var animalChoice = "dog";

var animalChoice = $(this).attr("data-name");
"https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ animalChoice + "&limit=10&api_key=xYidXrSI054V8sLN8gcRiDb0lPtsQUcK";
    $.ajax({
      url: queryURL,
      method: "GET"

    }).then(function(response) {
      console.log(response);
    var results = response.data;

    for (var i = 0; i < results.length; i++) {

      var animalsHere = $("<div>");

        var rating = response.data[i].rating; 

        var ptagz = $("<p>").text("Rating: " + rating);

        animalsHere.append(ptagz); 

        var imageTag = $("<img>");

        var imgURL = response.data[i].images.original.url;

        var imgStill = response.data[i].images.original_still.url;

        var imageSrc = imageTag.attr("src", imgStill);
                var imageStill = imageTag.attr("data-still", imgStill);
                var imageAnimate = imageTag.attr("data-animate", imgURL);
                var imageState = imageTag.attr("data-state", "still");

        animalsHere.append(imageSrc, imageStill, imageAnimate, imageState);

imageTag.addClass("gif");

animalsHere.css("float", "Left");
animalsHere.css("margin", "10px");
$(".gif").css("height", "150px")
$(".gif").css("width", "150px")

$("#put-animals").prepend(animalsHere)


    }

    });
}

function renderButtons () { 
$("#buttons-view").empty(); 

 for (var i = 0; i < animalsArray.length; i++) {

// Then dynamicaly generates buttons for each movie in the array
// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
var a = $("<button>");
// Adds a class of movie to our button
a.addClass("animal");
// Added a data-attribute
a.attr("data-name", animalsArray[i]);
// Provided the initial button text
a.text(animalsArray[i]);
// Added the button to the buttons-view div
$("#buttons-view").append(a);
}
}

$("#add-animal").on("click", function(event){ 
event.preventDefault(); 

var animalChoice = $("#animal-input").val(). trim() 

animalsArray.push(animalChoice)

renderButtons()

}) 

$(document).on("click", ".animal", animalDisplay); 

$(document).on("click", ".gif", function(){

        var currentState = $(this).attr("data-state");
    
        if(currentState == "animate"){
        $(this).attr("src", $(this).attr("data-still"));
           $(this).attr("data-state", "still");
        }    
        else{
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
            
        }        
    });

renderButtons()
