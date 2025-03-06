const form = document.getElementById("contact-form");
const outputParagraph = document.getElementById("output");

// Function to handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate fields are not empty
  if (name === "" || email === "" || message === "") {
    outputParagraph.textContent = "Please fill in all fields.";
    outputParagraph.classList.remove("bg-green-500");
    outputParagraph.classList.add("bg-red-500");
    return;
  }

  // Create the output text
  const template = `<ul>
                        <li>Name: ${name}</li>
                        <li>Email: ${email}</li>
                        <li>Message: ${message}</li>
                      </ul>`;

  // Output the data to the console
  console.log(template);

  // Display the data in the paragraph
  outputParagraph.innerHTML = template;
  outputParagraph.classList.remove("bg-red-500");
  outputParagraph.classList.add("bg-green-500");

  // Clear the form fields
  form.reset();
});

// -----------------------
// ------Alternative------
// -----------------------

// const contactForm = document.querySelector("#contact-form");
// const nameInput = document.querySelector("#name");
// const messageInput = document.querySelector("#message");
// const emailInput = document.querySelector("#email");

// const output = document.querySelector("#output");

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (!nameInput.value || !messageInput.value || !emailInput.value) {
//     output.classList.remove("bg-green-500");
//     output.classList.add("bg-red-500");
//     output.textContent = "Please fill out all fields!";
//   } else {
//     output.innerHTML = `<ul>
//         <li>${nameInput.value}</li>
//         <li>${emailInput.value}</li>
//         <li>${messageInput.value}</li>
//         </ul>`;
//     output.classList.remove("bg-red-500");
//     output.classList.add("bg-green-500");
//   }
//   contactForm.reset();
// });
