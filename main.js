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


function Contagem(){
  

if(minutos.textContent != 0 || segundos.textContent != 0 ){
 

 timeClearOut = setTimeout(()=> {

   

      if(segundos.textContent <= 0){
          --minutos.textContent
          segundos.textContent = 60
        }
        
    segundos.textContent--
    Contagem()

       
        

  }, 1000)
   
}else {
    Botoes.botaoPause.classList.add('hide')
    Botoes.botaoStop.classList.add('hide')
    Botoes.botaoPlay.classList.remove('hide')
    Botoes.botaoConfig.classList.remove('hide')
    clearTimeout(timeClearOut)
    minutos.textContent = "00"
    segundos.textContent = "00"
    return

}


}


  



Botoes.botaoPlay.addEventListener('click', ()=> {

    if(minutos.textContent != 0 || segundos.textContent != 0){
        Botoes.botaoPause.classList.remove('hide')
        Botoes.botaoStop.classList.remove('hide')
        Botoes.botaoPlay.classList.add('hide')
        Botoes.botaoConfig.classList.add('hide')

        if(segundos.textContent <= 0){
          --minutos.textContent
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
    let numeroInfo = prompt('Escolha o número: ')

    if(numeroInfo == '' || numeroInfo == null ){
        return
    }else {
        minutos.textContent = numeroInfo
        
        
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
    
    Botoes.botaoPause.classList.add('hide')
    Botoes.botaoPlay.classList.remove('hide')
    Botoes.botaoStop.classList.add('hide')
    Botoes.botaoConfig.classList.remove('hide')
    minutos.textContent = "00"
    segundos.textContent = "00"
    clearTimeout(timeClearOut)
    
 

})

