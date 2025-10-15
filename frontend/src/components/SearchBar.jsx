import React, { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [valor, setValor] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (valor.trim()) onSearch(valor)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg">
      <input
        type="text"
        placeholder="Digite o nome do produto que deseja encontrar em promoção..."
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        className="flex-grow p-3 rounded-l-2xl text-gray-800"
      />
      <button type="submit" className="bg-pink-600 px-6 rounded-r-2xl font-semibold">Buscar</button>
    </form>
  )
}