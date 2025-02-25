function alterNome(){
    const h1 = document.getElementById('nome');
    h1.textContent = "Alterei o texto, huhuuu!"
}

function soma(){
    //Entrada
    const valor1 = document.getElementById('vl1').value;
    const valor2 = document.getElementById('vl2').value;

    //Processamento
    let soma = parseInt(valor1) + parseInt(valor2);

    //Saida
    alert(soma);
}

function adivinhaNome(){
    const nome = document.getElementById('nom').value;

    alert("seja bem-vindo "+ nome);
}

function calcular(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resp = document.getElementById('resp');

    let soma = parseInt(num1) + parseInt(num2);
    let subt = parseInt(num1) - parseInt(num2);
    let mult = parseInt(num1) * parseInt(num2);
    let divi = parseInt(num1) / parseInt(num2);

    // alert("Soma: "+ soma +", Subitração: "+ subt +", Multiplicação: "+ mult +" e Divisão: "+ divi);
    
    resp.textContent = "Resultados: Soma: "+ soma +", Subitração: "+ subt +", Multiplicação: "+ mult +" e Divisão: "+ divi;
}

function imc(){
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const rimc = document.getElementById('rimc');

    let Imc =parseFloat(peso)/ parseFloat(altura*altura);
    rimc.textContent = "Seu Ídice de massa corporal é: "+ Imc;
}