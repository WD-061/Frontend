import { addToCart } from "./storage.js";

const renderProducts = (product, container) => {
  const card = document.createElement("div");
  card.setAttribute("id", product.id);
  card.className =
    "shadow-xl hover:shadow-2xl hover:cursor-pointer rounded-md w-full h-full flex flex-col bg-slate-800";
  //   card.textContent = product.title;

  const figure = document.createElement("figure");
  figure.className = "rounded-t-md overflow-hidden w-full h-64";

  const img = document.createElement("img");
  img.className = "w-full h-full";
  img.src = product.image;
  img.alt = product.title;
  figure.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.className = "flex flex-col p-4 flex-grow";

  const cardTitle = document.createElement("h2");
  cardTitle.className =
    "text-xl font-semibold border-b border-gray-400 pb-2 mb-2 truncate";
  cardTitle.textContent = product.title;
  cardBody.appendChild(cardTitle);

  const cardPrice = document.createElement("p");
  cardPrice.className = "text-lg font-bold mb-4";
  cardPrice.textContent = "$" + product.price.toFixed(2);
  cardBody.appendChild(cardPrice);

  const cardActions = document.createElement("div");
  cardActions.className = "flex justify-end mt-auto";

  const addBtn = document.createElement("button");
  addBtn.className =
    "bg-gray-500 hover:bg-gray-700 p-2 rounded-lg font-bold text-white";
  addBtn.textContent = "Add to cart";
  addBtn.addEventListener("click", () => {
    addToCart(product);
  });

  cardActions.appendChild(addBtn);

  card.appendChild(figure);
  card.appendChild(cardBody);
  cardBody.appendChild(cardActions);

  container.appendChild(card);
};

export { renderProducts };
