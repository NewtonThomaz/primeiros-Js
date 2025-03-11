function calcularCursos() {
    const valor1 = document.getElementById('natureza').value;
    const valor2 = document.getElementById('humanas').value;
    const valor3 = document.getElementById('linguagens').value;
    const valor4 = document.getElementById('matematica').value;
    const valor5 = document.getElementById('redacao').value;

    const resp = document.getElementById('resp');

    let media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4) + parseFloat(valor5))/5;

    if(media >= 750){
        resp.textContent = 'Você pode aplicar em Medicina, Engenharia Aeronáutica e Direito';
    } else if(media >= 600){
        resp.textContent = 'Você pode aplicar em Engenharia Civil, Administração e Psicologia';
    } else if(media >= 450){
        resp.textContent = 'Pedagogia, Letras e Ciências Sociais.';
    } else{
        resp.textContent = 'Você pode aplicar em Infelizmente, sua nota está abaixo da nota de corte mínima.';
    } 
}