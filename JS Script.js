// Cart Array
let cart = [];

// Cart Open / Close
function toggleCart() {
    document.getElementById("cartSidebar").classList.toggle("active");
    document.getElementById("cartOverlay").classList.toggle("active");
}

// Add Item To Cart
function addToCart(name, price) {
    cart.push({
        name: name,
        price: Number(price)
    });

    updateCart();
    toggleCart();
}

// Update Cart
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    // Count Update
    cartCount.innerText = cart.length;

    // Empty Cart
    if (cart.length === 0) {
        cartItems.innerHTML = "<p class='empty-cart'>Cart khali hai</p>";
        cartTotal.innerText = "RS. 0";
        return;
    }

    // Show Items
    let total = 0;
    cartItems.innerHTML = "";

    cart.forEach((item) => {
        total += item.price;

        cartItems.innerHTML += `
            <div style="padding:10px 0; border-bottom:1px solid #333;">
                <strong>${item.name}</strong><br>
                RS. ${item.price}
            </div>
        `;
    });

    // Total Update
    cartTotal.innerText = "RS. " + total;
}
