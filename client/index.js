console.log('hello');

// Setup
const pageOfResults = document.getElementById('btn-10rs');
const singleResults = document.getElementById('btn-singleRes');
const animeResults = document.querySelector('ul');
console.log(animeResults);

//Binding event listeners
pageOfResults.addEventListener('submit', search()); //refactor
singleResults.addEventListener('submit', luckySearch());


// linking to search button
function search() {
      fetch(`http://localhost:3000/${}`) // add in the word to pass in
      .then(resp => resp.text())
      .then(quote => document.getElementById('text').textContent = quote)
      .catch(console.warn);
  }
  
  search();

  // linking to single result button
  function luckySearch() {
      fetch(`http://localhost:3000/${}`) // add in the word to pass in
      .then(resp => resp.text())
      .then(quote => document.getElementById('text').textContent = quote)
      .catch(console.warn);
  }
  
  luckySearch();

  // appending search result

  function appendResults(data) {
    animeResults.innerHTML = "";
    data.forEach(appendResult); //I may be missing something here
  }


  // 
  function appendResult(data){
    const newLi = document.createElement('li');
    newLi.textContent = `Name: ${animeShow.name}`;
    animeResults.append(newLi);
};

// do we need a delete method to replace the results?
// function deleteResults(){
//   fetch('http://localhost:3000/:search',{method : 'DELETE'})
//   .then(console.log("search results deleted"))
//   .catch(console.warn);
// }