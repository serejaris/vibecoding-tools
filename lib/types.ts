export type PricingType = 'free' | 'freemium' | 'paid'

export interface Category {
  id: string
  label: string
  icon: string
  sort_order: number
}

export interface Tool {
  id: string
  title: string
  description: string
  category_id: string
  tags: string[]
  url: string
  pricing: string
  pricing_type: PricingType
  features: string[]
  llm: string
  open_source: boolean
  level: string
  created_at?: string
}

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: Category
        Insert: Omit<Category, 'sort_order'> & { sort_order?: number }
        Update: Partial<Category>
      }
      tools: {
        Row: Tool
        Insert: Omit<Tool, 'created_at'> & { created_at?: string }
        Update: Partial<Tool>
      }
    }
  }
}

