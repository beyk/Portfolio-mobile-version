
const hamburger = document.querySelector(".ham");  
const navsub = document.querySelector(".desk-nav");  
hamburger.addEventListener('click', () => {  
 hamburger.classList.toggle("change")  
 navsub.classList.toggle("nav-change")  
});  
function showMenu(){
    hamburger.classList.replace("change");
}