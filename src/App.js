import React, {useState} from 'react';
import './App.css';
import Logo from './logo';
import Save from './save';
import {CirclePicker} from 'react-color'



function App() {

  const [color, setColor] = useState('black')
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <div className="App">
      <p><h1>Lets download an Icon</h1></p>

      <button 
         onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}
         >
           {showColorPicker ? 'Close color Picker' : 'Pick a color'}
         </button>
         {showColorPicker && (
      <CirclePicker
      color = {color}
      onChange={updatedColor => setColor(updatedColor.hex)}
      />
         )}

      <Logo color = {color}/>
      <Save />
    </div>
    
  );
  
}

export default App;
