import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SearchBar from './components/SearchBar'
import ResultGrid from './components/ResultGrid'

export default function App() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(false)

  async function buscarProduto(nome) {
    setLoading(true)
    const res = await fetch(`http://127.0.0.1:8000/buscar?produto=${nome}`)
    const data = await res.json()
    setProdutos(data)
    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Rastreador de Promoções</h1>
      <SearchBar onSearch={buscarProduto} />
      {loading ? (
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="mt-10 text-2xl">🔄</motion.div>
      ) : (
        <ResultGrid produtos={produtos} />
      )}
    </div>
  )
}
