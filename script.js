let startElement=document.getElementById("start")
let stopElement=document.getElementById("stop")
let resetElement=document.getElementById("reset")
let switchElement=document.getElementById("switch")
let displyElemet=document.getElementById("display")

let intervelid=null
startElement.onclick=function(){
    let counter=0;
     intervelid=setInterval(function(){
        counter=counter+1
        
        displyElemet.value=counter
    },1000)
    
}

stopElement.onclick=function(){
    clearInterval(intervelid)  
}
resetElement.onclick=function(){
    clearInterval(intervelid)
    displyElemet.value=null
}