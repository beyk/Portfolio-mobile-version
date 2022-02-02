const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuLink = document.querySelectorAll('.menu-Links');

function show (){
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close (){
  mainMenu.style.top = '-100%';
  mainMenu.style.display = 'none';
}

openMenu.addEventListener ('click', show);
closeMenu.addEventListener ('click', close);

for (let i = 0; i < menuLink.length; i += 1) {
  menuLink[i].addEventListener ('click', close);
  }