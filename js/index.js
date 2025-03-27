
fetch('https://spec-prix-json.vercel.app/cars')
  .then(response => response.json())
  .then(cars => { 
    console.log("Fetched Cars:", cars);
    displayMenu(cars);  

    if (cars.length > 0) {
      handleClick(cars[0]); 
    }
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

  function handleClick(car) { 
    document.getElementById('car-image').src = car.car_image;
    document.getElementById('car-name').textContent = car.car;
    document.getElementById('team').textContent = car.team;
    document.getElementById('drivers').textContent = car.drivers.join(", "); 
    document.getElementById('engine').textContent = car.engine.name + " - " + car.engine.configuration;
    document.getElementById('transmission').textContent = car.transmission;
    document.getElementById('dimensions').textContent = "Weight: " + car.dimensions.weight + ", Wheelbase: " + car.dimensions.wheelbase;
    document.getElementById('tires').textContent = car.tires;
}
