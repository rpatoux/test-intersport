import './App.css';
import Header from './Component/Header'
import { Watch } from './Component/Watch/index';
import Menu from './Component/Menu';
import Banners from './Component/Banners';

function App() {
  return (
    <div className="App">
      <Header />
      <Watch />
      <Menu /> 
      <Banners />
    </div>
  );
}

export default App;