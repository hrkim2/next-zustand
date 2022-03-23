import type { NextPage } from 'next'
import useStore from '../store/store';


const Home: NextPage = () => {
  const [count, increaseCount, decreaseCount] = useStore(state=>[state.count, state.increaseCount, state.decreaseCount]);

  return (
    <div>
      <div><b>INDEX COMPONENT</b></div>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  )
}

export default Home
