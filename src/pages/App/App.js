import './App.css';

// import { useNavigate } from react-router-dom; 

function App() {
  // const navigate = useNavigate();

  function ResponderClick()
  {
    alert("Estou on line ¬¬")
    // navigate('/exercicio')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Eis a tradição </h1>

          <p className='botao' onClick={ResponderClick}> Hello World ! </p>
          <a href='/exercicio'> Exercicío 1 </a>
          <a href='/exercicio2'> Exercicío 2 </a>
          <a href='/exercicio3' > Exercicio 3</a>
          <a href='/exercicio4' > Exercicio 4</a>

      </header>
    </div>
  );
}

export default App;
