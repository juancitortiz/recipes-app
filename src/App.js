import './styles/App.css';
import NavBar from './components/NavBar'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import DisplayRecetas from './pages/DisplayRecetas';
import RecetaDetalle from './pages/RecetaDetalle';
import AgregarReceta from './pages/AgregarReceta';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Switch>
          <Route path="/" exact component={DisplayRecetas} />
          <Route path="/agregar-receta/" exact component={AgregarReceta} />
          <Route path="/receta-detalle/:id/:db" component={RecetaDetalle} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
