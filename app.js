/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 BY: Andrew Ashraf Adeeb
*/

const unList = document.getElementById("navbar_list");
const sectionNum = document.getElementsByClassName("sections");
const ulFrag = document.createDocumentFragment();
const elements = document.querySelectorAll("section");
function showNav () {

  scrollSmoothly=(event)=>{
     event.preventDefault();
     const section = document.querySelector(event.target.getAttribute("sec-id"));
     section.scrollIntoView({behavior : 'smooth'});
 }

  for(const section of elements) {
        const id          = section.id;
        const sectionName = section.getAttribute("data-nav");
        const newLi       = document.createElement("li");
        const anchor      = document.createElement("a");
        anchor.setAttribute("href",`#${id}`);
        anchor.setAttribute("class","menu__link");
        anchor.setAttribute("sec-id",`#${id}`);
        anchor.textContent = sectionName;
        anchor.addEventListener("click",scrollSmoothly);
        newLi.appendChild(anchor);
        ulFrag.appendChild(newLi);
     }
unList.appendChild(ulFrag);
  }

showNav();

window.addEventListener("scroll",function() {
    const navSections = unList.querySelectorAll("li a");

    navSections.forEach((link)=>{
        const id       = link.getAttribute("sec-id");
        const sect     = document.querySelector(id);
        const location = sect.getBoundingClientRect();
        const ref      = 300;

        if(location.top <=ref & location.bottom >= ref ) {
            link.style.backgroundColor="#0d024f";
        }
        else {
            link.style.backgroundColor="#FFF";
          }
    });
});
