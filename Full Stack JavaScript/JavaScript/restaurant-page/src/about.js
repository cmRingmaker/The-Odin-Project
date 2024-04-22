export default function about() {
  console.log('About.js working')

  const content = document.getElementById('content')
  const container = document.createElement('div')
  const h2 = document.createElement('h2')

  // const aboutImg = new Image()
  // aboutImg.className = 'about-img'
  // aboutImg.src = 'About'

  content.appendChild(container).className = 'about-container'

  return container
}