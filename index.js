// =============== navber section start=======================
let hemderger = document.getElementById('hemderger');
let navmanu = document.getElementById('nav-manu');
let closemanu = document.getElementById('close');
let navlink = document.querySelectorAll('.navlink');
navlink.forEach(element => {
    element.addEventListener('click',()=>{
        navmanu.classList.add('hidden')
    })
});

hemderger.addEventListener('click',()=>{
    navmanu.classList.remove('hidden');
});
closemanu.addEventListener('click',()=>{
    navmanu.classList.add('hidden');
})
// =============== navber section end=======================

// ++++++++++++++++menu section+++++++++++++++++++
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item_wrap")
const foods = document.querySelectorAll(".food")
const snacks = document.querySelectorAll(".snack")
const beverages = document.querySelectorAll(".beverage")

tabs.forEach(tap =>{
    tap.addEventListener("click",() =>{
        tabs.forEach(tap =>{
            tap.classList.remove("active")
        })
        tap.classList.add("active");

        const tabval = tap.getAttribute('data-tabs');
        
        all.forEach(item =>{
            item.style.display ='none'
         });

        if(tabval == 'food'){
            foods.forEach(item =>{
                item.style.display = 'block'
             })
        }else if(tabval == 'snack'){
            snacks.forEach(item =>{
                item.style.display = 'block'
             });
        }else if(tabval == 'beverage'){
            beverages.forEach(item =>{
                item.style.display = 'block'
             });
        }
        else{
            all.forEach(item =>{
                item.style.display = 'block'
             });
        }

    })
})
// ++++++++++++++++menu section end+++++++++++++++++++


// ===============  scroll up  section start=======================
const scrollUp = ()=>{
  const scollUpbtn = document.getElementById('scrollbtn');
   if(this.scrollY >= 250){
    scollUpbtn.classList.remove('-bottom-1/2');
    scollUpbtn.classList.add('bottom-4');
   }else{
    scollUpbtn.classList.add('-bottom-1/2');
    scollUpbtn.classList.remove('bottom-4');
   }

}
addEventListener('scroll',scrollUp)


const header = ()=>{
  const headerbtn = document.getElementById('headerbtn');
   if(this.scrollY >= 50){
   headerbtn.classList.add('border-b','border-secondaryColor');
   }else{
    headerbtn.classList.remove('border-b','border-secondaryColor');
   }

};
addEventListener('scroll',header)

// +++++++++++++start dark mode+++++++++++++
 const html = document.querySelector('html');
 const themebtn = document.getElementById("theme-toggle");

 if(localStorage.getItem("mode")== "dark"){
      darkMode();
 }else{
  lightMode();
 }
   
 themebtn.addEventListener('click', (e)=>{
  if(localStorage.getItem("mode")== "light"){
     darkMode();
  }else{
    lightMode();
  }
 })
//  darkmode
 function darkMode(){
  html.classList.add("dark");
  themebtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode","dark");
 }
// lightmode
function lightMode(){
  html.classList.remove("dark");
  themebtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode","light");
 }

// active link start
const activeLink = ()=>{
  const sections = document.querySelectorAll('section');
  const navLink = document.querySelectorAll('.navlink');

  let current = 'home';
  sections.forEach(section =>{
    const sectionTop = section.offsetTop;

    if(this.scrollY >= sectionTop - 60){
         current = section.getAttribute('id');

    }
  });

  navLink.forEach((itme)=>{
    itme.classList.remove('text-secondaryColor');
    if(itme.href.includes(current)){
      itme.classList.add('text-secondaryColor');
    }

  })

}
window.addEventListener('scroll',activeLink)
// active link end
// =======================
// scroll reveal animation start
const sr= ScrollReveal({
  origin: 'top',
  distance:'60px',
  duration:2500,
  delay:300
})
sr.reveal(".home_img");
sr.reveal(".home_content",{origin:'bottom'});
sr.reveal(".category_card",{origin:'left'});
sr.reveal(".promo_card1",{origin:'right'});
sr.reveal(".promo_card2",{origin:'left'});
sr.reveal(".about_ing",{origin:'top'});
sr.reveal(".about_card",{origin:'bottom'});
sr.reveal(".item_wrap",{origin:'right'});
sr.reveal(".swiper",{origin:'left'});
sr.reveal(".contact",{origin:'bottom'});
sr.reveal(".footer",{origin:'top'});


// swiper js ++++++++++++++++++++++++++++++
const swiper = new Swiper('.swiper', {
 speed: 400,
 spaceBetween: 100,
 autoplay: {
    delay: 3000,
    disableOnInteraction: false
 },
 pagination: {
    el: '.swiper-pagination',
    clickable: true
 },
 grabCursor: true,
 breakpoints: {
    640: {
       slidesPerView: 1,
    },
    768: {
       slidesPerView: 2,
    },
    1024: {
       slidesPerView: 3,
    }
 }
});