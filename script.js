let menus=document.querySelector(".menu-btn")
let overlay=document.querySelector(".overlay")
let overlay2=document.querySelector(".overlay2")
let video=document.querySelector(".video-div")
let hero=document.querySelector(".hero")

let boxes=document.querySelectorAll(".box")
 
let popup=document.querySelectorAll(".popup-img");

let dot=document.querySelector(".dot");
let page1=document.querySelector(".page1");

let play=document.querySelector(".play");
let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");
let box4=document.querySelector(".box4");

let flag=1;
menus.addEventListener("click",()=>{
    if(flag){
        overlay.style.top="0%"
        overlay.style.rotate="5deg"
        menus.textContent="Close"
        overlay2.style.rotate="-5deg"
        flag=0;


    }
    else{
        overlay.style.top="-100%"
        overlay.style.rotate="0deg"
        menus.textContent="Menu"
        overlay2.style.rotate="-5deg"
        flag=1;
    }

})


document.addEventListener("mousemove",(e)=>{
    video.style.top=e.clientY+"px"
    video.style.left=e.clientX+"px"
    video.style.transition="linear 0.5s"
    video.style.transform="translate(5%,3%)";       
    
})

boxes.forEach((box)=>{
    let video2=box.querySelector(".videodiv2")
    let image=box.querySelector(".boximg")

    box.addEventListener("mouseenter",()=>{
       
            video2.style.visibility = "visible";
            image.style.filter="blur(6px)"
            box.style.transition="all ease 0.3s"
            box.style.height="98%"
            box.style.width="47.5%"
    })

    box.addEventListener("mouseleave",()=>{
    
            video2.style.visibility="hidden" ;
            image.style.filter="blur(0px)";
            box.style.height="100%";
            box.style.transition="all ease 0.3s"
            box.style.width="48%";
    
    })

})





document.addEventListener("mousemove",(e)=>{
    dot.style.top=e.clientY+"px"
    dot.style.left=e.clientX+"px"
    dot.style.transition="linear 0.5s"
    dot.style.transform="translate(15%,8%)";     
})

page1.addEventListener("mouseenter",()=>{
    dot.style.opacity="0";


})
page1.addEventListener("mouseleave",()=>{
    dot.style.opacity="1";
  
})

play.addEventListener("mouseover",()=>{
    dot.style.height="45px";
    dot.style.width="180px";
    dot.style.borderRadius="10px";
    dot.style.rotate="-10deg";
    dot.innerText="PORTFOLIO";
      dot.style.transition="all ease 0.3s 4s";
    
})
play.addEventListener("mouseout",()=>{
    dot.style.height="15px";
    dot.style.width="15px";
    dot.textContent="";
    
})

box1.addEventListener("mouseover",()=>{
    dot.style.height="45px";
    dot.style.width="180px";
    dot.style.borderRadius="10px";
    dot.style.rotate="-10deg";
    dot.innerText="MATERA";
    
})
box1.addEventListener("mouseout",()=>{
    dot.style.height="15px";
    dot.style.width="15px";
    dot.textContent="";
    
})
box2.addEventListener("mouseover",()=>{
    dot.style.height="45px";
    dot.style.width="180px";
    dot.style.borderRadius="10px";
    dot.style.rotate="-10deg";
    dot.innerText="CHANCE";
    
})
box2.addEventListener("mouseout",()=>{
    dot.style.height="15px";
    dot.style.width="15px";
    dot.textContent="";
    
})
box3.addEventListener("mouseover",()=>{
    dot.style.height="45px";
    dot.style.width="180px";
    dot.style.borderRadius="10px";
    dot.style.rotate="-10deg";
    dot.innerText="SILVER";
    
})
box3.addEventListener("mouseout",()=>{
    dot.style.height="15px";
    dot.style.width="15px";
    dot.textContent="";
    
})
box4.addEventListener("mouseover",()=>{
    dot.style.height="45px";
    dot.style.width="220px";
    dot.style.borderRadius="10px";
    dot.style.rotate="-10deg";
    dot.innerText="INTRAMUROS";
    
})
box4.addEventListener("mouseout",()=>{
    dot.style.height="15px";
    dot.style.width="15px";
    dot.textContent="";
    
})

// let h1=document.querySelector("span");
// let images=document.querySelectorAll(".page3 img");


// let index = 0;
// let interval;

// h1.addEventListener("mouseenter", () => {

//     interval = setInterval(() => {

//         images.forEach((img) => {
//             img.style.transition = "none";
//             img.style.opacity = "0";
//             img.style.transform = "translateY(100px)";
//         });

//         let current = images[index];

        
//         current.offsetHeight;

//         current.style.transition = "all 0.5s ease";
//         current.style.opacity = "1";
//         current.style.transform = "translateY(0px)";

//         index++;

//         if(index >= images.length){
//             index = 0;
//         }

        

//     }, 400);

// });

// h1.addEventListener("mouseleave", () => {

//     clearInterval(interval);

//     images.forEach((img) => {
//         img.style.opacity = "0";
//     });

// });


let detail_images = document.querySelectorAll('.detail-img');
let playground_images = document.querySelectorAll('.playground-img');

let udetail = document.querySelector('#detail');
let uplayground = document.querySelector('#playground');

let detail_interval;
let playground_interval;
let currentIndex = 0; 

udetail.addEventListener('mouseenter', () => {
    playImageSequence(detail_images); 

    detail_interval = setInterval(() => {
        playImageSequence(detail_images);
    }, 500); 
});

udetail.addEventListener('mouseleave', () => {
    clearInterval(detail_interval);
    detail_images.forEach((img) => {
        img.style.transition = 'none'; 
        img.style.visibility = 'hidden'; 
        img.style.zIndex = '1'; 
        img.style.transform = 'translateY(10%) rotate(0deg)'; 
    });
    currentIndex = 0; 
});
uplayground.addEventListener('mouseenter', () => {
    playImageSequence(playground_images); 

    playground_interval = setInterval(() => {
        playImageSequence(playground_images);
    }, 500); 
});

uplayground.addEventListener('mouseleave', () => {
    clearInterval(playground_interval);
    playground_images.forEach((img) => {
        img.style.transition = 'none'; 
        img.style.visibility = 'hidden'; 
        img.style.zIndex = '1'; 
        img.style.transform = 'translateY(10%) rotate(0deg)'; 
    });
    currentIndex = 0; 
});

function playImageSequence(images) {
    // console.log(images);
    let currentImg = images[currentIndex];
    images.forEach((img) => {
        if (img !== currentImg) {
            img.style.zIndex = '9'; 
        }
    });
    currentImg.style.transition = 'all 0.3s ease'; 
    currentImg.style.visibility = 'visible';
    currentImg.style.transform = 'translateY(-10%) rotate(-3deg)';
    currentImg.style.zIndex = '10'; 
    let pastIndex = (currentIndex + images.length+1) % images.length;
    let pastImage = images[pastIndex];
    pastImage.style.transition = 'all 0s';
    pastImage.style.visibility = 'hidden';
    pastImage.style.transform = 'translateY(10%) rotate(0deg)';

    currentIndex = (currentIndex + 1) % images.length;
}








