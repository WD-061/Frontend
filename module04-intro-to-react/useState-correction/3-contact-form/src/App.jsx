import { useState } from "react";

// Main component of the application
const App = () => {
  // State object to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    msg: "",
  });

  // Function to handle input changes and update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the specific field in formData
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.tel || !formData.msg) {
      alert("All fields are required!");
      return;
    }
    // Log form data to the console
    console.log(formData);

    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      tel: "",
      msg: "",
    });
  };

  return (
    <div>
      <h1>Contact Form</h1>
      {/* Render the form with input fields and a submit button */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: " .5rem",
        }}
      >
        {/* Input field for name */}
        <label>
          Name:{" "}
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        {/* Input field for email */}
        <label>
          Email:{" "}
          <input
            name="email"
            type="text"
            onChange={handleChange}
            value={formData.email}
          />
        </label>
        {/* Input field for telephone */}
        <label>
          Telephone:{" "}
          <input
            name="tel"
            type="text"
            onChange={handleChange}
            value={formData.tel}
          />
        </label>
        {/* Textarea for message */}
        <label>
          Message:{" "}
          <textarea name="msg" onChange={handleChange} value={formData.msg} />
        </label>
        {/* Submit button */}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default App;
