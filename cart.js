document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceContainer = document.getElementById('totalPrice');
    const clearCartButton = document.getElementById('clearCart');
    const buyCartButton = document.getElementById('buyCart');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartDisplay() {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            totalPriceContainer.innerHTML = '';
            clearCartButton.style.display = 'none';
            buyCartButton.style.display = 'none';
            return;
        }

        let total = 0;
        cartItemsContainer.innerHTML = cart.map(item => {
            total += item.price;
            return `<p>${item.name}: Rs.${item.price}</p>`;
        }).join('');

        totalPriceContainer.innerHTML = `<h3>Total: Rs.${total}</h3>`;
        clearCartButton.style.display = 'block';
        buyCartButton.style.display = 'block';
    }

    clearCartButton.addEventListener('click', () => {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        alert('Cart has been cleared!');
    });

    buyCartButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Your order has been sent!');
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        } else {
            alert('Your cart is empty.');
        }
    });

    updateCartDisplay();
});
