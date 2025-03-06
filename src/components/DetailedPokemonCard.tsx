"use client"

import type { PokemonDetail as PokemonDetailType } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function PokemonDetail({ pokemon }: { pokemon: PokemonDetailType }) {
  const [activeTab, setActiveTab] = useState<"stats" | "moves">("stats")
  const primaryType = pokemon.types[0]?.type.name || "normal"

  // Type-based styling (reusing from PokemonCard)
  const typeGradients: Record<string, string> = {
    normal: "from-neutral-800 to-neutral-700",
    fire: "from-orange-900 to-red-800",
    water: "from-blue-900 to-blue-800",
    grass: "from-green-900 to-emerald-800",
    electric: "from-yellow-700 to-amber-800",
    ice: "from-cyan-900 to-sky-800",
    fighting: "from-red-900 to-rose-800",
    poison: "from-purple-900 to-fuchsia-800",
    ground: "from-amber-900 to-yellow-800",
    flying: "from-indigo-900 to-violet-800",
    psychic: "from-pink-900 to-pink-800",
    bug: "from-lime-900 to-green-800",
    rock: "from-stone-800 to-stone-700",
    ghost: "from-violet-900 to-purple-800",
    dragon: "from-teal-900 to-cyan-800",
    dark: "from-slate-900 to-slate-800",
    steel: "from-zinc-800 to-gray-700",
    fairy: "from-rose-900 to-pink-800",
  }

  const typeAccents: Record<string, string> = {
    normal: "text-neutral-300",
    fire: "text-orange-400",
    water: "text-blue-400",
    grass: "text-green-400",
    electric: "text-yellow-300",
    ice: "text-cyan-300",
    fighting: "text-red-400",
    poison: "text-purple-400",
    ground: "text-amber-400",
    flying: "text-indigo-400",
    psychic: "text-pink-400",
    bug: "text-lime-400",
    rock: "text-stone-400",
    ghost: "text-violet-400",
    dragon: "text-teal-400",
    dark: "text-slate-300",
    steel: "text-zinc-300",
    fairy: "text-rose-400",
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
       
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to List
        </Link>

        
        <div className={`rounded-2xl bg-gradient-to-br ${typeGradients[primaryType]} p-8 mb-8`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className='relative flex justify-center items-center'>
        <Image
        src={`/icons/${pokemon?.types[0].type.name}.svg`}
        alt='pokemon type'
        width={300}
        height={300}
        className="absolute opacity-15 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
        <Image
        src={pokemon?.sprites?.other?.dream_world?.front_default || 
          pokemon?.sprites?.front_default
        }
        alt='pokemon image'
        width={200}
        height={200}
        className='relative z-10 filter drop-shadow-lg'
        />
      </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold capitalize text-white">{pokemon.name}</h1>
                <span className="text-lg font-mono bg-black/30 px-3 py-1 rounded-full text-gray-300">
                  #{pokemon.id.toString().padStart(3, "0")}
                </span>
              </div>

              
              <div className="flex gap-3 mb-6">
                {pokemon.types.map((type) => (
                  <span
                    key={type.type.name}
                    className={`px-4 py-1 rounded-full bg-black/30 capitalize font-medium ${typeAccents[type.type.name]}`}
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>

             
              <div className="grid grid-cols-2 gap-4 text-gray-300 mb-6">
                <div>
                  <p className="text-sm text-gray-400">Height</p>
                  <p className="text-lg">{pokemon.height / 10}m</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Weight</p>
                  <p className="text-lg">{pokemon.weight / 10}kg</p>
                </div>
              </div>

              
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white mb-3">Abilities</h2>
                <div className="flex flex-wrap gap-2">
                  {pokemon.abilities.map((ability) => (
                    <span
                      key={ability.ability.name}
                      className="px-3 py-1 bg-black/20 rounded-lg text-gray-300 capitalize"
                    >
                      {ability.ability.name.replace("-", " ")}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="mb-6">
          <div className="flex gap-4 border-b border-gray-700">
            <button
              onClick={() => setActiveTab("stats")}
              className={cn(
                "px-4 py-2 text-gray-400 hover:text-white transition-colors",
                activeTab === "stats" && "text-white border-b-2 border-white",
              )}
            >
              Stats
            </button>
            <button
              onClick={() => setActiveTab("moves")}
              className={cn(
                "px-4 py-2 text-gray-400 hover:text-white transition-colors",
                activeTab === "moves" && "text-white border-b-2 border-white",
              )}
            >
              Moves
            </button>
          </div>
        </div>

        
        {activeTab === "stats" && (
          <div className="grid gap-4">
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300 capitalize">{stat.stat.name.replace("-", " ")}</span>
                  <span className="text-gray-400">{stat.base_stat}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${typeGradients[primaryType]}`}
                    style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

       
        {activeTab === "moves" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {pokemon.moves.map((move) => (
              <div key={move.move.name} className="p-3 bg-gray-800 rounded-lg text-gray-300 capitalize">
                {move.move.name.replace("-", " ")}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

