import React, { Component, useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = props =>  {

  const [selectedCharacter,setselectedCharacter] = useState(1);
  const [side,setside] = useState('light');
  const [destroyed,setdestroyed] = useState(false);

  const sideHandler = side => {
    setside(side);
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    setselectedCharacter(charId);
  };

  const destructionHandler = () => {
    setdestroyed(true);
  };

    let content = (
      <React.Fragment>
        <CharPicker
          side={side}
          selectedChar={selectedCharacter}
          onCharSelect={charSelectHandler}
        />
        <Character selectedChar={selectedCharacter} />
        <button onClick={sideHandler.bind(this, 'light')}>
          Light Side
        </button>
        <button onClick={sideHandler.bind(this, 'dark')}>Dark Side</button>
        {this.state.side === 'dark' && (
          <button onClick={destructionHandler}>DESTROY!</button>
        )}
      </React.Fragment>
    );

    if (destroyed) {
      content = <h1>Total destruction!</h1>;
    }
    return content;
  
}

export default App;
