# GitHub Pages Deployment Guide

This portfolio website is ready to be deployed on GitHub Pages. Follow these steps:

## Prerequisites
- A GitHub account
- Git installed on your computer
- Node.js installed (for building the project)

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
3. Make it public
4. Don't initialize with README, .gitignore, or license (since you already have the project)

## Step 2: Prepare Your Project

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to your `package.json` file:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Add the `base` property to your `vite.config.ts` or `vite.config.js`:
```javascript
export default {
  base: '/',  // If using yourusername.github.io
  // OR
  base: '/repository-name/',  // If using a project repository
}
```

## Step 3: Deploy to GitHub Pages

1. Initialize git (if not already done):
```bash
git init
```

2. Add all files:
```bash
git add .
```

3. Commit:
```bash
git commit -m "Initial commit - Portfolio website"
```

4. Add your GitHub repository as remote:
```bash
git remote add origin https://github.com/yourusername/yourusername.github.io.git
```

5. Push to GitHub:
```bash
git branch -M main
git push -u origin main
```

6. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "gh-pages" branch
5. Click "Save"

## Step 5: Access Your Site

Your portfolio will be available at:
- `https://yourusername.github.io` (if using username.github.io repo)
- `https://yourusername.github.io/repository-name` (if using a project repo)

It may take a few minutes for the site to be live after the first deployment.

## Updating Your Portfolio

Whenever you make changes to your portfolio:

1. Commit your changes:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

2. Deploy the updated version:
```bash
npm run deploy
```

## Features

✅ Glassmorphism design with stunning animations
✅ Dark mode toggle (persists across sessions)
✅ Fully responsive for all devices
✅ Smooth scrolling navigation
✅ SEO-friendly structure
✅ Fast loading times
✅ Professional sections: About, Experience, Education, Projects, Skills, Awards, Contact

## Customization

To customize your portfolio:

1. **Logo/Branding**: Currently set to "ASR" in `/components/Navigation.tsx`
2. **Content**: Update personal information in each component file
3. **Colors**: Modify Tailwind classes or the `styles/globals.css` file
4. **Images**: Replace placeholder images with your own

## Troubleshooting

### Site not loading:
- Ensure the gh-pages branch exists
- Check that GitHub Pages is enabled in repository settings
- Verify the base URL in vite.config

### Dark mode not working:
- Clear browser cache and localStorage
- Check browser console for any errors

### Styling issues:
- Run `npm run build` locally first to check for build errors
- Ensure all dependencies are installed with `npm install`

## Support

For issues or questions:
- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)

---

Built with ❤️ using React, Tailwind CSS, and Motion (Framer Motion)
