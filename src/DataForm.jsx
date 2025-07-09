import React, { useState } from "react";

export default function DataForm() {
  const [email, setEmail] = useState("asd@gmail.com");
  return (
    <form>
      <h3>Enter Data</h3>
      <div data-testid="image-wrapper">
        <img alt="data.jpg" />
      </div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="color">Color:</label>
      <input placeholder="red" type="color" id="color" />

      <button title="click when ready to submit">Submit</button>
    </form>
  );
}
