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
    this.timerID =  setInterval(() => { this.tick()}, 1000);

    //Exibe no console o id de cada relógio
    console.log("Eu sou o relógio " + this.timerID);
  }


  //Ciclo de vida que ocorre quando clock é removido da DOM (morte)
  // Quando isso acontece, a função clearInterval() limpa o relógio criado pela setInterval
  componentWillUnmount(){
    clearInterval(this.timerID);
  }


  tick() {
    this.setState({
      date: new Date()
    })
  }

  pararRelogio()
  {
    clearInterval(this.timerID);
    console.log("Relógio " + this.timerID + " pausado.")
  }

  retomarRelogio()
  {
    this.timerID =  setInterval(() => { this.tick()}, 1000);
    console.log("Relógio retomado.");
    console.log("Agora eu sou o relógio " + this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Quer Horas?</h1>
        <DataFormatada date={this.state.date} />
        <div>
          <button className="btn pausar" onClick={() => {this.pararRelogio()}}>Pausar</button>
          <button className="btn retomar" onClick={() => {this.retomarRelogio()}}>Retomar</button>
        </div>
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


//Declara que o componente App pode ser utilizado fora deste escopo
export default App;
