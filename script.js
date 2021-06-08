// const navicon = document.getElementById("menu")
// function dropdown(){
//     if(navicon.className == "right-nav"){
//         navicon.className = "show-nav-dropdown"; 
//     }
//     else{
//         navicon.className += "right-nav";
//     }
// }
const hamburger = document.getElementById("nav-icon")
const menuItem = document.getElementById("menu")

hamburger.addEventListener('click',()=> {
    menuItem.classList.toggle("show-nav-dropdown")
})