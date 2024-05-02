import DOMUtils from './DOMUtils'

const contactArr = [
  {
    title: `PHONE #`,
    contact: '1-234-567-8910'
  },
  {
    title: `EMAIL`,
    contact: `bam@burgers.eat`
  },
  {
    title: `LOCATION`,
    contact: `5005 Burger Drive, Detroit, MI 48201`
  }
]

export default function contact() {
  console.log('Contact.js working')

  const container = DOMUtils.createDiv('contact-container')

  contactArr.forEach((item) => {
    const contactItem = DOMUtils.createDiv('contact-item')
    const contactTitle = DOMUtils.createElementWithContent('h2', item.title, 'contact-title')
    const contactMethod = DOMUtils.createElementWithContent('span', item.contact, 'contact-phone')

    container.appendChild(contactItem)
    contactItem.append(contactTitle, contactMethod)
  })

  content.appendChild(container)

  return container
}