import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

function DataFormatada(props) {
  //  {}  -- chama variável
  return <h2>Horário Atual: {props.date.toLocaleTimeString()}</h2>
}

class Relogio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Define o estado date pegando a data atual
      date: new Date()
    }
  }



  //Fora do construtor, define os ciclos de vida
  

  //Ciclo de vida que ocorre quando Clock é inserido na DOM (nascimento)
  componentDidMount()
  {
    setInterval(() => { this.tick()}, 1000);
  }


  //Ciclo de vida que ocorre quando clock é removido da DOM (morte)
  componentWillUnmount(){

  }


  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Quer Horas?</h1>
        <DataFormatada date={this.state.date} />
      </div>
    )
  }
}












function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Faz a chamada do Relogio (componente) */}
        <Relogio />
      </header>
    </div>
  );
}

export default App;
