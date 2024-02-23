const menuIcon = document.getElementById('menu-icon')
const closeIcon = document.getElementById('close-icon')
const navUl = document.querySelector('.nav-ul')
console.log(menuIcon);
console.log(closeIcon);
console.log(navUl);

menuIcon.addEventListener('click', () =>{
    navUl.classList.add('active')
    closeIcon.style.display='block'
})
closeIcon.addEventListener('click', ()=>{
    navUl.classList.remove('active')
})
