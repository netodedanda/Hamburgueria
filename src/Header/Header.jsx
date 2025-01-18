import React from 'react';
import '../Header/Header.css';
import logo from '../img/logo.png';
import home from '../img/inicio.png';
import delivery from '../img/delivery.png';
import cardapio from '../img/cardapio.png';
import localiza from '../img/localizacao.png';

function Header() {
  return (
    <header>
      <div className="header">
      <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="/"> <img src={home} width={25} alt="Início" className='icone' /> INÍCIO</a></li>
            <li><a href="#cardapio">  <img src={cardapio} width={25} alt="Cardápio" className='icone' /> CARDÁPIO</a></li>
            <li><a href="/delivery"> <img src={localiza} width={25} alt="Onde Tem Baratiê" className='icone' /> ONDE TEM BARATIÊ</a></li>
            <li><a href="/delivery"> <img src={delivery} width={25} alt="Delivery" className='icone' /> DELIVERY</a></li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;
