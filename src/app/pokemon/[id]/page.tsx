import DetailedPokemonCard from '@/components/DetailedPokemonCard'
import { fetchPokemonById } from '@/lib/api'

import { notFound } from 'next/navigation'
import React from 'react'

interface PageProps {
  params: {
    id: string
  }
}

const Page =async ({ params }: PageProps) => {
  const pokemon = await fetchPokemonById(Number.parseInt(params.id))

   if(!pokemon){
    notFound()
   }

   return <DetailedPokemonCard pokemon={pokemon}/>
}

export default Page
