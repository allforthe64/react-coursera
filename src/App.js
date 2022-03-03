import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand id="brand" href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </header>
    </div>
  );
}

export default App;
