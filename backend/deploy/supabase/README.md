# Supabase Deployment Instructions

This directory contains files to help deploy the SEWA 2026 backend to Supabase.

## Files

- `supabase-setup.sql`: SQL schema for the users table
- `setup-supabase.js`: Helper script to guide through the setup process

## Deployment Steps

1. **Create a Supabase project** at [supabase.com](https://supabase.com)

2. **Configure environment variables** in your backend's `.env` file:
   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   
   # Also set your DATABASE_URL to point to Supabase:
   DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-ID].supabase.co:5432/postgres
   ```

3. **Run the SQL schema** in Supabase:
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Copy and paste the contents of `supabase-setup.sql`
   - Run the query

4. **Apply Prisma migrations**:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. **Deploy your backend** (to Vercel, Netlify, or your preferred platform)

## Notes

- The SEWA 2026 backend uses Prisma ORM, which works with Supabase since Supabase is PostgreSQL-based.
- The `supabase-setup.sql` creates the basic users table that matches what Prisma expects.
- After running the SQL, you'll need to run Prisma migrations to create the full schema (including OTP verifications, teams, etc.).
- For production, consider using `npx prisma migrate deploy` instead of `migrate dev`.

## Alternative Approach

You can also let Prisma handle the entire database setup:
1. Just set your `DATABASE_URL` to point to Supabase
2. Run `npx prisma migrate dev --name init`
3. Prisma will create all necessary tables automatically

The SQL file is provided for those who prefer to manage the schema directly in Supabase or need to initialize the database before running Prisma migrations.