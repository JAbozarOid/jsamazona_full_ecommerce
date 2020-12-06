import data from '../data.js' // .. means because we are in screens folder we should go out from screens folder and then src folder
// it's an object
const HomeScreen = {
    // this is a function
    render: () => {
        // return an un order list products
        // this `` sign means template litral, so it's possible to return an string with multiple line and also we can use javascripts objects inside litrals using $ 
        const {products} = data;
        return `
            <ul class="products">
            ${products.map(
            (product) => `
            <li>
                <div class="product">
                    <a href="/#/product/${product._id}">
                        <img src="${product.image}" alt="${product.name}" />
                    </a>
                <div class="product-name">
                    <a href="/#/product/1">
                        ${product.name}
                    </a>
                </div>
                <div class="product-brand">
                    ${product.brand}
                </div>
                <div class="product-price">
                    $${product.price}
                </div>
                </div>
            </li>
            `
            ).join('\n')}
        `;
    },
};
export default HomeScreen;