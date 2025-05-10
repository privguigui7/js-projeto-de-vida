const datasFinais = {
    dias120: new Date("2025-12-31T23:59:59"),
    dias90: new Date("2025-10-01T23:59:59"),
    dias60: new Date("2025-08-01T23:59:59"),
    dias30: new Date("2025-06-10T23:59:59")
};

// Atualiza o contador
function atualizarContador(idPrefixo, dataFinal) {
    const agora = new Date();
    const diferenca = dataFinal - agora;

    if (diferenca <= 0) {
        document.getElementById(idPrefixo).textContent = "0";
        document.getElementById("horas" + idPrefixo.slice(4)).textContent = "0";
        document.getElementById("min" + idPrefixo.slice(4)).textContent = "0";
        document.getElementById("seg" + idPrefixo.slice(4)).textContent = "0";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById(idPrefixo).textContent = dias;
    document.getElementById("horas" + idPrefixo.slice(4)).textContent = horas;
    document.getElementById("min" + idPrefixo.slice(4)).textContent = minutos;
    document.getElementById("seg" + idPrefixo.slice(4)).textContent = segundos;
}

// Roda os contadores a cada segundo
setInterval(() => {
    for (const id in datasFinais) {
        atualizarContador(id, datasFinais[id]);
    }
}, 1000);

// Troca de abas ao clicar nos botões
const botoes = document.querySelectorAll(".botao");
const conteudos = document.querySelectorAll(".aba-conteudo");

botoes.forEach(botao, index) ; 
    botao.addEventListener("click", () => {
        document.querySelector(".botao.ativo").classList.remove("ativo");
        document.querySelector(".aba-conteudo.ativo").classList.remove("ativo");

        botao.classList.add("ativo");
        conteudos[index].classList.add("ativo");
    });
