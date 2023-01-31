function gerador() {
    var agora = new Date ()
    var atual = agora.getFullYear()
    var ano = (window.document.querySelector('input#borntxt'))
    var res = window.document.getElementById('res')

    var idade = atual - Number(ano.value)
    var fsex = document.getElementsByName('radsex')
    var genero = ''

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
        genero = 'Homem'
        img.setAttribute('src','homem.jpg')
    }else {
        genero = 'Mulher'
    }

    res.style.textAlign = 'center'
    res.innerHTML = (`<p>Você é ${genero} e tem ${idade} anos de idade!</p>`)
    res.appendChild(img)
}