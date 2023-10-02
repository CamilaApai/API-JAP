//Image Generator
  function obtenerPerro() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        dogimage.innerHTML = `<img src="${data.message}"/>`;
    }) 
    const dogimage = document.querySelector("#dogimg");  
  }
  dogButton.addEventListener("click", obtenerPerro);
  
  

  
  
  