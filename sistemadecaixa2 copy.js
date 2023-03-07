let family ={ incomes: [2500,3200,250.43],
expenses:[320.34,128.45,176.87,1450.00]}

function sum (array) {
    let total = 0;
    for( let value of array) // não sabia que eu poderia usar for of para fazer com que quando cada elemento ele seje lido
    // possamos fazer algo com ele imaginei que apenas servia tipo um mostrador para elementos
    // nesse caso criamos um objeto é dentro dele adicionamos dois arrays (usamos o for of pois ele pode percorrer objeto porém ele só consegue mostrar os dados do array acredito que do mesmo jeito que usamos um for if para o array e ele só mostras a quantidade de elementos que existem ali o mesmo occre com o for of  na parte de objetos até chegar no array e mostrar o código ou seja só vai lendo até chegar no array)
    {total += value} 
    // não sabia que aqui eu poderia definir sitações usando a nova varivel criada para percorrer obetos
    /* aqui temos uma soma foi feita com operadores aritmeticos aqual ela ficou 
    resumida porém essa soma não é nada mais do que total+valor é como essa conta 
    foi feita usando o operador o valor dessa soma ficou atualizado dentro da variavel total */
    
    return total
}
function calculatebalance() //esse exemplo que não precisamos utilizar argumentos para criar uma função já que os dados já estão vindo de fora 
 {
  let calculateIncomes = sum(family.incomes) /* esse é um bom exemplo que podemos usar uma função dentro 
   de outra além de que essas funções elas estão posuindo um dado já colocaos um return nela */
  let calculatExpenses = sum(family.expenses)
  
  let total = calculateIncomes - calculatExpenses
  let itsOk= total >= 0
let balanceteText="negativo" // aqui criamos uma variavel para que quando o atender a condição ela seja atualizada pelo if
  if(itsOk) {
    balanceteText = "positivo"
  }
  console.log(`seu saldo é ${balanceteText}: ${total}`)
}

calculatebalance()