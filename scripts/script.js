const elementsHTML = {

    sectionWelcome  : {
        element : document.getElementById('sectionOne')
    },
    sectionCoding  : {
        element : document.getElementById('sectionTwo')
    },
    sectionSearch : {
        element : document.getElementById('sectionTree')
    }
}


const observadorFunction = e => { 
const textContainer = e[0].target.firstElementChild.firstElementChild;
const imageContainer = e[0].target.firstElementChild.firstElementChild.nextElementSibling;
if(e[0].isIntersecting) {

textContainer.style.opacity = '1'
textContainer.style.transform = 'translateY(-0px)'
imageContainer.style.transform = 'translateY(0px)'
observar.unobserve(e[0].target)
}else if(e[0].target.id === 'sectionOne') {

textContainer.style.opacity = '1'
observar.unobserve(e[0].target)
}
}

const observar = new IntersectionObserver(observadorFunction, { threshold: 0.5 });

let matriz = Object.keys(elementsHTML);
matriz.forEach(e => {
    observar.observe(elementsHTML[e].element)
})