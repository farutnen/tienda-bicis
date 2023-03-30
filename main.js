const bicicletasContenedor = document.getElementById("bicicletas-contenedor");

fetch("data.json")
    .then(response => response.json())
    .then(data => {
        data.bicicletas.forEach(function(bicicleta){
            const bicicletaDiv = document.createElement("div");
            bicicletaDiv.classList.add("bicicleta");
            
            const bicicletaImg = document.createElement("img");
            bicicletaImg.src = bicicleta.img;
            bicicletaImg.alt = bicicleta.modelo;

            const bicicletaNombre = document.createElement("h3");
            bicicletaNombre.innerHTML = bicicleta.nombre;

            const bicicletaModel = document.createElement("p");
            bicicletaModel.innerHTML = bicicleta.modelo; 
            
            const bicicletaPrice = document.createElement("p");
            bicicletaPrice.innerHTML = bicicleta.precio;

            bicicletaDiv.appendChild(bicicletaImg);
            bicicletaDiv.appendChild(bicicletaNombre);
            bicicletaDiv.appendChild(bicicletaModel);
            bicicletaDiv.appendChild(bicicletaPrice);

            bicicletasContenedor.appendChild(bicicletaDiv);
        });
    })
    .catch(error => console.error(error));
    