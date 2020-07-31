import React, { useState } from 'react'
import Template from '../../components/Template'

export default function CadastroCategoria() {
    const [categorias, setCategorias] = useState([])
    const initialValues = {
        nome: '',
        descricao: '',
        cor: '#000000',
    }
    const [values, setValues] = useState(initialValues)

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(event) {
        setValue(
            event.target.getAttribute('name'),
            event.target.value
        )
    }

    function handleSubmit(event) {
        event.preventDefault()
        setCategorias([
            ...categorias,
            values
        ])
    }
    return (
        <Template>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome da categoria:
                    <input
                            type="text"
                            name='nome'
                            value={values.nome}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Descrição:
                    <textarea
                            type="text"
                            name='descricao'
                            value={values.descricao}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Cor da categoria:
                    <input
                            type="color"
                            name='cor'
                            value={values.cor}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button>
                    Cadastrar
                </button>
                <ul>
                    {categorias.map((categoria) => {
                        console.log(categoria)
                        return <li key={categoria.nome}>
                            <h4>{categoria.nome}</h4>
                            <p>{categoria.descricao}</p>
                        </li>
                    })}
                </ul>
            </form>
        </Template>
    )
}
