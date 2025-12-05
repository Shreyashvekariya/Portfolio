# Deployment Guide

## 🚀 Deploy to GitHub Pages

Your portfolio is configured to deploy to GitHub Pages automatically.

---

## 📋 Prerequisites

1. **GitHub Account** - Create one at https://github.com
2. **Git Installed** - Download from https://git-scm.com
3. **Node.js Installed** - Already have it ✅
4. **gh-pages Package** - Already installed ✅

---

## 🔧 Initial Setup

### 1. Create GitHub Repository

```bash
# Navigate to your project
cd portfolio-react

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit"

# Create repository on GitHub (via website)
# Then connect it:
git remote add origin https://github.com/shreyashvekariya/Portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

---

## 🚀 Deploy Commands

### Deploy to GitHub Pages
```bash
npm run deploy
```

This command will:
1. Build your project (`npm run build`)
2. Deploy to `gh-pages` branch
3. Make it live at: https://shreyashvekariya.github.io/Portfolio/

### Build Only (without deploying)
```bash
npm run build
```

### Preview Build Locally
```bash
npm run preview
```

---

## 📝 Deployment Workflow

### First Time Deployment
```bash
# 1. Make sure all changes are committed
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. Deploy to GitHub Pages
npm run deploy
```

### Subsequent Deployments
```bash
# 1. Make your changes
# 2. Test locally
npm run dev

# 3. Commit changes
git add .
git commit -m "Update portfolio"
git push origin main

# 4. Deploy
npm run deploy
```

---

## 🔗 Your Live URLs

- **Live Site:** https://shreyashvekariya.github.io/Portfolio/
- **Repository:** https://github.com/shreyashvekariya/Portfolio
- **Source Branch:** `main`
- **Deployment Branch:** `gh-pages`

---

## ⚙️ Configuration Files

### package.json
```json
{
  "homepage": "https://shreyashvekariya.github.io/Portfolio/",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### vite.config.js
```javascript
export default defineConfig({
  base: "/Portfolio",
})
```

---

## 🐛 Troubleshooting

### Issue: 404 Error After Deployment
**Solution:** 
- Check if `gh-pages` branch exists
- Verify GitHub Pages is enabled in settings
- Wait 2-3 minutes for deployment to complete

### Issue: Blank Page
**Solution:**
- Check `base` path in `vite.config.js`
- Ensure it matches your repository name
- Clear browser cache

### Issue: Images Not Loading
**Solution:**
- Use relative paths: `/images/photo.jpg`
- Check images are in `public/images/` folder
- Verify image names match exactly (case-sensitive)

### Issue: CSS Not Applied
**Solution:**
- Run `npm run build` before deploying
- Check browser console for errors
- Clear cache and hard refresh (Ctrl+F5)

### Issue: Deploy Command Fails
**Solution:**
```bash
# Remove node_modules and reinstall
rm -rf node_modules
npm install

# Try deploying again
npm run deploy
```

---

## 🔄 Update Deployment

### To Update Your Live Site:

1. **Make Changes** to your code
2. **Test Locally:**
   ```bash
   npm run dev
   ```
3. **Commit Changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
4. **Deploy:**
   ```bash
   npm run deploy
   ```
5. **Wait 2-3 minutes** for changes to appear

---

## 📊 Deployment Checklist

Before deploying, ensure:

- [ ] All changes are committed to git
- [ ] Code runs without errors locally
- [ ] Images are optimized and in correct folder
- [ ] Links are working (test locally)
- [ ] Mobile responsiveness checked
- [ ] Browser compatibility tested
- [ ] No console errors
- [ ] All content is updated
- [ ] Resume link is current
- [ ] Social media links are correct

---

## 🌐 Alternative Deployment Options

### Vercel (Recommended Alternative)
1. Go to https://vercel.com
2. Import your GitHub repository
3. Deploy automatically on every push

**Advantages:**
- Automatic deployments
- Better performance
- Custom domains easy
- Preview deployments

### Netlify
1. Go to https://netlify.com
2. Drag and drop `dist` folder
3. Or connect GitHub repository

**Advantages:**
- Simple drag-and-drop
- Form handling
- Serverless functions

### Custom Domain Setup

#### For GitHub Pages:
1. Buy domain (e.g., from Namecheap, GoDaddy)
2. Add `CNAME` file to `public/` folder with your domain
3. Configure DNS settings:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   ```
4. Update `homepage` in package.json

---

## 📈 Post-Deployment

### Monitor Your Site
- Check Google Analytics (if added)
- Monitor page load times
- Check for broken links
- Review mobile performance

### SEO Optimization
- Submit sitemap to Google Search Console
- Add meta descriptions
- Optimize images
- Add structured data

### Maintenance
- Update content regularly
- Keep dependencies updated
- Monitor security alerts
- Backup your code

---

## 🆘 Need Help?

### Resources
- **GitHub Pages Docs:** https://pages.github.com
- **Vite Deployment:** https://vitejs.dev/guide/static-deploy.html
- **gh-pages Package:** https://github.com/tschaub/gh-pages

### Common Commands
```bash
# Check git status
git status

# View deployment history
git log --oneline

# Check remote URL
git remote -v

# Force deploy (if needed)
npm run deploy -- -f
```

---

## ✅ Success Indicators

Your deployment is successful when:
- ✅ Site loads at your GitHub Pages URL
- ✅ All images display correctly
- ✅ Navigation works smoothly
- ✅ Links open properly
- ✅ Mobile view looks good
- ✅ No console errors

---

**Deployment URL:** https://shreyashvekariya.github.io/Portfolio/

**Last Updated:** December 2024
