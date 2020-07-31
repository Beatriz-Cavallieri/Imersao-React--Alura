import React from 'react'

export default function FormField({ label, type, name, value, onChange }) {
    let field
    if (type === 'textarea') {
        type = 'text'
        field = <textarea
            type={type}
            name={name}
            value={value}
            onChange={onChange}
        />
    } else {
        field = <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
        />
    }
    return (
        <div>
            <label>
                {label}
                {field}
            </label>
        </div>
    )
}
