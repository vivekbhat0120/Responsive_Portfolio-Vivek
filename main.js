/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When we click on each nav__link, we remove the show-menu class
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header') }

window.addEventListener('scroll', blurHeader)



/*=============== EMAIL JS ===============*/


const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

      const sendEmail = (e) =>{
        e.preventDefault()

        //   service id -- template -- #form -- publickey 
        emailjs.sendForm('service_g2f9dh7','template_6uu0oeg','#contact-form','EfF1QtQuB1UbzyxyU')
          .then(() =>{
              // show message
              contactMessage.textContent = 'Message sent successfully ✅'

            //   remove message after 5 sec
              setTimeout(() =>{
                  contactMessage.textContent = ''
              }, 5000)

            //   clear input field 
              contactForm.reset()

            }, () =>{
                // show error message
                contactMessage.textContent = 'Something went wrong ❌'
            })
      }

      contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 560 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrolldown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),

              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrolldown > sectionTop && scrolldown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data, .experience, .skills, .contact__container`)
sr.reveal(`.home__img`, {delay: 600})
sr.reveal(`.home__scroll`, {delay: 600})
sr.reveal(`.work__card, .services__card`, {intervaln: 100})
sr.reveal(`.about__content`, {origin: 'right'})
sr.reveal(`.about__img`, {origin: 'left'})
/*=============== DARK MODE  ===============*/
// document.addEventListener('DOMContentLoaded', function() {
//     const darkModeToggle = document.getElementById('dark-mode-toggle');
//     const body = document.body;
//     darkModeToggle.addEventListener('click',() => {
//         body.classList.toggle('dark-mode');
//         // const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
//         darkModeToggle.querySelector('i').classList.toggle(`ri-sun-line`);
//         darkModeToggle.querySelector('i').classList.toggle(`ri-moon-line`);
//         darkModeToggle.querySelector('i').classList.toggle(`dark-mode`);

// });
// });