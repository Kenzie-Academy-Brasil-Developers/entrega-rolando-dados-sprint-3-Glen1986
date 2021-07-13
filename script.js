const destino = document.getElementById("body");
const destiny = document.getElementById("div");
const button = document.createElement("button");
const boxGame = document.createElement("div");
boxGame.classList.add("boxGame");
destino.appendChild(button);
button.innerText = "Joint";
button.id = "button";

const clickButton = document.querySelector("#button");
const conteudo = document.createElement("div");
const titulo = document.createTextNode("Rolando");
/////////////////////////////////////////////////
///////////// Grafico ///////////////////////////
/////////////////////////////////////////////////
//crear un for encima do arrai count
//
function grafico() {
  for (let i = 0; i < cont.length; i++) {
    const barras = document.createElement("div");
    barras.classList.add("barras");
    barras.style.border = "1px solid black";

    barras.style.height = `${cont[i]}px `;
    barras.style.width = "2rem";
    barras.innerText = `${i + 2}`;

    boxGame.appendChild(barras);
    //    console.log(i);
  }
}

function mostrarR(resultado) {
  const div = document.createElement("div");
  destiny.appendChild(div);
  div.innerText = resultado;
}

clickButton.addEventListener("click", function () {
  forHtml();
  grafico();
  clickButton.disabled = true;
  destiny.appendChild(boxGame);
});
//////////////////////////////////////////
let count = document.createElement("div");
let cont = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
///////////////////////////////////////
function tirarDado1() {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  return dado1;
}
///////////////////////////////////////
function tirarDado2() {
  let dado2 = Math.floor(Math.random() * 6) + 1;
  return dado2;
}
////////////////////////////////////////
function dosDados(dado1, dado2) {
  let jugar = dado1 + dado2;
  //  document.write(jugar);
  return jugar;
}
//////////////////////////////////////////////
let forHtml = () => {
  for (let i = 1; i <= 1000; i++) {
    let Rdado1 = tirarDado1();
    let Rdado2 = tirarDado2();
    let total = dosDados(Rdado1, Rdado2);
    cont[total - 2]++;
  }

  for (let i = 0; i < cont.length; i++) {
    let variable = i + 2 + " : " + cont[i];
    mostrarR(variable);
  }
};
