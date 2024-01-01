const NAV_LI = document.querySelectorAll('li')

let selectedLi
NAV_LI.forEach(li => {
  li.addEventListener('click', (e) => {

    if(selectedLi) {
      selectedLi.removeAttribute('class')
    }

    selectedLi = e.target
    selectedLi.classList.add('selected')
  })
});
