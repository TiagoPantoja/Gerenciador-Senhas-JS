const senhachamada = document.querySelector(".senha");
const caixachamada = document.querySelector(".caixa");
const atendimentos = document.querySelector(".atendimentos");

const botaosenhap = document.querySelector(".botao-p");

const botaosenhar = document.querySelector(".botao-r");
const botaosenhac = document.querySelector(".botao-c");
const suaSenha = document.querySelector(".sua-senha");

const botaocaixa = document.querySelector(".botao");
const botaocaixa2 = document.getElementById("caixa2");
const botaocaixa3 = document.getElementById("caixa3");
const botaocaixa4 = document.getElementById("caixa4");


let filaPrioridade = [];
let filaRapido = [];
let filaComum = [];

let cont = 0;

function adicionarfilaPrioritario(event) {
    if (event.target.innerText === "Prioritario") {
        cont++;
        filaPrioridade.push(`P-${cont}`);
        console.log(filaPrioridade);
        suaSenha.innerHTML = `<p>Sua senha é: </p><h2>P-${cont}</h2>`;
    }
}

function adicionarfilaRapido(event) {
    if (event.target.innerText === "Rápido") {
        cont++;
        filaRapido.push(`R-${cont}`);
        console.log(filaRapido);
        suaSenha.innerHTML = `<p>Sua senha é:</p><h2>R-${cont}</h2>`;
    }
}

function adicionarfilaComum(event) {
    if (event.target.innerText === "Comum") {
        cont++;
        filaComum.push(`C-${cont}`);
        console.log(filaComum);
        suaSenha.innerHTML = `<p>Sua senha é: </p><h2>C-${cont}</h2>`;
    }
}

let context,
    oscillator,
    contextGain,
    x = 0;

function start() {
    context = new AudioContext();
    oscillator = context.createOscillator();
    contextGain = context.createGain();

    oscillator.connect(contextGain);
    contextGain.connect(context.destination);
    oscillator.start(0);
}

function stop() {
    start();
    contextGain.gain.exponentialRampToValueAtTime(
        0.000001,
        context.currentTime + x
    );
}

function chamarSenha(event) {
    if (event.target.innerText === "Caixa 1" && filaPrioridade.length > 0) {
        var chamada = filaPrioridade.shift();
        senhachamada.innerHTML = `<h1>${chamada}</h1>`;
        caixachamada.innerHTML = `<h2>CAIXA 1</h2>`;
        console.log(filaPrioridade);
        x = 5;
        stop();
    } else if (filaRapido.length > 0 && event.target.innerText === "Caixa 1") {
        var chamada = filaRapido.shift();
        senhachamada.innerHTML = `<h1>${chamada}</h1>`;
        caixachamada.innerHTML = `<h2>CAIXA 1</h2>`;
        console.log(filaRapido);
        x = 5;
        stop();
    } else if (filaComum.length > 0 && event.target.innerText === "Caixa 1") {
        var chamada = filaComum.shift();
        senhachamada.innerHTML = `<h1>${chamada}</h1>`;
        caixachamada.innerHTML = `<h2>CAIXA 1</h2>`;
        console.log(filaComum);
        x = 5;
        stop();
    }
}

function chamarSenha2(event) {
    if (event.target.innerText === "Caixa 2" && filaRapido.length > 0) {
        var chamada = filaRapido.shift();
        senhachamada.innerHTML = `<h1>${chamada}</h1>`;
        caixachamada.innerHTML = `<h2>CAIXA 2</h2>`;
        console.log(filaRapido);
        x = 5;
        stop();
    } else if (
        filaPrioridade.length > 0 &&
        event.target.innerText === "Caixa 2"
    ) {
        var chamada = filaPrioridade.shift();
        senhachamada.innerHTML = `<h1>${chamada}</h1>`;
        caixachamada.innerHTML = `<h2>CAIXA 2</h2>`;
        console.log(filaPrioridade);
        x = 5;
        stop();
    } else if (filaComum.length > 0 && event.target.innerText === "Caixa 2") {
        var chamada = filaComum.shift();
        senhachamada.innerHTML = `<h1>${chamada}</h1>`;
        caixachamada.innerHTML = `<h2>CAIXA 2</h2>`;
        console.log(filaComum);
        x = 5;
        stop();
    }
}

function chamarSenha3(event) {
    if (event.target.innerText === "Caixa 3" && filaRapido.length > 0) {
        var chamada = filaRapido.shift();
        senhachamada.innerHTML = `<h1>${chamada}</h1>`;
        caixachamada.innerHTML = `<h2>CAIXA 3</h2>`;
        console.log(filaPrioridade);
        x = 5;
        stop();
    } else if (
        filaPrioridade.length > 0 &&
        event.target.innerText === "Caixa 3"
    ) {
        var chamada = filaPrioridade.shift();
        senhachamada.innerHTML = `<h1>${chamada}</h1>`;
        caixachamada.innerHTML = `<h2>CAIXA 3</h2>`;
        console.log(filaRapido);
        x = 5;
        stop();
    } else if (filaComum.length > 0 && event.target.innerText === "Caixa 3") {
        var chamada = filaComum.shift();
        senhachamada.innerHTML = `<h1>${chamada}</h1>`;
        caixachamada.innerHTML = `<h2>CAIXA 3</h2>`;
        console.log(filaComum);
        x = 5;
        stop();
    }
}

function chamarSenha4(event) {
    if (event.target.innerText === "Caixa 4" && filaComum.length > 0) {
        var chamada = filaComum.shift();
        senhachamada.innerHTML = `<h1>${chamada}</h1>`;
        caixachamada.innerHTML = `<h2>CAIXA 4</h2>`;
        console.log(filaPrioridade);
        x = 5;
        stop();
    } else if (
        filaPrioridade.length > 0 &&
        event.target.innerText === "Caixa 4"
    ) {
        var chamada = filaPrioridade.shift();
        senhachamada.innerHTML = `<h1>${chamada}</h1>`;
        caixachamada.innerHTML = `<h2>CAIXA 4</h2>`;
        console.log(filaPrioridade);
        x = 5;
        stop();
    } else if (filaRapido.length > 0 && event.target.innerText === "Caixa 4") {
        var chamada = filaRapido.shift();
        senhachamada.innerHTML = `<h1>${chamada}</h1>`;
        caixachamada.innerHTML = `<h2>CAIXA 4</h2>`;
        console.log(filaRapido);
        x = 5;
        stop();
    }
}

botaosenhap.addEventListener("click", function (event) {
    adicionarfilaPrioritario(event);
});

botaosenhar.addEventListener("click", function (event) {
    adicionarfilaRapido(event);
});
botaosenhac.addEventListener("click", function (event) {
    adicionarfilaComum(event);
});

botaocaixa.addEventListener("click", function (event) {
    chamarSenha(event);
});
botaocaixa2.addEventListener("click", function (event) {
    chamarSenha2(event);
});
botaocaixa3.addEventListener("click", function (event) {
    chamarSenha3(event);
});
botaocaixa4.addEventListener("click", function (event) {
    chamarSenha4(event);
});
