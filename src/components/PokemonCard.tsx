import type { PokemonDetail } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"

const PokemonCard = ({ pokemon }: { pokemon: PokemonDetail }) => {


  // Get the primary type of the pokemon
  const primaryType = pokemon.types[0]?.type.name || "normal"

  // Map of type to gradient colors (dark theme)
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

  // Map of type to accent color for text and borders
  const typeAccents: Record<string, string> = {
    normal: "text-neutral-300 border-neutral-600",
    fire: "text-orange-400 border-orange-700",
    water: "text-blue-400 border-blue-700",
    grass: "text-green-400 border-green-700",
    electric: "text-yellow-300 border-yellow-600",
    ice: "text-cyan-300 border-cyan-700",
    fighting: "text-red-400 border-red-700",
    poison: "text-purple-400 border-purple-700",
    ground: "text-amber-400 border-amber-700",
    flying: "text-indigo-400 border-indigo-700",
    psychic: "text-pink-400 border-pink-700",
    bug: "text-lime-400 border-lime-700",
    rock: "text-stone-400 border-stone-600",
    ghost: "text-violet-400 border-violet-700",
    dragon: "text-teal-400 border-teal-700",
    dark: "text-slate-300 border-slate-600",
    steel: "text-zinc-300 border-zinc-600",
    fairy: "text-rose-400 border-rose-700",
  }

  return (
    <Link href={`/pokemon/${pokemon.name}`} className="block transform transition-all duration-300 hover:scale-105">
      <div
        className={`rounded-xl pt-4 overflow-hidden bg-gradient-to-br ${typeGradients[primaryType] || "from-gray-800 to-gray-700"} 
        shadow-lg border border-opacity-30 ${typeAccents[primaryType].split(" ")[1] || "border-gray-700"}`}
      >
        
        <div className="relative flex justify-center items-center h-32 w-full">
          <div
            className={`absolute w-20 h-20 rounded-full bg-gradient-to-r ${typeGradients[primaryType]} opacity-40 blur-xl`}
          ></div>
         
            <Image
              src={pokemon?.sprites?.other?.dream_world?.front_default}
              alt={pokemon.name}
              width={100}
              height={100}
              className="object-contain z-10 drop-shadow-xl transform hover:scale-110 transition-transform duration-300"
            />
          
        </div>

        <div className="p-4 bg-black/40 backdrop-blur-sm">
          <h2
            className={`text-lg font-bold capitalize text-center my-2 ${typeAccents[primaryType].split(" ")[0] || "text-white"}`}
          >
            {pokemon.name}
          </h2>

          <div className="flex justify-center gap-2 mb-3">
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className={`text-xs px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm capitalize font-medium
                ${typeAccents[type.type.name]?.split(" ")[0] || "text-gray-300"}`}
              >
                {type.type.name}
              </span>
            ))}
          </div>

        
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-gray-500"></span>
              <span>Height: {pokemon.height / 10}m</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-gray-500"></span>
              <span>Weight: {pokemon.weight / 10}kg</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PokemonCard

