// PRODUCTS LISTINGS
let products = JSON.parse(localStorage.getItem('prodList')) ? JSON.parse(localStorage.getItem('prodList')) : 
  localStorage.setItem('prodList', 
    JSON.stringify(
  [
  {
    id: 1,
    src: 'https://i.postimg.cc/TPPZ9QrF/1593019286911-removebg-preview.png',
    brand:'VisionStyle',
    description:'Modern rectangular design with lightweight materials and adjustable nose pads for a comfortable fit.',
    price: 700
},
{
    id: 2,
    src: 'https://i.postimg.cc/QMMsYcL9/13361228-15441729-300-removebg-preview.png', 
    brand: 'FrameXpress',
    description:'Aviator-inspired frames ',
    price: 200
},
{
    id: 3,
    src: 'https://i.postimg.cc/fRT6MZ81/16360935557651-removebg-preview.png',  
    brand: 'Fashion Eyes',
    description:'Oversized square frames crafted from premium acetate.',
    price: 300
},
{   id: 4,
    src: 'https://i.postimg.cc/26wQjpcX/16833593271408-removebg-preview.png', 
    brand: 'Police',
    description:'Geometric hexagonal frames',
    price: 680,
},
{
    id: 5,
    src: 'https://i.postimg.cc/rsMfgCb7/412-Oh-QStr-L-SX425-removebg-preview.png', 
    brand: 'Polar',
    description:'Retro-inspired round frames with a keyhole bridge and tortoiseshell acetate',
    price: 200,
},
{
    id: 6,
    src: 'https://i.postimg.cc/c4c8KK39/image-removebg-preview.png', 
    brand: 'Polar',
    description:'Sleek and minimalist circular frames made from lightweight materials,',
    price: 899
},

{
  id: 7,
  src: 'https://i.postimg.cc/HLwtPvM3/image-1-removebg-preview.png', 
  brand: 'Vision',
  description:'Classic round shape with durable acetate frames and spring hinges for added flexibility',
  price: 600
},

{
 id: 8,
 src: 'https://i.postimg.cc/GtW8RdwD/image-2-removebg-preview.png', 
 brand: 'Elite',
 description:' Retro-inspired round frames with a keyhole bridge and tortoiseshell acetate',
 price: 800
},

{
 id: 9,
 src: 'https://i.postimg.cc/5N3dPKV7/666c2cce6f72699135ffcf-removebg-preview.png', 
 brand: 'Specs',
 description:'A look into our new limited edition collection',
 price: 7750
},

{
 id: 10,
 src: 'https://i.postimg.cc/Tw50SQX1/16360764398588-1-removebg-preview.png', 
 brand: 'Opti Chic',
 description:'Bold cat-eye silhouette with high-quality metal frames',
 price: 1800
}
]));
let divProducts = document.querySelector('#products');
function renderProducts() {
  divProducts.innerHTML = ""
products.forEach((item)=> { 
  divProducts.innerHTML += `
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="${item.src}" alt="img" loading = "lazy">
  <div class="card-body">
    <h5 class="card-title"><span>${item.brand}</span></h5>
    <p class="card-text">${item.description}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">R${item.price}</li>
  </ul>
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
}
 renderProducts()

// _____________________________________________________________________________
//Filter and Sort for Products Page
// Sort by price
function sortPrice(){
  products.sort(
   (p2, p1) => (p2.price < p1.price) ? 1 : (p2.price > p1.price) ? -1 : 0);
   renderProducts(products);
   //console.log(showProd);
}


//sort by alphabet
const sortAlphabet = document.querySelector("#sortAZ")

function sortName() {
  products.sort(
    (p1, p2) => (p1.brand < p2.brand) ? 1 : (p1.brand > p2.brand) ? -1 : 0);
    renderProducts(products);
    localStorage.setItem('prodList',JSON.stringify(products))
   // console.log('sort az clicked');
}




// search button
let searchBox = document.querySelector('#searchText');
function search() {
  try {
    let showProd = products.filter((product) => {
      return (
        product.brand.includes(searchBox.value) ||
        product.description.includes(searchBox.value)
      );
    });

    renderProducts(showProd);
  } catch (error) {
    alert('Product not found');
  }
  localStorage.setItem('prodList',JSON.stringify(products))
 // console.log('search  clicked');
}



// ADD TO CART FUNCTION

// work with array push and use an alert for the add to cart function

let cart = []

function addToCart(item) {
 
  cart.push(item)
  //console.log(item);
  localStorage.setItem('cartList', JSON.stringify(cart))
  alert('Item added to cart')
} 






