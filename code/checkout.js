 let cart = JSON.parse(localStorage.getItem('cartList')) ? 
JSON.parse(localStorage.getItem('cartList')) : [];


localStorage.setItem('cartList',JSON.stringify(cart))
let cartItem = document.querySelector('.checkOut');
let total = 0;

cart.forEach((item)=> {
  total += item.price
  cartItem.innerHTML += `
  <tr>
  <td>${item.brand}</td>
  <td><img src="${item.src}" alt="" loading="lazy" style="width: 70px;height: 60px;"></td>
  <td>R${item.price}</td>
  <tr>
  `
})


function clearCart(){

  localStorage.removeItem('cartList')
  cartItem.innerHTML = ""
  window.location.reload();
}

document.querySelector('#priceSum').innerText = `Total Price: R ${total}`
// try using ternirary operators



