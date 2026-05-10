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

  fetch('http://localhost:6001/plants',
    {
      method : 'POST',
      headers : {
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(newItem)
    }
  )
  .then((response) => {
    if(!response.ok){
      throw new Error('Error', response.status)
    }else{
      return response.json()
    }
  })
  .then((data) => {
    addToPage(data)
    setName('')
    setImage('')
    setPrice('')
  })
  .catch((error) => console.log('Fetch failed', error))
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value = {name} onChange = {(e) => setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value = {image} onChange = {(e) => setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value = {price} onChange = {(e) => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
