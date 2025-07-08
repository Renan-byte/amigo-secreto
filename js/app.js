let amigos = [];


function adicionar(){
let amigo = document.getElementById('nome-amigo');
let listaAmigos= document.getElementById('lista-amigos');
amigos.push(amigo.value);
if (listaAmigos.textContent == ''){
    listaAmigos.textContent = amigo.value;

} else {
    listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo.value;
}

}
function sortear (){
    embaralha(amigos);
    let sortear = document.getElementById('lista-sorteio');
    for (let i = 0;i < amigos.length; i++){
        if(i == amigos.length -1){
        sortear.innerHTML = sortear.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>'
        }else{
     sortear.innerHTML = sortear.innerHTML + amigos[i] + '-->' + amigos[i+1] + '<br>'   }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar (){
    amigos = []
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML ='';


}