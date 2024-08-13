const cartContainer = document.getElementById('cart-container');

function deleteFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    cartContainer.innerHTML = '';
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    cart.forEach((user, index) => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <button onclick="deleteFromCart(${index})">Delete</button>
        `;
        cartContainer.appendChild(userCard);
    });
}

document.addEventListener('DOMContentLoaded', renderCart);
