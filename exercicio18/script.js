alert("Bem-vindo!");
let candidatoA = Number(prompt("informe os votos do candidato A")); 
let candidatoB = Number(prompt("informe os votos do candidato B"));
let candidatoC = Number(prompt("informe os votos do candidato C"));
let votosValidos = (candidatoA + candidatoB + candidatoC);
let votosNulos = Number(prompt("informe os votos nulos"));
let votosBrancos = Number(prompt("informe os votos brancos"));
let numeroEleitores = (votosValidos + votosNulos + votosBrancos);
let percentualVotosValidos = votosValidos/numeroEleitores*100;
let percentualcandidatoA = candidatoA/numeroEleitores*100;
let percentualcandidatoB = candidatoB/numeroEleitores*100;
let percentualcandidatoC = candidatoC/numeroEleitores*100;
let percentualvotosNulos = votosNulos/numeroEleitores*100;
let percentualvotosBrancos = votosBrancos/numeroEleitores*100; 

alert (`O número total de eleitores é ${numeroEleitores} \n 
votos validos ${percentualVotosValidos}%
\n candidato A ${percentualcandidatoA}%
\n candidato B ${percentualcandidatoB}%
\n candidatoo C ${percentualcandidatoC}% 
\n votos nulos ${percentualvotosNulos}% 
\n votos brancos ${percentualvotosBrancos}%`);
