// Function to fetch product details and update the page
const params = new URLSearchParams(window.location.search);
const productId = params.get('id'); // 取得 id，例如 id=1
function setProductDetails(productId) {

    fetch('product-details.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id === productId);
            if (product) {
                // Update product details on the page
            
                document.getElementById('ProductImg').src = product.image;
                document.getElementById('productName').innerText = product.name;
                document.getElementById('productPrice').innerText = product.price;
                document.getElementById('productDescription').innerText = product.description;
            }
        })
        .catch(error => console.error('Error loading product data:', error));

}

// Example usage: load product with id 1
//setProductDetails(2);
