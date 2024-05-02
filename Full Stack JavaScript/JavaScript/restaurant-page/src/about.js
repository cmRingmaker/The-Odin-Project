import DOMUtils from './DOMUtils'
import Burger from './img/burger_large.webp'

export default function about() {
  console.log('About.js working')

  const content = document.getElementById('content')
  const container = DOMUtils.createDiv('about-container')
  const imgContainer = DOMUtils.createDiv('img-container')
  
  const aboutTitle = DOMUtils.createElementWithContent('h2', 'Home of the Bamburger!', 'about-title')
  const aboutImg = DOMUtils.createImage(Burger, 'about-img', 'Hamburger')
  const aboutInfo = DOMUtils.createElementWithContent('p',
  `Nestled on a cozy corner in the heart of downtown Detroit, Bamburgers has been serving up delicious, no-frills burgers since 1991. Serving everyone including yourself, local legends, and all the way to Big Three CEOs. Step through our doors and you'll be transported back in time to an era when burgers reigned supreme and quality was paramount.
  
  We've stayed true to our Detroit roots, crafting every burger with the freshest, locally-sourced ingredients and our signature "Bam-Sauce" that folks go crazy for. What's the secret to our legendary burgers? It starts with using only premium grass-fed beef that gets hand-pattied and grilled to juicy perfection. Our burger buns are baked fresh daily using a decades-old recipe. And then there's the toppings - crisp lettuce, ripe tomatoes, zesty onions, and sharp cheddar cheeses - all sourced from local farms and purveyors we've built relationships with over the years.
  
  As proud as we are of the food, Bamburgers is more than just food - it's an experience. The retro digs, neon signs, and checkerboard floors welcome anyone who is hungry. Our staff will treat you like family from the moment you belly up to the counter. At Bamburgers, we take pride in every burger we serve and every customer we welcome. It's what has made this little burger joint a favorite to everyone that visits.`, 'about-info'
)

  const reviewContainer = DOMUtils.createDiv('review-container')
  const review1 = DOMUtils.createElementWithContent('span', `Best of Detroit! \n -BurgerSpot`, 'about-review')
  const review2 = DOMUtils.createElementWithContent('span', `Amazing milkshakes! \n -DETReviewer`, 'about-review')
  const review3 = DOMUtils.createElementWithContent('span', `11/10 \n -MoTown Food`, 'about-review')
  const review4 = DOMUtils.createElementWithContent('span', `Retro Paradise \n -Review Girl`, 'about-review')

  content.appendChild(container)
  container.appendChild(aboutTitle)
  container.appendChild(aboutInfo)
  container.appendChild(imgContainer)
  imgContainer.appendChild(aboutImg)
  container.appendChild(reviewContainer)
  reviewContainer.append(review1, review2, review3, review4)

  return container
}