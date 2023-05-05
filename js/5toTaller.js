function contentAPI() {
    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";
    var url = 'http://gateway.marvel.com/v1/public/characters?ts=' + ts + "&apikey=" + apikey + "&hash=" + hash;
    var marvelTabla = document.getElementById("marvelTabla");
    fetch(url)
        .then(Response => Response.json())
        .then(json => {
            for (item of json.data.results.slice(0, 1)) {

                var fila1 = marvelTabla.insertRow();
                var fila2 = marvelTabla.insertRow();
                var fila3 = marvelTabla.insertRow();
                var fila4 = marvelTabla.insertRow();
                var fila5 = marvelTabla.insertRow();
                var fila6 = marvelTabla.insertRow();


                var nombreColumna1 = fila1.insertCell(0);
                nombreColumna1.innerHTML = item.name;

                var imagenColumna1 = fila2.insertCell(0);
                var urlImagen = item.thumbnail.path + "." + item.thumbnail.extension;
                var imagen = crearImagen(urlImagen);
                adicionarHijo(imagenColumna1, imagen);
                imagen.width = 100;

                var descripcionColumna1 = fila3.insertCell(0);
                descripcionColumna1.innerHTML = item.description;
                descripcionColumna1.setAttribute("width", "200px");


            }

            for (item of json.data.results.slice(1, 2)) {

                var nombreColumna1 = fila1.insertCell(1);
                nombreColumna1.innerHTML = item.name;

                var imagenColumna1 = fila2.insertCell(1);
                var urlImagen = item.thumbnail.path + "." + item.thumbnail.extension;
                var imagen = crearImagen(urlImagen);
                adicionarHijo(imagenColumna1, imagen);
                imagen.width = 100;

                var descripcionColumna1 = fila3.insertCell(1);
                descripcionColumna1.innerHTML = item.description;
                descripcionColumna1.setAttribute("width", "200px");
            }

            for (item of json.data.results.slice(2, 3)) {

                var nombreColumna1 = fila1.insertCell(2);
                nombreColumna1.innerHTML = item.name;

                var imagenColumna1 = fila2.insertCell(2);
                var urlImagen = item.thumbnail.path + "." + item.thumbnail.extension;
                var imagen = crearImagen(urlImagen);
                adicionarHijo(imagenColumna1, imagen);
                imagen.width = 100;

                var descripcionColumna1 = fila3.insertCell(2);
                descripcionColumna1.innerHTML = item.description;
                descripcionColumna1.setAttribute("width", "200px");
            }

            for (item of json.data.results.slice(3, 4)) {

                var nombreColumna1 = fila1.insertCell(3);
                nombreColumna1.innerHTML = item.name;

                var imagenColumna1 = fila2.insertCell(3);
                var urlImagen = item.thumbnail.path + "." + item.thumbnail.extension;
                var imagen = crearImagen(urlImagen);
                adicionarHijo(imagenColumna1, imagen);
                imagen.width = 100;

                var descripcionColumna1 = fila3.insertCell(3);
                descripcionColumna1.innerHTML = item.description;
                descripcionColumna1.setAttribute("width", "200px");
            }

            for (item of json.data.results.slice(4, 5)) {

                var nombreColumna1 = fila4.insertCell(0);
                nombreColumna1.innerHTML = item.name;

                var imagenColumna1 = fila5.insertCell(0);
                var urlImagen = item.thumbnail.path + "." + item.thumbnail.extension;
                var imagen = crearImagen(urlImagen);
                adicionarHijo(imagenColumna1, imagen);
                imagen.width = 100;

                var descripcionColumna1 = fila6.insertCell(0);
                descripcionColumna1.innerHTML = item.description;
                descripcionColumna1.setAttribute("width", "200px");
            }

            for (item of json.data.results.slice(5, 6)) {

                var nombreColumna1 = fila4.insertCell(1);
                nombreColumna1.innerHTML = item.name;

                var imagenColumna1 = fila5.insertCell(1);
                var urlImagen = item.thumbnail.path + "." + item.thumbnail.extension;
                var imagen = crearImagen(urlImagen);
                adicionarHijo(imagenColumna1, imagen);
                imagen.width = 100;

                var descripcionColumna1 = fila6.insertCell(1);
                descripcionColumna1.innerHTML = item.description;
                descripcionColumna1.setAttribute("width", "200px");
            }

            for (item of json.data.results.slice(6, 7)) {

                var nombreColumna1 = fila4.insertCell(2);
                nombreColumna1.innerHTML = item.name;

                var imagenColumna1 = fila5.insertCell(2);
                var urlImagen = item.thumbnail.path + "." + item.thumbnail.extension;
                var imagen = crearImagen(urlImagen);
                adicionarHijo(imagenColumna1, imagen);
                imagen.width = 100;

                var descripcionColumna1 = fila6.insertCell(2);
                descripcionColumna1.innerHTML = item.description;
                descripcionColumna1.setAttribute("width", "200px");
            }

            for (item of json.data.results.slice(7, 8)) {

                var nombreColumna1 = fila4.insertCell(3);
                nombreColumna1.innerHTML = item.name;

                var imagenColumna1 = fila5.insertCell(3);
                var urlImagen = item.thumbnail.path + "." + item.thumbnail.extension;
                var imagen = crearImagen(urlImagen);
                adicionarHijo(imagenColumna1, imagen);
                imagen.width = 100;

                var descripcionColumna1 = fila6.insertCell(3);
                descripcionColumna1.innerHTML = item.description;
                descripcionColumna1.setAttribute("width", "200px");

                var linkeventos_n1 = document.createElement("a");
              linkeventos_n1.innerText = "Eventos";
              linkeventos_n1.href = "" + item.events.collectionURI;
              div.appendChild(linkeventos_n1);
            }

        })
}