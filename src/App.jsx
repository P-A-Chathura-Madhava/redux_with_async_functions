import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add } from './feature/counter/counterSlice';

function App() {

  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.number);

  return (
    <div>
      <h1>Redux Explanation Application</h1>
      <h3>Counter</h3>
      <h3>{count}</h3>
      <button onClick={()=>{dispatch(add(4))}} >+ Add</button>
      {/* <button onClick={()=>{dispatch(substract(2))}} >- Subtract</button> */}
    </div>
  );
}

export default App;
