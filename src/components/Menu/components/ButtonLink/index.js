import React from 'react'

function ButtonLink(props) {
    const { href, className, text }
    return (
        <a href={href} className={className}>
            {text}
        </a>
    )
}

export default ButtonLink