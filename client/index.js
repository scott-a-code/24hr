console.log('hello');

// Setup
const pageOfResults = document.getElementById('btn-10rs');
const singleResults = document.getElementById('btn-singleRes');
const animeResults = document.querySelector('ul');

//Binding event listeners
pageOfResults.addEventListener('submit', search());
singleResults.addEventListener('submit', luckySearch());



// linking to search button
function search() {
      fetch('http://localhost:3000/:search')
      .then(resp => resp.text())
      .then(quote => document.getElementById('text').innerHTML = quote)
      .catch(console.warn);
  }
  
  search();

  // linking to single result button
  function luckySearch() {
      fetch('http://localhost:3000/lucky/:search')
      .then(resp => resp.text())
      .then(quote => document.getElementById('text').innerHTML = quote)
      .catch(console.warn);
  }
  
  luckySearch();

  // appending search result

  function appendResults(data) {
    animeResults.innerHTML = "";
    data.forEach(appendResult);
  }

  function appendResult(data){
    const newLi = document.createElement('li');
    newLi.textContent = 
    animeResults.append(newLi);
};