import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 769px) {
        flex-flow: column nowrap;
        justify-content: center;
        text-align: center;
        background-color: #3a54b4;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
    li {
        color: #fff;
    }
    a {
          font-size: 30px;
    }
}
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <a href="/"><li>Página Inicial</li></a>
            <a href="/"><li>Sobre</li></a>
            <a href="/"><li>Serviços</li></a>
            <a href="/"><li>Contatos</li></a>
        </Ul>
    )
}

export default RightNav