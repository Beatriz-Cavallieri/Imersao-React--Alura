import React from 'react'
import Logo from '../../assets/img/logo.png'
import { LogoImage, MenuWrapper } from './style'
import Button from '../Button/index'

function Menu() {
    return (
        <MenuWrapper>
            <a href="/">
                <LogoImage src={Logo} alt="Beaflix logo" />
            </a>

            <Button as="a" href="/">
                Novo vídeo
            </Button>
        </MenuWrapper>
    )
}

export default Menu