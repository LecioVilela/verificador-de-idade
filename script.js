const verificar = () => {
    //window.alert('Funcionou')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '300px'
        img.style.height= '300px'
        img.style.borderRadius = '50%'
        img.style.display = 'flex'
        img.style.margin = 'auto'

        if(fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            }
            else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        }
        else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade <10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-f.jpg')
            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
            }
            else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        if (fsex[0].checked) {
        res.innerHTML = `Detectamos um ${genero}, com ${idade} anos.`
    }
    else {
        res.innerHTML = `Detectamos uma ${genero}, com ${idade} anos.`
    }
        
        res.appendChild(img)
    }
}