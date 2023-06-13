let checkout = JSON.parse(localStorage.getItem('cartList')) ? 
JSON.parse(localStorage.getItem('cartList')) : [];

let cartItem = document.querySelector('.checkOut');

products.forEach((data)=> {
  cartItem.innerHTML += `
  <tr>
  <th scope="row">${data.id}</th>
  <td>${data.brand}</td>
  <td>${data.src}</td>
  <td>${data.description}</td>
  <td>${data.price}</td>
  <tr>
  `

})



