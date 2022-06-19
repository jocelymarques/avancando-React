import './App.css';
import Moon from "./assets/moon.jpg";

function App() {
  return (

    <>
      <div>
        <img src="/logo192.png" alt="moon" />
      </div>
      <div>
        <img src={Moon} alt="moon" />
      </div>
    </>

  );
}

export default App;
