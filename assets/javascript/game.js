
var targetDiv = document.getElementById("display");
var userChoiceDiv = document.getElementById("user-choice");
var resultDiv = document.getElementById("result");
var countryDiv = document.getElementById("country");

var countries = ["Argentina", "Brazil", "Peru", "China", "USA", "Canada", "Vietnam", 
    "Japan", "Spain", "Russia", "Germany", "Colombia", "Mexico", "Ethiopia", "Egypt","India",
    "Philippines", "Italy", "Singapur" ];
var randomIndex = Math.floor(Math.random()*countries.length);
var country = countries[randomIndex];
var display = [country.length];
var letters = country.split('');
var attempts = letters.length + 2;
var output = "";

document.onkeyup = function(event)
{   
    var userChoice = event.key;
    userChoiceDiv.textContent = userChoice;
    attempts--;
    for (var i=0; i<country.length; i++)
    {
        if (userChoice.toLowerCase()===letters[i].toLowerCase())
        {
            resultDiv.textContent = userChoice.toUpperCase();
            updateDisplay(userChoice, i);
        } 
       
    }
    console.log(display.find(ch => ch === "_"));
    if (display.find(ch => ch === "_") === undefined)  
    {
        resultDiv.textContent = "you win";
    }

    if (attempts<1)
    {
        resultDiv.textContent = "you lose";
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