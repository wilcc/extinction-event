const lis = document.querySelectorAll('ol li')
const lineThrough = function (event){
    event.target.style.textDecoration = 'line-through'
}
for (const li of lis){
    li.addEventListener('click',lineThrough)
}
const uls = document.querySelectorAll('ul li')
const transparent = function (event){
    event.target.style.opacity = '0'
}
for (const li of uls){
    li.addEventListener('click',transparent)
}

const picture = document.querySelectorAll('section img')

const display = function(events){
    events.target.style.width = '0px'
}

for (const img of picture){
    img.addEventListener('click', display);
}

const button = document.querySelector('button')



const destroyAll = function(){
    for (const li of lis){
    li.style.textDecoration = 'line-through'}
    for (const ul of uls){
        ul.style.opacity = '0'
    }
    for (const img of picture){
        img.style.width = '0px'
    }


}
button.addEventListener('click',destroyAll)

