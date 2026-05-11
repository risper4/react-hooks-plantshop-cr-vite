
import {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";




function PlantPage() {

  const [search, setSearch] = useState('')

 
  // function addToPage(newItem) {
  //   setPlants((prev) => ([...prev, newItem]))
  // }

  const [plants, setPlants] = useState([])
  

   let filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

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
      <NewPlantForm plants = {plants} setPlants = {setPlants}/>
      <Search search = {search} setSearch = {setSearch}/>
      <PlantList plants = {filteredPlants} />
    </main>
  );
}

export default PlantPage;
