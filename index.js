window.onload = function(){
  
  
const barsButton = document.getElementById("bars-navi");
const nav = document.getElementById("nav-id");
const navUl = document.querySelector(".nav-ul");
let clicks = 0;
let height = 11;
console.log(navUl);

function animateNav(){
  if (clicks == 0){
    height = 11;
    clicks = 1;
    var dropDown = setInterval(frame, 10);
    function frame(){
      if (height == 100){
        clearInterval(dropDown);
        navUl.style.display = "flex";
        navUl.style.flexDirection = "column";
        navUl.style.alignItems = "center";
        navUl.style.justifyContent = "center";
      }else{
        height++;
        nav.style.height = height + "vh";
      }
    }
  }else{
    height = 100;
    nav.style.height = "100vh"
    clicks = 0;
    var bringUp = setInterval(frame, 10);
    function frame(){
      if (height == 11){
        clearInterval(bringUp);
        navUl.style.display = "none";
      }
      else{
        navUl.style.display = "none";
        height--;
        nav.style.height = height + "vh";
      }
    }
  }
}

barsButton.addEventListener("click", animateNav);



};