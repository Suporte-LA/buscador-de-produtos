import React from 'react'

export default function ResultGrid({ produtos }) {
  if (!produtos.length) return null
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
      {produtos.map((p, i) => (
        <div key={i} className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-2xl shadow-lg">
          <img src={p.imagem} alt={p.nome} className="rounded-xl mb-3" />
          <h2 className="font-semibold">{p.nome}</h2>
          <p className="text-green-300 text-lg font-bold">R$ {p.preco_promocional}</p>
          <a href={p.link} target="_blank" className="text-pink-200 underline">Ver oferta</a>
        </div>
      ))}
    </div>
  )
}
