import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './containers/banner';
import Header from "./containers/Header"
import Main from './containers/Main';
import "./styles/style.css"
import banner from './assets/img/banner.png'
import banner2 from './assets/img/banner2.png'
import Footer from './containers/Footer';
ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Banner title="Podarok na perviy zakaz" content="Poluchite 500 rubley za podpisku na rassilku" button="Podpisatsiya" img={banner}/>
    <Main/>
    <Banner title="Besplatnaya dostavka po Moskve i Oblasti ot 2999 RUB !"  button="Oformit" img={banner2}/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

