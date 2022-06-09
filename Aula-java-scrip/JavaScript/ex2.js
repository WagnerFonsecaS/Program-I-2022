let num1 = parseInt(prompt("Numero 1: "));
let num2 = parseInt(prompt("Numero 2: "));

alert(num1 + num2);
document.write(num1+num2);
texto.innerHTML = num1 + num2;
texto.style.border = "1px solid brown";
document.getElementById("titulo").innerHTML = "Exemplo Javascript";
document.querySelector("#titulo").style.backgroundColor = "darkBlue";
titulo.style.color="white";

if(confirm("Tudo bem com você?")){
    alert("Que bom!!!");
}else{
    alert("Que pena!!!");
}

let estado =parseInt(prompt("Informe seu estado: "));

switch(estado.toLowerCase()){
    case "rondônia":
        alert("legal");
        break;
    case "bahia":
        alert("muito legal");
        break;
    case "rio grande do sul":
        alert("que frio");
        break;
    default:
        alert("Você é de outro estado!")
}