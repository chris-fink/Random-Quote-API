//New API try
const settings = {
	"async": true,
	"crossDomain": true,
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "908b164f23mshb216b4faf70a4d5p157706jsn815bc63f9c9d",
		"X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com"
	}
};
const url = "https://famous-quotes4.p.rapidapi.com/random?category=all&count=1&rapidapi-key=908b164f23mshb216b4faf70a4d5p157706jsn815bc63f9c9d"

let getQuote = () => {
	fetch(url, settings)
	  .then(response =>response.json())
	  .then((response) => {
		quote = response[0]['text'];
		author = response[0]['author'];
	  })
	  .then(log => {
		console.log(quote);
		console.log(author);
	  })
	  document.getElementById("text").innerHTML = quote;
	  document.getElementById("author").innerHTML = author;
  };

  let btn = document.getElementById("btn");

//DOM to load quote with button click
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
