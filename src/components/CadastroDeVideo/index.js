import React from 'react'
import Template from '../Template'
import { Link } from 'react-router-dom'

export default function CadastroDeVideo() {
    return (
        <div>
            <Template>
                <h1>Cadastro de Vídeo</
                h1>
                <Link to="cadastro/categoria" >
                    Cadastrar Categoria
                </Link>
            </Template>
        </div>
    )
}
