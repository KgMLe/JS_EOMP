// PRODUCTS LISTINGS
let products = JSON.parse(localStorage.getItem('prodList')) ? JSON.parse(localStorage.getItem('prodList')) : 
  localStorage.setItem('prodList', 
    JSON.stringify(
  [
  {
    id: 1,
   
    src: 'https://i.postimg.cc/NMN0gR6d/gucci.webp',
    brand:'Gucci',
    description:'',
    price: 700
},
{
    id: 2,
    src: 'https://i.postimg.cc/SNYKh2JG/guess.jpg', 
    brand: 'Guess',
    description:'',
    price: 200
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
    price: 800,
},
{
    id: 5,
    src: 'https://i.postimg.cc/Y929KdW4/polar.jpg', 
    brand: 'Polar',
    description:'',
    price: 200,
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
]));

let divProducts = document.querySelector('#products');
products.forEach((item)=> {
  divProducts.innerHTML += `
  <div class="card" style="width: 16rem;">
<img class="card-img-top" src="${item.src}" alt="img">
  <div class="card-body">
    <h5 class="card-title">${item.brand}</h5>
    <p>${item.description}</p>
    <p>R${item.price}</p>
  </ul>
  </div>
  <div class="card-body">
  <button class="btn btn-light" onclick='addToCart(${JSON.stringify(item)})' id="checkout">Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
</svg>
  </button>
  </div>
</div>

  `
  localStorage.setItem('prodList',JSON.stringify(products))
})
// _____________________________________________________________________________
//Filter and Sort for Products Page
// Sort by price
function sortPrice(){
   products.sort(
    (p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
}


//sort by alphabet


// ADD TO CART FUNCTION

// work with array push and use an alert for the add to cart function

let cart = []

function addToCart(item) {
 
  cart.push(item)
  console.log(item);
  localStorage.setItem('cartList', JSON.stringify(cart))
  alert('Item added to cart')
} 






