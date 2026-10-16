function BuscadorProductos({ busqueda, setBusqueda }) {
  return (
    <div className="buscador">
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  )
}

export default BuscadorProductos