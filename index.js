var numberOfDrum = document.querySelectorAll(".drum").length;

for( var i = 0 ; i < numberOfDrum ; i++){
  
 //for mouse
   
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
     var buttoninnerHTML = this.innerHTML;
     makesSound(buttoninnerHTML);
     buttonAnimation(buttoninnerHTML);
     
    });
  }
// for keyboard

 document.addEventListener("keypress", function(event) {
     makesSound(event.key); 
     buttonAnimation(event.key);
});

function makesSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
     var tom2 = new Audio('sounds/tom-2.mp3');
     tom2.play();
     break;
    case "s":
     var tom3 = new Audio('sounds/tom-3.mp3');
     tom3.play();
     break;
    case "d": 
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;
    case "j":
     var snare = new Audio('sounds/snare.mp3');
     snare.play();
    break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
   break;
      case "l":
     var kickbass = new Audio('sounds/kick-bass.mp3');
     kickbass.play(); 
    default: console.log(buttoninnerHTML);
  }
}
 
function buttonAnimation (currentkey){
 var activeButton = document.querySelector("." + currentkey);
 activeButton.classList.add("pressed");
 setTimeout(function(){
    activeButton.classList.remove("pressed");
 }, 200);
}

