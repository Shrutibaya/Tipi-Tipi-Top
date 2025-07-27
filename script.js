let box= document.querySelector("textarea");
console.log(box);
let gencolor=document.querySelector("button");
console.log(gencolor);
let para=document.querySelector("p");
gencolor.onclick = function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    if(r==0 && b==0 && g==0){
        box.style.color='white';
    }
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    para.innerText = `Your color is rgb(${r}, ${g}, ${b})`;
};