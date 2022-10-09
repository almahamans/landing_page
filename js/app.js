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
*/
//Creating li list items with its content
  let item;
  for(let i=1; i<=4; i++){
    item = document.createElement('li');
    item.id = `list-${i}`;
    item.innerHTML=`Section ${i}`;
    item.className = 'menu__link';
    document.getElementById('navbar__list').appendChild(item);
  }
//scrolling into sections smoothly
  let listid1 = document.getElementById('list-1');
  let sectionid1 =document.getElementById('section1');
  listid1.addEventListener('click', function sec1(n) {
  n.preventDefault();
  sectionid1.scrollIntoView({behavior: "smooth"})
  sectionid1.classList.add("active")}
  );

  let listid2 = document.getElementById('list-2');
  let sectionid2 =document.getElementById('section2');
  listid2.addEventListener('click', function sec2(n) {
  n.preventDefault();
   sectionid2.scrollIntoView({behavior: "smooth"})
   sectionid2.classList.add("active")}
  );

  let listid3 = document.getElementById('list-3');
  let sectionid3 =document.getElementById('section3');
  listid3.addEventListener('click', function sec3(n) {
  n.preventDefault();
  sectionid3.scrollIntoView({behavior: "smooth"})
  sectionid3.classList.add("active")}
  );

  let listid4 = document.getElementById('list-4');
  let sectionid4 =document.getElementById('section4');
  listid4.addEventListener('click', function sec4(n){
  n.preventDefault();
  sectionid4.scrollIntoView({behavior: "smooth"})
  sectionid4.classList.add("active")}
  );
//highlight a section when scrolling by user
window.addEventListener('scroll', scroll => {
  let sections = document.querySelectorAll('section')
    sections.forEach(section => {
    if(section.getBoundingClientRect().top >= -500 && section.getBoundingClientRect().top <= 200)
      section.classList.add("active");
    else
       section.classList.remove("active");  
    }
    )})
