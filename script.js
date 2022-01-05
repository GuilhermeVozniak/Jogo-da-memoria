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

function novojogo(){
    window.location.reload();
}

let imgs = document.getElementsByTagName("img");
function carregamento() {
    for (let e = 0; e < imgs.length; e++) {
        imgs[e].id = `img${e}`;
        imgs[e].setAttribute("onclick", "mostra(this.id)");
    }

    shuffle(sorteado);
    console.log(sorteado);//mostra o array sorteado
}
addEventListener("load", carregamento);//ao carregar

function telafim(){//cria a tela de vitória
    //paragrafo
    let filho = document.createElement("p");
    filho.id = "WIN"
    filho.innerHTML = "YOU WIN!"
    document.body.appendChild(filho);
    
    //btn parágrafo
    let pai = document.getElementById("WIN");
    let btn = document.createElement("input");
    btn.id = "btn";
    btn.type = "submit";
    btn.value = "NEW GAME";
    btn.setAttribute("onclick", "novojogo()");
    pai.appendChild(btn);

    //nTentativas
    let trys = document.createElement("p");
    trys.id = "trys";
    trys.innerHTML = `You tried ${nTentativa/2} Times to win!`;
    pai.appendChild(trys);


}

let ultima = "";
let vez = 0;
let elemento1;
let elemento2;
let nTentativa = 0;
function mostra(id) {
    let nId = id.replace("img", "");
    imgs[nId].src = array_img[sorteado[nId]];
    nTentativa++;
    function verificar() {
        
        if (vez >= 1) {
            //vira a imagem
            vez = 0;
            elemento2 = document.getElementById(id);

            if (elemento2.src == elemento1.src) {
                //se elementos igual mantém amostra
                let elemento1;
                let elemento2;
            }
            else {
                //senão vira as imagens de volta
                setTimeout(e2, 500);
                function e2() {
                    elemento1.src = "./IMG/verde.png";
                    elemento2.src = "./IMG/verde.png";
                }

            }
        }
        else {
            vez++;
            elemento1 = document.getElementById(id);
        }
    }
    verificar();

    function fim() {
        let ndVerder = 0;
        for (let x = 0; x < imgs.length; x++) {
            if (imgs[x].src == "http://localhost/Jogo-da-memoria/IMG/verde.png"){
                ndVerder++;
            }

        }
        if(ndVerder == 0){
            telafim();
        }
    }
    fim();
}
telafim();