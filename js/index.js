fetch('db.json')
  .then(response => response.json()) 
  .then(data => {
    console.log(data);  
    displayMenu(data.cars);  
  })
  .catch(error => console.error('Error fetching the JSON:', error));


  function displayMenu (cars) {
    const carMenu = document.getElementById('cars-menu');
    carMenu.innerHTML = " "

    cars.forEach(car => {
      let img = document.createElement('img')
      img.src = car.logo
      img.alt = car.car
      img.addEventListener("click", () => handleClick(car))
      carMenu.appendChild(img)
    });
  }
