import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Pagina404 from './pages/Pagina404'
import CadastroVideo from './pages/CadastroVideo'
import CadastroCategoria from './pages/CadastroCategoria'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* a ordem de rotas importa muito. Se a "/" fosse a primeira, sem o uso de "exact", 
      a rota sempre pararia nela antes de conferir as seguintes */}
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={App} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
