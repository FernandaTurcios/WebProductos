import { useState } from 'react'
import TablaProductos from './components/TablaProductos'
import BuscadorProductos from './components/BuscadorProductos'
import './App.css'

function App() {
  const [busqueda, setBusqueda] = useState('')

  const productos = [
    { id: 1, nombre: 'Laptop HP', categoria: 'Tecnología', precio: 4500, stock: 8 },
    { id: 2, nombre: 'Mouse Logitech', categoria: 'Accesorios', precio: 150, stock: 25 },
    { id: 3, nombre: 'Teclado mecánico', categoria: 'Accesorios', precio: 350, stock: 12 },
    { id: 4, nombre: 'Monitor Samsung', categoria: 'Tecnología', precio: 1800, stock: 6 },
    { id: 5, nombre: 'Audífonos Sony', categoria: 'Audio', precio: 650, stock: 15 },
    { id: 6, nombre: 'Impresora Epson', categoria: 'Oficina', precio: 2200, stock: 4 }
  ]

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="contenedor">
      <h1>Registro de Productos</h1>
      <p>Consulta y administración de productos</p>

      <BuscadorProductos busqueda={busqueda} setBusqueda={setBusqueda} />

      <TablaProductos productos={productosFiltrados} />
    </div>
  )
}

export default App