function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} hora`
    if(hora >= 0 && hora < 12){
        img.src = 'manha1.png'
        document.body.style.background = '#F5D75F'
    }else if (hora >= 12 && hora < 18){
        img.src = 'tarde1.png'
        document.body.style.background = '#DF9E5C'
    }else {
        img.src = 'noite1.png'
        document.body.style.background = '#091633'
    }
}
