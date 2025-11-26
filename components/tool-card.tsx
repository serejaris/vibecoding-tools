"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ExternalLink, Github, Cpu, ChevronDown, ChevronUp } from "lucide-react"

interface Tool {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  url: string
  pricing: string
  pricingType: "free" | "freemium" | "paid"
  features: string[]
  llm: string
  openSource: boolean
  level: string
}

const pricingColors: Record<string, string> = {
  free: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  freemium: "bg-sky-500/20 text-sky-400 border-sky-500/30",
  paid: "bg-amber-500/20 text-amber-400 border-amber-500/30",
}

const pricingLabels: Record<string, string> = {
  free: "Бесплатно",
  freemium: "Freemium",
  paid: "Платно",
}

export function ToolCard({ tool }: { tool: Tool }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card className="group relative flex flex-col overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold leading-tight">{tool.title}</h3>
              {tool.openSource && <Github className="h-4 w-4 text-muted-foreground" title="Open Source" />}
            </div>
            <p className="mt-1 text-xs text-muted-foreground truncate">{tool.url.replace("https://", "")}</p>
          </div>
          <Badge variant="outline" className={cn("shrink-0 text-xs", pricingColors[tool.pricingType])}>
            {tool.pricing}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{tool.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tool.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Cpu className="h-3.5 w-3.5" />
          <span className="truncate">{tool.llm}</span>
        </div>

        <div className={cn("mt-4 overflow-hidden transition-all duration-300", expanded ? "max-h-64" : "max-h-0")}>
          <div className="rounded-lg border border-border bg-secondary/50 p-3">
            <p className="text-xs font-medium text-foreground mb-2">Ключевые возможности:</p>
            <ul className="space-y-1.5">
              {tool.features.map((feature, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Уровень:</span> {tool.level}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 flex items-center gap-1 text-xs text-primary hover:underline"
        >
          {expanded ? (
            <>
              <ChevronUp className="h-3 w-3" />
              Свернуть
            </>
          ) : (
            <>
              <ChevronDown className="h-3 w-3" />
              Подробнее
            </>
          )}
        </button>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-border pt-4 mt-auto">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className={cn(
              "text-xs",
              tool.openSource
                ? "bg-violet-500/20 text-violet-400 border-violet-500/30"
                : "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
            )}
          >
            {tool.openSource ? "Open Source" : "Проприетарный"}
          </Badge>
        </div>

        <Button variant="outline" size="sm" className="gap-1.5 bg-transparent" asChild>
          <a href={tool.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            <span>Открыть</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
