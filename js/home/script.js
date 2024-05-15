function openNav() {
    document.getElementById("mobile-nav").style.display = "block";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "block";
    document.getElementById("mobile-nav").style.transition = "display 0.50s";
}

function closeNav() {
    document.getElementById("mobile-nav").style.display = "none";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("mobile-nav").style.transition = "display 0.50s";
}


const left_arrows = document.querySelectorAll(".left");
const right_arrows = document.querySelectorAll(".right");
const movieLists = document.querySelectorAll(".main-movie-list");
var left_length = new Array(left_arrows.length);


for (var i = 0; i < left_length.length; i++){
  left_length[i] = 0;
}

console.log(left_length);


left_arrows.forEach((left_arrows, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    left_arrows.addEventListener("click", () => {
      const ratio = Math.floor(window.innerWidth / 270);
      if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
        movieLists[i].style.transform = `translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value - 270
        }px)`;
        right_arrows[i].style.opacity= '1';
        clickCounter++;
        left_length[i] -= 270;
        console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value-270)
        console.log("left: "+ left_length[i])
        
        if (left_length[i] <= (-(itemNumber-4) * 270)) {
          left_arrows.style.opacity= '0.2';
        }
      }else if(clickCounter <= 21 && clickCounter >=22){
        movieLists[i].style.transform = `translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value - 270
        }px)`;
        right_arrows[i].style.opacity= '1';
        if (left_length[i] <= (-(itemNumber-4) * 270)) {
          left_arrows.style.opacity= '0.2';
        }
      }else if(left_length[i] > (-(itemNumber-6) * 270) ){
        if(left_length[i] - (-(itemNumber-6) * 270) < 270 ){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value - (left_length[i] - (-(itemNumber-6) * 270))
              }px)`;
              right_arrows[i].style.opacity= '1';
            console.log("left: "+ left_length[i])
            console.log("leftcc: "+ (-(itemNumber-6) * 270))
            left_length[i] -= (left_length[i] - (-(itemNumber-6) * 270));
            if (left_length[i] <= (-(itemNumber-4) * 270)) {
              left_arrows.style.opacity= '0.2';
            }
        }else{
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value - 270
              }px)`;
              right_arrows[i].style.opacity= '1';
              left_length[i] -= 270;
            console.log("left: "+ left_length[i])
            console.log("leftcc: "+ (-(itemNumber-6) * 270))
            // left_length -= 270;
            // if(left_length == (-(itemNumber-6) * 270)){
            //     left_arrows.style.opacity= '0.2';
            // }
            }
      } else {
            left_arrows.style.opacity = '0.2';
      }
    });

    if(left_length[i] >= -5300){
        left_arrows.style.opacity= '1';
    }
    // left_arrows[i].style.opacity = '0.2';

    // console.log()

    // console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value )

    // console.log( movieLists[i].querySelectorAll("img").length)
    // console.log(Math.floor(window.innerWidth / 270));
});



// if(left_length <= -5300){
//     console.log( left_arrows[1]);
// }



right_arrows.forEach((right_arrows, i) => {
  right_arrows.style.opacity= '0.2';
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    right_arrows.addEventListener("click", () => {
      if (left_length[i] < 0) {
        left_arrows[i].style.opacity = '1';
        movieLists[i].style.transform = `translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value + 270
        }px)`;
        clickCounter++;
        left_length[i] += 270;
        // left_arrows.style.opacity = '1';
        console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value+270)
        console.log("right: "+ left_length[i])
        // console.log(left_arrows[i]);
        if(left_length[i] >= 0) {
          right_arrows.style.opacity= '0.2';
        }
      }else{
        right_arrows.style.opacity= '0.2';
      }
    //   else if(clickCounter <= 21 && clickCounter >=22){
    //     movieLists[i].style.transform = `translateX(${
    //         movieLists[i].computedStyleMap().get("transform")[0].x.value + 270
    //     }px)`;
    //   }else if(left_length >= (-(itemNumber-6) * 270)){
    //     movieLists[i].style.transform = `translateX(${
    //         movieLists[i].computedStyleMap().get("transform")[0].x.value + 270
    //       }px)`;
          
    //     console.log("left: "+ left_length)
    //     console.log("leftcc: "+ (-(itemNumber-5) / 270))
    //     left_length += 270;
    //     } else {
    //     // movieLists[i].style.transform = "translateX(0)";
    //     // clickCounter = 0;
    //   }
    });

    // console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value )

    // console.log( movieLists[i].querySelectorAll("img").length)
    // console.log(Math.floor(window.innerWidth / 270));
});


function openSearch(){
    document.getElementById("main-search").style.display = "inline";
    document.getElementById("main-search").style.transition = "display 0.50s";
}



function closeSearch(){
  document.getElementById("main-search").style.display = "none";
  document.getElementById("main-search").style.transition = "display 0.50s";
}
