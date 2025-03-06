import DetailedPokemonCard from '@/components/DetailedPokemonCard'
import { fetchPokemonByName } from '@/lib/api'
import { PokemonDetail } from '@/lib/types'
import { notFound } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Props {
  params: {
    id: string
  }
}

const page =async ({params}: Props) => {
   const {id} = params

   const pokemon = await fetchPokemonByName(id)

   if(!pokemon){
    notFound()
   }

   return <DetailedPokemonCard pokemon={pokemon}/>
}

export default page
