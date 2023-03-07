
function calculo(receita=0, saida=0) // aqui nos parametros eu coloquei um =0 para que se acontecer de não for definido nenhum valor não  ser atribuido para algum dos parametros não gerar um erro na minha função!
{
    let dindin= receita - saida 
    let dindin2 = dindin >= 0 
let explicação
    if(dindin2) (explicação=`estamos progredindo `)
    else (explicação=`este mês não estamos indo bem devemos`)
return explicação
}
 let hj= calculo(49,9)
 console.log(hj)
 hj=calculo(2,45)
 console.log(hj)

//calculo(49,)
// console.log(calculo(49,4)) se eu não quiser usar uma variavel para me mostrar o resultaodo eu tenho que definir os valores dessa forma que é mostrado o console.log é não digitando a função colocando os valores é depois pedindo para esse valor ser mostrado pois ira dar um erro