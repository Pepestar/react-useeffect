import {useState, useEffect } from "react";
import SpecialComponent from "./SpecialComponent";

function App() {
  const [counter, setCounter] = useState(0);
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    document.title = 'React hooks | useEffect';
  }, [])

  useEffect(() => {
    alert('Valor do counter ' + counter);
  }, [counter]);

  function increaseCounter(){
    setCounter(counter + 1);
  }

  function handleComponentVisibility(){
    setShowComponent(!showComponent);
  }

  return (
    <div>
      <h1>Pronto pra codar!</h1>
      <h2>{counter}</h2>
      <button onClick={increaseCounter}>Aumentar o Counter</button>
      &nbsp;
      <button onClick={handleComponentVisibility}>{showComponent ? 'esconder o componente' : 'exibir o componente especial'}</button>
      <br />
      {showComponent && <SpecialComponent />}
    </div>
  );
}

export default App;
