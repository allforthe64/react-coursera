import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu_components';
import './App.css';
import { DISHES } from './dishes';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand id="brand" href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
        </header>
        <Menu dishes = {this.state.dishes} />
      </div>
    );
  };
};

export default App;
