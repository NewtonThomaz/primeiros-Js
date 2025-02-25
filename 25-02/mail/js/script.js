function testaCor(){
    const cor = document.getElementById("cor").value;

    if (cor === "azul" || cor === "Azul"){
        location.href = "mailto:someone@example.com";
    } else {
        alert('Tente novamente');
    }
}