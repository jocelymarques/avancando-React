import './App.css';
import ConditionalRender from './assets/Components/ConditionalRender';
import ListRender from './assets/Components/ListRender';
import ManageData from './assets/Components/ManageData';


function App() {
  return (
    <>
      <ManageData />
      <ListRender />
      <ConditionalRender/>
    </>

  )
}

export default App;
