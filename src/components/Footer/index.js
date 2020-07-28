import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
        {' '}
        por
        {' '}
        <a href="https://github.com/Beatriz-Cavallieri">
          Beatriz Cavallieri
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
