let cart = []; // Array to hold cart items

// Function to add items to the cart
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if the item already exists
    } else {
        cart.push({ name, price, quantity: 1 }); // Add new item to the cart
    }
    updateCart(); // Update the cart UI
}

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalDisplay = document.getElementById('cart-total');

    // Clear the cart display
    cartItemsContainer.innerHTML = '';

    let total = 0;

    // Loop through cart items to display them
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} (${item.quantity})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    // Update total price
    cartTotalDisplay.textContent = total.toFixed(2);
}
