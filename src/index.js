import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Template from './components/Template'
import CadastroDeVideo from './components/CadastroDeVideo'
import Pagina404 from './components/Pagina404'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* a ordem de rotas importa muito. Se a "/" fosse a primeira, sem o uso de "exact", 
      a rota sempre pararia nela antes de conferir as seguintes */}
      <Route path="/cadastro/video" component={CadastroDeVideo} />
      <Route path="/" component={App} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
