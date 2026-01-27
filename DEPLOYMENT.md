# Deployment Guide

## Quick Deploy

Your portfolio is ready for deployment! Just push to GitHub and your images will work.

### Steps:

1. **Build the project** (already done):
   ```bash
   npm run build
   ```

2. **Commit all changes**:
   ```bash
   git add .
   git commit -m "Update portfolio with assets"
   git push
   ```

3. **Deploy to Vercel or Netlify**:
   - Images are in `public/assets/` folder
   - Build output is in `dist/` folder
   - Build command: `npm run build`
   - Output directory: `dist`

### Asset Locations:
- **Source**: `public/assets/` (contains your images)
- **Built**: `dist/assets/` (created after build)
- **Paths in code**: `/assets/filename.png` (works in production)

### All images included:
✅ personalportfolio.png
✅ CSEC ASTU.png
✅ NSDA.png
✅ ASTU MUSLIM STUDENT JEMEA MENTORSHIP.jpg
✅ ZemenayHackaton.jpg
✅ DATA ANNOTATION.jpg

Your portfolio will show all images after deployment! 🚀
