const learn = document.querySelector('button');
learn.addEventListener('click', ()=>{
    window.speechSynthesis.cancel();
    const learning = "é só você escrever algo abaixo e clicar em Falar, assim eu falo";
    let utteranceLearn = new SpeechSynthesisUtterance(learning);
    window.speechSynthesis.speak(utteranceLearn);
})

const clear = document.querySelectorAll("input[type='button']")[0];;
clear.addEventListener('click', ()=>{
    let campoTexto = document.querySelector("textarea");
    campoTexto.value = "";
})

const stopSpeak = document.querySelectorAll("input[type='button']")[1];;
stopSpeak.addEventListener('click', ()=>{
    window.speechSynthesis.cancel();
})

document.addEventListener('DOMContentLoaded', () => {
    let botao = document.querySelector("input[type='submit']");
    let campoTexto = document.querySelector("textarea");

    botao.addEventListener('click', function(event) {
        event.preventDefault();
        window.speechSynthesis.cancel();
        let textoParaFala = campoTexto.value;
        let utterance = new SpeechSynthesisUtterance(textoParaFala);
        window.speechSynthesis.speak(utterance);
    });
});