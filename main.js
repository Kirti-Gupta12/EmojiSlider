const slider = document.querySelector("input");
const bar=document.querySelector(".progress-bar");
const thumb=document.querySelector(".thumb");
const slideIcon=document.querySelector(".slide-icon");
slider.oninput = ()=>{
    let value=slider.value;
    thumb.style.left=value + '%';
    bar.style.width=value + '%';
    if(value<6.25){
        slideIcon.style.marginTop="0px";
    }
    if(value>=6.25){
        slideIcon.style.marginTop="-150px";
    }
    if(value>=12.5){
        slideIcon.style.marginTop="-300px";
    }
    if(value>=18.75){
        slideIcon.style.marginTop="-450px";
    }
    if(value>=25){
        slideIcon.style.marginTop="-600px";
    }
    if(value>=31.25){
        slideIcon.style.marginTop="-750px";
    }
    if(value>=37.5){
        slideIcon.style.marginTop="-900px";
    }
    if(value>=43.75){
        slideIcon.style.marginTop="-1050px";
    }

    if(value>=50){
        slideIcon.style.marginTop="-1200px";
    }
    if(value>=56.25){
        slideIcon.style.marginTop="-1350px";
    }
    if(value>=62.5){
        slideIcon.style.marginTop="-1500px";
    }
    if(value>=68.75){
        slideIcon.style.marginTop="-1650px";
    }
    if(value>=75){
        slideIcon.style.marginTop="-2250px";
    }
    if(value>=81.25){
        slideIcon.style.marginTop="-3250px";
    }
    if(value>=87.5){
        slideIcon.style.marginTop="-4200px";
    }
    if(value>=93.75){
        slideIcon.style.marginTop="-4500px";
    }
}