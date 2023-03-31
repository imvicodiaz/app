
import './App.css';
import Card from './Componentes/ItemListContainer/Item';
import Flex from './Componentes/Flex/Flex';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import NavBar from './Componentes/NavBar/NavBar';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Route>
          <Route path='/' element={< ItemListContainer/>} />
          <Route path='/contacto' element={
            <div>
              <h1>Contactanos</h1>
            </div>
          }
          />
          <Route path='/detalle/itemid' element={<ItemDetailContainer/>} /> </Route>
          <Route path='/category/:categoryid' element={<ItemDetailContainer/>} /> 


          <Route path='*' element={<h2>Página no encontrada</h2>} />


      </BrowserRouter>  
    </>
  );
}

export default App;
