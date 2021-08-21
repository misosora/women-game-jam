var requestURL = "https://raw.githubusercontent.com/gabiusp/women-game-jam/script/stories.json";
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = "json";

request.send();

let stories = NaN
request.onload =  function() {
    stories = request.response;
    alert("bAAAAAAAaa");
    populateStories(stories);
}

function populateStories(stories) {
    var h1 = document.getElementById("banana");
    h1.innerHTML = stories[0]["stories"][0]["title"];
}

function buttonClick(buttonName) {
    var index = parseInt(buttonName)
    alert(stories[0]["stories"][buttonName]["title"]);
}

