const container = document.querySelector('.container')

for(x=1; x<=256;x++) {
    const board = document.createElement('div');
    board.className = "grid";
    container.appendChild(board);
}

const colors = [
    {color: "red"},
    {color: "blue"},
    {color: "purple"},
    {color: "green"},
    {color: "yellow"},
    {color: "black"},
    {color: "white"},
    {color:"random"}

]


let colorChoice = 'black'

const options = document.querySelector('.options')

colors.forEach(item =>{
    const colorBtn = document.createElement('button')
    colorBtn.className = 'color'
    colorBtn.innerHTML = item.color
    colorBtn.style.backgroundColor = item.color
    if(item.color === 'black'){
        colorBtn.style.color = 'white'
    }
    options.appendChild(colorBtn)
})






let colorsOptions = document.querySelectorAll(".color")
colorsOptions.forEach(item =>{
    item.addEventListener('click',()=>{
        if (item.innerHTML === 'random'){
        colorChoice = '#' + Math.floor(Math.random()*16777215).toString(16);
    
        }else{
            colorChoice = item.innerHTML
        }
    
    })
})




const clear = document.querySelector(".clear")





const grids = document.querySelectorAll('.grid');
let isDrawing = false;

let color = 'blue'
grids.forEach(grid => {
    grid.addEventListener('mouseover', () => {
    if (isDrawing) {
        grid.style.backgroundColor = colorChoice;
    } else {
        grid.removeEventListener('mouseover',()=>{})

    }
    });
});

container.addEventListener('mousedown', () => {
    isDrawing = true;
});

container.addEventListener('mouseup', () => {
    isDrawing = false;

});

clear.addEventListener('click',()=>{
    grids.forEach(grid => {
            grid.style.backgroundColor = 'white';
    })

})




















