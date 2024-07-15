document.addEventListener('DOMContentLoaded', () => {
    const number_of_products = 7; // Change this to the desired number of products
    const productContainer = document.getElementById('product-container');

    for (let i = 1; i <= number_of_products; i++) {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white p-4 rounded-lg shadow-md';

        productCard.innerHTML = `
            <img src="https://via.placeholder.com/150" alt="Product Image" class="w-full h-48 object-cover rounded-t-lg mb-4">
            <h2 class="text-lg font-semibold mb-2">Product ${i}</h2>
            <p class="text-gray-700 mb-4">Description of product ${i} goes here. This is a placeholder description.</p>
            <span class="text-xl font-bold text-green-600">$${(i * 10).toFixed(2)}</span>
            
        `;

        productContainer.appendChild(productCard);
    }
});
