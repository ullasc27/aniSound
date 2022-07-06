function playCorrectSound(randomValue){
    
    switch (randomValue) {
    
        case 'w':
            var cat =new Audio('sounds/Cat.mp3');
            cat.play();
            break;
        case 'a':
            var dog =new Audio('sounds/Dog.mp3');
            dog.play();
            break;
        case 's': 
            var cow =new Audio('sounds/Cow.mp3');
            cow.play();
            break;
        case 'd': 
            var lion =new Audio('sounds/Lion.mp3');
            lion.play();
            break;
        case 'f': 
            var goat =new Audio('sounds/Goat.mp3');
            goat.play();
            break;
        
        
        case 'Cat': 
                var catClick =new Audio('sounds/Cat.mp3');
                catClick.play();
                break;
        case 'Dog':
                var dogClick =new Audio('sounds/Dog.mp3');
                dogClick.play();
                break;
        case 'Cow': 
                var cowClick =new Audio('sounds/Cow.mp3');
                cowClick.play();
                break;
        case 'Lion': 
                var lionClick =new Audio('sounds/Lion.mp3');
                lionClick.play();
                break;
        case 'Goat': 
                var goatClick =new Audio('sounds/Goat.mp3');
                goatClick.play();
                break;
    
        default:
            console.log("Wrong key pressed or clicked")
            break;
    }
}


for (let button of document.querySelectorAll(".press")) {
    button.addEventListener("click", function () {
      var buttonInnerHtml = this.innerHTML;
      playCorrectSound(buttonInnerHtml);
      // button select => this
      const buttonScope = this;
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
      // add 'pressed' class
      buttonScope.classList.add("pressed");

      setTimeout(function () {
        buttonScope.classList.remove("pressed");
      }, 400);
      // set timer to remove 'pressed' class
    });
  }


document.addEventListener("keydown", function (event) {
    playCorrectSound(event.key);
    // buttonAnimation(event.key);
  })