# 🚀 GitHub Pages Deployment Guide

This guide will walk you through deploying your stunning glassmorphism portfolio to GitHub Pages.

## 📋 Prerequisites

- A GitHub account
- Git installed on your computer
- Your portfolio files ready

## 🎯 Step-by-Step Deployment

### Option 1: Using GitHub Username Repository (Recommended)

This will make your portfolio available at `https://yourusername.github.io`

#### 1. Create a New Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository: `yourusername.github.io` 
   - Replace `yourusername` with your actual GitHub username
   - ⚠️ It MUST match exactly with your username
5. Make it **Public**
6. Don't initialize with README, .gitignore, or license
7. Click **"Create repository"**

#### 2. Prepare Your Project Files

In your project directory, you need to configure it for GitHub Pages. Create a new file called `vite.config.ts` (if it doesn't exist) with:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // For username.github.io repository
})
```

#### 3. Build Your Project

Open your terminal in the project directory and run:

```bash
npm install
npm run build
```

This creates a `dist` folder with your production-ready files.

#### 4. Deploy to GitHub

There are two ways to deploy:

**Method A: Using Git Commands (Terminal)**

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Method B: Using GitHub Desktop**

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. File → Add Local Repository → Select your project folder
4. If prompted to create a repository, click "Create Repository"
5. Add a summary (e.g., "Portfolio website")
6. Click "Commit to main"
7. Click "Publish repository"
8. Make sure "Keep this code private" is unchecked
9. Click "Publish repository"

#### 5. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **"Deploy from a branch"**
   - Branch: Select **"main"** and **"/root"** or **"/dist"**
   - Click **Save**

#### 6. Wait for Deployment

- GitHub will automatically build and deploy your site
- This usually takes 1-5 minutes
- Visit `https://yourusername.github.io` to see your portfolio! 🎉

### Option 2: Using Project Repository

If you want to use a custom repository name, your site will be at `https://yourusername.github.io/repository-name`

#### Modify vite.config.ts:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/repository-name/', // Replace with your repo name
})
```

Then follow the same steps as Option 1, but name your repository whatever you like (e.g., `portfolio`, `my-website`, etc.)

## 🛠️ Using GitHub Actions for Automatic Deployment

For automatic deployment whenever you push changes:

1. Create a file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

2. In GitHub Settings → Pages:
   - Source: Select **"GitHub Actions"**

Now every time you push to main, your site will automatically rebuild and deploy!

## 🎨 Customization Tips

### Update Personal Information

Make sure to update all personal information in the components:
- Email addresses
- Phone numbers
- Social media links
- Project links
- Education details
- Work experience

### Custom Domain (Optional)

Want to use your own domain like `www.yourname.com`?

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your repository, create a file named `CNAME` with your domain:
   ```
   www.yourname.com
   ```
3. In your domain registrar's DNS settings, add:
   - Type: `A` Record, Value: `185.199.108.153`
   - Type: `A` Record, Value: `185.199.109.153`
   - Type: `A` Record, Value: `185.199.110.153`
   - Type: `A` Record, Value: `185.199.111.153`
   - Type: `CNAME`, Name: `www`, Value: `yourusername.github.io`

4. In GitHub Settings → Pages → Custom domain, enter your domain

## 🔧 Troubleshooting

### Site Not Loading?

- Wait 5-10 minutes after first deployment
- Clear your browser cache (Ctrl/Cmd + Shift + R)
- Check GitHub Actions tab for build errors
- Ensure base path in vite.config.ts is correct

### 404 Error?

- Check that your repository name matches exactly
- Verify the base path in vite.config.ts
- Make sure GitHub Pages is enabled in Settings

### Styling Looks Broken?

- Verify all asset paths are relative
- Check that base path is set correctly
- Rebuild with `npm run build`

### Changes Not Showing?

- Make sure you pushed your changes: `git push origin main`
- Wait for GitHub Actions to complete
- Hard refresh your browser

## 📱 Testing Locally

Before deploying, test your build locally:

```bash
npm run build
npm run preview
```

Visit the local URL to ensure everything works.

## 🎯 Next Steps

After deployment:

1. ✅ Test all links and navigation
2. ✅ Test on mobile devices
3. ✅ Share your portfolio link on social media
4. ✅ Add the link to your resume
5. ✅ Update regularly with new projects

## 📞 Need Help?

If you encounter issues:
- Check [GitHub Pages documentation](https://docs.github.com/en/pages)
- Review [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
- Search [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)

---

**Congratulations! 🎉** Your stunning portfolio is now live on the internet!

Share it with the world:
- Add it to your LinkedIn profile
- Include it in your resume
- Share on social media
- Add it to your GitHub profile README

Good luck with your job search and networking! 🚀
