//var agora = new Date()
//var hora = agora.getHours()
var hora = 25
console.log(`agora são exatamente ${hora} horas.`)
if ( hora >= 6 && hora < 12 ) {
    console.log( 'bom dia')
} else if (hora >= 12 && hora <= 18) {
    console.log('boa tarde')
}else if (hora > 19 && hora < 24){
    console.log('boa noite')
}else if (hora >= 0 && hora < 6){
    console.log('boa madrugada')
}else {
    console.log('seu relogio esta louco')

}