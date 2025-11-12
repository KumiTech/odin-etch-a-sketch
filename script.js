const container = document.querySelector('#container')



// loop for creating grid
function createGrid(size){
    container.innerHTML = ''
    const squareSize = 960/size
    //loop for rows
    for(let i = 0 ; i < size * size ; i++ ){
        const square = document.createElement("div")
        square.classList.add("grid-square")
        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`
        
        square.addEventListener('mouseover', () => {
            const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`
            square.style.backgroundColor = randomColor
        }
        )
        container.appendChild(square)
    }
    }
createGrid(16)

// reset button functionality
const resetbtn = document.querySelector('#resetButton')
resetbtn.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size (max 100):")
    size = parseInt(newSize)
    if (size < 1 || size > 100){
        alert("Enter a number between 1 annd 100")
    }
    else{
        container.innerHTML=""
        createGrid(size)
    }
})

