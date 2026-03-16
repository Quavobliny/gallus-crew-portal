# Gallus Crew Portal

Deploy-ready Next.js starter for Machakos University Gallus Crew.

## Included
- Public home, about, and login pages
- Private dashboard pages for members, meetings, attendance, activities, contributions, and profile
- Supabase-ready environment setup
- SQL schema with row-level security policies
- Branding for Gallus Crew
- Owner account reserved for Kelvin Muigai Maina

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase Auth + Database
- Vercel-ready structure

## Setup
1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Copy `.env.example` to `.env.local` and add your keys.
4. Run:
   - `npm install`
   - `npm run dev`
5. Deploy to Vercel.

## Production wiring still needed
This package is structured for deployment, but you still need to connect:
- Supabase auth forms to real sign-in/sign-up actions
- server-side data fetching instead of mock data
- file upload for the crew logo if you want the real image embedded in production

## Role model
- owner: full system access
- leadership: oversight and management
- secretary: attendance management
- treasurer: contribution management
- member: personal dashboard view
