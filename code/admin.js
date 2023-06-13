const sortBtn = document.querySelector('#sort')
const editBtn = document.querySelector ('#edit')

let brand = document.querySelector('#brand')
let img = document.querySelector ('#imgSrc')
let description = document.querySelector ('#description')
let price = document.querySelector ('#price')

// PRODUCTS LISTING
// let products = JSON.parse(localStorage.getItem('prodList')) ? JSON.parse(localStorage.getItem('prodList')) : [];
// debugger
let products = JSON.parse(localStorage.getItem('prodList'))
        
let divAdmin = document.querySelector('.table-group-divider');

// ADD PRODCUT(S)
const tempID = products[products.length-1] ? products[products.length-1].id + 1: 1;

function addProd(){
  if(brand.value === '' || img.value === '' || description.value === '' || price.value === ''){
    alert('All input fields should be filled')
  }else{
    products.push(
      { 
        id: tempID,
        brand:brand.value,
        image:img.value,
        description:description.value,
        price:price.value
      }
    )

  }
  console.log(products)
  localStorage.setItem('prodList',JSON.stringify(products))
  displayProd()
} 
// __________________________________________________________________________
// DISPLAY PRODCUTS
function displayProd(){

divAdmin.innerHTML = "" 
// the next section of code is the inner html code of the admin page, this includes the modals that pop up for the edit and add buttons
products.forEach ((data) => {
  divAdmin.innerHTML += `
  <tr>
  <th scope="row">${data.id}</th>
  <td>${data.brand}</td>
  <td><img src="${data.src}" alt="" style="width: 100px;height: 100px;"></td>
  <td>${data.description}</td>
  <td>R ${data.price}</td>

  <td><button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exModal" >Edit <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg>
  </button>
  <div class="modal fade" id="exModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
  <div class="modal-content">
  <div class="modal-header">
  <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product Information</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
 
  <div class="modal-body" >
  <form id="editProduct">
  <div class="mb-3">
  <label for="brand" class="form-label">Brand</label>
  <input type="text" class="form-control" id="brand" value="${data.brand}">
  </div>
  <div class="mb-3">
  <label for="imgSrc" class="form-label">Image</label>
  <input type="url" class="form-control" id="imgSrc" value="${data.src}" >
  </div>
  <div class="mb-3">
  <label for="description" class="form-label">Description</label>
  <input type="text" class="form-control" id="description" value="${data.description}">
  </div>
  <div class="mb-3">
  <label for="price" class="form-label">Price (R)</label>
  <input type="number" class="form-control" id="price" value="${data.price}">
  </div>
  </form>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-success" onClick ="editProd()" data-bs-dismiss="modal">Save Changes</button>
  </div>
  </div>
  </div>
  </div>
  </td>
  <td><button class="btn btn-danger" id= "del" onClick="delProduct()" >Delete <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
  </svg> </button></td>
  </tr>
  
  `
  localStorage.setItem('prodList',JSON.stringify(products))
  });
}
displayProd()
// __________________________________________________________________________
// SORT PRODUCTS 

function sortProd(){
  products.sort(function(a, b) {
    const brandA = a.brand.toUpperCase(); 
    const brandB = b.brand.toUpperCase(); 
      
  
    if (brandA < brandB) {
      return -1;
    }
    if (brandA > brandB) {
      return 1;
    }

    return 0;
  })

console.log(products);
localStorage.setItem('prodList',JSON.stringify(products))
displayProd()
}


// __________________________________________________________________________
// EDIT PRODUCTS

function EditBtn (data){
  this.brand = document.querySelector(`#ID - ${data.brand}`).value
  this.image = document.querySelector(`#ID - ${data.imgSrc}`).value
  this.description = document.querySelector(`#ID - ${data.id}`).value
  this.price = document.querySelector(`#ID - ${data.id}`).value
}


function editProd(){
document.querySelector ('#edit')

  console.log("Edit Button Clicked");
   localStorage.setItem('prodList',JSON.stringify(products))
}



// __________________________________________________________________________
// DELETE PRODUCTS
// You have to creat an id for it to be recognised
// let id = 
function delProduct (){
  products.splice (id,-1)
  console.log("Del Button Clicked");
    displayProd()
    localStorage.setItem('prodList',JSON.stringify(products))
   };

  


  




