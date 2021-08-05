import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: 'relative',
        top: '100vh'
    }
    return (
        <div className="notification is-dark footer has-text-centered" style={footerStyle}>
            Todos List Created by Ankit Choudhary
        </div>
    )
}
