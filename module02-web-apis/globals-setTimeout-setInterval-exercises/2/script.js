// Step 1: Use setTimeout to schedule the creation of a promotion message after 3 seconds
setTimeout(() => {
  // Step 2: Create a new DOM element for the promotion message
  const promotionMessage = document.createElement("div");

  // Step 3: Add some text to the promotion message
  promotionMessage.textContent =
    "Special Offer: Get 20% off your next purchase!";

  // Step 4: Use Tailwind CSS to style the message
  promotionMessage.className = "bg-red-500 p-4 rounded-lg text-center";

  // Step 5: Append the new element to the 'message-container' div
  const messageContainer = document.getElementById("message-container");
  messageContainer.appendChild(promotionMessage);
}, 3000);
