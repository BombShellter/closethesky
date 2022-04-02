import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import NavBar from "./Components/NawBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Shelters from "./Pages/Shelters/Shelters";
import Rules from "./Pages/Rules/Rules";
import axios from "axios";


function App() {

  const [shelter, setShelter] = React.useState([])
  const [displayedShelters, setDisplayedShelters] = React.useState(10)

React.useEffect(()=>{
const fetchShelters = async () => {
    const res = await axios.get('https://warm-beach-56088.herokuapp.com/db')
    setShelter(res.data)
}
fetchShelters()
},[])

const currentShelters = shelter.slice( 0, displayedShelters )

function test(){
  setDisplayedShelters((prev:any)=> prev + 10)
}
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shelters" element={<Shelters />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </BrowserRouter>
      <div  className="list-group">
      <ul>
        {currentShelters.map((shelter: any) => (
          <li className="list-group-item" key={shelter.shelter_id}>
            {`№ ${shelter.shelter_number}`} - {`Адрес: ${shelter.adress}`} 
            </li>
        ))}
      </ul>
    </div>
    <div>
      {
        currentShelters.length === shelter.length
        ?<p>Усі сховища завантажено</p>
        : <button onClick={test}>Завантажити ще</button> 
      }
    </div>
    </div>
  );
}

export default App;
