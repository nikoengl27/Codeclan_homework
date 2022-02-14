document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

    // const starSelector = document.querySelector('#radio-button');
    // const radioButtons = document.querySelectorAll('input[name="star"]');
    // starSelector.addEventListener('click', () => {
    //     
    // });

  })
  
  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
    // let starArray = [event.target.one, event.target.two, event.target.three, event.target.four, event.target.five]
    // let selectedStar ;
    //     for (const radioButton of starArray) {
    //         if (radioButton.checked) {
    //             selectedStar = radioButton.value;
    //             break
    //         }
    //     }
    const carListItem = createCarListItem(event.target);
    const carList = document.querySelector('#car-list');
    carList.appendChild(carListItem);
  
    event.target.reset();
  }
  
  const createCarListItem = function (form) {
    const carListItem = document.createElement('li');
    carListItem.classList.add('car-list-item');
  
    const make = document.createElement('h2');
    make.textContent = form.make.value;
    carListItem.appendChild(make);
  
    const model = document.createElement('h3');
    model.textContent = form.model.value;
    carListItem.appendChild(model);

    const year = document.createElement('h3');
    year.textContent = form.year.value;
    carListItem.appendChild(year);
  
    const colour = document.createElement('p');
    colour.textContent = form.colour.value;
    carListItem.appendChild(colour);

    return carListItem;
}
  
  const handleDeleteAllClick = function (event) {
    const carList = document.querySelector('#car-list');
    carList.innerHTML = '';
  }