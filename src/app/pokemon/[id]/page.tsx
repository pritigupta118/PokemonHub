import DetailedPokemonCard from '@/components/DetailedPokemonCard'
import { fetchPokemonByName } from '@/lib/api'
import { notFound } from 'next/navigation'
import React, { JSX } from 'react'

interface Props {
  params: {
    id: string
  }
}

const Page =async ({params}: Props): Promise<JSX.Element> => {
   const {id} = params

   const pokemon = await fetchPokemonByName(id)

   if(!pokemon){
    notFound()
   }

   return <DetailedPokemonCard pokemon={pokemon}/>
}

export default Page
