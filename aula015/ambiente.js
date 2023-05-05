let num = [5,8,2,9,3,-1]
num.push(1)  // adiciona elemneto ao vetor
num.sort()    // organiza o vetor

//num.length   // mostra quantas posicoes possue o vetor
//num.indexOf(7)   // busca dentro do vetor
console.log(`Nosso vetor é ${num}`)
console.log (`o vetor tem ${num.length} posicoes`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(10)
console.log(`o valor -1 está na posição ${pos}`)




/*
for (let pos = 0  ; pos < num.length ; pos++ ){   // strutura for comum
    console.log(`A posição  ${pos}  tem o valor ${num[pos]}`)

}
*/

/*estrutura for para arrays

for (let pos in num){ 
    console.log(`A posição  ${pos}  tem o valor ${num[pos]}`)


}
*/


