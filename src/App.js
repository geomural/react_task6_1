import React, {useState} from 'react';
import './App.css';
import WorldClock from './components/WorldClock';
import Clock from './components/Clock';

function App() {

  const [clockGroup, setClockGroup] = useState([]);

  const addClock = (name, zone) => {
    let zoneInt = parseInt(zone);
    
    if ((!zoneInt) && (zoneInt !== 0)) {      
      alert("Incorrect zone!");
      return;
    }
    
    const found = clockGroup.find(el => el.id === name);
    if (found) {
      alert("This city has already shown.");
      return;
    }   

    let newClock = {id: name, zone: zoneInt};

    if (clockGroup.length > 0) {
      setClockGroup(prevState => [...prevState, newClock]);
    } else {
      setClockGroup([newClock]);
    }
  }

  const removeClock = (name) => {
    console.log("REMOVE interval for: ", name);
    setClockGroup(prevItems => prevItems.filter(o => o.id !== name));
  }

  return (
    <>
      <WorldClock addClock={addClock}/>
      <div id="clockGroup">
        {clockGroup.map(el => <Clock key={el.id} name={el.id} zone={el.zone} removeClock={removeClock}/>)}
      </div>
    </>
  );
}

export default App;
