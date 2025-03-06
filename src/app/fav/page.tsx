"use client"
import PokemonCard from "@/components/PokemonCard"
import { fetchPokemonList } from "@/lib/api"
import { PokemonDetail } from "@/lib/types"
import { useEffect, useState } from "react"


const page = () => {
    const [pokemons, setPokemons] = useState<PokemonDetail[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
      const loadPokemons = async () => {
        try {
          setLoading(true)
          const data = await fetchPokemonList()
          setPokemons(data)
          
        } catch (err) {
          setError("Failed to load Pokémon data")
          console.error(err)
        } finally {
          setLoading(false)
        }
      }
  
      loadPokemons()
    }, [])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {pokemons.map((pokemon) => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
  )
}

export default page
