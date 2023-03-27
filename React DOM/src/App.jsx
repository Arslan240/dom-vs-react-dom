import { useState } from 'react'
import './App.css'
import Form from './Form';

function App() {
  const [name, setName] = useState('');

  const handleDOMClick = () => {
    modifyDOM();
  };
  const handleStateClick = () => {
    modifyState();
  };

  function modifyDOM() {
    const input = document.querySelector('input');
    input.value = 'John Doe';
  }

  function modifyState() {
    setName(name)
  }

  return (
    <div>
      <Form name={name} setName={setName} />
      <button onClick={handleDOMClick}>Modify DOM</button>
      <button onClick={handleStateClick}>Modify State</button>
      <ul>
        <li>Input a value in field, then click on submit. It'll show alert with the value.</li>
        <li>Then click on modify DOM, which will use plain javascript to change value, now on submit alert will persist the previous state.</li>
        <li>Then change value and click on modifyState, it'll update the state and new state will be shown in alert.</li>
      </ul>
        
    </div>
  );
}




export default App
