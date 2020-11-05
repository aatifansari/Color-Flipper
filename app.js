const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
   const randamnumber=getRandamNumbers();
   console.log(randamnumber);
   document.body.style.backgroundColor = colors[randamnumber];
   color.textContent = colors[randamnumber];
});

function getRandamNumbers(){
    return Math.floor(Math.random()*colors.length);
}