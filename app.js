/* 
   SURYANSH FOOTWEAR - SHOWROOM ENGINE 
   Author: Antigravity AI
*/

// PREMIUM PRODUCT CATALOG DATABASE
const PRODUCTS_DATA = [
    {
        id: "classic-oxford",
        title: "Executive Oxford Brogues",
        category: "classics",
        categoryDisplay: "Executive Classics",
        price: 280,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
        description: "Hand-crafted from select, vegetable-tanned French calfskin leather. These brogues feature meticulous wingtip perforation, a custom orthopedic layer, and a robust Goodyear welt construct that allows resoling for decades.",
        rating: 5,
        reviews: 48,
        sizes: [7, 8, 9, 10, 11],
        colors: [
            { name: "Cognac", code: "#5c4033" },
            { name: "Espresso", code: "#2b1d16" },
            { name: "Onyx", code: "#000000" }
        ],
        badge: "Crafted"
    },
    {
        id: "classic-monk",
        title: "Monk Strap Leather Loafers",
        category: "classics",
        categoryDisplay: "Executive Classics",
        price: 260,
        originalPrice: 310,
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800",
        description: "An elegant slip-on masterpiece featuring polished double buckle straps and dynamic instep flexibility. Formulated with our proprietary high-density comfort core to support natural alignment.",
        rating: 4.9,
        reviews: 32,
        sizes: [8, 9, 10, 11],
        colors: [
            { name: "Onyx Black", code: "#0d0d0d" },
            { name: "Oxblood", code: "#4a0404" }
        ],
        badge: "Special Offer"
    },
    {
        id: "athlete-pinnacle",
        title: "Pinnacle Elite Runners",
        category: "athletic",
        categoryDisplay: "Performance Active",
        price: 190,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
        description: "Supercharged cushioning designed to propel you forward. Features a carbon fiber energy plate, breathable engineered mesh, and customized shock absorption layers tailored to protect critical foot joints.",
        rating: 5,
        reviews: 79,
        sizes: [7, 8, 9, 10, 11],
        colors: [
            { name: "Crimson", code: "#ba1313" },
            { name: "Cobalt", code: "#133aba" },
            { name: "Charcoal", code: "#2e2e2e" }
        ],
        badge: "Best Seller"
    },
    {
        id: "athlete-trail",
        title: "VaporFly Trail Racers",
        category: "athletic",
        categoryDisplay: "Performance Active",
        price: 210,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
        description: "Conquer any terrain with confidence. Waterproof, high-traction Vibram outsoles combined with a protective dual-density midsole grid engineered to stabilize off-road navigation.",
        rating: 4.8,
        reviews: 51,
        sizes: [8, 9, 10, 11],
        colors: [
            { name: "Emerald", code: "#145c34" },
            { name: "Neon Orange", code: "#ff6600" },
            { name: "Stealth", code: "#141414" }
        ],
        badge: "New"
    },
    {
        id: "heels-velvet",
        title: "Velvet Night Stilettos",
        category: "heels",
        categoryDisplay: "Luxury Heels",
        price: 340,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
        description: "The height of visual sophistication. Meticulously engineered heel-stem weight distribution reduces pressure on the balls of your feet, enabling elegant stride without standard high-heel exhaustion.",
        rating: 5,
        reviews: 26,
        sizes: [5, 6, 7, 8, 9],
        colors: [
            { name: "Teal Velvet", code: "#005a5b" },
            { name: "Scarlet", code: "#800000" },
            { name: "Deep Onyx", code: "#050505" }
        ],
        badge: "Exquisite"
    },
    {
        id: "heels-satin",
        title: "Aura Glass Satin Heels",
        category: "heels",
        categoryDisplay: "Luxury Heels",
        price: 380,
        originalPrice: 450,
        image: "https://images.unsplash.com/photo-1596702994290-9f490a6f7451?auto=format&fit=crop&q=80&w=800",
        description: "A luxury wedding & formal essential. Made with shimmering silk-satin wraps, embellished heel details, and specialized high-memory foam cushions designed to ensure a delightful gala experience.",
        rating: 4.9,
        reviews: 18,
        sizes: [6, 7, 8, 9],
        colors: [
            { name: "Ivory", code: "#fffff0" },
            { name: "Blush Gold", code: "#f0dac2" },
            { name: "Rose Quartz", code: "#ecc4c4" }
        ],
        badge: "Limited Edition"
    },
    {
        id: "sneakers-urban",
        title: "Urban Retro Sneakers",
        category: "sneakers",
        categoryDisplay: "Urban Sneakers",
        price: 145,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
        description: "Classic street heritage meets modern anatomical footbeds. Hand-stitched premium canvas panels blended with high-grade rubber bumpers that absorb daily concrete fatigue.",
        rating: 4.8,
        reviews: 94,
        sizes: [7, 8, 9, 10, 11],
        colors: [
            { name: "Volt Green", code: "#adff2f" },
            { name: "Slate Gray", code: "#708090" }
        ],
        badge: "Trending"
    },
    {
        id: "sneakers-high",
        title: "Court High-Tops",
        category: "sneakers",
        categoryDisplay: "Urban Sneakers",
        price: 160,
        image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&q=80&w=800",
        description: "Premium basketball-inspired high-tops. Offering robust ankle support collars, premium suede panels, and memory foam insoles that adjust dynamically to your daily stride patterns.",
        rating: 4.9,
        reviews: 43,
        sizes: [8, 9, 10, 11],
        colors: [
            { name: "Oreo White", code: "#e6e6e6" },
            { name: "Cyberpunk Pink", code: "#ff1493" }
        ],
        badge: "Exclusive"
    }
];

// STATE MANAGEMENT
let shoppingCart = [];
let currentQuickViewProduct = null;
let selectedSize = null;
let selectedColor = "";

// CORE UI INITIALIZATION ON LOAD
document.addEventListener("DOMContentLoaded", () => {
    loadSavedCart();
    renderProducts("all");
    setupNavigationScroll();
    setupMobileMenu();
    setupCategoryFilters();
    setupCartDrawer();
    setupQuickViewModal();
    setupTestimonialsSlider();
    setupAppointmentForm();
    setupNewsletterForm();
});

// LOAD SAVED BAG ITEMS
function loadSavedCart() {
    const saved = localStorage.getItem("suryansh_cart");
    if (saved) {
        try {
            shoppingCart = JSON.parse(saved);
        } catch (e) {
            shoppingCart = [];
        }
    }
    updateCartUI();
}

// SAVE CART ITEMS
function saveCart() {
    localStorage.setItem("suryansh_cart", JSON.stringify(shoppingCart));
    updateCartUI();
}

// DYNAMIC PRODUCT RENDERING WITH TRANSITION FADES
function renderProducts(filterCategory) {
    const grid = document.getElementById("products-container");
    if (!grid) return;

    // Filter data
    const filtered = filterCategory === "all" 
        ? PRODUCTS_DATA 
        : PRODUCTS_DATA.filter(p => p.category === filterCategory);

    // Apply fade animation
    grid.style.opacity = 0;
    grid.style.transform = "translateY(15px)";
    grid.style.transition = "opacity 0.3s ease, transform 0.3s ease";

    setTimeout(() => {
        grid.innerHTML = "";
        
        filtered.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            
            const originalPriceMarkup = product.originalPrice 
                ? `<del>$${product.originalPrice}</del>` 
                : "";
                
            const badgeClass = product.badge === "Special Offer" ? "sale" : "";
            const ratingStars = Array(Math.floor(product.rating)).fill('<i class="fa-solid fa-star"></i>').join('') +
                                (product.rating % 1 !== 0 ? '<i class="fa-regular fa-star-half-stroke"></i>' : '');

            card.innerHTML = `
                <div class="product-image-container">
                    <span class="product-badge ${badgeClass}">${product.badge}</span>
                    <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy">
                    <div class="product-overlay">
                        <button class="overlay-btn quick-view-btn" data-id="${product.id}" title="Quick View">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button class="overlay-btn add-quick-btn" data-id="${product.id}" title="Add to Bag">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <div>
                        <div class="product-meta">
                            <span class="product-category">${product.categoryDisplay}</span>
                            <span class="product-rating">${ratingStars}</span>
                        </div>
                        <h3 class="product-title">${product.title}</h3>
                    </div>
                    <div class="product-footer">
                        <span class="product-price">${originalPriceMarkup}$${product.price}</span>
                        <a href="#quickview-modal" class="product-card-link quick-view-trigger" data-id="${product.id}">Quick View</a>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        // Add event listeners to newly generated elements
        attachProductCardListeners();

        // Reveal grid
        grid.style.opacity = 1;
        grid.style.transform = "translateY(0)";
    }, 300);
}

// EVENT LISTENERS FOR GENERATED PRODUCTS
function attachProductCardListeners() {
    // Quick view triggers
    document.querySelectorAll(".quick-view-btn, .quick-view-trigger").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const id = btn.getAttribute("data-id");
            openQuickView(id);
        });
    });

    // Fast Add to Bag (pre-selects first size & color)
    document.querySelectorAll(".add-quick-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            fastAddToCart(id);
        });
    });
}

// CATEGORY FILTER TOGGLES
function setupCategoryFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const filter = btn.getAttribute("data-filter");
            renderProducts(filter);
        });
    });
}

// HEADER SCROLL EVENT
function setupNavigationScroll() {
    const header = document.getElementById("site-header");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {
        // Sticky Header Shrinking
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Highlight Active Link in Nav based on scroll location
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            } else if (window.scrollY < 200 && link.getAttribute("href") === "#") {
                link.classList.add("active");
            }
        });
    });
}

// MOBILE HAMBURGER MENU
function setupMobileMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu a");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        const icon = menuToggle.querySelector("i");
        if (navMenu.classList.contains("open")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            menuToggle.querySelector("i").className = "fa-solid fa-bars";
        });
    });
}

// CART DRAWER OPEN/CLOSE MECHANICS
function setupCartDrawer() {
    const cartToggle = document.getElementById("cart-toggle");
    const closeCart = document.getElementById("close-cart");
    const cartDrawer = document.getElementById("cart-drawer");
    const cartBackdrop = document.getElementById("cart-backdrop");
    const checkoutBtn = document.getElementById("checkout-btn");

    const openCart = () => {
        cartDrawer.classList.add("open");
        cartBackdrop.classList.add("show");
        document.body.style.overflow = "hidden"; // disable scroll
    };

    const closeCartFn = () => {
        cartDrawer.classList.remove("open");
        cartBackdrop.classList.remove("show");
        document.body.style.overflow = ""; // enable scroll
    };

    cartToggle.addEventListener("click", openCart);
    closeCart.addEventListener("click", closeCartFn);
    cartBackdrop.addEventListener("click", closeCartFn);

    // Checkout processing simulation
    checkoutBtn.addEventListener("click", () => {
        if (shoppingCart.length === 0) {
            showToast("Your Shopping Bag is empty!", "fa-circle-exclamation");
            return;
        }
        showToast("Order initiated! Redirecting to secure gate...", "fa-shield-halved");
        setTimeout(() => {
            shoppingCart = [];
            saveCart();
            closeCartFn();
            showToast("Payment simulated successfully! Thank you.", "fa-circle-check");
        }, 2000);
    });
}

// ADD ITEM TO BAG
function addToCart(productId, quantity, size, color) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    // Check if item with same size and color already in cart
    const existingIndex = shoppingCart.findIndex(
        item => item.id === productId && item.size === size && item.color === color
    );

    if (existingIndex > -1) {
        shoppingCart[existingIndex].quantity += quantity;
    } else {
        shoppingCart.push({
            id: productId,
            title: product.title,
            price: product.price,
            image: product.image,
            size: size,
            color: color,
            quantity: quantity
        });
    }

    saveCart();
    showToast(`Added ${product.title} (Size ${size}, ${color}) to Bag!`, "fa-circle-check");
}

// FAST ADD (FOR DIRECT HOME CLICKING)
function fastAddToCart(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const defaultSize = product.sizes[1] || product.sizes[0];
    const defaultColor = product.colors[0].name;

    addToCart(productId, 1, defaultSize, defaultColor);
}

// UPDATE CART LIST IN DRAWER UI
function updateCartUI() {
    const container = document.getElementById("cart-items-container");
    const countBadge = document.getElementById("cart-badge-count");
    const subtotalText = document.getElementById("cart-subtotal");

    if (!container) return;

    // Update global badge
    const totalItemsCount = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
    countBadge.innerText = totalItemsCount;

    if (shoppingCart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-message">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Your premium shopping bag is currently empty.</p>
                <a href="#collections" class="category-link" id="start-shopping" style="margin-top: 1rem; display: inline-block;">Discover Collections</a>
            </div>
        `;
        
        const startShopping = document.getElementById("start-shopping");
        if (startShopping) {
            startShopping.addEventListener("click", () => {
                document.getElementById("close-cart").click();
            });
        }
        
        subtotalText.innerText = "$0.00";
        return;
    }

    container.innerHTML = "";
    let subtotal = 0;

    shoppingCart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <div class="cart-item-meta">Size: ${item.size} | Finish: ${item.color}</div>
                <div class="cart-item-price">$${item.price}</div>
                <div class="cart-item-qty">
                    <button class="qty-btn dec-qty" data-index="${index}"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-val">${item.quantity}</span>
                    <button class="qty-btn inc-qty" data-index="${index}"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <button class="remove-cart-item" data-index="${index}" aria-label="Remove item">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        container.appendChild(cartItemDiv);
    });

    subtotalText.innerText = `$${subtotal.toFixed(2)}`;

    // Attach quantity and remove handlers
    document.querySelectorAll(".dec-qty").forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.getAttribute("data-index"));
            if (shoppingCart[idx].quantity > 1) {
                shoppingCart[idx].quantity -= 1;
            } else {
                shoppingCart.splice(idx, 1);
            }
            saveCart();
        });
    });

    document.querySelectorAll(".inc-qty").forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.getAttribute("data-index"));
            shoppingCart[idx].quantity += 1;
            saveCart();
        });
    });

    document.querySelectorAll(".remove-cart-item").forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.getAttribute("data-index"));
            const removedTitle = shoppingCart[idx].title;
            shoppingCart.splice(idx, 1);
            saveCart();
            showToast(`Removed ${removedTitle} from Bag.`, "fa-circle-info");
        });
    });
}

// QUICK VIEW MODAL OPERATIONS
function setupQuickViewModal() {
    const modal = document.getElementById("quickview-modal");
    const closeModal = document.getElementById("close-modal");
    const modalBackdrop = document.getElementById("modal-backdrop");
    const modalAddToCart = document.getElementById("modal-add-to-cart");

    const closeModalFn = () => {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    };

    closeModal.addEventListener("click", closeModalFn);
    modalBackdrop.addEventListener("click", closeModalFn);

    // Modal Add To Bag action
    modalAddToCart.addEventListener("click", () => {
        if (!currentQuickViewProduct) return;
        addToCart(currentQuickViewProduct.id, 1, selectedSize, selectedColor);
        closeModalFn();
    });
}

// OPEN & DYNAMICALLY POPULATE QUICK VIEW MODAL
function openQuickView(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    currentQuickViewProduct = product;
    
    // Set active defaults
    selectedSize = product.sizes[1] || product.sizes[0];
    selectedColor = product.colors[0].name;

    // Load data in elements
    document.getElementById("modal-image").src = product.image;
    document.getElementById("modal-image").alt = product.title;
    document.getElementById("modal-category").innerText = product.categoryDisplay.toUpperCase();
    document.getElementById("modal-title").innerText = product.title;
    const originalPriceMarkup = product.originalPrice 
        ? `<del style="color: var(--text-muted); font-size: 1.2rem; font-weight: 400; margin-right: 0.8rem;">$${product.originalPrice}</del>` 
        : "";
    document.getElementById("modal-price").innerHTML = `${originalPriceMarkup}$${product.price}`;
    document.getElementById("modal-desc").innerText = product.description;
    document.getElementById("modal-reviews-count").innerText = `(${product.reviews} Verified Buyers)`;

    // Sizing choices rendering
    const sizeContainer = document.querySelector(".size-selector");
    sizeContainer.innerHTML = "";
    product.sizes.forEach(size => {
        const btn = document.createElement("button");
        btn.className = `size-btn ${size === selectedSize ? 'active' : ''}`;
        btn.innerText = size;
        btn.addEventListener("click", () => {
            document.querySelectorAll(".size-selector .size-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedSize = size;
        });
        sizeContainer.appendChild(btn);
    });

    // Color choices rendering
    const colorContainer = document.querySelector(".color-selector");
    colorContainer.innerHTML = "";
    product.colors.forEach((color, idx) => {
        const dot = document.createElement("span");
        dot.className = `color-dot ${idx === 0 ? 'active' : ''}`;
        dot.style.setProperty("--dot-color", color.code);
        dot.setAttribute("data-name", color.name);
        dot.addEventListener("click", () => {
            document.querySelectorAll(".color-selector .color-dot").forEach(d => d.classList.remove("active"));
            dot.classList.add("active");
            selectedColor = color.name;
        });
        colorContainer.appendChild(dot);
    });

    // Open Modal
    const modal = document.getElementById("quickview-modal");
    modal.classList.add("open");
    document.body.style.overflow = "hidden"; // disable background scroll
}

// VOICE OF EXCELLENCE - SLIDER CAROUSEL
function setupTestimonialsSlider() {
    const track = document.getElementById("testimonial-track");
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevBtn = document.getElementById("prev-test");
    const nextBtn = document.getElementById("next-test");
    
    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let autoSlideInterval = null;

    const updateSlider = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const nextSlide = () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateSlider();
    };

    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    // Auto sliding interval setup
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, 6000);
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    startAutoSlide();
}

// FITTING RESERVATION FORM VALIDATION
function setupAppointmentForm() {
    const form = document.getElementById("fitting-form");
    if (!form) return;

    // Set minimal selectable styling date as today
    const dateInput = document.getElementById("form-date");
    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.min = today;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Extra dynamic checks
        const name = document.getElementById("form-name").value.trim();
        const email = document.getElementById("form-email").value.trim();
        const date = document.getElementById("form-date").value;

        if (name.length < 3) {
            showToast("Please enter a valid, complete name.", "fa-triangle-exclamation");
            return;
        }

        // Simulating booking request receipt
        showToast("Transmitting fitting request to Lounge concierge...", "fa-paper-plane");

        setTimeout(() => {
            form.reset();
            showToast(`Success! Fitting session booked for ${date}. Check email.`, "fa-circle-check");
        }, 1800);
    });
}

// NEWSLETTER FORM HANDLER
function setupNewsletterForm() {
    const form = document.getElementById("newsletter-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = form.querySelector("input[type='email']");
        const email = emailInput.value.trim();

        showToast("Adding you to our VIP registry...", "fa-paper-plane");

        setTimeout(() => {
            emailInput.value = "";
            showToast("Success! Welcome to the Suryansh Royal registry.", "fa-crown");
        }, 1200);
    });
}

// PREMIUM FLOATING TOAST NOTIFICATION WINDOW
function showToast(message, iconName = "fa-circle-check") {
    const toast = document.getElementById("toast-alert");
    const msgSpan = document.getElementById("toast-message");
    const icon = toast.querySelector("i");

    if (!toast) return;

    msgSpan.innerText = message;
    icon.className = `fa-solid ${iconName}`;

    // Pop toast in
    toast.classList.add("show");

    // Fade toast out after 4 seconds
    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);
}
