const change = document.querySelectorAll(".box")
const body = document.querySelector("body")
change.forEach( function(changes){
  changes.addEventListener("click",function(e){
    if(e.target.id === 'red'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'black'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'orange'){
      body.style.backgroundColor = e.target.id
    }
  })
})