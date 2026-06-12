# 📚 StudyPal AI

Your AI-powered personal study assistant for students.

## Features
- 📝 **Notepad** — type or use voice input
- 🤖 **AI Adviser** — personal study coach
- ✨ **Improve Notes** — expand, summarize, exam questions, flashcards
- 📅 **Schedule Planner** — weekly planner + AI schedule generator
- 🎙️ **Recorder** — record lectures + live transcript + AI summary

---

## 🚀 Getting Live in 4 Steps

### Step 1 — Get your Anthropic API key
1. Go to https://console.anthropic.com
2. Sign up / log in
3. Click **API Keys** → **Create Key**
4. Copy the key (starts with `sk-ant-...`)

### Step 2 — Set up the project locally
```bash
# Install dependencies
npm install

# Create your environment file
cp .env.local.example .env.local

# Open .env.local and paste your API key:
# ANTHROPIC_API_KEY=sk-ant-your-key-here

# Run the app locally
npm run dev
```
Open http://localhost:3000 — you should see StudyPal running!

### Step 3 — Push to GitHub
```bash
# One-time setup
git init
git add .
git commit -m "Initial StudyPal commit"

# Create a repo at github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/studypal-ai.git
git push -u origin main
```

### Step 4 — Deploy to Vercel (free hosting)
1. Go to https://vercel.com and sign up with GitHub
2. Click **Add New Project** → import your `studypal-ai` repo
3. In **Environment Variables**, add:
   - Key: `ANTHROPIC_API_KEY`
   - Value: your API key from Step 1
4. Click **Deploy**

✅ You'll get a live URL like `studypal-ai.vercel.app` — share it with anyone!

---

## 💰 Making Money

### Option 1: Charge students directly
- Add Stripe payments (https://stripe.com)
- Free tier: 20 AI requests/month
- Pro tier: $5/month unlimited

### Option 2: Sell to universities
- Pitch to student affairs departments
- $500–2000/month per institution

### Resources
- Stripe Next.js guide: https://stripe.com/docs/stripe-js/react
- NextAuth for user accounts: https://next-auth.js.org

---

## 🛠 Tech Stack
- **Next.js 14** — React framework
- **TypeScript** — type safety
- **Tailwind CSS** — styling
- **Anthropic Claude** — AI features
- **Vercel** — hosting (free tier)

## 📁 Project Structure
```
src/
  app/
    api/chat/route.ts     ← AI endpoint (API key stays safe here)
    page.tsx              ← Main page
    layout.tsx            ← HTML shell
    globals.css           ← Global styles
  components/
    AppShell.tsx          ← Navigation + layout
    tabs/
      HomeTab.tsx
      NotepadTab.tsx
      AdvisorTab.tsx
      ImproveTab.tsx
      ScheduleTab.tsx
      RecorderTab.tsx
  lib/
    ai.ts                 ← Shared AI helper
```
