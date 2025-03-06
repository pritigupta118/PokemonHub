"use client"

import type { PokemonDetail } from "@/lib/types"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { fetchPokemonList } from "@/lib/api"
import PokemonCard from "./PokemonCard"
import PokemonLists from "@/components/PokemonLists";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonDetail[]>([])


  useEffect(() => {
    const loadPokemons = async () => {
      try {
        setLoading(true)
        const data = await fetchPokemonList()
        setPokemons(data)
        setFilteredPokemons(data)
      } catch (err) {
        setError("Failed to load Pokémon data")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadPokemons()
  }, [])

  useEffect(() => {
    if (!searchTerm) {
      setFilteredPokemons(pokemons)
      return
    }

    let filtered = pokemons

    
    if (searchTerm) {
      filtered = filtered.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }


    setFilteredPokemons(filtered)
  }, [searchTerm, pokemons])

  if (loading) return <div className="p-4">Loading Pokémon data...</div>
  if (error) return <div className="p-4 text-red-500">{error}</div>

  return (

    <div className=" col-span-full w-full flex flex-col items-center justify-center space-x-2 sm:space-y-4 mb-4 text-center">
    <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
    <h1 className="font-extrabold text-center text-xl md:text-2xl slg:text-3xl lg:text-4xl w-full lg:w-[90%] uppercase mx-auto  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">Find, Learn & Explore the Pokémon Universe!</h1>
    </motion.div>

    <motion.form
         
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-xl mx-auto"
        >
          <div className="flex rounded-md shadow-sm">
            <Input
              type="text"
              placeholder="Search Pokemon"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded p-4 flex-grow bg-[#f6f8fc] text-gray-400 z-20"
            />
            <Button
              type="submit"
              className="rounded bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 transition-all duration-200"
            >
              <Search className="h-5 w-5 mr-2" />
            </Button>
          </div>
        </motion.form>

        <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
    <div className="max-w-6xl p-4 mx-auto">
      <h1 className="text-2xl font-extrabold mb-8 text-black text-center">List of Pokemons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
    </motion.form>
       
    </div>

  )
}

export default PokemonList

