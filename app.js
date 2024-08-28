    document.getElementById("botao-cripto").addEventListener("click", function() {
    document.getElementById("copiar-botao").style.visibility = "visible";
    });
    
function Criptografar(){
    let texto = document.querySelector("textarea").value;
    let limparTexto = document.querySelector("textarea");
    limparTexto.value = null;
    texto.value = null;

    let textoCriptografado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    let mensagemTitulo = document.getElementById("resposta-conteudo");
    mensagemTitulo.innerHTML = textoCriptografado;
    let mensagemImagem = document.getElementById("imagem-resposta");
    mensagemImagem.innerHTML = "";

}

function Descriptografar(){
    let texto = document.querySelector("textarea").value;
    let limparTexto = document.querySelector("textarea");
    limparTexto.value = null;
    texto.value = null;

    let textoDescriptografado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    let mensagemTitulo = document.getElementById("resposta-conteudo");
    mensagemTitulo.innerHTML = textoDescriptografado;
    let mensagemImagem = document.getElementById("imagem-resposta");
    mensagemImagem.innerHTML = "";
}

function copiarTexto(){

    let textoCopiado = document.getElementById("resposta-conteudo");
    navigator.clipboard.writeText(textoCopiado.innerText);

    let mensagemTitulo = document.getElementById("resposta-conteudo");
    mensagemTitulo.innerHTML = "Nenhuma mensagem";

}