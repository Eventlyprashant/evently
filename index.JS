window.addEventListener('scroll',function(){
    let navbar= document.querySelector('.navbar');
    if(window.scrollY > 20){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})

let burger=document.querySelector('.burger')
let nav=document.querySelector('.nav')
let navbaritems=document.querySelector('.navbar-items')

burger.addEventListener('click',()=>{
    navbaritems.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})