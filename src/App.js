//import image
import Gta from './assets/img1.jpg';

//import style / CSS
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

function App() {
  return (
    <div className="App">
      <h1>Avançado em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="GTA 6" />
      </div>
      {/* Imagem em asset */}
      <div>
      <img src={Gta} alt="Imagem GTA 6" />
      </div>
      <ManageData />
      <ListRender />
      <div>
        {/* Teste Juan
        <img src="/img1.jpg" alt="GTa" /> */}
      </div>
    </div>
  );
}

export default App;
