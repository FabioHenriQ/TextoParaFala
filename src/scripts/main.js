const learn = document.querySelector('button');
learn.addEventListener('click', ()=>{
    const learning = "é só você escrever algo abaixo e clicar em Falar, assim eu falo";
    let utteranceLearn = new SpeechSynthesisUtterance(learning);
    window.speechSynthesis.speak(utteranceLearn);
})
const clear = document.querySelector("input[type='button']");;
clear.addEventListener('click', ()=>{
    let campoTexto = document.querySelector("input[type='text']");
    campoTexto.value = "";
})

document.addEventListener('DOMContentLoaded', (event) => {
    let botao = document.querySelector("input[type='submit']");
    let campoTexto = document.querySelector("input[type='text']");

    botao.addEventListener('click', function(event) {
        event.preventDefault();
        let textoParaFala = campoTexto.value;
        let utterance = new SpeechSynthesisUtterance(textoParaFala);
        window.speechSynthesis.speak(utterance);
    });
});