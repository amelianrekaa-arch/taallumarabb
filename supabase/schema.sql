-- Jalankan di Supabase SQL Editor.
create extension if not exists "pgcrypto";

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.vocabularies (
  id uuid primary key default gen_random_uuid(),
  arabic_word text not null,
  transliteration text,
  meaning text not null,
  example_sentence text,
  image_url text,
  category_id uuid references public.categories(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.sentence_exercises (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  sentence_type text not null check (sentence_type in ('ismiyah','filiyah')),
  instruction text not null,
  words jsonb not null,
  correct_order jsonb not null,
  translation text,
  explanation text,
  created_at timestamptz not null default now()
);

create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  question_type text not null default 'multiple_choice',
  options jsonb not null,
  correct_answer text not null,
  explanation text,
  created_at timestamptz not null default now()
);

insert into public.categories (name, slug) values
 ('Sekolah','sekolah'), ('Rumah','rumah'), ('Hewan','hewan'), ('Makanan','makanan')
on conflict (slug) do nothing;

alter table public.categories enable row level security;
alter table public.vocabularies enable row level security;
alter table public.sentence_exercises enable row level security;
alter table public.questions enable row level security;

-- Data pembelajaran dapat dibaca publik. Penulisan hanya melalui Supabase dashboard
-- sampai autentikasi dan role admin ditambahkan.
create policy "Public can read categories" on public.categories
for select using (true);
create policy "Public can read vocabularies" on public.vocabularies
for select using (true);
create policy "Public can read sentence exercises" on public.sentence_exercises
for select using (true);
create policy "Public can read questions" on public.questions
for select using (true);

-- Storage: buat bucket public bernama vocabulary-images melalui Dashboard Storage.
