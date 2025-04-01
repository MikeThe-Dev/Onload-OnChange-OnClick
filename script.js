////método onload
function paginaCarregada() {
    alert("Página totalmente carregada! (onload)");
    console.log("Página carregada com sucesso.");
}
//método onChange
function valorMudou() {
    var select = document.getElementById("meuSelect");
    var valorSelecionado = select.options[select.selectedIndex].value;
    alert("Valor selecionado: " + valorSelecionado + " (onchange)");
}

//método onClick
function botaoClicado() {
    alert("Botão clicado! (onclick)");
    document.getElementById("mensagem").innerHTML = "Você clicou no botão!";
}