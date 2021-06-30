// Setup
const pageOfResults = document.querySelector('form');
// const singleResults = document.getElementById('btn-singleRes');
const animeResults = document.querySelector('ul');

//Binding event listeners
pageOfResults.addEventListener('submit', (event)=> {  //storing data to access properties as it returns an event obj
  event.preventDefault();    
  const searchQuery = document.getElementById('search-bar').value;
  const resultType = event.submitter.id;
      fetch(`http://localhost:3000/${searchQuery}`)
      .then(resp => resp.text())
      .then(result => console.log(result))
      .catch(console.warn);
}); //refactor

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