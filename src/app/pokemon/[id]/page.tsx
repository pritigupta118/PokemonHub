import DetailedPokemonCard from '@/components/DetailedPokemonCard'
import { fetchPokemonById } from '@/lib/api'

import { notFound } from 'next/navigation'
import React from 'react'



const page =async ({ params }: { params: { id: string } }) => {
  const pokemon = await fetchPokemonById(Number.parseInt(params.id))

   if(!pokemon){
    notFound()
   }

   return <DetailedPokemonCard pokemon={pokemon}/>
}

export default page
