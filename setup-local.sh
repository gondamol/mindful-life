#!/bin/bash

# Ubuntu Wisdom Academy - Local Setup Script
# This script helps you set up your local development environment

echo "🚀 Ubuntu Wisdom Academy - Local Setup"
echo "========================================"
echo ""

# Check if .env.local exists
if [ -f .env.local ]; then
    echo "⚠️  .env.local already exists!"
    read -p "Do you want to overwrite it? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Setup cancelled"
        exit 1
    fi
fi

# Copy template
echo "📝 Creating .env.local from template..."
cp env.template .env.local

echo "✅ .env.local created!"
echo ""
echo "📋 Now you need to fill in your values:"
echo ""
echo "1️⃣  SUPABASE Setup:"
echo "   - Go to https://supabase.com"
echo "   - Create new project"
echo "   - Get URL and keys from Settings → API"
echo ""
echo "2️⃣  Edit .env.local and add:"
echo "   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co"
echo "   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ..."
echo "   SUPABASE_SERVICE_ROLE_KEY=eyJ..."
echo ""
echo "3️⃣  Load database schema:"
echo "   - In Supabase: SQL Editor → New Query"
echo "   - Copy contents of: supabase/schema.sql"
echo "   - Paste and Run"
echo ""
echo "4️⃣  Test locally:"
echo "   npm install"
echo "   npm run dev"
echo ""
echo "📖 Full guide: See DEPLOYMENT_GUIDE.md"
echo ""
read -p "Press Enter to open .env.local in editor..."

# Try to open in default editor
if command -v code &> /dev/null; then
    code .env.local
elif command -v nano &> /dev/null; then
    nano .env.local
elif command -v vim &> /dev/null; then
    vim .env.local
else
    echo "Please edit .env.local manually with your preferred editor"
fi

echo ""
echo "✨ Setup complete! Follow the guide in DEPLOYMENT_GUIDE.md"
