"use client";

import PokemonList from "@/components/PokemonLists";



export default function Home() {

  return (

  <div className="relative grid grid-cols-1 slg:grid-cols-2 px-4 py-12 sm:py-16 sm:px-8 md:px-10 slg:px-16 lg:p-24 gap-12">
   
  <PokemonList/>
  </div>
  )

}
