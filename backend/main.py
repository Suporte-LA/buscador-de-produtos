from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI(title="Rastreador de Promoções")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/buscar")
async def buscar(produto: str):
    # Exemplo fictício - em produção use scraping real
    exemplo = [
        {"nome": f"{produto} - Amazon", "loja": "Amazon", "preco_original": 200, "preco_promocional": 150, "link": "https://amazon.com", "imagem": "https://via.placeholder.com/200"},
        {"nome": f"{produto} - Magalu", "loja": "Magalu", "preco_original": 210, "preco_promocional": 160, "link": "https://magazineluiza.com", "imagem": "https://via.placeholder.com/200"}
    ]
    return sorted(exemplo, key=lambda x: x["preco_promocional"])