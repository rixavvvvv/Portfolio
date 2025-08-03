# Portfolio Deployment Guide

This guide will walk you through deploying your React portfolio to various platforms.

## Option 1: GitHub Pages (Recommended - Free)

### Prerequisites
- GitHub account
- Git installed on your computer

### Steps:

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `portfolio` (or whatever you prefer)
   - Make it public

2. **Update the homepage URL**
   - In `package.json`, replace `yourusername` with your actual GitHub username:
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```

3. **Initialize Git and push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

4. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select "gh-pages" branch and "/(root)" folder
   - Click Save

6. **Your site will be available at**: `https://yourusername.github.io/portfolio`

---

## Option 2: Netlify (Free - Drag & Drop)

### Steps:

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Sign up/Login with GitHub
   - Drag and drop your `build` folder to the deployment area
   - Your site will be live instantly!

3. **Custom Domain (Optional)**
   - In Netlify dashboard, go to Site settings → Domain management
   - Add your custom domain

---

## Option 3: Vercel (Free - Recommended for React)

### Steps:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Your site will be deployed automatically

3. **For future updates**
   ```bash
   vercel --prod
   ```

---

## Option 4: Firebase Hosting (Free)

### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select your project or create a new one
   - Set public directory to `build`
   - Configure as single-page app: Yes
   - Don't overwrite index.html

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

## Option 5: AWS S3 + CloudFront (Paid but Professional)

### Steps:

1. **Create S3 Bucket**
   - Go to AWS S3 Console
   - Create a bucket with your domain name
   - Enable static website hosting

2. **Upload Files**
   ```bash
   npm run build
   aws s3 sync build/ s3://your-bucket-name
   ```

3. **Set up CloudFront** (for HTTPS and CDN)
   - Create CloudFront distribution
   - Point to your S3 bucket
   - Configure custom domain

---

## Important Notes

### For React Router (if you're using it):
If your app uses React Router, you'll need to handle client-side routing:

1. **For GitHub Pages**: Add a `404.html` file in the `public` folder
2. **For Netlify**: Create a `_redirects` file in the `public` folder with:
   ```
   /*    /index.html   200
   ```
3. **For Vercel**: Create a `vercel.json` file:
   ```json
   {
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```

### Environment Variables:
- Create a `.env` file for any API keys or configuration
- Add `.env` to your `.gitignore` file
- For production, set environment variables in your hosting platform

### Performance Optimization:
- Your app is already optimized with Create React App
- Consider adding a custom domain for professionalism
- Enable HTTPS (most platforms do this automatically)

---

## Quick Start Recommendation

For beginners, I recommend **GitHub Pages** or **Netlify**:
- Both are free
- Easy to set up
- Great for portfolios
- Automatic deployments from Git

Choose GitHub Pages if you want everything in one place, or Netlify if you want the easiest deployment process. 