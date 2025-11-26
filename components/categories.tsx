"use client"

import { cn } from "@/lib/utils"
import { Zap, Code2, Palette, Layers, Terminal, Bot, Smartphone, GitBranch, Sparkles } from "lucide-react"

const categories = [
  { id: "all", label: "Все", icon: Zap },
  { id: "ide", label: "AI IDE", icon: Code2 },
  { id: "fullstack", label: "Full-stack", icon: Layers },
  { id: "extension", label: "Расширения", icon: GitBranch },
  { id: "cli", label: "CLI", icon: Terminal },
  { id: "ui", label: "UI/Design", icon: Palette },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "agent", label: "AI Agents", icon: Bot },
  { id: "assistant", label: "Ассистенты", icon: Sparkles },
]

interface CategoriesProps {
  active: string
  onChange: (category: string) => void
}

export function Categories({ active, onChange }: CategoriesProps) {
  return (
    <section className="border-b border-border py-6">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => onChange(category.id)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all",
                  active === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {category.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
