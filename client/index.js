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
        console.log(result)
        // Opens the first result in a new tab
        window.open(result.url);
      })
      .catch(console.warn);
  } 
}); //refactor 

// looping through
// number of results = data.length>=10 loop 10 times, data.length< 10, loop data.length

//creating a new list and adding name of show
function appendResult(data){   

  // Remove any items that are already shown in the dom.
  const previousListItems = document.querySelectorAll('li')
  if(previousListItems.length > 0) {
    const items = Array.from(previousListItems)
    items.forEach(item => item.remove());
  }  
  
  
  // deciding how many times to loop for up to 10 test results
  let timesToRun;             
  (data.length>=10) ? timesToRun = 10 : timesToRun = data.length; 

  for(let i=0; i<timesToRun; i++) {  
    const newLi = document.createElement('li');
    newLi.textContent = `Name: ${data[i].name}`;
    animeResults.append(newLi);

    // creating sublist and appending that to the original list
    const newSublist = document.createElement('ul');        
    newLi.append(newSublist);
    
    //creating new sublist link for the URL item 
    const newSublistElement = document.createElement('a');    
    newSublistElement.href = data[i].url;
    newSublistElement.innerText = data[i].url;
    newSublist.append(newSublistElement);
  }
};