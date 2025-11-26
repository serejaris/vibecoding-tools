"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { 
  Zap, 
  Code2, 
  Palette, 
  Layers, 
  Terminal, 
  Bot, 
  Smartphone, 
  GitBranch, 
  Sparkles,
  Loader2,
  type LucideIcon 
} from "lucide-react"
import { supabase } from "@/lib/supabase"
import type { Category } from "@/lib/types"

// Map icon names to actual Lucide icon components
const iconMap: Record<string, LucideIcon> = {
  Zap,
  Code2,
  Palette,
  Layers,
  Terminal,
  Bot,
  Smartphone,
  GitBranch,
  Sparkles,
}

interface CategoriesProps {
  active: string
  onChange: (category: string) => void
}

export function Categories({ active, onChange }: CategoriesProps) {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCategories() {
      if (!supabase) {
        console.warn('Supabase not configured')
        setLoading(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from('categories')
          .select('*')
          .order('sort_order')

        if (error) {
          throw error
        }

        setCategories(data || [])
      } catch (err) {
        console.error('Error fetching categories:', err)
        // Fallback to empty array - the UI will just not show categories
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  if (loading) {
    return (
      <section className="border-b border-border py-6">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center justify-center py-2">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="border-b border-border py-6">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Zap
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
