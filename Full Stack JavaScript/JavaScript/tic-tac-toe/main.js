const boardSquares = document.querySelectorAll('.space')

boardSquares.forEach(square => {
  square.addEventListener('click', () => {
    console.log(square.innerHTML)
  })  
});

