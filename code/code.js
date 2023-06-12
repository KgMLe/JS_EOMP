// PRODUCTS LISTINGS
let products = JSON.parse(localStorage.getItem('prodList')) ? JSON.parse(localStorage.getItem('prodList')) : localStorage.setItem('prodList', JSON.stringify(
  [
  {
    id: 1,
    description:'',
    src: 'https://i.postimg.cc/NMN0gR6d/gucci.webp',
    brand:'Gucci',
    price: 7000
},
{
    id: 2,
    src: 'https://i.postimg.cc/SNYKh2JG/guess.jpg', 
    brand: 'Guess',
    description:'',
    price: 2000
},
{
    id: 3,
    src: 'https://i.postimg.cc/4yqNcZFt/rayban.webp',  
    brand: 'Ray-Bans',
    description:'',
    price: 300
},
{   id: 4,
    src: 'https://i.postimg.cc/prpLyykR/police.jpg', 
    brand: 'Police',
    description:'',
    price: 8000,
},
{
    id: 5,
    src: 'https://i.postimg.cc/Y929KdW4/polar.jpg', 
    brand: 'Polar',
    description:'',
    price: 2000,
},
{
    id: 6,
    src: 'https://i.postimg.cc/DfMzHdyZ/galxb.webp', 
    brand: 'GalXBoy',
    description:'',
    price: 800
},

{
  id: 7,
  src: 'https://i.postimg.cc/DfMzHdyZ/galxb.webp', 
  brand: 'GalXBoy',
  description:'',
  price: 800
},

{
 id: 8,
 src: 'https://i.postimg.cc/DfMzHdyZ/galxb.webp', 
 brand: 'GalXBoy',
 description:'',
 price: 800
},

{
 id: 9,
 src: 'https://i.postimg.cc/DfMzHdyZ/galxb.webp', 
 brand: 'GalXBoy',
 description:'',
 price: 800
},

{
 id: 10,
 src: 'https://i.postimg.cc/DfMzHdyZ/galxb.webp', 
 brand: 'GalXBoy',
 description:'',
 price: 800
}
]))
        ;

let divProducts = document.querySelector('#products');
products.forEach((data)=> {
  divProducts.innerHTML += `
  <div class="card" style="width: 16rem;">
<img class="card-img-top" src="${data.src}" alt="img">
  <div class="card-body">
    <h5 class="card-title">${data.brand}</h5>
   
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Description</li>
    <li class="list-group-item">R${data.price}</li>
  </ul>
  <div class="card-body">
  <button class="btn btn-light" onclick="addToCart(${data.id})" id="checkout">Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
</svg>
  </button>
  </div>
</div>
  `
})

// ADD TO CART FUNCTION

// work with array push and use an alert for the add to cart function
// also find out which array to use to push it to the checkout page. 
// now this probable will work but using a constructor function since we have not yet done classes

let checkout = document.getElementById("#checkOut")

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : localStorage.setItem('cart', JSON.stringify([]))
  cart.push(id)
  localStorage.setItem('cart', JSON.stringify(cart))
  alert('Item added to cart')
} 






