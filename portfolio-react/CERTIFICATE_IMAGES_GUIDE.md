# Certificate Images Guide

## Where to Add Certificate Images

Add your certificate images to the following location:

```
portfolio-react/public/images/
```

## Image Names

The certificate cards are currently configured to use these image paths:
- `certificate1.jpg`
- `certificate2.jpg`
- `certificate3.jpg`

## Steps to Add Your Certificates:

1. **Navigate to the images folder:**
   ```
   portfolio-react/public/images/
   ```

2. **Add your certificate images** with these names:
   - `certificate1.jpg` (or .png)
   - `certificate2.jpg` (or .png)
   - `certificate3.jpg` (or .png)

3. **Update the Skills.jsx file** if you want to:
   - Change the certificate titles
   - Update the issuer names
   - Modify the descriptions
   - Add more certificates

## Recommended Image Specifications:

- **Format:** JPG or PNG
- **Dimensions:** 800x600px or similar aspect ratio (4:3)
- **File Size:** Under 500KB for optimal loading
- **Quality:** High resolution but compressed

## Example Structure:

```
portfolio-react/
├── public/
│   └── images/
│       ├── certificate1.jpg  ← Add your first certificate here
│       ├── certificate2.jpg  ← Add your second certificate here
│       ├── certificate3.jpg  ← Add your third certificate here
│       ├── IMG_7112 (1).jpg (existing)
│       └── WhatsApp Image 2025-07-23... (existing)
```

## To Add More Certificates:

Edit `portfolio-react/src/components/Skills.jsx` and add more `<CertificateCard>` components:

```jsx
<CertificateCard
  title="Your Certificate Title"
  issuer="Issuing Organization"
  description="Brief description"
  image="/images/certificate4.jpg"
/>
```

## Color Scheme:

The certificate cards use your website's color scheme:
- **Background:** Dark (#0F0F0F)
- **Border:** Gold (#D4A574)
- **Hover Gradient:** Gold gradient (#D4A574 to #B8956A)
- **Text on Hover:** Dark (#0F0F0F)
