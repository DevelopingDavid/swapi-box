import React from 'react';
import Controls from '../Controls/Controls';
const Header = (props) => {
  return (
    <section className='header-container'>
      <h1>Swapi-Box</h1>
        <Controls retrievePeople={props.retrievePeople} retrievePlanets={props.retrievePlanets} retrieveVehicles={props.retrieveVehicles} setFilter={props.setFilter} state={props.state}/>
    </section>
  )
}

export default Header;