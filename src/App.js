import React from 'react'
import Menu from './components/Menu/index'
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import styled from 'styled-components'

const AppWrapper = styled.div`
  background: var(--grayDark);
  --bodyPaddingTop: 94px;
  padding-top: var(--bodyPaddingTop);
  @media (max-width: 800px) {
    --bodyPaddingTop: 40px;
    padding-top: var(--bodyPaddingTop);
  }
`;

function App() {
  return (
    <AppWrapper>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"David Lynch Theater Weather Report"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Footer />
    </AppWrapper>
  )
}

export default App