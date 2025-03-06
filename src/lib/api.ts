import { DetailedPokemon, PokemonData, PokemonDetail } from "./types"

// Base URL for the API
const BASE_URL = "https://pokeapi.co/api/v2"

//Fetch a list of pokemons with their detailed information
export async function fetchPokemonList(): Promise<PokemonDetail[]> {
  try {
    const res = await fetch(`${BASE_URL}/pokemon?limit=40`)
    const data = (await res.json()) as PokemonData

    // Fetch detailed information for each pokemon
    const detailedPokemonData = data.results.map(async (result: DetailedPokemon) => {
      return await fetchPokemonDetail(result.url)
    })

    return await Promise.all(detailedPokemonData)
  } catch (error) {
    console.error("Error fetching pokemon list:", error)
    return []
  }
}

//Fetch detailed information for a single pokemon
export async function fetchPokemonDetail(url: string): Promise<PokemonDetail> {
  const res = await fetch(url)
  return await res.json()
}

//Fetch a pokemon by its name
export async function fetchPokemonById(id: number): Promise<PokemonDetail | null> {
  try {
    const res = await fetch(`${BASE_URL}/pokemon/${id}`)
    if (!res.ok) {
      throw new Error(`Pokemon with id ${id} not found`)
    }
    return await res.json()
  } catch (error) {
    console.error(`Error fetching pokemon with id ${id}:`, error)
    return null
  }
}