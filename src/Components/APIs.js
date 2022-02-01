import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";



const APIs = (props) => {
  let ignore= false; 
  /*
  To ignore the API response. Whenever the input changes, state is set and hence useEffect runs again, which invokes a new API call. 
  To ignore the old API call result, the returned function of useEffect sets the previous useEffect localvariable to false.
   This guarentess that the only the last rendered useEffect( and the API call that triggered along) and its result is stored.
  */

  const [data, setData] = useState({});
  const { id,type } = useParams();    
  var isPeople= false; 
  var isPlanet= false; 
  var isStarship= false; 
 
                                                                                               

  useEffect(() => {
    axios.get(`https://swapi.dev/api/${type}/${id}/?format=json`)
      .then(res => {
        console.log("------------- then: ",res);                 
        setData(res.data);
      })
      .catch(err => {
        console.error("------------- error: ",err);
        setData({error: "There is no api with this Id!"})
      });
      
  return ()=>{
    ignore = true;
  }
  }, [id,type]);

  if(type==='people'){
isPeople = true; 
  } 
  if(type==='planets'){
    isPlanet = true; 
      } 
      if(type==='starships'){
        isStarship = true; 
          } 
          

 
  return (
    data.error ?
    <h3>{data.error}</h3> :
    <div> 
    <div className="div">
       {(() => {
        if (isPeople) {
          return (
           
            <div>
                   <h3>You have searched for: </h3> 
      <h4>Person's Name: {data.name}</h4>
      <h4>Person's Id: {id}</h4>
      <p>
          <a href= {data.homeworld}>Click to vist the home world of this person</a><br/>
       
        Height: {data.height}<br/>
        Mass: {data.mass}<br/>
        Skin color: {data.skin_color}<br/>
        Hair Color: {data.hair_color}
      </p>
            </div>
          )
        } else if (isPlanet) {
          return (
  
            <div>  <h3>You have searched for: </h3> 
            <h4>Planet's Name: {data.name} </h4>
            <h4>Planet's Id: {id}</h4>
            <p>
              
              Climate: {data.climate}<br/>
              Terrain: {data.terrain}<br/>
              Surface Water: {data.surface_water ? "true": "false"}<br/>
              Population: {data.population}
            </p></div>
          )
        } else if (isStarship) {
          return (
   
            <div><h3>You have searched for: </h3> 
            <h4>Starship's Name: {data.name}</h4>
            <h4>Starship's Id: {id}</h4>
            <p>
            Model: {data.model}<br/>
            Manufacturer: {data.manufacturer}<br/>
            Cost in credits: {data.cost_in_credits}<br/>
            Length: {data.length}
            </p></div>
          )
        }
        else {
          return (
  
            <div><h3>You have searched for: </h3> 
            <h4>Film's Name: {data.title}</h4>
            <h4>Film's Id: {id}</h4>
            <p>
            Episode Id: {data.episode_id}<br/>
            Opening Crawl: {data.opening_crawl}<br/>
            Director: {data.director}<br/>
            Producer: {data.producer}<br/>
            Release Date: {data.release_date}<br/>
            Characters: {data.characters}<br/>
            
            </p></div>
          )
        }
      })()}
      
    
      </div>
    </div>
  );

}

export default APIs;