function contar (){
    var start = window.document.getElementById('start')
    var end = window.document.getElementById('end')
    var step = window.document.getElementById('step')
    var res = window.document.getElementById('res')
        
    let i = Number(start.value)
    let f = Number(end.value)
    let p = Number(step.value)

    if (p <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        p=1
    }
        
    if (i < f) {
        for (var c = i ; c <= f ; c += p){
            res.innerHTML += `${c} \u{1F449}`       
        }

    } else{
        for (var c = i ; f <= c ; c-= p){
            res.innerHTML += `${c} \u{1F449}`       
        }
    }            
    res.innerHTML += `\u{1F3C1}`
}


