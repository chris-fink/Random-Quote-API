
//New API try
let text = document.getElementById("text");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://famous-quotes4.p.rapidapi.com/random?category=all&count=1&rapidapi-key=908b164f23mshb216b4faf70a4d5p157706jsn815bc63f9c9d",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "908b164f23mshb216b4faf70a4d5p157706jsn815bc63f9c9d",
		"X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com"
	}
};


let getQuote = () => {
  fetch()
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};


//DOM to load quote with button click
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
