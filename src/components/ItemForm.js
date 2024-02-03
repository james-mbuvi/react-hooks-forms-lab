import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm ({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category,setCartegory] = useState("produce");


function handleNameChange(event) {
  setName(event.target.value);
}
function handleCartegoryChange(event) {
  setCartegory(event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  onItemFormSubmit({
    id:uuid(),
    name,
    category,
  });
}
return(
  <form className="newItem" onSubmit={handleSubmit}>
    <label>
      Name:
      <input 
      type="text"
      name="name"
      value={name}
      onChange={handleNameChange}
      
      />
    </label>
    <label>
      Category:
      <select
      name="cartegory"
      value={category}
      onChange={handleCartegoryChange}
      >
        <option value="produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </label>
    <button type="submit">Add to List</button>

  </form>
);
}
export default ItemForm;