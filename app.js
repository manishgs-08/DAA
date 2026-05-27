import Algorithms from './algorithms.js';
// --- INITIAL DATA & STATE ---
const products = [
    { id: 101, name: "Lenovo Ideapad", price: 84999, rating: 4.8, category: "Electronics", image: "https://m.media-amazon.com/images/I/71Q6JmLZE7L._SL1500_.jpg" },
    { id: 102, name: "Bio-Organic Headphones", price: 18500, rating: 4.5, category: "Electronics", image: "headphones.png" },
    { id: 105, name: "Quantum Coffee Brewer", price: 12900, rating: 4.3, category: "Appliances", image: "coffee.png" },
    { id: 103, name: "Smart Garden Kit", price: 12500, rating: 4.2, category: "Home & Garden", image: "https://cdn.shopify.com/s/files/1/0434/5426/7555/files/hydro_basil_600x600.jpg?v=1615607406" },
    { id: 104, name: "Ergo-Flow Desk Chair", price: 24900, rating: 4.7, category: "Furniture", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800" },
    { id: 106, name: "Lumina Smart Lamp", price: 4200, rating: 4.0, category: "Home & Garden", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800" },
    { id: 107, name: "Apex Gaming Console", price: 45000, rating: 4.9, category: "Electronics", image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800" },
    { id: 108, name: "Bamboo Keycaps Set", price: 3200, rating: 3.9, category: "Electronics", image: "https://www.thockking.com/cdn/shop/files/O1CN01AK19HF1aWqrRsBK6p__0-item_pic.jpg?v=1686967210&width=1500" },
    { id: 109, name: "Zero-G Yoga Mat", price: 5400, rating: 4.6, category: "Fitness", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQj3nWxAvFwmTkCbb-QSEm9o-Xouhi-MjSog&s" },
    { id: 110, name: "Air-Purifying Wall Art", price: 14500, rating: 4.1, category: "Home & Garden", image: "wall-art.png" },
    { id: 111, name: "Hydro-Pulse Blender", price: 8900, rating: 4.4, category: "Appliances", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800" },
    { id: 112, name: "Focus-Beam Monitor", price: 32000, rating: 4.7, category: "Electronics", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800" },
    { id: 113, name: "Titanium Smart Watch", price: 34999, rating: 4.7, category: "Wearables", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800" },
    { id: 114, name: "Sonic Toothbrush Pro", price: 4500, rating: 4.4, category: "Lifestyle", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfErAdez8OHCIbtUyY2zHSnLbxcguDpInm5-Vh3mvqTTow0I7ykqsrYydWEujBs2A526DxsePJ6IGmP0bqcuQFo23w4JiDPw8Q7UBFUufvdoycBBBHErMirZQOJHGnPQ&usqp=CAc" },
    { id: 115, name: "Velvet Cloud Sofa", price: 78000, rating: 4.9, category: "Furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800" },
    { id: 116, name: "Retro Vinyl Player", price: 15900, rating: 4.5, category: "Electronics", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800" },
    { id: 117, name: "Nano-Fiber Towel Set", price: 2200, rating: 4.1, category: "Lifestyle", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSv5tUoc-QoIAXnKQwVaDs583gxb9YXx8wksgsMfYpl0NGUvnG8npSMjOy4ey2VF1Y43A46VRjKpEiQ8mQwdHVb9i6bz1jdvTZQ2QrKPVc&usqp=CAc" },
    { id: 118, name: "Smart Door Lock X", price: 18500, rating: 4.6, category: "Home & Garden", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800" },
    { id: 119, name: "Pulse Fitness Tracker", price: 8900, rating: 4.2, category: "Wearables", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800" },
    { id: 120, name: "Chef-Grade Knife Set", price: 12000, rating: 4.8, category: "Appliances", image: "https://m.media-amazon.com/images/I/81vBoG5HBeL._SX679_.jpg" },
    { id: 121, name: "E-Reader Paper-V", price: 13500, rating: 4.7, category: "Electronics", image: "https://b3n.org/wp-content/uploads/2018/11/kindle_paperwhite_vs_paper_book1-e1542008840341.jpg" },
    { id: 122, name: "Compact Air Fryer", price: 7400, rating: 4.3, category: "Appliances", image: "https://nutricookworld.com/cdn/shop/files/Rectangle_136_f0682a57-89cc-46ab-8bee-b1e8f1884734.png?v=1706251947&width=1200" },
    { id: 123, name: "Minimalist Bookshelf", price: 9500, rating: 4.0, category: "Furniture", image: "https://luxiwoods.com/cdn/shop/files/F_591da85d-0201-471f-bda7-579c59a33abf.png?v=1775132441" },
    { id: 124, name: "Adjustable Dumbbell Set", price: 15000, rating: 4.7, category: "Fitness", image: "https://m.media-amazon.com/images/I/71FnT09HCxL._SX679_.jpg" },
    { id: 125, name: "Aroma Diffuser Pro", price: 3500, rating: 4.1, category: "Lifestyle", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTkDsDGY2eSkgx-icQqiHorr9Pl1TlHe0XPsujM6JCyaSyRGuCJHPYjBZ_W4A6zk5Bx8D-3gYoGBC0-KIAFl2LMJtIXdyvp1S_H4w8wR8w&usqp=CAc" },
    { id: 126, name: "Noise-Cancelling Mic", price: 11500, rating: 4.4, category: "Electronics", image: "https://m.media-amazon.com/images/I/31pu6SVe35L._SY300_SX300_QL70_FMwebp_.jpg" },
    { id: 127, name: "Vertical Ergonomic Mouse", price: 5200, rating: 4.5, category: "Electronics", image: "https://static.businessworld.in/Portronics%20Toad%20Ergo%203_20250515162149_original_image_19.webp" },
    { id: 128, name: "Portable Projector Z", price: 28900, rating: 4.6, category: "Electronics", image: "https://m.media-amazon.com/images/I/81GxA3lDaTL._SY879_.jpg" },
    { id: 129, name: "Self-Watering Pot", price: 1800, rating: 3.8, category: "Home & Garden", image: "https://www.resene.co.nz/Weekend-Gardener/images/project-img/260-self-watering-herb-planter.jpg" },
    { id: 130, name: "High-Peak Tent", price: 21000, rating: 4.8, category: "Fitness", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800" },
    { id: 131, name: "Mechanical Keyboard X", price: 14500, rating: 4.7, category: "Electronics", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800" },
    { id: 132, name: "Modern Table Lamp", price: 2900, rating: 4.2, category: "Furniture", image: "https://m.media-amazon.com/images/I/81vGzGk7sRL._SL1500_.jpg" },
    { id: 133, name: "Cordless Stick Vacuum", price: 19900, rating: 4.5, category: "Appliances", image: "https://honiture.com/cdn/shop/articles/Honiiture-p7-pro-cordless-vacuum-50kpa-new-product_920d0f20-1527-4030-a995-589f2dea2bbe.webp?v=1767872819&width=1280" },
    { id: 134, name: "Premium Yoga Mats", price: 1200, rating: 4.3, category: "Fitness", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800" },
    { id: 135, name: "Smart Wi-Fi Plug", price: 1500, rating: 4.0, category: "Electronics", image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800" },
    { id: 136, name: "Ceramic Planter Set", price: 3500, rating: 4.2, category: "Home & Garden", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800" },
    { id: 137, name: "Leather Travel Bag", price: 12500, rating: 4.8, category: "Lifestyle", image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800" },
    { id: 138, name: "Glass Tea Infuser", price: 1800, rating: 4.5, category: "Appliances", image: "https://glenburnfinetea.in/cdn/shop/files/SipologieDrinkware_2.jpg?v=1699692498&width=1946" },
    { id: 139, name: "Oak Wood Coasters", price: 900, rating: 3.9, category: "Lifestyle", image: "https://www.woodshopdiaries.com/wp-content/uploads/2022/11/Two-Tone-DIY-Coaster-Set.jpg" },
    { id: 140, name: "Digital Kitchen Scale", price: 1200, rating: 4.3, category: "Appliances", image: "https://m.media-amazon.com/images/I/61Vt5Egqf4L._AC_UF1000,1000_QL80_.jpg" }
];
const discountEdges = [
    { u: "Electronics", v: "Home & Garden", cost: 1200, name: "Tech-Garden Bundle", savings: 3500 },
    { u: "Electronics", v: "Furniture", cost: 2000, name: "Office Upgrade", savings: 5000 },
    { u: "Home & Garden", v: "Appliances", cost: 800, name: "Kitchen Refresh", savings: 2200 },
    { u: "Appliances", v: "Electronics", cost: 1500, name: "Smart Home Combo", savings: 4500 },
    { u: "Furniture", v: "Home & Garden", cost: 1000, name: "Interior Decor Pack", savings: 2800 }
];
let state = {
    allProducts: [...products],
    displayProducts: [...products],
    cart: JSON.parse(localStorage.getItem('algomart_cart')) || [],
    activeAlgo: "None",
    hasMounted: false,
    activeCategory: "All",
    isCartOpen: false
};
// --- DOM ELEMENTS ---
const toastContainer = document.getElementById('toastContainer');
const productGrid = document.getElementById('productGrid');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const subtotalEl = document.getElementById('subtotal');
const savingsEl = document.getElementById('savings');
const totalEl = document.getElementById('total');
const activeAlgoName = document.getElementById('activeAlgoName');
const discountSteps = document.getElementById('discountSteps');
const categoryBar = document.getElementById('categoryBar');
const cartTrigger = document.getElementById('cartTrigger');
const homeView = document.getElementById('homeView');
const cartView = document.getElementById('cartView');
const algoView = document.getElementById('algoView');
const backToShopBtn = document.getElementById('backToShopBtn');
const backToShopBtnAlgo = document.getElementById('backToShopBtnAlgo');
const cartPanel = document.getElementById('cartPanel'); // Still used by renderCart logic
const algoLabBtn = document.getElementById('algoLabBtn');
// --- ROUTER LOGIC ---
function handleRoute() {
    const hash = window.location.hash;

    // Reset all views
    homeView.classList.remove('active');
    homeView.classList.add('hidden');
    cartView.classList.remove('active');
    cartView.classList.add('hidden');
    if (algoView) {
        algoView.classList.remove('active');
        algoView.classList.add('hidden');
    }
    if (hash === '#cart') {
        cartView.classList.add('active');
        cartView.classList.remove('hidden');
        renderCart(); // Ensure latest state is rendered
    } else if (hash === '#algorithms') {
        if (algoView) {
            algoView.classList.add('active');
            algoView.classList.remove('hidden');
        }
    } else {
        homeView.classList.remove('hidden');
        homeView.classList.add('active');

        // Recalculate Masonry layout removed since we use CSS Grid
    }
}
window.addEventListener('hashchange', handleRoute);
cartTrigger.addEventListener('click', () => { window.location.hash = 'cart'; });
if (algoLabBtn) algoLabBtn.addEventListener('click', () => { window.location.hash = 'algorithms'; });
if (backToShopBtn) backToShopBtn.addEventListener('click', () => { window.location.hash = ''; });
if (backToShopBtnAlgo) backToShopBtnAlgo.addEventListener('click', () => { window.location.hash = ''; });
// Init route
handleRoute();
document.querySelector('.logo').addEventListener('click', () => { window.location.hash = ''; });

// --- SIDEBAR TOGGLE LOGIC ---
const appContainer = document.querySelector('.app-container');
const toggleBudgetBtn = document.getElementById('toggleBudgetBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');

// Hide sidebar by default
if (appContainer) appContainer.classList.add('sidebar-hidden');

if (toggleBudgetBtn) {
    toggleBudgetBtn.addEventListener('click', () => {
        appContainer.classList.toggle('sidebar-hidden');
    });
}

if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', () => {
        appContainer.classList.add('sidebar-hidden');
    });
}
// --- MASONRY LOGIC REMOVED IN FAVOR OF CSS GRID ---
// --- RENDER FUNCTIONS ---
function renderCategories() {
    const categories = ["All", ...new Set(products.map(p => p.category))];
    categoryBar.innerHTML = categories.map(cat => `
        <button class="category-chip ${state.activeCategory === cat ? 'active' : ''}" 
                onclick="filterByCategory('${cat}')">
            ${cat}
        </button>
    `).join('');
}
window.filterByCategory = (category) => {
    state.activeCategory = category;
    renderCategories();
    state.displayProducts = category === "All"
        ? [...state.allProducts]
        : state.allProducts.filter(p => p.category === category);

    renderProducts(state.displayProducts);
};
function renderProducts(items) {
    if (!items || items.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No products found.</p>';
        return;
    }
    productGrid.innerHTML = items.map((p, index) => `
        <div class="product-card" id="product-${p.id}" style="animation: fadeIn 0.4s ease forwards ${index * 0.03}s; opacity: 0;">
            <img src="${p.image}" alt="${p.name}" class="product-img" onclick="openImageZoom(${p.id})" onerror="this.src='https://via.placeholder.com/400x300?text=Product+Image'">
            <div class="product-info">
                <span class="category-tag">${p.category}</span>
                <h4>${p.name}</h4>
                <div class="rating">★ ${p.rating}</div>
                <div class="price-row">
                    <span class="price">₹${p.price.toLocaleString('en-IN')}</span>
                    <button class="add-btn" onclick="addToCart(${p.id})">+</button>
                </div>
            </div>
        </div>
    `).join('');
}
function renderCart() {
    // Save to LocalStorage
    localStorage.setItem('algomart_cart', JSON.stringify(state.cart));
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (state.cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Cart is empty</p>';
        subtotalEl.innerText = '₹0';
        savingsEl.innerText = '-₹0';
        totalEl.innerText = '₹0';
        discountSteps.classList.add('hidden');
        cartCount.innerText = '0';
        return;
    }
    cartItemsContainer.innerHTML = state.cart.map((item) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h5>${item.name}</h5>
                <span>₹${item.price.toLocaleString('en-IN')} x ${item.quantity} | ${item.category}</span>
            </div>
            <div class="cart-item-actions" style="display: flex; align-items: center;">
                <button class="secondary-btn" style="padding: 2px 8px; font-size: 0.8rem;" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span style="margin: 0 10px; font-weight: 600;">${item.quantity}</span>
                <button class="secondary-btn" style="padding: 2px 8px; font-size: 0.8rem;" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-btn" style="margin-left: 15px;" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');
    cartCount.innerText = totalItems;
    calculateTotals();
}
function calculateTotals() {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const activeCategories = [...new Set(state.cart.map(i => i.category))];
    let savings = 0;

    if (activeCategories.length > 1) {
        updateAlgoDisplay("Prim's Algorithm (Greedy)");
        const relevantEdges = discountEdges.filter(e =>
            activeCategories.includes(e.u) && activeCategories.includes(e.v)
        );

        const result = Algorithms.primsOptimization(activeCategories, relevantEdges);
        savings = result.mst.reduce((sum, edge) => sum + edge.savings, 0);

        if (result.steps.length > 0) {
            discountSteps.classList.remove('hidden');
            discountSteps.innerHTML = '<strong>Discount Strategy:</strong><br>' + result.steps.map(s => s.replace('$', '₹')).join('<br>');
        } else {
            discountSteps.classList.add('hidden');
        }
    } else {
        discountSteps.classList.add('hidden');
    }
    subtotalEl.innerText = `₹${subtotal.toLocaleString('en-IN')}`;
    savingsEl.innerText = `-₹${savings.toLocaleString('en-IN')}`;
    totalEl.innerText = `₹${Math.max(0, subtotal - savings).toLocaleString('en-IN')}`;
}
function updateAlgoDisplay(name) {
    activeAlgoName.innerText = name;
}
window.showToast = (message, type = 'success') => {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? '✅' : '⚠️';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;

    toastContainer.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove after 3s
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
};
window.addToCart = (id) => {
    const existing = state.cart.find(p => p.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        const product = state.allProducts.find(p => p.id === id);
        state.cart.push({ ...product, quantity: 1 });
    }
    renderCart();
    window.showToast("Added to Cart!");
};
window.updateQuantity = (id, delta) => {
    const item = state.cart.find(p => p.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            window.removeFromCart(id);
        } else {
            renderCart();
        }
    }
};
window.removeFromCart = (id) => {
    state.cart = state.cart.filter(item => item.id !== id);
    renderCart();
};
// Sorting (QuickSort)
document.getElementById('sortSelect').addEventListener('change', (e) => {
    const val = e.target.value;
    updateAlgoDisplay("QuickSort");

    if (val === 'price-asc') {
        state.displayProducts = Algorithms.quickSort([...state.displayProducts], 'price', true);
    } else if (val === 'price-desc') {
        state.displayProducts = Algorithms.quickSort([...state.displayProducts], 'price', false);
    } else if (val === 'rating-desc') {
        state.displayProducts = Algorithms.quickSort([...state.displayProducts], 'rating', false);
    } else {
        state.displayProducts = state.activeCategory === "All"
            ? [...state.allProducts]
            : state.allProducts.filter(p => p.category === state.activeCategory);
    }
    renderProducts(state.displayProducts);
});
// Searching (Partial Match + Enter Key Support)
function performSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();

    if (!query) {
        // Reset to full list or currently active category if search is cleared
        state.displayProducts = state.activeCategory === "All"
            ? [...state.allProducts]
            : state.allProducts.filter(p => p.category === state.activeCategory);
        renderProducts(state.displayProducts);
        return;
    }
    updateAlgoDisplay("Search & Filter");

    // Maintain Binary Search demonstration for exact/prefix matches
    const sortedByName = Algorithms.quickSort([...state.allProducts], 'name', true);
    const exactMatch = Algorithms.binarySearch(sortedByName, 'name', query);

    // Find all partial substring matches (case-insensitive)
    const partialMatches = state.allProducts.filter(p => p.name.toLowerCase().includes(query));

    // Combine results (prioritizing binary search match if it somehow wasn't caught by includes)
    const finalResults = [...partialMatches];
    if (exactMatch && !finalResults.some(p => p.id === exactMatch.id)) {
        finalResults.unshift(exactMatch);
    }
    state.displayProducts = finalResults;
    renderProducts(state.displayProducts);
}
// Bind search to button click
document.getElementById('searchBtn').addEventListener('click', performSearch);
// Bind search to Enter key press
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent form submission
        performSearch();
    }
});
// Budget Optimizer (Knapsack)
document.getElementById('optimizeBtn').addEventListener('click', () => {
    const budget = parseInt(document.getElementById('budgetInput').value);
    if (isNaN(budget) || budget <= 0) {
        window.showToast("Please enter a valid budget amount.", "error");
        return;
    }
    updateAlgoDisplay("0/1 Knapsack");
    const scaledBudget = Math.floor(budget / 100);
    const scaledItems = state.allProducts.map(p => ({ ...p, price: Math.floor(p.price / 100) }));

    const result = Algorithms.knapsack01(scaledItems, scaledBudget);
    const selectedOriginals = result.items.map(item => state.allProducts.find(p => p.id === item.id));
    const totalCost = selectedOriginals.reduce((sum, item) => sum + item.price, 0);
    const resultsPanel = document.getElementById('optimizationResults');
    resultsPanel.classList.remove('hidden');
    resultsPanel.innerHTML = `
        <h4>Optimized Selection</h4>
        <p style="font-size: 0.8rem; margin-bottom: 10px;">Maximized Rating: ${result.totalValue.toFixed(1)} stars</p>
        <div class="optimized-items-list">
            ${selectedOriginals.map(item => `
                <div class="optimized-item">
                    <span>${item.name}</span>
                    <span>₹${item.price.toLocaleString('en-IN')}</span>
                </div>
            `).join('')}
        </div>
        <hr style="margin: 10px 0; border: 0; border-top: 1px solid #ccc;">
        <div class="optimized-item" style="font-weight: 700;">
            <span>Total Used:</span>
            <span>₹${totalCost.toLocaleString('en-IN')}</span>
        </div>
        <button class="primary-btn" style="margin-top: 10px; font-size: 0.8rem;" onclick="addOptimizedToCart(${JSON.stringify(selectedOriginals).replace(/"/g, '&quot;')})">Add All to Cart</button>
    `;
});
window.addOptimizedToCart = (items) => {
    items.forEach(item => {
        const existing = state.cart.find(p => p.id === item.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            const product = state.allProducts.find(p => p.id === item.id);
            state.cart.push({ ...product, quantity: 1 });
        }
    });
    renderCart();
    document.getElementById('optimizationResults').classList.add('hidden');
    window.showToast("Optimized items added to Cart!");
};
// Modal Logic Removed (Now handled by Router #algorithms view)
// Resize Listener — CSS Grid handles responsiveness natively, no JS needed.
// --- IMAGE ZOOM LOGIC ---
window.openImageZoom = (id) => {
    const p = state.allProducts.find(prod => prod.id === id);
    if (!p) return;

    const modal = document.getElementById('imageZoomModal');
    const img = document.getElementById('zoomSource');
    const result = document.getElementById('zoomResult');
    const lens = document.getElementById('zoomLens');
    const title = document.getElementById('zoomTitle');
    const cat = document.getElementById('zoomCategory');
    const price = document.getElementById('zoomPrice');
    const addBtn = document.getElementById('zoomAddToCart');

    // Populate data
    title.innerText = p.name;
    cat.innerText = p.category;
    price.innerText = `₹${p.price.toLocaleString('en-IN')}`;
    addBtn.onclick = () => { window.addToCart(p.id); closeImageZoom(); };

    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('visible'), 10);

    // Initialize Lens Zoom
    imageZoom("zoomSource", "zoomResult", p.image);
};

function closeImageZoom() {
    const modal = document.getElementById('imageZoomModal');
    modal.classList.remove('visible');
    setTimeout(() => {
        modal.style.display = 'none';
        document.getElementById('zoomResult').style.display = 'none';
        document.getElementById('zoomLens').style.display = 'none';
    }, 400);
}

document.getElementById('closeZoom').addEventListener('click', closeImageZoom);
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('imageZoomModal')) closeImageZoom();
});

function imageZoom(imgID, resultID, imgSrc) {
    const img = document.getElementById(imgID);
    const result = document.getElementById(resultID);
    const lens = document.getElementById('zoomLens');

    /* Calculate the ratio between result DIV and lens: */
    let cx, cy;

    img.onload = () => {
        if (window.innerWidth <= 1100) return; // Disable zoom on small screens

        result.style.display = "block";
        lens.style.display = "block";

        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;

        result.style.backgroundImage = "url('" + img.src + "')";
        result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";

        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);
    };

    img.src = imgSrc; // Set source AFTER onload handler is attached

    function moveLens(e) {
        e.preventDefault();
        const pos = getCursorPos(e);
        let x = pos.x - (lens.offsetWidth / 2);
        let y = pos.y - (lens.offsetHeight / 2);

        if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
        if (x < 0) { x = 0; }
        if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
        if (y < 0) { y = 0; }

        lens.style.left = x + "px";
        lens.style.top = y + "px";
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }

    function getCursorPos(e) {
        let a, x = 0, y = 0;
        e = e || window.event;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
}

// Init
renderCategories();
renderProducts(state.displayProducts);
renderCart();