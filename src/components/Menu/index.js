import React from 'react'
import Logo from '../../assets/img/logo.png'
import { LogoImage, MenuWrapper } from './style'
import Button from '../Button/index'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <MenuWrapper>
            <Link to="/">
                <LogoImage src={Logo} alt="Beaflix logo" />
            </Link>
            {/* <Button as="a" href="/"> */}
            <Button as={Link} to="/cadastro/video">
                Novo vídeo
            </Button>
        </MenuWrapper>
    )
}

export default Menu