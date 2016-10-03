window.addEventListener("load", cargaPagina);
var contador = 1;
var texto = document.getElementById("publicacion");
var btnPublicar = document.getElementById("publicar");

function cargaPagina() {
    btnPublicar.addEventListener("click", agregarPublicacion);
}

function agregarPublicacion(evento) {
    evento.preventDefault();
    var publicaciones = document.getElementById("publicaciones");


    var divHorizontal = document.createElement("div");
    divHorizontal.classList.add("card", "horizontal");

    var divTarjeta = document.createElement("div");
    divTarjeta.classList.add("card-stacked");

    var divContenido = document.createElement("div");
    divContenido.classList.add("card-content");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "check" + contador;
    checkbox.addEventListener("click", tacharTexto);

    var label = document.createElement("label");
    label.setAttribute("for", "check" + contador);
    label.textContent = texto.value;

    var icono = document.createElement("i");
    icono.classList.add("material-icons", "right");
    icono.addEventListener("click", eliminarPublicacion);

    divContenido.appendChild(checkbox);
    divContenido.appendChild(label);
    divContenido.appendChild(icono);

    divTarjeta.appendChild(divContenido);

    divHorizontal.appendChild(divTarjeta);

    publicaciones.appendChild(divHorizontal);

    texto.value = "";

    contador++;

}

function tacharTexto() {
    this.nextSibling.classList.toggle("tachar");
}

function eliminarPublicacion() {
    var divHorizontal = this.parentElement.parentElement.parentElement;

    divHorizontal.parentElement.removeChild(divHorizontal);
}