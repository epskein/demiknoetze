# GitHub Pages Deployment Guide

This project is configured for static site deployment to GitHub Pages using Next.js static export.

## Quick Setup

### 1. Repository Configuration

The site is currently configured with `basePath: '/code'` in `next.config.mjs`. **You must update this to match your GitHub repository name.**

**Update the basePath:**
- Open `next.config.mjs`
- Change `/code` to match your repository name
- For example, if your repo is `github.com/username/portfolio`, change it to `'/portfolio'`
- If deploying to a custom domain or `username.github.io`, remove the basePath and assetPrefix lines

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 3. Deploy

Simply push your changes to the `main` branch:

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

The GitHub Actions workflow will automatically:
- Build your Next.js site
- Export it as static HTML
- Deploy it to GitHub Pages

### 4. Access Your Site

Your site will be available at:
- `https://your-username.github.io/your-repo-name/`

Or if using a custom domain:
- Configure your custom domain in GitHub Pages settings
- Remove the basePath from `next.config.mjs`

## Local Development

For local development, run:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`

## Build Locally

To test the production build locally:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## Troubleshooting

### Assets not loading
- Verify the basePath matches your repository name exactly
- Check that all asset paths start with `/` or use relative paths

### Pages showing 404
- Ensure GitHub Pages is set to use **GitHub Actions** as the source
- Check the workflow ran successfully in the Actions tab

### Build fails
- Check the Actions tab for detailed error logs
- Ensure all dependencies are listed in `package.json`
- Verify Node version compatibility (workflow uses Node 20)

## What's Included

- ✅ Static export configuration
- ✅ GitHub Actions workflow for automated deployment
- ✅ Image optimization disabled (required for static export)
- ✅ All dynamic routes pre-generated
- ✅ `.nojekyll` file to prevent Jekyll processing

## Files Modified

- `next.config.mjs` - Added static export configuration
- `.github/workflows/deploy.yml` - Deployment automation
- `public/.nojekyll` - Disables Jekyll processing
- `app/projects/[id]/page.tsx` - Added generateStaticParams for dynamic routes

