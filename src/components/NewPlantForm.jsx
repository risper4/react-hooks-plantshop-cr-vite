import {useState} from "react";

function NewPlantForm({addToPage}) {
  const [name, setName] = useState('')
  const [image , setImage] = useState('')
  const [price, setPrice] = useState('')

  function handleSubmit (event) {
    event.preventDefault()

    const newItem = {
      name : name,
      image : image,
      price : parseFloat(price)
    }
  }


  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
