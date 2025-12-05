# Portfolio Customization Guide

This guide will help you customize your portfolio website for future updates.

## 📁 Project Structure

```
portfolio-react/
├── src/
│   ├── components/     # All React components
│   ├── App.jsx        # Main app component
│   └── index.css      # Global styles
├── public/
│   └── images/        # Your images and assets
└── package.json       # Dependencies
```

---

## 🎨 Common Customizations

### 1. **Personal Information**

#### Hero Section (Home)
**File:** `src/components/Hero.jsx`
- **Line 15-16:** Change your name
  ```jsx
  <h1 className="name1">Shreyash</h1>
  <h1 className="name2">Vekariya</h1>
  ```
- **Line 19:** Update your bio/description
- **Line 24-25:** Update button links (Contact, Resume)

#### About Section
**File:** `src/components/About.jsx`
- **Line 66:** Update your name and description
- **Line 72:** Change resume download link

---

### 2. **Projects**

**File:** `src/components/Portfolio.jsx`
- **Lines 5-24:** Add/edit/remove projects
  ```jsx
  {
    title: 'Project Name',
    image: '/images/project.jpg',
    tags: ['Tech1', 'Tech2'],
    link: 'https://github.com/username/project'
  }
  ```
- **Line 38:** Update "Explore All" button link (GitHub profile)

---

### 3. **Skills**

**File:** `src/components/Skills.jsx`
- **Lines 200-380:** Add/remove skills with icons
  ```jsx
  {
    name: 'Skill Name',
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/..." alt="Skill" className="skill-icon" />
    )
  }
  ```
- Find more icons at: https://devicons.github.io/devicon/

---

### 4. **Certificates**

**File:** `src/components/Skills.jsx`
- **Lines 395-415:** Add/edit certificates
  ```jsx
  <CertificateCard
    title="Certificate Name"
    description="Description here"
    image="/images/certificate.jpg"
    link="https://certificate-link.com"
  />
  ```
- **Line 419:** Update certificates folder link

---

### 5. **Resume/Experience**

**File:** `src/components/Resume.jsx`

#### Education Section
- **Lines 8-28:** Update education entries
  ```jsx
  {
    degree: 'Degree Name',
    institution: 'University Name',
    year: '2020 - 2024',
    description: 'Description here'
  }
  ```

#### Experience Section
- **Lines 31-51:** Update work experience
  ```jsx
  {
    title: 'Job Title',
    company: 'Company Name',
    year: '2023 - Present',
    description: 'Job description'
  }
  ```

---

### 6. **Contact Information**

**File:** `src/components/Contact.jsx`
- **Line 8:** Update email address
- **Line 9:** Update phone number
- **Line 10:** Update location

#### Social Links
**File:** `src/components/SocialCard.jsx`
- **Lines 8-11:** Update social media links
  ```jsx
  { icon: <Instagram />, link: 'https://instagram.com/username' }
  ```

---

### 7. **Images**

**Folder:** `public/images/`

#### To Update Images:
1. Add new images to `public/images/`
2. Reference them in components as: `/images/your-image.jpg`

**Key Images:**
- Profile photo: `WhatsApp Image 2025-07-23 at 23.38.08_beee562f.jpg`
- Project images: `blinkit.jpeg`, `frndship.jpg`, etc.
- Certificate images: `IOT.jpeg`, `DAV.jpeg`, `GENai.jpeg`

---

## 🎨 Styling & Colors

### Color Scheme
**File:** `src/index.css`
- **Lines 6-12:** Update color variables
  ```css
  --bg-primary: #0F0F0F;        /* Dark background */
  --bg-secondary: #1A1A1A;      /* Slightly lighter */
  --text-primary: #E8E5E0;      /* Light text */
  --accent-warm: #D4A574;       /* Gold accent */
  ```

### Component-Specific Styles
Each component has its own CSS file:
- `Hero.css` - Home section styles
- `About.css` - About section styles
- `Portfolio.css` - Projects section styles
- `Skills.css` - Skills section styles
- `Resume.css` - Resume section styles
- `Contact.css` - Contact section styles

---

## 🔧 Advanced Customizations

### Navigation Menu
**File:** `src/components/Navigation.jsx`
- **Lines 20-25:** Add/remove menu items
  ```jsx
  <a href="#section-id">Menu Item</a>
  ```

### Font Styles
**File:** `src/components/Hero.css`
- **Lines 50-70:** Change name font (currently "Rochester")
- Update Google Fonts import in `index.html` if changing fonts

### Button Styles
**File:** `src/components/ExploreAllButton.jsx`
- **Lines 30-80:** Customize button appearance and hover effects

---

## 📱 Responsive Design

All sections are responsive. To adjust breakpoints:
- Look for `@media` queries in CSS files
- Common breakpoints: 768px (tablet), 480px (mobile)

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Hosting
1. **Vercel/Netlify:** Connect your GitHub repo
2. **GitHub Pages:** Use `gh-pages` package
3. **Custom Server:** Upload `dist` folder

---

## 📝 Quick Reference

| What to Change | File Location |
|----------------|---------------|
| Name & Bio | `Hero.jsx`, `About.jsx` |
| Projects | `Portfolio.jsx` |
| Skills | `Skills.jsx` (lines 200-380) |
| Certificates | `Skills.jsx` (lines 395-415) |
| Education/Experience | `Resume.jsx` |
| Contact Info | `Contact.jsx`, `SocialCard.jsx` |
| Colors | `index.css` (CSS variables) |
| Images | `public/images/` folder |
| Resume Link | `Hero.jsx`, `About.jsx` |

---

## 💡 Tips

1. **Always test locally** before deploying: `npm run dev`
2. **Optimize images** before adding them (use WebP format)
3. **Keep backups** of your original files
4. **Update links** when changing content
5. **Check mobile view** after making changes

---

## 🆘 Need Help?

- React Documentation: https://react.dev
- Vite Documentation: https://vitejs.dev
- DevIcons: https://devicons.github.io/devicon/
- CSS Tricks: https://css-tricks.com

---

**Last Updated:** December 2024
