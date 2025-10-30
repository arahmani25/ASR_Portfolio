# 🚀 Quick Start - Deploy in 5 Minutes!

## Step 1: Create GitHub Repository (1 minute)

1. Go to https://github.com/new
2. Repository name: `yourusername.github.io` (use YOUR GitHub username!)
3. Make it **Public**
4. Click "Create repository"

## Step 2: Configure Your Project (1 minute)

Create a file called `vite.config.ts` in your project root (if it doesn't exist):

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

Create a file called `package.json` (if it doesn't exist):

```json
{
  "name": "portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "motion": "^10.18.0",
    "lucide-react": "latest",
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.1",
    "typescript": "^5.6.3"
  }
}
```

## Step 3: Build Your Site (1 minute)

Open terminal in your project folder:

```bash
npm install
npm run build
```

## Step 4: Push to GitHub (2 minutes)

### Option A: Using Terminal

```bash
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Option B: Using GitHub Desktop (Easier!)

1. Download GitHub Desktop: https://desktop.github.com/
2. File → Add Local Repository → Choose your folder
3. Write "Portfolio website" in description
4. Click "Commit to main"
5. Click "Publish repository"
6. Uncheck "Keep this code private"
7. Click "Publish"

## Step 5: Enable GitHub Pages (30 seconds)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** → **/root** → **Save**

## 🎉 Done!

Visit: `https://yourusername.github.io`

(Replace `yourusername` with your actual GitHub username)

⏰ **Note:** It may take 2-5 minutes for your site to go live the first time.

---

## 🔄 Update Your Portfolio Later

Whenever you make changes:

```bash
git add .
git commit -m "Updated portfolio"
git push
```

Wait 1-2 minutes and refresh your site!

---

## ⚠️ Troubleshooting

**Site not showing?**
- Wait 5 minutes
- Check Settings → Pages shows green checkmark
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**404 Error?**
- Make sure repository name is `yourusername.github.io`
- Check that base: '/' is set in vite.config.ts

**Need help?**
- Read DEPLOYMENT_GUIDE.md for detailed instructions
- Check: https://docs.github.com/en/pages

---

## 📞 Quick Links

- **Full Guide:** See DEPLOYMENT_GUIDE.md
- **GitHub Pages Docs:** https://pages.github.com/
- **GitHub Desktop:** https://desktop.github.com/

**Good luck! 🚀**
