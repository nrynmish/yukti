const fs = require('fs');
const path = require('path');

async function main() {
  console.log('🔧 SEWA DTU Supabase Setup Helper\n');

  // Check if .env has real values
  require('dotenv').config();
  const hasUrl = !!process.env.SUPABASE_URL && !process.env.SUPABASE_URL.includes('your_supabase_url');
  const hasAnonKey = !!process.env.SUPABASE_ANON_KEY && !process.env.SUPABASE_ANON_KEY.includes('your_supabase_anon_key');
  const hasServiceKey = !!process.env.SUPABASE_SERVICE_ROLE_KEY && !process.env.SUPABASE_SERVICE_ROLE_KEY.includes('your_supabase_service_role_key');

  if (!hasUrl || !hasAnonKey || !hasServiceKey) {
    console.log('❌ Please update your .env file with actual Supabase credentials:');
    console.log('   SUPABASE_URL=https://your-project.supabase.co');
    console.log('   SUPABASE_ANON_KEY=your-anon-key');
    console.log('   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key\n');
    return;
  }

  console.log('✅ Environment variables look configured.');

  // Show SQL file location
  const sqlPath = path.join(__dirname, 'supabase-setup.sql');
  console.log(`\n📄 SQL setup file: ${sqlPath}`);
  console.log('   Copy the contents above and run them in your Supabase SQL editor:');
  console.log('   https://supabase.com/dashboard/project/_/sql\n');

  // Try to read and display the SQL
  try {
    const sql = fs.readFileSync(sqlPath, 'utf8');
    console.log('📜 SQL to run:\n');
    console.log(sql);

    console.log('\n📝 Next steps:');
    console.log('1. Run the SQL above in your Supabase SQL editor');
    console.log('2. Ensure your DATABASE_URL in .env points to your Supabase PostgreSQL database');
    console.log('3. Run: npx prisma migrate dev --name init (to apply Prisma migrations)');
    console.log('4. Run: npx prisma generate (to generate Prisma client)');
  } catch (err) {
    console.log('⚠️  Could not read SQL file:', err.message);
  }
}

main().catch(err => {
  console.error('❌ Setup script error:', err);
  process.exit(1);
});