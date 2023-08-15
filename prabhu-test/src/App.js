import Axios from 'axios';
import './App.css';
import { useEffect,useState } from 'react';


function App() {
   
      Axios.get("http://20.244.56.144/numbers/primes").then((res) => {
        const primes = res.data;
        console.log(primes);
    
      });

      Axios.get("http://20.244.56.144/numbers/fibo").then((res) => {
        const fibo = res.data;
        console.log(fibo);
      });

      Axios.get("http://20.244.56.144/numbers/odd").then((res) => {
        const odd = res.data;
        console.log(odd);
      });
      
      Axios.get("http://20.244.56.144/numbers/rand").then((res) => {
        const rand = res.data;
        console.log(rand);
      });

      const [getPrime, setPrime] = useState("");
const prime = () => {
  Axios.get("http://20.244.56.144/numbers/primes").then((res) => {
        const primes = res.data[0];
        setPrime(primes);
    
      });
};

useEffect(() => {
  prime();  
}, []);
    
  return (
    <div className="App">
      <button onClick={ prime }>generate prime</button>
      <p>{ getPrime }</p>
      <p>Hello reactjs</p>
    </div>
  );
}

export default App;
