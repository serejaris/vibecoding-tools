import { Sparkles, Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">VibeCraft</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Библиотека инструментов для вайбкодинга. Создавайте приложения через промптинг LLM быстрее и эффективнее.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Ресурсы</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Документация
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Примеры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Сообщество</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  GitHub Discussions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Контрибьютинг
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Обратная связь
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 VibeCraft. Создано с ❤️ для AI-разработчиков.</p>
        </div>
      </div>
    </footer>
  )
}
