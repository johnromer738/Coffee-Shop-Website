let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

let isDescriptionVisible = {};

function toggleDescription(productId, event){
  event.preventDefault();

  const productBox = document.getElementById(productId);
  const description = productBox.querySelector('.product-description');
  const productImg = productBox.querySelector('.product-img');

  isDescriptionVisible[productId] = !isDescriptionVisible[productId];

  if (isDescriptionVisible[productId]) {
    description.classList.add('visible');
    productImg.classList.add('hidden');
  } else {
    description.classList.remove('visible');
    productImg.classList.remove('hidden');
  }
}