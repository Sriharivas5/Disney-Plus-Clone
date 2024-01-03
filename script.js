let cardimages=document.querySelectorAll(".cardImage")
let pre=document.querySelectorAll(".pre")
let nxt=document.querySelectorAll(".nxt")

cardimages.forEach((item,i)=> {
    let carddimensions = item.getBoundingClientRect();
    let cardwidth=carddimensions.width;
    nxt[i].addEventListener("click",()=>{
        item.scrollLeft +=cardwidth;
    })
    pre[i].addEventListener("click",()=>{
        item.scrollLeft -=cardwidth;
    })
   
});

let channelImage=document.querySelectorAll(".channelImage")
let PRE=document.querySelectorAll(".PRE")
let NXT=document.querySelectorAll(".NXT")
channelImage.forEach((item,i)=> {
    let carddimensions = item.getBoundingClientRect();
    let cardwidth=carddimensions.width;
    NXT[i].addEventListener("click",()=>{
        item.scrollLeft +=cardwidth;
    })
    PRE[i].addEventListener("click",()=>{
        item.scrollLeft -=cardwidth;
    })
   
});




const carouselItems =document.querySelectorAll(".slide") 
let i = 1;
setInterval(() => {
carouselItems.forEach((item) => {

    if(i < carouselItems.length){
     item.style.transform = `translateX(-${i*100}%)`
    }
   })
 
 
   if(i < carouselItems.length){
     i++;
   }
   else{
     i=0; 
   }
 },3000)
       