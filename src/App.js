import './App.css';
import HeaderHome from './components/HeaderHome/HeaderHome';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HeaderHome/>
      <Outlet/>
    </div>
  );
}

export default App;
