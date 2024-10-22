// const form = document.querySelector('form');
// form.addEventListener(`submit`, async (event)=> {
  // event.preventDefault();
  const getEvents = async () =>{
  // const input = document.querySelector(`input`);
  // partyName = input.value;
  
  

  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ft/events`);
  const eventData = await response.json()
  // console.log(eventData);

    eventData.data.map((party)=>{
    const li = document.createElement(`li`)
    li.innerHTML = `
    <h3>${party.name}</h3>
    <p>${party.id}</p>
    <p>${party.description}</p>
    `;
    
    
    const ol = document.querySelector(`ol`);
    ol.append(li)
  }) 
  
}

getEvents();
  