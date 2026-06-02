let floresta = 100;
let agua = 100;
let animais = 100;
let comunidades = 100;
let pontos = 0;
let fase = 1;

let videosProtecao = [

    "videos/protecao1.mp4",
    "videos/protecao2.mp4",
    "videos/protecao3.mp4",
    "videos/protecao1.mp4",
    "videos/protecao5.mp4"

];

let videosDestruicao = [

    "videos/destruicao1.mp4",
    "videos/destruicao2.mp4",
    "videos/destruicao3.mp4",
    "videos/destruicao4.mp4",
    "videos/destruicao5.mp4"

];

function iniciarJogo(){

    document.getElementById("inicio").style.display = "none";

    document.getElementById("jogo").style.display = "flex";

}

function atualizarStatus(){

    document.getElementById("barraFloresta").style.width =
    floresta + "%";

    document.getElementById("barraAgua").style.width =
    agua + "%";

    document.getElementById("barraAnimais").style.width =
    animais + "%";

    document.getElementById("barraComunidades").style.width =
    comunidades + "%";

}

function proteger(){
    pontos++;
    document.querySelector(".botoes").style.display =
    "none";

    document.getElementById("textoVideo").style.display =
    "block";

    document.getElementById("videoProtecao").style.display =
    "block";

    document.querySelector("#videoProtecao source").src =
videosProtecao[fase - 1];

    document.getElementById("videoProtecao").load();

    document.getElementById("videoProtecao").play();

    if(fase == 1){

        document.getElementById("textoVideo").innerHTML =
        "🌳 Excelente escolha! Você protegeu comunidades indígenas e a floresta.";

    }

    if(fase == 2){

        document.getElementById("textoVideo").innerHTML =
        "🌳 A preservação protegeu a biodiversidade e respeitou os territórios e a vida das comunidades indígenas.";

    }

    if(fase == 3){

        document.getElementById("textoVideo").innerHTML =
        "🌳 Sua decisão ajudou a proteger as terras indígenas, preservando culturas, tradições e o equilíbrio da floresta para as futuras gerações.";

    }

    if(fase == 4){

        document.getElementById("textoVideo").innerHTML =
        "🚒 O combate às queimadas salvou vidas e territórios indígenas.";

    }

    if(fase == 5){

        document.getElementById("textoVideo").innerHTML =
        "";

    }

    setTimeout(() => {

        document.getElementById("continuar").style.display =
        "block";

    }, 12000);

}

function garimpo(){

    floresta -= 30;
    agua -= 40;
    animais -= 35;
    comunidades -= 50;

    document.querySelector(".botoes").style.display =
    "none";

    document.getElementById("textoGarimpo").style.display =
    "block";

    document.getElementById("videoGarimpo").style.display =
    "block";

    document.querySelector("#videoGarimpo source").src =
videosDestruicao[fase - 1];

    document.getElementById("videoGarimpo").load();
  
    document.getElementById("videoGarimpo").play();

    if(fase == 1){

        document.getElementById("textoGarimpo").innerHTML =
        "⚠️ O garimpo contaminou rios e destruiu territórios indígenas.";

    }

    if(fase == 2){

        document.getElementById("textoGarimpo").innerHTML =
        "🪓 O desmatamento destruiu habitats e aumentou os impactos ambientais.";

    }

    if(fase == 3){

        document.getElementById("textoGarimpo").innerHTML =
      "🚧 Permitir as invasões favoreceu a ocupação irregular dos territórios indígenas e agravou o racismo ambiental na região."
    }

    if(fase == 4){

        document.getElementById("textoGarimpo").innerHTML =
        "🔥 As queimadas destruíram não apenas a floresta, mas também a segurança e o modo de vida de comunidades tradicionais..";

    }

    if(fase == 5){

        document.getElementById("textoGarimpo").innerHTML =
        "☠️ A contaminação da água trouxe doenças e prejudicou comunidades que dependem diretamente dos rios amazônicos.";

    }

    setTimeout(() => {

        document.getElementById("continuar").style.display =
        "block";

    }, 12000);

    atualizarStatus();
}
function continuarJogo(){
    fase++;

    document.getElementById("videoProtecao").style.display =
    "none";

    document.getElementById("videoProtecao").pause();

    document.getElementById("videoGarimpo").style.display =
    "none";

    document.getElementById("videoGarimpo").pause();

    document.getElementById("continuar").style.display =
    "none";

    document.querySelector(".botoes").style.display =
    "flex";

    document.getElementById("mensagem").innerHTML =
    "Continue tomando decisões sobre o futuro da floresta.";

    document.getElementById("textoVideo").style.display =
    "none";

    document.getElementById("textoGarimpo").style.display =
    "none";

// perguntas 

if(fase == 2){

    document.getElementById("pergunta").innerHTML =
    "🏭 Uma empresa deseja derrubar árvores para expandir suas atividades.";

    document.getElementById("botao1").innerHTML =
    "🌳 Proteger a floresta";

    document.getElementById("botao2").innerHTML =
    "🪓 Derrubar árvores";

}

if(fase == 3){

    document.getElementById("pergunta").innerHTML =
    "🌳 Terras indígenas estão sofrendo invasões que ameaçam a floresta e o modo de vida das comunidades locais.";

    document.getElementById("botao1").innerHTML =
    "🛡️ Proteger as terras indígenas";

    document.getElementById("botao2").innerHTML =
    "🚧 Permitir invasões";

}

if(fase == 4){

    document.getElementById("pergunta").innerHTML =
    "🛣️ Uma estrada está sendo construída próximo a terras indígenas, aumentando invasões e conflitos na região.";

    document.getElementById("botao1").innerHTML =
    "🛡️ Proteger território indígena";

    document.getElementById("botao2").innerHTML =
    "🚧 Continuar construção";

}

if(fase == 5){

    document.getElementById("pergunta").innerHTML =
    "💧 Comunidades indígenas próximas a áreas de exploração estão enfrentando falta de água limpa devido à contaminação dos rios.";

    document.getElementById("botao1").innerHTML =
    "🚰 Levar apoio e proteção";

    document.getElementById("botao2").innerHTML =
    "☠️ Ignorar situação";

}

if(fase > 5){

    document.querySelector(".status").style.display =
    "none";

    document.querySelector(".botoes").style.display =
    "none";

    document.getElementById("pergunta").style.display =
    "none";

    document.getElementById("mensagem").style.display =
    "none";

    document.getElementById("telaFinal").style.display =
    "block";

    if(pontos >= 4){

        document.getElementById("tituloFinal").innerHTML =
        "🌳 Guardião da Amazônia 🌳";

        document.getElementById("textoFinal").innerHTML =

        "Suas escolhas ajudaram a proteger comunidades indígenas, rios amazônicos e territórios ameaçados. Você combateu o racismo ambiental e contribuiu para um futuro mais justo.";

    }

    else if(pontos >= 2){

        document.getElementById("tituloFinal").innerHTML =
        "⚠️ Futuro Incerto ⚠️";

        document.getElementById("textoFinal").innerHTML =

        "Algumas decisões ajudaram a preservar a Amazônia, mas outras ainda causaram impactos negativos para comunidades indígenas e para o meio ambiente.";

    }

    else{

        document.getElementById("tituloFinal").innerHTML =
        "☠️ Racismo Ambiental ☠️";

        document.getElementById("textoFinal").innerHTML =

        "Suas decisões contribuíram para a destruição ambiental e afetaram diretamente comunidades indígenas que dependem da floresta para sobreviver.";

    }

}
}