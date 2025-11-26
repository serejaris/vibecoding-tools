-- Vibecoding Tools Database Schema

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  label TEXT NOT NULL,
  icon TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0
);

-- Tools table
CREATE TABLE IF NOT EXISTS tools (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category_id TEXT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  tags TEXT[] NOT NULL DEFAULT '{}',
  url TEXT NOT NULL,
  pricing TEXT NOT NULL,
  pricing_type TEXT NOT NULL CHECK (pricing_type IN ('free', 'freemium', 'paid')),
  features TEXT[] NOT NULL DEFAULT '{}',
  llm TEXT NOT NULL,
  open_source BOOLEAN NOT NULL DEFAULT false,
  level TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index for faster category filtering
CREATE INDEX IF NOT EXISTS idx_tools_category_id ON tools(category_id);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on categories" ON categories
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access on tools" ON tools
  FOR SELECT USING (true);

