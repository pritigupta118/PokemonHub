import PokemonDetail from "@/components/DetailedPokemonCard"
import { fetchPokemonById } from "@/lib/api"

import { notFound } from "next/navigation"

export default async function PokemonPage({ params }: { params: { id: string } }) {
  const pokemon = await fetchPokemonById(Number.parseInt(params.id))

  if (!pokemon) {
    notFound()
  }

  return <PokemonDetail pokemon={pokemon} />
}
