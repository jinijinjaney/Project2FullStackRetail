function generateProductCards() {
    const productContainer = document.querySelector('.product-container');
    featuredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <div class="product-details">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span>${product.price}</span>
            </div>
        `;
        const addToCartButton = document.createElement('button');
        addToCartButton.innerText = 'Add to Cart';
        addToCartButton.classList.add('add-to-cart-button');
        addToCartButton.addEventListener('click', () => {
            console.log('Product added to cart:', product.name);
        });
        productCard.appendChild(addToCartButton);
        productContainer.appendChild(productCard);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    generateProductCards();
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 2000); 
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.addEventListener("DOMContentLoaded", function() {
    const homeNavItem = document.getElementById('homeNavItem');
    const currentUrl = window.location.href;
    const homePageUrl = 'https://yourwebsite.com/'; 
    if (currentUrl === homePageUrl) {
        homeNavItem.classList.add('active');
    }
});

function populateReviews() {
    const reviewsContainer = document.querySelector('.reviews');
    reviewsData.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <img src="images/${review.image}" alt="${review.name}">
            <h3>${review.name}</h3>
            <p>"${review.text}"</p>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    populateReviews();
});
