import React from 'react';
import Controls from '../Controls/Controls';
const Header = (props) => {
  return (
    <section>
      <h1>Swapi-Box</h1>
      <Controls retrievePeople={props.retrievePeople} retrievePlanets={props.retrievePlanets} state={props.state}/>
    </section>
  )
}

export default Header;