function ternario() {
    const valor = document.getElementById('Ternario').value;

    (valor === "1") ? alert('O valor é igual a 01') : alert('O valor é igual a 02');
}

function Pesquisar() {
    const nome = document.getElementById('nome').value;
    const img = document.getElementById('Imagem');

    if (nome === "Digimon" || nome === "digimon") {
        img.setAttribute('src', '../img/Digimon.png');
    } else if (nome === "Dragon Ball" || nome === "dragon ball" || nome === "Dragon ball") {
        img.setAttribute('src', '../img/DragonBall.png');
    }
    else {
        img.setAttribute('src', '../img/duvida.png')
    }
}