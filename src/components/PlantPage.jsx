
import {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";




function PlantPage() {

  const [search, setSearch] = useState(null)

  // const filteredPlants = plants.filter((plant) => {
  //   plant.name.toLowerCase().includes(search.toLowerCase())
  // })

  function addToPage(newItem) {
    setPlants([...prev, newItem])
  }

  const [plants, setPlants] = useState([])
  // const [loading, setLoading] = useState(null)
  useEffect(() => {
     fetch('http://localhost:6001/plants')
     .then((response) => {
        if(!response.ok){
        throw new Error('Error occurred', response.status)
      }else{
        return response.json()
      }
    })
    .then((data) => {
      setPlants(data)
    } )
    .catch((error) => console.log('Fetching failed', error))
  }, [])



  return (
    <main>
      <NewPlantForm addToPage = {addToPage}/>
      <Search search = {search} setSearch = {setSearch}/>
      <PlantList plants = {plants}/>
    </main>
  );
}

export default PlantPage;
