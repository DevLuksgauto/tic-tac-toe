document.addEventListener('DOMContentLoaded', () =>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)){
        setTimeout(()=>{
            alert("O jogo acabou! O vencedor foi o player " + playerTime)
        },20)
    }
    updateSquare(position)
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbols = board[position];
    square.innerHTML = `<div class='${symbols}'></div>`
}

function udpdateSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        let position = square.id;
        let symbol = board[position];
        if(symbol != ''){
            squares.innerHTML = `<div id="${symbol}"class="square"></div>`
        }
    })
    }