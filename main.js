const lis = document.querySelectorAll('ol')
const lineThrough = function (event){
    event.target.style.textDecoration = 'line-through'
}
for (const li of lis){
    li.addEventListener('click',lineThrough)
}
const uls = document.querySelectorAll('ul')
const transparent = function (event){
    event.target.style.opacity = '0'
}
for (const li of uls){
    li.addEventListener('click',transparent)
}

const picture = document.querySelectorAll('section')

const display = function(events){
    events.target.style.width = '0px'
}

for (const img of picture){
    img.addEventListener('click', display);
}

const button = document.querySelector('#destroy-all')

button.addEventListener('click',destroyAll)



