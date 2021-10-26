import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import './index.css';
import Home from './Pages/Home/App';
import NotFound from './Pages/NotFound/NotFound';
import Repositories from './Pages/Repositories/Repositories';
import reportWebVitals from './reportWebVitals';


const routing = (
  //Container de rotas - Lógica pra construir rotas
  <Router>
    <div>
      <Switch> {/*Criado para trocar o componente q irá aparecer*/}
        <Route exact path="/" component={Home} /> {/*Home */}
        <Route  path="/NotFound" component={NotFound} /> {/*NotFound */}
        <Route  path="/Repositories" component={Repositories} /> {/*Repositories */}
        <Redirect to ="/NotFound/"/> {/* Redireciona para notFound caso não encontre nenhuma rota*/}
      </Switch>
    </div>
  </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
