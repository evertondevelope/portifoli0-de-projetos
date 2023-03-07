function alunos ( score)
{ let scorea= score >= 90 && score <= 100 
let scoreb= score >= 80 && score <= 89
let scorec= score >= 70 && score <= 79
let scored= score >= 60 && score <= 69
let scoref= score < 60 && score >= 0
let result;

if (scorea) { result="você está aprovado, Nota A"}
 else if (scoreb) { result="você está aprovado, Nota b"}
 else if (scorec) { result="você está aprovado, Nota c"}
 else if (scored) { result="você está aprovado, Nota d"}
 else if (scoref) { result="você está reprovado, Nota e"}
else { result= "invalido"}
return result }
console.log(alunos(-1))
console.log(alunos(59))
console.log(alunos(60))
console.log(alunos(63))
console.log(alunos(89))
console.log(alunos(56))
console.log(alunos(76))
console.log(alunos(65))
console.log(alunos(79))
console.log(alunos(67))
