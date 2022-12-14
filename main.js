const Botoes = {
    botaoPlay: document.querySelector('.btn-play'),
    botaoPause: document.querySelector('.btn-pause'),
    botaoConfig: document.querySelector('.btn-config'),
    botaoStop: document.querySelector('.btn-stop'),
    botaoSound: document.querySelector('.btn-sound'),
    botaoMute: document.querySelector('.btn-mute'),
}

let timeClearOut;
let minutos = document.querySelector('.minutes')
let segundos = document.querySelector('.seconds')
let min = 0

function updateDisplay(minutes, seconds) {
    minutos.textContent = String(minutes).padStart(2, "0")
    segundos.textContent = String(seconds).padStart(2, "0")
}

function Contagem() {
    if (minutos.textContent != 0 || segundos.textContent != 0) {
        timeClearOut = setTimeout(() => {
            if (segundos.textContent <= 0) {
                String(--minutos.textContent).padStart(2, "0")
                segundos.textContent = 60
            }
            updateDisplay(minutos.textContent, Number(segundos.textContent) - 1)
            Contagem()
        }, 1000)

    } else {
        kitchenTimer.play()
        resetTime()
        clearTimeout(timeClearOut)
        updateDisplay(0, 0)
        bgAudio.pause()
        Botoes.botaoMute.classList.remove('hide')
        Botoes.botaoSound.classList.add('hide')
        return
    }

}

function resetTime() {
    Botoes.botaoPause.classList.add('hide')
    Botoes.botaoStop.classList.add('hide')
    Botoes.botaoPlay.classList.remove('hide')
    Botoes.botaoConfig.classList.remove('hide')
}


Botoes.botaoPlay.addEventListener('click', () => {

    if (minutos.textContent != 0 || segundos.textContent != 0) {
        Botoes.botaoPause.classList.remove('hide')
        Botoes.botaoStop.classList.remove('hide')
        Botoes.botaoPlay.classList.add('hide')
        Botoes.botaoConfig.classList.add('hide')
        buttonPressAudio.play()
        Contagem()


    } else {
        alert('Por favor, escolher o tempo')
    }

})

Botoes.botaoPause.addEventListener('click', () => {
    Botoes.botaoPause.classList.add('hide')
    Botoes.botaoPlay.classList.remove('hide')
    clearTimeout(timeClearOut)
    buttonPressAudio.play()
})

Botoes.botaoConfig.addEventListener('click', () => {
    let numeroInfo = prompt('Escolha o Tempo: ') || 0
    minutos.textContent = String(numeroInfo).padStart(2, "0")
    min = numeroInfo
})

Botoes.botaoSound.addEventListener('click', () => {
    Botoes.botaoMute.classList.remove('hide')
    Botoes.botaoSound.classList.add('hide')
    bgAudio.muted = true
    
})

Botoes.botaoMute.addEventListener('click', () => {
    Botoes.botaoMute.classList.add('hide')
    Botoes.botaoSound.classList.remove('hide')
    bgAudio.play()
    bgAudio.loop = true
    bgAudio.muted = false
  
})

Botoes.botaoStop.addEventListener('click', () => {
    resetTime()
    updateDisplay(min, 0)
    clearTimeout(timeClearOut)
    buttonPressAudio.play()
})


  
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

const kitchenTimer = new Audio("./files/audios_kichen-timer.mp3")

const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
