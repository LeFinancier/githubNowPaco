import React, { Component } from 'react';
import './App.css';
import {Anchor, Affix} from 'antd';

import Carousel from './components/Carousel'
import Navbar from './components/Navbar'
import Hola from './components/Bienvenida'
import Tokyo from './components/Tokyo'
import Kyoto from './components/Kyoto'
import Nara from './components/Nara'
import Kanazawa from './components/Kanazawa'
import Tips from './components/Tips'


class App extends Component {
  render() {

    return (
      <div className="App">
      <Affix>
        <Navbar className='navbar'/>
      </Affix>
        <Carousel />
        <Hola />
        <Tips />
      <Anchor>
        <div style={{backgroundColor:'black'}}><h1 style={{color:'white'}}>TOKYO    <span><a href=".navbar">Regresar</a></span></h1></div>
      </Anchor>
        <Tokyo />
      <Anchor href={'#tokyo'}>
        <div style={{backgroundColor:'black'}}><h1 style={{color:'white'}}>KYOTO     <span><a href=".navbar">Regresar</a></span></h1></div>
      </Anchor>
        <Kyoto />
      <Anchor href={'#tokyo'}>
        <div style={{backgroundColor:'black'}}><h1 style={{color:'white'}}>NARA     <span><a href=".navbar">Regresar</a></span></h1></div>
      </Anchor>
        <Nara />
      <Anchor href={'#tokyo'}>
        <div style={{backgroundColor:'black'}}><h1 style={{color:'white'}}>KANAZAWA     <span><a href=".navbar">Regresar</a></span></h1></div>
      </Anchor>
        <Kanazawa />
        <div>Icons made by <a href="https://www.flaticon.com/authors/twitter" title="Twitter">Twitter</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    );
  }
}

export default App;
