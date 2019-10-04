
var targetDiv = document.getElementById("display");
var userChoiceDiv = document.getElementById("user-choice");
var consoleLogDiv = document.getElementById("console-log");
var countryDiv = document.getElementById("country");
var countries = ["Argentina", "Brazil", "Peru", "China", "USA", "Canada", "Vietnam", 
    "Japan", "Spain", "Russia", "Germany", "Colombia", "Mexico", "Ethiopia", "Egypt" ];
var randomIndex = Math.floor(Math.random()*countries.length);
var country = countries[randomIndex];
countryDiv.textContent = country;
//var length = country.length;
var display = [country.length];
// var win = length;
var letters = country.split('');
var attempts = letters.length + 2;
var output = "";
var storedLetters =[];
// var userLetter= "";
document.onkeyup = function(event)
{   
    var userChoice = event.key;
    userChoiceDiv.textContent = userChoice;
    storedLetters.push(userChoice);
    //console.log(storedLetters);
    attempts--;
    for (var i=0; i<country.length; i++)
    {
        if (userChoice.toLowerCase()===letters[i].toLowerCase())
        {
            consoleLogDiv.textContent = userChoice.toUpperCase();
            updateDisplay(userChoice, i);
        }         
    }
    console.log(display.find(ch => ch === "_"));
    if (display.find(ch => ch === "_") === undefined)  
    {
        consoleLogDiv.textContent = "you win";
    }
    if (attempts<1)
    {
        consoleLogDiv.textContent = "you lose";

    }
   
}
var updateDisplay = function(userChoice, index)
{    
    display[index] = userChoice;
    targetDiv.textContent = display.join(" ");    
}
var setupBlanks = function()
{
    for (let i=0; i<country.length; i++)
    {
        display[i] = "_";
        targetDiv.textContent = display.join(" ");    
    }
}


setupBlanks();
// display = [""];
// console.log(display.find(ch => ch === "_"));