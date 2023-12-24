// TEMAS - CLARO/ESCURO

const icone = document.getElementById("icone");

icone.onclick = function() {
    document.body.classList.toggle("tema-escuro");
    if (document.body.classList.contains("tema-escuro")) {
        icone.src = "./assets/imagens/icone-sol.svg";
    } else{
        icone.src = "./assets/imagens/icone-lua.svg";
    }
}

// SESSÃO - TECNOLOGIAS

var tecnologias = document.getElementById("habilidades");

window.onmousemove = function(e) { 
// Nesse caso, toda a janela movimenta o mouse - caso quiser, dá para restringir colocando "tecnologias" no início ao invés de "window"

    var x = - e.clientX/5,
        y = - e.clientY/5;
    tecnologias.style.backgroundPositionX = x + 'px';
    tecnologias.style.backgroundPositionY = y + 'px';
}