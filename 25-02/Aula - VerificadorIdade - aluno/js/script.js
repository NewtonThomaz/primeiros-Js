function verificarIdade() {
    const idade = document.getElementById('idade').value;
    const imagem = document.getElementById('imagem');
    const tipo = document.getElementById('tipo');
    
    if (idade <= 12 && idade > 0) {
        imagem.setAttribute('src', 'img/crianca.png');
    } else if(idade <= 18 && idade > 12) {
        imagem.setAttribute('src', 'img/adolecente.png');
    } else if(idade <= 59 && idade > 18) {
        imagem.setAttribute('src', 'img/adulto.png');
    } else if(idade > 60 ) {
        imagem.setAttribute('src', 'img/idoso.png');
    }else {
        imagem.setAttribute('src', 'img/ini.png')
    }
}