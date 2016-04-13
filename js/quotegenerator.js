

var HTMLquote = '<h1 id="quoteText">%data%</h1><hr>';
var HTMLauthor= '<span>%data%</span>';

var quotes = {
	"quotes" : [{
		"words" : "Java is to JavaScript what Car is to Carpet.",
		"author" : "Chris Heilmann",
		"colour" : " "


	},
	{
		"words" : "If debugging is the process of removing software bugs, then programming must be the process of putting them in. ".
		"author" : "Edsger Dijkstra",
		"colour" : " "



	},
	{
		"words" : "It's not at all important to get it right the first time. It's vitally important to get it right the last time.",
		"author" : "Andrew Hunt and David Thomas", 
		"colour" : " "



	},
	{
		"words" : "First, solve the problem. Then, write the code.",
		"author" : "John Johnson",
		"colour" : " "



	},
	{
		"words" : "Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration.",
		"author" : "Stan Kelly-Bootle", 
		"colour" : " "



	},
	{
		"words" : "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. ",
		"author" : "Rick Osborne", 
		"colour" : " "



	}
	]

};


var formattedQuote = HTMLquote.replace("%data%", quotes.quotes.words);

var formattedAuthor = HTMLAuthor.replace("%data%", quotes.quotes.author);



$(document).ready(function() {
  $('button').click(function() {
  	var randomNum = 
    var newQuote = quotes.quotes[randomNum] || function(){};
    $('#quote').html(iName);  
  });
});