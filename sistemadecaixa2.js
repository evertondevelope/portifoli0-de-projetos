let familia={ receita:[1200,200,30,50,90,25],
    divididas:[50,20,30,500, 40]}

function sum(array) {
    let total = 0;    
    for( let valor of array)
     {total += valor} /* aqui temos uma soma foi feita com
     operadores aritmeticos aqual ela ficou resumida porém essa soma não é nada mais do que total+valor é como essa conta 
     foi feita usando o operador o valor dessa soma ficou atualizado dentro da variavel total */
    return total
}

function hjjj() {
    let somadereceita = sum(familia.receita)
    let somadedividas = sum(familia.divididas)

     let calculo1= somadereceita - somadedividas
     let resul= calculo1 >= 0

     let ok= "negativo"

    if( resul) {ok="positivo"}

    console.log(`este mês o saldo é ${ok}: estamos com um saldo de ${calculo1}`)}

hjjj()
// 