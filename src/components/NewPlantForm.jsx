import {useState} from "react";

function NewPlantForm({plants, setPlants}) {
  const [formData, setFormData] = useState({
    name : '',
    image : '', 
    price : ''
  })

  function handleChange(e) {
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  

  function handleSubmit (event) {
    event.preventDefault()

    fetch('http://localhost:6001/plants',
    {
      method : 'POST',
      headers : {
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(formData)
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
   setPlants([...plants, data])
   setFormData({
    name : '',
    image : '',
    price : ''
   })
  })
  .catch((error) => console.log('Fetch failed', error))
  }

 
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value = {formData.name} onChange = {(e) => handleChange(e)}/>
        <input type="text" name="image" placeholder="Image URL" value = {formData.image} onChange = {(e) => handleChange(e)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value = {formData.price} onChange = {(e) => handleChange(e)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
