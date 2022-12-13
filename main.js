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
let min;

function updateDisplay(minutes, seconds){
    minutos.textContent = String(minutes).padStart(2, "0")
    segundos.textContent = String(seconds).padStart(2, "0")
}



function Contagem(){


if(minutos.textContent != 0 || segundos.textContent != 0 ){
 

 timeClearOut = setTimeout(()=> {

       

      if(segundos.textContent <= 0){
          String(--minutos.textContent).padStart(2, "0")
          segundos.textContent = 60
        }
        
    
    updateDisplay(minutos.textContent, Number(segundos.textContent -1))

    
    Contagem()

       
        

  }, 1000)
   
}else {
    
    resetTime()
    clearTimeout(timeClearOut)
    minutos.textContent = 0
    segundos.textContent = 0
    return

}


}

function resetTime (){
    Botoes.botaoPause.classList.add('hide')
    Botoes.botaoStop.classList.add('hide')
    Botoes.botaoPlay.classList.remove('hide')
    Botoes.botaoConfig.classList.remove('hide')
}
  



Botoes.botaoPlay.addEventListener('click', ()=> {

    if(minutos.textContent != 0 || segundos.textContent != 0){
        Botoes.botaoPause.classList.remove('hide')
        Botoes.botaoStop.classList.remove('hide')
        Botoes.botaoPlay.classList.add('hide')
        Botoes.botaoConfig.classList.add('hide')

        if(segundos.textContent <= 0){
         updateDisplay(Number(minutos.textContent)-1)
          segundos.textContent = 59
        }

        Contagem()

    }else  {
        alert('Por favor, escolha um Tempo')
    }

    
    
   
  

})

Botoes.botaoPause.addEventListener('click', ()=> {
    Botoes.botaoPause.classList.add('hide')
    Botoes.botaoPlay.classList.remove('hide')
    clearTimeout(timeClearOut)
   
    

})

Botoes.botaoConfig.addEventListener('click', ()=> {
    let numeroInfo = String(prompt('Escolha o número: ')).padStart(2, "0")

    if(numeroInfo == '' || numeroInfo == null ){
        return
    }else {
      minutos.textContent = numeroInfo
      min = numeroInfo
    
    }  

    

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
    
    resetTime()
    updateDisplay(min, 0)
    clearTimeout(timeClearOut)
    


})


