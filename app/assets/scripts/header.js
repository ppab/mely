const mobileNav=()=>{



var body=document.querySelector('.body');
var mobileNav=document.querySelector('.menu-header__nav__mobile');
var menuToogle=document.querySelector('.mobile-menu-toogle');
var open= document.querySelector('.mobile-menu-toogle__open');
var close= document.querySelector('.mobile-menu-toogle__close');
var contactanos=document.querySelector('.mobile-nav__contactanos');

menuToogle.addEventListener("click", function(){
    mobileNav.classList.toggle('menu-header__nav__mobile--hidden')
    open.classList.toggle('mobile-menu-toogle__open--active');
    close.classList.toggle('mobile-menu-toogle__close--active');
    body.classList.toggle('no-scroll');

    contactanos.addEventListener("click",function(){
        mobileNav.classList.toggle('menu-header__nav__mobile--hidden')
        open.classList.toggle('mobile-menu-toogle__open--active');
        close.classList.toggle('mobile-menu-toogle__close--active');
        body.classList.toggle('no-scroll');
    })

});




   


}
export default mobileNav;