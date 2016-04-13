

var HTMLquote = '<h1 id="quoteText"><i class="fa fa-quote-left" aria-hidden="true"></i>%data% <i class="fa fa-quote-right" aria-hidden="true"></i></h1><hr>';
var HTMLauthor= '<span>%data%</span>';
var HTMLpageColour= '<body style="background-color:%data%">'

var quotes = {
	"quotes" : [{
		"words" : "Java is to JavaScript what Car is to Carpet.",
		"author" : "Chris Heilmann",
		"colour" : "colour1" 


	},
	{
		"words" : "If debugging is the process of removing software bugs, then programming must be the process of putting them in. ",
		"author" : "Edsger Dijkstra",
		"colour" : "colour2"



	},
	{
		"words" : "It's not at all important to get it right the first time. It's vitally important to get it right the last time.",
		"author" : "Andrew Hunt and David Thomas", 
		"colour" : "colour3"



	},
	{
		"words" : "First, solve the problem. Then, write the code.",
		"author" : "John Johnson",
		"colour" : "colour4"



	},
	{
		"words" : "Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration.",
		"author" : "Stan Kelly-Bootle", 
		"colour" : "colour5"



	},
	{
		"words" : "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. ",
		"author" : "Rick Osborne", 
		"colour" : "colour5" 



	}
	]

};


var formattedQuote = HTMLquote.replace("%data%", quotes.quotes.words);

var formattedAuthor = HTMLauthor.replace("%data%", quotes.quotes.author);
var formattedBGColour =HTMLpageColour.replace("%data%", quotes.quotes.colour);

$("#quote").prepend(formattedQuote);
$("#author").prepend(formattedAuthor);
$("body").prepend(formattedBGColour);


	var randomNum



$(document).ready(function() {
	getRandomNumber(0, quotes.quotes.length - 1)
	changeQuote ()

  $('button').click(function() {
		getRandomNumber(0, quotes.quotes.length -1)
    changeQuote ()
 
  });
});

var newBGColour 

function getRandomNumber(min, max) {
	$('body').removeClass(newBGColour);
	$('button').removeClass(newBGColour);
	randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(randomNum)
  return randomNum
}

function changeQuote (){
	newBGColour = quotes.quotes[randomNum].colour || function(){};
	$('body').addClass(newBGColour);
	$('button').addClass(newBGColour);
	var newQuote = quotes.quotes[randomNum].words || function(){};
	$('#quote').html(newQuote); 

	 var newAuthor = quotes.quotes[randomNum].author || function(){};
	$('#author').html(newAuthor); 

	 

}