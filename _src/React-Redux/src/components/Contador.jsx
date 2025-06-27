import { useDispatch, useSelector } from 'react-redux';
import { INCREMENTAR, DECREMENTAR } from '../redux/actions';

function Contador() {
  const contador = useSelector(state => state.value); 
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => dispatch({ type: INCREMENTAR })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENTAR })}>-</button>
    </div>
  );
}

export default Contador;
