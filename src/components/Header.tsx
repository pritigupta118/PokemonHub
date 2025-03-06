"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";




export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (

    <header
    className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#f6f8fc]/80 backdrop-blur-md" : "bg-[#f6f8fc]/80 backdrop-blur-md border-b border-opacity-10"}`}
  >
      <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-4">
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
      <Link href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 ">
        PokemonHub
      </Link>
      </div>
      </div>
      </div>
  </header>
  )

}
