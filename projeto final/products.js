let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartDisplay();
});

function loadProducts() {
    const products = [
        { name: "AREIA", image: "./img/areia.jpg", price: "R$ 29,90" },
        { name: "BRINQUEDO", image: "./img/brinquedo.jpg", price: "R$ 29,90" },
        { name: "CAMA", image: "./img/cama.jpg", price: "R$ 29,90" },
        { name: "COLEIRA", image: "./img/coleira.jpg", price: "R$ 29,90" },
        { name: "COMEDOURO", image: "./img/comedouro.jpg", price: "R$ 29,90" },
        { name: "RAÇÃO", image: "./img/raçao.jpg", price: "R$ 29,90" },
    ];

    const productList = document.getElementById('productList');
    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `<img src="${product.image}" alt="Imagem do produto">
                                <div class="product-name">${product.name}</div>
                                <div class="product-price">${product.price}</div>
                                <button onclick="addToCart('${product.name}', '${product.price}')">Adicionar ao Carrinho</button>`;
        productList.appendChild(productDiv);
    });
}

function addToCart(name, price) {
    const item = { name, price, quantity: 1 };
    const index = cart.findIndex(product => product.name === name);
    if (index > -1) {
        cart[index].quantity++;
    } else {
        cart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function removeFromCart(name) {
    const index = cart.findIndex(product => product.name === name);
    if (index > -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `<strong>${item.name}</strong> - ${item.price} x ${item.quantity}
                             <button onclick="removeFromCart('${item.name}')">Remover</button>`;
        cartItems.appendChild(itemDiv);
    });
}

function finalizePurchase() {
    
    const modal = document.getElementById('purchaseModal');
    modal.style.display = 'block';

    
    const closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}
