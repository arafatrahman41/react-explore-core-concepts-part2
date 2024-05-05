import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
  // normal function 
  function handleClick(){
    alert('button clicked');
  }

  // arrow function 
  const handleClick2 = () => {
    alert('click second button');
  }

  // with params 
  const addToFive = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h1>React Core Concepts 2</h1>

      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>

      {/* normal function */}
      <button onClick={handleClick}>Click Me</button>
      {/* arrow function */}
      <button onClick={handleClick2}>Click 2</button>
      {/* function inside the onClick */}
      <button onClick={() => alert('third clicked')}>Click 3</button>
      {/* if function have parameter than function will add like arrow function */}
      <button onClick={() => addToFive(3)}>4</button>
    </>
  )
}

export default App
