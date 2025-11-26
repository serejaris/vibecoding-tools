"use client"

import { useState, useEffect } from "react"
import { ToolCard } from "./tool-card"
import { Input } from "@/components/ui/input"
import { Search, Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase"
import type { Tool } from "@/lib/types"

export function ToolsGrid({ activeCategory }: { activeCategory: string }) {
  const [search, setSearch] = useState("")
  const [tools, setTools] = useState<Tool[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTools() {
      setLoading(true)
      setError(null)

      if (!supabase) {
        setError('Supabase не настроен')
        setLoading(false)
        return
      }

      try {
        const { data, error: supabaseError } = await supabase
          .from('tools')
          .select('*')
          .order('title')

        if (supabaseError) {
          throw supabaseError
        }

        setTools(data || [])
      } catch (err) {
        console.error('Error fetching tools:', err)
        setError('Не удалось загрузить инструменты')
      } finally {
        setLoading(false)
      }
    }

    fetchTools()
  }, [])

  const filtered = tools.filter((tool) => {
    const matchesCategory = activeCategory === "all" || tool.category_id === activeCategory
    const matchesSearch =
      tool.title.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase()) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  if (error) {
    return (
      <section id="tools" className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="py-16 text-center">
            <p className="text-lg text-destructive">{error}</p>
            <p className="mt-2 text-sm text-muted-foreground">Попробуйте обновить страницу</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="tools" className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Инструменты</h2>
            <p className="mt-1 text-muted-foreground">
              {loading ? "Загрузка..." : `${filtered.length} инструментов для вайбкодинга`}
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск инструментов..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-secondary pl-10"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={{
                    ...tool,
                    category: tool.category_id,
                    pricingType: tool.pricing_type,
                    openSource: tool.open_source,
                  }}
                />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-lg text-muted-foreground">Ничего не найдено</p>
                <p className="mt-2 text-sm text-muted-foreground">Попробуйте изменить поисковый запрос</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
