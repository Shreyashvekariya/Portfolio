# Quick Deploy Instructions

## ⚠️ Repository Not Found Error

The deployment failed because the GitHub repository doesn't exist yet.

---

## 🔧 Fix: Create GitHub Repository First

### Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. **Repository name:** `Portfolio` (or any name you prefer)
3. **Description:** "My Portfolio Website"
4. **Visibility:** Public
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **Create repository**

### Step 2: Initialize Git and Push

Open terminal in `portfolio-react` folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Add remote (replace with YOUR GitHub username)
git remote add origin https://github.com/Shreyashvekariya/Portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 🎯 Alternative: Quick Setup Commands

Copy and paste these commands one by one:

```bash
# 1. Initialize git
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial portfolio commit"

# 4. Add remote (UPDATE THIS WITH YOUR REPO URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 5. Push to main branch
git branch -M main
git push -u origin main

# 6. Deploy to GitHub Pages
npm run deploy
```

---

## 📝 Update package.json

If you use a different repository name, update `package.json`:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"
}
```

And `vite.config.js`:

```javascript
export default defineConfig({
  base: "/YOUR_REPO_NAME",
})
```

---

## ✅ After Successful Deployment

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `gh-pages` branch
4. Click **Save**
5. Wait 2-3 minutes
6. Visit: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/

---

## 🆘 Still Having Issues?

### Check if git is initialized:
```bash
git status
```

### Check remote URL:
```bash
git remote -v
```

### Remove wrong remote and add correct one:
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

---

## 📞 Need Help?

1. Make sure you're logged into GitHub
2. Verify repository exists at the URL
3. Check you have push access to the repository
4. Ensure repository name matches in package.json

---

**Current Configuration:**
- Repository: https://github.com/Shreyashvekariya/Portfolio
- Live URL: https://shreyashvekariya.github.io/Portfolio/
