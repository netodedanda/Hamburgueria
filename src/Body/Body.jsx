import React, { useState } from 'react';
import '../Body/Body.css';
import B1 from '../img/burgue.png';
import C2 from '../img/carro3s.png';
import C3 from '../img/carro1s.png';
import logo from '../img/logo.png';


function Body() {
  const [indiceImagem, setIndiceImagem] = useState(0);
  const [itemSelecionado, setItemSelecionado] = useState(null);

  const imagens = [C3, C3];

  const mudarImagem = (n) => {
    setIndiceImagem((prevIndice) => {
      const novoIndice = prevIndice + n;
      if (novoIndice >= imagens.length) {
        return 0;
      } else if (novoIndice < 0) {
        return imagens.length - 1;
      }
      return novoIndice;
    });
  };

  const cardapioItens = [
    { nome: 'Baratiê Duplo Smash', imagem: B1 },
    { nome: 'Baratiê Bacon Xtreme', imagem: B1 },
    { nome: 'Baratiê Veggie', imagem: B1 },
    { nome: 'Baratiê Clássico', imagem: B1 },
    { nome: 'Baratiê BBQ Deluxe', imagem: B1 },
    { nome: 'Baratiê Cheddar', imagem: B1 },
    { nome: 'Baratiê Chicken', imagem: B1 },
    { nome: 'Baratiê Fritas e Molho', imagem: B1 },
  ];

  const exibirInformacoes = (item) => {
    setItemSelecionado(item);
  };

  const fecharInformacoes = () => {
    setItemSelecionado(null);
  };

  return (
  
  <>
    <div className="container-body">
      <div className="body">
        <div className="carrossel">
          <div className="carrossel-imagens">
            <img src={imagens[indiceImagem]} alt={`Imagem ${indiceImagem + 1}`} />
          </div>
          <button className="prev" onClick={() => mudarImagem(-1)}>&#10094;</button>
          <button className="next" onClick={() => mudarImagem(1)}>&#10095;</button>
        </div>

        <div className="cardapio" id="cardapio">
          <p>Cardápio</p>
          <div className="cardapio-items">
            {cardapioItens.map((item, index) => (
              <div
                className="item"
                key={index}
                onClick={() => exibirInformacoes(item)}
                style={{ position: 'relative' }}
              >
                <img src={item.imagem} alt={item.nome} />
                <p>{item.nome}</p>
              </div>
            ))}
          </div>
        </div>

        {itemSelecionado && (
          <div className="item-info">
            <div className="info-content">
              <h2 className="itemName">{itemSelecionado.nome}</h2>
              <img
                src={itemSelecionado.imagem}
                alt={itemSelecionado.nome}
                width={300}
                className="imgMoba"
              />
              <p className="itemSelect">
                Descrição do prato: {itemSelecionado.descricao ? itemSelecionado.descricao : "Descrição não disponível."}
              </p>
              <button onClick={fecharInformacoes} className="btninfo">Fechar</button>
            </div>
          </div>
        )}
      </div>
    </div>
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-logo">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <div className="footer-links">
      <ul>
        <li><a href="#">Sobre nós</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Contato</a></li>
        <li><a href="#">Política de Privacidade</a></li>
      </ul>
    </div>
    
  </div>
  <div className="footer-bottom">
    <p>© 2025 Minha Empresa. Todos os direitos reservados.</p>
  </div>
</footer>

    </>
  );
}

export default Body;
