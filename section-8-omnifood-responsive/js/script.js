
// Set Current Year 
const yearEl = document.querySelector('.year')
yearEl.textContent = new Date().getFullYear()

// Make mobile navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')
btnNavEl.addEventListener('click', function(){
    headerEl.classList.toggle('nav-open')
})

// Smooth Scrolling Animation
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function(link) {
    link.addEventListener('click', function(e){
        e.preventDefault()
        const href = link.getAttribute('href')

        // Scroll back to top
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })  
        } else {
            // Scroll to element
            const sectionEl = document.querySelector(href)
            sectionEl.scrollIntoView({ behavior: "smooth" })
        }
        
        // Close Mobile navigation
        if(link.classList.contains('main-nav-link')) {
            headerEl.classList.toggle("nav-open")
        }
    })
})

// Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero")

const observer = new IntersectionObserver(function(entries){
    const ent = entries[0]
        if(ent.isIntersecting === false) {
            document.body.classList.add('sticky')
        } else {
            document.body.classList.remove('sticky')
        }  
    }, 
    {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px' 
})
observer.observe(sectionHeroEl)