function entrar(){

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const login = document.getElementById('login-btn');

    if(username === "" || password === ""){
        alert("Erro, campo vazio");
    } else if (username === "adm" && password === "123456"){
        login.setAttribute('href','pages/adm.html')
    } else {
        alert('Login ou senha não encontrado')
    }

}