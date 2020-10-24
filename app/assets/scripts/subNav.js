
const subNav= () => 
{

    const buttonParent = document.querySelectorAll('.subnav__button');
    

    buttonParent.forEach(element => {
        element.addEventListener("click", function() {

            element.nextElementSibling.classList.toggle('subnav__items_container--show');
            element.firstElementChild.classList.toggle('subnav__arrow-down--not-shown');
            element.lastElementChild.classList.toggle('subnav__arrow-up--shown');
          });
        });
    
}



export default subNav;