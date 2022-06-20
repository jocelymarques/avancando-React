import './App.css';
import { useState } from 'react';
import ConditionalRender from './assets/Components/ConditionalRender';
import ListRender from './assets/Components/ListRender';
import ManageData from './assets/Components/ManageData';
import ShowUserName from './assets/Components/ShowUserName';
import CarDetails from './assets/Components/CarDetails';


function App() {

  const [userName] = useState('marcos');

  return (
    <>
      <ManageData />
      <ListRender />
      <ConditionalRender/>
      <ShowUserName name={userName} />
      <CarDetails brand="Ford" km={10000} color="Azul"></CarDetails>

    </>

  )
}

export default App;
