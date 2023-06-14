//get products in here
let cart = JSON.parse(localStorage.getItem('cartList')) ? 
JSON.parse(localStorage.getItem('cartList')) : [];


localStorage.setItem('cartList',JSON.stringify(cart))
let cartItem = document.querySelector('.checkOut');

cart.forEach((item)=> {
  cartItem.innerHTML += `
  <tr>
  <td>${item.brand}</td>
  <td><img src="${item.src}" alt="" style="width: 70px;height: 60px;"></td>
  <td>R${item.price}</td>
  <tr>
  `
})

// try using ternirary operators



