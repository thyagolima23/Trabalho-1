alert("Bem-vindo!"); 
let valorA = prompt("informe o valor da A");
let valorB = prompt("informe o valor da B");
alert(`O valor de A é ${valorA} e o de B é: ${valorB}`);
let troca=valorA;
valorA=valorB;
valorB=troca;
alert(`O valor de A é ${valorA} e o de B é: ${valorB}`);