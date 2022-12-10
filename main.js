const Botoes = {
    botaoPlay: document.querySelector('.btn-play'),
    botaoPause: document.querySelector('.btn-pause'),
    botaoConfig: document.querySelector('.btn-config'),
    botaoStop: document.querySelector('.btn-stop'),
    botaoSound: document.querySelector('.btn-sound'),
    botaoMute: document.querySelector('.btn-mute'),
}

const TimerFocus = {
    minutos: document.querySelector('.minutes'),
    segundos: document.querySelector('.seconds'),
}


function Contagem(){
    setTimeout(()=>{


        TimerFocus.segundos.textContent = segundos - 1
        setTimeout()



    }, 1000)
}

Botoes.botaoPlay.addEventListener('click', ()=> {
    Botoes.botaoPause.classList.remove('hide')
    Botoes.botaoStop.classList.remove('hide')
    Botoes.botaoPlay.classList.add('hide')
    Botoes.botaoConfig.classList.add('hide')
    Contagem()

})

Botoes.botaoPause.addEventListener('click', ()=> {
    Botoes.botaoPause.classList.add('hide')
    Botoes.botaoPlay.classList.remove('hide')

})

Botoes.botaoConfig.addEventListener('click', ()=> {
    let numeroInfo = prompt('Escolha o número: ')

    if(numeroInfo == '' || numeroInfo == null ){
        return
    }   
    TimerFocus.minutos.textContent = numeroInfo

})

Botoes.botaoSound.addEventListener('click', ()=> {
    Botoes.botaoMute.classList.remove('hide')
    Botoes.botaoSound.classList.add('hide')
})

Botoes.botaoMute.addEventListener('click', ()=> {
    Botoes.botaoMute.classList.add('hide')
    Botoes.botaoSound.classList.remove('hide')
})

Botoes.botaoStop.addEventListener('click', ()=> {
    TimerFocus.minutos.textContent = "00"
    Botoes.botaoPause.classList.add('hide')
    Botoes.botaoPlay.classList.remove('hide')
    Botoes.botaoStop.classList.add('hide')
    Botoes.botaoConfig.classList.remove('hide')

})