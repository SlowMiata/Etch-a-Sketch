const container = document.querySelector('.container')
let size = 256


for(x=1; x<=size;x++) {
    const board = document.createElement('div');
    board.className = "grid";
    let width = 480/(Math.sqrt(size))
    board.style.width = `${width}px`
    board.style.height = `${width}px`
    container.appendChild(board);
}
let grids = document.querySelectorAll('.grid');



sizeBtn = document.querySelector('.size')
sizeBtn.addEventListener('click',()=>{
    let choice = prompt('pick a size between 1 and 100 inclusively to create a n by n board')
    if (1<= choice && choice <= 100){
        size = choice * choice
        grids.forEach(grid => {
            grid.remove()

        
        }
        )
        for(x=1; x<=size;x++) {
            const board = document.createElement('div');
            board.className = "grid";
            let width = 480/(Math.sqrt(size))
            board.style.width = `${width}px`
            board.style.height = `${width}px`
            container.appendChild(board);
        }
        grids = document.querySelectorAll('.grid');
        grids.forEach(grid => {

            grid.addEventListener('mousemove', () => {
            if (isDrawing) {
                grid.style.backgroundColor = colorChoice;
            } else {
                grid.removeEventListener('mousemove',()=>{})
        
            }
            });
        });


        
    }
    else{
        alert("invalid size")
    }
})



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



let isDrawing = false;

let color = 'blue'
grids.forEach(grid => {

    grid.addEventListener('mousemove', () => {
        
    if (isDrawing) {
        grid.style.backgroundColor = colorChoice;

    } else {
        grid.removeEventListener('mousemove',()=>{})

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




















