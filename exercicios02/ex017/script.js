function gerar() {
    var num = window.document.getElementById('txtn')
    var res = window.document.getElementById('seltab')

    let n = Number(num.value)
    res.innerHTML=''
    for (let c = 1 ; c <= 10 ; c++) {
        res.innerHTML+=`${n} x ${c} = ${n*c} <br>`        
    }
}
