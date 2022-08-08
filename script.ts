try {
  const response = await fetch("https://famous-quotes4.p.rapidapi.com/random?category=all&count=2", {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '908b164f23mshb216b4faf70a4d5p157706jsn815bc63f9c9d'
    }
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
} catch (err) {
  console.error(err);
}
