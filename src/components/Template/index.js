import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'
import styled from 'styled-components'

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: calc(50px + 94px);
    padding-left: 5%;
    padding-right: 5%;
    min-height: calc(100vh - 94px);
`
export default function Template({ children }) {
    return (
        <React.Fragment>
            <Menu />
            <Main>
                {children}
            </Main>
            <Footer />
        </React.Fragment>
    )
}
