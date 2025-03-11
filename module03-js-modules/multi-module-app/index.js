import { fetchProducts } from "./modules/network.js";
import { renderProducts } from "./modules/ui.js";

const allProducts = await fetchProducts();

console.log(allProducts);

const productsContainer = document.getElementById("products-container");

allProducts?.forEach((product) => renderProducts(product, productsContainer));
