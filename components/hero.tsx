import { Button } from "@/components/ui/button"
import { ArrowRight, Copy, Terminal } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            <span>VibeCraft v2.0 — Новые инструменты!</span>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Инструменты для{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">вайбкодинга</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Создавайте приложения через промптинг LLM. Библиотека готовых шаблонов, паттернов и лучших практик для
            AI-разработки.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              Начать работу
              <ArrowRight className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 font-mono text-sm">
              <Terminal className="h-4 w-4 text-muted-foreground" />
              <code>npx vibecraft init</code>
              <button className="ml-2 text-muted-foreground transition-colors hover:text-foreground">
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Инструментов", value: "50+" },
            { label: "Промптов", value: "200+" },
            { label: "Шаблонов", value: "30+" },
            { label: "Разработчиков", value: "10K+" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
    </svg>
  )
}
