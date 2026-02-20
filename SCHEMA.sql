-- Create a table for public profiles if it doesn't exist
create table if not exists profiles (
  id uuid references auth.users on delete cascade not null primary key,
  name text,
  dob date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;

-- Policies for profiles
create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

-- Note: We do NOT need an insert policy for the user because the TRIGGER handles insertion.
-- The trigger runs with security definer privileges.

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- Function to handle new user creation
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, dob)
  values (
    new.id, 
    new.raw_user_meta_data->>'name', 
    (new.raw_user_meta_data->>'dob')::date
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to call the function on new user creation
-- Drop if exists to avoid errors on re-run
drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute procedure public.handle_new_user();

-- Create trips table if it doesn't exist
create table if not exists trips (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  destination text not null,
  start_date date,
  end_date date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS for trips
alter table trips enable row level security;

-- Drop existing policies if they exist to avoid duplication/errors on re-run
drop policy if exists "Users can view their own trips." on trips;
drop policy if exists "Users can insert their own trips." on trips;
drop policy if exists "Users can update their own trips." on trips;
drop policy if exists "Users can delete their own trips." on trips;

create policy "Users can view their own trips." on trips
  for select using (auth.uid() = user_id);

create policy "Users can insert their own trips." on trips
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own trips." on trips
  for update using (auth.uid() = user_id);

create policy "Users can delete their own trips." on trips
  for delete using (auth.uid() = user_id);

-- Create waitlist table if it doesn't exist
create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS for waitlist
alter table waitlist enable row level security;

-- Drop existing policies if they exist to avoid duplication/errors on re-run
drop policy if exists "Anyone can insert into waitlist." on waitlist;

-- Allow anyone to insert into waitlist (public access needed for landing page)
create policy "Anyone can insert into waitlist." on waitlist
  for insert with check (true);
