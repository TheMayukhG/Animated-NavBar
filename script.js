//Built and Improved under creativity of Mayukh
// inspiration from 
// selecting Items
const body = document.body;
const menu = body.querySelector(".menu");// the whole menu
const menuItems = menu.querySelectorAll(".menu__item");//the options of the menu
const menuBorder = menu.querySelector(".menu__border");//the design on top
let activeItem = menu.querySelector(".active");

menuItems.forEach((item) => {
    item.addEventListener("click", () => clickItem(item)); // calling the function clickitem when an item is clicked
})
function clickItem(item) {//It is activated when an option is clicked

    
    
    if (activeItem) {
        activeItem.classList.remove("active");// when a new item is clicked the existing active will be removed
    }

    
    item.classList.add("active");//this one adds the class active to the new item that is clicked
    activeItem = item; // this says that the item we are working with is the active item until the other one is clicked
    positionBorder(activeItem, menuBorder);//this calculates out the position of the menu borde to assign it, takes in parameter
    
    
}

function positionBorder(element, menuBorder) {

    const boxmodel = element.getBoundingClientRect(); //getting all the style info of the clicked item
    const positionX = boxmodel.left - menu.offsetLeft + "px";
    menuBorder.style.left = positionX;

}
window.onresize = ()=>{
    positionBorder(activeItem, menuBorder);
}
positionBorder(activeItem, menuBorder);
