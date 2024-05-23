alert("Bem-vindo!"); 
const kmlitros=12;
let tempo = Number(prompt("informe o tempo de viagem"));
let velocidade = Number(prompt("informe a velocidade media"));
let distancia = tempo*velocidade;
let litrosUsados = distancia/kmlitros;
alert(`Para os automoveis que fazem ${kmlitros}km/l o valor da velocidade média é:${velocidade}, o tempo gasto na viagem ${tempo}, a distancia percorrida:${distancia} e a quantidade de litros utilizada na viagem:${litrosUsados}.`);