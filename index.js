window.onload = function(){
  
  
const barsButton = document.getElementById("bars-navi");
const nav = document.getElementById("nav-id");
let clicks = 0;


function animateNav(){
  if (clicks = 0){
    for (i=0; i<100; i++){
    nav.style.height = i + "vh";
  }
    clicks = 1;
  }else{
    for (i=100; i>10; i--){
    nav.style.height = i + "vh";
  }
    clicks = 0;
  }
}
console.log(nav);
nav.addEventListener("click", animateNav);

/*function animateNavUp(){
  for (i=100; i>10; i--){
    nav.style.height = i + "vh";
  }
  clicks = 0;
}*/

/*if (clicks == 0){
  console.log(barsButton);
  console.log(nav);
  barsButton.addEventListener("click", animateNav);
  console.log(clicks);
}else{
  barsButton.addEventListener("click", animateNavUp);
}*/



};