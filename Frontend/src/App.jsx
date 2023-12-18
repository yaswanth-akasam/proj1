import { useState } from "react";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";



function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get('/api/cities')
      .then((response) => {
        setCities(response.data);
      })
    
      .catch((error) => { 
        console.log(error);
      });
  },[]);

  return (
    <>
      <h1>Btech chai vala</h1>
      <h2>cities : {cities.length}</h2>
      
        {cities.map((city, index) => (
           <>
            <h4>{city.id}</h4>
            <h4>{city.city}</h4>
            <h4>{city.state}</h4>
            </>
            
          )
          
        )}
      
    </>
  );
}

export default App;
