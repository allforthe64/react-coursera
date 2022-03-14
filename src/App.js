import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu_components';
import './App.css';
import { DISHES } from './dishes';
import { render } from '@testing-library/react';
import { Component } from 'react';

import Main from './components/MainComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
