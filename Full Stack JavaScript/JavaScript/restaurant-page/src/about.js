import DOMUtils from './DOMUtils'
import Burger from './img/burger.png'

export default function about() {
  console.log('About.js working')

  const content = document.getElementById('content')
  const container = DOMUtils.createDiv('about-container')
  const imgContainer = DOMUtils.createDiv('img-container')
  
  const aboutTitle = DOMUtils.createElementWithContent('h2', 'Home of the Bamburger!', 'about-title')
  const aboutImg = DOMUtils.createImage(Burger, 'about-img', 'Hamburger')
  const aboutInfo = DOMUtils.createElementWithContent('p',
  `Testing writing a description about Bamburgers, this is a description that will eventually be changed. This is only temporary.
  
  It is the year 2024 and it is a nice cool sunny day outside right now, I can hear the birbs chirping, I can see squirrels trying to bury seeds in the dirt. I can hear my dog barking.
  
  Testing is paramount to getting things done. `, 'about-info'
)

  const reviewContainer = DOMUtils.createDiv('review-container')
  const review1 = DOMUtils.createElementWithContent('span', `Fake Review 1 \n -Review Man`, 'about-review')
  const review2 = DOMUtils.createElementWithContent('span', `Fake Review 2 \n -Review Boy`, 'about-review')
  const review3 = DOMUtils.createElementWithContent('span', `Fake Review 3 \n -Review Woman`, 'about-review')
  const review4 = DOMUtils.createElementWithContent('span', `Fake Review 4 \n -Review Girl`, 'about-review')

  content.appendChild(container)
  container.appendChild(aboutTitle)
  container.appendChild(aboutInfo)
  container.appendChild(imgContainer)
  imgContainer.appendChild(aboutImg)
  container.appendChild(reviewContainer)
  reviewContainer.append(review1, review2, review3, review4)

  return container
}