$(document).ready(function(){
   //console.log("ready");
});

var count;
var timeOut;
function increment(){
     let time = document.getElementById("setTime").value;
     time--;
     document.getElementById("setTime").value = time;
     if (time <= 0){
       console.log("time up");
       document.getElementById("setTime").value = 0;
       setTimeout(function(){
            document.getElementById("setTime").value = 25;//resets to 25 min
            console.clear();
            console.log("Reset!");
         },5000);  
      alert("TIME UP");     
     }
}

document.getElementById("timer").addEventListener("click",function(){
     console.log(document.getElementById("setTime").value); //works - initial log of time
     clearInterval(count);
     count = setInterval(increment, 60000);
     setTimeout(timeOut=(function(){clearInterval(count);}),document.getElementById("setTime").value*60001)
     //for testing having it every second.  Need to change to 60000 for minutes.
                 
});
       
document.getElementById("reset").addEventListener("click",function(){
    document.getElementById("setTime").value = 25;//resets to 25 min
    console.clear();
    console.log("Reset!");
    clearInterval(count);
    clearTimeout(timeOut);
  });