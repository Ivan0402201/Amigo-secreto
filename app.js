//Array para guardar amigos
let amigos = [];





//Funcion para boton añadir
function agregarAmigo(){
    // Declaramos una variable y le asignamos el input valor
    let  agregar = document.getElementById('amigo').value;
        // Si el input esta vacio mostrar alert 
    if (agregar == ''){
        alert('Debes ingresar un nombre')
    }else{
        // Si ingresa valor agrgar al array el valor ingresado
        amigos.push(agregar);
        console.log(amigos)
        //Llamamos la funcion limpiar input y lista amigos
        limpiarInput();
        listaAmigos();
    }
}




// Funcion para limpiar el input
function limpiarInput() {
    document.querySelector('#amigo').value = '';
}





// Funcion para mostrar lista amigos
function listaAmigos (){
    // Se declara lista que se asigna las  ul
    let lista = document.getElementById('listaAmigos');
        // Se asigna "" para no duplicar nada
    lista.innerHTML = "";
    // For para recorrer el array, empezara en 0 i, parara cuando i sea menor a el tamaño del array y sera en 1 en 1 
    for (let i=0; i<amigos.length; i++) {
            // Se crea una variable que se le creara un elemento li
        let listaAmigos = document.createElement('li');
            // A esa variable se le asignara el valor del tama;o del array
        listaAmigos.innerHTML = amigos[i]
            // Agrega el <li> a la lista en el HTML
        lista.appendChild(listaAmigos);         
    }
}




// Funcion para boton sortear amigo
function sortearAmigo() {
    // Si el array tien un tamaño de 0 (vacio) es igual a 0 mostrara un alert
    if (amigos.length === 0){
        alert('Agrega amigos para continuar');
    }else{
            // Se declara sorteo que sera un numero ramdon por un tama;o arrar
        let sorteo = Math.floor(Math.random() * amigos.length);
            // Se declara una variable que tendra ul resultado
        let mostrarAmigos = document.getElementById('resultado');
            // Se mostrara en la ul el amigo secreto con array[sorteo] 
        mostrarAmigos.innerHTML = (`Tu amigo secreto es: ${amigos[sorteo]}`);   
            // Llamos la funcion para limpiar listas
        limpiarLista();
    }
}




// Funcion para limpiar listas
function limpiarLista() {
    // Declaramos variable para asiganar el valor de la lista
    let listaLimpia = document.getElementById('listaAmigos');
    // La lista no mostratara nada 
    listaLimpia.innerHTML = "";
}