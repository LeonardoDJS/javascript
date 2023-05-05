
    function update() {
        var select = document.getElementById('procedimento');
        var option = select.options[select.selectedIndex];
        var res = document.getElementById('res')
        res.innerHTML=""
        //document.getElementById('value').value = option.value; apagar
        //document.getElementById('text').value = option.text; apagar
        var img = document.createElement('img')
            img.setAttribute('id', 'foto')
        if ( option.value == 'proc'){
            
            //window.alert('processando')
            img.setAttribute('src', 'armazem.jpg')
            
        }else if (option.value == ('envi')){
            //window.alert('enviado')
            img.setAttribute('src', 'transporte.jpg')
         
            
        }else if (option.value == 'conc'){

           // window.alert('concluido')
           
            img.setAttribute('src', 'entrega.jpg')
          
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
        

    }



































/*function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

if (num.value.length == 0 ){
    alert('por favor digite um numero!')


}else{
    let n = Number(num.value)
    //alert('ok!')
    let c = 1
    tab.innerHTML = ''
    while ( c <= 10){
        let item = document.createElement ('option')
        item.text = `${n}  x ${c} = ${n*c}`
        item.tab= `tab${c}`
        tab.appendChild(item)
        c++
    }

}
}
function gerar(){
let teste = document.getElementById('seltab')
    if (teste == 'con'){

        window.alert('ok2')

    }

window.alert('errou')

}



var select = document.getElementById('language');
var value = select.options[select.selectedIndex].value;
//console.log(value); // pt
    window.alert(`selecionou ${select}`)

function selecionar (){
if (select == 'pt'){

    window.alert(`selecionou pt`)

}else if(select == 'en'){

    window.alert(`selecionou pt`)
}


}
*/

