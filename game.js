var requestURL = "https://raw.githubusercontent.com/gabiusp/women-game-jam/script/stories.json";
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = "json";

request.send();

let stories = NaN
request.onload =  function() {
    stories = request.response;
}


function makePopUp(map, text, isPuzzle) {
    var popUp = document.createElement('div');
    popUp.setAttribute("id", "pop-up");

    var container = document.createElement('div');
    container.setAttribute("class", "container");
    container.style.backgroundImage = "url('pausa.png')";

    var h1 = document.createElement('h1');
    h1.innerHTML = text
    container.appendChild(h1);

    if (isPuzzle) {
        var answerInput = document.createElement('input');
        answerInput.setAttribute("id", "puzzleAnswer");
        answerInput.setAttribute("type", "text");
        answerInput.setAttribute("placeholder", "resposta");

        var submitAnswer = document.createElement('button');
        submitAnswer.onclick = function() {
            checkPuzzleAnswer(map);
        };
        submitAnswer.innerHTML = "★";
    
        container.appendChild(answerInput);
        container.appendChild(submitAnswer);
    }

    var closeButton = document.createElement('button');
    closeButton.onclick = function() {
        var popUp = document.getElementById('pop-up');
        popUp.remove();
    }
    closeButton.innerHTML = 'X';

    container.appendChild(closeButton);

    popUp.appendChild(container);
    document.body.appendChild(popUp);
}

function onPuzzleOrbClick(map) {
    var puzzleText = stories[map]["puzzle"]["text"];
    makePopUp(map, puzzleText, true);
}

function checkPuzzleAnswer(map) {
    console.log(stories[map]["puzzle"]);
    var puzzleExpectedAnswer = stories[map]["puzzle"]["solution"];
    var puzzleAnswer = document.getElementById("puzzleAnswer");

    console.log(puzzleExpectedAnswer);
    console.log(puzzleAnswer.value);

    if (puzzleAnswer.value == puzzleExpectedAnswer) {
        alert("certo mizeravi");
    } else {
        alert("erro");
    }
    
}