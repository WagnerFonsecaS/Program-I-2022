let form1 = document.forms["meuForm"];

form1.onsubmit = function(event){
    event.preventDefault;
    if(form1["nome"].value.length <= 5){
        alert("Digite mais que 5 caracteres!");
        return false;
    }

    let esportes = document.getElementsByClassName("esp");
    let valoresEsp = Object.values(esportes)
    let achei = false;
    valoresEsp.forEach(function(e){
        if(e.checked){
            achei = true;
        }
    });
    if(!achei){
        alert("Pelo menos um esporte deve ser marcado");
        return false;
    }
}