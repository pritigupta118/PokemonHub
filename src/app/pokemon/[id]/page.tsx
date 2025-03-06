import PokemonDetail from "@/components/DetailedPokemonCard"
import { fetchPokemonById } from "@/lib/api"

import { notFound } from "next/navigation"

type Params = Promise<{ id: string }>
export default async function PokemonPage({ params }: { params: Params }) {
  const { id } = await params
  const pokemon = await fetchPokemonById(Number(id))

  if (!pokemon) {
    notFound()
  }

  return <PokemonDetail pokemon={pokemon} />
}
