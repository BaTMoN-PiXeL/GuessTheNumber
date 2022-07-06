var systemGuess = Math.ceil(Math.random()*100)
var count=0
function check(){
    var num = parseInt(document.getElementById('input').value)
    if(num === parseInt('') || num>100 || num<1){
        document.getElementById('res').innerHTML = "Invalid input."
        count-=1
    }
    else if((num-systemGuess) > 20){
        document.getElementById('res').innerHTML = "Your guess is too high."
    }
    else if((num-systemGuess) < 20 && (num-systemGuess) > 0){
        document.getElementById('res').innerHTML = "Your guess is a little high."
    }
    else if((systemGuess - num) > 20){
        document.getElementById('res').innerHTML = "Your guess is too low."
    }
    else if((systemGuess - num) < 20 && (systemGuess - num) > 0){
        document.getElementById('res').innerHTML = "Your guess is little low."
    }
    else if(num==systemGuess){
        document.getElementById('res').innerHTML = "Your guess is on point."
        count-=1
    }
    
    count+=1
    document.getElementById('count').innerHTML = "Number of tries: " + count
    
}