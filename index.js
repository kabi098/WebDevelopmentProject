document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.addToCart');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.dataset.name;
            const itemPrice = button.dataset.price;

            const item = {
                name: itemName,
                price: parseInt(itemPrice, 10)
            };

            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${itemName} has been added to the cart!`);
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('loginModal');
    var closeButton = document.querySelector('.close');

    modal.style.display = 'block';

    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    document.getElementById('loginForm').onsubmit = function(e) {
        e.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        fetch('credentials.txt')
            .then(response => response.text())
            .then(data => {
                var credentialsArray = data.trim().split('\n\n'); 
                var validCredentials = false;

                credentialsArray.forEach(credentialsSet => {
                    var credentials = credentialsSet.split('\n');
                    var storedUsername = credentials[0].split(':')[1].trim();
                    var storedPassword = credentials[1].split(':')[1].trim();

                    if (username === storedUsername && password === storedPassword) {
                        validCredentials = true;
                    }
                });

                if (validCredentials) {
                    alert('Login successful!');
                    modal.style.display = 'none';
                } else {
                    alert('Invalid credentials');
                }
            })
            .catch(error => console.error('Error fetching credentials:', error));
    };
});
