import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [number, settitle] = useState('');
  const [val, setval] = useState('');
  function oblicz(){

    
    if (number > 2){
      var wynik=0;
      var n_2 = 1;
      var n_1 =1;
      for(var i=0;i<number-2;i++){
        wynik=n_1+n_2;
        n_2=n_1;
        n_1=wynik; 
        
      }
       setval(wynik);
    }
    else if( number > 0 && number < 3)
    {
      setval(1);
    }
    else if (number < 1){
      setval("Podales zla liczbe");
    }

               
  }
  return (
    <div className="App">
      <header >
        <title>Calc Fibonacciego</title>
        Podaj wyraz ciagu fibonacciego, ktory chcesz zobaczyc:<br/>
        <input type="number" min="1" name="a" id="a" onChange={event => settitle(event.target.value)}/><br/>
        <input type="text" disabled={true} value={val}/><br/>
        <button onClick={oblicz}>Oblicz</button>
      </header>
    </div>
  );

  
}



export default App;
