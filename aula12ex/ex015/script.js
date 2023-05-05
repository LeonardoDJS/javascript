function verificar(){
var data = new Date ()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if (fano.value.length == 0 || fano.value > ano) {
    window.alert ('VERIFIQUE OS DADOS E TENTE NOVAMENTE')

}else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    //res.innerHTML = `Idade calculada: ${idade}`
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade < 10){
            //crianca
            img.setAttribute('src', 'hcrianca.png')
        }else if (idade  < 21 ){
             //jovem
             img.setAttribute('src', 'hjovem.png')
        }else if ( idade < 50 ){
            // adulto
            img.setAttribute('src', 'hadulto.png')

        }else {
            //idoso
            img.setAttribute('src', 'hidoso.png')
        }
    }else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >=0 && idade < 10){
            //crianca
            img.setAttribute('src', 'mcrianca.png')
        }else if (idade  < 21 ){
             //jovem
             img.setAttribute('src', 'mjovem.png')
        }else if ( idade < 50 ){
            // adulto
            img.setAttribute('src', 'madulta.png')
        }else {
            //idoso
            img.setAttribute('src', 'midosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
}