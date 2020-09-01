



//// Event 1 Mouseover

const multipleNav = document.querySelectorAll('a')

multipleNav[0].addEventListener('mouseover', function(event){
    event.target.style.color = 'red'
})
multipleNav[1].addEventListener('mouseover', function(event){
    event.target.style.color = 'blue'
})
multipleNav[2].addEventListener('mouseover', function(event){
    event.target.style.color = 'red'
})
multipleNav[3].addEventListener('mouseover', function(event){
    event.target.style.color = 'blue'
})

/// Event 2 click

const bigh1 = document.querySelector('.logo-heading')

bigh1.addEventListener('click', function(event){
    event.target.style.fontSize = '8rem'
})

/// Event 3 keydown

document.addEventListener('keydown', function(event){
    if(event.key === 'Backspace'){
        alert(`Don't leave the fun bus`);
    }
})

/// Event 4 mouse enter

const img = document.querySelectorAll('img')

img[0].addEventListener('mouseenter', event => {
    event.target.style.border = '5px red dashed'
})

/// Event 5 double click

document.addEventListener('dblclick', function(event){
    event.target.style.backgroundColor = 'grey'
})

/// Event 6 mouse leave

const h2 = document.querySelector('h2')

h2.addEventListener('mouseleave', function(event){
    event.target.style.fontSize = '10rem'
})

/// Event 7 load

window.addEventListener('load', event =>{
    alert(`Prepare to have fun!`)
})


/// Event 8 drag end

img[1].addEventListener('dragend', function(event){
    event.target.style.display = 'none'
})

/// Event 9 copy

p1 = document.querySelector("p")

p1.addEventListener('copy', event =>{
    alert(`Don't touch me`)
})


/// Event 10 mouse up

img[2].addEventListener('mouseup', event =>{
    event.target.style.display = 'none'
})

