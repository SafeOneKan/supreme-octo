let container = document.querySelector('.container')
const cursor = document.querySelector('.cursor')
const score = document.querySelector('.score')
const slider = document.querySelector('#speed')
const check = document.querySelector('.check')
const msg = document.querySelector('.msg')
const reset = document.createElement('button')

reset.classList.add('reset')
reset.innerText = "restart"
check.append(reset)
i = 0
score.textContent = i


setInterval(time,1)
function time(){
    return slider.value
}
   s = setInterval(randommove,time())
slider.addEventListener("input",timer)

function timer(){
    clearInterval(s)
   s =  setInterval(randommove,time())
    
}

reset.addEventListener("click",restart)

function restart(){
    location.reload()
}

container.addEventListener("click",follow)
cursor.addEventListener("click",win)
cursor.addEventListener("mouseout",not)

function follow(e){
    cursor.style.backgroundColor = "rgba(255, 0, 0, 0.568)"
    setTimeout(not,500)
    i--
    score.textContent = i
    
}

function win(e){
    cursor.style.backgroundColor = "rgba(172, 255, 47, 0.588)"
    i++
    score.textContent = i
    e.stopPropagation()

}
function not(){
    cursor.style.removeProperty("background-color")
  
}


function randommove(){

    x = Math.floor(Math.random()*480)
    y = Math.floor(Math.random()*480)

    cursor.style.top = y +"px"
    cursor.style.left = x +"px"
   
}
setInterval(deck,100)

function deck(){
    if (i<0){
        clearInterval(s)
        
        check.style.display = "flex"
        msg.innerText = "you lost "
    }
    else if(i==10){
        clearInterval(s)
        check.style.display = "flex"
        msg.textContent = `you won`
        
    }
}