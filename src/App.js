import logo from './logo.svg';
import './App.css';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test user="Pepe" />
      </header>
    </div>
  );
}

export default App;
