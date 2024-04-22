export default function order() {
  console.log('Order.js working')

  const content = document.getElementById('content')
  const container = document.createElement('div')
  const h2 = document.createElement('h2')

  // const orderImg = new Image()
  // orderImg.className = 'order-img'
  // orderImg.src = 'Order'

  content.appendChild(container).className = 'order-container'

  return container
}