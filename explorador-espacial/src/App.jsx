// App.jsx
import React, { useState, useEffect, useMemo } from 'react'
import Planeta from './Planeta'

function App () {
  // ... (estado)

  useEffect(() => {
    console.log('¡El panel está listo!') // Montaje

    const intervalo = setInterval(() => { // Montaje
      // ... (simulación de vuelo)
    }, 1000)

    return () => {
      clearInterval(intervalo) // Desmontaje
      console.log('El panel se ha apagado.') // Desmontaje
    }
  }, [])

  useEffect(() => {
    console.log('¡Combustible actualizado!') // Actualización
  }, [combustible])

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`
  }, [estadoNave])

  return (
    <div>
      {/* ... (información del panel) */}
      {planetasVisitados.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />
      ))}
    </div>
  )
}
