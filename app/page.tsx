"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ToolsGrid } from "@/components/tools-grid"
import { Categories } from "@/components/categories"
import { Footer } from "@/components/footer"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Categories active={activeCategory} onChange={setActiveCategory} />
      <ToolsGrid activeCategory={activeCategory} />
      <Footer />
    </main>
  )
}
