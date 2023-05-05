function crearElemento(nombreTag){
  return document.createElement(nombreTag);  
}

function crearElementoContexto(nombreTag, texto){
    var elemento = crearElemento(nombreTag);
    var elemento = document.createElement(nombreTag);
    var textoElemento = document.createTextNode(texto);
    elemento.appendChild(textoElemento); 
    return elemento; 
}

function adicionarHijo (padre, hijo){
     padre.appendChild(hijo);
}

function adicionarABody(hijo){
    adicionarHijo(document.body, hijo);
}

function crearImagen (urlImagen){
    var img = crearElemento("img");
    img.src = urlImagen;
    return img;
}