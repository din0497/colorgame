var ns = 6;
var colors = generate(ns);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var cd = document.querySelector("#Cd");
var notif = document.querySelector("#message");
var h1  = document.querySelector("h1");
var reset = document.querySelector("#reset")
var  modeButtons = document.querySelectorAll(".mode")

for(var i = 0; i < modeButtons.length; i++){ 
    modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected")   
    modeButtons[1].classList.remove("selected")
     this.classList.add("selected")
     if(this.textContent === "Easy"){
         console.log(this.textContent);
         ns = 3;
     }else{
        console.log(this.textContent);
        ns = 6; 
        squares[3].style.display = "block"
        squares[4].style.display = "block"
        squares[5].style.display = "block"
     }
     reset1();
    })
}

function reset1(){
    colors = generate(ns); 
    pickedColor = pickColor();
    cd.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            
            squares[i].style.backgroundColor = colors[i]
        } else{squares[i].style.display = "none";

        }
        
    }
    h1.style.backgroundColor= "steelblue"
    notif.textContent = null
}

cd.textContent = pickedColor;

// easybtn.addEventListener("click", function(){
//     hardbtn.classList.remove("selected")
//     easybtn.classList.add("selected")
//     ns = 3;
//     colors = generate(ns);
//     pickedColor = pickColor();
//     cd.textContent = pickedColor;
   
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i]
//             squares[i].style.display = "block"
//         }else{
//             squares[i].style.display = "none"
//         }
          
//        }
// })

// hardbtn.addEventListener("click", function(){
//     hardbtn.classList.add("selected")
//     easybtn.classList.remove("selected")
//     ns = 6;
//     colors = generate(ns);
//     pickedColor = pickColor();
//     cd.textContent = pickedColor;
//     colors = generate(3);
//     pickedColor = pickColor();
//     cd.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i]
//             squares[i].style.display = "block"
       
//     }
// })

reset.addEventListener("click", function(){
    reset1()
    // colors = generate( ns); 
    // pickedColor = pickColor();
    // cd.textContent = pickedColor;
    // for(var i = 0; i < squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i]
    // }
    // h1.style.backgroundColor= "steelblue"
    // notif.textContent = null
})

for(var i = 0; i < squares.length; i++){
    // initial colors to squares
    squares[i].style.backgroundColor = colors[i]
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor){
            notif.textContent = "Correct!" 
            reset.textContent = "Play Again!"
            changeColors(clickedColor);
            h1.style.background = clickedColor
        }else{
           this.style.background = "#232323";
           notif.textContent = "Try again!"
        }
        
    })
}

function changeColors(color){
    for(var i =0; i < squares.length; i++){
       squares[i].style.background = color; 
    }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

function generate(num){
    var arr = []
    for(i = 0; i < num; i++){
     arr.push(randomColor())
    }
    return arr
}

function randomColor(){
 var r = Math.floor(Math.random() * 256);
 var g = Math.floor(Math.random() * 256);
 var b = Math.floor(Math.random() * 256);
 
 return "rgb(" + r + ", " + g + ", " + b + ")"
}


