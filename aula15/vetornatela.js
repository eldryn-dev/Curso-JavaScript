let valores = [8,1,7,4,2,9]

console.log(valores)

for(let pos = 0 ; pos < valores.length ; pos++) {
    console.log(valores[pos])
}

for(let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(2)

console.log(`O valor 2 está na posição ${pos}`)