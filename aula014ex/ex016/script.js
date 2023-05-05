function contar(){
    let ini = document.getElementById ('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.lenght == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
            
        res.innerHTML = 'impossivel contar'
       // window.alert('erro faltam dados')    

    } else {
            res.innerHTML = 'Contando <br>' 
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)

            if (p<=0){
                    window.alert( 'passo invalido! Considerando Passo 1')
                    p= 1

            }

            if ( i < f){
                //contagem crescente
                for ( let c = i; c <= f; c += p){
                    res.innerHTML += `${c} \u{1f449}`
    
    
                }


            }else {
                //contagem decrescente
                for ( let c = i; c >= f; c -= p){
                    res.innerHTML += `${c} \u{1f449}`
    
    
                }
            }
            res.innerHTML += `\u{1f3c1}`
    }






}




































/*function contar(){
var inicio = document.getElementById ('txtini')
var fim = document.getElementById('txtfim')
var passo = document.getElementById('txtpas')

var cont = Number(inicio)
var pas = Number(passo)
var end = Number(fim)

if (inicio.value >= 0 && fim.value >= 1) {
    window.alert('1')

    while (inicio != fim ) {
        inicio = inicio + pas
        res.style.textAlign = 'center'
        res.innerHTML = `Impossivel Iniciar em  ${inicio.value} com o fim em ${fim.value} .`
        //window.alert(`teste ${inicio}`)
        
    }

}else{
    res.style.textAlign = 'center'
    res.innerHTML = `Impossivel Iniciar em  ${inicio.value} com o fim em ${fim.value} .`
    



}

window.alert('terminou')


}

*/








