import React from 'react'

export default function Cabecera({product}) {
  
  return (
    <header>
        <h1>Carrito de compras</h1>
        <p>Cantidad de productos <span> {product} </span> </p>
    </header>
  )
}
