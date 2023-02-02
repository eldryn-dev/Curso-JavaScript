var texto = window.document.querySelector('p#rel')
        var agora = new Date()
        var hora = agora.getHours()
        var fundo = window.document.querySelector('div#boxrel')     
        
        
        texto.innerHTML = `Agora são ${hora} horas!`

        if (hora < 12){
            fundo.style.background ='#82D5EB'
            texto.style.color ='#5F44FF'
        } else if (hora < 18){
            //boatarde//
        } else {
            //boa noite//
        }
