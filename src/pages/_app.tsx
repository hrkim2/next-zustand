import '../styles/globals.css'
import type { AppProps } from 'next/app';
import useStore from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  const [count, setCountZero] = useStore(state=>[state.count, state.removeCount]);

  return <>
    <div>
      <div><b>TOP COMPONENT</b></div>
      <div>count : {count}</div>
      <button onClick={setCountZero}>set zero</button>
    </div>
    <Component {...pageProps} />
  </>
}

export default MyApp
