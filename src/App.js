import './App.css';
import { useState } from 'react';
import ConditionalRender from './assets/Components/ConditionalRender';
import ListRender from './assets/Components/ListRender';
import ManageData from './assets/Components/ManageData';
import ShowUserName from './assets/Components/ShowUserName';
import CarDetails from './assets/Components/CarDetails';
import Container from './assets/Components/Container';


function App() {

  const [userName] = useState('marcos');

  const cars =[
    {id:1, brand:'Ford', color: "Vermelha", newCar:false, km:1000, user: "thais"},
    {id:2, brand:'Fiat', color: "Azul", newCar:false, km:2000, user: "junior"},
    {id:3, brand:'Toyota', color: "Preto", newCar:true, km:0, user: "tiago"}
  ]

  return (
    <>
      <ManageData />
      <ListRender />
      <ConditionalRender/>
      <ShowUserName name={userName} />
      <CarDetails brand="Ford" km={0} color="Azul" user="João" newCar={true}></CarDetails>
      <CarDetails brand="BMW" km={10000} color="Vermelho" user="Fernanda" newCar={false}></CarDetails>
      <CarDetails brand="Fiat" km={0} color="Violeta" user="Marcos" newCar={true}></CarDetails>
      <hr />
      {/* loop de array com objetos */}
      {cars.map((car)=>(
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} user={car.user} newCar={car.newCar}></CarDetails>
      ))}
      <hr />
      {/* Fragment */}
      <Container>
        <h3>Sub titulo</h3>
      </Container>

    </>

  )
}

export default App;
