const products = [
    { name: 'Zomato', rating: 4.5, size: '35 MB', type: 'Food App' },
    { name: 'BlinkIT', rating: 4.3, size: '21', type: 'Food App' },
    { name: 'Wynk Music', rating: 4.5, size: '25 MB', type: 'Music App' },
    { name: 'Swiggy', rating: 4.5, size: '141 MB', type: 'Food App' },
    { name: 'Zepto', rating: 4.5, size: '24 MB', type: 'Food App' },
    { name: 'Domino', rating: 4.6, size: '13 MB', type: 'Food App' },
    { name: 'Country Delight', rating: 4.4, size: '21 MB', type: 'Food App' },
    { name: 'KFC India', rating: 4, size: '51 MB', type: 'Food App' },
    { name: 'EatSure', rating: 4.3, size: '35 MB', type: 'Food App' },
    { name: 'Pocket FM', rating: 4.3, size: '34 MB', type: 'Music App' },
    { name: 'Spotify', rating: 2.6, size: '37 MB', type: 'Music App' },
    { name: 'Star Maker', rating: 4.4, size: '139 MB', type: 'Music App' },
    { name: 'Wynk Music', rating: 4.5, size: '25 MB', type: 'Music App' },
    { name: 'Smule', rating: 3.9, size: '58 MB', type: 'Music App' },
    { name: 'JioSaavn', rating: 4.3, size: '34 MB', type: 'Music App' },
    { name: 'Ultimate Guitar', rating: 4.4, size: '98 MB', type: 'Music App' },
    { name: 'SingSpot', rating: 3, size: '130 MB', type: 'Music App' },
    { name: 'Noises', rating: 4.6, size: '57 MB', type: 'Music App' },
    { name: 'Jio Cinema', rating: 4.1, size: '24 MB', type: 'Entertainment App' },
    { name: 'Eloelo', rating: 4.1, size: '24 MB', type: 'Entertainment App' },
    { name: 'Amazon miniTV', rating: 4.4, size: '5 MB', type: 'Entertainment App' },
    { name: 'Disney+ Hotstar', rating: 4, size: '19 MB', type: 'Entertainment App' },
    { name: 'ZEE5 Movies', rating: 4.5, size: '26 MB', type: 'Entertainment App' },
    { name: 'Youtube Kids', rating: 3.9, size: '40 MB', type: 'Entertainment App' },
    { name: 'NETFLIX', rating: 4, size: '30 MB', type: 'Entertainment App' },
    { name: 'JioTV', rating: 3.9, size: '22 MB', type: 'Entertainment App' },
    { name: 'Amazon Prime video', rating: 3.9, size: '22 MB', type: 'Entertainment App' },
    { name: 'SonyTV', rating: 4.1, size: '19 MB', type: 'Entertainment App' },
    { name: 'NoiseFIT', rating: 4.4, size: '97 MB', type: 'Fitness App' },
    { name: 'Sweatcoin step count', rating: 4.3, size: '80 MB', type: 'Fitness App' },
    { name: 'NIVA bupa Health', rating: 4.5, size: '21 MB', type: 'Fitness App' },
    { name: 'Ovulation tracker', rating: 4.8, size: '57 MB', type: 'Fitness App' },
    { name: 'boAt Crest', rating: 4.5, size: '74 MB', type: 'Fitness App' },
    { name: 'Home Workout', rating: 4.8, size: '16 MB', type: 'Fitness App' },
    { name: 'Pedometer', rating: 4.8, size: '18 MB', type: 'Fitness App' },
    { name: 'Health Tracker', rating: 3.8, size: '30 MB', type: 'Fitness App' },
    { name: 'Fastrack Samrt World', rating: 4.4, size: '94 MB', type: 'Fitness App' },
    { name: 'GlowRoad', rating: 4.2, size: '12 MB', type: 'Buiseness App' },
    { name: 'ZOOM workplace', rating: 4.1, size: '117 MB', type: 'Buiseness App' },
    { name: 'Linkedin', rating: 4.1, size: '36 MB', type: 'Buiseness App' },
    { name: 'Indeed Jobs', rating: 4.4, size: '23 MB', type: 'Buiseness App' },
    { name: 'Naukri', rating: 4.6, size: '16 MB', type: 'Buiseness App' },
    { name: 'Delhivery', rating: 3.7, size: '24 MB', type: 'Buiseness App' },
    { name: 'Microsoft Teams', rating: 4.5, size: '61 MB', type: 'Buiseness App' },
    { name: 'Porter', rating: 4.8, size: '36 MB', type: 'Buiseness App' },
    { name: 'Document Scan', rating: 3.8, size: '53 MB', type: 'Buiseness App' },
    { name: 'Mobile Recharge', rating: 4.6, size: '22 MB', type: 'Buiseness App' },
    { name: 'Free Fire', rating: 4.3, size: '590 MB', type: 'Game App'},
    { name: 'battlegrounds Mobile India', rating: 4.4, size: '0.95 GB', type: 'Game App' },
    { name: 'Coin Master', rating: 4.3, size: '78 MB', type: 'Game App' },
    { name: 'Candy Crush Saga', rating: 4.4, size: '247 MB', type: 'Game App' },
    { name: 'eFootball 2024', rating: 4.4, size: '2.5 GB', type: 'Game App' },
    { name: 'Clash of Clans', rating: 3.5, size: '247 MB', type: 'Game App' },
    { name: 'Call of Duty', rating: 4.2, size: '2.5 GB', type: 'Game App' },
    { name: 'EA Sports FC', rating: 4.1, size: '115 MB', type: 'Game App' },
    { name: 'Whiteout Survival', rating: 4.4, size: '481 MB', type: 'Game App' },
    { name: 'Seekho: Learn app', rating: 4.6, size: '26 MB', type: 'Education App' },
    { name: 'Duolingo', rating: 4.5, size: '37 MB', type: 'Education App' },
    { name: 'Unacademy', rating: 3.9, size: '69 MB', type: 'Education App' },
    { name: 'PW: JEE/NEET, UPSC, GATE', rating: 4.6, size: '45 MB', type: 'Education App' },
    { name: 'Plantix-your crop doctor', rating: 4.2, size: '22 MB', type: 'Education App' },
    { name: 'e-Shikshakosh', rating: 3.5, size: '20 MB', type: 'Education App' },
    { name: 'Brainly', rating: 4.4, size: '36 MB', type: 'Education App' },
    { name: 'Lingutown', rating: 4.3, size: '38 MB', type: 'Education App' },
    { name: 'Textbook: Exam preparation app', rating: 4.4, size: '47 MB', type: 'Education App' },
    { name: 'Bible app for kids', rating: 3.9, size: '52 MB', type: 'Education App' },
    { name: 'Housing: Buy Rent Sell', rating: 4.5, size: '64 MB', type: 'House & Homes App' },
    { name: '99 Acres', rating: 4.3, size: '67 MB', type: 'House & Homes App' },
    { name: 'NoBroker Rent, Buy, Sell flats', rating: 4.3, size: '21 MB', type: 'House & Homes App' },
    { name: 'Utec', rating: 3.6, size: '46 MB', type: 'House & Homes App' },
    { name: 'Bihar Sugam Smart Meter', rating: 3.7, size: '01 MB', type: 'House & Homes App' },
    { name: 'MagicBricks.com', rating: 4.2, size: '45 MB', type: 'House & Homes App' },
    { name: 'AC Remote', rating: 4.2, size: '18 MB', type: 'House & Homes App' },
    { name: 'KOLO: Home Interiors', rating: 4.1, size: '28 MB', type: 'House & Homes App' },
    { name: 'Urban Company', rating: 4.8, size: '55 MB', type: 'House & Homes App' },
    { name: 'Remote.com', rating: 4.3, size: '31 MB', type: 'House & Homes App' },
    { name: 'PhonePe', rating: 4.4, size: '40 MB', type: 'Finance App' },
    { name: 'Airtel Thanks', rating: 4.3, size: '14 MB', type: 'Finance App' },
    { name: 'Google Pay', rating: 4.4, size: '36 MB', type: 'Finance App' },
    { name: 'Paytm', rating: 4.5, size: '61 MB', type: 'Finance App' },
    { name: 'Groww Stocks', rating: 4.4, size: '32 MB', type: 'Finance App' },
    { name: 'Bajaj Finserv', rating: 4.8, size: '33 MB', type: 'Finance App' },
    { name: 'YONO SBI', rating: 4.8, size: '72 MB', type: 'Finance App' },
    { name: 'Angel One', rating: 4.7, size: '51 MB', type: 'Finance App' },
    { name: 'Tonkeeper: Ton Wallet', rating: 4.7, size: '29 MB', type: 'Finance App' },
    { name: 'Upstox', rating: 4.5, size: '48 MB', type: 'Finance App' },
    { name: 'WhatsApp Messenger', rating: 4.1, size: '48 MB', type: 'Communication App' },
    { name: 'Telegram', rating: 4.2, size: '100 MB', type: 'Communication App' },
    { name: 'TrueCaller', rating: 4.4, size: '32 MB', type: 'Communication App' },
    { name: 'Snapchat', rating: 4.3, size: '68 MB', type: 'Communication App' },
    { name: 'WhatsApp Buiseness', rating: 4.2, size: '52 MB', type: 'Communication App' },
    { name: 'Messenger', rating: 4.2, size: '51 MB', type: 'Communication App' },
    { name: 'CallApp: callerID and Block', rating: 3.9, size: '33 MB', type: 'Communication App' },
    { name: 'show CallerId & Spam block', rating: 4.0, size: '26 MB', type: 'Communication App' },
    { name: 'IMO: International Call & Chat', rating: 4.1, size: '48 MB', type: 'Communication App' },
    { name: 'GetContact', rating: 3.6, size: '89 MB', type: 'Communication App' }
];

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h2>${product.name}</h2>
            <p>Rating: ${product.rating}</p>
            <p>Size: ${product.size}</p>
            <p>Type: ${product.type}</p>
        `;
        productList.appendChild(productItem);
    });
}

displayProducts(products);
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});
document.getElementById('sortSelect').addEventListener('change', function() {
    const sortBy = this.value;
    let sortedProducts = [...products];
    switch (sortBy) {
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'size':
            sortedProducts.sort((a, b) => parseInt(a.size) - parseInt(b.size));
            break;
        case 'az':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'za':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'Food App':
            sortedProducts = products.filter(product => product.type === 'Food App');
            break;
        case 'Music App':
            sortedProducts = products.filter(product => product.type === 'Music App');
            break;
        case 'Entertainment App':
            sortedProducts = products.filter(product => product.type === 'Entertainment App');
            break;
        case 'Fitness App':
            sortedProducts = products.filter(product => product.type === 'Fitness App');
            break;
        case 'Buiseness App':
            sortedProducts = products.filter(product => product.type === 'Buiseness App');
            break;
        case 'Game App':
            sortedProducts = products.filter(product => product.type === 'Game App');
            break;
        case 'Education App':
            sortedProducts = products.filter(product => product.type === 'Education App');
            break;
        case 'House & Homes App':
            sortedProducts = products.filter(product => product.type === 'House & Homes App');
            break;
        case 'Finance App':
            sortedProducts = products.filter(product => product.type === 'Finance App');
            break;
        case 'Communication App':
            sortedProducts = products.filter(product => product.type === 'Communication App');
            break;
    }
    displayProducts(sortedProducts);
});