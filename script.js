var array_img = [
    "./IMG/bash.png",
    "./IMG/electron.png",
    "./IMG/html5.png",
    "./IMG/js.png",
    "./IMG/python.png",
    "./IMG/react.png",
    "./IMG/sublime.png",
    "./IMG/swift.png"
]

var sorteado = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}



let imgs = document.getElementsByTagName("img");
function carregamento() {
    for (let e = 0; e < imgs.length; e++) {
        imgs[e].id = `img${e}`;
        imgs[e].setAttribute("onclick", "mostra(this.id)");
    }

    shuffle(sorteado);
    console.log(sorteado);

    
}
addEventListener("load", carregamento);//ao carregar

function mostra(id) {
    let nId = id.replace("img", "");
    imgs[nId].src = array_img[sorteado[nId]];
    if(imgs[nId].src == )
}

