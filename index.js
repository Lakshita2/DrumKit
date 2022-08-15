var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {
  var name;
  switch (key) {
    case "w":
      name= "tom-1"
      break;

    case "a":
      name= "tom-2"

      break;

    case "s":
      name= "tom-3"

      break;

    case "d":
      name= "tom-4"

      break;

    case "j":
      name= "snare"

      break;

    case "k":
      name= "crash"

      break;

    case "l":
      name= "kick-bass"
      break;


    default: console.log(key);

  }
  var audio = new Audio("sounds/" + name + ".mp3"); 
  audio.play();
}

function buttonAnimation(clickedkey){
   document.querySelector("." + clickedkey).classList.add("pressed")

   setTimeout( () =>{
   document.querySelector("." + clickedkey).classList.remove("pressed")

   }, 100)


}

