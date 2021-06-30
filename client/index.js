// Setup
const pageOfResults = document.querySelector('form');
// const singleResults = document.getElementById('btn-singleRes');
const animeResults = document.querySelector('ul');

//Binding event listeners
pageOfResults.addEventListener('submit', (event)=> {  //storing data to access properties as it returns an event obj
  event.preventDefault();    
  // storing id of the button that calls the event to decide the route of the api to call using if
  const searchQuery = document.getElementById('search-bar').value; 
  const resultType = event.submitter.id;
  if(resultType === 'btn-10rs') {
      fetch(`http://localhost:3000/${searchQuery}`)
        .then(resp => resp.json())
        .then(result => {
          appendResult(result)
        })
        .catch(console.warn);
  } else {
      fetch(`http://localhost:3000/lucky/${searchQuery}`)
      .then(resp => resp.json())
      .then(result => {
        appendResult(result)
      })
      .catch(console.warn);
  } 
}); //refactor 

// looping through
// number of results = data.lenght>=10 loop 10 times, data.length< 10, loop data.length

function appendResult(data){          //creating a new list and adding name of show
  let timesToRun;             
  (data.length>=10) ? timesToRun = 10 : timesToRun = data.length; // deciding how many times to loop for up to 10 test results

  for(let i=0; i<timesToRun; i++) {  
    const newLi = document.createElement('li');
    newLi.textContent = `Name: ${data[0].name}`;
    animeResults.append(newLi);

    const newSublist = document.createElement('ul');        // creating sublist and appending that to the original list
    newLi.append(newSublist);
    
    const newSublistElement = document.createElement('a');    //creating new sublist link for the URL item 
    newSublistElement.href = data[0].url;
    newSublistElement.innerText = data[0].url;
    newSublist.append(newSublistElement);
  }
};


// do we need a delete method to replace the results?
// function deleteResults(){
//   fetch('http://localhost:3000/:search',{method : 'DELETE'})
//   .then(console.log("search results deleted"))
//   .catch(console.warn);
// }