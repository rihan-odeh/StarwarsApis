import React, { useState } from "react";
import { useHistory } from "react-router";

const Form = (props) => {
const[ info ,setInfo] = useState({ type:'people', id:0});
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    history.push(`/${info.type}/${info.id}`);
  }

  return (
    <form onSubmit={search}>
      <label style={{marginRight:"5px"}}>Search for </label>
      <select onChange={e => setInfo({...info, type: e.target.value})} value={info.type}>
        <option>people</option>
        <option>planets</option>
        <option>starships</option>
        <option >films</option>
      </select>
      <label> Id: </label>
      <input type="number" min={1} onChange={e => setInfo({...info, id:e.target.value})} value={info.id} />
      <input  style={{marginLeft:"5px"}} type="submit" value="Look for" />
    </form>
  );
}

export default Form;
