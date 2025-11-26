"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sparkles, Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">VibeCraft</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#tools" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Инструменты
          </a>
          <a href="#prompts" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Промпты
          </a>
          <a href="#templates" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Шаблоны
          </a>
          <a href="#docs" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Документация
          </a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск инструментов..."
              className="w-64 bg-secondary pl-10 placeholder:text-muted-foreground"
            />
          </div>
          <Button>Начать</Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <a href="#tools" className="text-sm text-muted-foreground">
              Инструменты
            </a>
            <a href="#prompts" className="text-sm text-muted-foreground">
              Промпты
            </a>
            <a href="#templates" className="text-sm text-muted-foreground">
              Шаблоны
            </a>
            <a href="#docs" className="text-sm text-muted-foreground">
              Документация
            </a>
          </nav>
          <div className="mt-4">
            <Input placeholder="Поиск..." className="bg-secondary" />
          </div>
        </div>
      )}
    </header>
  )
}
