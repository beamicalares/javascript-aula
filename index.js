let nota1 = Number.parseInt(prompt("nota da av1"));
let nota2 = Number.parseInt(prompt("nota da av2"));
let nota3 = Number.parseInt(prompt("nota da av3"));
let media = (nota1 + nota2 + nota3) / 3;
alert(`sua média é ${media.toFixed(1)}`);

let a1 = Number.parseFloat(prompt("digite sua a1"));
let a2 = Number.parseFloat(prompt("digite sua a2"));
let choice = prompt("Qual operação quer que seja feita?");
if (choice == "soma") {
  alert(`O resultado da sua soma é ${a1 + a2}`);
}
if (choice == "subtração") {
  alert(`O resultado da sua subtração é ${a1 - a2}`);
}
if (choice == "multiplicação") {
  alert(`O resultado da sua multiplicação é ${a1 * a2}`);
}
if (choice == "divisão") {
  alert(`O resultado da sua divisão é ${a1 / a2}`);
} else {
  alert("Digite uma opção válida: soma, subtração, multiplicação ou divisão");
}

let hip = Number.parseFloat(prompt("Digite um valor da hipotenusa"));
let cat0 = Number.parseFloat(prompt("Digite um valor do cateto 1"));
let cat1 = Number.parseFloat(prompt("Digite um valor do cateto 2"));
let hipot = hip ** 2;
let cateto0 = cat0 ** 2;
let cateto1 = cat1 ** 2;
document.write(
  `O resultado do teorema de Pitágoras é = ${(hipot = cateto0 + cateto1)}`
);

function naoMexaAntonio(nome, idade) {
  alert(
    `seja bem vindo, se você não é antonio, Seu nome é ${nome} e sua idade é ${idade}`
  );
}

let nomeDigitado = prompt("Digite seu nome:");
let idadeDigitada = prompt("Digite sua idade");
naoMexaAntonio(nomeDigitado, idadeDigitada);
