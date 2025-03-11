const addToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = [...cart, product];
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

export { addToCart };
